"use client";

import { useMemo, useState } from "react";
import { ArrowRight, BarChart3, Scale, Sparkles } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";

type OperationalFacets = {delivery:"en_sala"|"para_llevar"|"reparto"|"mixto";production:"convencional"|"cocina_enfriamiento"|"central_produccion"|"ensamblar_servir";economicNature:"comercial"|"no_comercial"};

export type SimulationRun = {
  id:string; assessmentId:string; establishment:string; code:string; displayFinalScore:number|null;
  displayCoverage:number; displayConfidence:number|null; emissionStatus:string; band:string; gate:string;
  dimensions:{dimensionId:string;displayScore:number|null}[];
  facets:OperationalFacets|null;
};

const scoreLabel = (value:number|null) => value === null ? "Sin puntaje" : `${value} / 100`;
const difference = (left:number|null,right:number|null) => left === null || right === null ? "No comparable" : `${right-left > 0 ? "+" : ""}${right-left} puntos`;

export function SimulationLab({runs}:{runs:SimulationRun[]}) {
  const [baseId,setBaseId] = useState(runs[0]?.id ?? "");
  const [compareId,setCompareId] = useState(runs[1]?.id ?? runs[0]?.id ?? "");
  const [focus,setFocus] = useState<"performance"|"coverage"|"confidence">("performance");
  const baseline = runs.find(run => run.id === baseId) ?? runs[0];
  const comparison = runs.find(run => run.id === compareId) ?? runs[1] ?? baseline;
  const focusValues = useMemo(() => {
    if (!baseline || !comparison) return {base:"—",compare:"—",delta:"—"};
    if (focus === "coverage") return {base:`${baseline.displayCoverage}%`,compare:`${comparison.displayCoverage}%`,delta:`${comparison.displayCoverage-baseline.displayCoverage > 0 ? "+" : ""}${comparison.displayCoverage-baseline.displayCoverage} pp`};
    if (focus === "confidence") {
      const base = baseline.displayConfidence; const compare = comparison.displayConfidence;
      return {base:base === null ? "—" : `${base}%`,compare:compare === null ? "—" : `${compare}%`,delta:base === null || compare === null ? "No comparable" : `${compare-base > 0 ? "+" : ""}${compare-base} pp`};
    }
    return {base:scoreLabel(baseline.displayFinalScore),compare:scoreLabel(comparison.displayFinalScore),delta:difference(baseline.displayFinalScore,comparison.displayFinalScore)};
  },[baseline,comparison,focus]);
  const facetComparison = baseline?.facets && comparison?.facets ? {
    sameDelivery:baseline.facets.delivery === comparison.facets.delivery,
    sameProduction:baseline.facets.production === comparison.facets.production,
    sameNature:baseline.facets.economicNature === comparison.facets.economicNature
  } : null;
  const structurallyComparable = Boolean(facetComparison && facetComparison.sameDelivery && facetComparison.sameProduction && facetComparison.sameNature);

  if (runs.length < 2) return <section className="card empty-state"><BarChart3 size={30}/><h2>Faltan escenarios para comparar</h2><p>Carga los cinco casos demostrativos y sus lecturas provisionales para usar este laboratorio.</p><Link className="button primary" href="/dashboard">Ir al panorama</Link></section>;

  return <section className="simulation-lab card">
    <header className="simulation-lab-header"><div><span className="section-kicker">Comparación controlada</span><h2>Contrasta dos lecturas ya calculadas</h2><p>Este laboratorio no modifica el modelo, ni proyecta resultados: sólo hace visible la diferencia entre expedientes sintéticos existentes.</p></div><span className="simulation-mark"><Sparkles size={18}/> Sólo sintético</span></header>
    <div className="simulation-selectors"><label>Escenario base<select value={baseId} onChange={event=>setBaseId(event.target.value)}>{runs.map(run=><option key={run.id} value={run.id}>{run.code} · {run.establishment}</option>)}</select></label><Scale size={19}/><label>Escenario comparado<select value={compareId} onChange={event=>setCompareId(event.target.value)}>{runs.map(run=><option key={run.id} value={run.id}>{run.code} · {run.establishment}</option>)}</select></label></div>
    <div className="simulation-focus" role="group" aria-label="Variable a comparar"><button className={focus === "performance" ? "active" : ""} onClick={()=>setFocus("performance")}>Desempeño</button><button className={focus === "coverage" ? "active" : ""} onClick={()=>setFocus("coverage")}>Cobertura</button><button className={focus === "confidence" ? "active" : ""} onClick={()=>setFocus("confidence")}>Confianza</button></div>
    <div className="simulation-comparison"><article><small>Base</small><strong>{baseline.establishment}</strong><b>{focusValues.base}</b><span>Gate {baseline.gate.replace("_"," ")}</span></article><ArrowRight className="simulation-arrow"/><article><small>Comparado</small><strong>{comparison.establishment}</strong><b>{focusValues.compare}</b><span>Gate {comparison.gate.replace("_"," ")}</span></article><aside><small>Diferencia</small><strong>{focusValues.delta}</strong><span>La comparación no elimina ni compensa un gate crítico.</span></aside></div>
    <div className={`comparison-guard ${structurallyComparable ? "compatible" : "caution"}`}><strong>{structurallyComparable ? "Estructuras operacionales coincidentes" : "Comparación con límite de estructura"}</strong><p>{structurallyComparable ? "FX-1, FX-2 y FX-3 coinciden. La lectura entre casos sigue siendo provisional, pero la estructura operacional es comparable." : facetComparison ? "Una o más facetas difieren. No concluyas que un modelo es mejor: revisa sólo dimensiones comunes, gate y contexto." : "Faltan facetas en uno de los expedientes. Regístralas antes de interpretar una comparación entre establecimientos."}</p></div>
    <div className="dimension-comparison">{baseline.dimensions.map(dimension=>{const paired=comparison.dimensions.find(item=>item.dimensionId===dimension.dimensionId); return <div key={dimension.dimensionId}><span>{dimension.dimensionId}</span><i><b style={{width:`${dimension.displayScore ?? 0}%`}}/></i><em>{dimension.displayScore ?? "—"}</em><i className="comparison-bar"><b style={{width:`${paired?.displayScore ?? 0}%`}}/></i><em>{paired?.displayScore ?? "—"}</em></div>})}</div>
    <footer><p>Resultado técnico provisional para explicar escenarios ficticios. No es un diagnóstico, recomendación ni validación empírica.</p><div><Link className="button secondary" href={`/evaluaciones/${baseline.assessmentId}` as Route}>Abrir base</Link><Link className="button primary" href={`/evaluaciones/${comparison.assessmentId}` as Route}>Abrir comparado</Link></div></footer>
  </section>;
}
