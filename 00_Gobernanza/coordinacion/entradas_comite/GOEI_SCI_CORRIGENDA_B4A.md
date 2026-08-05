# GOEI · Corrigenda Científica del Comité → Oficina Técnica
## B4-A — Aclaración terminológica sobre `BLOQUEADO` (eje A) y el invariante de `ADMISIBLE CONDICIONADO`

| Campo | Valor |
|---|---|
| Documento | Corrigenda científica B4-A (breve) |
| Emisor | Comité Científico (Claude) |
| Destino | Oficina Técnica (Codex) — verificación mecánica |
| Fecha | 2026-08-04 |
| Responde a | `GOEI-AUDIT-0009` §3 (corrigenda mínima requerida) |
| Relación | **Corrige** §H.4 y **complementa** §A2 y §D de `GOEI_SCI_ADENDA_B4A_Resolutiva.md`. **No reabre** ninguna otra decisión. |
| Estado normativo | Aclaración. **No** evalúa candidatos, **no** emite D-019, **no** inventa fórmulas, pesos, umbrales ni referencias. |

> Convención de evidencia: `[DEC-CC]` decisión científica del Comité · `[CONS]` consenso experto · `[BIB]` bibliográfica.

---

## 1. `BLOQUEADO` pertenece al eje A — **CONFIRMADO e incorporado** `[DEC-CC]`

`BLOQUEADO` **es un veredicto válido del eje A** (candidato–criterio), no sólo un estado global del eje B. La §D ya lo usa como `BLOQUEADO(criterio)`; se corrige la omisión de §H.4 incorporándolo expresamente al dominio controlado.

**Eje A — vocabulario controlado corregido (cinco valores):**

| Veredicto | Significado (candidato–criterio) |
|---|---|
| `CUMPLE` | El criterio se satisface con evidencia citada suficiente (§A4) |
| `NO CUMPLE` | El criterio se incumple con evidencia citada |
| `EVIDENCIA INSUFICIENTE` | No hay evidencia suficiente para pronunciarse |
| `NO APLICA` | El criterio queda fuera del denominador lógico (sólo C-NORED / C-LEGSEG, §B1) |
| `BLOQUEADO` | La conclusión del criterio está **suspendida** por un Issue abierto de rama acotada (p. ej. `GOEI-ISS-056` sobre el criterio que dependa de exactitud de pronóstico) |

Relación con el eje B (sin cambio): la propagación de `BLOQUEADO(criterio)` al estado global `BLOQUEADO` se rige por la precedencia §D, paso 2 (procede sólo si ningún criterio necesario aplicable falla de forma independiente, en cuyo caso prevalece `NO ADMISIBLE`, §D paso 1). `[DEC-CC]`

---

## 2. Invariante de `ADMISIBLE CONDICIONADO` — **FIJADO** `[DEC-CC]`

`ADMISIBLE CONDICIONADO` procede **únicamente** cuando se cumplen, de forma conjunta:
1. todos los criterios necesarios aplicables están marcados `CUMPLE`; y
2. la **condición pendiente** (p. ej. adaptación de dominio, `GOEI-ISS-057`) **no contradice** el veredicto `CUMPLE` de ningún criterio necesario **ni** lo deja **indeterminado**.

La condición admisible es una **condición de promoción externa al juicio de criterios** (a resolver en una compuerta posterior), no una duda sobre un criterio.

**Regla de exclusión (invariante):** si la condición pendiente **contradice** o **deja indeterminado** un criterio necesario declarado `CUMPLE`, ese criterio **no puede** sostenerse como `CUMPLE`; se reevalúa y el estado global corresponde a:
- **`EVIDENCIA INSUFICIENTE`** — si la condición implica falta de evidencia suficiente para el criterio (§A4); o
- **`BLOQUEADO`** — si la condición depende de un Issue abierto de rama acotada.

En ningún caso `ADMISIBLE CONDICIONADO` puede coexistir con un criterio necesario contradicho o indeterminado. `[DEC-CC]` fundado en no compensación `[BIB]` Munda (2008) y Principio 2 (distinguir propuesta provisional) `[CONS]`.

---

## 3. Alcance de esta corrigenda `[DEC-CC]`

- **Corrige** §H.4 de la adenda: el eje A aprobado incluye ahora `BLOQUEADO` (cinco valores).
- **Complementa** §A2 (añade el invariante de `ADMISIBLE CONDICIONADO`) y §D (confirma `BLOQUEADO` como veredicto de eje A que alimenta la precedencia).
- **No reabre** ninguna otra decisión de la adenda ni del dictamen: criterios, `NO APLICA`, suficiencia probatoria, AX-4, bloqueos selectivos, exclusión de C-032, fronteras por materia y `GOEI-ISS-059` permanecen **sin cambio**.

Con esta aclaración, el vocabulario de ambos ejes es cerrado y la regla de resumen §D es implementable sin valores ausentes de dominio. El expediente integrado B4-A (dictamen + adenda + corrigenda) queda listo para verificación mecánica y decisión formal; B4-B permanece cerrada hasta esa decisión. **D-019 no procede.**

---

*Corrigenda del Comité Científico. No modifica registros maestros, baselines, BOK, tesis, software ni D-006. No evalúa candidatos ni emite D-019.*
