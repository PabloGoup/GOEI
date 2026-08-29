import Link from "next/link";
import type { Route } from "next";
import { ArrowRight, BarChart3, BookOpenText, Building2, CheckCircle2, ClipboardCheck, FileCheck2, Layers3, ShieldAlert } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { methodologyStatus } from "@/domain/methodology";
import { CriteriaLibrary } from "@/components/criteria-library";

const steps=[
  {icon:Building2,title:"1. Comprende el negocio",text:"Abre su ficha sintética y revisa modelo de servicio, capacidad, equipo, horarios, canales, demanda, abastecimiento y datos disponibles.",href:"/establecimientos",action:"Ver casos"},
  {icon:ClipboardCheck,title:"2. Abre la evaluación",text:"Recorre los 28 criterios. Para cada uno registra estado, nivel observado, calidad de evidencia y una justificación basada en el expediente.",href:"/evaluaciones",action:"Ver evaluaciones"},
  {icon:FileCheck2,title:"3. Completa el contrato",text:"Indica el período y el gate crítico con su fundamento. GOEI no los deduce ni completa automáticamente.",href:"/evaluaciones",action:"Continuar aplicación"},
  {icon:BarChart3,title:"4. Lee el resultado",text:"Ejecuta el motor y consulta por separado desempeño, cobertura y confianza. Revisa también el gate, las siete dimensiones y el digest.",href:"/resultados",action:"Abrir resultados"}
];

export default function GuidePage() {
  return <AppShell><header className="page-header"><div><p className="breadcrumb">Biblioteca metodológica</p><h1>Guía de uso y comprensión de GOEI</h1><p>Una explicación humana para saber qué mide, cómo aplicarlo y cómo leer sus resultados.</p></div></header>
    <section className="guide-intro card"><BookOpenText size={34}/><div><span className="section-kicker">Qué es GOEI</span><h2>Una lectura estructurada de la salud operacional de un negocio gastronómico</h2><p>GOEI organiza observaciones y evidencias para comprender cómo funciona realmente un establecimiento y dónde conviene actuar primero. Examina siete áreas relacionadas, conserva la trazabilidad del expediente y evita que un buen resultado aislado oculte riesgos críticos.</p><p><strong>Alcance piloto actual:</strong> {methodologyStatus.scope}.</p></div></section>
    <section className="guide-principles"><article className="card"><Layers3/><h2>Desempeño</h2><p>Representa el nivel observado en los criterios que pueden calcularse. No aumenta por adjuntar más evidencia.</p></article><article className="card"><FileCheck2/><h2>Confianza</h2><p>Resume la calidad del respaldo disponible para los criterios evaluables. No reemplaza el desempeño.</p></article><article className="card"><CheckCircle2/><h2>Cobertura</h2><p>Indica cuánto del instrumento pudo evaluarse. Un expediente completo no significa automáticamente buen resultado.</p></article><article className="card"><ShieldAlert/><h2>Gate crítico</h2><p>Aplica una regla no compensatoria. Puede limitar o impedir la emisión de puntaje aunque otras áreas sean favorables.</p></article></section>
    <section className="guide-steps"><div><span className="section-kicker">Recorrido del MVP</span><h2>Cómo aplicar GOEI en el programa</h2></div>{steps.map(({icon:Icon,title,text,href,action})=><article className="card" key={title}><span><Icon/></span><div><h3>{title}</h3><p>{text}</p></div><Link href={href as Route}>{action}<ArrowRight size={14}/></Link></article>)}</section>
    <section className="guide-reading card"><div><span className="section-kicker">Cómo interpretar</span><h2>Antes de tomar una decisión</h2></div><div><p><strong>1.</strong> Confirma si existe puntaje o sólo un perfil parcial.</p><p><strong>2.</strong> Lee el gate antes del valor global.</p><p><strong>3.</strong> Compara las siete dimensiones para localizar brechas.</p><p><strong>4.</strong> Revisa cobertura y confianza para entender la solidez de la lectura.</p><p><strong>5.</strong> Conserva el digest y las versiones para reproducir la ejecución.</p><p><strong>6.</strong> Trata toda salida actual como <b>{methodologyStatus.label}</b>.</p></div></section>
    <CriteriaLibrary />
    <aside className="readiness-note"><ShieldAlert size={18}/><div><strong>Qué GOEI no hace todavía</strong><p>No certifica establecimientos, no autoriza captura real, no reemplaza una inspección sanitaria y no convierte datos desconocidos en cero. El software implementa las reglas candidatas vigentes; no crea decisiones científicas.</p></div></aside>
  </AppShell>;
}
