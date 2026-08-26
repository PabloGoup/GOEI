import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export default function PrivacyPage() {
  return <main className="legal-page"><header className="legal-header"><BrandMark/><Link href="/">Volver al inicio</Link></header><article className="legal-document">
    <p className="eyebrow"><i/> Información pública</p><h1>Política de privacidad de GOEI App</h1><p className="legal-updated">Última actualización: 25 de agosto de 2026</p>
    <section><h2>1. Propósito</h2><p>GOEI App es una aplicación para apoyar evaluaciones operativas trazables de establecimientos gastronómicos. Esta política explica qué información utiliza la aplicación durante el acceso y cómo se protege.</p></section>
    <section><h2>2. Datos obtenidos mediante Google</h2><p>Cuando una persona elige “Continuar con Google”, GOEI App solicita únicamente información básica de autenticación: identificador de cuenta, nombre, dirección de correo electrónico e imagen de perfil cuando esté disponible. No solicita acceso a Gmail, Google Drive, Calendar, contactos ni archivos de la cuenta.</p></section>
    <section><h2>3. Uso de la información</h2><p>Estos datos se utilizan para autenticar al usuario, crear su perfil operativo, asociarlo a organizaciones autorizadas, aplicar permisos y mantener trazabilidad de acciones relevantes. No se utilizan para publicidad ni se venden.</p></section>
    <section><h2>4. Almacenamiento y acceso</h2><p>La autenticación y los datos operativos se gestionan mediante Supabase. El acceso se limita por organización y rol mediante políticas de seguridad en la base de datos. Las evidencias sensibles se diseñan para permanecer en almacenamiento privado.</p></section>
    <section><h2>5. Conservación y eliminación</h2><p>Los datos se conservan mientras la cuenta o la relación operativa estén activas y durante el período necesario para cumplir obligaciones de trazabilidad aplicables. Las solicitudes de acceso, corrección o eliminación se evaluarán considerando las obligaciones legales y de auditoría correspondientes.</p></section>
    <section><h2>6. Alcance actual</h2><p>La aplicación se encuentra en etapa de prueba. La captura de casos reales permanece bloqueada hasta que se aprueben los gates externos y metodológicos definidos por GOEI.</p></section>
    <section><h2>7. Contacto</h2><p>Para consultas de privacidad o solicitudes relacionadas con datos personales, escribe a <a href="mailto:xzeroidk@gmail.com">xzeroidk@gmail.com</a>.</p></section>
    <footer><Link href="/terminos">Consultar condiciones del servicio</Link></footer>
  </article></main>;
}
