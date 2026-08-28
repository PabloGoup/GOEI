export const auditEventLabels: Record<string,string> = {
  "organization.created":"Organización creada",
  "establishment.created":"Establecimiento creado",
  "assessment.created":"Evaluación creada",
  "assessment.response_saved":"Respuesta actualizada",
  "assessment.calculated":"Lectura provisional ejecutada",
  "assessment.submitted":"Evaluación enviada",
  "assessment.review_started":"Revisión iniciada",
  "assessment.returned":"Evaluación devuelta",
  "assessment.closed":"Revisión cerrada",
  "evidence.uploaded":"Evidencia cargada",
  "evidence.accessed":"Evidencia consultada",
  "report.exported":"Reporte exportado"
};

const safeMetadataKeys = new Set(["synthetic","instrumentVersion","criterionId","status","fromStatus","toStatus","mimeType","sizeBytes","source","assessmentId","inputDigest","emissionStatus"]);

export function auditEventLabel(eventType:string) {
  return auditEventLabels[eventType] ?? "Evento operativo";
}

export function sanitizeAuditMetadata(metadata:unknown) {
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return {};
  return Object.fromEntries(Object.entries(metadata).filter(([key,value]) => safeMetadataKeys.has(key) && ["string","number","boolean"].includes(typeof value)));
}

export function auditCategory(eventType:string) {
  if (eventType.startsWith("assessment.")) return "assessment";
  if (eventType.startsWith("evidence.")) return "evidence";
  if (eventType.startsWith("establishment.")) return "establishment";
  if (eventType.startsWith("report.")) return "report";
  return "organization";
}
