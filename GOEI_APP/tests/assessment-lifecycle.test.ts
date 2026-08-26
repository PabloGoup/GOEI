import assert from "node:assert/strict";
import test from "node:test";
import { availableTransitions, isAssessmentEditable, transitionTarget } from "../src/domain/assessment-lifecycle.ts";

test("un evaluador sólo puede enviar una evaluación completa", () => {
  assert.deepEqual(availableTransitions("IN_PROGRESS", "evaluator", 27), []);
  assert.deepEqual(availableTransitions("IN_PROGRESS", "evaluator", 28), ["SUBMIT"]);
});

test("un observador nunca recibe transiciones operativas", () => {
  assert.deepEqual(availableTransitions("IN_PROGRESS", "observer", 28), []);
  assert.deepEqual(availableTransitions("IN_REVIEW", "observer", 28), []);
});

test("el supervisor controla revisión, devolución y cierre", () => {
  assert.deepEqual(availableTransitions("SUBMITTED", "methodology_supervisor", 28), ["START_REVIEW"]);
  assert.deepEqual(availableTransitions("IN_REVIEW", "methodology_supervisor", 28), ["RETURN", "CLOSE"]);
});

test("los estados sometidos o cerrados bloquean la edición", () => {
  assert.equal(isAssessmentEditable("RETURNED"), true);
  assert.equal(isAssessmentEditable("SUBMITTED"), false);
  assert.equal(isAssessmentEditable("IN_REVIEW"), false);
  assert.equal(isAssessmentEditable("CLOSED"), false);
});

test("cada acción conserva un destino explícito", () => {
  assert.equal(transitionTarget("SUBMIT"), "SUBMITTED");
  assert.equal(transitionTarget("START_REVIEW"), "IN_REVIEW");
  assert.equal(transitionTarget("RETURN"), "RETURNED");
  assert.equal(transitionTarget("CLOSE"), "CLOSED");
});
