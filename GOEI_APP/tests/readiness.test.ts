import assert from "node:assert/strict";
import test from "node:test";
import { readinessStateLabels, readinessSummary, readinessStates } from "@/domain/readiness";

test("la preparación técnica conserva estados explícitos y comprensibles", () => {
  assert.deepEqual(readinessStates, ["ready", "pending", "blocked", "attention"]);
  for (const state of readinessStates) assert.ok(readinessStateLabels[state].length > 3);
});

test("el resumen no confunde bloqueos esperados con alertas", () => {
  const summary = readinessSummary([
    { id: "a", label: "A", detail: "A", state: "ready" },
    { id: "b", label: "B", detail: "B", state: "blocked" },
    { id: "c", label: "C", detail: "C", state: "attention" },
  ]);
  assert.deepEqual(summary, { ready: 1, pending: 0, blocked: 1, attention: 1 });
});
