# GOEI · Entrada de Comité Científico — B4-B Lote 02 (C-006…C-010)
## Cribado de admisibilidad candidato–criterio al nivel `Establecimiento`

| Campo | Valor |
|---|---|
| Identificador | `GOEI-SCI-B4B-L02-0001` |
| Lote | `B4B-L02` |
| Candidatos evaluados | `GOEI-KPI-C-006`, `C-007`, `C-008`, `C-009`, `C-010` |
| Cantidad | 5 candidatos × 9 criterios = **45 evaluaciones** |
| Método aplicado | `GOEI-BSL-KPI-ADM-0001 v0.1.0` (integración: dictamen + adenda resolutiva §A–H + corrigenda §1–3) |
| Autoridad científica | Comité Científico GOEI |
| Estado de la baseline y del método | Inmutables; esta entrada los **consume sin sobrescribir** |
| Unidad de evaluación | `Establecimiento` (token, D-006) |
| Revisión | Corrigenda focalizada en respuesta a `GOEI-AUDIT-0013` (atiende NC-0013-01…05); no reabre B4-A |
| Fecha | 2026-08-04 |
| Estado | Listo para revisión del Comité Científico |

> **Naturaleza y límites de esta salida.** Cribado no compensatorio referenciado a evidencia. Cada veredicto conserva fuente exacta o inferencia con insumos documentales, justificación, limitación e Issue aplicable; el estado global se deriva **sólo** por la regla léxica determinista §D del método. Esta entrada **no** emite `D-019`, **no** crea fórmula GOEI, peso, puntaje, umbral, benchmark, GTRM, referencia concreta, normalización ni interpretación, y **no** denomina `KPI aprobado` a ningún resultado. No declara exhaustividad del universo (`GOEI-ISS-055`) y **no** afirma aplicabilidad por categorías, modalidades ni valores concretos de faceta (`GOEI-ISS-054/059`): sólo evalúa al nivel `Establecimiento`. La factibilidad se limita a los requisitos de datos documentados por cada ficha, sin afirmar universalidad por inferencia.

---

## 1. Identidad y alcance

- **Fuentes canónicas consultadas:** `05_Catalogo_KPI/GOEI_Catalogo_KPI_Candidatos_B3.md` (fichas C-006…010); `05_Catalogo_KPI/GOEI_Metodo_Admisibilidad_KPI_B4A.md`; y, por remisión del método (§1 y §7), `GOEI_SCI_ADENDA_B4A_Resolutiva.md` (§A4 suficiencia probatoria, §B aplicabilidad, §D regla de resumen) y `GOEI_SCI_CORRIGENDA_B4A.md` (eje A de cinco valores; invariante de `ADMISIBLE CONDICIONADO`).
- **Alcance exclusivo:** C-006…C-010. No se releen ni reevalúan C-001…C-005 (Lote 01, aceptado por `GOEI-AUDIT-0012`). C-032 permanece excluido de toda fila. No hay KPI aprobados.
- **Vocabularios controlados aplicados.** Eje A (candidato–criterio): `CUMPLE` · `NO CUMPLE` · `EVIDENCIA INSUFICIENTE` · `NO APLICA` · `BLOQUEADO`. Eje B (estado global): `ADMISIBLE` · `ADMISIBLE CONDICIONADO` · `NO ADMISIBLE` · `EVIDENCIA INSUFICIENTE` · `BLOQUEADO`.
- **Regla de aplicabilidad.** Siete criterios son universales y nunca `NO APLICA` (C-DEF, C-MED, C-TRAZ, C-REP, C-AUD, C-FACT, C-PERT); sólo C-NORED y C-LEGSEG admiten `NO APLICA` justificado, quedando fuera de la conjunción lógica. `NO APLICA` en C-NORED procede cuando **no existe un comparador instanciado** dentro de `C-001…C-031`.
- **Invariante de `ADMISIBLE CONDICIONADO` (corrigenda §2).** Sólo procede si todos los criterios necesarios aplicables son `CUMPLE` y la condición pendiente **no contradice ni deja indeterminado** ninguno de ellos; si lo hace, el criterio afectado se reevalúa como `EVIDENCIA INSUFICIENTE` o `BLOQUEADO` y el global se redetermina.
- **Regla de resumen (adenda §D), aplicada tras la de aplicabilidad:** (1) algún necesario aplicable `NO CUMPLE` → `NO ADMISIBLE`; (2) sin fallos, algún `BLOQUEADO(criterio)` → `BLOQUEADO`; (3) sin fallos ni bloqueos, algún `EVIDENCIA INSUFICIENTE` → estado homónimo; (4) todos los aplicables `CUMPLE` con condición documentada pendiente → `ADMISIBLE CONDICIONADO`; (5) todos `CUMPLE` sin condición → `ADMISIBLE`.

---

## 2. Evaluaciones candidato–criterio (45)

### 2.1 `GOEI-KPI-C-006` — Rotación de inventario (inventory turnover) · Proceso P3

| Criterio | Veredicto | Fuente / inferencia (insumos documentales exactos) | Justificación científica | Limitación | Issue aplicable |
|---|---|---|---|---|---|
| C-DEF | CUMPLE | Ficha C-006: "número de veces que el inventario se consume/renueva en un periodo". Horngren, Datar & Rajan (2015); NRA (2012) *USAR* 8th ed. | Definición conceptual unívoca de un constructo de renovación de inventario, sin ambigüedad de referente. | Concepto de periodo debe fijarse en la compuerta de Medición. | — |
| C-MED | CUMPLE | Ficha C-006: unidad "veces (turns) por periodo"; numerador/denominador provistos por la fuente: COGS / inventario promedio. | Cumple el nivel B4 (definición operacional + unidad + numerador/denominador provistos por la fuente), aplicables al establecimiento individual. | Protocolo, tolerancias y periodicidad normativa son materia de Medición, fuera de B4-A. | — |
| C-TRAZ | CUMPLE | Ficha C-006: requisitos de datos "COGS del periodo e inventarios inicial y final"; fuentes citables con procedencia B3. | Datos y fuente trazables a registros contables identificables del propio establecimiento. | — | — |
| C-REP | CUMPLE | Cociente determinista COGS/inventario promedio (ficha C-006). | Mismos insumos producen el mismo resultado; reproducible sin puntuación. | — | — |
| C-AUD | CUMPLE | Insumos contables (COGS, inventarios) auditables contra libros del establecimiento. | Cadena de evidencia verificable por un tercero. | — | — |
| C-FACT | CUMPLE | Requisitos de datos de la ficha: COGS e inventarios inicial y final del establecimiento. | Factible con los requisitos de datos documentados por la ficha, al nivel `Establecimiento`; no se afirma universalidad. | Agregación multiunidad/multi-marca queda fuera de alcance (reserva de alcance correctamente acotada). | `GOEI-ISS-008` (agregación multiunidad, reserva de alcance) |
| C-PERT | CUMPLE | Ficha C-006: Proceso P3 (recepción, almacenamiento e inventario) del modelo de procesos GOEI. | Pertinente a un proceso GOEI instanciado. | — | — |
| C-NORED | NO APLICA | Ficha C-006: único relacionado es "días de inventario (inverso, **no incluido por falta de ficha-fuente separada**)"; no existe comparador instanciado dentro de `C-001…C-031`. | El inverso no está instanciado como candidato; sin comparador en el universo, `NO APLICA` conforme al precedente B4-A/Lote 01. Se excluye de la conjunción. | Relación con el inverso registrada sólo como nota de procedencia. | — |
| C-LEGSEG | NO APLICA | Ficha C-006: indicador económico-operacional; no toca inocuidad, seguridad ni legalidad. | Fuera del dominio de no compensación crítica; se excluye de la conjunción (adenda §B1). | Sin rol AX-4 registrado. | — |

**Estado global C-006 (regla §D):** todos los criterios necesarios aplicables (C-DEF, C-MED, C-TRAZ, C-REP, C-AUD, C-FACT, C-PERT) `CUMPLE`, sin condición documentada pendiente; C-NORED y C-LEGSEG `NO APLICA` excluidos → **`ADMISIBLE`**.

### 2.2 `GOEI-KPI-C-007` — Índice de pérdida / desperdicio de alimentos (FLI/FWI, SDG 12.3.1) · Proceso P3/P4

| Criterio | Veredicto | Fuente / inferencia (insumos documentales exactos) | Justificación científica | Limitación | Issue aplicable |
|---|---|---|---|---|---|
| C-DEF | CUMPLE | Ficha C-007: "cambio porcentual de las pérdidas/desperdicio respecto de un periodo base"; FLI (producción→pre-minorista) y FWI (minorista, servicio, hogares). FAO (2019). | El constructo está conceptualmente definido con referente claro; la definición como concepto no depende del nivel de agregación. | La definición es de marco (canasta/sector); su instanciación de establecimiento se examina en los criterios operativos siguientes. | — |
| C-MED | EVIDENCIA INSUFICIENTE | Ficha C-007: "la fuente no fija un cociente aplicable a nivel de un solo establecimiento"; "marco macro (país/sector), no de establecimiento". | Al nivel `Establecimiento` la fuente no provee operacionalización medible; afirmar un cociente de establecimiento exigiría inventarlo (prohibido). Por §A4 falta fuente citable que sostenga el `CUMPLE` a esta unidad. | La operacionalización existe sólo a escala macro; no se transfiere al establecimiento sin invención. | — |
| C-TRAZ | EVIDENCIA INSUFICIENTE | Ficha C-007: los requisitos "cuantificación de flujos de alimento y pérdidas" y la fuente FAO (2019) describen trazabilidad **de marco**, no del establecimiento. | La trazabilidad demostrada es de canasta/sector; no se transfiere al nivel `Establecimiento` por inferencia (estricto, `GOEI-AUDIT-0013` NC-0013-02). | Sin fuente que sostenga trazabilidad de establecimiento. | — |
| C-REP | EVIDENCIA INSUFICIENTE | Ficha C-007: el método reproducible descrito por FAO (2019) es el de cambio porcentual sobre canasta base (macro). | La repetibilidad acreditada es la del marco macro; no existe procedimiento de establecimiento citable que reproducir. No se transfiere por inferencia. | Sin procedimiento de establecimiento acreditado. | — |
| C-AUD | EVIDENCIA INSUFICIENTE | Ficha C-007: la auditabilidad se sostiene sobre flujos macro; la fuente no documenta un rastro de auditoría de establecimiento. | La cadena de evidencia auditable acreditada es la del marco; su equivalente de establecimiento no está documentado y no se infiere. | Sin rastro de auditoría de establecimiento documentado. | — |
| C-FACT | EVIDENCIA INSUFICIENTE | Ficha C-007: los requisitos de datos documentados corresponden a "cuantificación de flujos de alimento y pérdidas" a escala de marco, no de establecimiento. | La factibilidad se evalúa contra los requisitos documentados, que son macro; no puede afirmarse factibilidad de establecimiento sin datos hipotéticos (prohibido). | Sin requisitos de datos de establecimiento provistos por la fuente. | — |
| C-PERT | CUMPLE | Ficha C-007: Procesos P3 y P4; su uso como indicador de eficiencia "no reabre" la clasificación de merma. | Pertinente a procesos GOEI. La reserva ISS-043 acota **la clasificación de la merma como macroproceso** (su alcance propio), no la carencia de operacionalización, y se registra sin fallo. | Pertinencia registrada bajo la reserva de clasificación ISS-043. | `GOEI-ISS-043` (clasificación de merma como proceso; reserva informativa) |
| C-NORED | NO APLICA | Ficha C-007: "FLI y FWI son sub-indicadores del mismo objetivo" — **relación interna del candidato**, no comparadores candidatos separados; ningún otro `C-001…C-031` mide pérdida/desperdicio. | Sin comparador instanciado en el universo, `NO APLICA` conforme al precedente B4-A/Lote 01. La relación FLI/FWI se registra como interna, no como redundancia entre candidatos. | Relación interna FLI/FWI registrada en procedencia. | — |
| C-LEGSEG | NO APLICA | Ficha C-007: indicador de eficiencia/sostenibilidad; no constituye restricción de inocuidad, seguridad o legalidad. | Fuera del dominio de no compensación crítica; excluido de la conjunción (adenda §B1). | Sin rol AX-4 registrado. | — |

**Estado global C-007 (regla §D):** sin `NO CUMPLE` ni `BLOQUEADO`; C-MED, C-TRAZ, C-REP, C-AUD y C-FACT = `EVIDENCIA INSUFICIENTE` al nivel `Establecimiento` (sin transferencia de propiedades del marco macro) → **`EVIDENCIA INSUFICIENTE`**.

### 2.3 `GOEI-KPI-C-008` — Efectividad global del equipo (OEE) · Proceso P4/P8

| Criterio | Veredicto | Fuente / inferencia (insumos documentales exactos) | Justificación científica | Limitación | Issue aplicable |
|---|---|---|---|---|---|
| C-DEF | CUMPLE | Ficha C-008: "producto de disponibilidad, desempeño y calidad" en marco TPM. Nakajima (1988). | Constructo unívoco con componentes definidos por la fuente. **La definición es invariante respecto del activo que se designe** como "equipo": designar el objeto no altera el concepto (razonamiento NC-0013-05). | — | — |
| C-MED | CUMPLE | Ficha C-008: unidad "porcentaje"; numerador/denominador provistos: OEE = Disponibilidad × Desempeño × Calidad, con insumos "tiempos de operación/paro, ritmo real vs. teórico, unidades conformes". | Cumple el nivel B4 (definición operacional + unidad + composición provistas por la fuente). **La operacionalización está completa con independencia de qué activo se designe**; designar el "equipo" selecciona la unidad de análisis, no especifica la métrica, luego no la deja indeterminada (razonamiento NC-0013-05). | La composición no se puntúa ni pondera aquí (materia de Matemática). | — |
| C-TRAZ | CUMPLE | Ficha C-008: requisitos "tiempos de operación/paro, ritmo real vs. teórico, unidades conformes". | Insumos trazables a registros de operación del establecimiento. | — | — |
| C-REP | CUMPLE | Producto determinista de tres razones (ficha C-008). | Reproducible con los mismos registros; la fórmula fija el procedimiento. | — | — |
| C-AUD | CUMPLE | Registros de tiempos y unidades conformes auditables. | Cadena de evidencia verificable. | — | — |
| C-FACT | CUMPLE | Requisitos de datos de la ficha (tiempos, ritmo, unidades conformes), enumerados por la fuente y evaluables al nivel `Establecimiento`. | Factible respecto de los requisitos de datos documentados. **Estos requisitos no dependen de qué activo se designe**, luego la condición de designación no deja indeterminada la factibilidad (razonamiento NC-0013-05). | La designación del activo objeto ("equipo") es una condición de alcance/realización externa al juicio de criterios, resoluble en compuerta posterior; **no** es `GOEI-ISS-057` ni ningún Issue abierto. | — (condición documentada, sin Issue) |
| C-PERT | CUMPLE | Ficha C-008: Procesos P4 y P8 del modelo GOEI. | Pertinente a procesos GOEI. | — | — |
| C-NORED | CUMPLE | Ficha C-008: "comparte disponibilidad con C-027 (EN 15341)" — **comparador instanciado** en `C-001…C-031`. | Relación de complementariedad/inclusión de componente (disponibilidad) con un comparador candidato instanciado; ambos `CUMPLE`, se registra la relación (adenda §A1). Sin duplicidad estricta. | De-duplicación normativa diferida a Matemática/Medición. | — |
| C-LEGSEG | NO APLICA | Ficha C-008: indicador de efectividad operacional; no toca inocuidad, seguridad ni legalidad. | Fuera del dominio de no compensación crítica; excluido de la conjunción. | Sin rol AX-4 registrado. | — |

**Estado global C-008 (regla §D):** todos los criterios necesarios aplicables `CUMPLE`. Razonamiento del invariante (NC-0013-05): la condición pendiente —designar el activo "equipo" para la cocina— **no contradice ni deja indeterminados C-DEF, C-MED ni C-FACT**, porque la fuente provee la definición conceptual, la fórmula, la unidad y los insumos con independencia del activo elegido; designar la unidad de análisis es una condición de alcance externa, no una carencia operacional de la métrica (a diferencia de C-010, donde la fuente misma declara variable el contenido del numerador). Cumplido el invariante de corrigenda §2 → **`ADMISIBLE CONDICIONADO`**.

### 2.4 `GOEI-KPI-C-009` — Porcentaje de costo de alimento (food cost %) · Proceso P4/P9

| Criterio | Veredicto | Fuente / inferencia (insumos documentales exactos) | Justificación científica | Limitación | Issue aplicable |
|---|---|---|---|---|---|
| C-DEF | CUMPLE | Ficha C-009: "proporción del costo de los alimentos sobre las ventas de alimentos". NRA (2012) *USAR* 8th ed. | Definición conceptual unívoca. | — | — |
| C-MED | CUMPLE | Ficha C-009: unidad "porcentaje"; numerador/denominador provistos: COGS de alimentos / ventas de alimentos. | Cumple el nivel B4 (operacional + unidad + numerador/denominador provistos). | — | — |
| C-TRAZ | CUMPLE | Ficha C-009: requisitos "COGS de alimentos y ventas de alimentos del periodo". | Insumos trazables a registros contables del establecimiento. | — | — |
| C-REP | CUMPLE | Cociente determinista (ficha C-009). | Reproducible con los mismos insumos. | — | — |
| C-AUD | CUMPLE | COGS y ventas de alimentos auditables contra libros. | Cadena de evidencia verificable. | — | — |
| C-FACT | CUMPLE | Requisitos de datos de la ficha, evaluables al nivel `Establecimiento`; núcleo transversal. | Factible respecto de los requisitos de datos documentados; no se afirma aplicabilidad por valores concretos de faceta. | Sensible a la política de inventario y transferencias (limitación inherente, no condición externa). | `GOEI-ISS-054` (no se afirman valores concretos de faceta) |
| C-PERT | CUMPLE | Ficha C-009: Procesos P4 y P9 del modelo GOEI. | Pertinente a procesos GOEI. | — | — |
| C-NORED | CUMPLE | Ficha C-009: "componente de prime cost % (C-028)" — **comparador instanciado** en `C-001…C-031`. | Relación de inclusión (prime cost ⊇ food cost) con un comparador candidato instanciado: ambos `CUMPLE`, se registra la relación (adenda §A1). | De-duplicación normativa diferida a Matemática/Medición. | — |
| C-LEGSEG | NO APLICA | Ficha C-009: indicador económico; no toca inocuidad, seguridad ni legalidad. | Fuera del dominio de no compensación crítica; excluido de la conjunción. | Sin rol AX-4 registrado. | — |

**Estado global C-009 (regla §D):** todos los criterios necesarios aplicables `CUMPLE`, sin condición documentada pendiente (las sensibilidades son limitaciones inherentes); C-LEGSEG `NO APLICA` excluido → **`ADMISIBLE`** (conservado conforme al dictamen `GOEI-AUDIT-0013` §3).

### 2.5 `GOEI-KPI-C-010` — Rendimiento de producción (yield %) · Proceso P4

| Criterio | Veredicto | Fuente / inferencia (insumos documentales exactos) | Justificación científica | Limitación | Issue aplicable |
|---|---|---|---|---|---|
| C-DEF | CUMPLE | Ficha C-010: "proporción de producto utilizable obtenido respecto del insumo". Gregoire & Spears (2007). | Constructo de rendimiento definido con referente conceptual claro (cociente producto utilizable/insumo). | La frontera de "utilizable" no está fijada por la fuente. | — |
| C-MED | CUMPLE | Ficha C-010: unidad "porcentaje"; la fuente describe el cociente producto utilizable / cantidad de insumo. | Cumple el nivel B4 en su descripción de cociente y unidad provistos por la fuente. | La cuantificación operativa de "utilizable" se examina en C-REP y C-FACT. | — |
| C-TRAZ | CUMPLE | Ficha C-010: requisitos "pesos/cantidades de insumo y de producto utilizable". | Las fuentes de datos (registros de pesaje del establecimiento) son identificables y trazables. | — | — |
| C-REP | EVIDENCIA INSUFICIENTE | Ficha C-010: limitación explícita — "definición de 'utilizable' varía por producto y proceso"; la fuente no fija ese contenido. | Sin una definición fija de "utilizable", dos evaluadores pueden obtener rendimientos distintos con los mismos insumos: la reproducibilidad queda **indeterminada**. Por el invariante (corrigenda §2 / `GOEI-AUDIT-0013` NC-0013-01) el criterio no puede sostenerse `CUMPLE`; no hay Issue abierto que gobierne el vacío → `EVIDENCIA INSUFICIENTE`, no `BLOQUEADO`. | Contenido operativo del numerador variable y no provisto por la fuente. | — (vacío operacional; sin Issue asociado) |
| C-AUD | CUMPLE | Pesos/cantidades de insumo y producto registrables y auditables. | Cadena de evidencia verificable sobre los registros disponibles. | La auditoría del numerador depende de la definición operativa que se adopte. | — |
| C-FACT | EVIDENCIA INSUFICIENTE | Ficha C-010: la realización exige fijar "utilizable" por producto/proceso, contenido que la fuente no provee. | La factibilidad de cómputo queda **indeterminada** hasta definir "utilizable"; afirmarla exigiría inventar ese contenido (prohibido). Por el invariante (corrigenda §2 / NC-0013-01) se reevalúa como `EVIDENCIA INSUFICIENTE`. | Sin contenido operativo de "utilizable" provisto por la fuente. | — (vacío operacional; sin Issue asociado) |
| C-PERT | CUMPLE | Ficha C-010: Proceso P4 del modelo GOEI. | Pertinente a un proceso GOEI. | — | — |
| C-NORED | NO APLICA | Ficha C-010: "Duplicados/Sinónimos: —"; no existe comparador instanciado dentro de `C-001…C-031` para el rendimiento de producción. | Sin comparador en el universo, `NO APLICA` conforme al precedente B4-A/Lote 01. Se excluye de la conjunción. | Sin comparador redundante instanciado. | — |
| C-LEGSEG | NO APLICA | Ficha C-010: indicador de rendimiento productivo; no toca inocuidad, seguridad ni legalidad. | Fuera del dominio de no compensación crítica; excluido de la conjunción. | Sin rol AX-4 registrado. | — |

**Estado global C-010 (regla §D):** sin `NO CUMPLE` ni `BLOQUEADO`; C-REP y C-FACT = `EVIDENCIA INSUFICIENTE` por indeterminación del contenido "utilizable" no provisto por la fuente (invariante corrigenda §2) → **`EVIDENCIA INSUFICIENTE`**.

---

## 3. Estados globales derivados (5)

| Candidato | Proceso | Estado global (regla §D) | Criterio determinante |
|---|---|---|---|
| `GOEI-KPI-C-006` | P3 | `ADMISIBLE` | §D-5: todos los aplicables `CUMPLE`, sin condición |
| `GOEI-KPI-C-007` | P3/P4 | `EVIDENCIA INSUFICIENTE` | §D-3: C-MED, C-TRAZ, C-REP, C-AUD y C-FACT sin acreditación al nivel `Establecimiento` |
| `GOEI-KPI-C-008` | P4/P8 | `ADMISIBLE CONDICIONADO` | §D-4: condición de alcance externa (designar "equipo"), demostrada no indeterminante |
| `GOEI-KPI-C-009` | P4/P9 | `ADMISIBLE` | §D-5: todos los aplicables `CUMPLE`, sin condición |
| `GOEI-KPI-C-010` | P4 | `EVIDENCIA INSUFICIENTE` | §D-3: C-REP y C-FACT indeterminados por "utilizable" no provisto |

Cada estado es función determinista y reversible de los veredictos de la §2; no hay agregación numérica. Esta vista es subordinada a las evaluaciones detalladas, que son la fuente operativa de verdad.

---

## 4. Excepciones y límites

- **Correcciones de `GOEI-AUDIT-0013` atendidas (sin reabrir B4-A).**
  - *NC-0013-01 (C-010):* C-REP y C-FACT reevaluados a `EVIDENCIA INSUFICIENTE` por dejar la condición "utilizable" indeterminado un criterio necesario; global redeterminado a `EVIDENCIA INSUFICIENTE`.
  - *NC-0013-02 (C-007):* C-TRAZ, C-REP, C-AUD y C-FACT reevaluados estrictamente al nivel `Establecimiento`; no se transfieren propiedades del marco macro ni se usan datos hipotéticos; se mantiene `EVIDENCIA INSUFICIENTE`.
  - *NC-0013-03 (C-006, C-007, C-010):* C-NORED a `NO APLICA` por ausencia de comparador instanciado en `C-001…C-031` (inverso no instanciado en C-006; FLI/FWI internos en C-007; sin duplicado en C-010). C-008 y C-009 conservan `CUMPLE` con comparadores instanciados (C-027 y C-028 respectivamente).
  - *NC-0013-04 (Issues):* `GOEI-ISS-043` se asocia sólo a C-007/C-PERT en su alcance propio (clasificación de la merma como proceso), retirado de C-MED y C-FACT. `GOEI-ISS-054` se asocia sólo a reservas de valores concretos de faceta, nunca a la definición de "equipo" o "utilizable". Los vacíos operacionales de C-007 y C-010 quedan **sin Issue** (son insuficiencia de evidencia, no bloqueo); no se abre ni resuelve ningún Issue nuevo.
  - *NC-0013-05 (C-008):* se emite razonamiento focalizado que demuestra que designar "equipo" no deja indeterminados C-DEF, C-MED ni C-FACT; el global se mantiene `ADMISIBLE CONDICIONADO`.
- **`NO APLICA` registrados.** C-LEGSEG en los cinco candidatos (ninguno toca inocuidad, seguridad o legalidad; sin rol AX-4). C-NORED en C-006, C-007 y C-010 (sin comparador instanciado).
- **`EVIDENCIA INSUFICIENTE` de criterio.** C-007 (C-MED, C-TRAZ, C-REP, C-AUD, C-FACT), por falta de operacionalización y acreditación al nivel `Establecimiento`; C-010 (C-REP, C-FACT), por indeterminación del contenido "utilizable" no provisto por la fuente. No se resuelven por invención.
- **Condición documentada (estado `ADMISIBLE CONDICIONADO`).** Sólo C-008: designación del activo "equipo"/realización en cocina, condición de promoción externa al juicio de criterios, resoluble en compuerta posterior; distinta de `BLOQUEADO` y **no** cubierta por `GOEI-ISS-057` (que gobierna C-005/C-014/C-015/C-030, no C-008).
- **Relaciones de no redundancia con comparador instanciado (sin fallo).** C-008 ↔ C-027 (comparten disponibilidad); C-009 ⊂ C-028 (inclusión en prime cost). La de-duplicación normativa se difiere a la materia de Matemática/Medición.
- **Facetas taxonómicas.** Se registra únicamente la identidad de faceta que condiciona la realización; **no** se afirma aplicabilidad por valores concretos de faceta (`GOEI-ISS-054/059`). La evaluación es al nivel `Establecimiento`.
- **Reservas descendentes conservadas en su alcance propio.** `GOEI-ISS-008` (agregación multiunidad fuera de alcance, C-006), `GOEI-ISS-043` (clasificación de merma como proceso, C-007/C-PERT), `GOEI-ISS-054` (valores concretos de faceta, C-009). No se abre ningún Issue nuevo en este lote.
- **Alcance.** El resultado se limita a C-006…C-010; no se evalúa fuera de ese rango, no se releen C-001…C-005 ni C-032, y no se declara exhaustividad del universo (`GOEI-ISS-055`). Ningún resultado se denomina `KPI aprobado`; **`D-019` no procede** en esta entrada.

---

*Entrada del Comité Científico para B4-B Lote 02 (corrigenda focalizada en respuesta a `GOEI-AUDIT-0013`). Consume la baseline y el método sin sobrescribirlos y no reabre B4-A. No modifica registros maestros, baselines, catálogo, método, adenda, corrigenda, auditorías, Issues ni la entrada del Lote 01. No emite D-019; no crea fórmula GOEI, peso, puntaje, umbral, benchmark, GTRM, referencia concreta, normalización ni interpretación; no cierra Issues por silencio; no declara exhaustividad.*
