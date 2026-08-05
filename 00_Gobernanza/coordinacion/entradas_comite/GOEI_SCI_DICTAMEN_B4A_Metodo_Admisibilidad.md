# GOEI · Dictamen del Comité Científico → Oficina Técnica
## B4-A — Método científico de admisibilidad, criterios de evaluación y vocabulario controlado de resultados/estados

| Campo | Valor |
|---|---|
| Documento | Dictamen científico B4-A (consultivo) |
| Emisor | Comité Científico (Claude) |
| Destino | Oficina Técnica (Codex) — auditoría de estructura y trazabilidad |
| Fecha | 2026-08-04 |
| Alcance | Definir y justificar **cómo** se evaluará la admisibilidad. **No** evalúa candidatos. |
| Cola afectada (futura) | `GOEI-KPI-C-001` … `GOEI-KPI-C-031` (31). `GOEI-KPI-C-032` = marco contextual, excluido. |
| Estado normativo | **Ninguno.** No emite D-019, no crea KPI, no fija referencias, pesos, umbrales ni facetas. |
| Baseline consumida (sin modificar) | D-006 Ontology v0.1.0; `GOEI-BSL-KPI-C-0001 v0.1.0`; D-008 (planos transversales); D-017 (taxonomía facetada); D-018 (cierre B3). |

> **Convención de evidencia (por afirmación).** `[BIB]` evidencia bibliográfica revisada · `[NORMA]` norma/regulación/organismo oficial · `[EMP]` dato empírico · `[CONS]` consenso de expertos · `[PROP]` propuesta provisional no validada · `[PEND]` decisión científica pendiente, no completada por el Comité.
> **Frontera.** Este documento pertenece a **B4-A** y no se mezcla con salidas de B4-B/C/D. B4-B (evaluación de candidatos por lotes) sólo se abre tras decisión formal y auditoría de la Oficina Técnica.

---

## 1. Método recomendado y alternativas descartadas

### 1.1 Método recomendado
**Cribado de admisibilidad basado en criterios, no compensatorio y referenciado a evidencia** (*criterion-based, non-compensatory, evidence-referenced admissibility screening / gatekeeping*).

Definición operativa del método:
1. Cada candidato se confronta, uno a uno, contra un **conjunto fijo de criterios** (§2).
2. Cada criterio recibe un **veredicto por criterio** respaldado por evidencia citada, registrado en una **hoja de evidencia** (*evidence ledger*) por candidato (eje A del vocabulario, §3).
3. El **estado global** del candidato se **deriva** de sus veredictos mediante una **regla de resumen determinista, no compensatoria y de prioridad léxica** (§4), nunca por puntuación numérica.

El método es deliberadamente un **portón de conformidad (pasa/no pasa con matices)**, no un puntaje. `[PROP]` fundamentado en:
- La construcción de indicadores compuestos separa la **selección de indicadores** (fase previa, con criterios de calidad: relevancia, mensurabilidad, solidez analítica, oportunidad) de la normalización, ponderación y agregación (fases posteriores). Adoptar admisibilidad como cribado —no como puntaje— respeta esa separación. `[BIB]` OECD/JRC (2008), *Handbook on constructing composite indicators*, https://doi.org/10.1787/9789264043466-en.
- La **no compensación** exige que ningún criterio favorable oculte el incumplimiento de otro (Principio 10 del proyecto; base metodológica en evaluación multicriterio no compensatoria). `[BIB]` Munda, G. (2008), *Social multi-criteria evaluation for a sustainable economy*, Springer, https://doi.org/10.1007/978-3-540-73703-2. `[PROP]` en su aplicación al GOEI.
- La operacionalización reutiliza los atributos ya declarados en la gobernanza GOEI (definible, medible, trazable, repetible, auditable, realizable manualmente). `[CONS]` (Principios 6 y 8 del proyecto).

### 1.2 Alternativas descartadas

| Alternativa | Descripción | Motivo de descarte | Tipo |
|---|---|---|---|
| A1. Admisibilidad por puntaje ponderado | Asignar puntuación de admisibilidad y ordenar candidatos | Introduce ponderación y **compensación** implícitas; anticipa B7 y viola Principio 10 y prohibiciones B4 | `[PROP]` |
| A2. Voto experto sin criterios explícitos | Panel decide admisibilidad por juicio agregado | No **reproducible** ni **auditable**; incompatible con Principio 8 | `[PROP]` |
| A3. Precedente bibliográfico obligatorio | Sólo admisible si existe artículo revisado por pares | Sobre-restrictivo; el sector gastronómico está subinvestigado y excluiría indicadores normativos válidos (Codex, EN 15341, sistema uniforme de cuentas) | `[PROP]` fundado en sesgo declarado en D-018 §9 `[ANÁLISIS]` |
| A4. Cribado binario de criterio único (¿tiene fuente?) | Un solo test de procedencia | **Insuficiente**: la admisibilidad es multidimensional (definición, medición, factibilidad, pertinencia, no redundancia) | `[PROP]` |

---

## 2. Criterios definidos, con justificación y evidencia

### 2.1 Criterios **necesarios** (conjuntivos: todos deben cumplirse)

| Código | Criterio | Qué exige | Justificación | Tipo |
|---|---|---|---|---|
| C-DEF | Definición conceptual unívoca | Concepto claro y no ambiguo del indicador | "Definible" (P8); relevancia/solidez conceptual | `[CONS]` + `[BIB]` OECD/JRC (2008) |
| C-MED | Operacionalización medible | Definición operacional + unidad; num/den si la fuente los da | "Medible" (P8); mensurabilidad | `[CONS]` + `[BIB]` |
| C-TRAZ | Trazabilidad de datos y fuente | Origen del dato identificable y de fuente citable | "Trazable" (P8); procedencia APA 7 del catálogo B3 | `[CONS]` |
| C-REP | Repetibilidad / reproducibilidad | Misma medición replicable por otro operador/periodo | "Repetible" (P8) | `[CONS]` |
| C-AUD | Auditabilidad | Verificable por un tercero mediante registro | "Auditable" (P8) | `[CONS]` |
| C-FACT | Factibilidad / realizabilidad en la categoría | Calculable manualmente (formulario + calculadora básica) por cualquier negocio de la categoría | "Realizable por cualquier negocio de la categoría" (P8); independencia tecnológica (P6) | `[CONS]` |
| C-PERT | Pertinencia a proceso GOEI | Asociado a al menos un proceso P1–P9 (planos transversales vía D-008) | Anclaje al marco de procesos cerrado en B1 | `[CONS]` + baseline D-008 |
| C-NORED | No redundancia | No duplica sin resolver a otro candidato | Evita doble conteo; duplicados listados en D-018 §10 | `[ANÁLISIS]` + `[CONS]` |
| C-LEGSEG | Compatibilidad con no compensación crítica | Si el candidato es en realidad una **restricción crítica** (inocuidad/seguridad/legalidad, rol AX-4), se enruta como tal, no se descarta | Principio 10; doble rol inocuidad advertido en D-018 §9 y `GOEI-ISS-015` | `[NORMA]` (Codex CXC 1-1969; FDA Food Code 2022) + `[PROP]` en su enrutamiento |

### 2.2 Necesarios vs. suficientes (posición científica)
- **Cada criterio de §2.1 es necesario; ninguno es suficiente por sí solo.** `[PROP]`
- La **conjunción de todos los criterios necesarios** es lo que constituye la admisibilidad (es **conjuntamente suficiente por construcción**). No existe ningún criterio "suficiente aislado". `[PROP]`
- Consecuencia de no compensación: un criterio con veredicto favorable **no** compensa a otro incumplido (§4). `[BIB]` Munda (2008).

### 2.3 Criterios **deseables** (descriptivos, **no** condicionan admisibilidad)
Se **registran** para informar fases posteriores, pero no son necesarios ni suficientes: precedente bibliográfico fuerte, frecuencia declarada por la fuente, comparabilidad inter-jurisdiccional, disponibilidad de num/den explícito. `[PROP]`. *Nota:* mantenerlos fuera del portón evita anticipar B5–B8.

---

## 3. Vocabulario controlado de resultados y estados

Se distinguen **dos ejes** para preservar trazabilidad: el veredicto **por criterio** (eje A) y el estado **global del candidato** (eje B).

### 3.1 Eje A — veredicto por criterio (unidad de evaluación mínima)

| Término | Significado |
|---|---|
| `CUMPLE` | El criterio se satisface con evidencia citada suficiente |
| `NO CUMPLE` | El criterio se incumple con evidencia citada |
| `EVIDENCIA INSUFICIENTE` | No hay evidencia suficiente para pronunciarse sobre el criterio |
| `NO APLICA` | El criterio no es aplicable a este candidato (justificado) |

### 3.2 Eje B — estado global del candidato (dominios de resultado)

| Estado | Definición | Origen mínimo |
|---|---|---|
| `ADMISIBLE` | Todos los criterios necesarios `CUMPLE`; sin condición pendiente | Requerido por el mandato |
| `NO ADMISIBLE` | Al menos un criterio necesario `NO CUMPLE` | Requerido |
| `EVIDENCIA INSUFICIENTE` | Ningún `NO CUMPLE`, pero al menos un criterio necesario sin evidencia suficiente | Requerido |
| `NO EVALUABLE` | Fuera de la cola evaluable por alcance (p. ej. `C-032`, marco contextual) | Requerido |
| `NO APLICA` | Candidato válido pero no aplicable a ninguna categoría en alcance | Requerido |
| `BLOQUEADO` | Evaluación detenida por un Issue abierto específico del candidato | Requerido |
| `ADMISIBLE CONDICIONADO` | Todos los criterios necesarios `CUMPLE` **pero** sujeto a una condición documentada pendiente (p. ej. adaptación gastronómica) | **`[PROP]` propuesto** — ver §3.3 |

### 3.3 Estado adicional propuesto y su justificación
`ADMISIBLE CONDICIONADO` `[PROP]`: los candidatos genéricos que requieren **adaptación de dominio a foodservice** (`GOEI-ISS-057`, afecta `C-005/C-014/C-015/C-030`) no son ni plenamente admisibles ni no admisibles; introducir un estado condicionado registra la **condición** sin resolverla y evita forzar una dicotomía. `[PEND]` **decisión requerida**: el Comité debe ratificar o rechazar este séptimo estado. Sin ratificación, esos candidatos se tratarían como `EVIDENCIA INSUFICIENTE`.

### 3.4 Distinciones deliberadas (para evitar confusión)
- `NO EVALUABLE` (fuera de alcance/cola) ≠ `NO APLICA` (dentro de alcance, sin aplicabilidad a la categoría) ≠ `EVIDENCIA INSUFICIENTE` (no se puede concluir) ≠ `BLOQUEADO` (detenido por Issue). `[PROP]`

---

## 4. Regla de aplicación y regla de resumen

### 4.1 Regla de aplicación
1. Evaluar `C-001` … `C-031` de forma independiente. `C-032` se marca `NO EVALUABLE` por alcance (marco contextual). `[CONS]`
2. Para cada candidato, asignar un veredicto de eje A a **cada** criterio necesario, con evidencia citada en la hoja de evidencia. `[PROP]`
3. Nivel de referencia: `Establecimiento` (token, D-006). Todo rollup permanece **bloqueado** (`GOEI-ISS-008`); no se usan valores de faceta (`GOEI-ISS-054`). `[NORMA/baseline]`

### 4.2 Regla de resumen (no compensatoria, prioridad léxica)
El estado global se deriva por **precedencia**, no por suma. Orden propuesto `[PROP]`:

1. Fuera de alcance/cola → `NO EVALUABLE`.
2. Issue de bloqueo abierto y específico del candidato → `BLOQUEADO`.
3. No aplicable a ninguna categoría en alcance → `NO APLICA`.
4. Algún criterio necesario `NO CUMPLE` → `NO ADMISIBLE`.
5. Algún criterio necesario `EVIDENCIA INSUFICIENTE` → `EVIDENCIA INSUFICIENTE`.
6. Todos `CUMPLE` pero con condición documentada pendiente → `ADMISIBLE CONDICIONADO` (si §3.3 se ratifica).
7. Todos `CUMPLE`, sin condición → `ADMISIBLE`.

**Preservación de trazabilidad:** el estado global es una **función determinista** de los veredictos documentados por criterio + hoja de evidencia; es **reversible** a su base criterio–evidencia; no hay agregación numérica ni pérdida de información. `[PROP]` fundado en no compensación `[BIB]` Munda (2008).

**Decisión requerida `[PEND]`:** el rango exacto de `BLOQUEADO` frente a `NO ADMISIBLE` (pasos 2 vs. 4) es una decisión de diseño. Propuesta: `BLOQUEADO` **precede** para no descalificar un candidato bajo información incompleta; alternativa: registrar `NO ADMISIBLE` si el incumplimiento es manifiesto e independiente del bloqueo. El Comité debe ratificar el orden.

---

## 5. Tratamiento de Issues y desacuerdos

| Situación | Tratamiento propuesto | Base |
|---|---|---|
| **Desacuerdo entre expertos** | Se **registra**; **nunca** se cierra por silencio. Mientras no haya consenso documentado o escalamiento a Issue, el estado provisional es `EVIDENCIA INSUFICIENTE`, nunca `ADMISIBLE` | Prohibición explícita B4-A; Principio 12 | `[CONS]` |
| **Duplicidades** | El cribado **detecta y marca** pares redundantes (D-018 §10: prime cost ⊇ {food cost, labor cost}; RevPASH ↔ ventas/asiento; cheque promedio ↔ ventas/asiento; `C-005` ↔ `C-014`; OEE ⊃ disponibilidad; FLI ↔ FWI; OEE doble lectura P4/P8). Ambos miembros se conservan con referencia cruzada. La **de-duplicación normativa** que requiera datos medidos se **difiere a B5+** | D-018 §10 | `[ANÁLISIS]` + `[PROP]` |
| **Dependencia de adaptación gastronómica** | `C-005/C-014/C-015/C-030` → `ADMISIBLE CONDICIONADO` con condición explícita; la adaptación **no** se resuelve en B4-A | `GOEI-ISS-057` | `[PROP]` |
| **Bloqueos selectivos (específicos de candidato)** | `C-003` (exactitud de pronóstico) → `BLOQUEADO` por `GOEI-ISS-056`; `C-021` (comparabilidad jurisdiccional) → `BLOQUEADO` por `GOEI-ISS-058`. El bloqueo es **específico del candidato** y no se propaga a otros | `GOEI-ISS-056`, `-058` | `[PROP]` |
| **Exhaustividad del universo** | `GOEI-ISS-055` (PRISMA) permanece abierto: **no** bloquea la evaluación individual de candidatos, **pero prohíbe declarar exhaustivo el universo**. No se cierra por silencio | `GOEI-ISS-055` | `[CONS]` |
| **Reservas heredadas** | `GOEI-ISS-008` (sin rollup) y `GOEI-ISS-054` (sin valores de faceta) se conservan como restricciones activas; `GOEI-ISS-015` (doble rol inocuidad) y `GOEI-ISS-043` (merma fuera de baseline) se registran como reservas informativas | D-018 §11–12 | `[CONS]` |

---

## 6. Límites explícitos frente a B5–B8 (fuera de B4)

Quedan **expresamente fuera** de B4-A (y, salvo la evaluación de candidatos, de todo B4) y se transfieren a B5–B8:

- Referencias/benchmarks concretos, funciones GTRM. → B5+ `[fuera de alcance]`
- Normalización, escala común, transformación a escala única. → B6 `[fuera de alcance]`
- Puntuación, ponderación, agregación, fórmula global. → B7 `[fuera de alcance]`
- Interpretación, umbrales, rangos, clasificaciones. → B8 `[fuera de alcance]`
- Valores concretos de faceta (`GOEI-ISS-054`); multiunidad/multi-marca/flujo (`GOEI-ISS-008`). `[fuera de alcance]`
- De-duplicación normativa que requiera datos medidos; esquema de normalización jurisdiccional (`GOEI-ISS-058`). → B5+ `[fuera de alcance]`
- Cierre de exhaustividad / PRISMA (`GOEI-ISS-055`). `[fuera de alcance]`

Dentro de B4 pero **posterior a B4-A** (no en este documento): la **evaluación** de `C-001…C-031` (B4-B, por lotes pequeños), la matriz de admisibilidad completa y la emisión de **D-019**.

---

## 7. Evidencia utilizada, limitaciones y decisiones requeridas

### 7.1 Evidencia utilizada
- OECD/JRC (2008), *Handbook on constructing composite indicators*, https://doi.org/10.1787/9789264043466-en — separación selección/normalización y criterios de calidad. `[BIB/MARCO]`
- Munda, G. (2008), *Social multi-criteria evaluation for a sustainable economy*, Springer, https://doi.org/10.1007/978-3-540-73703-2 — no compensación y agregación léxica. `[BIB]`
- Codex Alimentarius, *General principles of food hygiene* (CXC 1-1969, Rev. 2020); FDA, *Food Code 2022* — base del criterio C-LEGSEG y del enrutamiento de restricciones críticas. `[NORMA]`
- Gobernanza GOEI, Principios 6, 8, 10, 12 — atributos de KPI, no compensación, registro de decisiones. `[CONS]` (interno).
- D-018 §§9–12 (cierre B3) — duplicados, vacíos, bloqueos y sesgos declarados. `[ANÁLISIS]` previo del Comité.

### 7.2 Limitaciones
- El conjunto de criterios, el séptimo estado (`ADMISIBLE CONDICIONADO`) y el orden de la regla de resumen son **propuestas no validadas** `[PROP]`; requieren ratificación.
- No hay **calibración empírica** `[EMP]` de los criterios ni un umbral operativo de "evidencia suficiente" por criterio.
- Con `GOEI-ISS-055` abierto, **no puede afirmarse exhaustividad** del universo.

### 7.3 Decisiones científicas requeridas `[PEND]`
1. Ratificar el conjunto de criterios necesarios de §2.1 (o modificarlo).
2. Ratificar o rechazar el estado `ADMISIBLE CONDICIONADO` (§3.3).
3. Ratificar el orden de precedencia de la regla de resumen, en especial `BLOQUEADO` vs. `NO ADMISIBLE` (§4.2).
4. Definir qué constituye **"evidencia suficiente"** por criterio (mini-regla de suficiencia probatoria), hoy sin especificar.
5. Confirmar el enrutamiento de restricciones críticas (rol AX-4): marcado dentro del cribado vs. vía separada.

---

## 8. Propuesta de decisión científica B4-A (sin evaluar candidatos)

**Propuesta (consultiva; no es D-019, no evalúa ningún candidato):**

Adoptar, como método oficial de admisibilidad del GOEI, el **cribado basado en criterios, no compensatorio y referenciado a evidencia** (§1), con:
- los **criterios necesarios** de §2.1 y la distinción necesario/suficiente/deseable de §2.2–2.3;
- el **vocabulario controlado de dos ejes** de §3;
- la **regla de aplicación** y la **regla de resumen léxica no compensatoria** de §4;
- el **tratamiento de Issues y desacuerdos** de §5;
- los **límites frente a B5–B8** de §6;

**sujeto a**: (a) resolución de las cinco decisiones `[PEND]` de §7.3 por el Comité; (b) auditoría de estructura y trazabilidad de la Oficina Técnica con resultado *aceptable para decisión*.

Sólo tras esa decisión formal se abrirá **B4-B** para evaluar `C-001…C-031` en lotes pequeños. Las salidas de B4-A **no se mezclan** con las de B4-B/C/D. La emisión de **D-019** y la matriz de admisibilidad completa quedan **posteriores** y fuera de este dictamen.

---

*Documento consultivo del Comité Científico. No modifica registros maestros, baselines, BOK, tesis, software ni D-006. No declara admisibilidad de ningún candidato, no crea KPI, fórmula, pesos, umbrales ni referencias. No cierra Issues por silencio ni declara exhaustividad del universo (`GOEI-ISS-055` abierto). Su adopción requiere resolución de las decisiones pendientes, auditoría técnica y decisión formal.*
