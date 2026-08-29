"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";
import { createClient } from "@/lib/supabase/server";

export async function updateProfile(formData:FormData){const name=z.string().trim().min(2).max(120).safeParse(formData.get("displayName"));if(!name.success)redirect("/perfil?error=formato");const context=await requireWorkspaceContext();if(context.mode==="demo")redirect(`/perfil?saved=demo&name=${encodeURIComponent(name.data)}`);const supabase=await createClient();if(!supabase||!context.userId)redirect("/perfil?error=sesion");const {error}=await supabase.from("profiles").update({display_name:name.data}).eq("id",context.userId);if(error)redirect("/perfil?error=guardado");redirect("/perfil?saved=1")}
