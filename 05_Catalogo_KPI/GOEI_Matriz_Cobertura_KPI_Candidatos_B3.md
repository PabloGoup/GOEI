# GOEI · Matriz de Cobertura del Universo Candidato de KPI (B3)

| Campo | Valor |
|---|---|
| Identificador | `GOEI-MTZ-KPI-C-0001` |
| Subfase | B3 — Universo y catálogo candidato de KPI |
| Versión | 0.1.0 (candidata) |
| Fecha | 2026-08-04 |
| Fuente de candidatos | `GOEI-CAT-KPI-C-0001` (`GOEI_Catalogo_KPI_Candidatos_B3.md`) |
| Marco de cobertura | `P1–P9` (`GOEI-BSL-PROC-0001 v0.1.0`) × `{FX-1, FX-2, FX-3, transversal}` (`GOEI-BSL-TAX-0001 v0.1.0`) |

> **Naturaleza.** Instrumento de trazabilidad de cobertura. No evalúa pertinencia, admisibilidad ni calidad de los candidatos. La faceta indica **condicionamiento de realización** (identidad FX), nunca valores concretos (BLOQUEADOS por `GOEI-ISS-054`). Toda agregación multiunidad está BLOQUEADA por `GOEI-ISS-008`.
> **Leyenda de densidad:** ● alta · ◐ media · ○ parcial/escasa · ✕ vacío.

## 1. Matriz proceso × candidato

| Proceso | Descripción (baseline) | Candidatos asociados | Densidad |
|---|---|---|---|
| P1 | Planificación y menú / demanda | C-001, C-002, C-003 | ○ |
| P2 | Aprovisionamiento | C-004, C-005 | ◐ |
| P3 | Recepción, almacenamiento e inventario | C-006, C-007 | ◐ |
| P4 | Producción / preparación | C-008, C-009, C-010, C-011 | ● |
| P5 | Distribución / servicio / cumplimiento | C-012, C-013, C-014, C-015, C-016 | ● |
| P6 | Transacción / cierre | C-017, C-018, C-019, C-020 | ● |
| P7 | Inocuidad, higiene y sanitización | C-021, C-022, C-023, C-024 | ◐ |
| P8 | Mantenimiento de equipos e instalación | C-025, C-026, C-027 (+ C-008) | ● |
| P9 | Gestión y control | C-028, C-029, C-030, C-031; C-032 solo como marco contextual | ● |

## 2. Matriz proceso × faceta (condicionamiento de realización)

Conforme a `GOEI-DIR-RES-0002`: FX-1 condiciona P5; FX-2 condiciona P4–P5; FX-3 condiciona P6. Las demás celdas son transversales (T) al alcance facetado.

| Proceso | FX-1 (servicio/entrega) | FX-2 (sistema de producción) | FX-3 (naturaleza económica) | Transversal (T) |
|---|---|---|---|---|
| P1 | — | C-003 (realización) | — | C-001, C-002, C-003 |
| P2 | — | — | — | C-004, C-005 |
| P3 | — | — | — | C-006, C-007 |
| P4 | — | C-008, C-010, C-011 | — | C-009 |
| P5 | C-012, C-013, C-014, C-015, C-016 | C-011 | — | — |
| P6 | C-018 (asientos) | — | C-017, C-018, C-019, C-020 | — |
| P7 | — | — | — | C-021, C-022, C-023, C-024 |
| P8 | — | — | — | C-008, C-025, C-026, C-027 |
| P9 | — | — | C-028, C-031 (realización) | C-028, C-029, C-030, C-031, C-032 |

## 3. Cobertura por faceta (identidad, no valores)

| Faceta | Proceso condicionado | Candidatos que dependen de la faceta | Densidad | Reserva |
|---|---|---|---|---|
| FX-1 modalidad de servicio/entrega | P5 | C-012, C-013, C-014, C-015, C-016, C-018 | ● | Valores bajo `GOEI-ISS-054`; sin asientos/mesa varios no aplican |
| FX-2 sistema de producción | P4–P5 | C-008, C-010, C-011 | ◐ | Comparabilidad entre sistemas → B4/validación |
| FX-3 naturaleza económica | P6 | C-017, C-018, C-019, C-020, C-028, C-031 | ● | Dualidad venta/requisición separa familias comercial/no comercial |

## 4. Vacíos de cobertura registrados

| ID vacío | Ubicación | Descripción | Issue propuesto |
|---|---|---|---|
| V-B3-01 | P1 | Ausencia de indicador documentado y cerrado de **exactitud de pronóstico de demanda** específico de foodservice; sólo existe la función de pronóstico descrita (C-003). | `GOEI-ISS-056` |
| V-B3-02 | Global (método) | Búsqueda **estructurada pero no exhaustiva** (no PRISMA); riesgo de omisión de indicadores. | `GOEI-ISS-055` |
| V-B3-03 | P2, P5, P9 | Dependencia de **fuentes genéricas** (SCOR, ISO 30414) no específicas de gastronomía; requieren adaptación de dominio (C-005, C-014, C-015, C-030). | `GOEI-ISS-057` |
| V-B3-04 | P7 | **Heterogeneidad jurisdiccional** de los puntajes de inspección (C-021); no comparables entre jurisdicciones. | `GOEI-ISS-058` |
| V-B3-05 | P3/P4 | Indicadores de **merma** (C-007) provienen de marco macro y tocan un área **fuera de la baseline** de procesos. | Reserva `GOEI-ISS-043` (existente) |
| V-B3-06 | P7 | **Doble rol** de inocuidad (indicador vs. restricción crítica AX-4) sin resolver. | Reserva `GOEI-ISS-015` (existente) |

## 5. Duplicados y solapamientos registrados

| Relación | Candidatos | Naturaleza |
|---|---|---|
| Contención de costo | C-028 ⊇ {C-009, C-029} | Prime cost % engloba food cost % y labor cost % |
| Solapamiento temporal | C-012 ↔ C-018 | RevPASH añade el eje tiempo a ventas por asiento |
| Numerador compartido | C-017 ↔ C-018 | Cheque promedio y ventas por asiento comparten "ventas" |
| Mismo indicador, dos lados | C-005 ↔ C-014 | Order Fulfillment Cycle Time en aprovisionamiento vs. cliente |
| Componente compartido | C-008 ⊃ C-027 | OEE incorpora la disponibilidad de EN 15341 |
| Sub-indicadores del mismo objetivo | C-007 (FLI ↔ FWI) | SDG 12.3.1.a y 12.3.1.b |
| Constructo doble proceso | C-008 en P4 y P8 | OEE se lee como efectividad de producción y disponibilidad de equipo |

## 6. Bloqueos selectivos aplicables a la matriz

- **`GOEI-ISS-008`** — BLOQUEA toda celda o lectura que dependa de **agregación multiunidad, multi-marca o por flujo**. Todos los candidatos se declaran a nivel de `Establecimiento` (token); cualquier rollup a cadena/marca queda fuera de B3.
- **`GOEI-ISS-054`** — BLOQUEA el uso de **valores concretos de faceta**. La matriz sólo asocia candidatos a la **identidad** FX-1/FX-2/FX-3.

## 7. Síntesis

Cobertura **alta** en P4, P5, P6, P8; **media** en P2, P3, P7 y en la porción no económica de P9; **parcial** en P1 (único vacío de proceso propiamente dicho). Las facetas indispensables quedan cubiertas al nivel de identidad. Seis vacíos registrados con cuatro Issues nuevos propuestos (`GOEI-ISS-055` a `058`) y dos reservas heredadas (`GOEI-ISS-043`, `GOEI-ISS-015`).

*La cobertura describe presencia de indicadores documentados, no idoneidad. Aceptar esta matriz no aprueba ningún KPI ni cierra los vacíos: sólo los hace trazables para B4. C-032 no integra la cola de evaluación de KPI porque el propio expediente lo identifica como marco y no como indicador.*
