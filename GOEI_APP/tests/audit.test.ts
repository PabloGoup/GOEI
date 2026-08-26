import assert from "node:assert/strict";
import test from "node:test";
import { auditCategory, auditEventLabel, sanitizeAuditMetadata } from "../src/domain/audit.ts";

test("la auditoría traduce eventos conocidos sin exponer códigos crudos",()=>{
  assert.equal(auditEventLabel("assessment.submitted"),"Evaluación enviada");
  assert.equal(auditEventLabel("evidence.uploaded"),"Evidencia cargada");
  assert.equal(auditEventLabel("unknown.event"),"Evento operativo");
});

test("los eventos se agrupan en categorías operativas",()=>{
  assert.equal(auditCategory("assessment.closed"),"assessment");
  assert.equal(auditCategory("evidence.accessed"),"evidence");
  assert.equal(auditCategory("establishment.created"),"establishment");
  assert.equal(auditCategory("report.exported"),"report");
});

test("la vista elimina metadatos sensibles o no reconocidos",()=>{
  const safe = sanitizeAuditMetadata({criterionId:"D1.1",status:"EVALUABLE",token:"secret",email:"persona@example.com",nested:{unsafe:true}});
  assert.deepEqual(safe,{criterionId:"D1.1",status:"EVALUABLE"});
});
