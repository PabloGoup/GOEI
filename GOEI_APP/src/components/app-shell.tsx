import Link from "next/link";
import type { Route } from "next";
import {
  BarChart3, BookOpenText, Building2, ChevronDown, ClipboardCheck,
  FlaskConical, LayoutDashboard, LogOut, Settings, ShieldCheck, Users
} from "lucide-react";
import { BrandMark } from "./brand-mark";
import { signOut } from "@/app/login/actions";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";

const nav = [
  { label: "Panorama", icon: LayoutDashboard, href: "/dashboard", active: true },
  { label: "Establecimientos", icon: Building2, href: "/establecimientos" },
  { label: "Evaluaciones", icon: ClipboardCheck, href: "/evaluaciones" },
  { label: "Resultados", icon: BarChart3, href: "/resultados" },
  { label: "Guía GOEI", icon: BookOpenText, href: "/guia" },
  { label: "Laboratorio", icon: FlaskConical, href: "/laboratorio" }
];

export async function AppShell({ children }: { children: React.ReactNode }) {
  const context = await requireWorkspaceContext();
  return (
    <div className="app-frame">
      <aside className="sidebar">
        <div className="sidebar-head"><BrandMark /></div>
        <nav aria-label="Navegación principal">
          <p className="nav-caption">Espacio de trabajo</p>
          {nav.map(({ label, icon: Icon, href, active }) => (
            <Link className={`nav-item${active ? " active" : ""}`} href={href as Route} key={label}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>
            </Link>
          ))}
          <p className="nav-caption nav-divider">Administración</p>
          <Link className="nav-item" href="/administracion"><Users size={18} /><span>Equipo y roles</span></Link>
          <Link className="nav-item" href="/auditoria"><ShieldCheck size={18} /><span>Auditoría</span></Link>
          <Link className="nav-item" href="/configuracion"><Settings size={18} /><span>Configuración</span></Link>
        </nav>
        <div className="sidebar-foot">
          <button className="profile-card" type="button" title={context.organizationName}>
            <span className="avatar">{context.initials}</span><span><strong>{context.displayName}</strong><small>{context.roleLabel}</small></span><ChevronDown size={16} />
          </button>
          {context.mode === "connected" && <form action={signOut}><button className="logout" type="submit"><LogOut size={16} /> Cerrar sesión</button></form>}
        </div>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}
