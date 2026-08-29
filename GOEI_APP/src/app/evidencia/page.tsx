import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, FileSearch, Files, LockKeyhole, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { listEvidenceInventory } from "@/server/repositories/workspace";

const provenanceLabel: Record<string, string> = {
  E1: "E1 · exigible",
  E2: "E2 · derivable",
  E3: "E3 · levantamiento GOEI"
};

export default async function EvidencePage() {
  const items = await listEvidenceInventory();
  return <AppShell>
    <header className="page-header"><div><p className="breadcrumb">Trazabilidad <ArrowRight size={14}/> Evidencia</p><h1>Centro de evidencia</h1><p>Localiza los archivos asociados a un criterio sin sacar datos ni documentos de su expediente.</p></div></header>
    <section className="field-lock"><LockKeyhole size={20}/><div><strong>Acceso por expediente y rol</strong><span>La lista no publica archivos. La consulta se mantiene autorizada, registrada y con enlace temporal.</span></div></section>
    {items.length === 0 ? <section className="card empty-state"><Files size={32}/><h2>No hay archivos de evidencia en este espacio</h2><p>Los cinco casos públicos muestran respuestas y lecturas sintéticas; no simulan documentos adjuntos. En un expediente conectado y editable, la evidencia se carga desde cada criterio.</p><div className="empty-actions"><Link className="button primary" href="/evaluaciones">Abrir evaluaciones</Link><Link className="button secondary" href="/guia">Ver regla de evidencia</Link></div></section> : <section className="card table-card"><div className="card-head"><div><span className="section-kicker">Inventario autorizado</span><h2>{items.length} archivo{items.length === 1 ? "" : "s"} trazable{items.length === 1 ? "" : "s"}</h2></div><span className="tag"><ShieldCheck size={14}/> Privado</span></div><div className="data-table result-table" role="table"><div className="table-row table-header" role="row"><span>Evidencia</span><span>Criterio y origen</span><span>Expediente</span><span>Clasificación</span><span/></div>{items.map(item => <div className="table-row" role="row" key={item.id}><span><b><FileSearch size={14}/>{item.title}</b><small>{item.code} · {Math.ceil(item.sizeBytes / 1024)} KB</small></span><span><b>{item.criterionId ?? "Sin criterio"}</b><small>{provenanceLabel[item.provenance] ?? item.provenance}</small></span><span><b>{item.establishment}</b><small>{item.establishmentCode}</small></span><span><b>{item.sensitivity}</b><small>{item.mimeType}</small></span><Link href={`/evaluaciones/${item.assessmentId}` as Route} aria-label={`Abrir expediente de ${item.title}`}><ArrowRight/></Link></div>)}</div></section>}
  </AppShell>;
}
