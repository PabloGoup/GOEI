import Link from "next/link";
import { ArrowLeft, LockKeyhole, Mail } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { env } from "@/lib/env";
import { signIn, signInWithGoogle } from "./actions";

function GoogleMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.6h3.3c1.9-1.8 2.9-4.4 2.9-7.5Z"/><path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.3l-3.3-2.6c-.9.6-2.1 1-3.4 1a5.9 5.9 0 0 1-5.5-4.1H3.1v2.7A10 10 0 0 0 12 22Z"/><path fill="#FBBC05" d="M6.5 14a6 6 0 0 1 0-3.9V7.4H3.1a10 10 0 0 0 0 9.3L6.5 14Z"/><path fill="#EA4335" d="M12 6c1.5 0 2.8.5 3.9 1.5l2.9-2.9A9.7 9.7 0 0 0 3.1 7.4l3.4 2.7A5.9 5.9 0 0 1 12 6Z"/></svg>;
}

export default async function LoginPage({searchParams}:{searchParams:Promise<{error?:string}>}) {
  const {error} = await searchParams;
  return (
    <main className="auth-page">
      <section className="auth-context">
        <BrandMark />
        <div><span className="eyebrow light"><i /> Evaluación con propósito</span><h1>La evidencia antes que la impresión.</h1><p>Cada respuesta conserva su origen, alcance, calidad y responsable.</p></div>
        <small>GOEI · Instrumento piloto provisional</small>
      </section>
      <section className="auth-form-wrap">
        <Link className="back-link" href="/"><ArrowLeft size={16} /> Volver</Link>
        <form className="auth-form" action={signIn}>
          <div><span className="secure-icon"><LockKeyhole /></span><h2>Bienvenido</h2><p>Ingresa a tu espacio de evaluación autorizado.</p></div>
          {!env.isSupabaseConfigured && <div className="notice warning"><strong>Modo demostrativo</strong><span>Conecta Supabase en <code>.env.local</code> para habilitar sesiones reales.</span></div>}
          <label>Correo electrónico<div className="input-wrap"><Mail size={17} /><input type="email" name="email" placeholder="nombre@organizacion.cl" autoComplete="email" /></div></label>
          <label>Contraseña<input type="password" name="password" placeholder="••••••••••••" autoComplete="current-password" /></label>
          <div className="form-row"><label className="check"><input type="checkbox" /> Recordarme</label><Link href="/login">Recuperar acceso</Link></div>
          <button className="button primary full" type="submit">Ingresar de forma segura</button>
          {env.isSupabaseConfigured && <><div className="auth-divider"><span>o</span></div><button className="button google full" formAction={signInWithGoogle} type="submit"><GoogleMark/> Continuar con Google</button></>}
          {error && <div className="notice error" role="alert"><strong>No fue posible iniciar sesión</strong><span>Revisa tus credenciales o la configuración del proveedor e inténtalo nuevamente.</span></div>}
          {env.appMode === "demo" && <Link className="button secondary full" href="/dashboard">Explorar demostración sintética</Link>}
          <p className="privacy-note">El acceso queda sujeto a permisos por organización y registro de auditoría.</p>
        </form>
      </section>
    </main>
  );
}
