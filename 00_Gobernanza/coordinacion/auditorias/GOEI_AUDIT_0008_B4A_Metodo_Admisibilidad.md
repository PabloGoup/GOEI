# Auditoría técnica GOEI-AUDIT-0008 — Dictamen B4-A

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0008` |
| Fecha | 2026-08-04 |
| Objeto | `GOEI_SCI_DICTAMEN_B4A_Metodo_Admisibilidad.md` |
| Autoridad de revisión | Oficina Técnica GOEI (Codex) |
| Resultado | **DEVUELTO PARA RESOLUCIÓN CIENTÍFICA ACOTADA** |
| Alcance | Consistencia, completitud operativa, trazabilidad y separación B4/B5–B8 |
| Exclusión | No juzga literatura ni decide criterios, estados o reglas científicas |

## 1. Dictamen técnico

El expediente respeta la frontera general de B4-A: no evalúa los 31 candidatos, no crea KPI normativos y no introduce fórmulas, pesos, umbrales, referencias concretas ni puntuaciones. Propone un método no compensatorio y una separación útil entre veredicto por criterio y estado global.

Sin embargo, **no es todavía ejecutable ni aceptable para decisión formal**. El propio Comité conserva cinco decisiones científicas pendientes y existen ambigüedades que impedirían derivar un resultado único para todas las combinaciones candidato–criterio. B4-B permanece cerrada hasta recibir una adenda resolutiva o un dictamen B4-A sustituido.

## 2. Conformidades

| Control | Resultado |
|---|---|
| Alcance exclusivo B4-A | Conforme |
| Sin evaluación de candidatos | Conforme |
| Sin promoción a `KPI aprobado` | Conforme |
| Separación de B5–B8 | Conforme con ajuste de nomenclatura pendiente |
| Evidencia tipificada | Conforme en estructura |
| Dos niveles: veredicto y estado global | Conforme |
| Regla no compensatoria | Conforme como propuesta; pendiente de ratificación científica |
| Conservación de Issues | Conforme con correcciones de selectividad |
| D-006 y baselines sin modificación | Conforme |

## 3. No conformidades bloqueantes

### NC-01 — Cinco decisiones científicas expresamente pendientes

El §7.3 difiere: criterios necesarios, estado `ADMISIBLE CONDICIONADO`, precedencia de resumen, suficiencia probatoria y enrutamiento AX-4. Codex no puede resolverlas. Sin esas respuestas no existe un método aprobado y B4-B no puede comenzar.

### NC-02 — `NO APLICA` no tiene semántica determinista en una conjunción

El método afirma que todos los criterios necesarios deben cumplirse, pero el eje A admite `NO APLICA` y la regla global sólo cubre `CUMPLE`, `NO CUMPLE` y `EVIDENCIA INSUFICIENTE`. Debe decidirse si `NO APLICA`:

- se excluye del denominador lógico mediante una regla de aplicabilidad previa;
- equivale a cumplimiento para el resumen;
- o impide declarar admisibilidad.

La Oficina Técnica no selecciona ninguna alternativa.

### NC-03 — Bloqueos específicos tratados como absolutos

`GOEI-ISS-056` afecta C-003 **cuando** la conclusión depende de exactitud de pronóstico y `GOEI-ISS-058` afecta C-021 **en** comparabilidad o puntuación jurisdiccional. El §5 los transforma en `BLOQUEADO` global sin conservar esa condicionalidad. El Comité debe confirmar si bloquean todo el candidato, sólo criterios concretos o únicamente ramas posteriores.

### NC-04 — C-032 no pertenece a la matriz evaluable

La baseline y `GOEI-AUDIT-0007` exigen exactamente C-001…C-031 y excluyen C-032. B4-A puede declarar la regla de exclusión, pero no ordenar crear una evaluación o fila `NO EVALUABLE` para C-032. Debe aclararse que el estado se registra en procedencia/control de alcance, no en la matriz KPI B4.

### NC-05 — `NO APLICA` global requiere unidad de aplicabilidad aún no disponible

D-017 aprobó facetas, pero `GOEI-ISS-054` bloquea sus valores concretos. La expresión “no aplicable a ninguna categoría en alcance” no puede ejecutarse si no existe un dominio de categorías instanciado. El Comité debe indicar si este estado queda reservado, se evalúa sólo al nivel `Establecimiento`, o se difiere hasta contar con categorías válidas.

### NC-06 — Confusión parcial de límites B5–B8

El dictamen asigna referencias/benchmarks/GTRM a “B5+”, mientras el pipeline vigente separa medición, referencias/GTRM, normalización, matemática e interpretación mediante compuertas diferenciadas. Se requiere expresar el límite por **materia**, sin fijar una numeración de fase incompatible hasta que el roadmap canónico lo determine.

## 4. Observaciones importantes no bloqueantes

1. `C-MED` mezcla admisibilidad conceptual con detalle de especificación de medición. Debe aclararse el nivel mínimo exigible en B4 sin completar B5.
2. `C-NORED` requiere una regla para complementariedad, inclusión y duplicidad; de otro modo una relación detectada podría producir resultados inconsistentes.
3. La “hoja de evidencia” debe ser una vista o artefacto subordinado a la matriz detallada, no una segunda fuente editable.
4. `ADMISIBLE CONDICIONADO` y `BLOQUEADO` deben distinguir condición de promoción y suspensión de evaluación.
5. La suficiencia probatoria debe ser reproducible sin convertirse en puntuación o umbral numérico inventado.

## 5. Respuestas científicas mínimas requeridas

El Comité debe emitir una adenda compacta que:

1. resuelva explícitamente las cinco decisiones del §7.3;
2. establezca la semántica de `NO APLICA` por criterio y global;
3. preserve el alcance selectivo de `GOEI-ISS-056` y `058`;
4. confirme que C-032 queda fuera de las filas B4;
5. defina cómo usar aplicabilidad sin valores de categoría aprobados;
6. exprese fronteras por materia frente a medición, GTRM/referencias, normalización, matemática e interpretación;
7. declare si la salida sustituye o complementa el dictamen consultivo.

## 6. Efecto de compuerta

- B4-A: **abierta, devuelta al Comité**.
- B4-B: **cerrada**.
- Matriz B4: puede conservarse como esquema vacío; no puede poblarse.
- D-019: no procede.
- Baselines y D-006: sin cambio.
- Trabajo técnico independiente: puede continuar en validadores, esquema de procedencia y preparación de lotes sin resultados científicos.

## 7. Conclusión

El dictamen es una base metodológica prometedora pero **consultiva e incompleta**. La devolución está limitada a las siete respuestas anteriores; no exige reevaluar B1–B3 ni ampliar el universo candidato. Una respuesta resolutiva del Comité permitirá una segunda auditoría técnica breve y, si resulta conforme, la apertura controlada de B4-B.
