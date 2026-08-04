# GOEI · Catálogo de KPI Candidatos (B3)
## Inventario trazable, no normativo, del universo candidato de indicadores

| Campo | Valor |
|---|---|
| Identificador | `GOEI-CAT-KPI-C-0001` |
| Subfase | B3 — Universo y catálogo candidato de KPI |
| Versión | 0.1.0 (candidata) |
| Fecha | 2026-08-04 |
| Estado de todos los registros | **CANDIDATO** |
| Autoría | Comité Científico GOEI |
| Dependencias | `GOEI-BSL-PROC-0001 v0.1.0` (P1–P9); `GOEI-BSL-TAX-0001 v0.1.0` (FX-1/2/3); D-006/D-006-REV; `GOEI-PMM-0001` (PM16) |

> **Naturaleza.** Inventario documental. **No** declara admisibilidad, **no** crea fórmula GOEI, pesos, puntajes, referencias GTRM, umbrales ni rangos. Numerador/denominador se transcriben **sólo cuando la fuente los provee**; en caso contrario se declara *no provisto por la fuente*. No se fabrican definiciones faltantes.
> **Unidad de referencia.** `Establecimiento` (token, D-006). Agregación multiunidad/multi-marca/flujo: **BLOQUEADA** (`GOEI-ISS-008`).
> **Alcance taxonómico.** Sólo se declara la **faceta que condiciona la realización** (identidad FX-1/2/3). Los **valores concretos** de faceta están **BLOQUEADOS** (`GOEI-ISS-054`).
> **Etiquetas de evidencia:** [NORMA] · [EVIDENCIA] · [MARCO] · [ANÁLISIS].

## Esquema de cada ficha

`ID` · `Nombre fuente` · `Definición encontrada` · `Unidad declarada` · `Numerador/Denominador (si la fuente los da)` · `Proceso P1–P9` · `Alcance taxonómico permitido (faceta)` · `Fuente APA 7 (DOI/URL)` · `Requisitos de datos` · `Frecuencia (si consta)` · `Limitaciones` · `Duplicados/Sinónimos` · `Evidencia` · `Estado`.

---

## P1 — Planificación y menú / demanda

### GOEI-KPI-C-001 — Margen de contribución por ítem de menú
- **Nombre fuente:** Contribution margin (menu engineering).
- **Definición encontrada:** ganancia unitaria de un ítem del menú, base del análisis de ingeniería de menú que clasifica ítems por margen y popularidad.
- **Unidad declarada:** moneda por ítem.
- **Numerador/Denominador:** la fuente provee el cálculo: margen de contribución = precio de venta − costo de alimento del ítem (diferencia, no cociente).
- **Proceso:** P1 (también insumo de P6).
- **Alcance taxonómico permitido:** transversal a facetas; ligado a la existencia de menú/carta.
- **Fuente APA 7:** Kasavana, M. L., & Smith, D. J. (1982). *Menu engineering: A practical guide to menu analysis*. Hospitality Publishers.
- **Requisitos de datos:** precio de venta y costo estandarizado de receta por ítem.
- **Frecuencia:** no provista por la fuente (uso típico por ciclo de menú; no normativo).
- **Limitaciones:** depende de costeo de recetas consistente; no captura demanda futura.
- **Duplicados/Sinónimos:** componente de food cost % (C-009).
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-002 — Mezcla/popularidad del ítem de menú (menu mix %)
- **Nombre fuente:** Menu mix percentage / popularity index.
- **Definición encontrada:** participación relativa de cada ítem en las unidades vendidas; segundo eje de la ingeniería de menú.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: unidades vendidas del ítem / unidades totales vendidas de la categoría.
- **Proceso:** P1.
- **Alcance taxonómico permitido:** transversal; requiere oferta con ítems discretos.
- **Fuente APA 7:** Kasavana, M. L., & Smith, D. J. (1982). *Menu engineering: A practical guide to menu analysis*. Hospitality Publishers.
- **Requisitos de datos:** conteo de ventas por ítem.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** sensible al periodo y a cambios de carta; no aplica a menú fijo/bandeja única.
- **Duplicados/Sinónimos:** —.
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-003 — Pronóstico de demanda de producción (forecasting)
- **Nombre fuente:** Production/demand forecasting (foodservice systems).
- **Definición encontrada:** estimación de la cantidad a producir/servir para un periodo, función del subsistema de planificación del modelo de sistemas de foodservice.
- **Unidad declarada:** unidades de producción/cubiertos (según el texto), **sin métrica de exactitud cerrada**.
- **Numerador/Denominador:** **no provisto por la fuente** (el texto describe la función de pronóstico, no una fórmula de exactitud a nivel de establecimiento).
- **Proceso:** P1.
- **Alcance taxonómico permitido:** transversal; condicionado por FX-2 en su realización productiva.
- **Fuente APA 7:** Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations: A managerial and systems approach* (6th ed.). Pearson.
- **Requisitos de datos:** históricos de demanda/producción.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** **vacío**: falta un indicador documentado y cerrado de "exactitud de pronóstico" específico de foodservice → `GOEI-ISS-056`.
- **Duplicados/Sinónimos:** —.
- **Evidencia:** [EVIDENCIA] (parcial). **Estado:** CANDIDATO (con vacío registrado).

## P2 — Aprovisionamiento

### GOEI-KPI-C-004 — Variación de precio de compra (purchase price variance)
- **Nombre fuente:** Purchase price variance (PPV).
- **Definición encontrada:** desviación entre el precio real de compra y el precio estándar, aplicada a la cantidad comprada.
- **Unidad declarada:** moneda.
- **Numerador/Denominador:** la fuente provee: PPV = (precio real − precio estándar) × cantidad real comprada (producto, no cociente).
- **Proceso:** P2.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Horngren, C. T., Datar, S. M., & Rajan, M. V. (2015). *Cost accounting: A managerial emphasis* (15th ed.). Pearson.
- **Requisitos de datos:** precios estándar definidos y registro de compras.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** requiere un sistema de costos estándar; genérico de manufactura/gestión.
- **Duplicados/Sinónimos:** insumo de food cost % (C-009).
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-005 — Tiempo de ciclo de cumplimiento de pedido (aprovisionamiento)
- **Nombre fuente:** Order Fulfillment Cycle Time (SCOR, responsiveness).
- **Definición encontrada:** tiempo promedio desde la colocación del pedido hasta la entrega.
- **Unidad declarada:** tiempo (días/horas).
- **Numerador/Denominador:** la fuente describe promedio de tiempos; sin cociente numerador/denominador explícito adicional.
- **Proceso:** P2 (lado abastecimiento).
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Association for Supply Chain Management. (2022). *SCOR Digital Standard (Version 14.0)*. ASCM. https://scor.ascm.org/
- **Requisitos de datos:** marcas de tiempo de pedido y recepción.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** **genérico de cadena de suministro**, no específico de foodservice → `GOEI-ISS-057`.
- **Duplicados/Sinónimos:** relacionado con C-014 (mismo indicador en lado cliente/P5).
- **Evidencia:** [NORMA/MARCO]. **Estado:** CANDIDATO.

## P3 — Recepción, almacenamiento e inventario

### GOEI-KPI-C-006 — Rotación de inventario (inventory turnover)
- **Nombre fuente:** Inventory turnover ratio.
- **Definición encontrada:** número de veces que el inventario se consume/renueva en un periodo.
- **Unidad declarada:** veces (turns) por periodo.
- **Numerador/Denominador:** la fuente provee: costo de ventas (COGS) / inventario promedio.
- **Proceso:** P3.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Horngren, C. T., Datar, S. M., & Rajan, M. V. (2015). *Cost accounting: A managerial emphasis* (15th ed.). Pearson. · National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** COGS del periodo e inventarios inicial y final.
- **Frecuencia:** no provista por la fuente (uso periódico).
- **Limitaciones:** sensible a estacionalidad y a la política de conteo.
- **Duplicados/Sinónimos:** días de inventario (inverso, no incluido por falta de ficha-fuente separada).
- **Evidencia:** [EVIDENCIA/NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-007 — Índice de pérdida / desperdicio de alimentos (Food Loss/Waste Index)
- **Nombre fuente:** Food Loss Index (SDG 12.3.1.a) / Food Waste Index (SDG 12.3.1.b).
- **Definición encontrada:** cambio porcentual de las pérdidas/desperdicio de alimentos respecto de un periodo base; el FLI cubre de producción hasta antes de venta minorista, el FWI cubre venta minorista, servicio de alimentos y hogares.
- **Unidad declarada:** porcentaje (FLI) / masa (kg per cápita o toneladas, FWI).
- **Numerador/Denominador:** el FLI se define como cambio porcentual de pérdidas para una canasta de productos; la fuente no fija un cociente aplicable a nivel de un solo establecimiento.
- **Proceso:** P3 (y P4).
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Food and Agriculture Organization of the United Nations. (2019). *The state of food and agriculture 2019: Moving forward on food loss and waste reduction*. FAO. https://www.fao.org/sustainable-development-goals-data-portal/data/indicators/1231-global-food-losses/en
- **Requisitos de datos:** cuantificación de flujos de alimento y pérdidas.
- **Frecuencia:** anual (marco SDG).
- **Limitaciones:** marco **macro** (país/sector), no de establecimiento; **la merma como macroproceso está fuera de la baseline** (`GOEI-ISS-043`), por lo que su uso como indicador de eficiencia no reabre esa clasificación.
- **Duplicados/Sinónimos:** FLI y FWI son sub-indicadores del mismo objetivo.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO (con reserva ISS-043).

## P4 — Producción / preparación

### GOEI-KPI-C-008 — Efectividad global del equipo (OEE)
- **Nombre fuente:** Overall Equipment Effectiveness (OEE).
- **Definición encontrada:** medida integrada de la efectividad de un equipo, producto de disponibilidad, desempeño y calidad, en el marco TPM.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: OEE = Disponibilidad × Desempeño × Calidad (producto de tres razones).
- **Proceso:** P4 (y P8).
- **Alcance taxonómico permitido:** condicionado por FX-2 (sistema de producción).
- **Fuente APA 7:** Nakajima, S. (1988). *Introduction to TPM: Total productive maintenance*. Productivity Press.
- **Requisitos de datos:** tiempos de operación/paro, ritmo real vs. teórico, unidades conformes.
- **Frecuencia:** no provista por la fuente (uso continuo/por turno).
- **Limitaciones:** concebido para manufactura de equipos; adaptación a cocina requiere definir "equipo".
- **Duplicados/Sinónimos:** comparte disponibilidad con C-027 (EN 15341).
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-009 — Porcentaje de costo de alimento (food cost %)
- **Nombre fuente:** Food cost percentage.
- **Definición encontrada:** proporción del costo de los alimentos sobre las ventas de alimentos.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: costo de alimentos (COGS de alimentos) / ventas de alimentos.
- **Proceso:** P4 (y P9).
- **Alcance taxonómico permitido:** transversal; realización condicionada por FX-2/FX-3.
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** COGS de alimentos y ventas de alimentos del periodo.
- **Frecuencia:** no provista por la fuente (periódico).
- **Limitaciones:** sensible a la política de inventario y a transferencias.
- **Duplicados/Sinónimos:** componente de prime cost % (C-028).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-010 — Rendimiento de producción (yield %)
- **Nombre fuente:** Production/recipe yield percentage.
- **Definición encontrada:** proporción de producto utilizable obtenido respecto del insumo, en el subsistema de producción.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente describe rendimiento como producto utilizable / cantidad de insumo (cociente).
- **Proceso:** P4.
- **Alcance taxonómico permitido:** condicionado por FX-2.
- **Fuente APA 7:** Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations* (6th ed.). Pearson.
- **Requisitos de datos:** pesos/cantidades de insumo y de producto utilizable.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** definición de "utilizable" varía por producto y proceso.
- **Duplicados/Sinónimos:** —.
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-011 — Cubiertos por hora-hombre (meals per labor hour)
- **Nombre fuente:** Meals (covers) per labor hour / labor productivity.
- **Definición encontrada:** productividad laboral del subsistema de producción/servicio expresada como comidas servidas por hora de trabajo.
- **Unidad declarada:** cubiertos por hora-hombre.
- **Numerador/Denominador:** la fuente provee: comidas servidas / horas de trabajo.
- **Proceso:** P4 (y P5).
- **Alcance taxonómico permitido:** condicionado por FX-2.
- **Fuente APA 7:** Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations* (6th ed.). Pearson.
- **Requisitos de datos:** conteo de comidas y horas laborales registradas.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** no distingue complejidad de la comida ni calidad.
- **Duplicados/Sinónimos:** relacionado con labor cost % (C-029) por el eje trabajo.
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

## P5 — Distribución / servicio / cumplimiento

### GOEI-KPI-C-012 — RevPASH (ingreso por asiento-hora disponible)
- **Nombre fuente:** Revenue per Available Seat Hour (RevPASH).
- **Definición encontrada:** ingreso generado en un intervalo dividido por la capacidad de asientos disponible durante ese intervalo; integra la duración de la comida en la medición de la utilización de capacidad.
- **Unidad declarada:** moneda por asiento-hora.
- **Numerador/Denominador:** la fuente provee: ingreso del periodo / (número de asientos disponibles × horas del periodo).
- **Proceso:** P5 (y P6).
- **Alcance taxonómico permitido:** condicionado por FX-1 (modalidad con asientos/servicio en sitio).
- **Fuente APA 7:** Kimes, S. E., Chase, R. B., Choi, S., Lee, P. Y., & Ngonzi, E. N. (1998). Restaurant revenue management. *Cornell Hotel and Restaurant Administration Quarterly, 39*(3), 32–39. https://doi.org/10.1177/001088049803900308
- **Requisitos de datos:** ingresos por franja, número de asientos, horas de operación.
- **Frecuencia:** por franja horaria/daypart (según la fuente).
- **Limitaciones:** no aplica a modalidades sin asientos (delivery-only, bandeja institucional sin asignación de asiento).
- **Duplicados/Sinónimos:** solapa con ventas por asiento (C-018) añadiendo el eje temporal.
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-013 — Rotación de mesas (table turnover)
- **Nombre fuente:** Table turnover rate.
- **Definición encontrada:** número de veces que una mesa se ocupa por grupos distintos en un periodo, indicador de utilización de capacidad en servicio de mesa.
- **Unidad declarada:** veces por mesa por periodo.
- **Numerador/Denominador:** la fuente describe grupos atendidos / número de mesas en el periodo.
- **Proceso:** P5.
- **Alcance taxonómico permitido:** condicionado por FX-1 (servicio de mesa).
- **Fuente APA 7:** Kimes, S. E., Chase, R. B., Choi, S., Lee, P. Y., & Ngonzi, E. N. (1998). Restaurant revenue management. *Cornell Hotel and Restaurant Administration Quarterly, 39*(3), 32–39. https://doi.org/10.1177/001088049803900308
- **Requisitos de datos:** conteo de grupos por mesa y periodo.
- **Frecuencia:** por servicio/daypart.
- **Limitaciones:** no aplica sin mesas; sensible a duración de la comida.
- **Duplicados/Sinónimos:** insumo conceptual de RevPASH (C-012).
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-014 — Tiempo de ciclo de cumplimiento de pedido (cliente)
- **Nombre fuente:** Order Fulfillment Cycle Time (SCOR, responsiveness).
- **Definición encontrada:** tiempo promedio desde la colocación del pedido hasta su entrega al cliente.
- **Unidad declarada:** tiempo.
- **Numerador/Denominador:** promedio de tiempos (la fuente no añade cociente adicional).
- **Proceso:** P5.
- **Alcance taxonómico permitido:** condicionado por FX-1 (entrega/delivery).
- **Fuente APA 7:** Association for Supply Chain Management. (2022). *SCOR Digital Standard (Version 14.0)*. ASCM. https://scor.ascm.org/
- **Requisitos de datos:** marcas de tiempo de pedido y entrega.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** genérico de cadena de suministro → `GOEI-ISS-057`.
- **Duplicados/Sinónimos:** C-005 (mismo indicador, lado aprovisionamiento).
- **Evidencia:** [NORMA/MARCO]. **Estado:** CANDIDATO.

### GOEI-KPI-C-015 — Cumplimiento de pedido perfecto (perfect order fulfillment)
- **Nombre fuente:** Perfect Order Fulfillment (SCOR, reliability RL.1.1).
- **Definición encontrada:** porcentaje de pedidos entregados cumpliendo simultáneamente cantidad completa, a tiempo, con documentación correcta y en condición perfecta.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: pedidos perfectos / pedidos totales.
- **Proceso:** P5.
- **Alcance taxonómico permitido:** condicionado por FX-1.
- **Fuente APA 7:** Association for Supply Chain Management. (2022). *SCOR Digital Standard (Version 14.0)*. ASCM. https://scor.ascm.org/performance/reliability/
- **Requisitos de datos:** registro de pedidos con estado de las cuatro condiciones.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** genérico; "documentación correcta" requiere adaptación a foodservice → `GOEI-ISS-057`.
- **Duplicados/Sinónimos:** engloba exactitud de pedido y puntualidad.
- **Evidencia:** [NORMA/MARCO]. **Estado:** CANDIDATO.

### GOEI-KPI-C-016 — Calidad de servicio percibida (DINESERV)
- **Nombre fuente:** DINESERV.
- **Definición encontrada:** escala de 29 ítems para medir calidad de servicio en restaurantes en cinco dimensiones (tangibles, fiabilidad, capacidad de respuesta, seguridad, empatía), adaptación de SERVQUAL.
- **Unidad declarada:** puntuación de escala tipo Likert (no monetaria).
- **Numerador/Denominador:** **no aplica** (instrumento de escala; la fuente no define un cociente).
- **Proceso:** P5.
- **Alcance taxonómico permitido:** condicionado por FX-1 (servicio con interacción de cliente).
- **Fuente APA 7:** Stevens, P., Knutson, B., & Patton, M. (1995). DINESERV: A tool for measuring service quality in restaurants. *Cornell Hotel and Restaurant Administration Quarterly, 36*(2), 56–60. https://doi.org/10.1177/001088049503600226
- **Requisitos de datos:** encuesta a clientes con el cuestionario de 29 ítems.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** percepción autorreportada; no aplica a modalidades sin interacción de cliente.
- **Duplicados/Sinónimos:** deriva de SERVQUAL.
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

## P6 — Transacción / cierre

### GOEI-KPI-C-017 — Cheque promedio (average guest check)
- **Nombre fuente:** Average guest check / average cover.
- **Definición encontrada:** gasto promedio por cliente/cubierto atendido.
- **Unidad declarada:** moneda por cubierto.
- **Numerador/Denominador:** la fuente provee: ventas totales / número de cubiertos (clientes).
- **Proceso:** P6.
- **Alcance taxonómico permitido:** condicionado por FX-3 (naturaleza comercial: venta).
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** ventas y conteo de cubiertos.
- **Frecuencia:** no provista por la fuente (periódico).
- **Limitaciones:** no aplica a no comercial con requisición sin venta.
- **Duplicados/Sinónimos:** comparte numerador con ventas por asiento (C-018).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-018 — Ventas por asiento (sales per seat)
- **Nombre fuente:** Sales per seat.
- **Definición encontrada:** ventas generadas por asiento disponible en un periodo.
- **Unidad declarada:** moneda por asiento.
- **Numerador/Denominador:** la fuente provee: ventas totales / número de asientos.
- **Proceso:** P6.
- **Alcance taxonómico permitido:** condicionado por FX-3 y FX-1 (existencia de asientos).
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** ventas y número de asientos.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** no aplica sin asientos.
- **Duplicados/Sinónimos:** solapa con RevPASH (C-012) sin eje temporal.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-019 — Margen bruto (gross profit margin)
- **Nombre fuente:** Gross profit margin.
- **Definición encontrada:** proporción de las ventas que queda tras el costo de ventas.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: (ventas − COGS) / ventas.
- **Proceso:** P6 (y P9).
- **Alcance taxonómico permitido:** condicionado por FX-3.
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.). · Horngren, C. T., Datar, S. M., & Rajan, M. V. (2015). *Cost accounting* (15th ed.). Pearson.
- **Requisitos de datos:** ventas y COGS.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** agregado; no distingue centros de costo.
- **Duplicados/Sinónimos:** relacionado con food cost % (C-009).
- **Evidencia:** [NORMA/EVIDENCIA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-020 — Costo por comida servida (cost per meal)
- **Nombre fuente:** Cost per meal served (institutional/non-commercial foodservice).
- **Definición encontrada:** costo total del servicio de alimentos por comida servida, indicador de gestión en foodservice no comercial.
- **Unidad declarada:** moneda por comida.
- **Numerador/Denominador:** la fuente describe: costo total del servicio / número de comidas servidas.
- **Proceso:** P6.
- **Alcance taxonómico permitido:** condicionado por FX-3 (naturaleza no comercial/institucional: requisición).
- **Fuente APA 7:** Gregoire, M. B., & Spears, M. C. (2007). *Foodservice organizations* (6th ed.). Pearson.
- **Requisitos de datos:** costos totales del servicio y conteo de comidas.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** definición de "costo total" varía por institución.
- **Duplicados/Sinónimos:** contraparte no comercial de cheque promedio (C-017).
- **Evidencia:** [EVIDENCIA]. **Estado:** CANDIDATO.

## P7 — Inocuidad, higiene y sanitización

### GOEI-KPI-C-021 — Puntaje de inspección sanitaria (food safety inspection score)
- **Nombre fuente:** Retail food inspection score / rating.
- **Definición encontrada:** resultado de la inspección regulatoria de establecimientos de alimentos según factores de riesgo y prácticas de manipulación; base del Food Code de referencia.
- **Unidad declarada:** puntos/clasificación (según jurisdicción).
- **Numerador/Denominador:** **no provisto de forma uniforme** (los esquemas de puntaje varían por jurisdicción).
- **Proceso:** P7.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** U.S. Food and Drug Administration. (2022). *Food Code 2022*. FDA. https://www.fda.gov/food/fda-food-code/food-code-2022
- **Requisitos de datos:** inspección formal por autoridad competente.
- **Frecuencia:** según régimen regulatorio (no fijada por la fuente).
- **Limitaciones:** **no comparable entre jurisdicciones** → `GOEI-ISS-058`; recuérdese doble rol de inocuidad (`GOEI-ISS-015`).
- **Duplicados/Sinónimos:** relacionado con C-022/C-023.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-022 — Conformidad de límites críticos / monitoreo de CCP (HACCP)
- **Nombre fuente:** Critical limit / CCP monitoring conformance (HACCP).
- **Definición encontrada:** cumplimiento de los límites críticos monitoreados en los puntos críticos de control del sistema HACCP, conforme a los principios generales de higiene de los alimentos.
- **Unidad declarada:** porcentaje de conformidad (o conteo de desviaciones).
- **Numerador/Denominador:** la fuente define el principio (monitorear CCP y actuar ante desviación); **no fija un cociente numérico** universal.
- **Proceso:** P7.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Codex Alimentarius Commission. (2020). *General principles of food hygiene (CXC 1-1969, Rev. 2020)*. FAO/WHO. https://www.fao.org/fao-who-codexalimentarius/
- **Requisitos de datos:** plan HACCP con CCP y registros de monitoreo.
- **Frecuencia:** continua por CCP (según el plan).
- **Limitaciones:** requiere HACCP implementado; puede operar como restricción crítica (AX-4), no sólo indicador.
- **Duplicados/Sinónimos:** C-023 es un CCP típico.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-023 — Conformidad de control de temperatura (holding en frío/caliente)
- **Nombre fuente:** Temperature control conformance.
- **Definición encontrada:** cumplimiento de rangos de temperatura seguros en almacenamiento y mantenimiento de alimentos, control clave de higiene.
- **Unidad declarada:** porcentaje de lecturas en rango.
- **Numerador/Denominador:** la fuente prescribe rangos; el cociente (lecturas en rango / lecturas totales) es de uso operativo, **no fijado explícitamente** por la fuente.
- **Proceso:** P7.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** U.S. Food and Drug Administration. (2022). *Food Code 2022*. FDA. https://www.fda.gov/food/fda-food-code/food-code-2022 · Codex Alimentarius Commission. (2020). *CXC 1-1969*. FAO/WHO.
- **Requisitos de datos:** registros de temperatura con marca temporal.
- **Frecuencia:** según plan de monitoreo.
- **Limitaciones:** puede ser restricción crítica; depende de instrumentación.
- **Duplicados/Sinónimos:** CCP específico bajo C-022.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-024 — Cumplimiento de higiene de manipuladores (hand hygiene)
- **Nombre fuente:** Food handler hygiene / handwashing compliance.
- **Definición encontrada:** cumplimiento de prácticas de higiene personal y lavado de manos de los manipuladores de alimentos, requisito de los principios generales de higiene.
- **Unidad declarada:** porcentaje de cumplimiento observado.
- **Numerador/Denominador:** la fuente prescribe la práctica; **no fija** un cociente de observación estandarizado.
- **Proceso:** P7.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Codex Alimentarius Commission. (2020). *General principles of food hygiene (CXC 1-1969, Rev. 2020)*. FAO/WHO. https://www.fao.org/fao-who-codexalimentarius/
- **Requisitos de datos:** observación estructurada o auditoría de higiene.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** medición observacional sujeta a sesgo; sin protocolo único.
- **Duplicados/Sinónimos:** —.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

## P8 — Mantenimiento de equipos e instalación

### GOEI-KPI-C-025 — Tiempo medio entre fallas (MTBF)
- **Nombre fuente:** Mean Time Between Failures (EN 15341, KPI E5).
- **Definición encontrada:** tiempo medio entre fallas de un activo, KPI técnico de la función de mantenimiento.
- **Unidad declarada:** horas.
- **Numerador/Denominador:** la norma provee el KPI; el cálculo estándar es tiempo operativo / número de fallas (según la norma).
- **Proceso:** P8.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** European Committee for Standardization. (2019). *EN 15341:2019 — Maintenance — Maintenance key performance indicators*. CEN.
- **Requisitos de datos:** registro de fallas y tiempos operativos.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** requiere historial de fallas confiable.
- **Duplicados/Sinónimos:** complementario de MTTR (C-026).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-026 — Tiempo medio de reparación/restauración (MTTR)
- **Nombre fuente:** Mean Time To Repair/Restore (EN 15341).
- **Definición encontrada:** tiempo medio para restaurar un activo tras una falla, KPI técnico de mantenimiento.
- **Unidad declarada:** horas.
- **Numerador/Denominador:** cálculo estándar tiempo total de reparación / número de reparaciones (según la norma).
- **Proceso:** P8.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** European Committee for Standardization. (2019). *EN 15341:2019 — Maintenance — Maintenance key performance indicators*. CEN.
- **Requisitos de datos:** registro de intervenciones y su duración.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** depende de la definición de inicio/fin de reparación.
- **Duplicados/Sinónimos:** complementario de MTBF (C-025); insumo de disponibilidad (C-027).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-027 — Disponibilidad de activo/equipo (availability)
- **Nombre fuente:** Availability (EN 15341).
- **Definición encontrada:** proporción de tiempo en que el equipo/instalación está disponible para operar; indicador principal de desempeño de mantenimiento.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la norma define disponibilidad a partir de tiempos de operación y paro (relación tiempo disponible / tiempo total requerido).
- **Proceso:** P8.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** European Committee for Standardization. (2019). *EN 15341:2019 — Maintenance — Maintenance key performance indicators*. CEN.
- **Requisitos de datos:** tiempos de disponibilidad y de paro.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** depende de la definición de "tiempo requerido".
- **Duplicados/Sinónimos:** componente de OEE (C-008).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

## P9 — Gestión y control

### GOEI-KPI-C-028 — Costo primo (prime cost %)
- **Nombre fuente:** Prime cost percentage.
- **Definición encontrada:** suma del costo de ventas (alimentos y bebidas) y el costo total de mano de obra, como proporción de las ventas.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: (COGS alimentos+bebidas + costo total de mano de obra) / ventas totales.
- **Proceso:** P9.
- **Alcance taxonómico permitido:** transversal; realización condicionada por FX-3.
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** COGS, costo de mano de obra y ventas.
- **Frecuencia:** no provista por la fuente (periódico).
- **Limitaciones:** agrega dos familias de costo; oculta su composición.
- **Duplicados/Sinónimos:** engloba food cost % (C-009) y labor cost % (C-029).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-029 — Costo de mano de obra (labor cost %)
- **Nombre fuente:** Labor cost percentage.
- **Definición encontrada:** costo total de mano de obra como proporción de las ventas.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la fuente provee: costo total de mano de obra / ventas totales.
- **Proceso:** P9.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** nómina total (sueldos, cargas, beneficios) y ventas.
- **Frecuencia:** no provista por la fuente.
- **Limitaciones:** sensible a la definición de costo laboral incluido.
- **Duplicados/Sinónimos:** componente de prime cost % (C-028).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-030 — Rotación de personal (employee turnover rate)
- **Nombre fuente:** Turnover rate (ISO 30414, capital humano).
- **Definición encontrada:** tasa de rotación de personal como métrica de capital humano en el reporte interno/externo de recursos humanos.
- **Unidad declarada:** porcentaje.
- **Numerador/Denominador:** la norma define la rotación a partir de separaciones sobre plantilla promedio (separaciones / número promedio de empleados).
- **Proceso:** P9.
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** International Organization for Standardization. (2018). *ISO 30414:2018 — Human resource management — Guidelines for internal and external human capital reporting*. ISO. https://www.iso.org/standard/69338.html
- **Requisitos de datos:** altas/bajas y plantilla promedio del periodo.
- **Frecuencia:** no provista por la fuente (típicamente anual).
- **Limitaciones:** genérico de RRHH → `GOEI-ISS-057`; alta estacionalidad en foodservice.
- **Duplicados/Sinónimos:** —.
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-031 — Margen operativo / EBITDA
- **Nombre fuente:** Operating profit margin / EBITDA.
- **Definición encontrada:** rentabilidad operativa del establecimiento en el estado de resultados del sistema uniforme de cuentas.
- **Unidad declarada:** porcentaje (margen) o moneda (EBITDA).
- **Numerador/Denominador:** para el margen operativo, la fuente provee: resultado operativo / ventas totales.
- **Proceso:** P9.
- **Alcance taxonómico permitido:** transversal; realización condicionada por FX-3.
- **Fuente APA 7:** National Restaurant Association. (2012). *Uniform system of accounts for restaurants* (8th ed.).
- **Requisitos de datos:** estado de resultados del periodo.
- **Frecuencia:** no provista por la fuente (periódico).
- **Limitaciones:** afectado por estructura de propiedad/arrendamiento.
- **Duplicados/Sinónimos:** relacionado con margen bruto (C-019).
- **Evidencia:** [NORMA]. **Estado:** CANDIDATO.

### GOEI-KPI-C-032 — Balanced Scorecard (marco de referencia, no KPI único)
- **Tipo de registro:** MARCO CONTEXTUAL; excluido de la cola de evaluación de KPI de B4.
- **Nombre fuente:** Balanced Scorecard (BSC).
- **Definición encontrada:** marco de medición de desempeño con cuatro perspectivas (financiera, cliente, procesos internos, aprendizaje y crecimiento); **es un marco, no un indicador único**.
- **Unidad declarada:** no aplica (marco).
- **Numerador/Denominador:** no aplica.
- **Proceso:** P9 (transversal a todos).
- **Alcance taxonómico permitido:** transversal.
- **Fuente APA 7:** Kaplan, R. S., & Norton, D. P. (1992). The balanced scorecard—Measures that drive performance. *Harvard Business Review, 70*(1), 71–79.
- **Requisitos de datos:** depende de los KPI que se instancien.
- **Frecuencia:** no aplica.
- **Limitaciones:** **no es puntuable como métrica**; se registra por trazabilidad, no como candidato a KPI-def.
- **Duplicados/Sinónimos:** engloba conceptualmente a los demás.
- **Evidencia:** [MARCO]. **Estado:** CANDIDATO CONTEXTUAL (marco, no métrica ni candidato a KPI-def).

---

## Resumen de cobertura por proceso

| Proceso | Candidatos | Nivel de cobertura |
|---|---|---|
| P1 | C-001, C-002, C-003 | Parcial (vacío en exactitud de pronóstico) |
| P2 | C-004, C-005 | Media (fuentes genéricas) |
| P3 | C-006, C-007 | Media (merma bajo ISS-043) |
| P4 | C-008, C-009, C-010, C-011 | Alta |
| P5 | C-012, C-013, C-014, C-015, C-016 | Alta |
| P6 | C-017, C-018, C-019, C-020 | Alta |
| P7 | C-021, C-022, C-023, C-024 | Media-alta (heterogeneidad jurisdiccional) |
| P8 | C-025, C-026, C-027 (+ C-008) | Alta (norma dedicada) |
| P9 | C-028, C-029, C-030, C-031, C-032 | Alta en lo económico; BSC no puntuable |

**Total: 32 registros controlados** (31 indicadores con estado `CANDIDATO` que integran la cola B4 + 1 marco con estado `CANDIDATO CONTEXTUAL`, excluido de dicha cola).

*Ningún registro de este catálogo es admisible, normativo ni puntuable. La admisibilidad, la de-duplicación, la fórmula GOEI, las referencias, los pesos y los umbrales son materia de B4 en adelante. Aceptar este universo candidato no aprueba ningún KPI.*
