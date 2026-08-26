import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { StatusPill } from "@/components/status-pill";
import { listAssessments } from "@/server/repositories/workspace";
import type { Route } from "next";
import { ArrowRight, ClipboardCheck, Plus, Search } from "lucide-react";
import { assessmentStatusLabels, type AssessmentStatus } from "@/domain/assessment-lifecycle";

const tone = (status:string) => status === "CLOSED" ? "success" as const : status === "IN_REVIEW" || status === "SUBMITTED" ? "neutral" as const : "warning" as const;
const statusLabel = (status:string) => assessmentStatusLabels[status as AssessmentStatus] ?? status;

export default async function AssessmentsPage() {
  const assessments = await listAssessments();
  return <AppShell>
    <header className="page-header"><div><p className="breadcrumb">Aplicación del instrumento</p><h1>Evaluaciones</h1><p>Expedientes versionados con responsables, cobertura y trazabilidad.</p></div><Link className="button primary" href="/evaluaciones/nueva"><Plus size={17}/> Nueva demostración</Link></header>
    <section className="card resource-toolbar"><label><Search size={16}/><input placeholder="Buscar evaluación"/></label><div className="filter-chips"><button className="active">Todas</button><button>En curso</button><button>Revisión</button><button>Cerradas</button></div></section>
    <section className="assessment-list">
      {assessments.map(item => <article className="card assessment-list-row" key={item.id}>
        <span className="assessment-list-icon"><ClipboardCheck/></span><div><small>{item.code} · {item.kind}</small><h2>{item.establishment}</h2><p>Instrumento GOEI piloto · v0.1.0-candidate</p></div><div className="list-progress"><span><i style={{width:`${item.progress}%`}}/></span><small>{item.progress}% completado</small></div><StatusPill tone={tone(item.status)}>{statusLabel(item.status)}</StatusPill><Link href={`/evaluaciones/${item.id}` as Route} aria-label={`Abrir ${item.establishment}`}><ArrowRight/></Link>
      </article>)}
    </section>
  </AppShell>;
}
