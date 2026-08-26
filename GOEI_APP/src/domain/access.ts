export const roles = [
  "platform_admin",
  "organization_admin",
  "methodology_supervisor",
  "evaluator",
  "establishment_representative",
  "observer"
] as const;

export type AppRole = (typeof roles)[number];

export const roleLabels: Record<AppRole, string> = {
  platform_admin: "Administrador de plataforma",
  organization_admin: "Administrador de organización",
  methodology_supervisor: "Supervisor metodológico",
  evaluator: "Evaluador",
  establishment_representative: "Representante del establecimiento",
  observer: "Observador"
};

export const permissions = {
  platform_admin: ["platform:configure", "organizations:manage"],
  organization_admin: ["members:manage", "establishments:manage", "reports:read"],
  methodology_supervisor: ["assessments:review", "discrepancies:resolve", "reports:read"],
  evaluator: ["assessments:write", "evidence:write", "assessments:submit"],
  establishment_representative: ["establishment:read", "evidence:contribute", "released_reports:read"],
  observer: ["authorized_content:read"]
} as const satisfies Record<AppRole, readonly string[]>;
