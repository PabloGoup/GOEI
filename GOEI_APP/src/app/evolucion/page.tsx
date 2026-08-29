import Link from "next/link";
import { LineChart } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { listCalculationRuns } from "@/server/repositories/workspace";

export default async function EvolutionPage(){
  const runs=await listCalculationRuns();
  const histories=Object.values(Object.groupBy(runs,item=>item.assessmentId)).filter((items):items is NonNullable<typeof items>=>Boolean(items)).map(items=>[...items].sort((a,b)=>a.calculatedAt.localeCompare(b.calculatedAt))).filter(items=>items.length>1);
  return <AppShell><header className="page-header"><div><p className="breadcrumb">GOEI · Evolución</p><h1>La condición se confirma al volver a medir</h1><p>La comparación más segura es la de un mismo establecimiento, con versión y alcance compatibles.</p></div></header>{histories.length===0?<section className="card empty-state"><LineChart size={30}/><h2>Aún no existe una serie comparable</h2><p>Para mostrar evolución se requieren al menos dos ejecuciones del mismo expediente con períodos distintos y trazabilidad conservada. Los cinco casos actuales ilustran desenlaces distintos, no una trayectoria real.</p><Link className="button primary" href="/evaluaciones">Abrir evaluaciones</Link></section>:<section className="evolution-list">{histories.map(history=><article className="card" key={history[0].assessmentId}><span className="section-kicker">Trayectoria trazable</span><h2>{history[0].establishment}</h2><div className="evolution-runs">{history.map(run=><div key={run.id}><small>{new Intl.DateTimeFormat("es-CL",{dateStyle:"medium"}).format(new Date(run.calculatedAt))}</small><strong>{run.displayFinalScore??"—"}</strong><span>Gate {run.gate.replace("_"," ")} · confianza {run.displayConfidence??"—"}%</span></div>)}</div></article>)}</section>}<footer className="method-footer"><span>La evolución no mezcla versiones ni sustituye la revisión del expediente.</span><strong>PROVISIONAL — NO VALIDADO</strong></footer></AppShell>;
}
