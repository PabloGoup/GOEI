import { redirect } from "next/navigation";
import { Building2, LockKeyhole } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { env } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";
import { createFirstOrganization } from "./actions";

export default async function OnboardingPage() {
  if (env.appMode === "demo") redirect("/dashboard");
  const supabase = await createClient();
  if (!supabase) redirect("/login?error=configuracion");
  const { data: claims } = await supabase.auth.getClaims();
  const userId = claims?.claims?.sub;
  if (!userId) redirect("/login?error=sesion");
  const { data: membership } = await supabase.from("organization_memberships")
    .select("organization_id").eq("user_id", userId).eq("status", "active").limit(1).maybeSingle();
  if (membership) redirect("/dashboard");

  return <main className="auth-page">
    <section className="auth-context"><BrandMark/><div><span className="eyebrow light"><i/> Espacio protegido</span><h1>Configuremos tu primera organización.</h1><p>Esta separación permite que cada negocio, evaluación y evidencia permanezcan aislados mediante permisos de base de datos.</p></div><small>GOEI · Configuración operativa</small></section>
    <section className="auth-form-wrap"><form className="auth-form" action={createFirstOrganization}>
      <div><span className="secure-icon"><Building2/></span><h2>Crear espacio de trabajo</h2><p>Esta cuenta quedará como administradora de la organización, no de toda la plataforma.</p></div>
      <div className="notice warning"><strong>La captura real sigue bloqueada</strong><span>Crear la organización sólo habilita configuración y pruebas controladas.</span></div>
      <label>Nombre de la organización<input name="name" required minLength={2} maxLength={160} placeholder="Ej.: Equipo prepiloto GOEI"/></label>
      <label>Identificador técnico<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="equipo-prepiloto-goei"/></label>
      <button className="button primary full" type="submit"><LockKeyhole size={17}/> Crear de forma segura</button>
      <p className="privacy-note">No ingreses RUT, nombres personales ni datos sensibles.</p>
    </form></section>
  </main>;
}

