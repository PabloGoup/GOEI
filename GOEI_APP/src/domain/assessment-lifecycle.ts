import type { AppRole } from "@/domain/access";

export const assessmentStatuses = ["DRAFT","IN_PROGRESS","SUBMITTED","IN_REVIEW","RETURNED","CLOSED","CANCELLED"] as const;
export type AssessmentStatus = (typeof assessmentStatuses)[number];
export type AssessmentTransition = "SUBMIT" | "START_REVIEW" | "RETURN" | "CLOSE";

export const assessmentStatusLabels: Record<AssessmentStatus, string> = {
  DRAFT: "Borrador", IN_PROGRESS: "En aplicación", SUBMITTED: "Enviada",
  IN_REVIEW: "En revisión", RETURNED: "Devuelta", CLOSED: "Cerrada", CANCELLED: "Cancelada"
};

const transitionTargets: Record<AssessmentTransition, AssessmentStatus> = {
  SUBMIT: "SUBMITTED", START_REVIEW: "IN_REVIEW", RETURN: "RETURNED", CLOSE: "CLOSED"
};

export function availableTransitions(status: AssessmentStatus, role: AppRole, completed: number, total = 28) {
  const evaluator = role === "evaluator" || role === "organization_admin";
  const reviewer = role === "methodology_supervisor" || role === "organization_admin";
  const actions: AssessmentTransition[] = [];
  if (["DRAFT","IN_PROGRESS","RETURNED"].includes(status) && evaluator && completed === total) actions.push("SUBMIT");
  if (status === "SUBMITTED" && reviewer) actions.push("START_REVIEW");
  if (status === "IN_REVIEW" && reviewer) actions.push("RETURN", "CLOSE");
  return actions;
}

export function transitionTarget(action: AssessmentTransition) {
  return transitionTargets[action];
}

export function isAssessmentEditable(status: AssessmentStatus) {
  return status === "DRAFT" || status === "IN_PROGRESS" || status === "RETURNED";
}
