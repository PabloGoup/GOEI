import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const migration = readFileSync(new URL("../supabase/migrations/202608280006_candidate_engine_runs.sql",import.meta.url),"utf8");

test("la migración conserva gate explícito e historial reproducible",()=>{
  assert.match(migration,/gate_status/);
  assert.match(migration,/gate_basis/);
  assert.match(migration,/assessment_calculation_runs/);
  assert.match(migration,/input_digest/);
  assert.match(migration,/input_payload/);
  assert.match(migration,/output_payload/);
});

test("las ejecuciones tienen aislamiento de lectura y escritura",()=>{
  assert.match(migration,/calculation_runs_read_authorized/);
  assert.match(migration,/calculation_runs_insert_authorized/);
  assert.match(migration,/can_access_assessment\(assessment_id\)/);
  assert.match(migration,/field_capture_authorized = false/);
});

test("la auditoría admite la ejecución del motor sin habilitar captura real",()=>{
  assert.match(migration,/'assessment\.calculated'/);
  assert.doesNotMatch(migration,/field_capture_authorized\s*=\s*true/);
});
