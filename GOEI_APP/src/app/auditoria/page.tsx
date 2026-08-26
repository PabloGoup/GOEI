import { AppShell } from "@/components/app-shell";
import { AuditTimeline } from "@/components/audit-timeline";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";
import { listAuditEvents } from "@/server/repositories/audit";

export default async function AuditPage(){
  const context = await requireWorkspaceContext();
  const authorized = context.role === "organization_admin" || context.role === "methodology_supervisor";
  const events = authorized ? await listAuditEvents() : [];
  return <AppShell><header className="page-header"><div><p className="breadcrumb">Trazabilidad</p><h1>Auditoría</h1><p>Registro operativo de cambios y acciones autorizadas. No constituye evidencia científica por sí solo.</p></div></header>{authorized?<AuditTimeline events={events}/>:<section className="empty-state card"><h2>Acceso restringido</h2><p>La auditoría organizacional está disponible únicamente para administración y supervisión metodológica.</p></section>}</AppShell>
}
