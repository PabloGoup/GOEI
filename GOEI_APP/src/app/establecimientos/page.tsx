import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { listEstablishments } from "@/server/repositories/workspace";
import { Plus, ShieldAlert } from "lucide-react";
import { EstablishmentExplorer } from "@/components/resource-explorers";

export default async function EstablishmentsPage() {
  const establishments = await listEstablishments();
  return <AppShell>
    <header className="page-header"><div><p className="breadcrumb">Núcleo operativo</p><h1>Establecimientos</h1><p>Unidades de análisis separadas por organización y expediente.</p></div><Link className="button primary" href="/establecimientos/nuevo"><Plus size={17}/> Nuevo caso sintético</Link></header>
    <div className="field-lock"><ShieldAlert size={20}/><div><strong>Vista exclusivamente sintética</strong><span>La creación de establecimientos reales continúa bloqueada por los gates del prepiloto.</span></div></div>
    <EstablishmentExplorer items={establishments.map(item=>({...item,profile:item.profile?{seats:item.profile.seats,teamSize:item.profile.teamSize}:null}))}/>
  </AppShell>;
}
