"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";

const establishmentSchema = z.object({name:z.string().trim().min(2).max(180),code:z.string().trim().toUpperCase().regex(/^SYN-[A-Z0-9-]{2,30}$/)});
export async function createSyntheticEstablishment(formData: FormData) {
  const parsed=establishmentSchema.safeParse({name:formData.get("name"),code:formData.get("code")});
  if(!parsed.success) redirect("/establecimientos/nuevo?error=formato");
  const context=await requireWorkspaceContext();
  if(context.mode!=="connected"||!context.organizationId) redirect("/establecimientos?error=modo");
  const supabase=await createClient(); if(!supabase) redirect("/login?error=configuracion");
  const {error}=await supabase.rpc("create_synthetic_establishment",{target_org:context.organizationId,requested_name:parsed.data.name,requested_code:parsed.data.code});
  if(error) redirect("/establecimientos/nuevo?error=guardado");
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
