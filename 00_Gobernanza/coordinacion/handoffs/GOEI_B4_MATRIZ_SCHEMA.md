# Esquema técnico de la matriz B4

**Estado:** preparada como estructura; no contiene resultados científicos.
**Fuente de verdad futura:** una matriz detallada candidato–criterio. Cualquier resumen deberá derivarse de ella.

## Identidad del artefacto

| Campo | Valor inicial |
|---|---|
| ID | `GOEI-MTZ-KPI-B4-0001` |
| Baseline de entrada | `GOEI-BSL-KPI-C-0001 v0.1.0` |
| Cola evaluable | `GOEI-KPI-C-001`–`GOEI-KPI-C-031` |
| Excluido | `GOEI-KPI-C-032` — marco contextual |
| Estado | Estructura preparada / sin evaluación |
| Criterios | Pendientes de B4-A aprobado |

## Clave y campos obligatorios

La clave de una fila detallada será:

`candidate_id + criterion_id + criterion_version`

Cada fila deberá contener, como mínimo:

```text
candidate_id
candidate_source_version
criterion_id
criterion_version
result_code
result_scope
scientific_justification
evidence_reference
scientific_authority
decision_reference
issue_reference
block_state
evaluation_date
evaluation_version
source_artifact
```

## Reglas mecánicas

1. Deben existir exactamente 31 candidatos evaluables y ningún ID desconocido.
2. C-032 nunca se incorpora a la cola de evaluación.
3. Cada criterio aprobado debe aparecer para cada candidato, salvo que el estado explícito sea `no_aplica`, `no_evaluado`, `evidencia_insuficiente` o `bloqueado`.
4. Los campos científicos no pueden rellenarse con inferencias técnicas.
5. No se permiten durante B4 campos de fórmula GOEI, referencia concreta, GTRM concreta, normalización, peso, agregación, umbral o interpretación.
6. Cada resultado debe enlazar a evidencia, autoridad, decisión y versión.
7. Los Issues 055–058, 008, 015, 043 y 054 se registran por fila cuando afecten selectivamente.
8. El resumen por candidato se calcula desde la matriz detallada; no se edita como fuente independiente.
9. Toda sustitución crea una nueva versión y conserva el registro anterior.
10. La matriz no puede utilizar la etiqueta `KPI aprobado`; B4 solo puede producir estados de admisibilidad dentro de su alcance.

## Vistas derivadas previstas

- `detalle_candidato_criterio`: fuente de verdad auditable.
- `resumen_candidato`: estado derivado, criterios determinantes, bloqueos y limitaciones.
- `cobertura_issues`: candidatos afectados por Issues abiertos.
- `control_integridad`: duplicados, IDs ausentes, estados inválidos, fuentes no resolubles y contaminación B5–B8.

## Condición de apertura de B4-B

No se poblarán filas con resultados hasta que exista un dictamen B4-A aprobado que defina criterios, estados y regla de resumen. La estructura está lista; la ciencia permanece pendiente.
