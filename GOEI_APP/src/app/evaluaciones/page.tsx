import Link from "next/link";
import { AppShell } from "@/components/app-shell";
import { listAssessments } from "@/server/repositories/workspace";
import { Plus } from "lucide-react";
import { AssessmentExplorer } from "@/components/resource-explorers";

export default async function AssessmentsPage() {
  const assessments = await listAssessments();
  return <AppShell>
    <header className="page-header"><div><p className="breadcrumb">Aplicación del instrumento</p><h1>Evaluaciones</h1><p>Expedientes versionados con responsables, cobertura y trazabilidad.</p></div><Link className="button primary" href="/evaluaciones/nueva"><Plus size={17}/> Nueva demostración</Link></header>
    <AssessmentExplorer items={assessments.map(item=>({id:item.id,establishment:item.establishment,code:item.code,kind:item.kind,status:item.status,progress:item.progress}))}/>
  </AppShell>;
}
