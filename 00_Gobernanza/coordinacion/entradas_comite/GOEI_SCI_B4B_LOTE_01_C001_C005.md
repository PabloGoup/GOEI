# GOEI · Evaluación de Admisibilidad B4-B — Lote 01 (C-001…C-005)
## Dictamen del Comité Científico → Oficina Técnica

| Campo | Valor |
|---|---|
| Identificador | `GOEI-SCI-B4B-L01` |
| Lote | `B4B-L01` — `GOEI-KPI-C-001`…`005` |
| Cobertura | 5 candidatos × 9 criterios = **45 evaluaciones** |
| Fecha | 2026-08-04 |
| Autoridad | Comité Científico GOEI (Claude) |
| Método aplicado | `GOEI-BSL-KPI-ADM-0001 v0.1.0` (ratificado por `GOEI-DIR-RES-0004`); vista `GOEI-KPI-ADM-MTH-0001 v0.1.0` |
| Unidad de evaluación | `Establecimiento` (token, D-006) |
| Fuentes | Fichas C-001…005 de `GOEI_Catalogo_KPI_Candidatos_B3.md`; dictamen + adenda + corrigenda B4-A |
| Estado normativo | Evaluación de admisibilidad. **Ningún resultado es "KPI aprobado".** No emite D-019, no crea fórmula, peso, puntaje, umbral, benchmark, GTRM, referencia GOEI, normalización ni interpretación. |

> **Convención de evidencia:** `[NORMA]` norma/organismo oficial · `[EVIDENCIA]` bibliográfica revisada / texto académico · `[MARCO]` marco metodológico · `[ANÁLISIS]` análisis del Comité · `[CONS]` regla del método B4-A.
> **Eje A (veredicto candidato–criterio):** `CUMPLE` · `NO CUMPLE` · `EVIDENCIA INSUFICIENTE` · `NO APLICA` · `BLOQUEADO`.
> **Eje B (estado global):** `ADMISIBLE` · `ADMISIBLE CONDICIONADO` · `NO ADMISIBLE` · `EVIDENCIA INSUFICIENTE` · `BLOQUEADO`.
> **Regla de aplicabilidad:** `NO APLICA` sólo en C-NORED (sin comparador) o C-LEGSEG (fuera de inocuidad/seguridad/legalidad); los otros siete criterios nunca admiten `NO APLICA`.
> **Regla de resumen (léxica, no compensatoria):** (1) algún `NO CUMPLE` → `NO ADMISIBLE`; (2) sin fallos, algún `BLOQUEADO` → `BLOQUEADO`; (3) sin fallos ni bloqueos, algún `EVIDENCIA INSUFICIENTE` → homónimo; (4) todos aplicables `CUMPLE` con condición externa documentada → `ADMISIBLE CONDICIONADO`; (5) todos aplicables `CUMPLE` → `ADMISIBLE`.

---

## 2. Evaluaciones candidato–criterio (45)

### 2.1 GOEI-KPI-C-001 — Margen de contribución por ítem de menú
Fuente: Kasavana & Smith (1982), *Menu engineering* `[EVIDENCIA]`. Proceso P1 (insumo P6).

| Criterio | Veredicto | Evidencia | Justificación | Limitación | Issue |
|---|---|---|---|---|---|
| C-DEF | `CUMPLE` | Kasavana & Smith (1982) `[EVIDENCIA]` | Constructo unívoco: margen = precio de venta − costo de alimento del ítem | — | — |
| C-MED | `CUMPLE` | Ficha C-001; fuente provee cálculo `[EVIDENCIA]` | Definición operacional + unidad (moneda/ítem); num/den (diferencia) provistos por la fuente | Depende de costeo de recetas consistente | — |
| C-TRAZ | `CUMPLE` | Ficha C-001 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Datos (precio de venta, costo estandarizado de receta) trazables a POS y costeo; fuente citable | — | — |
| C-REP | `CUMPLE` | Ficha C-001 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Cálculo replicable con los mismos insumos (precio de venta, costo estandarizado de receta) | Sensible a la consistencia del costeo | — |
| C-AUD | `CUMPLE` | Ficha C-001 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Verificable por tercero desde registros de venta y costo de receta | — | — |
| C-FACT | `CUMPLE` | Ficha C-001 (Num/Den; Requisitos de datos) + `[CONS]` §6 método | Calculable manualmente (diferencia) donde consten los requisitos de datos y costeo de la ficha (precio de venta y costo estandarizado de receta) | Requiere costeo de recetas consistente; ligado a la existencia de menú/carta | — |
| C-PERT | `CUMPLE` | Ficha C-001; D-008 `[ANÁLISIS]` | Asociado a P1 (y a P6) | — | — |
| C-NORED | `CUMPLE` | Ficha C-001 `[ANÁLISIS]` | Comparador C-009: relación de **inclusión** (componente de food cost %), no duplicidad estricta; se registra sin fallo | De-duplicación normativa diferida a Matemática | — |
| C-LEGSEG | `NO APLICA` | `[CONS]` §5 método | Indicador económico sin dimensión de inocuidad/seguridad/legalidad; fuera de la conjunción | — | — |

### 2.2 GOEI-KPI-C-002 — Mezcla/popularidad del ítem de menú (menu mix %)
Fuente: Kasavana & Smith (1982) `[EVIDENCIA]`. Proceso P1.

| Criterio | Veredicto | Evidencia | Justificación | Limitación | Issue |
|---|---|---|---|---|---|
| C-DEF | `CUMPLE` | Kasavana & Smith (1982) `[EVIDENCIA]` | Constructo unívoco: participación relativa del ítem en unidades vendidas | — | — |
| C-MED | `CUMPLE` | Ficha C-002 `[EVIDENCIA]` | Num/den provistos (unidades del ítem / unidades totales); unidad porcentaje | — | — |
| C-TRAZ | `CUMPLE` | Ficha C-002 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Conteo de ventas por ítem trazable a POS; fuente citable | — | — |
| C-REP | `CUMPLE` | Ficha C-002 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Replicable con el mismo conteo de ventas por ítem | Sensible al periodo y a cambios de carta | — |
| C-AUD | `CUMPLE` | Ficha C-002 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Auditable desde conteos de venta por ítem | — | — |
| C-FACT | `CUMPLE` | Ficha C-002 (Num/Den; Requisitos de datos) + `[CONS]` §6 | Calculable manualmente (cociente) con el conteo de ventas por ítem de la ficha | Aplicabilidad por categoría reservada bajo `GOEI-ISS-054/059`; no se instancia categoría, modalidad ni valor taxonómico concreto | `GOEI-ISS-059` (sólo aplicabilidad por categoría, reservada) |
| C-PERT | `CUMPLE` | D-008 `[ANÁLISIS]` | Asociado a P1 | — | — |
| C-NORED | `NO APLICA` | Ficha C-002 (Duplicados: —) `[CONS]` §3 | Sin comparador declarado en el universo → fuera de la conjunción | — | — |
| C-LEGSEG | `NO APLICA` | `[CONS]` §5 | Indicador operativo sin dimensión de inocuidad/seguridad/legalidad | — | — |

### 2.3 GOEI-KPI-C-003 — Pronóstico de demanda de producción (forecasting)
Fuente: Gregoire & Spears (2007) `[EVIDENCIA]` (parcial). Proceso P1. **`GOEI-ISS-056` bloquea sólo el criterio que dependa de una métrica cerrada de exactitud de pronóstico.**

| Criterio | Veredicto | Evidencia | Justificación | Limitación | Issue |
|---|---|---|---|---|---|
| C-DEF | `CUMPLE` | Gregoire & Spears (2007) `[EVIDENCIA]` | La función de pronóstico de demanda está definida unívocamente como función de planificación | El texto describe una función, no un indicador cerrado | — |
| C-MED | `BLOQUEADO` | Ficha C-003; `[CONS]` §8 | La operacionalización como indicador **depende de una métrica cerrada de exactitud de pronóstico** que la fuente **no provee**; criterio bloqueado por el Issue | Num/den no provistos por la fuente | `GOEI-ISS-056` |
| C-TRAZ | `CUMPLE` | Ficha C-003 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Históricos de demanda/producción trazables; fuente citable | — | — |
| C-REP | `EVIDENCIA INSUFICIENTE` | Ficha C-003 (Limitaciones: vacío de exactitud) `[ANÁLISIS]` — inferencia del Comité | Sin métrica cerrada del indicador no puede afirmarse la reproducibilidad de la medición | Presupone C-MED, hoy bloqueado | `GOEI-ISS-056` (dependencia) |
| C-AUD | `EVIDENCIA INSUFICIENTE` | Ficha C-003 (Limitaciones: vacío de exactitud) `[ANÁLISIS]` — inferencia del Comité | La auditabilidad de un desempeño de pronóstico requiere la métrica no cerrada; el pronóstico registrado es auditable, no así el indicador de exactitud | Presupone C-MED | `GOEI-ISS-056` (dependencia) |
| C-FACT | `EVIDENCIA INSUFICIENTE` | Ficha C-003 (Limitaciones: vacío de exactitud) `[ANÁLISIS]` — inferencia del Comité | La entidad evaluada es el indicador candidato, no la función: la función de pronóstico es realizable con históricos, pero la factibilidad del indicador presupone la métrica cerrada de exactitud (C-MED), hoy bloqueada; no puede afirmarse | Presupone C-MED, hoy bloqueado | `GOEI-ISS-056` (dependencia) |
| C-PERT | `CUMPLE` | D-008 `[ANÁLISIS]` | Asociado a P1 (planificación/demanda) | — | — |
| C-NORED | `NO APLICA` | Ficha C-003 (Duplicados: —) `[CONS]` §3 | Sin comparador declarado → fuera de la conjunción | — | — |
| C-LEGSEG | `NO APLICA` | `[CONS]` §5 | Función de planificación sin dimensión de inocuidad/seguridad/legalidad | — | — |

### 2.4 GOEI-KPI-C-004 — Variación de precio de compra (purchase price variance)
Fuente: Horngren, Datar & Rajan (2015), *Cost accounting* `[EVIDENCIA]`. Proceso P2.

| Criterio | Veredicto | Evidencia | Justificación | Limitación | Issue |
|---|---|---|---|---|---|
| C-DEF | `CUMPLE` | Horngren et al. (2015) `[EVIDENCIA]` | Constructo unívoco: desviación (precio real − estándar) aplicada a la cantidad | — | — |
| C-MED | `CUMPLE` | Ficha C-004 `[EVIDENCIA]` | Fórmula provista por la fuente: (precio real − estándar) × cantidad; unidad moneda | — | — |
| C-TRAZ | `CUMPLE` | Ficha C-004 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Precios estándar definidos y registro de compras trazables; fuente citable | — | — |
| C-REP | `CUMPLE` | Ficha C-004 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Replicable con los mismos precios estándar y registro de compras | — | — |
| C-AUD | `CUMPLE` | Ficha C-004 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Auditable desde precios estándar y registro de compras | — | — |
| C-FACT | `CUMPLE` | Ficha C-004 (Num/Den; Requisitos de datos; Limitaciones) + `[CONS]` §6 | Calculable manualmente (resta × cantidad) en establecimientos que dispongan de un sistema de costos estándar documentado, conforme lo exige la ficha | Requiere un sistema de costos estándar (Ficha C-004); origen genérico de gestión/manufactura | — |
| C-PERT | `CUMPLE` | D-008 `[ANÁLISIS]` | Asociado a P2 (aprovisionamiento) | — | — |
| C-NORED | `CUMPLE` | Ficha C-004 `[ANÁLISIS]` | Comparador C-009: relación de **inclusión** (insumo de food cost %), no duplicidad estricta; se registra sin fallo | De-duplicación normativa diferida a Matemática | — |
| C-LEGSEG | `NO APLICA` | `[CONS]` §5 | Indicador de costos sin dimensión de inocuidad/seguridad/legalidad | — | — |

### 2.5 GOEI-KPI-C-005 — Tiempo de ciclo de cumplimiento de pedido (aprovisionamiento)
Fuente: ASCM (2022), *SCOR Digital Standard v14.0* `[NORMA/MARCO]`. Proceso P2. **`GOEI-ISS-057` condiciona la adaptación al dominio gastronómico (condición de promoción), sujeta al invariante de `ADMISIBLE CONDICIONADO`.**

| Criterio | Veredicto | Evidencia | Justificación | Limitación | Issue |
|---|---|---|---|---|---|
| C-DEF | `CUMPLE` | ASCM SCOR (2022) `[NORMA/MARCO]` | Constructo unívoco: tiempo promedio desde colocación del pedido hasta la entrega | — | — |
| C-MED | `CUMPLE` | Ficha C-005 `[NORMA/MARCO]` | Definición operacional (promedio de tiempos) y unidad (días/horas) provistas por la fuente | Definición genérica; refinamiento de dominio es condición externa, no indeterminación | `GOEI-ISS-057` (condición externa) |
| C-TRAZ | `CUMPLE` | Ficha C-005 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Marcas de tiempo de pedido y recepción trazables; fuente citable | — | — |
| C-REP | `CUMPLE` | Ficha C-005 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Replicable con las mismas marcas de tiempo de pedido y recepción | — | — |
| C-AUD | `CUMPLE` | Ficha C-005 (Requisitos de datos) `[ANÁLISIS]` — inferencia del Comité | Auditable desde registros de pedido/recepción | — | — |
| C-FACT | `CUMPLE` | Ficha C-005 (Requisitos de datos) + `[CONS]` §6 | Calculable manualmente (diferencia de marcas de tiempo y promedio) con las marcas de pedido y recepción de la ficha | — | — |
| C-PERT | `CUMPLE` | D-008 `[ANÁLISIS]` | Asociado a P2 (lado abastecimiento) | — | — |
| C-NORED | `CUMPLE` | Ficha C-005 `[ANÁLISIS]` | Comparador C-014: **complementariedad** (mismo indicador aplicado a un proceso distinto, lado cliente/P5, con datos distintos), no duplicidad estricta; se registra sin fallo | De-duplicación con C-014 diferida a Matemática | — |
| C-LEGSEG | `NO APLICA` | `[CONS]` §5 | Indicador de tiempo de ciclo sin dimensión de inocuidad/seguridad/legalidad | — | — |

---

## 3. Estados globales derivados (regla de resumen B4-A)

| Candidato | Veredictos aplicables | Regla activada | **Estado global** | Trazabilidad |
|---|---|---|---|---|
| C-001 | 8 `CUMPLE`; C-LEGSEG `NO APLICA` | §6.5 (todos aplicables CUMPLE, sin condición) | **`ADMISIBLE`** | §2.1 |
| C-002 | 7 `CUMPLE`; C-NORED y C-LEGSEG `NO APLICA` | §6.5 | **`ADMISIBLE`** | §2.2 |
| C-003 | C-MED `BLOQUEADO`; C-REP/C-AUD/C-FACT `EVIDENCIA INSUFICIENTE`; 3 `CUMPLE` (C-DEF, C-TRAZ, C-PERT); 2 `NO APLICA`; **sin `NO CUMPLE`** | §6.2 (sin fallos, hay `BLOQUEADO`) | **`BLOQUEADO`** | §2.3 |
| C-004 | 8 `CUMPLE`; C-LEGSEG `NO APLICA` | §6.5 | **`ADMISIBLE`** | §2.4 |
| C-005 | 8 `CUMPLE`; C-LEGSEG `NO APLICA`; condición externa `GOEI-ISS-057` | §6.4 (todos aplicables CUMPLE + condición externa documentada) | **`ADMISIBLE CONDICIONADO`** | §2.5 |

**Invariante de `ADMISIBLE CONDICIONADO` (C-005):** la condición de adaptación gastronómica (`GOEI-ISS-057`) es una **condición de promoción externa** que **no contradice ni deja indeterminado** ningún criterio marcado `CUMPLE` — la definición SCOR genérica es medible, trazable y auditable tal cual; la adaptación de dominio se resuelve en compuerta posterior. Invariante satisfecho (corrigenda B4-A §2).

---

## 4. Desacuerdos, evidencia insuficiente, bloqueos y condiciones

- **Bloqueos.** C-003: `C-MED` `BLOQUEADO` por `GOEI-ISS-056` (la operacionalización depende de una métrica cerrada de exactitud de pronóstico no provista por la fuente). El bloqueo es **selectivo a nivel de criterio**; `C-REP`, `C-AUD` y `C-FACT` quedan `EVIDENCIA INSUFICIENTE` por presuponer la medición bloqueada —`C-FACT` distingue la función de pronóstico (realizable con históricos) del indicador de exactitud, cuya factibilidad presupone `C-MED`. No se propaga a los demás candidatos.
- **Condiciones.** C-005: condición de promoción `GOEI-ISS-057` (adaptación de dominio de un indicador SCOR genérico a foodservice); estado `ADMISIBLE CONDICIONADO`, condición registrada, no resuelta.
- **Evidencia insuficiente independiente.** Ninguna fuera del contexto del bloqueo de C-003.
- **Desacuerdos.** El Comité no registra desacuerdos internos en este lote; ninguna evaluación se cierra por silencio.
- **Relaciones de redundancia registradas (de-duplicación diferida):** C-001 ⊂ food cost % (C-009); C-004 ⊂ food cost % (C-009); C-005 ↔ C-014 (complementariedad P2/P5). Ninguna es duplicidad estricta; ninguna genera `NO CUMPLE`.
- **Aplicabilidad por categoría.** Las notas de categoría (p. ej. la reserva registrada en C-002/C-FACT) se **reservan** bajo `GOEI-ISS-054/059` y **no** se usan como veredicto; no se instancia categoría, modalidad ni valor taxonómico concreto; la evaluación es al nivel `Establecimiento`.

---

## 5. Límites y propuesta de aceptación del lote

**Límites (por materia, fuera de B4-B):** este lote **no** contiene medición completa, referencias/benchmarks, funciones GTRM, normalización, matemática (puntaje/peso/agregación/fórmula), umbrales ni interpretación. No declara exhaustividad del universo (`GOEI-ISS-055` abierto). No aprueba ningún candidato como "KPI aprobado". No evalúa C-006 en adelante. No emite D-019.

**Resultado del Lote 01:** 3 `ADMISIBLE` (C-001, C-002, C-004), 1 `ADMISIBLE CONDICIONADO` (C-005, `GOEI-ISS-057`), 1 `BLOQUEADO` (C-003, `GOEI-ISS-056`). Las 45 evaluaciones están completas, con veredicto controlado, evidencia exacta, justificación tipificada, limitación e Issue aplicable, y los cinco estados globales derivan de forma determinista y reversible de las nueve evaluaciones respectivas.

**Propuesta:** elevar el Lote 01 a **auditoría técnica** de trazabilidad y conformidad de vocabulario/regla. Con resultado conforme, el lote queda disponible como entrada para la matriz detallada de admisibilidad (fuente operativa de verdad), sin promover ningún candidato a KPI. La continuación (Lote 02, C-006…) requiere encargo separado; las salidas de B4-B por lote no se mezclan.

---

*Dictamen del Comité Científico. No modifica candidatos, método, baselines, registros ni Issues. No evalúa C-006 en adelante, no emite D-019 y no crea fórmula, peso, puntaje, umbral, benchmark, GTRM, referencia GOEI, normalización ni interpretación. Ningún resultado constituye "KPI aprobado".*
