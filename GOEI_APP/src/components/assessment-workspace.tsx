"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { ArrowLeft, ArrowRight, Calculator, CalendarRange, Check, ChevronLeft, ChevronRight, CircleCheckBig, Info, Lightbulb, LockKeyhole, RotateCcw, Save, SearchCheck, Send, ShieldAlert, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";
import type { AppRole } from "@/domain/access";
import { assessmentStatusLabels, availableTransitions, isAssessmentEditable, transitionTarget, type AssessmentStatus, type AssessmentTransition } from "@/domain/assessment-lifecycle";
import { evidenceGrades, instrument, instrumentCriteria, instrumentDimensions, levelRubric, type CriterionStatus } from "@/domain/instrument";
import { executeCandidateCalculation, saveAssessmentResponse, saveCalculationSettings, transitionAssessment } from "@/server/actions/assessment-actions";
import { EvidenceUploader } from "@/components/evidence-uploader";
import { evaluateWithCandidateEngine } from "@/domain/engine-adapter";
import type { AssessmentOutput, Gate } from "@goei/engine-ts";
import type { DemoInsights } from "@/data/demo";

type ResponseDraft = { status: CriterionStatus; level: number | null; evidenceGrade: number; justification: string };
type DraftMap = Record<string, ResponseDraft>;
type Assessment = { id:string; establishmentId?:string|null; establishment:string; code:string; kind:string; status:AssessmentStatus; progress:number; periodStart?:string|null; periodEnd?:string|null; gateStatus?:Gate|null; gateBasis?:string|null; gateProtocolVersion?:string|null };
type StoredResponse = { criterion_id:string; status:CriterionStatus; level:number|null; evidence_grade:number; justification:string; no_apply_basis:string|null; source_evaluator_id?:string|null };
type EvidenceItem = {evidence_code:string;title:string;storage_path:string;mime_type:string;size_bytes:number;provenance:string;sensitivity:string;criterion_id:string|null};
type CalculationRun = {id:string;output_payload:AssessmentOutput;input_digest:string;contract_version:string;model_version:string;calculated_at:string};

const emptyDraft = (): DraftMap => Object.fromEntries(instrumentCriteria.map(c => [c.id,{status:"PENDING",level:null,evidenceGrade:0,justification:""}]));

const actionLabels: Record<AssessmentTransition,string> = {SUBMIT:"Enviar a revisión",START_REVIEW:"Iniciar revisión",RETURN:"Devolver con observaciones",CLOSE:"Cerrar revisión"};

export function AssessmentWorkspace({ assessment, initialResponses = [], initialEvidence = [], initialCalculationRuns = [], persistence = "local", role, backHref="/evaluaciones", demoInsights }: { assessment: Assessment; initialResponses?: StoredResponse[]; initialEvidence?:EvidenceItem[]; initialCalculationRuns?:CalculationRun[]; persistence?: "local"|"supabase"; role:AppRole; backHref?:string; demoInsights?:DemoInsights }) {
  const [selectedId,setSelectedId] = useState(instrumentCriteria[0].id);
  const [responses,setResponses] = useState<DraftMap>(() => ({...emptyDraft(),...Object.fromEntries(initialResponses.map(item=>[item.criterion_id,{status:item.status,level:item.level,evidenceGrade:item.evidence_grade,justification:item.justification || item.no_apply_basis || ""}]))}));
  const [saved,setSaved] = useState(true);
  const [lastEditedId,setLastEditedId] = useState(instrumentCriteria[0].id);
  const [workflowStatus,setWorkflowStatus] = useState<AssessmentStatus>(assessment.status);
  const [reviewNote,setReviewNote] = useState("");
  const [workflowMessage,setWorkflowMessage] = useState("");
  const [calculatedAt] = useState(() => new Date().toISOString());
  const [periodStart,setPeriodStart] = useState(assessment.periodStart ?? "");
  const [periodEnd,setPeriodEnd] = useState(assessment.periodEnd ?? "");
  const [gateStatus,setGateStatus] = useState<Gate | "">(assessment.gateStatus ?? "");
  const [gateBasis,setGateBasis] = useState(assessment.gateBasis ?? "");
  const [gateProtocolVersion,setGateProtocolVersion] = useState(assessment.gateProtocolVersion ?? "");
  const [settingsSaved,setSettingsSaved] = useState(Boolean(assessment.periodStart && assessment.periodEnd && assessment.gateStatus && assessment.gateBasis));
  const [engineMessage,setEngineMessage] = useState("");
  const [navigationMessage,setNavigationMessage] = useState("");
  const [latestOutput,setLatestOutput] = useState<AssessmentOutput | null>(initialCalculationRuns[0]?.output_payload ?? null);
  const [isTransitioning,startTransition] = useTransition();
  const criterionHeadingRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLElement>(null);
  const criterion = instrumentCriteria.find(item => item.id === selectedId) ?? instrumentCriteria[0];
  const response = responses[criterion.id];
  const index = instrumentCriteria.findIndex(item => item.id === criterion.id);
  const storageKey = `goei:synthetic:${assessment.id}`;

  useEffect(() => {
    if (persistence !== "local") return;
    if (initialResponses.length === instrumentCriteria.length) return;
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return;
    const timer = window.setTimeout(() => {
      try { setResponses({...emptyDraft(),...JSON.parse(stored) as DraftMap}); } catch { /* discard malformed demo state */ }
    },0);
    return () => window.clearTimeout(timer);
  },[storageKey,persistence,initialResponses]);

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
    periodStart:periodStart || null,
    periodEnd:periodEnd || null,
    gate:gateStatus && gateBasis.trim().length >= 8 ? {status:gateStatus,basis:gateBasis.trim(),protocolVersion:gateProtocolVersion.trim() || null} : null,
    responses:instrumentCriteria.map(item => ({criterionId:item.id,...responses[item.id],noApplyBasis:responses[item.id].status === "NO_APLICA" ? responses[item.id].justification : null})),
    evidence:initialEvidence.map(item => ({criterionId:item.criterion_id,evidenceCode:item.evidence_code})),
  },calculatedAt),[assessment,calculatedAt,gateBasis,gateProtocolVersion,gateStatus,initialEvidence,periodEnd,periodStart,responses]);
  const displayedOutput = latestOutput ?? (persistence === "local" && engineResult.ready && demoInsights ? engineResult.output : null);
  const percentage = Math.round(completed / instrumentCriteria.length * 100);
  const editable = isAssessmentEditable(workflowStatus);
  const transitions = availableTransitions(workflowStatus,role,completed);
  const update = (patch: Partial<ResponseDraft>) => {
    setLastEditedId(criterion.id);
    setResponses(current => ({...current,[criterion.id]:{...current[criterion.id],...patch}}));
    setSaved(false);
  };
  const setStatus = (status: CriterionStatus) => update({status,level:status === "EVALUABLE" ? response.level : null,evidenceGrade:status === "EVALUABLE" ? Math.max(1,response.evidenceGrade) : 0});
  const move = (direction:number) => {
    const nextIndex = Math.max(0,Math.min(instrumentCriteria.length-1,index+direction));
    const nextCriterion = instrumentCriteria[nextIndex];
    if (nextCriterion.id === criterion.id) return;
    setSelectedId(nextCriterion.id);
    setNavigationMessage(`Ahora estás en ${nextCriterion.id}: ${nextCriterion.name}.`);
    window.setTimeout(() => criterionHeadingRef.current?.scrollIntoView({behavior:"smooth",block:"start"}), 0);
  };
  const runTransition = (action: AssessmentTransition) => {
    setWorkflowMessage("");
    if ((action === "RETURN" || action === "CLOSE") && reviewNote.trim().length < 4) { setWorkflowMessage("Escribe una nota de revisión de al menos cuatro caracteres."); return; }
    if (persistence === "local") { setWorkflowStatus(transitionTarget(action)); setWorkflowMessage("Transición demostrativa aplicada sólo en este navegador."); setReviewNote(""); return; }
    startTransition(() => { void transitionAssessment({assessmentId:assessment.id,action,note:reviewNote || null}).then(result => {
      if (!result.ok) { setWorkflowMessage(result.error); return; }
      setWorkflowStatus(result.status as AssessmentStatus); setWorkflowMessage("Estado actualizado con trazabilidad."); setReviewNote("");
    }); });
  };
  const changeSetting = (setter:(value:string)=>void,value:string) => { setter(value); setSettingsSaved(false); setEngineMessage(""); };
  const saveSettings = () => {
    setEngineMessage("");
    if (!periodStart || !periodEnd || !gateStatus || gateBasis.trim().length < 8) { setEngineMessage("Completa período, estado del gate y un fundamento explícito de al menos ocho caracteres."); return; }
    if (periodEnd < periodStart) { setEngineMessage("La fecha final no puede ser anterior a la inicial."); return; }
    if (persistence === "local") { setSettingsSaved(true); setEngineMessage("Configuración guardada sólo para esta demostración."); return; }
    startTransition(()=>{ void saveCalculationSettings({assessmentId:assessment.id,periodStart,periodEnd,gateStatus,gateBasis,gateProtocolVersion:gateProtocolVersion || null}).then(result=>{
      setEngineMessage(result.ok ? "Período y gate guardados con trazabilidad." : result.error);
      setSettingsSaved(result.ok);
    }); });
  };
  const executeEngine = () => {
    setEngineMessage("");
    if (!engineResult.ready) { setEngineMessage(engineResult.blockers.join(" ")); return; }
    if (!settingsSaved) { setEngineMessage("Guarda primero el período y el gate crítico."); return; }
    if (persistence === "local") {
      setLatestOutput(engineResult.output);
      setEngineMessage("Lectura provisional lista. Te llevamos al resultado del caso.");
      window.setTimeout(() => resultRef.current?.scrollIntoView({behavior:"smooth",block:"start"}), 0);
      return;
    }
    startTransition(()=>{ void executeCandidateCalculation({assessmentId:assessment.id}).then(result=>{
      if (!result.ok) { setEngineMessage([result.error,...("blockers" in result ? result.blockers ?? [] : [])].join(" ")); return; }
      setLatestOutput(result.output); setEngineMessage("Ejecución guardada con entrada, salida, versiones y digest reproducible.");
    }); });
  };

  return <div className="assessment-workspace">
    <header className="workspace-header"><div><Link href={backHref as Route}><ArrowLeft size={15}/> {backHref==="/demo"?"Volver a la demostración":"Evaluaciones"}</Link><p>{assessment.code} · {assessment.kind}</p><h1>{assessment.establishment}</h1></div><div className="save-state"><Save size={15}/><span>{saved ? (persistence === "local" ? "Guardado en demostración" : "Guardado con trazabilidad") : "Guardando…"}</span></div></header>
    <div className="workspace-warning"><ShieldAlert size={18}/><span><strong>Caso sintético.</strong> No ingreses datos de personas o negocios reales.</span><em>{instrument.status} · {instrument.version}</em></div>
    <div className="workspace-progress"><span><strong>{completed} de 28</strong> criterios revisados</span><div><i style={{width:`${percentage}%`}}/></div><b>{percentage}%</b></div>
    <section className="calculation-settings" aria-label="Período y gate crítico">
      <div className="settings-heading"><CalendarRange size={20}/><div><span className="section-kicker">Contrato de evaluación</span><h2>Período y gate crítico</h2><p>Estos datos son explícitos: la aplicación no los deduce desde las respuestas.</p></div></div>
      <div className="settings-grid">
        <label>Inicio del período<input type="date" value={periodStart} disabled={!editable} onChange={event=>changeSetting(setPeriodStart,event.target.value)}/></label>
        <label>Fin del período<input type="date" value={periodEnd} disabled={!editable} onChange={event=>changeSetting(setPeriodEnd,event.target.value)}/></label>
        <label>Estado del gate<select value={gateStatus} disabled={!editable} onChange={event=>{setGateStatus(event.target.value as Gate | "");setSettingsSaved(false);setEngineMessage("");}}><option value="">Seleccionar…</option><option value="VERDE">Verde</option><option value="ROJO">Rojo · no compensatorio</option><option value="NO_VERIFICABLE">No verificable</option></select></label>
        <label>Versión del protocolo <small>(opcional)</small><input value={gateProtocolVersion} maxLength={120} disabled={!editable} onChange={event=>changeSetting(setGateProtocolVersion,event.target.value)} placeholder="Identificador autorizado"/></label>
        <label className="settings-basis">Fundamento del gate<textarea value={gateBasis} maxLength={3000} disabled={!editable} onChange={event=>changeSetting(setGateBasis,event.target.value)} placeholder="Registra el fundamento observable; no infieras el gate desde el puntaje."/></label>
      </div>
      <div className="settings-actions"><span>{settingsSaved ? "Configuración guardada" : "Cambios pendientes"}</span><button className="button secondary" disabled={!editable || isTransitioning} onClick={saveSettings}><Save size={15}/> Guardar período y gate</button></div>
    </section>
    <section className="engine-readiness" aria-label="Preparación del motor GOEI candidato">
      <div><span className="section-kicker">Motor GOEI · paquete independiente</span><h2>{engineResult.ready ? "Lectura provisional disponible" : "Cálculo bloqueado de forma responsable"}</h2><p>El motor candidato ya está conectado, pero sólo calcula cuando el contrato está completo y explícito.</p></div>
      {engineResult.ready ? <div className="engine-metrics"><span><small>Desempeño</small><strong>{engineResult.output.displayFinalScore ?? "—"}</strong></span><span><small>Cobertura</small><strong>{engineResult.output.displayCoverage}%</strong></span><span><small>Confianza</small><strong>{engineResult.output.displayConfidence ?? "—"}%</strong></span></div> : <div className="engine-blockers"><strong>{engineResult.reviewedCriteria}/28 criterios revisados</strong><ul>{engineResult.blockers.map(item=><li key={item}>{item}</li>)}</ul></div>}
      <div className="engine-actions"><button className="button primary" disabled={!engineResult.ready || !settingsSaved || isTransitioning} onClick={executeEngine}><Calculator size={16}/> {displayedOutput ? "Ver lectura provisional" : "Ejecutar lectura provisional"}</button>{engineMessage && <p role="status">{engineMessage}</p>}</div>
      <small>PROVISIONAL — NO VALIDADO. La preparación técnica no sustituye ratificación científica.</small>
    </section>
    {displayedOutput && <section ref={resultRef} className="calculation-result" aria-label="Última lectura provisional" tabIndex={-1}><div className="result-heading"><div><span className="section-kicker">Lectura provisional del caso</span><h2>{displayedOutput.displayFinalScore === null ? "Perfil parcial sin puntaje" : `${displayedOutput.displayFinalScore} / 100`}</h2><p>{displayedOutput.emissionStatus} · Gate {displayedOutput.gate}</p></div><div className="engine-metrics"><span><small>Cobertura</small><strong>{displayedOutput.displayCoverage}%</strong></span><span><small>Confianza</small><strong>{displayedOutput.displayConfidence ?? "—"}%</strong></span></div></div><div className="dimension-results">{displayedOutput.dimensions.map(item=><div key={item.dimensionId}><span>{item.dimensionId}</span><div><i style={{width:`${item.displayScore ?? 0}%`}}/></div><strong>{item.displayScore ?? "—"}</strong></div>)}</div><footer><span>Modelo {displayedOutput.modelVersion}</span><span>{displayedOutput.trace.inputDigest.slice(0,22)}…</span><strong>PROVISIONAL — NO VALIDADO</strong></footer></section>}
    {demoInsights && <section className="demo-insights" aria-label="Lectura explicada del caso sintético">
      <header><div><span className="section-kicker">Lectura explicada del caso</span><h2>Qué observar y qué podrías hacer</h2><p>{demoInsights.summary}</p></div><span className="illustrative-label">Orientación ilustrativa · no prescriptiva</span></header>
      <div className="insight-grid">
        <article><CircleCheckBig/><h3>Fortalezas observadas</h3><ul>{demoInsights.strengths.map(item=><li key={item}>{item}</li>)}</ul></article>
        <article><SearchCheck/><h3>Hallazgos a revisar</h3><ul>{demoInsights.findings.map(item=><li key={item}>{item}</li>)}</ul></article>
        <article><Lightbulb/><h3>Acciones sugeridas</h3><ul>{demoInsights.suggestedActions.map(item=><li key={item}>{item}</li>)}</ul></article>
      </div>
      <footer><p>Estas acciones ayudan a interpretar el escenario ficticio; no forman parte ratificada del estándar ni sustituyen juicio profesional.</p><div><Link className="button secondary" href="/demo#casos">Comparar otros casos</Link><Link className="button primary" href="/demo#resultados">Ver comparación <ArrowRight size={15}/></Link></div></footer>
    </section>}
    <section className="workflow-bar" aria-label="Flujo de revisión"><div><span>Estado operativo</span><strong>{assessmentStatusLabels[workflowStatus]}</strong><small>{editable ? "El expediente admite edición según los permisos actuales." : "Las respuestas están bloqueadas en este estado."}</small></div><div className="workflow-actions">{workflowStatus === "IN_REVIEW" && transitions.some(item=>item === "RETURN" || item === "CLOSE") && <textarea aria-label="Nota de revisión" value={reviewNote} onChange={event=>setReviewNote(event.target.value)} placeholder="Observaciones o fundamento del cierre…"/>}{transitions.map(action=><button key={action} className={action === "RETURN" ? "button secondary" : "button primary"} disabled={isTransitioning || !saved} onClick={()=>runTransition(action)}>{action === "RETURN" ? <RotateCcw size={14}/> : action === "CLOSE" ? <ShieldCheck size={14}/> : <Send size={14}/>} {actionLabels[action]}</button>)}</div>{workflowMessage && <p role="status">{workflowMessage}</p>}</section>
    <div className="workspace-layout">
      <aside className="criteria-nav" aria-label="Criterios del instrumento">
        {instrumentDimensions.map(dimension => <section key={dimension.id}><h2>{dimension.id}<span>{dimension.name}</span></h2>{instrumentCriteria.filter(c=>c.dimensionId===dimension.id).map(item => <button className={item.id===criterion.id?"active":""} key={item.id} onClick={()=>setSelectedId(item.id)}><i className={responses[item.id].status!=="PENDING"?"done":""}>{responses[item.id].status!=="PENDING"?<Check size={11}/>:item.id.split(".")[1]}</i><span>{item.name}</span></button>)}</section>)}
      </aside>
      <article className="criterion-panel">
        <div className="criterion-heading" ref={criterionHeadingRef}><div><span className="section-kicker">{criterion.dimensionId} · Criterio {index+1} de 28</span><h2>{criterion.id} — {criterion.name}</h2></div><span className="candidate-badge">CANDIDATO</span></div>
        <div className="orientation-box"><Info size={18}/><div><strong>Qué evidencia orienta este criterio</strong><p>{criterion.evidenceHint}</p><small>Síntesis orientativa no normativa. La referencia autorizada es el modelo metodológico.</small></div></div>
        <fieldset disabled={!editable}><legend>1. Estado de evaluación</legend><div className="segmented-options"><button className={response.status==="EVALUABLE"?"selected":""} onClick={()=>setStatus("EVALUABLE")}>Evaluable</button><button className={response.status==="NO_APLICA"?"selected":""} onClick={()=>setStatus("NO_APLICA")}>No aplica</button><button className={response.status==="NO_VERIFICABLE"?"selected":""} onClick={()=>setStatus("NO_VERIFICABLE")}>No verificable</button></div></fieldset>
        <fieldset disabled={!editable || response.status!=="EVALUABLE"}><legend>2. Nivel observado</legend><div className="level-options">{levelRubric.map(item=><button className={response.level===item.level?"selected":""} onClick={()=>update({level:item.level})} key={item.level}><b>{item.level}</b><span><strong>{item.label}</strong><small>{item.description}</small></span></button>)}</div></fieldset>
        <fieldset disabled={!editable || response.status!=="EVALUABLE"}><legend>3. Calidad de evidencia</legend><div className="evidence-options">{evidenceGrades.filter(item=>item.grade>0).map(item=><button className={response.evidenceGrade===item.grade?"selected":""} onClick={()=>update({evidenceGrade:item.grade})} key={item.grade}><b>{item.grade}</b><span>{item.label}</span></button>)}</div></fieldset>
        <fieldset disabled={!editable}><legend>4. Hallazgo y justificación</legend><textarea value={response.justification} onChange={event=>update({justification:event.target.value})} placeholder={response.status==="NO_APLICA"?"Fundamento previo de no aplicabilidad…":"Describe únicamente hechos respaldados por el expediente…"}/></fieldset>
        <section className="criterion-evidence"><h3>5. Evidencia privada</h3><EvidenceUploader assessmentId={assessment.id} criterionId={criterion.id} enabled={persistence==="supabase" && editable} items={initialEvidence.filter(item=>item.criterion_id===criterion.id)}/></section>
        <div className="criterion-lock"><LockKeyhole size={15}/> El motor candidato no emite un resultado hasta completar el período, el gate crítico y los 28 criterios.</div>
        <footer className="criterion-footer"><button className="button secondary" disabled={index===0} onClick={()=>move(-1)}><ChevronLeft size={16}/> Anterior</button><span>{navigationMessage || `Criterio ${index+1} de ${instrumentCriteria.length} · Cambios ${saved?"guardados":"pendientes"}`}</span><button className="button primary" disabled={index===instrumentCriteria.length-1} onClick={()=>move(1)}>Siguiente <ChevronRight size={16}/></button></footer>
      </article>
    </div>
  </div>;
}
