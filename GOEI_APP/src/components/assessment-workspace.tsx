"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Info, LockKeyhole, RotateCcw, Save, Send, ShieldAlert, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { AppRole } from "@/domain/access";
import { assessmentStatusLabels, availableTransitions, isAssessmentEditable, transitionTarget, type AssessmentStatus, type AssessmentTransition } from "@/domain/assessment-lifecycle";
import { evidenceGrades, instrument, instrumentCriteria, instrumentDimensions, levelRubric, type CriterionStatus } from "@/domain/instrument";
import { saveAssessmentResponse, transitionAssessment } from "@/server/actions/assessment-actions";
import { EvidenceUploader } from "@/components/evidence-uploader";
import { evaluateWithCandidateEngine } from "@/domain/engine-adapter";

type ResponseDraft = { status: CriterionStatus; level: number | null; evidenceGrade: number; justification: string };
type DraftMap = Record<string, ResponseDraft>;
type Assessment = { id:string; establishmentId?:string|null; establishment:string; code:string; kind:string; status:AssessmentStatus; progress:number; periodStart?:string|null; periodEnd?:string|null };
type StoredResponse = { criterion_id:string; status:CriterionStatus; level:number|null; evidence_grade:number; justification:string; no_apply_basis:string|null; source_evaluator_id?:string|null };
type EvidenceItem = {evidence_code:string;title:string;storage_path:string;mime_type:string;size_bytes:number;provenance:string;sensitivity:string;criterion_id:string|null};

const emptyDraft = (): DraftMap => Object.fromEntries(instrumentCriteria.map(c => [c.id,{status:"PENDING",level:null,evidenceGrade:0,justification:""}]));

const actionLabels: Record<AssessmentTransition,string> = {SUBMIT:"Enviar a revisión",START_REVIEW:"Iniciar revisión",RETURN:"Devolver con observaciones",CLOSE:"Cerrar revisión"};

export function AssessmentWorkspace({ assessment, initialResponses = [], initialEvidence = [], persistence = "local", role }: { assessment: Assessment; initialResponses?: StoredResponse[]; initialEvidence?:EvidenceItem[]; persistence?: "local"|"supabase"; role:AppRole }) {
  const [selectedId,setSelectedId] = useState(instrumentCriteria[0].id);
  const [responses,setResponses] = useState<DraftMap>(() => ({...emptyDraft(),...Object.fromEntries(initialResponses.map(item=>[item.criterion_id,{status:item.status,level:item.level,evidenceGrade:item.evidence_grade,justification:item.justification || item.no_apply_basis || ""}]))}));
  const [saved,setSaved] = useState(true);
  const [lastEditedId,setLastEditedId] = useState(instrumentCriteria[0].id);
  const [workflowStatus,setWorkflowStatus] = useState<AssessmentStatus>(assessment.status);
  const [reviewNote,setReviewNote] = useState("");
  const [workflowMessage,setWorkflowMessage] = useState("");
  const [calculatedAt] = useState(() => new Date().toISOString());
  const [isTransitioning,startTransition] = useTransition();
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
  const engineResult = useMemo(() => evaluateWithCandidateEngine({
    assessmentId:assessment.id,
    assessmentKind:assessment.kind,
    establishmentId:assessment.establishmentId ?? null,
    establishmentName:assessment.establishment,
    periodStart:assessment.periodStart ?? null,
    periodEnd:assessment.periodEnd ?? null,
    gate:null,
    responses:instrumentCriteria.map(item => ({criterionId:item.id,...responses[item.id],noApplyBasis:responses[item.id].status === "NO_APLICA" ? responses[item.id].justification : null})),
    evidence:initialEvidence.map(item => ({criterionId:item.criterion_id,evidenceCode:item.evidence_code})),
  },calculatedAt),[assessment,calculatedAt,initialEvidence,responses]);
  const percentage = Math.round(completed / instrumentCriteria.length * 100);
  const editable = isAssessmentEditable(workflowStatus);
  const transitions = availableTransitions(workflowStatus,role,completed);
  const update = (patch: Partial<ResponseDraft>) => {
    setLastEditedId(criterion.id);
    setResponses(current => ({...current,[criterion.id]:{...current[criterion.id],...patch}}));
    setSaved(false);
  };
  const setStatus = (status: CriterionStatus) => update({status,level:status === "EVALUABLE" ? response.level : null,evidenceGrade:status === "EVALUABLE" ? Math.max(1,response.evidenceGrade) : 0});
  const move = (direction:number) => setSelectedId(instrumentCriteria[Math.max(0,Math.min(instrumentCriteria.length-1,index+direction))].id);
  const runTransition = (action: AssessmentTransition) => {
    setWorkflowMessage("");
    if ((action === "RETURN" || action === "CLOSE") && reviewNote.trim().length < 4) { setWorkflowMessage("Escribe una nota de revisión de al menos cuatro caracteres."); return; }
    if (persistence === "local") { setWorkflowStatus(transitionTarget(action)); setWorkflowMessage("Transición demostrativa aplicada sólo en este navegador."); setReviewNote(""); return; }
    startTransition(() => { void transitionAssessment({assessmentId:assessment.id,action,note:reviewNote || null}).then(result => {
      if (!result.ok) { setWorkflowMessage(result.error); return; }
      setWorkflowStatus(result.status as AssessmentStatus); setWorkflowMessage("Estado actualizado con trazabilidad."); setReviewNote("");
    }); });
  };

  return <div className="assessment-workspace">
    <header className="workspace-header"><div><Link href="/evaluaciones"><ArrowLeft size={15}/> Evaluaciones</Link><p>{assessment.code} · {assessment.kind}</p><h1>{assessment.establishment}</h1></div><div className="save-state"><Save size={15}/><span>{saved ? (persistence === "local" ? "Guardado en demostración" : "Guardado con trazabilidad") : "Guardando…"}</span></div></header>
    <div className="workspace-warning"><ShieldAlert size={18}/><span><strong>Caso sintético.</strong> No ingreses datos de personas o negocios reales.</span><em>{instrument.status} · {instrument.version}</em></div>
    <div className="workspace-progress"><span><strong>{completed} de 28</strong> criterios revisados</span><div><i style={{width:`${percentage}%`}}/></div><b>{percentage}%</b></div>
    <section className="engine-readiness" aria-label="Preparación del motor GOEI candidato">
      <div><span className="section-kicker">Motor GOEI · paquete independiente</span><h2>{engineResult.ready ? "Lectura provisional disponible" : "Cálculo bloqueado de forma responsable"}</h2><p>El motor candidato ya está conectado, pero sólo calcula cuando el contrato está completo y explícito.</p></div>
      {engineResult.ready ? <div className="engine-metrics"><span><small>Desempeño</small><strong>{engineResult.output.displayFinalScore ?? "—"}</strong></span><span><small>Cobertura</small><strong>{engineResult.output.displayCoverage}%</strong></span><span><small>Confianza</small><strong>{engineResult.output.displayConfidence ?? "—"}%</strong></span></div> : <div className="engine-blockers"><strong>{engineResult.reviewedCriteria}/28 criterios revisados</strong><ul>{engineResult.blockers.map(item=><li key={item}>{item}</li>)}</ul></div>}
      <small>PROVISIONAL — NO VALIDADO. La preparación técnica no sustituye ratificación científica.</small>
    </section>
    <section className="workflow-bar" aria-label="Flujo de revisión"><div><span>Estado operativo</span><strong>{assessmentStatusLabels[workflowStatus]}</strong><small>{editable ? "El expediente admite edición según los permisos actuales." : "Las respuestas están bloqueadas en este estado."}</small></div><div className="workflow-actions">{workflowStatus === "IN_REVIEW" && transitions.some(item=>item === "RETURN" || item === "CLOSE") && <textarea aria-label="Nota de revisión" value={reviewNote} onChange={event=>setReviewNote(event.target.value)} placeholder="Observaciones o fundamento del cierre…"/>}{transitions.map(action=><button key={action} className={action === "RETURN" ? "button secondary" : "button primary"} disabled={isTransitioning || !saved} onClick={()=>runTransition(action)}>{action === "RETURN" ? <RotateCcw size={14}/> : action === "CLOSE" ? <ShieldCheck size={14}/> : <Send size={14}/>} {actionLabels[action]}</button>)}</div>{workflowMessage && <p role="status">{workflowMessage}</p>}</section>
    <div className="workspace-layout">
      <aside className="criteria-nav" aria-label="Criterios del instrumento">
        {instrumentDimensions.map(dimension => <section key={dimension.id}><h2>{dimension.id}<span>{dimension.name}</span></h2>{instrumentCriteria.filter(c=>c.dimensionId===dimension.id).map(item => <button className={item.id===criterion.id?"active":""} key={item.id} onClick={()=>setSelectedId(item.id)}><i className={responses[item.id].status!=="PENDING"?"done":""}>{responses[item.id].status!=="PENDING"?<Check size={11}/>:item.id.split(".")[1]}</i><span>{item.name}</span></button>)}</section>)}
      </aside>
      <article className="criterion-panel">
        <div className="criterion-heading"><div><span className="section-kicker">{criterion.dimensionId} · Criterio {index+1} de 28</span><h2>{criterion.id} — {criterion.name}</h2></div><span className="candidate-badge">CANDIDATO</span></div>
        <div className="orientation-box"><Info size={18}/><div><strong>Qué evidencia orienta este criterio</strong><p>{criterion.evidenceHint}</p><small>Síntesis orientativa no normativa. La referencia autorizada es el modelo metodológico.</small></div></div>
        <fieldset disabled={!editable}><legend>1. Estado de evaluación</legend><div className="segmented-options"><button className={response.status==="EVALUABLE"?"selected":""} onClick={()=>setStatus("EVALUABLE")}>Evaluable</button><button className={response.status==="NO_APLICA"?"selected":""} onClick={()=>setStatus("NO_APLICA")}>No aplica</button><button className={response.status==="NO_VERIFICABLE"?"selected":""} onClick={()=>setStatus("NO_VERIFICABLE")}>No verificable</button></div></fieldset>
        <fieldset disabled={!editable || response.status!=="EVALUABLE"}><legend>2. Nivel observado</legend><div className="level-options">{levelRubric.map(item=><button className={response.level===item.level?"selected":""} onClick={()=>update({level:item.level})} key={item.level}><b>{item.level}</b><span><strong>{item.label}</strong><small>{item.description}</small></span></button>)}</div></fieldset>
        <fieldset disabled={!editable || response.status!=="EVALUABLE"}><legend>3. Calidad de evidencia</legend><div className="evidence-options">{evidenceGrades.filter(item=>item.grade>0).map(item=><button className={response.evidenceGrade===item.grade?"selected":""} onClick={()=>update({evidenceGrade:item.grade})} key={item.grade}><b>{item.grade}</b><span>{item.label}</span></button>)}</div></fieldset>
        <fieldset disabled={!editable}><legend>4. Hallazgo y justificación</legend><textarea value={response.justification} onChange={event=>update({justification:event.target.value})} placeholder={response.status==="NO_APLICA"?"Fundamento previo de no aplicabilidad…":"Describe únicamente hechos respaldados por el expediente…"}/></fieldset>
        <section className="criterion-evidence"><h3>5. Evidencia privada</h3><EvidenceUploader assessmentId={assessment.id} criterionId={criterion.id} enabled={persistence==="supabase" && editable} items={initialEvidence.filter(item=>item.criterion_id===criterion.id)}/></section>
        <div className="criterion-lock"><LockKeyhole size={15}/> El motor candidato no emite un resultado hasta completar el período, el gate crítico y los 28 criterios.</div>
        <footer className="criterion-footer"><button className="button secondary" disabled={index===0} onClick={()=>move(-1)}><ChevronLeft size={16}/> Anterior</button><span>Cambios {saved?"guardados":"pendientes"}</span><button className="button primary" disabled={index===instrumentCriteria.length-1} onClick={()=>move(1)}>Siguiente <ChevronRight size={16}/></button></footer>
      </article>
    </div>
  </div>;
}
