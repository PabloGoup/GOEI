"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpenText, Building2, ClipboardCheck, FlaskConical, LayoutDashboard, Menu, Settings, ShieldCheck, Users } from "lucide-react";

const primary = [
  { label: "Panorama", shortLabel: "Inicio", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Establecimientos", shortLabel: "Locales", icon: Building2, href: "/establecimientos" },
  { label: "Evaluaciones", shortLabel: "Evaluar", icon: ClipboardCheck, href: "/evaluaciones" },
  { label: "Resultados", shortLabel: "Resultados", icon: BarChart3, href: "/resultados" }
];

const secondary = [
  { label: "Guía GOEI", icon: BookOpenText, href: "/guia" },
  { label: "Laboratorio", icon: FlaskConical, href: "/laboratorio" },
  { label: "Equipo y roles", icon: Users, href: "/administracion" },
  { label: "Auditoría", icon: ShieldCheck, href: "/auditoria" },
  { label: "Configuración", icon: Settings, href: "/configuracion" }
];

export function AppNavigation() {
  const pathname = usePathname();
  const active = (href: string) => pathname.startsWith(href);
  const item = ({ label, icon: Icon, href }: (typeof primary)[number] | (typeof secondary)[number]) => (
    <Link aria-current={active(href) ? "page" : undefined} className={`nav-item${active(href) ? " active" : ""}`} href={href as Route} key={label}>
      <Icon size={17} strokeWidth={1.8} /><span>{label}</span>
    </Link>
  );

  return <>
    <nav className="top-navigation" aria-label="Navegación principal">
      {primary.map(item)}
      <details className="nav-more">
        <summary className={secondary.some(link => active(link.href)) ? "active" : ""}><Menu size={17}/><span>Más</span></summary>
        <div className="nav-popover"><p>Herramientas y administración</p>{secondary.map(item)}</div>
      </details>
    </nav>
    <nav className="mobile-dock" aria-label="Navegación móvil">
      {primary.map(({label,shortLabel,icon:Icon,href}) => <Link aria-current={active(href) ? "page" : undefined} className={active(href) ? "active" : ""} href={href as Route} key={label}><Icon size={20}/><span>{shortLabel}</span></Link>)}
      <details className="dock-more"><summary className={secondary.some(link => active(link.href)) ? "active" : ""}><Menu size={20}/><span>Más</span></summary><div className="dock-sheet"><strong>Más opciones</strong>{secondary.map(item)}</div></details>
    </nav>
  </>;
}
