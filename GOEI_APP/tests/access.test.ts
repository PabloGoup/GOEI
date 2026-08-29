import assert from "node:assert/strict";
import test from "node:test";
import { permissions, roles, roleLabels } from "../src/domain/access.ts";
import { methodologyStatus } from "../src/domain/methodology.ts";
import { instrumentCriteria, instrumentDimensions } from "../src/domain/instrument.ts";
import { criterionGuidance } from "../src/domain/criterion-guidance.ts";

test("todos los roles operativos tienen etiqueta y permisos explícitos", () => {
  for (const role of roles) {
    assert.ok(roleLabels[role]);
    assert.ok(Array.isArray(permissions[role]));
  }
});

test("el administrador de plataforma no recibe acceso automático a evidencia", () => {
  assert.equal(permissions.platform_admin.includes("evidence:read" as never), false);
});

test("la captura real y los criterios selectivos continúan bloqueados", () => {
  assert.equal(methodologyStatus.fieldCaptureAuthorized, false);
  assert.deepEqual([...methodologyStatus.blockedCriteria], ["C-016", "C-023"]);
});

test("el snapshot operativo conserva 7 dimensiones y 28 criterios únicos", () => {
  assert.equal(instrumentDimensions.length, 7);
  assert.equal(instrumentCriteria.length, 28);
  assert.equal(new Set(instrumentCriteria.map(item => item.id)).size, 28);
  for (const dimension of instrumentDimensions) {
    assert.equal(instrumentCriteria.filter(item => item.dimensionId === dimension.id).length, 4);
  }
});

test("cada criterio conserva nombre y orientación de evidencia", () => {
  for (const criterion of instrumentCriteria) {
    assert.ok(criterion.name.length > 5);
    assert.ok(criterion.evidenceHint.length > 5);
  }
});

test("cada criterio tiene orientación de acción trazable y estado metodológico explícito", () => {
  assert.equal(Object.keys(criterionGuidance).length, instrumentCriteria.length);
  for (const criterion of instrumentCriteria) {
    const guidance=criterionGuidance[criterion.id];
    assert.ok(guidance.purpose.length > 20);
    assert.ok(guidance.actionWhenGap.length > 20);
    assert.ok(guidance.evidenceToVerify.length > 20);
    assert.equal(guidance.sourceStatus,"CANDIDATO_TECNICO");
  }
});
