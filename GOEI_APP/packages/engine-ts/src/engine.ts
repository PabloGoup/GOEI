/**
 * Motor determinista GOEI v0.1.
 *
 * Puerto fiel de `calculate` (reference_engine/goei_reference.py). El orden de
 * los criterios no altera el resultado; evidencia y cobertura no mueven el
 * desempeño; el gate es no compensatorio; el 0–100 visible es presentación
 * derivada con ROUND_HALF_UP. La aritmética usa fracciones exactas (ver
 * rational.ts) para reproducir `decimal.Decimal` sin error binario.
 */
import { CONTRACT_VERSION, DIMENSIONS, MODEL_VERSION, RULE_IDS } from "./constants.js";
import { inputDigest } from "./digest.js";
import {
  addFrac,
  cmpInt,
  divInt,
  type Frac,
  fromInt,
  fromNumberViaString,
  roundHalfUp,
  toNumber,
} from "./rational.js";
import type {
  AssessmentInput,
  AssessmentOutput,
  Band,
  CriterionAssessment,
  DimensionOutput,
  EmissionStatus,
} from "./types.js";
import { validateSemantics } from "./validate.js";

/** Entrada incompatible con las reglas semánticas del contrato. */
export class ContractError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContractError";
  }
}

interface DimensionComputed extends DimensionOutput {
  scoreFrac: Frac | null;
}

export function calculate(payload: AssessmentInput, calculatedAt: string): AssessmentOutput {
  const validation = validateSemantics(payload);
  if (!validation.valid) {
    throw new ContractError(validation.errors.join("; "));
  }

  const criteria = payload.criteria;

  const dimensions: DimensionComputed[] = DIMENSIONS.map((dimension) => {
    const rows = criteria.filter((row) => row.dimensionId === dimension);
    const evaluable = rows.filter((row) => row.status === "EVALUABLE");
    const unverifiable = rows.filter((row) => row.status === "NO_VERIFICABLE");
    const noApply = rows.filter((row) => row.status === "NO_APLICA");

    const reasons: string[] = [];
    if (evaluable.length < 3) {
      reasons.push("MENOS_DE_TRES_EVALUABLES");
    }
    if (unverifiable.length > 0) {
      reasons.push("CONTIENE_NO_VERIFICABLE");
    }
    if (noApply.length > 1) {
      reasons.push("MAS_DE_UN_NO_APLICA");
    }
    const calculable = reasons.length === 0;

    let scoreFrac: Frac | null = null;
    if (calculable) {
      const sumLevels = evaluable.reduce((acc, row) => acc + (row.level as number), 0);
      // s_c = 25 × nivel; D_d = (Σ s_c) / |C_d| como fracción exacta.
      scoreFrac = divInt(fromInt(25 * sumLevels), BigInt(evaluable.length));
    }

    return {
      dimensionId: dimension,
      calculable,
      score: scoreFrac === null ? null : toNumber(scoreFrac),
      displayScore: scoreFrac === null ? null : roundHalfUp(scoreFrac),
      evaluableCriteria: evaluable.length,
      reasons,
      scoreFrac,
    };
  });

  const allDimensions = dimensions.every((item) => item.calculable);

  let baseScore: Frac | null = null;
  if (allDimensions) {
    // Global = media de las 7 dimensiones, reproduciendo el "ida y vuelta a
    // float" del motor Python: se re-parsea el double de cada dimensión.
    let acc = fromInt(0);
    for (const item of dimensions) {
      acc = addFrac(acc, fromNumberViaString(item.score as number));
    }
    baseScore = divInt(acc, 7n);
  }

  const gate = payload.gate.status;
  let emissionStatus: EmissionStatus;
  let finalScore: Frac | null;
  if (!allDimensions || gate === "NO_VERIFICABLE") {
    emissionStatus = "PARTIAL_PROFILE_NO_SCORE";
    finalScore = null;
  } else if (gate === "ROJO") {
    emissionStatus = "ZERO_BY_RED_GATE";
    finalScore = fromInt(0);
  } else {
    emissionStatus = "PROVISIONAL_SCORE";
    finalScore = baseScore;
  }

  let band: Band;
  if (finalScore === null) {
    band = "SIN_BANDA";
  } else if (cmpInt(finalScore, 25n) < 0) {
    band = "CRITICO";
  } else if (cmpInt(finalScore, 50n) < 0) {
    band = "VULNERABLE";
  } else if (cmpInt(finalScore, 75n) < 0) {
    band = "FUNCIONAL_CON_BRECHAS";
  } else {
    band = "FORTALECIDO";
  }

  const evaluated: CriterionAssessment[] = criteria.filter((row) => row.status === "EVALUABLE");
  let confidence: Frac | null = null;
  if (evaluated.length > 0) {
    const sumEvidence = evaluated.reduce((acc, row) => acc + row.evidenceGrade, 0);
    confidence = {
      n: BigInt(100 * sumEvidence),
      d: BigInt(3 * evaluated.length),
    };
  }
  const coverage: Frac = { n: BigInt(100 * evaluated.length), d: 28n };

  const warnings = [...validation.warnings];
  warnings.push("PROVISIONAL_NO_VALIDADO");
  if (payload.assessmentKind === "DECLARED_PREASSESSMENT") {
    warnings.push("RESPUESTAS_DECLARADAS_NO_VERIFICADAS");
  }
  if (payload.assessmentKind === "SYNTHETIC_DEMONSTRATION") {
    warnings.push("ESCENARIO_SINTETICO_NO_EMPIRICO");
  }

  const dimensionOutputs: DimensionOutput[] = dimensions.map((item) => ({
    dimensionId: item.dimensionId,
    calculable: item.calculable,
    score: item.score,
    displayScore: item.displayScore,
    evaluableCriteria: item.evaluableCriteria,
    reasons: item.reasons,
  }));

  return {
    contractVersion: CONTRACT_VERSION,
    modelVersion: MODEL_VERSION,
    assessmentId: payload.assessmentId,
    emissionStatus,
    gate,
    dimensions: dimensionOutputs,
    baseScore: baseScore === null ? null : toNumber(baseScore),
    finalScore: finalScore === null ? null : toNumber(finalScore),
    displayFinalScore: finalScore === null ? null : roundHalfUp(finalScore),
    band,
    confidence: confidence === null ? null : toNumber(confidence),
    displayConfidence: confidence === null ? null : roundHalfUp(confidence),
    coverage: toNumber(coverage),
    displayCoverage: roundHalfUp(coverage),
    warnings,
    trace: {
      calculatedAt,
      inputDigest: inputDigest(payload),
      rules: [...RULE_IDS],
      manualParityCaseId: null,
      excelParityCaseId: null,
    },
  };
}
