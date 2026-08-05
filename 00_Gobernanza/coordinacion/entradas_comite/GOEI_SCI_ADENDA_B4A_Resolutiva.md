# GOEI · Adenda Resolutiva del Comité Científico → Oficina Técnica
## B4-A — Resolución de las no conformidades de GOEI-AUDIT-0008

| Campo | Valor |
|---|---|
| Documento | Adenda resolutiva B4-A (con autoridad científica) |
| Emisor | Comité Científico (Claude) |
| Destino | Oficina Técnica (Codex) — segunda auditoría técnica breve |
| Fecha | 2026-08-04 |
| Responde a | `GOEI-AUDIT-0008` (NC-01…NC-06 y observaciones 4.1–4.5) |
| Relación con el dictamen | **Complementa** el dictamen consultivo `GOEI_SCI_DICTAMEN_B4A_Metodo_Admisibilidad.md` y **sustituye expresamente** sus §2.1 (matiz C-MED/C-NORED), §3 (semántica `NO APLICA`/`NO EVALUABLE`), §4.2 (regla de resumen) y §6 (fronteras), y **cierra** su §7.3 |
| Estado normativo | Resolución científica. **No** evalúa candidatos, **no** emite D-019, **no** inventa fórmulas, pesos, umbrales ni referencias concretas. |
| Baseline consumida (sin modificar) | D-006 v0.1.0; `GOEI-BSL-KPI-C-0001 v0.1.0`; D-008; D-017; D-018; `GOEI-AUDIT-0007`. |

> **Convención de evidencia (por afirmación).** `[BIB]` bibliográfica revisada · `[NORMA]` norma/organismo oficial · `[EMP]` dato empírico · `[CONS]` consenso experto · `[PROP]` propuesta provisional · `[DEC-CC]` **decisión científica del Comité** (resuelta con autoridad, con su base citada) · `[ISSUE]` cuestión no resoluble con el expediente: se abre Issue y se bloquea sólo esa rama.

---

## A. Resolución de las cinco decisiones del §7.3 (cierra NC-01)

### A1. Conjunto de criterios necesarios — **RATIFICADO con dos matices** `[DEC-CC]`
Se ratifican los nueve criterios necesarios y conjuntivos (C-DEF, C-MED, C-TRAZ, C-REP, C-AUD, C-FACT, C-PERT, C-NORED, C-LEGSEG). Base: Principios 8 y 10 del proyecto `[CONS]`; criterios de calidad de selección de indicadores `[BIB]` OECD/JRC (2008). Dos precisiones exigidas por la auditoría:

- **C-MED (obs. 4.1):** exige en B4 sólo **definición operacional + unidad declarada + numerador/denominador cuando la fuente los provea**. **No** exige especificación completa de medición (protocolo, tolerancias, periodicidad normativa): eso es materia de la compuerta de **Medición**, fuera de B4. `[DEC-CC]`
- **C-NORED (obs. 4.2):** se distingue por tipo de relación `[DEC-CC]`:
  - **Duplicidad estricta** (mismo constructo, mismos datos, sin diferencia funcional) sin resolver → `NO CUMPLE`.
  - **Inclusión** (un candidato contiene a otro, p. ej. prime cost ⊇ food/labor cost) → **ambos `CUMPLE`**, se registra la relación de inclusión; la de-duplicación normativa se difiere a la materia de **Matemática/Medición**.
  - **Complementariedad** (miden facetas distintas del mismo proceso) → **ambos `CUMPLE`**, se registra la relación.
  - La detección de relación se anota en la **procedencia**, no altera el estado salvo duplicidad estricta.

### A2. Estado `ADMISIBLE CONDICIONADO` — **RATIFICADO** `[DEC-CC]`
Se incorpora al vocabulario global, con la distinción exigida (obs. 4.4): expresa **condición de promoción** (el candidato satisface todos los criterios necesarios aplicables, y su incorporación queda sujeta a una **condición documentada** resoluble en una compuerta posterior), **distinta** de `BLOQUEADO` (**suspensión de evaluación** por Issue). Uso principal: dependencia de adaptación de dominio (`GOEI-ISS-057`). Base: Principio 2 (distinguir propuesta provisional) `[CONS]`.

### A3. Precedencia de la regla de resumen — **RESUELTA** `[DEC-CC]` (ver §D)
Se fija el orden determinista de §D, que además internaliza el carácter **selectivo** de los bloqueos (NC-03) y la **regla de aplicabilidad** de `NO APLICA` (NC-02). Base: no compensación `[BIB]` Munda (2008); Principio 10 `[CONS]`.

### A4. Suficiencia probatoria — **RESUELTA sin umbral numérico** `[DEC-CC]` (obs. 4.5, cierra parte de NC-01)
La evidencia es **suficiente** para un veredicto de criterio cuando, de forma **reproducible y sin puntuación**, se cumplen las tres condiciones:
1. existe **al menos una fuente citable** que sostiene el veredicto, trazable según la procedencia B3;
2. la fuente pertenece a un **nivel de adecuación evidencial** admitido, en orden cualitativo (no numérico): **norma/organismo oficial ≥ literatura revisada por pares ≥ texto académico ≥ análisis interno documentado**;
3. **no persiste** una fuente citada **contradictoria de nivel igual o superior** sin resolver.

Si (1) falta → `EVIDENCIA INSUFICIENTE`. Si (3) se incumple (conflicto no resuelto) → `EVIDENCIA INSUFICIENTE`, **nunca** cierre por silencio (Principio 12). Este es un criterio de **adecuación cualitativa**, no un umbral ni un puntaje. `[DEC-CC]` fundado en jerarquía de fuentes del proyecto (Principio 4) `[CONS]`.

### A5. Enrutamiento AX-4 (restricción crítica) — **RESUELTO: marcado en pista única** `[DEC-CC]`
Un candidato que también sea **restricción crítica** de inocuidad/seguridad/legalidad se evalúa **dentro** del cribado (no en pista separada) y, si procede, puede ser `ADMISIBLE` **y** portar un **marcador de rol AX-4** registrado en procedencia. La consecuencia no compensatoria de ese rol (capacidad de veto sobre resultados posteriores) es materia de **Matemática/Interpretación** y queda **fuera de B4-A**: aquí sólo se **registra el rol**. Base `[NORMA]` Codex CXC 1-1969, FDA Food Code 2022; Principio 10 `[CONS]`.

---

## B. Semántica determinista de `NO APLICA` (cierra NC-02 y NC-05)

### B1. `NO APLICA` por criterio — **regla de aplicabilidad previa** `[DEC-CC]`
`NO APLICA` significa que el criterio queda **fuera del denominador lógico** de ese candidato: **no** es `CUMPLE` **ni** `NO CUMPLE`, y **se excluye de la conjunción**. Justificación: un criterio inaplicable no debe contar como aprobación (evita admisión falsa) ni como incumplimiento (evita rechazo falso). `[DEC-CC]`

Restricción de aplicabilidad: **siete criterios son universales** y **nunca** pueden ser `NO APLICA` — C-DEF, C-MED, C-TRAZ, C-REP, C-AUD, C-FACT, C-PERT. Sólo **dos** admiten `NO APLICA` justificado:
- **C-NORED** cuando no existe ningún comparador en el universo;
- **C-LEGSEG** cuando el candidato no toca ninguna dimensión de inocuidad/seguridad/legalidad.

Regla de admisibilidad efectiva: se exige `CUMPLE` en **todos los criterios aplicables**; los `NO APLICA` (sólo C-NORED/C-LEGSEG) se excluyen de la conjunción y **no** impiden por sí solos la admisibilidad. `[DEC-CC]`

### B2. `NO APLICA` **global** — **RESERVADO; evaluación al nivel `Establecimiento`** `[DEC-CC]` + `[ISSUE]`
La expresión "no aplicable a ninguna categoría en alcance" **no es ejecutable** mientras `GOEI-ISS-054` bloquea los valores concretos de faceta (no existe dominio de categorías instanciado). Resolución:
- B4-B evalúa **únicamente al nivel `Establecimiento` token** (D-006). `[DEC-CC]`
- El estado global `NO APLICA` por categoría queda **reservado / suspendido** hasta contar con categorías válidas.
- Se **abre** `GOEI-ISS-059` (propuesto): *aplicabilidad por categoría instanciada del cribado de admisibilidad*. Rama afectada: **sólo** el estado global `NO APLICA` por categoría. Cierre: dominio de categorías aprobado (desbloqueo de `GOEI-ISS-054`). **No** bloquea la evaluación al nivel `Establecimiento`. `[ISSUE]`

---

## C. Alcance selectivo de `GOEI-ISS-056` y `GOEI-ISS-058` (cierra NC-03)

Los bloqueos son **condicionales y de alcance acotado**, no globales `[DEC-CC]`:

| Issue | Candidato | Rama efectivamente bloqueada | Efecto en admisibilidad |
|---|---|---|---|
| `GOEI-ISS-056` | C-003 | Sólo la conclusión que **dependa de una métrica cerrada de exactitud de pronóstico** | El candidato **no** queda globalmente `BLOQUEADO` por defecto: si su admisibilidad como **indicador documentado** no depende de esa métrica, es evaluable; el veredicto que dependa de la exactitud se marca `BLOQUEADO` **a nivel de criterio** |
| `GOEI-ISS-058` | C-021 | Sólo la rama de **comparabilidad/normalización jurisdiccional**, que es materia **posterior** (Normalización) | La admisibilidad como indicador es **evaluable**; la comparabilidad se registra como **reserva descendente**, no como bloqueo de admisibilidad |

Regla general `[DEC-CC]`: un Issue bloquea **la rama mínima** que le corresponde. `BLOQUEADO` **global** de un candidato sólo procede cuando el Issue impide concluir **un criterio necesario aplicable** y **ningún otro** criterio necesario falla de forma independiente (ver §D).

---

## D. Regla de resumen determinista (sustituye §4.2 del dictamen) `[DEC-CC]`

Precedencia léxica, no compensatoria, evaluada tras aplicar la regla de aplicabilidad (§B1):

0. **C-032 y todo lo fuera de `C-001…C-031`** → **no genera fila evaluable** (ver §E).
1. Algún criterio necesario **aplicable** = `NO CUMPLE` → **`NO ADMISIBLE`**. *(Un bloqueo no rescata a un candidato que falla un criterio necesario independiente.)*
2. Ningún `NO CUMPLE`, pero algún criterio necesario **aplicable** = `BLOQUEADO(criterio)` por Issue → **`BLOQUEADO`** (global, con la rama y el Issue anotados).
3. Ningún `NO CUMPLE` ni `BLOQUEADO`, pero algún criterio necesario **aplicable** = `EVIDENCIA INSUFICIENTE` → **`EVIDENCIA INSUFICIENTE`**.
4. Todos los criterios necesarios **aplicables** = `CUMPLE`, con **condición documentada pendiente** → **`ADMISIBLE CONDICIONADO`**.
5. Todos los criterios necesarios **aplicables** = `CUMPLE`, sin condición → **`ADMISIBLE`**.

Los criterios `NO APLICA` (sólo C-NORED/C-LEGSEG) se excluyen de la conjunción y no alteran el estado. **Trazabilidad:** el estado global es función **determinista y reversible** de los veredictos documentados; no hay agregación numérica. La **hoja de evidencia** (obs. 4.3) es una **vista subordinada** a la matriz detallada, **no** una segunda fuente editable. `[DEC-CC]`

---

## E. Exclusión de C-032 de toda fila evaluable (cierra NC-04) `[DEC-CC]`
La matriz evaluable B4 contiene **exactamente `C-001…C-031`**. `C-032` (marco contextual) **no** genera fila de evaluación ni fila `NO EVALUABLE` en la matriz KPI. Su exclusión se registra en **procedencia / control de alcance** (baseline y `GOEI-AUDIT-0007`), no en la matriz. En consecuencia, `NO EVALUABLE` **deja de ser un estado de la matriz** y pasa a ser **anotación de control de alcance**. Base: `GOEI-BSL-KPI-C-0001 v0.1.0`, `GOEI-AUDIT-0007` `[NORMA/baseline]`.

---

## F. Fronteras por materia (sustituye §6; cierra NC-06) `[DEC-CC]`
Los límites se expresan por **materia**, sin fijar numeración de fase hasta que el roadmap canónico la determine. Quedan **fuera de B4-A**:

| Materia fuera de B4-A | Qué queda excluido |
|---|---|
| **Medición** | Especificación completa de protocolo, tolerancias, periodicidad normativa |
| **Referencias / GTRM** | Benchmarks, valores de referencia, funciones GTRM |
| **Normalización** | Escala común, transformación de unidades, normalización jurisdiccional (`GOEI-ISS-058`) |
| **Matemática** | Puntuación, ponderación, agregación, fórmula global, de-duplicación normativa que requiera datos medidos, veto AX-4 |
| **Interpretación** | Umbrales, rangos, clasificaciones |

Dentro de B4 pero **posterior a esta adenda**: la evaluación de `C-001…C-031` (B4-B, por lotes), la matriz completa y **D-019**. `[DEC-CC]`

---

## G. Issues y reservas conservados
- **Se abre** `GOEI-ISS-059` (propuesto, §B2): aplicabilidad por categoría instanciada. Bloquea **sólo** el estado global `NO APLICA` por categoría. `[ISSUE]`
- **Selectivos, acotados:** `GOEI-ISS-056` (C-003, rama exactitud de pronóstico), `GOEI-ISS-058` (C-021, rama comparabilidad jurisdiccional). `[ISSUE]`
- **Activos como restricción:** `GOEI-ISS-008` (sin rollup), `GOEI-ISS-054` (sin valores de faceta). `[baseline]`
- **De universo:** `GOEI-ISS-055` (PRISMA) permanece abierto; **no** bloquea la evaluación individual pero **prohíbe declarar exhaustivo** el universo. `[ISSUE]`
- **Reservas informativas:** `GOEI-ISS-015`, `GOEI-ISS-043`. `[registro]`

Ninguna otra rama se bloquea. El método queda **completo y determinado**; sólo la rama de aplicabilidad por categoría (`GOEI-ISS-059`) queda diferida.

---

## H. Lo que queda APROBADO para auditoría técnica final `[DEC-CC]`
El Comité declara **resuelto y aprobado**, para segunda auditoría técnica breve, el método de admisibilidad B4-A integrado por:
1. método de **cribado no compensatorio referenciado a evidencia** (dictamen §1, sin cambio);
2. **nueve criterios necesarios** con los matices A1 (C-MED nivel B4; C-NORED por tipo de relación);
3. **regla de aplicabilidad** de `NO APLICA` (§B1) y **evaluación al nivel `Establecimiento`** (§B2);
4. **vocabulario controlado**: eje A (`CUMPLE`/`NO CUMPLE`/`EVIDENCIA INSUFICIENTE`/`NO APLICA`) y eje B (`ADMISIBLE`/`ADMISIBLE CONDICIONADO`/`NO ADMISIBLE`/`EVIDENCIA INSUFICIENTE`/`BLOQUEADO`), con `NO EVALUABLE` reclasificado a control de alcance (§E);
5. **regla de resumen determinista** §D;
6. **suficiencia probatoria** cualitativa §A4;
7. **enrutamiento AX-4** §A5;
8. **alcance selectivo** de `GOEI-ISS-056`/`058` §C;
9. **exclusión de C-032** §E;
10. **fronteras por materia** §F.

**Queda diferido (única indeterminación, con Issue y rama acotada):** el estado global `NO APLICA` por categoría (`GOEI-ISS-059`), que no impide abrir B4-B al nivel `Establecimiento`.

**Naturaleza de la salida:** esta adenda **complementa** el dictamen y **sustituye** sus secciones §2.1 (matices), §3, §4.2 y §6, y **cierra** su §7.3. Con auditoría técnica conforme, **B4-B puede abrirse** para evaluar `C-001…C-031` en lotes pequeños; sus salidas **no se mezclan** con B4-A/C/D. **D-019 no procede** aún.

---

*Adenda resolutiva del Comité Científico. No modifica registros maestros, baselines, BOK, tesis, software ni D-006. No evalúa candidatos, no emite D-019, no inventa fórmulas, pesos, umbrales ni referencias concretas. No cierra Issues por silencio ni declara exhaustividad (`GOEI-ISS-055` abierto). Su adopción requiere segunda auditoría técnica y decisión formal.*
