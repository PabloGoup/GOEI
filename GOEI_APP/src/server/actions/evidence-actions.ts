"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { evidenceExtension, evidenceMaxBytes, evidenceMimeTypes } from "@/domain/evidence";

const uploadRequestSchema = z.object({
  assessmentId: z.string().uuid(),
  criterionId: z.string().regex(/^D[1-7]\.[1-4]$/),
  title: z.string().trim().min(2).max(180),
  mimeType: z.enum(evidenceMimeTypes),
  sizeBytes: z.number().int().positive().max(evidenceMaxBytes),
  provenance: z.enum(["E1","E2","E3"]),
  sensitivity: z.enum(["internal","confidential","restricted"])
});

const finalizeSchema = uploadRequestSchema.extend({
  storagePath: z.string().min(20).max(500),
  evidenceCode: z.string().regex(/^EVD-[A-F0-9]{12}$/)
});

async function authenticatedContext(assessmentId: string) {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) return null;
  const { data: assessment } = await supabase.from("assessments")
    .select("id,organization_id,assessment_kind,field_capture_authorized,status")
    .eq("id",assessmentId).maybeSingle();
  if (!assessment || assessment.assessment_kind !== "SYNTHETIC_DEMONSTRATION" || assessment.field_capture_authorized) return null;
  if (!["DRAFT","IN_PROGRESS","RETURNED"].includes(assessment.status)) return null;
  return {supabase,userId,assessment};
}

export async function requestEvidenceUpload(input: unknown) {
  const parsed = uploadRequestSchema.safeParse(input);
  if (!parsed.success) return {ok:false as const,error:parsed.error.issues[0]?.message ?? "Archivo inválido."};
  const context = await authenticatedContext(parsed.data.assessmentId);
  if (!context) return {ok:false as const,error:"El expediente no admite evidencias con la sesión actual."};
  const fileId = randomUUID();
  const evidenceCode = `EVD-${fileId.replaceAll("-","").slice(0,12).toUpperCase()}`;
  const storagePath = `${context.assessment.organization_id}/${parsed.data.assessmentId}/${fileId}.${evidenceExtension(parsed.data.mimeType)}`;
  const { data, error } = await context.supabase.storage.from("goei-evidence").createSignedUploadUrl(storagePath);
  if (error || !data?.token) return {ok:false as const,error:"No fue posible autorizar la carga privada."};
  return {ok:true as const,storagePath,evidenceCode,token:data.token};
}

export async function finalizeEvidenceUpload(input: unknown) {
  const parsed = finalizeSchema.safeParse(input);
  if (!parsed.success) return {ok:false as const,error:"Los metadatos de evidencia no son válidos."};
  const context = await authenticatedContext(parsed.data.assessmentId);
  if (!context) return {ok:false as const,error:"El expediente no admite evidencias con la sesión actual."};
  const expectedPrefix = `${context.assessment.organization_id}/${parsed.data.assessmentId}/`;
  if (!parsed.data.storagePath.startsWith(expectedPrefix)) return {ok:false as const,error:"La ruta de evidencia no pertenece al expediente."};
  const fileName = parsed.data.storagePath.slice(expectedPrefix.length);
  const { data: storedFiles, error: storageError } = await context.supabase.storage.from("goei-evidence").list(expectedPrefix.slice(0,-1),{search:fileName,limit:2});
  if (storageError || !storedFiles?.some(item=>item.name === fileName)) return {ok:false as const,error:"No se encontró el archivo privado recién cargado."};
  const { error } = await context.supabase.from("evidence_items").insert({
    organization_id:context.assessment.organization_id,assessment_id:parsed.data.assessmentId,criterion_id:parsed.data.criterionId,
    evidence_code:parsed.data.evidenceCode,title:parsed.data.title,storage_path:parsed.data.storagePath,
    mime_type:parsed.data.mimeType,size_bytes:parsed.data.sizeBytes,provenance:parsed.data.provenance,
    data_status:"AVAILABLE_SYNTHETIC",sensitivity:parsed.data.sensitivity,uploaded_by:context.userId
  });
  if (error) return {ok:false as const,error:"El archivo se cargó, pero sus metadatos no pudieron registrarse."};
  await context.supabase.rpc("append_audit_event",{
    target_org:context.assessment.organization_id,requested_event_type:"evidence.uploaded",requested_entity_type:"evidence_item",
    requested_entity_id:parsed.data.evidenceCode,requested_metadata:{assessmentId:parsed.data.assessmentId,criterionId:parsed.data.criterionId,mimeType:parsed.data.mimeType,sizeBytes:parsed.data.sizeBytes}
  });
  revalidatePath(`/evaluaciones/${parsed.data.assessmentId}`);
  return {ok:true as const};
}

export async function createEvidenceReadUrl(input: unknown) {
  const parsed = z.object({assessmentId:z.string().uuid(),storagePath:z.string().min(20).max(500)}).safeParse(input);
  if (!parsed.success) return {ok:false as const,error:"Referencia inválida."};
  const supabase = await createClient();
  if (!supabase) return {ok:false as const,error:"Supabase no está disponible."};
  const { data: evidence } = await supabase.from("evidence_items").select("storage_path").eq("assessment_id",parsed.data.assessmentId).eq("storage_path",parsed.data.storagePath).maybeSingle();
  if (!evidence) return {ok:false as const,error:"Evidencia no autorizada."};
  const { data, error } = await supabase.storage.from("goei-evidence").createSignedUrl(evidence.storage_path,60);
  if (error || !data?.signedUrl) return {ok:false as const,error:"No fue posible abrir la evidencia."};
  return {ok:true as const,url:data.signedUrl};
}
