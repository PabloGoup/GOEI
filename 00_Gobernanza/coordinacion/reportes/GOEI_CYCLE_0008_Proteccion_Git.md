# GOEI Cycle Report 0008 — Protección Git

**Fecha:** 2026-08-04

## Auditoría

- decisiones científicas nuevas: ninguna;
- estado B1: espera de D-008/GOEI-ISS-030;
- repositorio local/remoto: sincronizado al inicio del ciclo;
- permisos GitHub: administrativos;
- visibilidad: privada.

## Intento de protección

La consulta a la API de protección de `main` devolvió HTTP 403 con el mensaje: `Upgrade to GitHub Pro or make this repository public to enable this feature.`

No se cambió la visibilidad ni el plan, porque ambas acciones requieren autoridad material de la Dirección General. GOEI-ISS-042 fue actualizado con la condición exacta.

## Control compensatorio

Se incorporaron hooks versionados:

- `pre-commit`: integridad, roadmap y whitespace staged;
- `pre-push`: pruebas, integridad, roadmap y estados explícitos de preparación;
- instalador reproducible que configura `core.hooksPath`.

La CI remota continúa operativa. Estos controles reducen riesgo, pero no se representan como equivalentes a branch protection.

## Verificación

| Control | Resultado |
|---|---|
| `core.hooksPath` | `.githooks` activo |
| Hook pre-commit | Conforme |
| Hook pre-push | Conforme |
| Pruebas unitarias | 13/13 conformes |
| Roadmap | PASS — 15 paquetes |
| Validador integral | PASS — 98 controles |
| Readiness y tesis | Código 2 esperado; blockers preservados |
