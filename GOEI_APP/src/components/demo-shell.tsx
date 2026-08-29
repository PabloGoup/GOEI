import Link from "next/link";
import type { Route } from "next";
import { BarChart3, BookOpenText, Building2, ClipboardCheck, ExternalLink, LayoutDashboard } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const demoNav = [
  { label: "Inicio demo", shortLabel: "Inicio", icon: LayoutDashboard, href: "/demo" },
  { label: "Casos sintéticos", shortLabel: "Casos", icon: Building2, href: "/demo#casos" },
  { label: "Evaluación completa", shortLabel: "Evaluar", icon: ClipboardCheck, href: "/demo/evaluaciones/synthetic-assessment-002" },
  { label: "Resultado", shortLabel: "Resultado", icon: BarChart3, href: "/demo#resultados" },
  { label: "Qué es GOEI", shortLabel: "Guía", icon: BookOpenText, href: "/demo#guia" }
];

export function DemoShell({children}:{children:React.ReactNode}) {
  return <div className="app-frame demo-frame">
    <header className="app-topbar"><div className="topbar-inner">
      <Link className="topbar-brand" href="/"><BrandMark/></Link>
      <nav className="top-navigation demo-navigation" aria-label="Navegación de la demostración">{demoNav.map(({label,icon:Icon,href}) => <Link className="nav-item" href={href as Route} key={label}><Icon size={17}/><span>{label}</span></Link>)}</nav>
      <Link className="demo-login" href="/login"><ExternalLink size={16}/><span>Ingresar</span></Link>
      <nav className="mobile-dock" aria-label="Navegación móvil de la demostración">{demoNav.map(({label,shortLabel,icon:Icon,href}) => <Link href={href as Route} key={label}><Icon size={20}/><span>{shortLabel}</span></Link>)}</nav>
    </div></header>
    <main className="main-content">{children}</main>
  </div>;
}
