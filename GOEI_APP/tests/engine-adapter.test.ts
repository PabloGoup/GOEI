import test from "node:test";
import assert from "node:assert/strict";
import { evaluateWithCandidateEngine, type EngineCriterionResponse } from "../src/domain/engine-adapter";

const responses = (): EngineCriterionResponse[] => Array.from({length:28},(_,index) => {
  const dimension = Math.floor(index / 4) + 1;
  const criterion = index % 4 + 1;
  return {
    criterionId:`D${dimension}.${criterion}`,
    status:"EVALUABLE",
    level:2,
    evidenceGrade:2,
    justification:"Respuesta exclusivamente sintética para verificar el adaptador.",
  };
});

test("el adaptador bloquea cálculo cuando faltan período y gate crítico", () => {
  const result = evaluateWithCandidateEngine({
    assessmentId:"00000000-0000-4000-8000-000000000001",
    assessmentKind:"SYNTHETIC_DEMONSTRATION",
    establishmentId:"00000000-0000-4000-8000-000000000002",
    establishmentName:"Caso sintético",
    periodStart:null,
    periodEnd:null,
    gate:null,
    responses:responses(),
    evidence:[],
  },"2026-08-28T12:00:00.000Z");
  assert.equal(result.ready,false);
  if (!result.ready) {
    assert.ok(result.blockers.some(item=>item.includes("período")));
    assert.ok(result.blockers.some(item=>item.includes("gate crítico")));
  }
});

test("el adaptador produce salida provisional sólo con contrato completo y explícito", () => {
  const result = evaluateWithCandidateEngine({
    assessmentId:"00000000-0000-4000-8000-000000000001",
    assessmentKind:"SYNTHETIC_DEMONSTRATION",
    establishmentId:"00000000-0000-4000-8000-000000000002",
    establishmentName:"Caso sintético",
    periodStart:"2026-08-01",
    periodEnd:"2026-08-28",
    gate:{status:"NO_VERIFICABLE",basis:"Gate no verificable en prueba mecánica sintética.",protocolVersion:null},
    responses:responses(),
    evidence:[],
  },"2026-08-28T12:00:00.000Z");
  assert.equal(result.ready,true);
  if (result.ready) {
    assert.equal(result.output.emissionStatus,"PARTIAL_PROFILE_NO_SCORE");
    assert.equal(result.output.displayFinalScore,null);
    assert.equal(result.output.displayCoverage,100);
    assert.equal(result.output.displayConfidence,67);
    assert.match(result.output.trace.inputDigest,/^sha256:/);
  }
});

test("un criterio pendiente conserva bloqueado el motor", () => {
  const incomplete = responses();
  incomplete[0] = {...incomplete[0],status:"PENDING",level:null,evidenceGrade:0};
  const result = evaluateWithCandidateEngine({
    assessmentId:"00000000-0000-4000-8000-000000000001",
    assessmentKind:"SYNTHETIC_DEMONSTRATION",
    establishmentId:"00000000-0000-4000-8000-000000000002",
    establishmentName:"Caso sintético",
    periodStart:"2026-08-01",
    periodEnd:"2026-08-28",
    gate:{status:"VERDE",basis:"Prueba mecánica sintética.",protocolVersion:null},
    responses:incomplete,
    evidence:[],
  },"2026-08-28T12:00:00.000Z");
  assert.equal(result.ready,false);
  if (!result.ready) assert.equal(result.reviewedCriteria,27);
});
