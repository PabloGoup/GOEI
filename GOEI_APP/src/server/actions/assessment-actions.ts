"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { evaluateWithCandidateEngine } from "@/domain/engine-adapter";

const responseSchema = z.object({
  assessmentId: z.string().uuid(),
  criterionId: z.string().regex(/^D[1-7]\.[1-4]$/),
  dimensionId: z.string().regex(/^D[1-7]$/),
  status: z.enum(["PENDING","EVALUABLE","NO_APLICA","NO_VERIFICABLE"]),
  level: z.number().int().min(0).max(4).nullable(),
  evidenceGrade: z.number().int().min(0).max(3),
  justification: z.string().max(6000),
  noApplyBasis: z.string().max(3000).nullable()
}).superRefine((value,ctx) => {
  if (value.status === "EVALUABLE" && (value.level === null || value.evidenceGrade === 0)) ctx.addIssue({code:"custom",message:"Un criterio evaluable exige nivel y evidencia 1–3."});
  if (value.status === "NO_VERIFICABLE" && (value.level !== null || value.evidenceGrade !== 0)) ctx.addIssue({code:"custom",message:"No verificable exige nivel nulo y evidencia 0."});
  if (value.status === "NO_APLICA" && !value.noApplyBasis?.trim()) ctx.addIssue({code:"custom",message:"No aplica exige fundamento previo."});
});

export async function saveAssessmentResponse(input: unknown) {
  const parsed = responseSchema.safeParse(input);
  if (!parsed.success) return {ok:false,error:parsed.error.issues[0]?.message ?? "Respuesta inválida."};
  const supabase = await createClient();
  if (!supabase) return {ok:false,error:"Supabase no está configurado; el modo demostrativo guarda sólo en este navegador."};
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) return {ok:false,error:"Sesión no válida."};
  const { data: assessment } = await supabase.from("assessments").select("organization_id,assessment_kind,field_capture_authorized,status").eq("id",parsed.data.assessmentId).single();
  if (!assessment) return {ok:false,error:"Expediente no disponible."};
  if (assessment.assessment_kind === "VERIFIED_ASSESSMENT" && !assessment.field_capture_authorized) return {ok:false,error:"La captura real no está autorizada."};
  const { error } = await supabase.from("assessment_responses").upsert({
    assessment_id:parsed.data.assessmentId,criterion_id:parsed.data.criterionId,dimension_id:parsed.data.dimensionId,
    status:parsed.data.status,level:parsed.data.level,evidence_grade:parsed.data.evidenceGrade,
    justification:parsed.data.justification,no_apply_basis:parsed.data.noApplyBasis,updated_by:userId,source_evaluator_id:userId
  });
  if (error) return {ok:false,error:"La respuesta no pudo guardarse con los permisos actuales."};
  await supabase.rpc("append_audit_event", {
    target_org: assessment.organization_id,
    requested_event_type: "assessment.response_saved",
    requested_entity_type: "assessment_response",
    requested_entity_id: `${parsed.data.assessmentId}:${parsed.data.criterionId}`,
    requested_metadata: {criterionId: parsed.data.criterionId, status: parsed.data.status}
  });
  return {ok:true};
}

const transitionSchema = z.object({
  assessmentId: z.string().uuid(),
  action: z.enum(["SUBMIT","START_REVIEW","RETURN","CLOSE"]),
  note: z.string().max(3000).nullable().default(null)
});

export async function transitionAssessment(input: unknown) {
  const parsed = transitionSchema.safeParse(input);
  if (!parsed.success) return {ok:false as const,error:"Transición inválida."};
  const supabase = await createClient();
  if (!supabase) return {ok:false as const,error:"La transición conectada requiere Supabase."};
  const { data: claims } = await supabase.auth.getClaims();
  if (!claims?.claims?.sub) return {ok:false as const,error:"Sesión no válida."};
  const { data, error } = await supabase.rpc("transition_synthetic_assessment", {
    target_assessment: parsed.data.assessmentId,
    requested_action: parsed.data.action,
    requested_note: parsed.data.note
  });
  if (error) {
    const messages: Record<string,string> = {
      ASSESSMENT_INCOMPLETE:"Deben revisarse los 28 criterios antes de enviar.",
      REVIEW_NOTE_REQUIRED:"La devolución o el cierre requieren una nota de revisión.",
      TRANSITION_NOT_ALLOWED:"Tu rol o el estado actual no permiten esta transición.",
      SYNTHETIC_ONLY:"Este flujo sólo está habilitado para expedientes sintéticos."
    };
    const key = Object.keys(messages).find(item => error.message.includes(item));
    return {ok:false as const,error:key ? messages[key] : "No fue posible cambiar el estado del expediente."};
  }
  revalidatePath(`/evaluaciones/${parsed.data.assessmentId}`);
  revalidatePath("/evaluaciones");
  return {ok:true as const,status:String(data)};
}

const calculationSettingsSchema = z.object({
  assessmentId: z.string().uuid(),
  periodStart: z.iso.date(),
  periodEnd: z.iso.date(),
  gateStatus: z.enum(["VERDE","ROJO","NO_VERIFICABLE"]),
  gateBasis: z.string().trim().min(8,"Explica el fundamento del gate en al menos ocho caracteres.").max(3000),
  gateProtocolVersion: z.string().trim().max(120).nullable()
}).refine(value => value.periodEnd >= value.periodStart,{message:"La fecha final no puede ser anterior a la inicial."});

export async function saveCalculationSettings(input: unknown) {
  const parsed = calculationSettingsSchema.safeParse(input);
  if (!parsed.success) return {ok:false as const,error:parsed.error.issues[0]?.message ?? "Configuración inválida."};
  const supabase = await createClient();
  if (!supabase) return {ok:false as const,error:"La configuración conectada requiere Supabase."};
  const { data: claims } = await supabase.auth.getClaims();
  if (!claims?.claims?.sub) return {ok:false as const,error:"Sesión no válida."};
  const { error } = await supabase.from("assessments").update({
    period_start:parsed.data.periodStart,
    period_end:parsed.data.periodEnd,
    gate_status:parsed.data.gateStatus,
    gate_basis:parsed.data.gateBasis,
    gate_protocol_version:parsed.data.gateProtocolVersion || null,
    updated_at:new Date().toISOString()
  }).eq("id",parsed.data.assessmentId);
  if (error) return {ok:false as const,error:"No fue posible guardar período y gate. Confirma que la migración de Fase 3 esté instalada y que el expediente sea editable."};
  revalidatePath(`/evaluaciones/${parsed.data.assessmentId}`);
  return {ok:true as const};
}

const calculationSchema = z.object({assessmentId:z.string().uuid()});

export async function executeCandidateCalculation(input: unknown) {
  const parsed = calculationSchema.safeParse(input);
  if (!parsed.success) return {ok:false as const,error:"Solicitud de cálculo inválida."};
  const supabase = await createClient();
  if (!supabase) return {ok:false as const,error:"La ejecución conectada requiere Supabase."};
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) return {ok:false as const,error:"Sesión no válida."};
  const { data, error } = await supabase.from("assessments").select(
    "id,organization_id,assessment_kind,period_start,period_end,gate_status,gate_basis,gate_protocol_version,establishments(id,display_name),assessment_responses(criterion_id,status,level,evidence_grade,justification,no_apply_basis,source_evaluator_id),evidence_items(criterion_id,evidence_code)"
  ).eq("id",parsed.data.assessmentId).single();
  if (error || !data) return {ok:false as const,error:"El expediente no está disponible con los permisos actuales."};
  const establishment = Array.isArray(data.establishments) ? data.establishments[0] : data.establishments;
  const calculatedAt = new Date().toISOString();
  const result = evaluateWithCandidateEngine({
    assessmentId:data.id,
    assessmentKind:data.assessment_kind,
    establishmentId:establishment?.id ?? null,
    establishmentName:establishment?.display_name ?? "Establecimiento",
    periodStart:data.period_start,
    periodEnd:data.period_end,
    gate:data.gate_status && data.gate_basis ? {status:data.gate_status,basis:data.gate_basis,protocolVersion:data.gate_protocol_version} : null,
    responses:(data.assessment_responses ?? []).map(item => ({
      criterionId:item.criterion_id,status:item.status,level:item.level,evidenceGrade:item.evidence_grade,
      justification:item.justification,noApplyBasis:item.no_apply_basis,sourceEvaluatorId:item.source_evaluator_id
    })),
    evidence:(data.evidence_items ?? []).map(item => ({criterionId:item.criterion_id,evidenceCode:item.evidence_code}))
  },calculatedAt);
  if (!result.ready) return {ok:false as const,error:"El expediente todavía no cumple el contrato del motor.",blockers:result.blockers};
  const { data: run, error: insertError } = await supabase.from("assessment_calculation_runs").insert({
    organization_id:data.organization_id,
    assessment_id:data.id,
    contract_version:result.output.contractVersion,
    model_version:result.output.modelVersion,
    input_digest:result.output.trace.inputDigest,
    input_payload:result.input,
    output_payload:result.output,
    emission_status:result.output.emissionStatus,
    calculated_by:userId,
    calculated_at:calculatedAt
  }).select("id").single();
  if (insertError || !run) return {ok:false as const,error:"El cálculo fue reproducible, pero no pudo guardarse. Confirma la migración de ejecuciones y sus políticas RLS."};
  await supabase.rpc("append_audit_event",{
    target_org:data.organization_id,
    requested_event_type:"assessment.calculated",
    requested_entity_type:"assessment_calculation_run",
    requested_entity_id:run.id,
    requested_metadata:{assessmentId:data.id,inputDigest:result.output.trace.inputDigest,emissionStatus:result.output.emissionStatus}
  });
  revalidatePath(`/evaluaciones/${data.id}`);
  revalidatePath("/resultados");
  revalidatePath("/dashboard");
  return {ok:true as const,runId:run.id,output:result.output};
}
