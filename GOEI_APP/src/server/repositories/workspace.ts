import { demoAssessments, demoCompleteResponses, demoEstablishments } from "@/data/demo";
import { createClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";
import { evaluateWithCandidateEngine } from "@/domain/engine-adapter";

export async function listEstablishments() {
  if (env.appMode === "demo") return [...demoEstablishments];
  const supabase = await createClient();
  if (!supabase) return [...demoEstablishments];
  const [{ data, error }, { data: assessments, error: assessmentError }] = await Promise.all([
    supabase.from("establishments").select("id,pseudonymous_code,display_name,scope_status,updated_at:created_at").order("created_at",{ascending:false}),
    supabase.from("assessments").select("establishment_id")
  ]);
  if (error) throw new Error("No fue posible cargar los establecimientos autorizados.");
  if (assessmentError) throw new Error("No fue posible contar las evaluaciones autorizadas.");
  const counts = new Map<string,number>();
  assessments.forEach(item => counts.set(item.establishment_id,(counts.get(item.establishment_id) ?? 0) + 1));
  return data.map(item => ({id:item.id,code:item.pseudonymous_code,name:item.display_name,status:item.scope_status,evaluations:counts.get(item.id) ?? 0,updatedAt:new Intl.DateTimeFormat("es-CL",{dateStyle:"medium"}).format(new Date(item.updated_at))}));
}

export async function listAssessments() {
  if (env.appMode === "demo") return [...demoAssessments];
  const supabase = await createClient();
  if (!supabase) return [...demoAssessments];
  const { data, error } = await supabase.from("assessments").select("id,status,assessment_kind,updated_at,establishments(id,pseudonymous_code,display_name),assessment_responses(status)").order("updated_at",{ascending:false});
  if (error) throw new Error("No fue posible cargar las evaluaciones autorizadas.");
  return data.map(item => {
    const establishment = Array.isArray(item.establishments) ? item.establishments[0] : item.establishments;
    const completed = item.assessment_responses?.filter(response => response.status !== "PENDING").length ?? 0;
    return {id:item.id,establishmentId:establishment?.id ?? "",establishment:establishment?.display_name ?? "Establecimiento",code:establishment?.pseudonymous_code ?? "—",kind:item.assessment_kind,status:item.status,progress:Math.round(completed / 28 * 100),updatedAt:new Intl.DateTimeFormat("es-CL",{dateStyle:"medium"}).format(new Date(item.updated_at))};
  });
}

export async function getAssessment(id: string) {
  if (env.appMode === "demo") {
    const assessment = demoAssessments.find(item => item.id === id);
    return assessment ? {assessment, responses: assessment.id === "synthetic-assessment-002" ? demoCompleteResponses : []} : null;
  }
  const supabase = await createClient();
  if (!supabase) return null;
  let { data, error } = await supabase.from("assessments")
    .select("id,status,assessment_kind,period_start,period_end,gate_status,gate_basis,gate_protocol_version,establishments(id,pseudonymous_code,display_name),assessment_responses(criterion_id,status,level,evidence_grade,justification,no_apply_basis,source_evaluator_id),evidence_items(evidence_code,title,storage_path,mime_type,size_bytes,provenance,sensitivity,criterion_id)")
    .eq("id", id).maybeSingle();
  if (error) {
    const fallback = await supabase.from("assessments")
      .select("id,status,assessment_kind,period_start,period_end,establishments(id,pseudonymous_code,display_name),assessment_responses(criterion_id,status,level,evidence_grade,justification,no_apply_basis,source_evaluator_id),evidence_items(evidence_code,title,storage_path,mime_type,size_bytes,provenance,sensitivity,criterion_id)")
      .eq("id",id).maybeSingle();
    data = fallback.data ? {...fallback.data,gate_status:null,gate_basis:null,gate_protocol_version:null} : null;
    error = fallback.error;
  }
  if (error || !data) return null;
  const { data:calculationRuns } = await supabase.from("assessment_calculation_runs")
    .select("id,output_payload,input_digest,contract_version,model_version,calculated_at")
    .eq("assessment_id",id).order("calculated_at",{ascending:false}).limit(20);
  const establishment = Array.isArray(data.establishments) ? data.establishments[0] : data.establishments;
  const metadata = data as typeof data & {gate_status?:string|null;gate_basis?:string|null;gate_protocol_version?:string|null};
  return {
    assessment: {id:data.id,establishmentId:establishment?.id ?? null,establishment:establishment?.display_name ?? "Establecimiento",code:establishment?.pseudonymous_code ?? "—",kind:data.assessment_kind,status:data.status,progress:0,periodStart:data.period_start,periodEnd:data.period_end,gateStatus:metadata.gate_status ?? null,gateBasis:metadata.gate_basis ?? null,gateProtocolVersion:metadata.gate_protocol_version ?? null},
    responses: data.assessment_responses ?? [],
    evidenceItems: data.evidence_items ?? [],
    calculationRuns: calculationRuns ?? []
  };
}

export async function listCalculationRuns() {
  if (env.appMode === "demo") {
    const result = evaluateWithCandidateEngine({
      assessmentId:"00000000-0000-4000-8000-000000000102",
      assessmentKind:"SYNTHETIC_DEMONSTRATION",
      establishmentId:"00000000-0000-4000-8000-000000000202",
      establishmentName:"Caso sintético Costanera",
      periodStart:"2026-08-01",periodEnd:"2026-08-28",
      gate:{status:"NO_VERIFICABLE",basis:"Gate deliberadamente no verificable en escenario sintético demostrativo.",protocolVersion:null},
      responses:demoCompleteResponses.map(item=>({criterionId:item.criterion_id,status:item.status,level:item.level,evidenceGrade:item.evidence_grade,justification:item.justification,noApplyBasis:item.no_apply_basis,sourceEvaluatorId:item.source_evaluator_id})),
      evidence:[]
    },"2026-08-28T12:00:00.000Z");
    return result.ready ? [{...result.output,id:"synthetic-run-001",assessmentId:"synthetic-assessment-002",establishment:"Caso sintético Costanera",code:"SYN-002",calculatedAt:result.output.trace.calculatedAt,inputDigest:result.output.trace.inputDigest}] : [];
  }
  const supabase = await createClient();
  if (!supabase) return [];
  const { data, error } = await supabase.from("assessment_calculation_runs")
    .select("id,assessment_id,output_payload,input_digest,contract_version,model_version,calculated_at,assessments(status,assessment_kind,establishments(pseudonymous_code,display_name))")
    .order("calculated_at",{ascending:false}).limit(100);
  if (error) return [];
  return data.map(item => {
    const assessment = Array.isArray(item.assessments) ? item.assessments[0] : item.assessments;
    const establishmentRelation = assessment?.establishments;
    const establishment = Array.isArray(establishmentRelation) ? establishmentRelation[0] : establishmentRelation;
    const output = item.output_payload as {displayFinalScore:number|null;displayCoverage:number;displayConfidence:number|null;emissionStatus:string;band:string;gate:string};
    return {id:item.id,assessmentId:item.assessment_id,establishment:establishment?.display_name ?? "Establecimiento",code:establishment?.pseudonymous_code ?? "—",calculatedAt:item.calculated_at,inputDigest:item.input_digest,contractVersion:item.contract_version,modelVersion:item.model_version,...output};
  });
}
