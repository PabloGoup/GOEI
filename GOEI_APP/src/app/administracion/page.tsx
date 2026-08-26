import { AppShell } from "@/components/app-shell";
import { roleLabels } from "@/domain/access";
import { ShieldCheck } from "lucide-react";

export default function AdministrationPage() {
  return <AppShell><header className="page-header"><div><p className="breadcrumb">Administración operativa</p><h1>Equipo y roles</h1><p>Permisos configurables con mínimo privilegio y separación por organización.</p></div></header><section className="card role-list"><div className="card-head"><div><span className="section-kicker">Configuración revisable</span><h2>Matriz inicial de roles</h2></div><ShieldCheck /></div>{Object.entries(roleLabels).map(([id,label])=><div className="role-row" key={id}><span className="avatar">{label.split(" ").map(x=>x[0]).slice(0,2).join("")}</span><div><strong>{label}</strong><small>{id}</small></div><span className="status-pill neutral"><i />Propuesto</span></div>)}</section></AppShell>;
}
