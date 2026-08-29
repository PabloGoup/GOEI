"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";
import { businessProfileSchema } from "@/domain/business-profile";
import { demoAssessmentResponses, demoAssessments, demoEstablishments } from "@/data/demo";
import { evaluateWithCandidateEngine } from "@/domain/engine-adapter";

const establishmentSchema = z.object({name:z.string().trim().min(2).max(180),code:z.string().trim().toUpperCase().regex(/^SYN-[A-Z0-9-]{2,30}$/),profile:businessProfileSchema});
export async function createSyntheticEstablishment(formData: FormData) {
  const parsed=establishmentSchema.safeParse({name:formData.get("name"),code:formData.get("code"),profile:{
    concept:formData.get("concept"),serviceModel:formData.get("serviceModel"),cuisine:formData.get("cuisine"),locationContext:formData.get("locationContext"),
    seats:formData.get("seats"),teamSize:formData.get("teamSize"),operatingDays:formData.get("operatingDays"),serviceHours:formData.get("serviceHours"),
    channels:formData.getAll("channels").map(String).map(item=>item.trim()).filter(Boolean),
    demandPattern:formData.get("demandPattern"),sourcing:formData.get("sourcing"),dataAvailability:formData.get("dataAvailability"),
    challenges:formData.getAll("challenges").map(String).map(item=>item.trim()).filter(Boolean)
  }});
  if(!parsed.success) redirect("/establecimientos/nuevo?error=formato");
  const context=await requireWorkspaceContext();
  if(context.mode!=="connected"||!context.organizationId) redirect("/establecimientos?error=modo");
  const supabase=await createClient(); if(!supabase) redirect("/login?error=configuracion");
  const {error}=await supabase.rpc("create_profiled_synthetic_establishment",{target_org:context.organizationId,requested_name:parsed.data.name,requested_code:parsed.data.code,requested_profile:parsed.data.profile});
  if(error) {
    const fallback=await supabase.rpc("create_synthetic_establishment",{target_org:context.organizationId,requested_name:parsed.data.name,requested_code:parsed.data.code});
    if(fallback.error) redirect("/establecimientos/nuevo?error=guardado");
  }
  revalidatePath("/establecimientos"); redirect("/establecimientos");
}
export async function createSyntheticAssessment(formData: FormData) {
  const establishmentId=z.string().uuid().safeParse(formData.get("establishmentId"));
  if(!establishmentId.success) redirect("/evaluaciones/nueva?error=establecimiento");
  const context=await requireWorkspaceContext(); if(context.mode!=="connected") redirect("/evaluaciones?error=modo");
  const supabase=await createClient(); if(!supabase) redirect("/login?error=configuracion");
  const {data,error}=await supabase.rpc("create_synthetic_assessment",{target_establishment:establishmentId.data});
  if(error||!data) redirect("/evaluaciones/nueva?error=guardado");
  revalidatePath("/evaluaciones"); redirect(`/evaluaciones/${data}`);
}

export async function loadConnectedDemoCases() {
  const context = await requireWorkspaceContext();
  if (context.mode !== "connected" || !context.organizationId || context.role !== "organization_admin") redirect("/dashboard?seed=not_allowed");
  const supabase = await createClient();
  if (!supabase || !context.userId) redirect("/dashboard?seed=connection");
  const { data: existing, error: existingError } = await supabase.from("establishments").select("id,pseudonymous_code");
  if (existingError) redirect("/dashboard?seed=connection");
  const existingByCode = new Map((existing ?? []).map(item => [item.pseudonymous_code,item.id]));
  let loaded = 0;
  let calculated = 0;

  for (const [index, business] of demoEstablishments.entries()) {
    const code = `SYN-DEMO-${String(index + 1).padStart(3, "0")}`;
    const sourceAssessment = demoAssessments[index];
    let establishmentId = existingByCode.get(code);
    let assessmentId: string | null = null;
    if (!establishmentId) {
      const { data, error } = await supabase.rpc("create_profiled_synthetic_establishment", {
        target_org: context.organizationId, requested_name: business.name, requested_code: code, requested_profile: business.profile
      });
      if (error || !data) redirect("/dashboard?seed=error");
      establishmentId = data;
      const { data: createdAssessmentId, error: assessmentError } = await supabase.rpc("create_synthetic_assessment", { target_establishment: establishmentId });
      if (assessmentError || !createdAssessmentId) redirect("/dashboard?seed=error");
      assessmentId = createdAssessmentId;
      const responses = demoAssessmentResponses(sourceAssessment.id).map(item => ({
        assessment_id: assessmentId, criterion_id: item.criterion_id, dimension_id: item.criterion_id.split(".")[0], status: item.status,
        level: item.level, evidence_grade: item.evidence_grade, justification: item.justification, no_apply_basis: item.no_apply_basis,
        updated_by: context.userId
      }));
      const { error: responseError } = await supabase.from("assessment_responses").insert(responses);
      if (responseError) redirect("/dashboard?seed=error");
      const { error: contractError } = await supabase.from("assessments").update({
        period_start: sourceAssessment.periodStart, period_end: sourceAssessment.periodEnd, gate_status: sourceAssessment.gateStatus,
        gate_basis: sourceAssessment.gateBasis, gate_protocol_version: sourceAssessment.gateProtocolVersion
      }).eq("id", assessmentId);
      if (contractError) redirect("/dashboard?seed=error");
      loaded += 1;
    } else {
      const { data, error } = await supabase.from("assessments").select("id").eq("establishment_id", establishmentId).limit(1).maybeSingle();
      if (error || !data) redirect("/dashboard?seed=error");
      assessmentId = data.id;
    }
    if (!establishmentId || !assessmentId) redirect("/dashboard?seed=error");
    const { data: priorRun, error: priorRunError } = await supabase.from("assessment_calculation_runs").select("id").eq("assessment_id", assessmentId).limit(1).maybeSingle();
    if (priorRunError) redirect("/dashboard?seed=error");
    if (!priorRun) {
      const calculatedAt = new Date().toISOString();
      const result = evaluateWithCandidateEngine({
        assessmentId, assessmentKind:"SYNTHETIC_DEMONSTRATION", establishmentId, establishmentName:business.name,
        periodStart:sourceAssessment.periodStart, periodEnd:sourceAssessment.periodEnd,
        gate:{status:sourceAssessment.gateStatus,basis:sourceAssessment.gateBasis,protocolVersion:sourceAssessment.gateProtocolVersion},
        responses:demoAssessmentResponses(sourceAssessment.id).map(item => ({criterionId:item.criterion_id,status:item.status,level:item.level,evidenceGrade:item.evidence_grade,justification:item.justification,noApplyBasis:item.no_apply_basis,sourceEvaluatorId:null})), evidence:[]
      },calculatedAt);
      if (!result.ready) redirect("/dashboard?seed=error");
      const { data: run, error: runError } = await supabase.from("assessment_calculation_runs").insert({
        organization_id:context.organizationId, assessment_id:assessmentId, contract_version:result.output.contractVersion, model_version:result.output.modelVersion,
        input_digest:result.output.trace.inputDigest, input_payload:result.input, output_payload:result.output, emission_status:result.output.emissionStatus,
        calculated_by:context.userId, calculated_at:calculatedAt
      }).select("id").single();
      if (runError || !run) redirect("/dashboard?seed=error");
      await supabase.rpc("append_audit_event",{target_org:context.organizationId,requested_event_type:"assessment.calculated",requested_entity_type:"assessment_calculation_run",requested_entity_id:run.id,requested_metadata:{assessmentId,inputDigest:result.output.trace.inputDigest,emissionStatus:result.output.emissionStatus,seeded:true}});
      calculated += 1;
    }
  }
  revalidatePath("/dashboard"); revalidatePath("/establecimientos"); revalidatePath("/evaluaciones"); revalidatePath("/resultados");
  redirect(`/dashboard?seed=${loaded || calculated ? "ok" : "existing"}`);
}
