import Link from "next/link";
import type { Route } from "next";
import { AppShell } from "@/components/app-shell";
import { ProgressRing } from "@/components/progress-ring";
import { StatusPill } from "@/components/status-pill";
import { assessmentStatusLabels, type AssessmentStatus } from "@/domain/assessment-lifecycle";
import { methodologyStatus } from "@/domain/methodology";
import { listAssessments, listCalculationRuns } from "@/server/repositories/workspace";
import { loadConnectedDemoCases } from "@/server/actions/workspace-actions";
import { ArrowRight, BarChart3, CalendarDays, CheckCircle2, ChevronRight, ClipboardCheck, FileSearch, Plus, ShieldAlert } from "lucide-react";

const tone = (status: string) => status === "CLOSED" ? "success" as const : status === "SUBMITTED" || status === "IN_REVIEW" ? "neutral" as const : "warning" as const;
const statusLabel = (status: string) => assessmentStatusLabels[status as AssessmentStatus] ?? status;

export default async function DashboardPage({searchParams}:{searchParams:Promise<{seed?:string}>}) {
  const [assessments, runs] = await Promise.all([listAssessments(), listCalculationRuns()]);
  const { seed } = await searchParams;
  const active = assessments.filter(item => !["CLOSED", "CANCELLED"].includes(item.status));
  const current = active[0] ?? assessments[0];
  const latestRun=runs[0];

  return (
    <AppShell>
      <header className="page-header">
        <div><p className="breadcrumb">GOEI Chile <ChevronRight size={14} /> Inicio</p><h1>Centro de operación</h1><p>En pocos segundos: condición, gate, confianza, cobertura y dónde conviene revisar primero.</p></div>
        <Link className="button primary" href="/evaluaciones/nueva"><Plus size={17} /> Nueva evaluación sintética</Link>
      </header>

      <div className="field-lock"><ShieldAlert size={20} /><div><strong>Captura real bloqueada</strong><span>Este espacio conectado persiste únicamente casos sintéticos. No ingreses datos de personas o negocios reales.</span></div><Link href="/configuracion">Ver condiciones <ArrowRight size={15} /></Link></div>

      <section className="metric-grid" aria-label="Lectura operacional actual">
        <article className="metric-card"><span className="metric-icon blue"><BarChart3 /></span><div><small>GOEI</small><strong>{latestRun?.displayFinalScore??"—"}</strong><p>{latestRun?.band??"Aún sin lectura emitida"}</p></div></article>
        <article className="metric-card"><span className="metric-icon amber"><ShieldAlert /></span><div><small>Gate</small><strong className="metric-state">{latestRun?.gate?.replace("_"," ")??"—"}</strong><p>Se interpreta antes del puntaje</p></div></article>
        <article className="metric-card"><span className="metric-icon green"><CheckCircle2 /></span><div><small>Confianza</small><strong>{latestRun?.displayConfidence??"—"}{latestRun?.displayConfidence===null||!latestRun?"":"%"}</strong><p>Calidad de evidencia, no desempeño</p></div></article>
        <article className="metric-card"><span className="metric-icon red"><ClipboardCheck /></span><div><small>Cobertura</small><strong>{latestRun?.displayCoverage??0}%</strong><p>{latestRun?"Completitud de la lectura":"Sin expediente calculado"}</p></div></article>
      </section>

      {seed === "ok" && <div className="notice success"><CheckCircle2 size={18}/><span><strong>Casos demostrativos cargados</strong><small>Se añadieron cinco expedientes exclusivamente sintéticos a esta organización.</small></span></div>}
      {seed === "existing" && <div className="notice success"><CheckCircle2 size={18}/><span><strong>Los casos ya estaban disponibles</strong><small>No se duplicó ningún establecimiento sintético.</small></span></div>}
      {seed && !["ok","existing"].includes(seed) && <div className="notice warning"><span><strong>No pudimos cargar los casos</strong><small>La organización no cambió. Reintenta o revisa tu sesión.</small></span></div>}
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
      </section> : <section className="card empty-state"><ClipboardCheck size={28}/><h2>Aún no hay evaluaciones sintéticas</h2><p>Puedes crear un caso propio o cargar los cinco expedientes demostrativos ya evaluados para recorrer la app completa.</p><div className="empty-actions"><Link className="button secondary" href="/establecimientos/nuevo">Crear caso sintético</Link><form action={loadConnectedDemoCases}><button className="button primary" type="submit">Cargar 5 casos demostrativos</button></form></div><small>La carga crea sólo datos ficticios y no habilita captura real.</small></section>}

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
