import Link from "next/link";
import type { Route } from "next";
import { BarChart3, BookOpenText, Building2, ClipboardCheck, ExternalLink, LayoutDashboard } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";

const demoNav = [
  { label:"Inicio",shortLabel:"Inicio",icon:LayoutDashboard,href:"/demo" },
  { label:"Establecimientos",shortLabel:"Locales",icon:Building2,href:"/demo#casos" },
  { label:"Evaluaciones",shortLabel:"Evaluar",icon:ClipboardCheck,href:"/demo/evaluaciones/synthetic-assessment-002" },
  { label:"Diagnóstico",shortLabel:"Diagnóstico",icon:BarChart3,href:"/demo#resultados" },
  { label:"Guía de uso",shortLabel:"Guía",icon:BookOpenText,href:"/demo/guia" }
];

export function DemoShell({children}:{children:React.ReactNode}) {
  return <div className="app-frame demo-frame">
    <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
    <aside className="sidebar">
      <div className="sidebar-head"><Link href="/"><BrandMark/></Link></div>
      <nav className="demo-side-nav" aria-label="Navegación de la demostración"><p className="nav-caption">Demostración pública</p>{demoNav.map(({label,icon:Icon,href})=><Link className="nav-item" href={href as Route} key={label}><Icon size={18}/><span>{label}</span></Link>)}<p className="nav-caption nav-divider">Más</p><Link className="nav-item" href="/login"><ExternalLink size={18}/><span>Ingresar al portal</span></Link></nav>
      <div className="sidebar-foot"><div className="profile-card"><span className="avatar">DE</span><span><strong>Casos evaluados</strong><small>Demostración sintética</small></span></div></div>
      <nav className="mobile-dock" aria-label="Navegación móvil de la demostración">{demoNav.map(({label,shortLabel,icon:Icon,href})=><Link href={href as Route} key={label}><Icon size={20}/><span>{shortLabel}</span></Link>)}</nav>
    </aside>
    <main id="contenido-principal" className="main-content" tabIndex={-1}>{children}</main>
  </div>;
}
