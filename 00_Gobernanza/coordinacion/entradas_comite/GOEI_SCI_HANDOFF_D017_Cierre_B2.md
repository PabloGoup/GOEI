# GOEI · Entrada al Comité → Oficina Técnica
## Expediente formal D-017 y dictamen de cierre de la subfase B2 (Taxonomía Universal)

**Emisor:** Comité Científico (Claude). **Destino:** Oficina Técnica (Codex) para auditoría de suficiencia; ratificación de cierre: Dirección General.
**Naturaleza:** dictamen científico. No modifica registros maestros, baselines ni D-006.
**Fuentes canónicas consumidas:** `GOEI-SCI-QUEUE-0002`, `GOEI-BSL-PROC-0001 v0.1.0`, `GOEI-DIR-RES-0001`, `GOEI-PMM-0001`, D-006 v0.1.
**Documentos científicos asociados:** `01_Estado_del_arte/FaseB_B2_Revision_taxonomia_universal.md`; `03_Taxonomia_negocios/FaseB_B2_Taxonomia_universal_candidata.md`.
**Fecha:** 2026-08-04.

---

### 1. Identificador y título
**D-017 — Cierre de la subfase B2: sistema de clasificación (taxonomía universal) de establecimientos gastronómicos.**

### 2. Fecha, autoridad y estado
- **Fecha:** 2026-08-04.
- **Autoridad:** dictamen del Comité Científico; ratificación pendiente de la Dirección General (conforme a §13 de `GOEI-SCI-QUEUE-0002`).
- **Estado de D-017:** **APROBADA por el Comité** (con ramas abiertas por bloqueo selectivo; ninguna invalida la pregunta nuclear).

### 3. Problema científico
¿Qué sistema de clasificación permite **delimitar y comparar** las entidades comprendidas por el GOEI, con qué ejes, criterios de pertenencia, exclusiones y tratamiento de casos límite?

### 4. Alternativas consideradas
1. **Adoptar una clasificación estadística existente** (ISIC/NACE/NAICS) como taxonomía GOEI.
2. **Taxonomía jerárquica única** propia (mono-eje).
3. **Taxonomía universal multieje (facetada), operacional-analítica**, compatible pero no idéntica a las estadísticas.
4. **No definir taxonomía** (mantener estado actual).

### 5. Evidencia (APA 7, DOI/URL verificables)
- United Nations Statistics Division. (2008). *ISIC Rev. 4* (Series M, No. 4/Rev.4). UN. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/27/5610 — **[NORMA]** clasificación por actividad principal, no por instalación.
- Eurostat. (2008). *NACE Rev. 2*. Publications Office of the EU. https://ec.europa.eu/eurostat/web/products-manuals-and-guidelines/-/ks-ra-07-015 — **[NORMA]** derivada de ISIC.
- U.S. Census Bureau. (2022). *NAICS — Subsector 722*. https://www.census.gov/naics/ — **[NORMA]** full/limited-service, special food services, drinking places.
- Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations* (6th ed.). Pearson. — **[EVIDENCIA]** sistemas de producción.
- Broughton, V. (2006). The need for a faceted classification… *Aslib Proceedings, 58*(1/2), 49–72. https://doi.org/10.1108/00012530610648671 — **[EVIDENCIA]** clasificación facetada para objetos multidimensionales.
- Bailey, K. D. (1994). *Typologies and taxonomies*. Sage. https://doi.org/10.4135/9781412986397 — **[EVIDENCIA]** metodología de clasificación.

Clasificación de la evidencia: norma internacional (ISIC/NACE/NAICS), evidencia bibliográfica (Spears; Broughton; Bailey), hecho de proyecto (D-006, baseline de procesos).

### 6. Decisión y justificación
**Decisión inequívoca:** se adopta la **Alternativa 3**: una **taxonomía universal MULTIEJE (facetada), de naturaleza operacional-analítica**, con:
- **Unidad de clasificación = Establecimiento** (token, D-006); multiunidad bajo GOEI-ISS-008;
- **Categoría = combinación de valores de facetas** (type-level, Norma);
- **Ejes indispensables (candidatos):** (FX-1) modalidad de servicio/entrega, (FX-2) sistema de producción, (FX-3) naturaleza económica comercial/no comercial;
- **Ejes opcionales/modulares:** complejidad de oferta, segmento, tamaño, jurisdicción;
- **Compatibilidad** con ISIC/NACE/NAICS vía **crosswalk**, sin subordinación.

**Justificación:** las clasificaciones estadísticas son mono-jerárquicas por **actividad económica** y no representan la variación **operativa** (sistema de producción, no comercial, dark kitchen, multi-marca) que gobierna la comparabilidad de la salud operacional; la teoría de clasificación facetada (Broughton; Bailey) prescribe multieje cuando los objetos varían en dimensiones ortogonales; la solución es coherente con el modelo de dos niveles (D-008) y con el metamodelo type/token (GOEI-PMM-0001).

### 7. Relación con los procesos P1–P9
La taxonomía **no altera** la baseline; **selecciona la realización**: FX-1→P5; FX-2→P4–P5; FX-3→P6. P1–P4, P7–P9 estables entre categorías. La taxonomía constituye el nivel de "realización específica" del modelo de dos niveles ratificado en D-008.

### 8. Compatibilidad internacional y jurisdiccional
Los ejes operativos son jurisdiction-neutral → mayor portabilidad internacional que los códigos legales. Se provee crosswalk candidato GOEI→ISIC/NACE/NAICS para interoperar con estadística oficial.

### 9. Estabilidad, extensibilidad y versionado
Facetas estables; valores en enumeraciones abiertas extensibles bajo gobernanza (añadir valor = versión menor; redefinir faceta = versión mayor + crosswalk); reclasificación de tokens con historial preservado.

### 10. Tratamiento de casos límite
Híbridos (modalidad primaria + secundarias, o flujo operativo); cadenas y dark kitchen multi-marca (cada local = token; unidad multi-marca pendiente, GOEI-ISS-008); catering (banquete/transporte); institucional (no comercial, bandeja, P6=requisición). Detalle en el documento de taxonomía candidata.

### 11. Limitaciones, sesgos, incertidumbre y transferibilidad
Revisión estructurada, **no PRISMA completa**; sesgo hacia foodservice comercial occidental; subrepresentación del sector informal y de configuraciones emergentes; incertidumbre de clasificación en fronteras. **Validación futura:** Delphi + prueba empírica de que las facetas predicen diferencias operativas (clustering). El **catálogo concreto de valores es candidato no normativo**.

### 12. Issues cerrados y abiertos
- **Resuelto por decisión (sujeto a ratificación):** pregunta nuclear de B2 (estructura facetada y ejes); recomendación de **cerrar GOEI-ISS-014** (sistema de producción **sí** es eje indispensable).
- **Abiertos/reasignados:** **GOEI-ISS-008** (unidad multiunidad/marca) — bloquea solo esa rama; **catálogo de valores por faceta** → validación (nuevo Issue, Delphi/empírico); **GOEI-ISS-015** (doble rol inocuidad) — ajeno a B2; **GOEI-ISS-043** (residuos/merma) — ajeno a B2.
- **Dependencia futura registrada:** **DS-GTRM-04/D-012** — los dominios categoriales de referencia consumirán esta taxonomía; **no se crean GTRM**.

### 13. Componentes/documentos afectados
Ontología D-006 (sin cambio; eventual entidad Faceta/Categoría solo por Issue); baseline de procesos (sin cambio; provee realización); Knowledge Graph/MetaModel (representar facetas/categorías como tipos, tras aprobación); B3/B4 (dominio de aplicabilidad de KPI); manual/formularios/software (selección de categoría por facetas); tesis/publicaciones (describen taxonomía como candidata hasta release).

### 14. Versión objetivo
Incorporación futura a una **línea base de taxonomía** (etiqueta propuesta: `GOEI-BSL-TAX-0001 v0.1.0`), **a confirmar por la Oficina Técnica**; el Comité no fija la etiqueta oficial.

### 15. Estado de cierre de B2 y condiciones de integración
**Dictamen: B2 CERRABLE en su pregunta nuclear** (estructura facetada, ejes indispensables y unidad de clasificación), con **ramas abiertas por bloqueo selectivo** (unidad multiunidad GOEI-ISS-008; catálogo de valores; ratificación de FX-2). **Condiciones de integración:** (1) auditoría técnica de suficiencia `aceptable para decisión` (§11 del paquete); (2) ratificación directiva y registro en maestros; (3) integración versionada y actualización controlada de Knowledge Graph/BOK; (4) los valores concretos permanecen no normativos hasta validación. **El cierre efectivo es directorial**, no del Comité.

---

### Registro de suficiencia (declaración del Comité)
El Comité declara **finalizada su revisión para esta versión (0.1.0)**: pregunta y alcance delimitados; dependencias de B1 utilizadas; método declarado; fuentes con identificadores verificables; alternativas comparadas (incluida no incorporar); resultados y propuesta separados; casos límite tratados; limitaciones y preguntas abiertas registradas; impacto y dependencias documentados; Issues con rama afectada y condición de cierre; propuesta de decisión con alcance exacto. **Recomendación: elevar a decisión directiva** con las ramas abiertas indicadas.

*Documento consultivo. No modifica registros maestros, baselines, BOK, tesis ni software. La adopción requiere auditoría técnica, ratificación directiva e integración controlada.*
