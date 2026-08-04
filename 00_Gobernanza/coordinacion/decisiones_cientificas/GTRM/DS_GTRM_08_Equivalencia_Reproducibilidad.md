# DS-GTRM-08 — Equivalencia papel–software y reproducibilidad

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-08-0001 |
| Slot de origen | DS-GTRM-08 |
| Identificador de decisión | D-016 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-016; tolerancias y casos diferidos a B5/B6/B9 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 / GOEI-ISS-052 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿Qué especificación es fuente de verdad, qué casos canónicos se exigen y qué tolerancia rige la equivalencia papel–software?
**Incluye:** fuente de verdad, batería de casos canónicos y régimen de tolerancia (marco).
**Excluye:** fijar el valor numérico de la tolerancia (no lo fija la Oficina Técnica; requiere aprobación científica por familia).

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | **La especificación de la función es la fuente de verdad**; tabla y software son representaciones derivadas verificadas por casos canónicos con checksum | Reproducible; equivalencia auditable | Requiere mantener la especificación formal | **Adoptada** |
| ALT-02 | **La tabla manual** es la fuente de verdad | Simple para papel | Viola regla #6; reintroduce arbitrariedad; congela discretización | Rechazada |
| ALT-03 | **El software** es la fuente de verdad | Preciso | Viola independencia tecnológica (P-003); opaco | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Norma metrológica | JCGM (2008), GUM | https://doi.org/10.59161/jcgm100-2008e | La comparación de resultados exige tolerancia e incertidumbre declaradas |
| Norma metodológica | Nardo et al. (2008), OECD | https://doi.org/10.1787/9789264043466-en | La reproducibilidad exige documentar la construcción, no solo el resultado |
| Hecho de proyecto | D-006-REV (AX-9, comparabilidad entre versiones) | Archivo | Resultados de distintas versiones no son comparables salvo mapa de compatibilidad |

## 4. Análisis científico
**Método:** verificación por casos canónicos (límites, adyacencias, extremos, faltantes, unidades, redondeos, conflictos, vigencias, incertidumbre); análisis de error de discretización.
**Incertidumbre/sesgos:** la discretización de la tabla introduce error en fronteras de tramo (riesgo de gaming); la tolerancia debe acotarlo.
**Reproducibilidad:** baselines inmutables + versión congelada por evaluación.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-01.
**Texto inequívoco:** La **fuente de verdad es la especificación de la función** (no la tabla ni el software). La **tabla manual y el software son representaciones derivadas** que deben generarse de esa **única especificación** y superar una **batería de casos canónicos con checksum**. La **tolerancia de equivalencia requiere aprobación científica por familia** y **NO la fija la Oficina Técnica**; una divergencia superior a la tolerancia aprobada **bloquea la representación afectada**. Para la **reproducibilidad histórica**: baselines **inmutables**, cada evaluación conserva la versión usada, y toda simulación con versión nueva se marca **contrafactual** (AX-9).
**Justificación:** solo una especificación única como fuente de verdad garantiza a la vez independencia tecnológica (P-003), aplicación manual fiel (P-004) y reproducibilidad.
**Qué no decide:** no fija el valor de la tolerancia ni el conjunto final de casos canónicos (por familia, con evidencia).

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** la tolerancia y los casos dependen de la familia y de B5/B6.
**Preguntas abiertas:** valor de tolerancia y batería canónica por familia → Issue (GOEI-ISS-052).

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| Manual/formularios | Tabla derivada + estados + versión | DS-GTRM-02/05/06 |
| Software | Implementa la misma especificación; pruebas de conformidad | DS-GTRM-02 |
| Validación | Prueba de equivalencia como criterio | B9 |

**Efecto papel–software:** equivalencia con error acotado y aprobado; divergencia = bloqueo de la representación.
**Efecto histórico:** inmutabilidad de baselines; simulaciones marcadas contrafactuales.

## 8. Recomendación de integración
Recomendar incorporación del régimen de fuente de verdad, casos canónicos y tolerancia-aprobada tras auditoría; el valor de tolerancia se difiere.

## 9. Controles
Cumplidos íntegramente.
