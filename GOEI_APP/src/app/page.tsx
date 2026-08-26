import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, ScanSearch } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { methodologyStatus } from "@/domain/methodology";

export default function HomePage() {
  return (
    <main className="landing">
      <header className="landing-nav"><BrandMark /><Link className="button ghost" href="/login">Ingresar</Link></header>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Metodología trazable para restaurantes</span>
          <h1>Comprende cómo funciona realmente tu negocio.</h1>
          <p>GOEI guía una evaluación operacional completa, conecta cada hallazgo con evidencia y ayuda a decidir dónde actuar primero.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/dashboard">Explorar entorno demostrativo <ArrowRight size={17} /></Link>
            <Link className="button secondary" href="/guia">Conocer la metodología</Link>
          </div>
          <p className="scope-note"><LockKeyhole size={15} /> {methodologyStatus.label}. La captura real aún no está autorizada.</p>
        </div>
        <div className="hero-panel" aria-label="Resumen de una evaluación demostrativa">
          <div className="hero-panel-head"><span>Vista del diagnóstico</span><span className="demo-label">CASO SINTÉTICO</span></div>
          <div className="score-preview"><div><small>Estado de emisión</small><strong>Perfil parcial</strong><p>La evidencia todavía no permite emitir un puntaje.</p></div><span className="score-lock"><LockKeyhole /></span></div>
          <div className="mini-bars">
            {[72, 51, 64, 43, 68, 38, 57].map((value, index) => <i key={index} style={{ height: `${value}%` }} />)}
          </div>
          <div className="panel-signals">
            <span><CheckCircle2 /> 7 dimensiones</span><span><ScanSearch /> 28 criterios</span><span><LockKeyhole /> Gate crítico</span>
          </div>
        </div>
      </section>
      <footer className="landing-legal"><Link href="/privacidad">Política de privacidad</Link><Link href="/terminos">Condiciones del servicio</Link></footer>
    </main>
  );
}
