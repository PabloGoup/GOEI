import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { StatusPill } from "@/components/status-pill";
import { listEstablishments } from "@/server/repositories/workspace";
import { Building2, CalendarDays, ChevronRight, Plus, Search, ShieldAlert } from "lucide-react";

export default async function EstablishmentsPage() {
  const establishments = await listEstablishments();
  return <AppShell>
    <header className="page-header"><div><p className="breadcrumb">Núcleo operativo</p><h1>Establecimientos</h1><p>Unidades de análisis separadas por organización y expediente.</p></div><Link className="button primary" href="/establecimientos/nuevo"><Plus size={17}/> Nuevo caso sintético</Link></header>
    <div className="field-lock"><ShieldAlert size={20}/><div><strong>Vista exclusivamente sintética</strong><span>La creación de establecimientos reales continúa bloqueada por los gates del prepiloto.</span></div></div>
    <section className="card resource-toolbar"><label><Search size={16}/><input placeholder="Buscar por nombre o código"/></label><span>3 casos demostrativos</span></section>
    <section className="resource-grid">
      {establishments.map(item => <article className="card establishment-card" key={item.id}>
        <div className="establishment-icon"><Building2/></div><div className="resource-main"><div><small>{item.code}</small><h2>{item.name}</h2></div><StatusPill tone="neutral">Sintético</StatusPill></div>
        <div className="resource-facts"><span><strong>{item.evaluations}</strong> evaluación</span><span><CalendarDays size={14}/> {item.updatedAt}</span></div>
        <div className="resource-footer"><span>{item.status}</span><Link href="/evaluaciones">Abrir expediente <ChevronRight size={15}/></Link></div>
      </article>)}
    </section>
  </AppShell>;
}
