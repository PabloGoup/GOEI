import Link from "next/link";
import { LogOut } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { signOut } from "@/app/login/actions";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";
import { AppNavigation } from "./app-navigation";

export async function AppShell({ children }: { children: React.ReactNode }) {
  const context = await requireWorkspaceContext();
  return <div className="app-frame">
    <header className="app-topbar">
      <div className="topbar-inner">
        <Link className="topbar-brand" href="/dashboard" aria-label="Ir al panorama"><BrandMark /></Link>
        <AppNavigation />
        <div className="topbar-account">
          <Link className="profile-card" href="/perfil" title={`Abrir perfil · ${context.organizationName}`}>
            <span className="avatar">{context.initials}</span><span><strong>{context.displayName}</strong><small>{context.roleLabel}</small></span>
          </Link>
          {context.mode === "connected" && <form action={signOut}><button className="logout" type="submit" title="Cerrar sesión"><LogOut size={17}/><span>Cerrar sesión</span></button></form>}
        </div>
      </div>
    </header>
    <main className="main-content">{children}</main>
  </div>;
}
