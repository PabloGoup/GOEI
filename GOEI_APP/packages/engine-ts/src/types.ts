/**
 * Tipos del contrato GOEI v0.1 (solo tiempo de compilación).
 *
 * Espejan los esquemas de `contracts/v0.1/*.json`. Se consumen conceptualmente:
 * el motor valida la semántica en tiempo de ejecución y no confía en el tipo.
 */

export type Gate = "VERDE" | "ROJO" | "NO_VERIFICABLE";
export type CriterionStatus = "EVALUABLE" | "NO_APLICA" | "NO_VERIFICABLE";
export type AssessmentKind =
  | "DECLARED_PREASSESSMENT"
  | "SYNTHETIC_DEMONSTRATION"
  | "VERIFIED_ASSESSMENT";
export type DataNature = "DECLARED" | "SYNTHETIC" | "REAL_AUTHORIZED";
export type EmissionStatus =
  | "PROVISIONAL_SCORE"
  | "ZERO_BY_RED_GATE"
  | "PARTIAL_PROFILE_NO_SCORE";
export type Band =
  | "CRITICO"
  | "VULNERABLE"
  | "FUNCIONAL_CON_BRECHAS"
  | "FORTALECIDO"
  | "SIN_BANDA";

export interface CriterionAssessment {
  criterionId: string;
  dimensionId: string;
  status: CriterionStatus;
  level: number | null;
  evidenceGrade: number;
  evidenceRefs: string[];
  justification: string;
  noApplyBasis?: string | null;
  barsVersion?: string | null;
  sourceEvaluatorId?: string | null;
}

export interface AssessmentInput {
  contractVersion: string;
  modelVersion: string;
  assessmentId: string;
  assessmentKind: AssessmentKind;
  establishment: {
    establishmentId: string;
    displayName?: string | null;
    country: string;
    serviceMode: string;
    unitOfAnalysis: string;
    dataNature: DataNature;
    mipymeClassification?: string;
  };
  period: { periodId: string; startDate: string; endDate: string };
  gate: {
    status: Gate;
    basis: string;
    protocolVersion: string | null;
    findingRefs?: string[];
  };
  criteria: CriterionAssessment[];
  evaluators?: Array<{ evaluatorId: string; role: string }>;
}

export interface DimensionOutput {
  dimensionId: string;
  calculable: boolean;
  score: number | null;
  displayScore: number | null;
  evaluableCriteria: number;
  reasons: string[];
}

export interface AssessmentTrace {
  calculatedAt: string;
  inputDigest: string;
  rules: string[];
  manualParityCaseId: string | null;
  excelParityCaseId: string | null;
}

export interface AssessmentOutput {
  contractVersion: string;
  modelVersion: string;
  assessmentId: string;
  emissionStatus: EmissionStatus;
  gate: Gate;
  dimensions: DimensionOutput[];
  baseScore: number | null;
  finalScore: number | null;
  displayFinalScore: number | null;
  band: Band;
  confidence: number | null;
  displayConfidence: number | null;
  coverage: number;
  displayCoverage: number;
  warnings: string[];
  trace: AssessmentTrace;
}

export interface ValidationResult {
  errors: string[];
  warnings: string[];
  valid: boolean;
}
