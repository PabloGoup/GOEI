import { AppShell } from "@/components/app-shell";
import { AssessmentWorkspace } from "@/components/assessment-workspace";
import { getAssessment } from "@/server/repositories/workspace";
import { env } from "@/lib/env";
import { notFound } from "next/navigation";
import { requireWorkspaceContext } from "@/server/auth/workspace-context";

export default async function AssessmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [record, context] = await Promise.all([getAssessment(id), requireWorkspaceContext()]);
  if (!record) notFound();
  return <AppShell><AssessmentWorkspace assessment={record.assessment} initialResponses={record.responses} initialEvidence={"evidenceItems" in record ? record.evidenceItems : []} initialCalculationRuns={"calculationRuns" in record ? record.calculationRuns : []} exportRunId={"calculationRuns" in record ? record.calculationRuns[0]?.id : undefined} persistence={env.appMode === "demo" ? "local" : "supabase"} role={context.role}/></AppShell>;
}
