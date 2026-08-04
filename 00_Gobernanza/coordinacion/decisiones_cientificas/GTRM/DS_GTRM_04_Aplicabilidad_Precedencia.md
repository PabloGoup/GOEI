# DS-GTRM-04 — Aplicabilidad y precedencia de referencias

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-04-0001 |
| Slot de origen | DS-GTRM-04 |
| Identificador de decisión | D-012 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-012, con reserva interpretativa GOEI-AUDIT-0004 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 / GOEI-ISS-048 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿Qué dominios de referencia pueden coexistir y cómo se elige entre ellos?
**Incluye:** tipología de dominios y **regla de selección/precedencia** (marco, no valores).
**Excluye:** fijar la referencia concreta de ningún KPI ni las precedencias numéricas por categoría.
**Conceptos usados:** *condición de referencia* y *regla crítica no compensable* (AX-4), sin modificación de D-006.

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | **Coexistencia de dominios** (universal, regulatorio, jurisdiccional, sectorial, categoría/población) con **selección científico-normativa explícita** | Fiel a la realidad regulatoria; auditable | Requiere gobernar conflictos | **Adoptada** |
| ALT-02 | Toda referencia es **categorial** | Simple con la taxonomía | Falso: existen referencias universales/regulatorias (no demostrado lo contrario) | Rechazada |
| ALT-03 | Selección **inferida por la taxonomía o el software** | Automática | Viola regla de bloqueo #3; automatiza un juicio normativo | Rechazada |
| ALT-04 | Referencia **única universal** | Máxima comparabilidad | Ignora regulación local más estricta (inocuidad/legalidad) | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Norma internacional | FAO/WHO Codex Alimentarius Commission. (2020). *General principles of food hygiene (CXC 1-1969)*. FAO/WHO. | https://www.fao.org/fao-who-codexalimentarius | Existen referencias universales de inocuidad; conviven con regulación nacional |
| Norma de conformidad | ISO/IEC 17065:2012. *Conformity assessment — Requirements for bodies certifying products, processes and services*. | https://www.iso.org/standard/46568.html | Esquemas de conformidad reconocen requisitos de esquema + sectoriales/jurisdiccionales |
| Hecho de proyecto | D-006-REV (AX-4, no compensación) | Archivo canónico | La referencia regulatoria de inocuidad/legalidad opera como compuerta, fuera del tramo puntuable |

## 4. Análisis científico
**Método:** análisis jerárquico de autoridad de referencias (legal > normativa internacional > sectorial > empírica).
**Incertidumbre/sesgos:** referencias jurisdiccionales fragmentan la comparabilidad internacional (riesgo declarado).
**Comparabilidad/reproducibilidad:** exige registrar, por cada puntuación, qué dominio de referencia se aplicó.

## 5. Decisión propuesta
**Disposición:** adoptar ALT-01.
**Texto inequívoco:** **Coexisten múltiples dominios de referencia** (universal/internacional, regulatorio, jurisdiccional, sectorial, categoría/población y combinaciones controladas); **no se asume que toda referencia sea categorial**. La **selección y la precedencia son una decisión científico-normativa explícita y trazable**, nunca inferida por la taxonomía ni por el software. Se adopta como **regla candidata** (no como valores fijos) la **precedencia por autoridad legal y mayor exigencia de protección**: la referencia **regulatoria/jurisdiccional** de inocuidad/legalidad **prevalece** y opera como **regla crítica no compensable (AX-4)**, por encima de la universal, la sectorial y la empírica por categoría.
**Justificación:** la autoridad legal y la protección de la salud pública no pueden subordinarse a benchmarks empíricos; la elección debe ser un acto normativo auditable, no un artefacto técnico.
**Qué no decide:** no fija precedencias numéricas ni referencias concretas (dependen de B2/B4 y de datos/normas aplicables).

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** los dominios categoriales requieren B2 cerrada; la precedencia definitiva requiere ratificación.
**Preguntas abiertas:** catálogo de dominios y su precedencia operativa → Issue vinculado a B2/B4 (GOEI-ISS-048).

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| Taxonomía (B2) | Provee dominios categoriales | B2 |
| Reglas críticas | Referencia regulatoria = compuerta AX-4 | GOEI-ISS-015 |
| B5/B6 | Registran el dominio aplicado por puntuación | B5/B6 |

**Efecto papel–software:** ambos deben registrar explícitamente el dominio y la referencia aplicados; el software no infiere precedencia.
**Efecto histórico:** cambios de dominio/precedencia se versionan; no reescriben resultados previos.

## 8. Recomendación de integración
Recomendar incorporación del **marco** de coexistencia y precedencia tras auditoría y ratificación; las precedencias concretas quedan diferidas a B2/B4.

## 9. Controles
Cumplidos (alcance, alternativas incl. no incorporar, evidencia clasificada, decisión/justificación, incertidumbre, dependencias, papel–software, D-006 intacta, recomendación).
