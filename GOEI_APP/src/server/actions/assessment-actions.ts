"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

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
