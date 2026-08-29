import Link from "next/link";
import { ChevronDown, LogOut } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { signOut } from "@/app/login/actions";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";
import { AppNavigation } from "./app-navigation";

export async function AppShell({ children }: { children: React.ReactNode }) {
  const context = await requireWorkspaceContext();
  return <div className="app-frame">
    <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
    <aside className="sidebar">
      <div className="sidebar-head"><Link href="/dashboard" aria-label="Ir al panorama"><BrandMark/></Link></div>
      <AppNavigation/>
      <div className="sidebar-foot">
        <Link className="profile-card" href="/perfil" title={`Abrir perfil · ${context.organizationName}`}><span className="avatar">{context.initials}</span><span><strong>{context.displayName}</strong><small>{context.roleLabel}</small></span><ChevronDown size={16}/></Link>
        {context.mode === "connected" && <form action={signOut}><button className="logout" type="submit"><LogOut size={16}/> Cerrar sesión</button></form>}
      </div>
    </aside>
    <main id="contenido-principal" className="main-content" tabIndex={-1}>{children}</main>
  </div>;
}
