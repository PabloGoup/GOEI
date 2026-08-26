import { AppShell } from "@/components/app-shell";
import { AssessmentWorkspace } from "@/components/assessment-workspace";
import { getAssessment } from "@/server/repositories/workspace";
import { env } from "@/lib/env";
import { notFound } from "next/navigation";

export default async function AssessmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const record = await getAssessment(id);
  if (!record) notFound();
  return <AppShell><AssessmentWorkspace assessment={record.assessment} initialResponses={record.responses} persistence={env.appMode === "demo" ? "local" : "supabase"}/></AppShell>;
}
