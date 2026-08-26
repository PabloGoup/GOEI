import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export default function TermsPage() {
  return <main className="legal-page"><header className="legal-header"><BrandMark/><Link href="/">Volver al inicio</Link></header><article className="legal-document">
    <p className="eyebrow"><i/> Información pública</p><h1>Condiciones del servicio de GOEI App</h1><p className="legal-updated">Última actualización: 25 de agosto de 2026</p>
    <section><h2>1. Naturaleza del servicio</h2><p>GOEI App implementa técnicamente definiciones autorizadas de la metodología Gastronomic Operational Efficiency Index. El software no crea ni modifica decisiones científicas.</p></section>
    <section><h2>2. Estado provisional</h2><p>La aplicación está en etapa de prueba. Los casos sintéticos, simulaciones y resultados provisionales no constituyen certificación, validación empírica, asesoría legal ni garantía de desempeño.</p></section>
    <section><h2>3. Uso autorizado</h2><p>El acceso está limitado a usuarios y organizaciones autorizados. Cada persona debe proteger su cuenta, utilizar información lícita y respetar los permisos asignados. No se permite intentar acceder a expedientes, organizaciones o evidencias ajenos.</p></section>
    <section><h2>4. Datos y evidencias</h2><p>No deben incorporarse datos personales, RUT, documentos completos o información sensible salvo necesidad autorizada y documentada. Mientras la captura real permanezca bloqueada, sólo se pueden utilizar escenarios sintéticos.</p></section>
    <section><h2>5. Interpretación de resultados</h2><p>Un dato desconocido debe conservarse como desconocido. Un resultado favorable no puede compensar incumplimientos críticos de inocuidad, seguridad o legalidad. La aplicación puede abstenerse de emitir un resultado cuando la cobertura, evidencia o gates no lo permitan.</p></section>
    <section><h2>6. Disponibilidad y cambios</h2><p>Durante la etapa de prueba pueden existir interrupciones y cambios técnicos. Las modificaciones metodológicas sólo se incorporarán cuando estén documentadas y autorizadas por la gobernanza GOEI.</p></section>
    <section><h2>7. Contacto</h2><p>Para consultas sobre estas condiciones, escribe a <a href="mailto:xzeroidk@gmail.com">xzeroidk@gmail.com</a>.</p></section>
    <footer><Link href="/privacidad">Consultar política de privacidad</Link></footer>
  </article></main>;
}
