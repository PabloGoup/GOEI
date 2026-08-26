export const methodologyStatus = {
  modelId: "GOEI-MOD-SCORE-PILOT-0001",
  version: "0.1.0-candidate",
  label: "PROVISIONAL — NO VALIDADO",
  fieldCaptureAuthorized: false,
  scope: "Restaurante con servicio en sitio · MIPYME de Chile · establecimiento individual",
  blockedCriteria: ["C-016", "C-023"]
} as const;

export const dimensions = [
  { id: "D1", name: "Inocuidad y legalidad", progress: 75, tone: "critical" },
  { id: "D2", name: "Sostenibilidad económica", progress: 50, tone: "warning" },
  { id: "D3", name: "Procesos y productividad", progress: 62, tone: "info" },
  { id: "D4", name: "Servicio al cliente", progress: 44, tone: "warning" },
  { id: "D5", name: "Calidad del producto", progress: 68, tone: "success" },
  { id: "D6", name: "Personas y organización", progress: 38, tone: "warning" },
  { id: "D7", name: "Información y mejora", progress: 56, tone: "info" }
] as const;
