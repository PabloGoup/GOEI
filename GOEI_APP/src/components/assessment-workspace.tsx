"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, FileUp, Info, LockKeyhole, Save, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { evidenceGrades, instrument, instrumentCriteria, instrumentDimensions, levelRubric, type CriterionStatus } from "@/domain/instrument";
import { saveAssessmentResponse } from "@/server/actions/assessment-actions";

type ResponseDraft = { status: CriterionStatus; level: number | null; evidenceGrade: number; justification: string };
type DraftMap = Record<string, ResponseDraft>;
type Assessment = { id:string; establishment:string; code:string; kind:string; status:string; progress:number };
type StoredResponse = { criterion_id:string; status:CriterionStatus; level:number|null; evidence_grade:number; justification:string; no_apply_basis:string|null };

const emptyDraft = (): DraftMap => Object.fromEntries(instrumentCriteria.map(c => [c.id,{status:"PENDING",level:null,evidenceGrade:0,justification:""}]));

export function AssessmentWorkspace({ assessment, initialResponses = [], persistence = "local" }: { assessment: Assessment; initialResponses?: StoredResponse[]; persistence?: "local"|"supabase" }) {
  const [selectedId,setSelectedId] = useState(instrumentCriteria[0].id);
  const [responses,setResponses] = useState<DraftMap>(() => ({...emptyDraft(),...Object.fromEntries(initialResponses.map(item=>[item.criterion_id,{status:item.status,level:item.level,evidenceGrade:item.evidence_grade,justification:item.justification || item.no_apply_basis || ""}]))}));
  const [saved,setSaved] = useState(true);
  const [lastEditedId,setLastEditedId] = useState(instrumentCriteria[0].id);
  const criterion = instrumentCriteria.find(item => item.id === selectedId) ?? instrumentCriteria[0];
  const response = responses[criterion.id];
  const index = instrumentCriteria.findIndex(item => item.id === criterion.id);
  const storageKey = `goei:synthetic:${assessment.id}`;

  useEffect(() => {
    if (persistence !== "local") return;
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return;
    const timer = window.setTimeout(() => {
      try { setResponses({...emptyDraft(),...JSON.parse(stored) as DraftMap}); } catch { /* discard malformed demo state */ }
    },0);
    return () => window.clearTimeout(timer);
  },[storageKey,persistence]);

  useEffect(() => {
    if (saved) return;
    const timer = window.setTimeout(() => {
      if (persistence === "local") {
        window.localStorage.setItem(storageKey,JSON.stringify(responses));
        setSaved(true);
        return;
      }
      const current = responses[lastEditedId];
      void saveAssessmentResponse({assessmentId:assessment.id,criterionId:lastEditedId,dimensionId:lastEditedId.split(".")[0],status:current.status,level:current.level,evidenceGrade:current.evidenceGrade,justification:current.justification,noApplyBasis:current.status === "NO_APLICA" ? current.justification : null}).then(result=>setSaved(result.ok));
    },500);
    return () => window.clearTimeout(timer);
  },[responses,saved,storageKey,persistence,lastEditedId,assessment.id]);

  const completed = useMemo(() => Object.values(responses).filter(item => item.status !== "PENDING").length,[responses]);
  const percentage = Math.round(completed / instrumentCriteria.length * 100);
  const update = (patch: Partial<ResponseDraft>) => {
    setLastEditedId(criterion.id);
    setResponses(current => ({...current,[criterion.id]:{...current[criterion.id],...patch}}));
    setSaved(false);
  };
  const setStatus = (status: CriterionStatus) => update({status,level:status === "EVALUABLE" ? response.level : null,evidenceGrade:status === "EVALUABLE" ? Math.max(1,response.evidenceGrade) : 0});
  const move = (direction:number) => setSelectedId(instrumentCriteria[Math.max(0,Math.min(instrumentCriteria.length-1,index+direction))].id);

  return <div className="assessment-workspace">
    <header className="workspace-header"><div><Link href="/evaluaciones"><ArrowLeft size={15}/> Evaluaciones</Link><p>{assessment.code} · {assessment.kind}</p><h1>{assessment.establishment}</h1></div><div className="save-state"><Save size={15}/><span>{saved ? (persistence === "local" ? "Guardado en demostración" : "Guardado con trazabilidad") : "Guardando…"}</span></div></header>
    <div className="workspace-warning"><ShieldAlert size={18}/><span><strong>Caso sintético.</strong> No ingreses datos de personas o negocios reales.</span><em>{instrument.status} · {instrument.version}</em></div>
    <div className="workspace-progress"><span><strong>{completed} de 28</strong> criterios revisados</span><div><i style={{width:`${percentage}%`}}/></div><b>{percentage}%</b></div>
    <div className="workspace-layout">
      <aside className="criteria-nav" aria-label="Criterios del instrumento">
        {instrumentDimensions.map(dimension => <section key={dimension.id}><h2>{dimension.id}<span>{dimension.name}</span></h2>{instrumentCriteria.filter(c=>c.dimensionId===dimension.id).map(item => <button className={item.id===criterion.id?"active":""} key={item.id} onClick={()=>setSelectedId(item.id)}><i className={responses[item.id].status!=="PENDING"?"done":""}>{responses[item.id].status!=="PENDING"?<Check size={11}/>:item.id.split(".")[1]}</i><span>{item.name}</span></button>)}</section>)}
      </aside>
      <article className="criterion-panel">
        <div className="criterion-heading"><div><span className="section-kicker">{criterion.dimensionId} · Criterio {index+1} de 28</span><h2>{criterion.id} — {criterion.name}</h2></div><span className="candidate-badge">CANDIDATO</span></div>
        <div className="orientation-box"><Info size={18}/><div><strong>Qué evidencia orienta este criterio</strong><p>{criterion.evidenceHint}</p><small>Síntesis orientativa no normativa. La referencia autorizada es el modelo metodológico.</small></div></div>
        <fieldset><legend>1. Estado de evaluación</legend><div className="segmented-options"><button className={response.status==="EVALUABLE"?"selected":""} onClick={()=>setStatus("EVALUABLE")}>Evaluable</button><button className={response.status==="NO_APLICA"?"selected":""} onClick={()=>setStatus("NO_APLICA")}>No aplica</button><button className={response.status==="NO_VERIFICABLE"?"selected":""} onClick={()=>setStatus("NO_VERIFICABLE")}>No verificable</button></div></fieldset>
        <fieldset disabled={response.status!=="EVALUABLE"}><legend>2. Nivel observado</legend><div className="level-options">{levelRubric.map(item=><button className={response.level===item.level?"selected":""} onClick={()=>update({level:item.level})} key={item.level}><b>{item.level}</b><span><strong>{item.label}</strong><small>{item.description}</small></span></button>)}</div></fieldset>
        <fieldset disabled={response.status!=="EVALUABLE"}><legend>3. Calidad de evidencia</legend><div className="evidence-options">{evidenceGrades.filter(item=>item.grade>0).map(item=><button className={response.evidenceGrade===item.grade?"selected":""} onClick={()=>update({evidenceGrade:item.grade})} key={item.grade}><b>{item.grade}</b><span>{item.label}</span></button>)}</div></fieldset>
        <fieldset><legend>4. Hallazgo y justificación</legend><textarea value={response.justification} onChange={event=>update({justification:event.target.value})} placeholder={response.status==="NO_APLICA"?"Fundamento previo de no aplicabilidad…":"Describe únicamente hechos respaldados por el expediente…"}/><div className="evidence-upload"><FileUp size={17}/><span><strong>Adjuntar evidencia</strong><small>Disponible al conectar el bucket privado de Supabase.</small></span><button disabled>Seleccionar archivo</button></div></fieldset>
        <div className="criterion-lock"><LockKeyhole size={15}/> El nivel no produce todavía un puntaje en esta pantalla. El motor se integrará y verificará en Fase 3.</div>
        <footer className="criterion-footer"><button className="button secondary" disabled={index===0} onClick={()=>move(-1)}><ChevronLeft size={16}/> Anterior</button><span>Cambios {saved?"guardados":"pendientes"}</span><button className="button primary" disabled={index===instrumentCriteria.length-1} onClick={()=>move(1)}>Siguiente <ChevronRight size={16}/></button></footer>
      </article>
    </div>
  </div>;
}
