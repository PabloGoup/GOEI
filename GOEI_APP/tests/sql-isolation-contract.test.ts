import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const sql = readFileSync(
  new URL("../supabase/tests/cross_organization_isolation.sql", import.meta.url),
  "utf8",
);

test("la prueba RLS es transaccional y elimina todos sus datos sintéticos", () => {
  assert.match(sql, /^--[\s\S]*\nbegin;/i);
  assert.match(sql, /rollback;\s*$/i);
  assert.doesNotMatch(sql, /commit;/i);
});

test("la prueba cubre las superficies privadas del núcleo operativo", () => {
  const requiredSurfaces = [
    "organizations",
    "organization_memberships",
    "establishments",
    "assessments",
    "assessment_responses",
    "evidence_items",
    "response_evidence",
    "assessment_review_events",
    "audit_events",
    "storage.objects",
    "append_audit_event",
  ];

  for (const surface of requiredSurfaces) {
    assert.ok(sql.includes(surface), `Falta cobertura declarada para ${surface}`);
  }
});

test("las migraciones conservan identificadores de criterio con punto literal", () => {
  const fixSql = readFileSync(
    new URL("../supabase/migrations/202608260005_fix_criterion_id_constraints.sql", import.meta.url),
    "utf8",
  );

  assert.ok(fixSql.includes("^D[1-7]\\.[1-4]$"));
  assert.ok(fixSql.includes("assessment_responses_criterion_id_check"));
  assert.ok(fixSql.includes("evidence_items_criterion_id_check"));
});
