import assert from "node:assert/strict";
import test from "node:test";
import ExcelJS from "exceljs";
import { demoAssessmentResponses, demoAssessments, demoEstablishments, demoInsights } from "@/data/demo";
import { getDemoCalculationRun } from "@/server/repositories/workspace";
import { buildExcel, buildPdf, type ReportContext } from "@/server/reporting/result-export";

function demoContext():ReportContext {
  const run=getDemoCalculationRun("synthetic-run-1");
  const assessment=demoAssessments[0];
  const establishment=demoEstablishments[0];
  if(!run) throw new Error("El resultado sintético debe existir");
  return {run,assessment,responses:demoAssessmentResponses(assessment.id),evidence:[],profile:establishment.profile,insights:demoInsights[assessment.id]};
}

test("el Excel integral conserva contexto, matriz de 28 criterios y orientación",async()=>{
  const workbook=new ExcelJS.Workbook();
  await workbook.xlsx.load((await buildExcel(demoContext())) as never);
  assert.deepEqual(workbook.worksheets.map(sheet=>sheet.name),["Resumen ejecutivo","Establecimiento","Contrato y trazabilidad","Resultados por dimensión","Matriz 28 criterios","Orientación por criterio","Evidencias","Lectura y límites","Notas del caso"]);
  assert.equal(workbook.getWorksheet("Matriz 28 criterios")?.rowCount,29);
  assert.equal(workbook.getWorksheet("Orientación por criterio")?.rowCount,29);
});

test("el PDF integral se emite como un documento no vacío",async()=>{
  const pdf=await buildPdf(demoContext());
  assert.ok(pdf.byteLength>12000);
  assert.equal(pdf.subarray(0,4).toString(),"%PDF");
});
