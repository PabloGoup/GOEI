"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpenText, Building2, CalendarDays, Check, ChevronDown, ClipboardCheck, Download, FileText, HelpCircle, ShieldAlert } from "lucide-react";
import { CriteriaLibrary } from "@/components/criteria-library";
import { levelRubric } from "@/domain/instrument";

const steps = [
  { id: "establecimiento", title: "Elige el establecimiento", short: "Establecimiento", icon: Building2, description: "Abre la ficha del local antes de comenzar.", tasks: ["Revisa el tipo de servicio, el equipo y los horarios.", "Comprueba que elegiste el establecimiento correcto.", "Abre una evaluación asociada a ese local."], tip: "En la demo, elige uno de los cinco casos preparados." },
  { id: "preparar", title: "Prepara la evaluación", short: "Preparar", icon: CalendarDays, description: "Define el período y registra el control crítico.", tasks: ["Indica las fechas de inicio y término.", "Registra el estado del control crítico (gate) y su fundamento.", "Guarda los datos antes de pasar a las respuestas."], tip: "Si no puedes comprobar el control crítico, selecciona «No verificable»." },
  { id: "responder", title: "Responde una pregunta a la vez", short: "Responder", icon: ClipboardCheck, description: "Elige la situación que puedes respaldar.", tasks: ["Marca Evaluable, No aplica o No verificable.", "Si es evaluable, selecciona el nivel y la calidad de evidencia.", "Escribe lo observado y comprueba que los cambios se guardaron."], tip: "«No aplica» necesita una justificación. Si falta información, usa «No verificable»." },
  { id: "resultado", title: "Revisa el resultado", short: "Resultado", icon: ShieldAlert, description: "Comienza por el control crítico; después revisa las siete áreas.", tasks: ["Comprueba el estado del control crítico antes del puntaje.", "Revisa desempeño, cobertura y confianza por separado.", "Abre las respuestas para entender de dónde viene cada resultado."], tip: "Puede haber un perfil sin puntaje. No significa que el resultado sea cero." },
  { id: "descargar", title: "Descarga el informe", short: "Descargar", icon: Download, description: "Guarda una copia de la evaluación que estás revisando.", tasks: ["Abre Resultado y busca la sección de descargas.", "Elige PDF para leer o Excel para consultar el detalle.", "Comprueba el nombre del caso y su período antes de compartirlo."], tip: "Las salidas del piloto son provisionales. La constancia no es una certificación." },
];

function GuidePreview({ step }: { step: number }) {
  const [level, setLevel] = useState(3);
  return <div className="manual-preview" aria-label="Ejemplo visual, sin guardar datos">
    <div className="manual-preview-bar"><span><i/><i/><i/></span><small>Ejemplo visual · no guarda cambios</small></div>
    <div className="manual-preview-body">
      {step === 0 && <><div className="manual-store-icon"><Building2 size={30}/></div><span className="manual-eyebrow">CASO DE DEMOSTRACIÓN</span><h3>Restaurante demostrativo Centro</h3><div className="manual-mock-row"><span>Establecimiento</span><b>Ficha del negocio</b></div><div className="manual-mock-row"><span>Evaluación</span><b>28 criterios</b></div><div className="manual-visual-action">Abrir evaluación <ArrowRight size={16}/></div><p className="manual-callout"><b>1</b> El nombre del local te acompaña durante la evaluación.</p></>}
      {step === 1 && <><span className="manual-eyebrow">PREPARAR</span><h3>Período y control crítico</h3><div className="manual-date-pair"><div><small>Desde</small><b>01 ago 2026</b></div><div><small>Hasta</small><b>28 ago 2026</b></div></div><div className="manual-mock-row"><span>Control crítico</span><b>No verificable</b></div><div className="manual-note-example">Falta información para comprobar el estado del control crítico.</div><p className="manual-callout"><b>2</b> Guarda las fechas y el fundamento del estado elegido.</p></>}
      {step === 2 && <><span className="manual-eyebrow">PRUEBA EL SELECTOR</span><h3>Nivel observado</h3><p>Selecciona un nivel para ver su significado.</p><div className="manual-levels" role="group" aria-label="Ejemplo de nivel observado">{levelRubric.map(item => <button type="button" key={item.level} aria-pressed={level === item.level} onClick={() => setLevel(item.level)}>{item.level}</button>)}</div><div className="manual-rubric" aria-live="polite"><Check size={20}/><div><strong>{levelRubric[level].label}</strong><p>{levelRubric[level].description}</p></div></div><p className="manual-callout"><b>3</b> La selección debe coincidir con lo que puedes demostrar.</p></>}
      {step === 3 && <><span className="manual-eyebrow">ORDEN DE LECTURA</span><h3>Antes de mirar el número</h3><div className="manual-gate"><ShieldAlert size={22}/><div><strong>Control crítico</strong><small>Revisa primero su estado</small></div><span>01</span></div><div className="manual-reading-cards"><div><b>Desempeño</b><span>Nivel observado</span></div><div><b>Cobertura</b><span>Qué pudo evaluarse</span></div><div><b>Confianza</b><span>Calidad del respaldo</span></div></div><p className="manual-callout"><b>4</b> Un buen puntaje no compensa un incumplimiento crítico.</p></>}
      {step === 4 && <><span className="manual-eyebrow">DOCUMENTOS</span><h3>Elige cómo revisarlo</h3><div className="manual-file"><FileText/><div><strong>Informe PDF</strong><span>Resultado y detalle de la evaluación</span></div><Download size={18}/></div><div className="manual-file"><ClipboardCheck/><div><strong>Libro Excel</strong><span>Respuestas, evidencia y resultados</span></div><Download size={18}/></div><span className="manual-provisional">PROVISIONAL — NO VALIDADO</span><p className="manual-callout"><b>5</b> Los documentos se descargan desde la evaluación.</p></>}
    </div>
  </div>;
}

export function UserGuide({ demo = false }: { demo?: boolean }) {
  const [active, setActive] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const syncHash = () => {
      const index = steps.findIndex(step => `#${step.id}` === window.location.hash);
      if (index >= 0) setActive(index);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  const selectStep = (index: number, focus = false) => {
    setActive(index);
    window.history.replaceState(null, "", `#${steps[index].id}`);
    if (focus) requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  };
  const current = steps[active];
  const Icon = current.icon;
  const exampleHref = demo ? "/demo/evaluaciones/synthetic-assessment-001" : "/evaluaciones";
  return <div className="user-manual">
    <header className="manual-header"><div><span className="manual-eyebrow">GUÍA DE USO</span><h1>Tu primera evaluación,<br/>paso a paso.</h1><p>Aprende el recorrido con ejemplos que puedes explorar.</p></div><Link className="button secondary" href={exampleHref as Route}> {demo ? "Abrir un caso de ejemplo" : "Ir a mis evaluaciones"}<ArrowRight size={16}/></Link></header>
    <div className="manual-simulation-note"><ShieldAlert size={17}/><span><strong>Piloto de simulación.</strong> Practica con datos ficticios.</span></div>
    <section className="manual-walkthrough" aria-label="Recorrido de la evaluación">
      <nav className="manual-step-nav" aria-label="Pasos de la guía">{steps.map((step, index) => <button type="button" aria-pressed={index === active} aria-controls="manual-current-step" key={step.id} onClick={() => selectStep(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.short}</strong><ArrowRight size={15}/></button>)}</nav>
      <div className="manual-stage" id="manual-current-step">
        <div className="manual-instructions"><span className="manual-step-icon"><Icon size={25}/></span><span className="manual-eyebrow">PASO {active + 1} DE {steps.length}</span><h2 ref={heading} tabIndex={-1}>{current.title}</h2><p>{current.description}</p><ol>{current.tasks.map((task, index) => <li key={task}><span>{index + 1}</span>{task}</li>)}</ol><aside><HelpCircle size={18}/><p>{current.tip}</p></aside></div>
        <GuidePreview step={active}/>
      </div>
      <footer className="manual-step-footer"><button type="button" className="button secondary" disabled={active === 0} onClick={() => selectStep(active - 1, true)}><ArrowLeft size={16}/>Anterior</button><span>{active + 1} / {steps.length}</span>{active < steps.length - 1 ? <button type="button" className="button primary" onClick={() => selectStep(active + 1, true)}>Siguiente<ArrowRight size={16}/></button> : <Link className="button primary" href={exampleHref as Route}>Abrir evaluación<ArrowRight size={16}/></Link>}</footer>
    </section>
    <section className="manual-help" aria-labelledby="manual-help-title"><div><span className="manual-eyebrow">CUANDO NECESITES AYUDA</span><h2 id="manual-help-title">Resuelve una duda</h2><p>Respuestas breves para continuar.</p></div><div className="manual-faq">
      <details><summary>No tengo información para responder<ChevronDown size={18}/></summary><p>Selecciona «No verificable». No asignes cero a un dato desconocido. Usa «No aplica» solamente cuando puedas justificar por qué el criterio no corresponde.</p></details>
      <details><summary>No puedo editar una evaluación<ChevronDown size={18}/></summary><p>Las evaluaciones enviadas, en revisión o cerradas bloquean las respuestas. Una devolución permite corregirlas. En la demo, los casos preparados conservan su estado de ejemplo.</p></details>
      <details><summary>No aparece el puntaje<ChevronDown size={18}/></summary><p>Revisa los avisos de Resultado: pueden faltar respuestas, el período o el control crítico. Un control crítico no verificable permite mostrar un perfil sin puntaje. No completes datos por suposición.</p></details>
      <details><summary>Quiero adjuntar un documento<ChevronDown size={18}/></summary><p>En el portal, abre una evaluación editable y busca «Evidencia» en la pregunta correspondiente. Admite PDF, JPEG, PNG y CSV de hasta 15 MB. La demo pública no permite adjuntar archivos. Durante el piloto, utiliza solo documentos ficticios.</p></details>
      <details><summary>¿Cómo envío la evaluación a revisión?<ChevronDown size={18}/></summary><p>En Responder, revisa que no queden criterios pendientes y espera la confirmación de guardado. Usa «Enviar a revisión» si tu rol lo permite. El supervisor puede devolverla con observaciones o cerrar la revisión.</p></details>
    </div></section>
    <details className="manual-reference"><summary><BookOpenText size={22}/><span><strong>Consultar los 28 criterios</strong><small>Busca un tema o una evidencia concreta.</small></span><ChevronDown size={20}/></summary><CriteriaLibrary/></details>
    <footer className="manual-footer"><span>Instrumento piloto · 7 áreas · 28 criterios</span><strong>PROVISIONAL — NO VALIDADO</strong></footer>
  </div>;
}
