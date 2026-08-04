# FASE B — B3 · Revisión del universo candidato de indicadores (KPI) del GOEI
## Producto de conocimiento científico (Comité Científico) — para auditoría técnica y revisión de la Dirección

**Naturaleza:** conocimiento científico (revisión documental de indicadores). NO es documentación normativa; NO declara admisibilidad; NO crea KPI del estándar, fórmulas, pesos, puntajes, referencias GTRM, umbrales ni rangos. La formalización y el versionado corresponden a la Oficina Técnica y a la Dirección.
**Objetivo:** identificar qué indicadores *documentados* podrían representar los procesos `P1–P9` (`GOEI-BSL-PROC-0001 v0.1.0`) y el alcance estructural facetado `FX-1/FX-2/FX-3` (`GOEI-BSL-TAX-0001 v0.1.0`), como **universo candidato no normativo** del GOEI.
**Pregunta científica de B3 (del pipeline):** ¿Qué indicadores documentados podrían representar los procesos y categorías aprobados dentro del alcance del GOEI?
**Dependencias consumidas:** `GOEI-BSL-PROC-0001 v0.1.0` (procesos P1–P9); `GOEI-BSL-TAX-0001 v0.1.0` (facetas FX-1/FX-2/FX-3); `GOEI-DIR-RES-0002` (habilitación de B3); D-006 / D-006-REV (ontología, sin modificar); `GOEI-PMM-0001` (EPIC-002, interfaz abstracta `Indicador` PM16); D-008 / D-017 (cierres B1/B2). Dependencia futura registrada: B4 (admisibilidad) y DS-GTRM (referencias), **sin crear GTRM ni admisibilidad aquí**.
**Fecha:** 2026-08-04.

> **Alcance del método:** revisión documental estructurada de normas, organismos públicos y literatura revisada por pares. **No es PRISMA completa** (se registra como limitación e Issue). Ningún indicador se adopta como normativo. Etiquetas de evidencia: **[NORMA]** (norma/estándar u organismo oficial), **[EVIDENCIA]** (literatura revisada por pares o texto académico de referencia), **[MARCO]** (marco metodológico), **[ANÁLISIS]** (razonamiento del Comité).
> **Regla de no fabricación:** cuando una fuente no provee definición operacional, numerador/denominador, unidad o frecuencia, el campo se declara *no provisto por la fuente*; no se inventa.

---

## 1. Propósito y delimitación

B2 quedó cerrada en su pregunta nuclear mediante D-017 y `GOEI-DIR-RES-0002`, que congeló `GOEI-BSL-TAX-0001 v0.1.0` y **habilitó B3 sin crear KPI ni autorizar el uso de valores taxonómicos no aprobados**. Esta revisión responde a la pregunta científica de B3 construyendo un **inventario trazable de indicadores documentados**, cada uno con procedencia verificable y estado `CANDIDATO`. El producto no evalúa pertinencia, no jerarquiza, no asigna pesos y no promueve ningún indicador al estándar.

La unidad de referencia de cada candidato es el `Establecimiento` (token, D-006). Toda agregación multiunidad, multi-marca o por flujo operativo depende de `GOEI-ISS-008` y queda **bloqueada** para esta subfase. La aplicabilidad taxonómica se declara únicamente al **nivel de identidad de faceta** (FX-1/FX-2/FX-3); los **valores concretos** de faceta permanecen fuera de alcance bajo `GOEI-ISS-054`.

## 2. Marco de clasificación de indicadores (distinción obligatoria) — [ANÁLISIS]

El mandato exige separar cuatro naturalezas que suelen confundirse en la literatura de "KPI":

| Plano | Qué es | Ejemplo | Rol en B3 |
|---|---|---|---|
| **Indicador documentado** | Métrica con definición publicada por una fuente citable | RevPASH; MTBF; food cost % | **Objeto de este inventario** |
| **Interfaz abstracta** | Ranura conceptual de medición sin contenido | `Indicador` PM16 (EPIC-002) | Contenedor; no es KPI |
| **KPI-def del estándar** | Indicador aprobado con fórmula, unidad y regla GOEI | — | **Prohibido en B3** (B4–B8) |
| **KPI-token** | Valor observado en una evaluación real | — | Fuera de alcance |

**Consecuencia:** B3 sólo recolecta **indicadores documentados** y los asocia a la interfaz abstracta por proceso. No se cruza la frontera hacia KPI-def (admisibilidad, fórmula, peso, umbral), que es materia de B4 en adelante.

## 3. Método de búsqueda y selección

1. **Anclaje en procesos y facetas.** Se tomó como marco de cobertura la matriz `P1–P9 × {FX-1, FX-2, FX-3, transversal}` derivada de las dos baselines vigentes.
2. **Fuentes priorizadas.** (a) normas y estándares (ISO, CEN/EN, Codex Alimentarius, marcos ASCM/SCOR); (b) organismos públicos (FAO/UNEP, FDA); (c) literatura revisada por pares y textos académicos de referencia en foodservice, revenue management, calidad de servicio, mantenimiento y contabilidad de gestión.
3. **Criterio de inclusión.** Un indicador entra al inventario **sólo si existe una fuente que lo nombre y lo describa**. Se registra la definición tal como aparece; numerador/denominador se transcriben **únicamente cuando la fuente los provee**.
4. **Criterio de exclusión.** Indicadores sin fuente citable; métricas propietarias sin definición pública; cualquier "propuesta" del Comité (se prohíbe fabricar definiciones).
5. **Control de duplicados.** Se marcan sinónimos y solapamientos (p. ej., OEE en P4 y P8; food cost % frente a prime cost %).
6. **Registro de vacíos.** Todo proceso o faceta con cobertura nula, escasa o sólo genérica se registra como vacío con Issue asociado.

**Limitación declarada:** la búsqueda es **estructurada pero no exhaustiva ni PRISMA**. No se realizó cribado sistemático multi-base con doble revisor, cadena de búsqueda registrada ni diagrama de flujo. Esto se traslada como Issue de B3 (ver §8) y no afecta la validez del carácter *candidato* del inventario, pero impide cualquier afirmación de completitud.

## 4. Hallazgos por proceso (P1–P9)

La descripción detallada, con ID estable, definición-fuente, unidad, numerador/denominador cuando consta, requisitos de datos, frecuencia, limitaciones, duplicados, evidencia y fuente APA 7, está en el catálogo `05_Catalogo_KPI/GOEI_Catalogo_KPI_Candidatos_B3.md`. Aquí se sintetiza la lectura científica.

- **P1 — Planificación y menú / demanda.** La literatura de *menu engineering* (Kasavana & Smith) aporta indicadores documentados de margen de contribución y mezcla/popularidad por ítem; la previsión de demanda de producción está descrita en textos de sistemas de foodservice (Spears & Gregoire), pero **sin una definición operacional cerrada de "exactitud de pronóstico"** citable a nivel de establecimiento gastronómico. **Cobertura parcial**; vacío en métricas de exactitud de pronóstico. **[EVIDENCIA]**
- **P2 — Aprovisionamiento.** La contabilidad de gestión aporta *variación de precio de compra*; los marcos de cadena de suministro (ASCM/SCOR) aportan *tiempo de ciclo de cumplimiento de pedido* y *cumplimiento de pedido perfecto*, que son **genéricos de cadena de suministro** y requieren adaptación de dominio. **Cobertura media**, con dependencia de fuentes no específicas de gastronomía. **[NORMA/EVIDENCIA]**
- **P3 — Recepción, almacenamiento e inventario.** *Rotación de inventario* está bien documentada (contabilidad de gestión, sistema uniforme de cuentas). Los indicadores de merma/pérdida de alimento provienen de FAO/UNEP (Food Loss Index / Food Waste Index, SDG 12.3.1), pero su marco es macro (país/sector) y **la merma como macroproceso está fuera de la baseline bajo `GOEI-ISS-043`**. **Cobertura media** con reserva. **[NORMA/EVIDENCIA]**
- **P4 — Producción / preparación.** OEE (Nakajima) y *rendimiento de producción* y *cubiertos por hora-hombre* (Spears & Gregoire) están documentados; food cost % (sistema uniforme de cuentas) toca P4 y P9. **Cobertura alta.** Condicionada por FX-2 (sistema de producción). **[EVIDENCIA]**
- **P5 — Distribución / servicio / cumplimiento.** El plano mejor cubierto: RevPASH y rotación de mesas (Kimes et al.), tiempo de ciclo y pedido perfecto (SCOR), y DINESERV (Stevens, Knutson & Patton) como escala de calidad percibida. **Cobertura alta.** Condicionada por FX-1 (modalidad de servicio/entrega). **[EVIDENCIA/NORMA]**
- **P6 — Transacción / cierre.** *Cheque promedio*, *ventas por asiento*, *margen bruto* (sistema uniforme de cuentas) para el caso comercial; *costo por comida servida* (foodservice institucional) para el caso no comercial. **Cobertura alta.** Condicionada por FX-3 (naturaleza económica). **[EVIDENCIA]**
- **P7 — Inocuidad, higiene y sanitización.** Codex CXC 1-1969 (principios generales de higiene, HACCP) y el FDA Food Code aportan indicadores de conformidad de límite crítico/CCP, control de temperatura e higiene de manipuladores; los puntajes de inspección sanitaria son de organismos regulatorios. **Cobertura media-alta**, heterogénea por jurisdicción; recuérdese el doble rol de inocuidad (proceso transversal y restricción crítica AX-4) señalado por `GOEI-ISS-015`. **[NORMA]**
- **P8 — Mantenimiento de equipos e instalación.** EN 15341:2019 aporta MTBF, MTTR y disponibilidad como KPI de mantenimiento normalizados; OEE (compartido con P4) integra disponibilidad. **Cobertura alta** (norma dedicada). **[NORMA]**
- **P9 — Gestión y control.** Prime cost %, labor cost % y margen operativo/EBITDA (sistema uniforme de cuentas); rotación de personal (ISO 30414); el Balanced Scorecard (Kaplan & Norton) es un **marco**, no un KPI puntuable. **Cobertura alta** en lo económico-financiero, con nota de que BSC no es una métrica única. **[NORMA/EVIDENCIA/MARCO]**

## 5. Relación con el alcance estructural FX-1/FX-2/FX-3 — [ANÁLISIS]

Conforme a `GOEI-DIR-RES-0002` §"Alcance ratificado", las facetas **condicionan la realización** de procesos, sin alterar su identidad. Por tanto, la asociación indicador→faceta se declara como **condicionamiento de aplicabilidad al nivel de identidad de faceta**, nunca de valor concreto:

- **FX-1 (modalidad de servicio/entrega) → realiza P5:** RevPASH, rotación de mesas, pedido perfecto, tiempo de ciclo, DINESERV. La *forma* de medir (p. ej., asiento-hora frente a pedido entregado) depende de la modalidad, cuyos valores están bajo `GOEI-ISS-054`.
- **FX-2 (sistema de producción) → realiza P4–P5:** OEE, rendimiento de producción, cubiertos por hora-hombre. La comparabilidad entre sistemas (convencional/cook-chill/commissary/assembly-serve) queda para B4/validación.
- **FX-3 (naturaleza económica) → realiza P6:** cheque promedio y ventas por asiento (comercial) frente a costo por comida servida (no comercial/institucional). La dualidad venta/requisición determina qué familia de indicadores es aplicable.

Ningún candidato se asigna a una **categoría concreta**; sólo se declara la faceta que condiciona su realización. Esto preserva la baseline taxonómica y respeta `GOEI-ISS-054`.

## 6. Duplicados, sinónimos y solapamientos — [ANÁLISIS]

- **OEE** aparece en P4 (efectividad de producción) y P8 (disponibilidad de equipo); es el mismo constructo con dos lecturas de proceso.
- **Food cost %** (P4/P9) es componente de **Prime cost %** (P9); no son independientes.
- **RevPASH** (P5) subsume la información de **ventas por asiento** (P6) añadiendo el eje temporal; se registran como solapados, no idénticos.
- **Cheque promedio** (P6) y **ventas por asiento** (P6) comparten numerador (ventas) con denominadores distintos (cubiertos vs. asientos).
- **Food Loss Index** y **Food Waste Index** (P3) son sub-indicadores del mismo objetivo SDG 12.3.1 con distinto alcance de cadena.

Estos vínculos se listan en el catálogo por candidato y **no se resuelven aquí**: la de-duplicación normativa es materia de B4.

## 7. Cobertura y vacíos — [ANÁLISIS]

La matriz completa está en `05_Catalogo_KPI/GOEI_Matriz_Cobertura_KPI_Candidatos_B3.md`. Síntesis:

- **Cobertura alta:** P4, P5, P6, P8.
- **Cobertura media:** P2, P3, P7, P9 (esta última alta en lo económico, con BSC no puntuable).
- **Cobertura parcial / vacío destacado:** **P1** (falta indicador documentado y cerrado de exactitud de pronóstico de demanda a nivel de establecimiento).
- **Vacíos transversales:** dependencia de fuentes genéricas no gastronómicas en P2 (SCOR) y P9 (ISO 30414, BSC); heterogeneidad jurisdiccional de los puntajes de inspección en P7; y el hecho de que **ningún indicador de merma puede promoverse como proceso** mientras `GOEI-ISS-043` siga abierto.
- **Vacío metodológico global:** ausencia de PRISMA (búsqueda no exhaustiva).

## 8. Limitaciones, sesgos e Issues abiertos por B3

- **Búsqueda no exhaustiva (no PRISMA).** Riesgo de omisión de indicadores; propuesta de Issue nuevo **`GOEI-ISS-055`** (revisión sistemática PRISMA del universo de KPI antes de fijar admisibilidad).
- **Vacío P1.** Propuesta de Issue nuevo **`GOEI-ISS-056`** (indicadores documentados de planificación/pronóstico de demanda específicos de foodservice).
- **Dependencia de fuentes genéricas** (SCOR, ISO 30414, BSC) que requieren adaptación de dominio: propuesta de Issue **`GOEI-ISS-057`**.
- **Heterogeneidad jurisdiccional de P7** (puntajes de inspección no comparables entre jurisdicciones): propuesta de Issue **`GOEI-ISS-058`**.
- **Sesgo hacia foodservice comercial occidental** y hacia lo publicable en inglés; subrepresentación del sector informal y no comercial (se hereda de B1/B2).
- **Ramas bloqueadas heredadas:** `GOEI-ISS-008` (agregación multiunidad/multi-marca/flujo) y `GOEI-ISS-054` (valores concretos de faceta) **bloquean selectivamente** todo candidato o lectura que dependa de ellos. `GOEI-ISS-043` (merma) y `GOEI-ISS-015` (doble rol inocuidad) se registran como reservas, no como bloqueos de B3.

## 9. Qué queda para B4 y fases posteriores

- **B4 (admisibilidad):** qué candidatos satisfacen criterios científicos, con qué evidencia, y para qué dominio de facetas/valores. La de-duplicación, la elección entre solapados y la aceptación de fuentes genéricas se deciden allí.
- **B5–B8:** definiciones operacionales cerradas, unidades, referencias, normalización, pesos e interpretación. **Nada de esto se anticipa en B3.**
- **GTRM / referencias:** no se crean; dependen de DS-GTRM y de la resolución de `GOEI-ISS-054`.

---

## 10. Declaración de suficiencia (del Comité, para esta versión 0.1.0)

El Comité declara **finalizada su revisión de universo candidato para la versión 0.1.0**, con las siguientes salvedades expresas: (i) la búsqueda es estructurada pero **no exhaustiva/PRISMA**; (ii) existe un **vacío en P1**; (iii) parte de la cobertura descansa en **fuentes genéricas** a adaptar; (iv) toda agregación multiunidad y todo valor de faceta permanecen **bloqueados** por `GOEI-ISS-008` y `GOEI-ISS-054`. Con esas salvedades, el inventario es **suficiente como insumo candidato de B4** y **no** constituye aprobación de ningún KPI. Se recomienda elevar a decisión directiva **D-018** el cierre limitado de B3 (ver handoff `GOEI_SCI_HANDOFF_D018_Cierre_B3.md`).

---

### Referencias (APA 7)

- Association for Supply Chain Management. (2022). *SCOR Digital Standard (Version 14.0)*. ASCM. https://scor.ascm.org/ ; https://www.ascm.org/globalassets/ascm_website_assets/docs/intro-and-front-matter-scor-digital-standard2.pdf
- Codex Alimentarius Commission. (2020). *General principles of food hygiene (CXC 1-1969, Rev. 2020)*. FAO/WHO. https://www.fao.org/fao-who-codexalimentarius/
- European Committee for Standardization. (2019). *EN 15341:2019 — Maintenance — Maintenance key performance indicators*. CEN. https://standards.cencenelec.eu/
- Food and Agriculture Organization of the United Nations. (2019). *The state of food and agriculture 2019: Moving forward on food loss and waste reduction*. FAO. https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en
- Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations: A managerial and systems approach* (6th ed.). Pearson.
- International Organization for Standardization. (2018). *ISO 30414:2018 — Human resource management — Guidelines for internal and external human capital reporting*. ISO. https://www.iso.org/standard/69338.html
- Kaplan, R. S., & Norton, D. P. (1992). The balanced scorecard—Measures that drive performance. *Harvard Business Review, 70*(1), 71–79.
- Kasavana, M. L., & Smith, D. J. (1982). *Menu engineering: A practical guide to menu analysis*. Hospitality Publishers.
- Kimes, S. E., Chase, R. B., Choi, S., Lee, P. Y., & Ngonzi, E. N. (1998). Restaurant revenue management: Applying yield management to the restaurant industry. *Cornell Hotel and Restaurant Administration Quarterly, 39*(3), 32–39. https://doi.org/10.1177/001088049803900308
- Nakajima, S. (1988). *Introduction to TPM: Total productive maintenance*. Productivity Press.
- National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.). National Restaurant Association.
- Organisation for Economic Co-operation and Development, & Joint Research Centre. (2008). *Handbook on constructing composite indicators: Methodology and user guide*. OECD Publishing. https://doi.org/10.1787/9789264043466-en
- Stevens, P., Knutson, B., & Patton, M. (1995). DINESERV: A tool for measuring service quality in restaurants. *Cornell Hotel and Restaurant Administration Quarterly, 36*(2), 56–60. https://doi.org/10.1177/001088049503600226
- U.S. Food and Drug Administration. (2022). *Food Code 2022*. FDA. https://www.fda.gov/food/fda-food-code/food-code-2022

*Documento consultivo. No modifica registros maestros, baselines, BOK, tesis ni software. La adopción requiere auditoría técnica, ratificación directiva e integración controlada. Aceptar el universo candidato no aprueba ningún KPI.*
