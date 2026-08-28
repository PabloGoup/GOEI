/**
 * Punto de entrada público del motor GOEI v0.1 (TypeScript).
 *
 * No aprueba ciencia; reproduce técnicamente
 * `GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate` y el motor de referencia Python.
 */
export { calculate, ContractError } from "./engine.js";
export { validateSemantics } from "./validate.js";
export { inputDigest } from "./digest.js";
export { CONTRACT_VERSION, MODEL_VERSION, DIMENSIONS, CRITERIA, RULE_IDS } from "./constants.js";
export type {
  AssessmentInput,
  AssessmentOutput,
  CriterionAssessment,
  DimensionOutput,
  ValidationResult,
  Band,
  Gate,
  CriterionStatus,
  AssessmentKind,
  DataNature,
  EmissionStatus,
} from "./types.js";
