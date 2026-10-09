import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { methodologyStatus } from "@/domain/methodology";
import { createClient } from "@/lib/supabase/server";

const dimensions = ["Estrategia", "Finanzas", "Operaciones", "Personas", "Cliente", "Calidad", "Sostenibilidad"];

export default async function HomePage() {
  const supabase = await createClient();
  const { data: claimsData } = supabase ? await supabase.auth.getClaims() : { data: null };
  const signedIn = Boolean(claimsData?.claims?.sub);
  // One public entry point: both hero actions resolve to the same experience.
  // Signed-in users continue into their connected workspace; everyone else sees
  // the isolated synthetic centre instead of a second, divergent demo path.
  const primaryHref = signedIn ? "/dashboard" : "/dashboard";
  const primaryLabel = signedIn ? "Abrir portal" : "Explorar entorno";

  return <main className="landing">
    <header className="landing-nav">
      <Link href="/" aria-label="GOEI, inicio"><BrandMark /></Link>
      <nav aria-label="Navegación institucional"><a href="#metodologia">Metodología</a><a href="#trazabilidad">Trazabilidad</a><Link href="/dashboard">Demostración</Link></nav>
      <Link className="button ghost" href={signedIn ? "/dashboard" : "/login"}>{signedIn ? "Abrir portal" : "Ingresar"}</Link>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow"><i /> Salud operacional, explicada con claridad</span>
        <h1>Ve tu operación<br/><em>como un sistema.</em></h1>
        <p>GOEI transforma una evaluación compleja en una lectura guiada, trazable y comparable para establecimientos gastronómicos.</p>
        <div className="hero-actions"><Link className="button primary" href={primaryHref}>{primaryLabel} <ArrowRight size={17}/></Link><Link className="button landing-secondary" href={primaryHref}>Ver casos de ejemplo</Link></div>
        <p className="scope-note"><LockKeyhole size={15}/> {methodologyStatus.label}. La captura real aún no está autorizada.</p>
      </div>

      <div className="system-portrait" aria-label="Las siete dimensiones del instrumento GOEI">
        <div className="portrait-glow"/>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
        <div className="portrait-core"><span>GOEI</span><strong>28</strong><small>criterios conectados</small></div>
        {dimensions.map((dimension,index) => <span className={`dimension-node node-${index + 1}`} key={dimension}><i/>{dimension}</span>)}
        <div className="portrait-note"><ShieldCheck size={17}/><span><strong>Evidencia primero</strong><small>Sin atajos ni puntajes decorativos</small></span></div>
      </div>
    </section>

    <section className="landing-proof" id="metodologia">
      <div><span className="section-kicker">Una lectura operacional completa</span><h2>No es otro tablero.<br/>Es una forma de entender.</h2></div>
      <div className="proof-grid">
        <article><span>01</span><ScanSearch/><h3>Observar</h3><p>Cada criterio explica qué mirar, por qué importa y qué evidencia puede respaldarlo.</p></article>
        <article><span>02</span><CheckCircle2/><h3>Contrastar</h3><p>Los casos sintéticos permiten comparar situaciones y comprender resultados diferentes.</p></article>
        <article><span>03</span><Sparkles/><h3>Decidir</h3><p>La interfaz separa avance, evidencia, gates y lectura provisional para evitar conclusiones engañosas.</p></article>
      </div>
    </section>

    <section className="trace-story" id="trazabilidad">
      <div className="trace-visual" aria-label="Recorrido trazable: hallazgo, evidencia, lectura y decisión"><div className="trace-visual-header"><span>Recorrido de una lectura</span><b>01 — 04</b></div><ol><li><i>01</i><div><strong>Hallazgo</strong><small>Observación registrada</small></div></li><li><i>02</i><div><strong>Evidencia</strong><small>Respaldo identificable</small></div></li><li><i>03</i><div><strong>Lectura</strong><small>Resultado provisional</small></div></li><li><i>04</i><div><strong>Decisión</strong><small>Contexto conservado</small></div></li></ol><p>La cadena no borra los límites del expediente.</p></div>
      <div className="trace-copy"><span className="eyebrow"><i/> Trazabilidad visible</span><h2>Una evaluación que se puede seguir.</h2><p>Cada paso conserva su contexto. Así, una persona ajena al programa puede revisar cómo se llegó a cada lectura, qué la respalda y qué límites mantiene.</p><Link href="/dashboard">Recorrer una evaluación completa <ArrowRight size={16}/></Link></div>
    </section>

    <section className="landing-cta"><span className="section-kicker">Entorno demostrativo</span><h2>Explora cinco historias operacionales distintas.</h2><p>Casos sintéticos preparados para comparar avances, resultados y condiciones de emisión sin usar datos reales.</p><Link className="button primary" href="/dashboard">Abrir demostración <ArrowRight size={17}/></Link></section>
    <footer className="landing-legal"><span>GOEI · Gastronomic Operational Efficiency Index</span><div><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Condiciones</Link></div></footer>
  </main>;
}
