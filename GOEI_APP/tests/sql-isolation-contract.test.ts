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
