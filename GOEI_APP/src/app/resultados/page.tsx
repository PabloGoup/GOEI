import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, BarChart3, CalendarDays, Fingerprint, ShieldAlert } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { listCalculationRuns } from "@/server/repositories/workspace";

const emissionLabels:Record<string,string> = {
  PROVISIONAL_SCORE:"Lectura provisional",
  ZERO_BY_RED_GATE:"Resultado limitado por gate rojo",
  PARTIAL_PROFILE_NO_SCORE:"Perfil parcial sin puntaje"
};

export default async function ResultsPage() {
  const runs = await listCalculationRuns();
  return <AppShell>
    <header className="page-header"><div><p className="breadcrumb">Trazabilidad <ArrowRight size={14}/> Resultados</p><h1>Lecturas provisionales</h1><p>Cada fila conserva la salida calculada, las versiones y el digest de su entrada.</p></div></header>
    <div className="field-lock"><ShieldAlert size={20}/><div><strong>No son certificaciones</strong><span>Estos resultados pertenecen a casos sintéticos y permanecen como candidatos no validados.</span></div></div>
    {runs.length === 0 ? <section className="card empty-state"><BarChart3 size={30}/><h2>Aún no hay ejecuciones guardadas</h2><p>Completa un expediente, registra su período y gate crítico, y ejecuta la lectura provisional.</p><Link className="button primary" href="/evaluaciones">Abrir evaluaciones</Link></section> : <section className="card table-card"><div className="card-head"><div><span className="section-kicker">Historial inmutable</span><h2>{runs.length} ejecuciones recientes</h2></div></div><div className="data-table result-table" role="table" aria-label="Lecturas provisionales"><div className="table-row table-header" role="row"><span>Establecimiento</span><span>Resultado</span><span>Cobertura / confianza</span><span>Trazabilidad</span><span/></div>{runs.map(run=><div className="table-row" role="row" key={run.id}><span><b>{run.establishment}</b><small>{run.code} · {emissionLabels[run.emissionStatus] ?? run.emissionStatus}</small></span><span><b>{run.displayFinalScore === null ? "Sin puntaje" : `${run.displayFinalScore} / 100`}</b><small>Gate {run.gate} · {run.band}</small></span><span><b>{run.displayCoverage}% / {run.displayConfidence ?? "—"}%</b><small>Cobertura / confianza</small></span><span><b><CalendarDays size={13}/> {new Intl.DateTimeFormat("es-CL",{dateStyle:"medium",timeStyle:"short"}).format(new Date(run.calculatedAt))}</b><small><Fingerprint size={12}/> {run.inputDigest.slice(0,18)}…</small></span><Link href={`/evaluaciones/${run.assessmentId}` as Route} aria-label={`Abrir ${run.establishment}`}><ArrowRight size={17}/></Link></div>)}</div></section>}
  </AppShell>;
}
