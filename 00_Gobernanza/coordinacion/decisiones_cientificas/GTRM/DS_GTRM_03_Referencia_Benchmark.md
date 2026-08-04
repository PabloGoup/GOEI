# DS-GTRM-03 — Condición de referencia y benchmark

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-03-0001 |
| Slot de origen | DS-GTRM-03 |
| Identificador de decisión | D-011 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-011; cambio ontológico sujeto a GOEI-ISS-053 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿La condición de referencia y el benchmark son entidades diferentes y qué función cumple cada una?
**Incluye:** delimitación semántica y relación entre ambos.
**Excluye:** fijar la referencia concreta de ningún KPI, ni su valor.
**Conceptos usados:** *condición de referencia* (D-006, entidad del estrato Norma), sin modificación.

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | Son **entidades diferentes**: referencia prescriptiva, benchmark descriptivo | Rigor semántico; evita tratar lo empírico como norma | Exige gobernanza de cuándo un benchmark funda una referencia | **Adoptada** |
| ALT-02 | Son **equivalentes** | Simplicidad | Convierte "lo que hacen los pares" en "lo que debe ser"; falacia naturalista | Rechazada |
| ALT-03 | Benchmark **sustituye** a la referencia por defecto | Operativo sin normas | Automatiza un juicio normativo; no auditable | Rechazada |
| ALT-04 | No distinguir / estado actual | — | Perpetúa la confusión de la fuente | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Evidencia bibliográfica | Karr, J. R. (1981). Assessment of biotic integrity using fish communities. *Fisheries, 6*(6), 21–27. | https://doi.org/10.1577/1548-8446(1981)006<0021:AOBIUF>2.0.CO;2 | La *condición de referencia* es un estado normativo (sitio no perturbado), distinto de la distribución empírica |
| Norma metodológica | Nardo et al. (2008), OECD | https://doi.org/10.1787/9789264043466-en | Distinción entre distancia a un objetivo/referencia y comparación con la distribución |
| Consenso experto (método) | Linstone, H. A., & Turoff, M. (Eds.). (1975). *The Delphi method*. Addison-Wesley. | — | Una referencia puede fundarse en consenso experto, no solo en datos |

## 4. Análisis científico
**Método:** análisis conceptual (prescriptivo vs descriptivo) y de falacia is–ought.
**Incertidumbre/sesgos:** un benchmark con muestra sesgada, si se toma como referencia, propaga el sesgo como norma.
**Comparabilidad/reproducibilidad:** separar ambos permite auditar de dónde proviene el ancla de puntuación.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-01.
**Texto inequívoco:** La **condición de referencia** (prescriptiva: el estado contra el cual se evalúa) y el **benchmark** (descriptivo: distribución empírica de una población/categoría/jurisdicción/periodo) son **entidades diferentes**. El benchmark **puede informar** la construcción de una referencia mediante **decisión explícita y trazable**, pero **no la sustituye automáticamente**.
**Justificación:** derivar una norma directamente de una distribución empírica es una falacia (is–ought); la trazabilidad exige separar el ancla normativa de su eventual insumo empírico.
**Qué no decide:** no fija ninguna referencia ni benchmark concretos (dependen de B4/B5 y de datos).

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** las instancias reales requieren B2 (dominios), B4 (admisibilidad) y B5 (medición).
**Preguntas abiertas:** protocolo para que un benchmark funde una referencia → Issue en B5.

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| Ontología | Ampliar (dos roles diferenciados) vía Issue; sin editar D-006 ahora | Issue |
| B5 medición | Reescribir para separar referencia y benchmark | B5 |
| B4 admisibilidad | Vincular admisibilidad a existencia de referencia (DS-GTRM-07) | B4 |

**Efecto papel–software:** ambos medios deben mostrar la fuente del ancla (referencia) y, si aplica, el benchmark que la informó.
**Efecto histórico:** cambios de referencia se versionan; no reescriben resultados previos.

## 8. Recomendación de integración
Recomendar incorporación como distinción ontológica de uso, tras auditoría y aprobación; sin editar la baseline.

## 9. Controles
Cumplidos íntegramente (alcance, alternativas, evidencia clasificada, decisión/justificación, incertidumbre, dependencias, papel–software, D-006 intacta, recomendación).
