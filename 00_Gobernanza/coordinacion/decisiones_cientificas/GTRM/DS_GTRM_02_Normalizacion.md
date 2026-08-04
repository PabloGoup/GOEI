# DS-GTRM-02 — Resultado y normalización

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-02-0001 |
| Slot de origen | DS-GTRM-02 |
| Identificador de decisión | D-010 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-010; contenido concreto diferido a B6 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿La GTRM es función normativa, parametrización o tabla; y produce parámetros o puntuación normalizada? ¿Existe doble normalización?
**Incluye:** naturaleza lógica de la GTRM, su salida y su relación con el paso de normalización (B6).
**Excluye:** la forma concreta de la función, sus coeficientes, umbrales o tolerancias.
**Conceptos usados:** *regla de normalización* y *condición de referencia* (D-006, sin modificación); escala común 0–100 como convención de proyecto (sin fijar aquí).

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | GTRM = **tabla manual** como núcleo | Simple para lápiz y papel | Reintroduce arbitrariedad ("números con portada"); sin función generadora | Rechazada |
| ALT-02 | GTRM produce **parámetros** entregados al pipeline | Transparencia | El pipeline consume puntuaciones, no parámetros sueltos; traslada la transformación aguas abajo | Rechazada como salida |
| ALT-03 | GTRM = **función de valor normativa parametrizada**; su aplicación **única** produce la **puntuación normalizada**; tabla/software = representaciones derivadas | Elimina doble normalización; auditable; equivalencia papel–software | Exige especificación formal de la función | **Adoptada** |
| ALT-04 | Mantener GTRM + Sistema de Normalización como **dos** transformaciones | Ninguna | **Doble normalización**: distorsión y opacidad | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Norma metodológica | Nardo et al. (2008), OECD Handbook | https://doi.org/10.1787/9789264043466-en | La normalización es un paso único con método explícito; el doble tratamiento distorsiona |
| Evidencia bibliográfica | von Winterfeldt, D., & Edwards, W. (1986). *Decision analysis and behavioral research*. Cambridge Univ. Press. | — | La función de valor es la fuente lógica; su tabla es una representación |
| Evidencia bibliográfica | Keeney & Raiffa (1976) | (Cambridge, 1993) | La puntuación deriva de una función parametrizada, no de asignaciones ad hoc |

## 4. Análisis científico
**Método:** análisis de flujo (detección de doble transformación) + teoría de funciones de valor.
**Incertidumbre/sesgos:** la discretización de la tabla introduce error de representación (DS-GTRM-08); la función explícita lo acota.
**Comparabilidad/reproducibilidad:** una sola función versionada garantiza reproducibilidad; dos transformaciones la rompen.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-03.
**Texto inequívoco:** La GTRM es una **función de valor normativa parametrizada** (fuente lógica/especificación). Su aplicación **única** dentro del paso de normalización produce la **puntuación normalizada del KPI** (no el resultado GOEI, no parámetros como salida del pipeline). La **tabla manual y el software son representaciones derivadas** de la misma especificación. En consecuencia, **GTRM y motor de normalización (B6) constituyen un único paso lógico**: queda **prohibida la doble normalización**.
**Justificación:** solo una función explícita y única evita simultáneamente la arbitrariedad (tabla sin fundamento) y la distorsión (doble transformación).
**Qué no decide:** no fija la forma funcional, los parámetros ni la escala numérica (competencia de B6 con evidencia).

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** requiere que B6 se rediseñe para consumir la especificación GTRM como parametrización de una única normalización.
**Preguntas abiertas:** formas funcionales admisibles y su justificación → Issue en B6.

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| B6 normalización | **Reescribir**: una sola función, GTRM como especificación gobernada | B6 |
| Ponderación/agregación | Sin cambio; consume solo puntuaciones normalizadas válidas | — |
| Ontología | Ampliación futura (artefacto GTRM) vía Issue | Issue |
| Software/manual | Derivan de una misma especificación | DS-GTRM-08 |

**Efecto papel–software:** tabla = discretización de la función; ambos de una sola especificación.
**Efecto histórico:** la versión de la función determina el puntaje; congelar versión por evaluación (DS-GTRM-08).

## 8. Recomendación de integración
Recomendar incorporación tras auditoría técnica y aprobación; condición: reescritura de B6 sin doble normalización.

## 9. Controles
Cumplidos: alcance, alternativas (incl. no incorporar), evidencia clasificada, decisión/justificación separadas, incertidumbre, dependencias, papel–software, D-006 intacta, recomendación explícita.
