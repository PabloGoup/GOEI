import type { WorkspaceContext } from "@/server/auth/workspace-context";
import type { ReadinessCheck } from "@/domain/readiness";
import { createClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

export type ReadinessReport = {
  modeLabel: string;
  organizationLabel: string;
  checks: ReadinessCheck[];
};

export async function getReadinessReport(context: WorkspaceContext): Promise<ReadinessReport> {
  if (context.mode === "demo") {
    return {
      modeLabel: "Demostración sintética",
      organizationLabel: context.organizationName,
      checks: [
        { id: "mode", label: "Entorno demostrativo", detail: "La aplicación sólo utiliza casos sintéticos y no persiste información de negocios.", state: "ready" },
        { id: "supabase", label: "Conexión Supabase", detail: env.isSupabaseConfigured ? "Las credenciales públicas están configuradas, pero el modo conectado está desactivado." : "Las credenciales públicas todavía no están configuradas en este entorno.", state: "pending" },
        { id: "instrument", label: "Instrumento candidato", detail: "Snapshot explicativo de 7 dimensiones y 28 criterios disponible para demostración.", state: "ready" },
        { id: "evidence", label: "Evidencias privadas", detail: "La carga permanece deshabilitada en demostración para impedir el ingreso accidental de archivos reales.", state: "blocked" },
        { id: "engine", label: "Motor GOEI", detail: "Integración versionada reservada para Fase 3; no se calculan resultados en esta pantalla.", state: "pending" },
        { id: "capture", label: "Captura real", detail: "Bloqueada por gobernanza, privacidad, ética y autorización operativa pendientes.", state: "blocked" },
      ],
    };
  }

  const supabase = await createClient();
  if (!supabase) {
    return {
      modeLabel: "Conectado sin cliente disponible",
      organizationLabel: context.organizationName,
      checks: [{ id: "client", label: "Cliente Supabase", detail: "No fue posible crear el cliente de servidor con la configuración actual.", state: "attention" }],
    };
  }

  const [organizationResult, instrumentResult, assessmentsResult] = await Promise.all([
    supabase.from("organizations").select("id,status").eq("id", context.organizationId).maybeSingle(),
    supabase.from("instrument_versions").select("id,scientific_status").eq("instrument_code", "GOEI-INSTRUMENT-PILOT-28").eq("version", "0.1.0-candidate").maybeSingle(),
    supabase.from("assessments").select("id,field_capture_authorized").limit(50),
  ]);

  const organizationReady = Boolean(organizationResult.data && !organizationResult.error);
  const instrumentReady = Boolean(instrumentResult.data && !instrumentResult.error);
  const assessmentQueryReady = !assessmentsResult.error;
  const realCapturePresent = assessmentsResult.data?.some(item => item.field_capture_authorized) ?? false;

  return {
    modeLabel: "Supabase conectado",
    organizationLabel: context.organizationName,
    checks: [
      { id: "session", label: "Sesión autenticada", detail: `Identidad activa con rol ${context.roleLabel.toLowerCase()}.`, state: "ready" },
      { id: "organization", label: "Límite de organización", detail: organizationReady ? "La organización de la sesión es visible bajo sus políticas RLS." : "No fue posible verificar la organización autorizada.", state: organizationReady ? "ready" : "attention" },
      { id: "instrument", label: "Instrumento candidato", detail: instrumentReady ? "Versión 0.1.0-candidate disponible; su estado no implica ratificación científica." : "No se encontró el snapshot candidato requerido.", state: instrumentReady ? "ready" : "attention" },
      { id: "workflow", label: "Expedientes sintéticos", detail: assessmentQueryReady ? "La lectura autorizada de evaluaciones respondió bajo RLS." : "La consulta de evaluaciones fue rechazada o no está disponible.", state: assessmentQueryReady ? "ready" : "attention" },
      { id: "evidence", label: "Evidencias privadas", detail: "Bucket privado y URLs firmadas implementados; falta completar una carga y lectura sintética de extremo a extremo.", state: "pending" },
      { id: "engine", label: "Motor GOEI", detail: "Paquete candidato y adaptador integrados con 151 pruebas de paridad; la ejecución queda bloqueada mientras falten período y gate crítico explícitos.", state: "pending" },
      { id: "capture", label: "Captura real", detail: realCapturePresent ? "Se detectó al menos un expediente con autorización de campo; debe revisarse antes de continuar." : "No se detectaron expedientes visibles con captura de campo autorizada.", state: realCapturePresent ? "attention" : "blocked" },
    ],
  };
}
