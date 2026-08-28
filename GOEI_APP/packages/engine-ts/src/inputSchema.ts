/** Esquema JSON runtime del contrato assessment-input v0.1. */
export const assessmentInputSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://goei.local/contracts/v0.1/assessment-input.schema.json",
  title: "GOEI Assessment Input v0.1",
  type: "object",
  additionalProperties: false,
  required: [
    "contractVersion", "modelVersion", "assessmentId", "assessmentKind",
    "establishment", "period", "gate", "criteria",
  ],
  properties: {
    contractVersion: { const: "0.1.0" },
    modelVersion: { const: "GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate" },
    assessmentId: { type: "string", minLength: 1 },
    assessmentKind: { enum: ["DECLARED_PREASSESSMENT", "SYNTHETIC_DEMONSTRATION", "VERIFIED_ASSESSMENT"] },
    establishment: {
      type: "object", additionalProperties: false,
      required: ["establishmentId", "country", "serviceMode", "unitOfAnalysis", "dataNature"],
      properties: {
        establishmentId: { type: "string", minLength: 1 },
        displayName: { type: ["string", "null"] },
        country: { const: "CL" },
        serviceMode: { const: "ON_PREMISE" },
        unitOfAnalysis: { const: "ESTABLISHMENT" },
        dataNature: { enum: ["DECLARED", "SYNTHETIC", "REAL_AUTHORIZED"] },
        mipymeClassification: { enum: ["MICRO", "SMALL", "MEDIUM", "UNDETERMINED"] },
      },
    },
    period: {
      type: "object", additionalProperties: false,
      required: ["periodId", "startDate", "endDate"],
      properties: {
        periodId: { type: "string", minLength: 1 },
        startDate: { type: "string", format: "date" },
        endDate: { type: "string", format: "date" },
      },
    },
    gate: {
      type: "object", additionalProperties: false,
      required: ["status", "basis", "protocolVersion"],
      properties: {
        status: { enum: ["VERDE", "ROJO", "NO_VERIFICABLE"] },
        basis: { type: "string" },
        protocolVersion: { type: ["string", "null"] },
        findingRefs: { type: "array", items: { type: "string" }, uniqueItems: true },
      },
    },
    criteria: {
      type: "array", minItems: 28, maxItems: 28,
      items: { $ref: "#/$defs/criterionAssessment" },
    },
    evaluators: {
      type: "array",
      items: {
        type: "object", additionalProperties: false, required: ["evaluatorId", "role"],
        properties: {
          evaluatorId: { type: "string" },
          role: { enum: ["SELF_REPORTED", "EVALUATOR", "REVIEWER", "SYNTHETIC_ORACLE"] },
        },
      },
    },
  },
  $defs: {
    criterionAssessment: {
      type: "object", additionalProperties: false,
      required: ["criterionId", "dimensionId", "status", "level", "evidenceGrade", "evidenceRefs", "justification"],
      properties: {
        criterionId: { type: "string", pattern: "^D[1-7]\\.[1-4]$" },
        dimensionId: { type: "string", pattern: "^D[1-7]$" },
        status: { enum: ["EVALUABLE", "NO_APLICA", "NO_VERIFICABLE"] },
        level: { type: ["integer", "null"], minimum: 0, maximum: 4 },
        evidenceGrade: { type: "integer", minimum: 0, maximum: 3 },
        evidenceRefs: { type: "array", items: { type: "string" }, uniqueItems: true },
        justification: { type: "string" },
        noApplyBasis: { type: ["string", "null"] },
        barsVersion: { type: ["string", "null"] },
        sourceEvaluatorId: { type: ["string", "null"] },
      },
      allOf: [
        {
          if: { properties: { status: { const: "EVALUABLE" } }, required: ["status"] },
          then: { properties: { level: { type: "integer", minimum: 0, maximum: 4 }, evidenceGrade: { type: "integer", minimum: 1, maximum: 3 } } },
        },
        {
          if: { properties: { status: { enum: ["NO_APLICA", "NO_VERIFICABLE"] } }, required: ["status"] },
          then: { properties: { level: { type: "null" } } },
        },
        {
          if: { properties: { status: { const: "NO_VERIFICABLE" } }, required: ["status"] },
          then: { properties: { evidenceGrade: { const: 0 } } },
        },
      ],
    },
  },
} as const;
