"use client";

import Link from "next/link";
import type { Route } from "next";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpenText, Building2, ClipboardCheck, FileOutput, FileUp, FlaskConical, LayoutDashboard, LineChart, ListChecks, Menu, Settings, ShieldCheck, Users } from "lucide-react";

const primary = [
  { label: "Inicio", shortLabel: "Inicio", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Establecimientos", shortLabel: "Locales", icon: Building2, href: "/establecimientos" },
  { label: "Evaluaciones", shortLabel: "Evaluar", icon: ClipboardCheck, href: "/evaluaciones" },
  { label: "Diagnóstico", shortLabel: "Diagnóstico", icon: BarChart3, href: "/diagnostico" },
  { label: "Evolución", shortLabel: "Evolución", icon: LineChart, href: "/evolucion" }
];

const secondary = [
  { label: "Informes", icon: FileOutput, href: "/resultados" },
  { label: "Evidencia", icon: FileUp, href: "/evidencia" },
  { label: "Mejora", icon: ListChecks, href: "/mejora" },
  { label: "Comparar", icon: FlaskConical, href: "/laboratorio" },
  { label: "Metodología", icon: BookOpenText, href: "/guia" },
  { label: "Equipo y roles", icon: Users, href: "/administracion" },
  { label: "Auditoría", icon: ShieldCheck, href: "/auditoria" },
  { label: "Configuración", icon: Settings, href: "/configuracion" }
];

export function AppNavigation() {
  const pathname = usePathname();
  const desktopMore = useRef<HTMLDetailsElement>(null);
  const mobileMore = useRef<HTMLDetailsElement>(null);
  const active = (href: string) => pathname.startsWith(href);
  const closeMenus = () => { desktopMore.current?.removeAttribute("open"); mobileMore.current?.removeAttribute("open"); };
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!desktopMore.current?.contains(target)) desktopMore.current?.removeAttribute("open");
      if (!mobileMore.current?.contains(target)) mobileMore.current?.removeAttribute("open");
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeMenus(); };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", dismiss); document.removeEventListener("keydown", onKey); };
  }, []);
  const item = ({ label, icon: Icon, href }: (typeof primary)[number] | (typeof secondary)[number]) => (
    <Link onClick={closeMenus} aria-current={active(href) ? "page" : undefined} className={`nav-item${active(href) ? " active" : ""}`} href={href as Route} key={label}>
      <Icon size={17} strokeWidth={1.8} /><span>{label}</span>
    </Link>
  );

  return <>
    <nav className="top-navigation" aria-label="Navegación principal">
      {primary.map(item)}
      <details ref={desktopMore} className="nav-more">
        <summary className={secondary.some(link => active(link.href)) ? "active" : ""}><Menu size={17}/><span>Más</span></summary>
        <div className="nav-popover"><p>Herramientas y administración</p>{secondary.map(item)}</div>
      </details>
    </nav>
    <nav className="mobile-dock" aria-label="Navegación móvil">
      {primary.map(({label,shortLabel,icon:Icon,href}) => <Link aria-current={active(href) ? "page" : undefined} className={active(href) ? "active" : ""} href={href as Route} key={label}><Icon size={20}/><span>{shortLabel}</span></Link>)}
      <details ref={mobileMore} className="dock-more"><summary className={secondary.some(link => active(link.href)) ? "active" : ""}><Menu size={20}/><span>Más</span></summary><div className="dock-sheet"><strong>Más opciones</strong>{secondary.map(item)}</div></details>
    </nav>
  </>;
}
