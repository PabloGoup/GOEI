import {
  calculate,
  CONTRACT_VERSION,
  MODEL_VERSION,
  type AssessmentInput,
  type AssessmentOutput,
  type Gate,
} from "@goei/engine-ts";

export type EngineCriterionResponse = {
  criterionId: string;
  status: "PENDING" | "EVALUABLE" | "NO_APLICA" | "NO_VERIFICABLE";
  level: number | null;
  evidenceGrade: number;
  justification: string;
  noApplyBasis?: string | null;
  sourceEvaluatorId?: string | null;
};

export type EngineEvidenceReference = {
  criterionId: string | null;
  evidenceCode: string;
};

export type EngineAssessmentContext = {
  assessmentId: string;
  assessmentKind: string;
  establishmentId: string | null;
  establishmentName: string;
  periodStart: string | null;
  periodEnd: string | null;
  gate: { status: Gate; basis: string; protocolVersion: string | null } | null;
  responses: EngineCriterionResponse[];
  evidence: EngineEvidenceReference[];
};

export type EngineAdapterResult =
  | { ready: false; blockers: string[]; reviewedCriteria: number; totalCriteria: 28 }
  | { ready: true; blockers: []; reviewedCriteria: 28; totalCriteria: 28; input: AssessmentInput; output: AssessmentOutput };

const allowedKinds = ["DECLARED_PREASSESSMENT", "SYNTHETIC_DEMONSTRATION"] as const;

function normalizeAssessmentKind(kind: string): AssessmentInput["assessmentKind"] | null {
  if (kind === "Demostración sintética") return "SYNTHETIC_DEMONSTRATION";
  return allowedKinds.includes(kind as (typeof allowedKinds)[number])
    ? kind as AssessmentInput["assessmentKind"]
    : null;
}

export function evaluateWithCandidateEngine(context: EngineAssessmentContext, calculatedAt: string): EngineAdapterResult {
  const reviewedCriteria = context.responses.filter(item => item.status !== "PENDING").length;
  const assessmentKind = normalizeAssessmentKind(context.assessmentKind);
  const blockers: string[] = [];
  if (context.responses.length !== 28 || reviewedCriteria !== 28) blockers.push("Deben quedar revisados los 28 criterios.");
  if (!context.establishmentId) blockers.push("Falta identificar la unidad de análisis.");
  if (!context.periodStart || !context.periodEnd) blockers.push("Falta registrar el período de evaluación.");
  if (!context.gate) blockers.push("Falta registrar el gate crítico y su fundamento.");
  if (!assessmentKind) blockers.push("El motor candidato sólo admite expedientes declarados o sintéticos.");
  if (blockers.length > 0) return { ready:false, blockers, reviewedCriteria, totalCriteria:28 };

  const evidenceByCriterion = new Map<string,string[]>();
  for (const item of context.evidence) {
    if (!item.criterionId) continue;
    const current = evidenceByCriterion.get(item.criterionId) ?? [];
    current.push(item.evidenceCode);
    evidenceByCriterion.set(item.criterionId,current);
  }

  const input: AssessmentInput = {
    contractVersion: CONTRACT_VERSION,
    modelVersion: MODEL_VERSION,
    assessmentId: context.assessmentId,
    assessmentKind: assessmentKind as AssessmentInput["assessmentKind"],
    establishment: {
      establishmentId: context.establishmentId as string,
      displayName: context.establishmentName,
      country: "CL",
      serviceMode: "ON_PREMISE",
      unitOfAnalysis: "ESTABLISHMENT",
      dataNature: assessmentKind === "SYNTHETIC_DEMONSTRATION" ? "SYNTHETIC" : "DECLARED",
      mipymeClassification: "UNDETERMINED",
    },
    period: {
      periodId: `${context.periodStart}/${context.periodEnd}`,
      startDate: context.periodStart as string,
      endDate: context.periodEnd as string,
    },
    gate: {
      status: context.gate!.status,
      basis: context.gate!.basis,
      protocolVersion: context.gate!.protocolVersion,
      findingRefs: [],
    },
    criteria: context.responses.map(item => ({
      criterionId:item.criterionId,
      dimensionId:item.criterionId.split(".")[0],
      status:item.status as Exclude<EngineCriterionResponse["status"],"PENDING">,
      level:item.level,
      evidenceGrade:item.evidenceGrade,
      evidenceRefs:evidenceByCriterion.get(item.criterionId) ?? [],
      justification:item.justification,
      noApplyBasis:item.status === "NO_APLICA" ? (item.noApplyBasis ?? item.justification) : null,
      barsVersion:null,
      sourceEvaluatorId:item.sourceEvaluatorId ?? null,
    })),
  };

  return {ready:true,blockers:[],reviewedCriteria:28,totalCriteria:28,input,output:calculate(input,calculatedAt)};
}
