# Auditoría técnica GOEI-AUDIT-0009 — Adenda resolutiva B4-A

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0009` |
| Fecha | 2026-08-04 |
| Objeto | `GOEI_SCI_ADENDA_B4A_Resolutiva.md` |
| Autoridad de revisión | Oficina Técnica GOEI (Codex) |
| Resultado | **ACEPTABLE CON CORRIGENDA TERMINOLÓGICA PREVIA** |
| Alcance | Resolución de `GOEI-AUDIT-0008`, consistencia operativa y apertura de B4-B |
| Exclusión | No evalúa fundamento científico ni modifica decisiones del Comité |

## 1. Resultado

La adenda resuelve las seis no conformidades y las observaciones de `GOEI-AUDIT-0008` de forma trazable. El método ya es determinista al nivel `Establecimiento`, conserva los bloqueos selectivos, excluye C-032 de la matriz, evita anticipar materias posteriores y crea una salida inequívoca para los casos cubiertos.

Existe **una inconsistencia terminológica bloqueante pero acotada**: §D utiliza `BLOQUEADO(criterio)` como veredicto del eje A, mientras §H enumera el vocabulario aprobado del eje A sin incluirlo. La matriz no puede implementar un valor ausente de su dominio controlado.

## 2. Verificación de `GOEI-AUDIT-0008`

| Hallazgo anterior | Resultado en la adenda |
|---|---|
| NC-01 decisiones pendientes | Resuelto en §A |
| NC-02 semántica `NO APLICA` | Resuelto en §B1 |
| NC-03 bloqueos convertidos en absolutos | Resuelto en §C |
| NC-04 C-032 como fila | Resuelto en §E |
| NC-05 aplicabilidad sin categorías | Resuelto selectivamente en §B2; propone `GOEI-ISS-059` |
| NC-06 fronteras B5–B8 | Resuelto por materia en §F |
| C-MED vs. especificación posterior | Resuelto en §A1 |
| Tipos de solapamiento | Resuelto en §A1 |
| Hoja de evidencia duplicada | Resuelto en §D |
| Condicionado vs. bloqueado | Distinguido en §A2; requiere invariante explícita |
| Suficiencia probatoria | Resuelta cualitativamente en §A4 |

## 3. Corrigenda científica mínima requerida

El Comité debe emitir una aclaración breve que:

1. confirme si `BLOQUEADO` pertenece al eje A como veredicto candidato–criterio y, si es así, lo incorpore expresamente al vocabulario controlado;
2. fije el invariante de `ADMISIBLE CONDICIONADO`: la condición pendiente no puede contradecir ni dejar indeterminado un criterio necesario declarado `CUMPLE`; si lo hace, debe aplicarse `EVIDENCIA INSUFICIENTE` o `BLOQUEADO` según corresponda;
3. declare que la aclaración corrige §H.4 y complementa §A2/§D sin reabrir las demás decisiones.

## 4. Control de compuerta

- B4-A: **resuelta científicamente, pendiente sólo de corrigenda terminológica**.
- B4-B: **preparación técnica permitida; población de resultados aún cerrada**.
- `GOEI-ISS-059`: técnicamente procedente, pendiente de alta en registros maestros junto con la decisión formal.
- D-019: no procede.
- D-006 y baselines: sin cambio.

## 5. Condición de aceptación final

Recibida la aclaración, Codex podrá verificarla mecánicamente sin nueva auditoría metodológica extensa. Si confirma los tres puntos, el expediente integrado B4-A será **CONFORME PARA DECISIÓN FORMAL** y podrá habilitar B4-B en lotes pequeños.
