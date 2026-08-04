# Dictamen de integración del conjunto DS-GTRM-01…08 (consultivo)
## Comité Científico GOEI → Oficina Técnica / Dirección General

| Campo | Valor |
|---|---|
| Identificador | GOEI-CC-DICT-GTRM-INT-0001 |
| Versión documental | 0.1.0 |
| Estado | Consultivo; sin efectos normativos hasta ratificación e Issue de cambio |
| Autoridad científica | Comité Científico GOEI |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline protegida | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Objeto
Determinar si el conjunto de decisiones DS-GTRM-01 a DS-GTRM-08 es **científicamente suficiente para la integración arquitectónica** de la GTRM, y qué queda diferido a B2/B4/B5/B6 y a Issues subsistentes.

## 2. Síntesis de las ocho decisiones
| Slot | Decisión adoptada (resumen) |
|---|---|
| DS-GTRM-01 | La GTRM actúa sobre el **valor de KPI** (no sobre observación cruda ni medición aislada). |
| DS-GTRM-02 | GTRM = **función de valor parametrizada**; su aplicación **única** produce la **puntuación normalizada**; **prohibida la doble normalización** (GTRM y B6 = un solo paso). |
| DS-GTRM-03 | **Condición de referencia (prescriptiva) ≠ benchmark (descriptivo)**; el benchmark puede informar, no sustituir. |
| DS-GTRM-04 | **Coexisten dominios** de referencia; selección/precedencia **explícita** (no por taxonomía ni software); regulatorio/jurisdiccional prevalece como compuerta (AX-4), como **regla candidata**. |
| DS-GTRM-05 | **Cinco fuentes de incertidumbre** representadas + estado de suficiencia; marco **GUM/JCGM**; método y tolerancia **diferidos**. |
| DS-GTRM-06 | **Doble autoridad** (científica + normativa) y **ciclo de vida versionado inmutable**. |
| DS-GTRM-07 | Ausencia → **no calculable + bloqueo selectivo + Issue** (sin fallback); conflicto → precedencia o Issue; estados **definido→admisible→puntuable→integrable**. |
| DS-GTRM-08 | **Fuente de verdad = especificación de la función**; tabla/software derivados; **tolerancia con aprobación científica**; reproducibilidad por baselines inmutables (AX-9). |

## 3. Consistencia interna del conjunto
El conjunto es **internamente consistente y no contradictorio** (**[ANÁLISIS]**): DS-01 fija la entrada; DS-02 la naturaleza y salida; DS-03/04 gobiernan las referencias; DS-05 la incertidumbre; DS-06 la autoridad; DS-07 la integridad ante faltas; DS-08 la equivalencia e historial. Cada decisión respeta las reglas de bloqueo del expediente (no fallback, no inferencia técnica, no edición de D-006, bloqueo selectivo) y las tres decisiones fundacionales del proyecto (D-003 constructo; D-004 formativo; D-005 arquitectura), sin modificar la baseline ontológica (D-006 v0.1).

## 4. ¿Suficiencia para integración arquitectónica?
**Dictamen: el conjunto es científicamente SUFICIENTE como *contrato/marco* de integración arquitectónica, pero NO habilita la integración normativa efectiva ni la emisión de GTRM reales.** (**[ANÁLISIS]**)

- **Suficiente para:** (i) definir el sustrato GTRM como especificación gobernada de una **única** normalización; (ii) reescribir el diseño de B5 (separación captura/registro/valor/referencia/benchmark) y B6 (una sola función); (iii) abrir el Issue específico de cambio contra D-006 con alcance acotado (añadir el artefacto GTRM y separar observación/medición registrada); (iv) fijar el marco de autoridad, ciclo de vida, incertidumbre y equivalencia.
- **NO suficiente para:** (i) emitir ninguna GTRM concreta; (ii) fijar referencias, funciones, parámetros, umbrales, tolerancias o precedencias numéricas; (iii) declarar KPI puntuables/integrables; (iv) modificar D-006 o cualquier baseline; (v) declarar versión del estándar o release.

## 5. Diferido explícito a B2/B4/B5/B6
| Fase | Qué queda diferido |
|---|---|
| **B2 Taxonomía** | Catálogo de dominios categoriales y su rol en la aplicabilidad (DS-04); no se emiten GTRM categoriales hasta B2. |
| **B4 Admisibilidad** | Estados operativos del KPI (definido/admisible/puntuable/integrable) y criterio "existe referencia ⇒ puntuable" (DS-07). |
| **B5 Medición** | Separación captura/registro/valor; método concreto de incertidumbre por familia (DS-05); protocolo para que un benchmark funde una referencia (DS-03). |
| **B6 Normalización** | Reescritura como aplicación **única** de la función GTRM; formas funcionales admisibles y su justificación (DS-02); tolerancia y casos canónicos de equivalencia (DS-08). |

## 6. Issues subsistentes
- **Abiertos por materia:** GOEI-ISS-045…052 (DS-01…08) pasan a estado "resueltos por el Comité, pendientes de auditoría técnica de suficiencia conjunta y ratificación".
- **Nuevos/enlazados:** Issue específico de cambio contra **D-006** (separar observación/medición registrada + añadir artefacto GTRM), con análisis de impacto y versión objetivo; Issue de **estudio de gobernanza de proliferación combinatoria** (KPI×dominio×jurisdicción) y reutilización controlada; Issue de **precedencia operativa** de dominios (DS-04) ligado a B2/B4; Issue de **método y tolerancia de incertidumbre** (DS-05) y **tolerancia papel–software** (DS-08) ligados a B5/B6.
- **Dependencias de compuerta no alteradas:** D-008/B1, B2, B4, B5 conservan sus compuertas; este dictamen no las abre ni las cierra.

## 7. Recomendación de integración
**Recomendar la incorporación del MARCO** definido por DS-GTRM-01…08 como **contrato científico** de la arquitectura de normalización, **condicionada a:** (1) auditoría técnica de suficiencia y consistencia conjunta por la Oficina Técnica; (2) Issue específico de cambio contra D-006 con nueva baseline propuesta; (3) cierre competente de B2, B4, B5 antes de emitir instancias reales; (4) ratificación directiva. **No se recomienda** crear entidades GTRM, editar D-006 ni declarar release en este acto.

## 8. Tabla conclusión–evidencia–limitación–impacto
| Conclusión | Evidencia | Limitación | Impacto |
|---|---|---|---|
| Conjunto consistente y suficiente como marco | DS-01…08; D-003/004/005; expediente EXP-ISS-044 | Suficiente como contrato, no para instancias | Habilita rediseño de B5/B6 y Issue D-006 |
| GTRM = especificación de una única normalización | Nardo et al. (2008); Keeney & Raiffa (1976) | Requiere reescritura de B6 | Elimina doble normalización |
| Referencia ≠ benchmark; precedencia explícita | Karr (1981); Codex CXC 1-1969; AX-4 | Precedencias concretas diferidas a B2/B4 | Modelo de referencias auditable |
| Incertidumbre obligatoria, método diferido | JCGM 100:2008; 106:2012 | Método por familia pendiente (B5) | Evita falsa precisión |
| Autoridad doble y ciclo inmutable | ISO/IEC 17065; CMMI v2.0; D-005 | Depende de gobernanza (GOEI-ISS-003) | Reproducibilidad y trazabilidad |
| Especificación como fuente de verdad | JCGM 100:2008; AX-9 | Tolerancia numérica no fijada | Equivalencia papel–software auditable |

## 9. Bloqueos residuales
1. **D-006** no puede modificarse sin Issue específico + análisis de impacto + versión objetivo + aprobación competente.
2. **No hay GTRM reales** posibles hasta cerrar **B2, B4 y B5**.
3. **Precedencia concreta, método/tolerancia de incertidumbre y tolerancia papel–software** quedan diferidos (DS-04/05/08).
4. **Proliferación combinatoria** no gobernada: requiere estudio antes de escalar.
5. La integración normativa exige **auditoría técnica de consistencia conjunta** de los ocho slots (regla #10 del expediente).

---

## Referencias (APA 7)
- Keeney, R. L., & Raiffa, H. (1976). *Decisions with multiple objectives: Preferences and value tradeoffs*. Wiley. (Reimpr. Cambridge University Press, 1993.)
- von Winterfeldt, D., & Edwards, W. (1986). *Decision analysis and behavioral research*. Cambridge University Press.
- Nardo, M., Saisana, M., Saltelli, A., & Tarantola, S. (2008). *Handbook on constructing composite indicators: Methodology and user guide*. OECD Publishing. https://doi.org/10.1787/9789264043466-en
- Joint Committee for Guides in Metrology. (2008). *Evaluation of measurement data — Guide to the expression of uncertainty in measurement (JCGM 100:2008 / GUM)*. BIPM. https://doi.org/10.59161/jcgm100-2008e
- Joint Committee for Guides in Metrology. (2012). *The role of measurement uncertainty in conformity assessment (JCGM 106:2012)*. BIPM. https://www.bipm.org/en/committees/jc/jcgm/publications
- Karr, J. R. (1981). Assessment of biotic integrity using fish communities. *Fisheries, 6*(6), 21–27. https://doi.org/10.1577/1548-8446(1981)006<0021:AOBIUF>2.0.CO;2
- Linstone, H. A., & Turoff, M. (Eds.). (1975). *The Delphi method: Techniques and applications*. Addison-Wesley.
- FAO/WHO Codex Alimentarius Commission. (2020). *General principles of food hygiene (CXC 1-1969)*. FAO/WHO. https://www.fao.org/fao-who-codexalimentarius
- International Organization for Standardization. (2012). *ISO/IEC 17065:2012 — Conformity assessment*. ISO. https://www.iso.org/standard/46568.html
- Thokala, P., Devlin, N., Marsh, K., Baltussen, R., Boysen, M., Kalo, Z., … Ijzerman, M. (2016). Multiple criteria decision analysis for health care decision making — An introduction. *Value in Health, 19*(1), 1–13. https://doi.org/10.1016/j.jval.2015.12.003

*Documento consultivo. No modifica registros maestros, ontología, BOK, tesis ni baselines. La adopción requiere auditoría técnica, Issue de cambio y ratificación directiva.*
