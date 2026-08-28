/**
 * Validación semántica del contrato v0.1.
 *
 * Puerto fiel de `validate_semantics` (reference_engine/goei_reference.py),
 * incluidos los mensajes de error en español, para poder afirmar paridad de
 * validación y no solo de cálculo. Complementa al JSON Schema: censa y verifica
 * unicidad de los 28 identificadores, coherencia criterionId↔dimensionId,
 * estados, evidencia, límite de NO_APLICA por dimensión, acople gate↔D1 y
 * compatibilidad assessmentKind↔dataNature.
 */
import { CONTRACT_VERSION, CRITERIA, DIMENSIONS, MODEL_VERSION } from "./constants.js";
import { Ajv2020, type ErrorObject } from "ajv/dist/2020.js";
import { assessmentInputSchema } from "./inputSchema.js";
import type { ValidationResult } from "./types.js";

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function isNonBoolInteger(v: unknown): v is number {
  return typeof v === "number" && Number.isInteger(v);
}

const ALLOWED_PAIRS: Record<string, string> = {
  DECLARED_PREASSESSMENT: "DECLARED",
  SYNTHETIC_DEMONSTRATION: "SYNTHETIC",
  VERIFIED_ASSESSMENT: "REAL_AUTHORIZED",
};

const ajv = new Ajv2020({ allErrors: true, strict: true });
ajv.addFormat("date", /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/u);
const validateInputSchema = ajv.compile(assessmentInputSchema);

function schemaError(error: ErrorObject): string {
  const location = error.instancePath || "/";
  return `schema ${location}: ${error.message ?? error.keyword}`;
}

export function validateSemantics(payload: unknown): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const schemaValid = validateInputSchema(payload);
  const schemaErrors = schemaValid
    ? []
    : (validateInputSchema.errors ?? []).map(schemaError);

  const p = isPlainObject(payload) ? payload : ({} as Record<string, unknown>);

  if (p["contractVersion"] !== CONTRACT_VERSION) {
    errors.push("contractVersion no corresponde a 0.1.0");
  }
  if (p["modelVersion"] !== MODEL_VERSION) {
    errors.push("modelVersion no corresponde al candidato implementado");
  }

  const rows = p["criteria"];
  if (!Array.isArray(rows)) {
    return { errors: ["criteria debe ser una lista"], warnings, valid: false };
  }

  const dictRows = rows.filter((row) => isPlainObject(row)) as Record<string, unknown>[];
  const ids = dictRows.map((row) => row["criterionId"] as string);

  const idSet = new Set(ids);
  const missing = CRITERIA.filter((c) => !idSet.has(c)).slice().sort();
  const extra = [...idSet].filter((id) => !CRITERIA.includes(id)).sort();
  const counts = new Map<string, number>();
  for (const id of ids) {
    counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  const duplicates = [...counts.entries()]
    .filter(([, c]) => c > 1)
    .map(([id]) => id)
    .sort();

  if (rows.length !== 28) {
    errors.push(`se requieren 28 criterios y se recibieron ${rows.length}`);
  }
  if (missing.length > 0) {
    errors.push(`criterios ausentes: ${missing.join(", ")}`);
  }
  if (extra.length > 0) {
    errors.push(`criterios desconocidos: ${extra.join(", ")}`);
  }
  if (duplicates.length > 0) {
    errors.push(`criterios duplicados: ${duplicates.join(", ")}`);
  }

  for (const row of rows) {
    if (!isPlainObject(row)) {
      errors.push("cada criterio debe ser un objeto");
      continue;
    }
    const criterionId = row["criterionId"];
    const expectedDimension =
      typeof criterionId === "string" && criterionId.includes(".")
        ? criterionId.split(".")[0]
        : null;
    if (row["dimensionId"] !== expectedDimension) {
      errors.push(`${String(criterionId)}: dimensionId no corresponde al identificador`);
    }
    const status = row["status"];
    const level = row["level"];
    const evidence = row["evidenceGrade"];
    if (status === "EVALUABLE") {
      if (!isNonBoolInteger(level) || level < 0 || level > 4) {
        errors.push(`${String(criterionId)}: EVALUABLE exige level entero 0–4`);
      }
      if (!isNonBoolInteger(evidence) || evidence < 1 || evidence > 3) {
        errors.push(`${String(criterionId)}: EVALUABLE exige evidencia 1–3`);
      }
    } else if (status === "NO_VERIFICABLE") {
      if (level !== null || evidence !== 0) {
        errors.push(`${String(criterionId)}: NO_VERIFICABLE exige level null y evidencia 0`);
      }
    } else if (status === "NO_APLICA") {
      if (level !== null) {
        errors.push(`${String(criterionId)}: NO_APLICA exige level null`);
      }
      if (!row["noApplyBasis"]) {
        errors.push(`${String(criterionId)}: NO_APLICA exige fundamento`);
      }
    } else {
      errors.push(`${String(criterionId)}: estado desconocido`);
    }
  }

  for (const dimension of DIMENSIONS) {
    const dimensionRows = dictRows.filter((row) => row["dimensionId"] === dimension);
    const noApply = dimensionRows.filter((row) => row["status"] === "NO_APLICA").length;
    if (noApply > 1) {
      errors.push(`${dimension}: más de un NO_APLICA`);
    }
  }

  const gateObj = isPlainObject(p["gate"]) ? (p["gate"] as Record<string, unknown>) : {};
  const gate = gateObj["status"];
  const d1Unverifiable = dictRows.some(
    (row) => row["dimensionId"] === "D1" && row["status"] === "NO_VERIFICABLE",
  );
  if (d1Unverifiable && gate !== "NO_VERIFICABLE") {
    errors.push("D1 contiene NO_VERIFICABLE y el gate no es NO_VERIFICABLE");
  }
  const findingRefs = gateObj["findingRefs"];
  if (gate === "ROJO" && !(Array.isArray(findingRefs) && findingRefs.length > 0)) {
    warnings.push(
      "gate ROJO sin referencias de hallazgo; el cálculo es posible pero la emisión no es auditable",
    );
  }

  const establishment = isPlainObject(p["establishment"])
    ? (p["establishment"] as Record<string, unknown>)
    : {};
  const nature = establishment["dataNature"];
  const kind = p["assessmentKind"];
  const expectedNature = typeof kind === "string" ? ALLOWED_PAIRS[kind] : undefined;
  if (expectedNature !== nature) {
    errors.push("assessmentKind y dataNature son incompatibles");
  }

  // Conserva los mensajes históricos del motor Python cuando una regla
  // semántica ya explica el rechazo. El esquema agrega cobertura estructural
  // (campos faltantes, tipos y propiedades extra) sin romper esa paridad.
  if (errors.length === 0) {
    errors.push(...schemaErrors);
  }
  return { errors, warnings, valid: errors.length === 0 };
}
