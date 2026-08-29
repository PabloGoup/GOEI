"use client";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { BarChart3, BookOpenText, Building2, ClipboardCheck, FlaskConical, LayoutDashboard, Settings, ShieldCheck, Users } from "lucide-react";

const main=[
  {label:"Panorama",icon:LayoutDashboard,href:"/dashboard"},
  {label:"Establecimientos",icon:Building2,href:"/establecimientos"},
  {label:"Evaluaciones",icon:ClipboardCheck,href:"/evaluaciones"},
  {label:"Resultados",icon:BarChart3,href:"/resultados"},
  {label:"Guía GOEI",icon:BookOpenText,href:"/guia"},
  {label:"Laboratorio",icon:FlaskConical,href:"/laboratorio"}
];
const admin=[{label:"Equipo y roles",icon:Users,href:"/administracion"},{label:"Auditoría",icon:ShieldCheck,href:"/auditoria"},{label:"Configuración",icon:Settings,href:"/configuracion"}];

export function AppNavigation(){const pathname=usePathname();const links=(items:typeof main)=>items.map(({label,icon:Icon,href})=><Link aria-current={pathname.startsWith(href)?"page":undefined} className={`nav-item${pathname.startsWith(href)?" active":""}`} href={href as Route} key={label}><Icon size={18} strokeWidth={1.8}/><span>{label}</span></Link>);return <nav aria-label="Navegación principal"><p className="nav-caption">Espacio de trabajo</p>{links(main)}<p className="nav-caption nav-divider">Administración</p>{links(admin)}</nav>}
