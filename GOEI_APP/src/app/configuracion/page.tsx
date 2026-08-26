import { AppShell } from "@/components/app-shell";
import { CheckCircle2, CircleAlert, Clock3, LockKeyhole, ServerCog } from "lucide-react";
import { readinessStateLabels, readinessSummary, type ReadinessState } from "@/domain/readiness";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";
import { getReadinessReport } from "@/server/repositories/readiness";

const stateIcons = { ready: CheckCircle2, pending: Clock3, blocked: LockKeyhole, attention: CircleAlert } satisfies Record<ReadinessState, typeof CheckCircle2>;

export default async function SettingsPage(){
  const context = await requireWorkspaceContext();
  const report = await getReadinessReport(context);
  const summary = readinessSummary(report.checks);
  return <AppShell><header className="page-header readiness-header"><div><p className="breadcrumb">Preparación técnica</p><h1>Estado del entorno</h1><p>Lectura operativa de conexión, aislamiento y bloqueos antes del prepiloto.</p></div><span className="environment-chip"><ServerCog size={15}/>{report.modeLabel}</span></header><section className="readiness-summary"><article className="card"><strong>{summary.ready}</strong><span>Controles verificados</span></article><article className="card"><strong>{summary.pending}</strong><span>Pruebas pendientes</span></article><article className="card"><strong>{summary.blocked}</strong><span>Bloqueos esperados</span></article><article className="card"><strong>{summary.attention}</strong><span>Alertas técnicas</span></article></section><section className="card readiness-panel"><div className="card-head"><div><span className="section-kicker">{report.organizationLabel}</span><h2>Lista de preparación</h2></div><span className="status-pill neutral"><i/>Lectura de servidor</span></div><div className="readiness-list">{report.checks.map(check=>{const Icon=stateIcons[check.state];return <article className={`readiness-row ${check.state}`} key={check.id}><span className="readiness-icon"><Icon size={18}/></span><div><h3>{check.label}</h3><p>{check.detail}</p></div><span className={`readiness-state ${check.state}`}>{readinessStateLabels[check.state]}</span></article>})}</div></section><aside className="readiness-note"><LockKeyhole size={18}/><div><strong>Este panel no autoriza captura real</strong><p>Un control técnico correcto no sustituye decisiones científicas, aprobación ética, reglas de privacidad ni autorización operativa.</p></div></aside></AppShell>;
}
