import { demoAuditEvents } from "@/data/audit-demo";
import { sanitizeAuditMetadata } from "@/domain/audit";
import { env } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export type AuditEventView = {id:string;eventType:string;entityType:string;entityLabel:string;occurredAt:string;metadata:Record<string,string|number|boolean>};

export async function listAuditEvents():Promise<AuditEventView[]> {
  if (env.appMode === "demo") return demoAuditEvents.map(item=>({...item,metadata:{...item.metadata}}));
  const supabase = await createClient();
  if (!supabase) return [];
  const {data,error} = await supabase.from("audit_events").select("id,event_type,entity_type,entity_id,metadata,occurred_at").order("occurred_at",{ascending:false}).limit(200);
  if (error) throw new Error("No fue posible cargar el registro de auditoría con los permisos actuales.");
  return data.map(item=>({
    id:String(item.id),eventType:item.event_type,entityType:item.entity_type,
    entityLabel:item.entity_id ? String(item.entity_id).slice(0,18) : "Sin referencia",
    occurredAt:item.occurred_at,metadata:sanitizeAuditMetadata(item.metadata)
  }));
}
