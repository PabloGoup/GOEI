import { notFound } from "next/navigation";
import { DemoShell } from "@/components/demo-shell";
import { AssessmentWorkspace } from "@/components/assessment-workspace";
import { demoAssessmentResponses, demoAssessments, demoInsights } from "@/data/demo";

export default async function PublicDemoAssessmentPage({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const assessment=demoAssessments.find(item=>item.id===id);
  if(!assessment) notFound();
  const responses=demoAssessmentResponses(id);
  const runIndex=demoAssessments.findIndex(item=>item.id===id);
  return <DemoShell><AssessmentWorkspace assessment={assessment} initialResponses={responses} persistence="local" role="organization_admin" backHref="/demo" demoInsights={demoInsights[id]} exportRunId={`synthetic-run-${runIndex+1}`}/></DemoShell>;
}
