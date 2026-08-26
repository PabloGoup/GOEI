import { AppShell } from "@/components/app-shell";
import { FlaskConical, LockKeyhole } from "lucide-react";

export default function LaboratoryPage() {
  return <AppShell><header className="page-header"><div><p className="breadcrumb">Entorno separado</p><h1>Laboratorio de simulación</h1><p>Explora el comportamiento técnico de reglas provisionales usando únicamente escenarios sintéticos.</p></div></header><div className="simulation-warning"><FlaskConical /><div><strong>Este espacio no contiene negocios reales</strong><span>Sus resultados no son diagnósticos, pronósticos ni validación empírica.</span></div></div><section className="empty-state card"><span><LockKeyhole /></span><h2>Escenarios controlados en preparación</h2><p>La Fase 4 conectará el banco existente al motor determinista sin modificar sus reglas.</p><button className="button secondary">Consultar alcance técnico</button></section></AppShell>;
}
