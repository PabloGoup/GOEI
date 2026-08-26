import { demoAssessments, demoEstablishments } from "@/data/demo";
import { createClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

export async function listEstablishments() {
  if (env.appMode === "demo") return [...demoEstablishments];
  const supabase = await createClient();
  if (!supabase) return [...demoEstablishments];
  const { data, error } = await supabase.from("establishments").select("id,pseudonymous_code,display_name,scope_status,updated_at:created_at").order("created_at",{ascending:false});
  if (error) throw new Error("No fue posible cargar los establecimientos autorizados.");
  return data.map(item => ({id:item.id,code:item.pseudonymous_code,name:item.display_name,status:item.scope_status,evaluations:0,updatedAt:new Intl.DateTimeFormat("es-CL",{dateStyle:"medium"}).format(new Date(item.updated_at))}));
}

export async function listAssessments() {
  if (env.appMode === "demo") return [...demoAssessments];
  const supabase = await createClient();
  if (!supabase) return [...demoAssessments];
  const { data, error } = await supabase.from("assessments").select("id,status,assessment_kind,updated_at,establishments(id,pseudonymous_code,display_name)").order("updated_at",{ascending:false});
  if (error) throw new Error("No fue posible cargar las evaluaciones autorizadas.");
  return data.map(item => {
    const establishment = Array.isArray(item.establishments) ? item.establishments[0] : item.establishments;
    return {id:item.id,establishmentId:establishment?.id ?? "",establishment:establishment?.display_name ?? "Establecimiento",code:establishment?.pseudonymous_code ?? "—",kind:item.assessment_kind,status:item.status,progress:0,updatedAt:new Intl.DateTimeFormat("es-CL",{dateStyle:"medium"}).format(new Date(item.updated_at))};
  });
}

export async function getAssessment(id: string) {
  if (env.appMode === "demo") {
    const assessment = demoAssessments.find(item => item.id === id);
    return assessment ? {assessment, responses: []} : null;
  }
  const supabase = await createClient();
  if (!supabase) return null;
  const { data, error } = await supabase.from("assessments")
    .select("id,status,assessment_kind,establishments(pseudonymous_code,display_name),assessment_responses(criterion_id,status,level,evidence_grade,justification,no_apply_basis)")
    .eq("id", id).maybeSingle();
  if (error || !data) return null;
  const establishment = Array.isArray(data.establishments) ? data.establishments[0] : data.establishments;
  return {
    assessment: {id:data.id,establishment:establishment?.display_name ?? "Establecimiento",code:establishment?.pseudonymous_code ?? "—",kind:data.assessment_kind,status:data.status,progress:0},
    responses: data.assessment_responses ?? []
  };
}
