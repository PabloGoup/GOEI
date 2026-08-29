import { AppShell } from "@/components/app-shell";
import { SimulationLab } from "@/components/simulation-lab";
import { FlaskConical } from "lucide-react";
import { listCalculationRuns } from "@/server/repositories/workspace";

export default async function LaboratoryPage() {
  const runs = await listCalculationRuns();
  return <AppShell><header className="page-header"><div><p className="breadcrumb">Entorno separado</p><h1>Laboratorio de simulación</h1><p>Contrasta el comportamiento técnico de lecturas provisionales usando únicamente escenarios sintéticos ya calculados.</p></div></header><div className="simulation-warning"><FlaskConical /><div><strong>Este espacio no contiene negocios reales</strong><span>Sus resultados no son diagnósticos, pronósticos ni validación empírica.</span></div></div><SimulationLab runs={runs}/></AppShell>;
}
