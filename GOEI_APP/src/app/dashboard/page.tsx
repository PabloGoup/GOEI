import { AppShell } from "@/components/app-shell";
import { ProgressRing } from "@/components/progress-ring";
import { StatusPill } from "@/components/status-pill";
import { dimensions, methodologyStatus } from "@/domain/methodology";
import { AlertTriangle, ArrowRight, Building2, CalendarDays, CheckCircle2, ChevronRight, ClipboardCheck, FileSearch, Plus, ShieldAlert } from "lucide-react";

const assessments = [
  { establishment: "Restaurante demostrativo Centro", code: "SYN-001", progress: 61, status: "En evaluación", tone: "warning" as const, date: "25 ago 2026" },
  { establishment: "Caso sintético Costanera", code: "SYN-002", progress: 100, status: "En revisión", tone: "neutral" as const, date: "24 ago 2026" },
  { establishment: "Escenario formativo Norte", code: "SYN-003", progress: 100, status: "Perfil emitido", tone: "success" as const, date: "21 ago 2026" }
];

export default function DashboardPage() {
  return (
    <AppShell>
      <header className="page-header">
        <div><p className="breadcrumb">GOEI Chile <ChevronRight size={14} /> Panorama</p><h1>Panorama operacional</h1><p>Supervisa el avance, la evidencia disponible y las próximas decisiones.</p></div>
        <button className="button primary"><Plus size={17} /> Nueva evaluación</button>
      </header>

      <div className="field-lock"><ShieldAlert size={20} /><div><strong>Entorno demostrativo · captura real bloqueada</strong><span>Los escenarios visibles son sintéticos. Faltan gates científicos y externos para trabajar con establecimientos reales.</span></div><button type="button">Ver condiciones <ArrowRight size={15} /></button></div>

      <section className="metric-grid" aria-label="Indicadores del espacio de trabajo">
        <article className="metric-card"><span className="metric-icon blue"><Building2 /></span><div><small>Establecimientos</small><strong>3</strong><p>Todos son casos sintéticos</p></div></article>
        <article className="metric-card"><span className="metric-icon amber"><ClipboardCheck /></span><div><small>Evaluaciones activas</small><strong>2</strong><p>1 requiere revisión</p></div></article>
        <article className="metric-card"><span className="metric-icon green"><CheckCircle2 /></span><div><small>Perfiles emitidos</small><strong>1</strong><p>Provisional, no validado</p></div></article>
        <article className="metric-card"><span className="metric-icon red"><AlertTriangle /></span><div><small>Gates bloqueados</small><strong>2</strong><p>C-016 y C-023</p></div></article>
      </section>

      <section className="dashboard-grid">
        <article className="card current-assessment">
          <div className="card-head"><div><span className="section-kicker">Evaluación en curso</span><h2>Restaurante demostrativo Centro</h2><p>SYN-001 · Caso exclusivamente sintético</p></div><StatusPill tone="warning">En evaluación</StatusPill></div>
          <div className="assessment-progress">
            <ProgressRing value={61} />
            <div className="dimension-list">
              {dimensions.map((dimension) => (
                <div className="dimension-row" key={dimension.id}><span><b>{dimension.id}</b>{dimension.name}</span><div className="progress-track"><i className={dimension.tone} style={{ width: `${dimension.progress}%` }} /></div><strong>{dimension.progress}%</strong></div>
              ))}
            </div>
          </div>
          <div className="card-actions"><span><FileSearch size={17} /> Última edición hoy, 12:42</span><button className="button secondary">Continuar evaluación <ArrowRight size={16} /></button></div>
        </article>

        <aside className="card evidence-card">
          <div className="card-head"><div><span className="section-kicker">Calidad del expediente</span><h2>Evidencia disponible</h2></div></div>
          <div className="evidence-score"><strong>47%</strong><span>Cobertura actual</span></div>
          <div className="evidence-facts"><p><i className="dot green" /><span><strong>13</strong> criterios respaldados</span></p><p><i className="dot amber" /><span><strong>8</strong> requieren evidencia</span></p><p><i className="dot gray" /><span><strong>7</strong> aún sin revisar</span></p></div>
          <div className="help-box"><strong>¿Por qué importa?</strong><p>La cobertura indica cuánto del instrumento pudo observarse. No aumenta ni disminuye el desempeño.</p><button type="button">Comprender cobertura <ArrowRight size={14} /></button></div>
        </aside>
      </section>

      <section className="card table-card" id="evaluaciones">
        <div className="card-head"><div><span className="section-kicker">Actividad reciente</span><h2>Evaluaciones</h2></div><button className="text-button">Ver todas <ArrowRight size={15} /></button></div>
        <div className="data-table" role="table" aria-label="Evaluaciones recientes">
          <div className="table-row table-header" role="row"><span>Establecimiento</span><span>Avance</span><span>Estado</span><span>Actualización</span><span /></div>
          {assessments.map((item) => <div className="table-row" role="row" key={item.code}><span><b>{item.establishment}</b><small>{item.code}</small></span><span><div className="inline-progress"><i style={{ width: `${item.progress}%` }} /></div><small>{item.progress}%</small></span><span><StatusPill tone={item.tone}>{item.status}</StatusPill></span><span><CalendarDays size={15} /> {item.date}</span><button aria-label={`Abrir ${item.establishment}`}><ChevronRight size={18} /></button></div>)}
        </div>
      </section>
      <footer className="method-footer"><span>{methodologyStatus.modelId} · v{methodologyStatus.version}</span><strong>{methodologyStatus.label}</strong></footer>
    </AppShell>
  );
}
