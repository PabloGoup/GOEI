import { NextResponse } from "next/server";
import { demoAssessmentResponses, demoAssessments, demoEstablishments, demoInsights } from "@/data/demo";
import { getAssessment, getDemoCalculationRun, getEstablishment, listCalculationRuns } from "@/server/repositories/workspace";
import { buildExcel, buildPdf, type ReportContext } from "@/server/reporting/result-export";

export async function GET(_:Request,{params}:{params:Promise<{runId:string;format:string}>}) {
  const {runId,format}=await params;
  if(!["xlsx","pdf","constancia"].includes(format)) return NextResponse.json({error:"Formato no admitido"},{status:400});
  const demoRun=getDemoCalculationRun(runId);
  let context:ReportContext|null=null;
  if(demoRun){
    const assessment=demoAssessments.find(item=>item.id===demoRun.assessmentId)??null;
    const establishment=assessment?demoEstablishments.find(item=>item.id===assessment.establishmentId)??null:null;
    context={run:demoRun,assessment,responses:assessment?demoAssessmentResponses(assessment.id):[],evidence:[],profile:establishment?.profile??null,insights:assessment?demoInsights[assessment.id]??null:null};
  }else{
    const run=(await listCalculationRuns()).find(item=>item.id===runId);
    if(run){
      const record=await getAssessment(run.assessmentId);
      if(record){
        const establishment=record.assessment.establishmentId?await getEstablishment(record.assessment.establishmentId):null;
        context={run,assessment:record.assessment,responses:record.responses,evidence:record.evidenceItems,profile:establishment?.profile??null};
      }
    }
  }
  if(!context) return NextResponse.json({error:"Resultado no encontrado"},{status:404});
  const body=format==="xlsx"?await buildExcel(context):await buildPdf(context,format==="constancia");
  const ext=format==="xlsx"?"xlsx":"pdf";
  const type=format==="xlsx"?"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"application/pdf";
  return new NextResponse(new Uint8Array(body),{headers:{"Content-Type":type,"Content-Disposition":`attachment; filename="GOEI_${format}_${context.run.code}.${ext}"`,"Cache-Control":"private, no-store"}});
}
