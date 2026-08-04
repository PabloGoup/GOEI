# DS-GTRM-07 — Ausencia, conflicto y puntuabilidad

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-07-0001 |
| Slot de origen | DS-GTRM-07 |
| Identificador de decisión | D-015 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-015; estados operativos diferidos a B4/B7/B8 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 / GOEI-ISS-051 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿Qué ocurre sin referencia válida, ante conflicto de referencias o con un KPI sin función aprobada?
**Incluye:** reglas de puntuabilidad y bloqueo selectivo.
**Excluye:** definir KPI, referencias o fórmulas concretas.
**Conceptos usados:** precedencia (DS-GTRM-04), estados de KPI, integridad del cálculo.

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | **No calculable + bloqueo selectivo + Issue**; sin fallback | Integridad; transparencia; no fabrica valores | El resultado global puede quedar parcial | **Adoptada** |
| ALT-02 | **Fallback** por cercanía taxonómica/estadística | Siempre produce número | Viola regla #3; inventa referencia; inauditable | Rechazada |
| ALT-03 | **Promediar** referencias en conflicto | Cierra el conflicto | Oculta el conflicto; no auditable | Rechazada |
| ALT-04 | **Bloqueo global** del resultado ante cualquier falta | Conservador | Desproporcionado; impide diagnóstico parcial | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Principio metrológico | JCGM (2008), GUM | https://doi.org/10.59161/jcgm100-2008e | No hay medición interpretable sin referencia/escala definida |
| Norma metodológica | Nardo et al. (2008), OECD | https://doi.org/10.1787/9789264043466-en | La imputación arbitraria distorsiona el índice; debe declararse el tratamiento de faltantes |
| Hecho de proyecto | Expediente GOEI-EXP-ISS-044-0001 (reglas #3, #4, #7) | Archivo | Prohibido fallback; bloqueo debe ser selectivo |

## 4. Análisis científico
**Método:** análisis de integridad del cálculo y de propagación de faltantes.
**Incertidumbre/sesgos:** un fallback introduce sesgo desconocido presentado como dato.
**Comparabilidad:** marcar "no calculable" preserva la comparabilidad de lo que sí se calcula.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-01.
**Texto inequívoco:**
- **Ausencia de referencia válida** → el KPI×dominio se marca **no puntuable**; se **bloquea solo esa rama** (bloqueo selectivo) y se abre/enlaza un **Issue**; **no se crea fallback** por cercanía taxonómica, estadística ni por inferencia del software.
- **Conflicto de referencias** → se resuelve por la **precedencia de DS-GTRM-04**; si es entre fuentes de igual rango y no resoluble, se marca **Issue abierto** y **no se emite la GTRM**; **nunca se promedia** silenciosamente.
- **KPI sin función aprobada** → puede existir como **definido/candidato**, pero **no es puntuable ni agregable** hasta disponer de una transformación vigente. Se adoptan estados separados: **definido → admisible → puntuable → integrable**.
**Justificación:** la integridad del cálculo exige que la ausencia se declare, no se rellene; y que el bloqueo sea proporcional (selectivo).
**Qué no decide:** no define los estados operativos finales del catálogo de KPI (competencia de B4).

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** los estados definitivos de KPI dependen de B4.
**Preguntas abiertas:** formalización de estados definido/admisible/puntuable/integrable → Issue en B4 (GOEI-ISS-051).

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| KPI/admisibilidad (B4) | Añade estados y regla de puntuabilidad | B4 |
| Agregación | Consume solo puntuaciones válidas; maneja ramas no calculables | B7 |
| Interpretación | Comunica resultados parciales y bloqueos | B8 |

**Efecto papel–software:** ambos deben mostrar el estado "no calculable" y su motivo; el software no autocompleta.
**Efecto histórico:** los bloqueos y su resolución quedan versionados.

## 8. Recomendación de integración
Recomendar incorporación de las reglas de ausencia/conflicto/puntuabilidad tras auditoría y aprobación.

## 9. Controles
Cumplidos íntegramente.
