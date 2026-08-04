# DS-GTRM-01 — Naturaleza y entrada de la GTRM

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-01-0001 |
| Slot de origen | DS-GTRM-01 |
| Identificador de decisión | D-009 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-009; no habilita instancias GTRM |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿La GTRM actúa sobre la observación, sobre la medición registrada o sobre el valor de KPI?
**Incluye:** definir el objeto de entrada de la transformación GTRM en la cadena de procedencia.
**Excluye:** definir la forma de la función, la normalización, la referencia, los parámetros o cualquier KPI concreto.
**Conceptos de D-006 usados sin modificación:** *Observación* (ocurrente, anclada AX-11: entidad-proceso-evento-periodo), *Medición/valor crudo*, *Valor de KPI* (token de una *definición de KPI*), distinción **type/token**, tres estratos (Realidad/Norma/Datos).

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | Actuar sobre la **observación** cruda | Cercana al fenómeno | Mezcla captura con puntuación; impide auditar el dato crudo; viola la separación observación→valor | Rechazada |
| ALT-02 | Actuar sobre la **medición registrada** aislada | Dato persistente y trazable | Una medición aislada no es aún el KPI; muchos KPI derivan de varias mediciones | Rechazada |
| ALT-03 | Actuar sobre el **valor de KPI** derivado de mediciones registradas | Preserva la cadena de procedencia; objeto puntuable inequívoco | Requiere que la regla de derivación del KPI esté versionada | **Adoptada** |
| ALT-04 | No incorporar / mantener estado actual | Sin costo | Deja sin resolver la procedencia del puntaje | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Norma metodológica | Nardo, M., Saisana, M., Saltelli, A., & Tarantola, S. (2008). *Handbook on constructing composite indicators*. OECD. | https://doi.org/10.1787/9789264043466-en | La transformación opera sobre indicadores ya definidos, no sobre datos sin definición |
| Evidencia bibliográfica | Keeney, R. L., & Raiffa, H. (1976). *Decisions with multiple objectives*. Wiley. | (reimpr. Cambridge Univ. Press, 1993) | Las funciones de valor mapean el **desempeño en un atributo** (valor del criterio), no la observación bruta |
| Decisión propia (hecho de proyecto) | D-006/D-006-REV, ontología vigente | Archivo canónico | *Valor de KPI* es el token puntuable; *Observación* y *medición* son insumos |

Clasificación: norma (OECD/JRC), evidencia bibliográfica (MCDA), hecho de proyecto (D-006).

## 4. Análisis científico
**Método:** análisis ontológico de la cadena de procedencia y comparación con la práctica MCDA de funciones de valor.
**Incertidumbre y sesgos:** la incertidumbre de entrada proviene de la medición y de la regla de derivación del KPI (se trata en DS-GTRM-05); riesgo de sesgo si se puntúa una medición aislada como si fuera el KPI.
**Comparabilidad/reproducibilidad:** fijar el objeto en el valor de KPI garantiza que dos evaluadores puntúen el mismo objeto trazable.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-03.
**Texto inequívoco:** La GTRM actúa sobre el **valor de KPI** (token derivado de una o más mediciones registradas mediante una definición y regla de cálculo versionadas), no sobre la observación cruda ni sobre una medición registrada aislada.
**Justificación (separada de la evidencia):** solo el valor de KPI es el objeto puntuable inequívoco del estándar; anclar la GTRM antes de ese punto rompería la auditabilidad del dato crudo y confundiría captura con puntuación.
**Qué no decide este acto:** no define la función, la referencia, la normalización ni ningún KPI.

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** presupone que la regla de derivación de cada KPI estará versionada (dependencia de B4/B5).
**Incertidumbre/supuestos:** se asume trazabilidad AX-11 de las mediciones que alimentan el valor.
**Preguntas abiertas / Issues:** formalizar en B5 la separación captura→registro→valor (Issue sucesor).

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| Ontología D-006 | Sin cambio (usa entidades vigentes); posible ampliación futura vía Issue | Issue específico obligatorio |
| B5 medición | Reescribir para separar captura/registro/valor KPI | B5 |
| B6 normalización | Recibe el valor de KPI como entrada | DS-GTRM-02 |
| Formularios/manual | El evaluador registra medición → calcula valor KPI → consulta GTRM | — |
| Software | Igual contrato de entrada | — |

**Efecto papel–software:** idéntico objeto de entrada (valor de KPI) en ambos medios.
**Efecto histórico:** ninguno si se adopta antes de emitir GTRM reales.

## 8. Recomendación de integración
Recomendar incorporación como contrato de entrada **después** de auditoría técnica y aprobación competente. No crea versión ni baseline.

## 9. Controles
Pregunta y alcance inequívocos; alternativas incluida la de no incorporar; evidencia clasificada; decisión separada de justificación; incertidumbre declarada; dependencias documentadas; papel y software considerados; D-006 no editada; preguntas abiertas convertidas en Issue; recomendación explícita.
**Fecha efectiva:** al ratificarse · **Autoridad científica:** Comité Científico GOEI.
