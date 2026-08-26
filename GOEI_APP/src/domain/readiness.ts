export const readinessStates = ["ready", "pending", "blocked", "attention"] as const;
export type ReadinessState = (typeof readinessStates)[number];

export type ReadinessCheck = {
  id: string;
  label: string;
  detail: string;
  state: ReadinessState;
};

export function readinessSummary(checks: ReadinessCheck[]) {
  return checks.reduce(
    (summary, check) => ({ ...summary, [check.state]: summary[check.state] + 1 }),
    { ready: 0, pending: 0, blocked: 0, attention: 0 },
  );
}

export const readinessStateLabels: Record<ReadinessState, string> = {
  ready: "Verificado",
  pending: "Pendiente",
  blocked: "Bloqueado correctamente",
  attention: "Requiere atención",
};
