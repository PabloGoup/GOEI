# Auditoría técnica GOEI-AUDIT-0011 — B4-B Lote 01

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0011` |
| Fecha | 2026-08-04 |
| Autoridad | Oficina Técnica GOEI (Codex) |
| Objeto | `GOEI-SCI-B4B-L01` — C-001…C-005 |
| Método de control | `GOEI-BSL-KPI-ADM-0001 v0.1.0` y handoff `B4B-L01` |
| Resultado | **NO CONFORME — corrección focalizada requerida** |
| Efecto | No integrar en la matriz operativa; no emitir D-019; no promover candidatos |

## 1. Controles conformes

- cobertura estructural completa: cinco candidatos y nueve criterios únicos por candidato, total 45 evaluaciones;
- vocabularios de los ejes A y B válidos;
- cinco estados globales derivados conforme a la precedencia léxica B4-A;
- `GOEI-ISS-056` aplicado selectivamente a C-003 y `GOEI-ISS-057` como condición de C-005;
- ninguna creación material de fórmula, peso, puntaje, umbral, benchmark, GTRM, normalización, D-019 o KPI aprobado;
- alcance limitado a C-001…C-005.

## 2. No conformidades

| ID | Prioridad | Ubicación | Hallazgo | Corrección requerida |
|---|---|---|---|---|
| NC-0011-01 | Crítica | C-002 / C-FACT | Se instancia la aplicabilidad concreta «menú fijo/bandeja única», pese a la reserva de `GOEI-ISS-054/059`. | Sustituir por una reserva abstracta de aplicabilidad; no nombrar categoría, modalidad ni valor taxonómico concreto. |
| NC-0011-02 | Importante | C-003 / C-FACT | El veredicto `CUMPLE` evalúa la factibilidad de la función de pronóstico, mientras la entidad evaluada es el candidato indicador; la propia limitación declara no evaluable su factibilidad cerrada. | Reevaluar C-FACT bajo `GOEI-ISS-056`, distinguiendo función e indicador, y recalcular el resumen aunque el estado global previsiblemente permanezca `BLOQUEADO`. |
| NC-0011-03 | Importante | Varias filas C-TRAZ/C-REP/C-AUD/C-FACT | `[ANÁLISIS]` o `[CONS]` aparece sin documento/sección o insumos exactos; no satisface por sí solo la procedencia exacta exigida por §7. | Identificar ficha, fuente o sección exacta; si es inferencia, declararla como inferencia del Comité e identificar sus insumos documentales exactos. |
| NC-0011-04 | Importante | C-004 / C-FACT | «Cualquier establecimiento» y «datos básicos» amplían la ficha, que exige sistema de costos estándar. | Limitar la justificación a establecimientos que dispongan del requisito documentado, sin afirmar universalidad no respaldada. |
| NC-0011-05 | Deseable | C-001 / C-FACT | «Cualquier establecimiento con carta» generaliza factibilidad sin procedencia operativa exacta. | Moderar la afirmación y declarar los requisitos de datos y costeo ya contenidos en la ficha. |

## 3. Dictamen técnico

El lote no puede incorporarse todavía a la matriz detallada, porque la matriz será la fuente operativa de verdad y no debe heredar ambigüedades de entidad, aplicabilidad ni procedencia. La corrección es focalizada: no invalida las 45 filas como estructura, no reabre el método B4-A y no afecta ninguna baseline vigente.

El Comité debe emitir una versión corregida completa del mismo expediente, preservando 45 evaluaciones y cinco resúmenes. La Oficina Técnica repetirá los controles de estructura, vocabulario, derivación, trazabilidad y prohibiciones antes de integrar el lote.
