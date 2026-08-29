import { notFound } from "next/navigation";
import { DemoShell } from "@/components/demo-shell";
import { AssessmentWorkspace } from "@/components/assessment-workspace";
import { demoAssessments, demoCompleteResponses } from "@/data/demo";

export default async function PublicDemoAssessmentPage({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  const assessment=demoAssessments.find(item=>item.id===id);
  if(!assessment) notFound();
  const responses=id==="synthetic-assessment-002"?demoCompleteResponses:[];
  return <DemoShell><AssessmentWorkspace assessment={assessment} initialResponses={responses} persistence="local" role="organization_admin" backHref="/demo"/></DemoShell>;
}
