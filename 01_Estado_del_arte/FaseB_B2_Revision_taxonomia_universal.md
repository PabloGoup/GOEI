# FASE B — B2 · Revisión de taxonomía universal de establecimientos gastronómicos
## Producto de conocimiento científico (Comité Científico) — para revisión de la Dirección

**Naturaleza:** conocimiento científico (revisión de clasificaciones y literatura). NO documentación normativa; la formalización/versionado corresponde a la Oficina Técnica.
**Objetivo:** determinar científicamente qué sistema de clasificación permite delimitar y comparar las entidades comprendidas por el GOEI.
**Dependencias consumidas:** `GOEI-BSL-PROC-0001 v0.1.0` (procesos P1–P9), `GOEI-DIR-RES-0001` (alcance comercial y no comercial; unidad = Establecimiento, con multiunidad bajo GOEI-ISS-008), `GOEI-PMM-0001` (metamodelo type/token), D-006 v0.1 (ontología, sin modificar). Dependencia futura: DS-GTRM-04/D-012 (dominios de referencia), sin crear GTRM.
**Fecha:** 2026-08-04.

> **Alcance:** revisión estructurada de clasificaciones oficiales y literatura; **no** es PRISMA completa (pendiente). Ninguna categoría se adopta como normativa.
> Etiquetas: **[NORMA]** (clasificación oficial), **[EVIDENCIA]** (literatura), **[CONSENSO]** (industria), **[ANÁLISIS]**, **[PROPUESTA]**.

---

## 1. Cuatro planos de clasificación (distinción obligatoria)
El mandato exige distinguir cuatro naturalezas de clasificación, que responden a propósitos distintos (**[ANÁLISIS]**):

| Plano | Propósito | Ejemplos | Aptitud para el GOEI |
|---|---|---|---|
| **Legal** | Habilitar permisos y fiscalización | Categorías de patente/licencia sanitaria por jurisdicción | Baja: fragmentada por jurisdicción; no operativa |
| **Estadístico** | Cuentas nacionales y comparación macro | ISIC Rev.4, NACE Rev.2, NAICS | Media: internacional y estable, pero clasifica por **actividad económica**, no por modelo operativo |
| **Operativo** | Describir cómo funciona el establecimiento | Modalidad de servicio; sistema de producción | **Alta**: capta la variación que afecta a los procesos y a la comparabilidad |
| **Analítico** | Agrupar para un análisis específico | Clases de comparabilidad construidas para un fin | **Alta**: propósito-específico; es lo que el GOEI necesita |

**Consecuencia (**[ANÁLISIS]**):** el GOEI requiere una taxonomía **operacional-analítica**, **compatible** con la estadística (para interoperar) pero **no idéntica** a ella. Adoptar ISIC/NACE por conveniencia sería un error de propósito.

## 2. Clasificaciones oficiales revisadas
- **ISIC Rev.4 (ONU), División 56 — Food and beverage service activities.** Grupos: 561 *Restaurants and mobile food service activities* (clase 5610) y 562 *Event catering and other food service activities*. Criterio decisivo: se ofrecen **comidas listas para consumo inmediato**, **no** el tipo de instalación; clasifica por **actividad principal**, no por apariencia física. **[NORMA]**
- **NACE Rev.2 (UE), División 56**, derivada de ISIC Rev.4: 56.1 restaurantes y servicio móvil (56.11 restaurantes, 56.12 móvil), 56.2 catering de eventos y por contrato (56.21, 56.22), 56.3 servicio de bebidas. **[NORMA]**
- **NAICS 722 (Norteamérica)**: 7221 *Full-Service*, 7222 *Limited-Service*, 7223 *Special Food Services* (contratistas, caterers, móviles), 7224 *Drinking Places*. **[NORMA]**

**Hallazgo (**[ANÁLISIS]**):** las tres son **mono-jerárquicas por actividad económica** y coinciden en un eje comercial de servicio (full-service / limited-service / móvil / catering / bebidas). **No** representan: el **sistema de producción** (convencional/cook-chill/commissary/assembly-serve), la **naturaleza no comercial/institucional**, ni configuraciones como **dark kitchens** o **multi-marca**. Por diseño, clasifican por actividad, no por operación.

## 3. Segmentación de mercado y tipologías operativas (literatura/industria)
- **Segmentos comerciales** (QSR, fast casual, casual dining, fine dining): combinan precio, modelo de servicio y experiencia. **[CONSENSO]** industrial; útil como faceta **analítica opcional**, no como eje estructural (mezcla precio con operación).
- **Sistemas de producción de foodservice** (convencional, ready-prepared/cook-chill, commissary, assembly-serve): determinan **dónde y cuándo** se produce y entrega; principal fuente de variación de P4–P5. **[EVIDENCIA]** (Spears & Gregoire).
- **Comercial vs no comercial/institucional**: distinción estructural que define P6 (venta vs. requisición) y el alcance ratificado. **[NORMA/EVIDENCIA]**
- **Modalidad de servicio/entrega**: mesa, mostrador, autoservicio, delivery, banquete/transporte, bandeja institucional; realiza P5. **[EVIDENCIA]**

## 4. Taxonomía única vs. multieje (faceta)
Una **taxonomía jerárquica única** no puede representar entidades que varían a lo largo de **dimensiones ortogonales** (una dark kitchen es "limited-service" en ISIC, pero su rasgo operativo decisivo es "delivery-only" + posible "multi-marca", invisible en la jerarquía). La teoría de la **clasificación facetada** (Ranganathan; Broughton, 2006) y de **tipologías/taxonomías** (Bailey, 1994) indica que, cuando los objetos varían en ejes independientes, la representación correcta es **multieje/facetada**, no una lista jerárquica única. **[EVIDENCIA]**

**Determinación (**[ANÁLISIS/PROPUESTA]**):** la taxonomía GOEI debe ser **universal y multieje (facetada)**: un conjunto pequeño de **facetas** (ejes), cada una con valores enumerados; un establecimiento se clasifica por su **combinación** de valores. Esto es coherente con la arquitectura de dos niveles ratificada en D-008 (núcleo universal + realizaciones específicas) y con el metamodelo type/token (GOEI-PMM-0001).

## 5. Ejes candidatos (indispensables vs. opcionales)
**Indispensables** (afectan la realización de los procesos y la comparabilidad) — **candidatos, no normativos**:
1. **Modalidad de servicio/entrega** — realiza P5; máxima fuente de variación.
2. **Sistema de producción** — realiza P4–P5; determinante según Spears (resuelve la entrada pendiente de GOEI-ISS-014, sujeto a ratificación).
3. **Naturaleza económica** (comercial / no comercial-institucional) — define P6; ya en el alcance.

**Opcionales/modulares** (útiles para submuestras analíticas, no estructurales): complejidad de la oferta; segmento de precio/servicio (QSR…fine dining); tamaño; jurisdicción. **[PROPUESTA]**

## 6. Relación con los procesos P1–P9
La taxonomía **no altera** los tipos de proceso de la baseline; **selecciona su realización**: la modalidad de servicio realiza **P5**; el sistema de producción reconfigura **P4–P5**; la naturaleza económica define **P6**. **P1–P4, P7–P9** permanecen estables entre categorías. La taxonomía es, por tanto, el **nivel de "realización específica"** del modelo de dos niveles. **[ANÁLISIS]**

## 7. Compatibilidad internacional y jurisdiccional
Los ejes operativos son **jurisdiction-neutral**, por lo que una taxonomía operacional es **más portable** internacionalmente que los códigos legales. Se recomienda un **crosswalk** (mapeo candidato) GOEI→ISIC Rev.4/NACE/NAICS para interoperar con estadísticas, sin subordinar la taxonomía a ellos. **[PROPUESTA]**

## 8. Casos límite
- **Híbridos** (mesa + delivery + retail): faceta multivaluada con **modalidad primaria declarada** y secundarias marcadas; o unidad de evaluación = flujo operativo, no la entidad legal (enlaza GOEI-ISS-008).
- **Cadenas/multiunidad**: cada local = un token *Establecimiento* (unidad de análisis, D-006); la cadena es un agregado, no la unidad. **Rama abierta: GOEI-ISS-008.**
- **Dark kitchens**: modalidad delivery-only, sin FOH; posible **multi-marca** (un local físico, varios flujos de marca) → tensiona la definición de unidad (físico vs. marca) → GOEI-ISS-008.
- **Catering**: eventos/contrato (ISIC 562 / NACE 56.2); modalidad transporte+montaje.
- **Institucional** (hospital, escuela): no comercial; modalidad bandeja/distribución; P6 = requisición. Incluido en alcance.

## 9. Estabilidad, extensibilidad y versionado
Las **facetas** son estables; los **valores** son enumeraciones **abiertas y extensibles** bajo gobernanza (añadir un valor = versión menor; cambiar la definición de una faceta = versión mayor + crosswalk). La reclasificación de tokens preserva historial. **[PROPUESTA]**

## 10. Límites, sesgos e incertidumbre
Sesgo de la literatura hacia el foodservice comercial occidental; subrepresentación del sector informal y de configuraciones emergentes (multi-marca, KaaS); incertidumbre de clasificación en fronteras (fast casual entre QSR y casual). **Validación futura**: consenso de expertos (Delphi) + prueba empírica de que las facetas operativas **predicen** diferencias operativas reales (clustering). Diferida. **[ANÁLISIS]**

## 11. Qué queda abierto para B3/B4 y GTRM
- **B4 (admisibilidad):** qué facetas/valores constituyen el **dominio** de aplicabilidad de cada KPI.
- **B3/B4:** realizaciones específicas de P5/P6 por categoría.
- **GTRM (DS-GTRM-04/D-012):** los **dominios categoriales** de referencia dependen de esta taxonomía; **no se crean GTRM** aquí.
- **GOEI-ISS-008:** unidad multiunidad/marca (rama bloqueada).
- **GOEI-ISS-014:** ratificación del sistema de producción como eje.

---

### Referencias (APA 7)
- United Nations Statistics Division. (2008). *International Standard Industrial Classification of All Economic Activities (ISIC), Rev. 4* (Series M, No. 4/Rev.4). United Nations. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/27/5610
- Eurostat. (2008). *NACE Rev. 2: Statistical classification of economic activities in the European Community*. Publications Office of the European Union. https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/-/ks-ra-07-015
- U.S. Census Bureau. (2022). *North American Industry Classification System (NAICS) — Subsector 722, Food Services and Drinking Places*. https://www.census.gov/naics/
- Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations: A managerial and systems approach* (6th ed.). Pearson.
- Broughton, V. (2006). The need for a faceted classification as the basis of all methods of information retrieval. *Aslib Proceedings, 58*(1/2), 49–72. https://doi.org/10.1108/00012530610648671
- Bailey, K. D. (1994). *Typologies and taxonomies: An introduction to classification techniques*. Sage. https://doi.org/10.4135/9781412986397
- Ranganathan, S. R. (1967). *Prolegomena to library classification* (3rd ed.). Asia Publishing House.

*Verificación pendiente (Fase 1): PRISMA completa de tipologías de foodservice; cotejo de la edición vigente de ISIC/NACE y de la clasificación de segmentos comerciales revisada por pares.*
