import Link from "next/link";
import type { Route } from "next";
import { AppShell } from "@/components/app-shell";
import { ProgressRing } from "@/components/progress-ring";
import { StatusPill } from "@/components/status-pill";
import { assessmentStatusLabels, type AssessmentStatus } from "@/domain/assessment-lifecycle";
import { methodologyStatus } from "@/domain/methodology";
import { listAssessments, listEstablishments } from "@/server/repositories/workspace";
import { AlertTriangle, ArrowRight, Building2, CalendarDays, CheckCircle2, ChevronRight, ClipboardCheck, FileSearch, Plus, ShieldAlert } from "lucide-react";

const tone = (status: string) => status === "CLOSED" ? "success" as const : status === "SUBMITTED" || status === "IN_REVIEW" ? "neutral" as const : "warning" as const;
const statusLabel = (status: string) => assessmentStatusLabels[status as AssessmentStatus] ?? status;

export default async function DashboardPage() {
  const [establishments, assessments] = await Promise.all([listEstablishments(), listAssessments()]);
  const active = assessments.filter(item => !["CLOSED", "CANCELLED"].includes(item.status));
  const awaitingReview = assessments.filter(item => ["SUBMITTED", "IN_REVIEW"].includes(item.status));
  const closed = assessments.filter(item => item.status === "CLOSED");
  const current = active[0] ?? assessments[0];

  return (
    <AppShell>
      <header className="page-header">
        <div><p className="breadcrumb">GOEI Chile <ChevronRight size={14} /> Panorama</p><h1>Panorama operacional</h1><p>Supervisa expedientes sintéticos, avance y próximas decisiones bajo tu organización.</p></div>
        <Link className="button primary" href="/evaluaciones/nueva"><Plus size={17} /> Nueva evaluación sintética</Link>
      </header>

      <div className="field-lock"><ShieldAlert size={20} /><div><strong>Captura real bloqueada</strong><span>Este espacio conectado persiste únicamente casos sintéticos. No ingreses datos de personas o negocios reales.</span></div><Link href="/configuracion">Ver condiciones <ArrowRight size={15} /></Link></div>

      <section className="metric-grid" aria-label="Indicadores del espacio de trabajo">
        <article className="metric-card"><span className="metric-icon blue"><Building2 /></span><div><small>Establecimientos</small><strong>{establishments.length}</strong><p>Todos son casos sintéticos</p></div></article>
        <article className="metric-card"><span className="metric-icon amber"><ClipboardCheck /></span><div><small>Evaluaciones activas</small><strong>{active.length}</strong><p>{awaitingReview.length} requieren revisión</p></div></article>
        <article className="metric-card"><span className="metric-icon green"><CheckCircle2 /></span><div><small>Expedientes cerrados</small><strong>{closed.length}</strong><p>Lecturas provisionales en Resultados</p></div></article>
        <article className="metric-card"><span className="metric-icon red"><AlertTriangle /></span><div><small>Gates bloqueados</small><strong>{methodologyStatus.blockedCriteria.length}</strong><p>{methodologyStatus.blockedCriteria.join(" y ")}</p></div></article>
      </section>

      {current ? <section className="dashboard-grid">
        <article className="card current-assessment">
          <div className="card-head"><div><span className="section-kicker">Expediente prioritario</span><h2>{current.establishment}</h2><p>{current.code} · Caso exclusivamente sintético</p></div><StatusPill tone={tone(current.status)}>{statusLabel(current.status)}</StatusPill></div>
          <div className="assessment-progress">
            <ProgressRing value={current.progress} />
            <div className="dimension-list"><div className="dimension-row"><span><b>28</b>Criterios del instrumento candidato</span><div className="progress-track"><i className="info" style={{ width: `${current.progress}%` }} /></div><strong>{current.progress}%</strong></div></div>
          </div>
          <div className="card-actions"><span><FileSearch size={17} /> Actualizado {current.updatedAt}</span><Link className="button secondary" href={`/evaluaciones/${current.id}` as Route}>Continuar evaluación <ArrowRight size={16} /></Link></div>
        </article>

        <aside className="card evidence-card">
          <div className="card-head"><div><span className="section-kicker">Estado técnico</span><h2>Lectura responsable</h2></div></div>
          <div className="evidence-score"><strong>{current.progress}%</strong><span>Criterios revisados</span></div>
          <div className="help-box"><strong>¿Qué significa?</strong><p>El avance sólo indica completitud del expediente. No representa desempeño, cobertura de evidencia ni un resultado GOEI.</p><Link href="/guia">Comprender la metodología <ArrowRight size={14} /></Link></div>
        </aside>
      </section> : <section className="card empty-state"><ClipboardCheck size={28}/><h2>Aún no hay evaluaciones sintéticas</h2><p>Crea primero un establecimiento y luego abre su expediente de aplicación.</p><Link className="button primary" href="/establecimientos/nuevo">Crear caso sintético</Link></section>}

      <section className="card table-card" id="evaluaciones">
        <div className="card-head"><div><span className="section-kicker">Actividad reciente</span><h2>Evaluaciones</h2></div><Link className="text-button" href="/evaluaciones">Ver todas <ArrowRight size={15} /></Link></div>
        <div className="data-table" role="table" aria-label="Evaluaciones recientes">
          <div className="table-row table-header" role="row"><span>Establecimiento</span><span>Avance</span><span>Estado</span><span>Actualización</span><span /></div>
          {assessments.slice(0,5).map(item => <div className="table-row" role="row" key={item.id}><span><b>{item.establishment}</b><small>{item.code}</small></span><span><div className="inline-progress"><i style={{ width: `${item.progress}%` }} /></div><small>{item.progress}%</small></span><span><StatusPill tone={tone(item.status)}>{statusLabel(item.status)}</StatusPill></span><span><CalendarDays size={15} /> {item.updatedAt}</span><Link href={`/evaluaciones/${item.id}` as Route} aria-label={`Abrir ${item.establishment}`}><ChevronRight size={18} /></Link></div>)}
        </div>
      </section>
      <footer className="method-footer"><span>{methodologyStatus.modelId} · v{methodologyStatus.version}</span><strong>{methodologyStatus.label}</strong></footer>
    </AppShell>
  );
}
