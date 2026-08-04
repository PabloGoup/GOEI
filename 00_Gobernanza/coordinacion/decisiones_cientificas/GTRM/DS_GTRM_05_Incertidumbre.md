# DS-GTRM-05 — Incertidumbre

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-05-0001 |
| Slot de origen | DS-GTRM-05 |
| Identificador de decisión | D-013 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-013; método concreto diferido a B5 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 / GOEI-ISS-049 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿Qué fuentes de incertidumbre se representan y mediante qué método o estado de suficiencia?
**Incluye:** las fuentes a representar y el **requisito arquitectónico** de representarlas.
**Excluye:** fijar método numérico, intervalos, clases de confianza, redondeos o tolerancias (dependen de B5 y de la familia aplicable).

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | **Representar separadamente cinco fuentes** (medición, muestreo, benchmark, parámetros, puntuación propagada) como metadatos + estado de suficiencia obligatorio | Evita falsa precisión; auditable | Costo de documentación | **Adoptada** |
| ALT-02 | **Ignorar** la incertidumbre | Simplicidad | Falsa precisión; "lava" arbitrariedad; inauditable | Rechazada |
| ALT-03 | **Incertidumbre agregada única** | Menos campos | Opaca las fuentes; impide diagnóstico | Rechazada |
| ALT-04 | Fijar aquí método y tolerancia | Cierre rápido | Excede el mandato; depende de evidencia y B5 | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Norma metrológica | JCGM. (2008). *Evaluation of measurement data — Guide to the expression of uncertainty in measurement (JCGM 100:2008 / GUM)*. BIPM. | https://doi.org/10.59161/jcgm100-2008e | Marco estándar para evaluar y expresar incertidumbre de medición |
| Norma metrológica | JCGM. (2012). *The role of measurement uncertainty in conformity assessment (JCGM 106:2012)*. BIPM. | https://www.bipm.org/en/committees/jc/jcgm/publications | La incertidumbre debe considerarse al decidir conformidad (puntuación/compuertas) |
| Norma metodológica | Nardo et al. (2008), OECD | https://doi.org/10.1787/9789264043466-en | Análisis de incertidumbre y sensibilidad obligatorio en índices compuestos |

## 4. Análisis científico
**Método:** descomposición de fuentes de incertidumbre y propagación (GUM); principio de suficiencia declarada.
**Incertidumbre/sesgos:** datos escasos por dominio elevan la incertidumbre de parámetros; el estado de suficiencia lo hace explícito.
**Comparabilidad/reproducibilidad:** sin representación de incertidumbre, dos puntuaciones "iguales" pueden no ser comparables.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-01.
**Texto inequívoco:** La arquitectura GTRM **debe representar separadamente** la incertidumbre de **(a) medición, (b) muestreo, (c) benchmark, (d) parámetros y (e) puntuación propagada**, como metadatos con un **estado de suficiencia** obligatorio. Una GTRM **sin declaración de incertidumbre es inadmisible**. Se adopta el marco **GUM (JCGM 100:2008)** y su rol en conformidad (**JCGM 106:2012**) como referencia metodológica; **el método concreto, los intervalos, las clases y las tolerancias NO se fijan aquí** y quedan diferidos a B5 y a la familia aplicable.
**Justificación:** representar la incertidumbre es la única defensa contra la falsa precisión, que es el principal riesgo de "lavar" arbitrariedad con apariencia de rigor.
**Qué no decide:** no fija método numérico, intervalos ni tolerancias.

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** el método concreto depende de B5 y de la naturaleza del KPI.
**Preguntas abiertas:** método por familia y umbral de suficiencia → Issue en B5 (GOEI-ISS-049).

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| B5 medición | Define método de incertidumbre por familia | B5 |
| Validación | Amplía a sensibilidad e incertidumbre | B9 |
| Interpretación | Límites de inferencia según incertidumbre | B8 |

**Efecto papel–software:** el manual puede usar clases de confianza/redondeos; el software propaga; ambos de la misma especificación.
**Efecto histórico:** la representación de incertidumbre se versiona con la GTRM.

## 8. Recomendación de integración
Recomendar incorporación del **requisito** de representación de incertidumbre; el método se difiere a B5.

## 9. Controles
Cumplidos íntegramente.
