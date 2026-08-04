# Informe del Comité Científico Evaluador
## Sobre la justificación y viabilidad del GOEI (Gastronomic Operational Efficiency Index)

**Naturaleza del documento:** dictamen crítico *ex ante*, emitido bajo el estándar de exigencia de un panel de revisión Q1 / agencia de normalización.
**Mandato:** no diseñar el índice, sino determinar si existe un problema científico y práctico que justifique su existencia.
**Postura adoptada:** adversarial. El comité intenta refutar la necesidad del GOEI; solo lo que sobreviva a la refutación puede continuar.
**Fecha:** 4 de agosto de 2026.

> **Advertencia de estatus epistémico.** A lo largo del informe se etiqueta cada afirmación como
> **[EVIDENCIA]** (bibliografía revisada o norma), **[CONSENSO]** (acuerdo profesional no formalizado),
> **[DATO]** (empírico verificable) o **[PROPUESTA]** (juicio provisional del comité, aún no validado).
> Ningún número se presenta como definitivo.

---

## A. Resumen Ejecutivo

El comité examinó si el GOEI resuelve un problema real, no resuelto, y si su eventual contribución es científicamente original y normativamente admisible.

**Conclusión principal:** el *problema práctico* que el GOEI dice atacar —la ausencia de una medida única, estandarizada, comparable, auditable y calculable manualmente de la "salud operacional" de un establecimiento gastronómico— **existe parcialmente y no está plenamente resuelto**. Ningún instrumento existente combina simultáneamente (i) cobertura multidimensional operacional, (ii) estandarización comparable entre establecimientos heterogéneos, (iii) auditabilidad, y (iv) cálculo manual sin tecnología. Sin embargo, cada una de esas propiedades por separado ya está cubierta por instrumentos maduros (Balanced Scorecard, DEA, OEE, KPIs de foodservice, SERVQUAL/DINESERV, sistemas de inspección sanitaria). **La brecha, por tanto, no es de existencia de métricas sino de integración estandarizada.** Esa es una brecha mucho más estrecha —y mucho más difícil de defender— que la que sugiere la narrativa fundacional del proyecto.

**Conclusión de rechazo condicional:** en su estado actual, un revisor exigente **rechazaría el proyecto**, no por falta de interés del tema, sino por cuatro defectos que hoy son fatales: (1) el constructo "eficiencia operacional gastronómica" no está definido de forma que lo distinga operacionalmente de "desempeño", "productividad", "calidad" o "rentabilidad"; (2) no se ha demostrado que un *índice compuesto* sea la forma correcta de representarlo, frente a la crítica establecida de que los índices compuestos "pueden construirse para contar cualquier historia" si no se someten a análisis de robustez (**[EVIDENCIA]**, OECD/JRC 2008); (3) no existe todavía criterio de validación —¿contra qué se valida el GOEI, si no hay un "verdadero" nivel de eficiencia observable?; (4) la restricción de "calculable manualmente" entra en tensión directa con el rigor estadístico que exige un estándar internacional.

**Veredicto:** *revise and resubmit*, no *accept*. El proyecto merece continuar **solo** si acepta reducir su ambición retórica (de "nuevo estándar internacional" a "protocolo de medición integrada validable") y si resuelve, antes de diseñar un solo KPI, las cinco condiciones mínimas del capítulo H.

---

## B. Estado actual del conocimiento

El campo de la medición del desempeño gastronómico y operacional **no está vacío**. Está poblado por al menos siete familias de instrumentos maduros. Presentar el GOEI como si llegara a un terreno virgen sería el primer error fatal ante un revisor.

### B.1 Familias de instrumentos existentes

| Familia | Qué mide | Origen / referencia | Naturaleza |
|---|---|---|---|
| **Índices compuestos (metodología general)** | Agregación de indicadores heterogéneos en un número | OECD/JRC *Handbook* (Nardo, Saisana, Saltelli, Tarantola, 2008) | **[EVIDENCIA]** — norma metodológica de facto |
| **OEE (Overall Equipment Effectiveness)** | Disponibilidad × Rendimiento × Calidad de un activo | Nakajima, TPM, años 1980 | **[EVIDENCIA]** — estándar industrial |
| **Balanced Scorecard** | Desempeño multidimensional (financiero, cliente, procesos, aprendizaje) | Kaplan & Norton, 1992 | **[EVIDENCIA]** — marco de gestión dominante |
| **DEA (Data Envelopment Analysis)** | Eficiencia relativa de unidades (DMU) frente a una frontera | Charnes, Cooper, Rhodes, 1978; aplicado a restaurantes en múltiples estudios | **[EVIDENCIA]** — método econométrico de eficiencia |
| **KPIs de foodservice** | Prime cost, food cost %, labor %, RevPASH, table turn | RevPASH: Kimes, Cornell | **[EVIDENCIA]** / **[CONSENSO]** industrial |
| **Calidad de servicio** | Brecha expectativa-percepción en 5 dimensiones | SERVQUAL (Parasuraman et al.); DINESERV (Stevens, Knutson, Patton, 1995) | **[EVIDENCIA]** — instrumentos psicométricos validados |
| **Inocuidad / inspección sanitaria** | Cumplimiento de higiene y control de peligros | HACCP (FAO/Codex); sistemas de puntaje/grado de inspección; ISO 22000 | **[EVIDENCIA]** / norma |

### B.2 Lo que este panorama implica

Primero, **la eficiencia operacional de restaurantes ya se mide** —y se mide bien— cuando se define de forma acotada. DEA es, literalmente, la herramienta científica canónica para "eficiencia operacional" de unidades comparables, y ha sido aplicada repetidamente a cadenas de restaurantes (**[EVIDENCIA]**). Un revisor preguntará de inmediato: *¿por qué un índice aditivo manual sería preferible a DEA, que ya entrega una frontera de eficiencia con fundamento en programación lineal?*

Segundo, **la multidimensionalidad ya está resuelta conceptualmente** por el Balanced Scorecard, que existe precisamente para no reducir el desempeño a lo financiero (**[EVIDENCIA]**, Kaplan & Norton 1992). El BSC, sin embargo, deliberadamente *no* colapsa las dimensiones en un solo número —y esa negativa es una decisión metodológica informada, no un olvido.

Tercero, **la metodología de construcción de índices compuestos está madura y es autocrítica**. El *Handbook* OECD/JRC no es solo una guía: es también un catálogo de las trampas (normalización, ponderación, agregación, compensabilidad, robustez). La literatura advierte explícitamente que los índices compuestos sin análisis de sensibilidad "pueden construirse para contar cualquier historia" (**[EVIDENCIA]**). Esto es una espada apuntando al corazón del GOEI.

Cuarto, incluso donde los instrumentos existen, **su validez predictiva es discutida**. Los puntajes de inspección sanitaria muestran resultados mixtos: correlacionan con brotes en algunos condados (Seattle-King) y no correlacionan en otros (Miami-Dade) (**[EVIDENCIA]**). Esto es una advertencia directa: un puntaje agregado y "auditable" puede carecer de valor predictivo real. El GOEI heredaría ese riesgo.

---

## C. Problema científico identificado

Es necesario separar el **problema práctico** (que puede ser real) del **problema científico** (que es el único que justifica investigación original).

### C.1 El problema práctico declarado
"No existe una forma estandarizada, comparable, auditable y de bajo costo tecnológico de expresar la salud operacional integral de un establecimiento gastronómico, que permita compararlo consigo mismo en el tiempo y con pares de su categoría."

El comité concede que este problema práctico **es plausible y parcialmente real** (**[CONSENSO]**). Ningún instrumento existente cumple *las cuatro* condiciones a la vez: DEA no es manual ni interpretable por un dueño de fonda; el BSC no produce un número comparable entre empresas; los KPIs de foodservice no están estandarizados ni normalizados a escala común; las inspecciones sanitarias cubren solo inocuidad.

### C.2 El problema científico real (mucho más estrecho)
El problema *científico* no es "falta un índice". Es esta pregunta:

> **¿Es "eficiencia operacional gastronómica" un constructo latente único, medible y unidimensionalizable de forma válida, o es un agregado de constructos distintos (costo, calidad, servicio, inocuidad, personas) cuya reducción a un solo número destruye información y crea artefactos?**

Esta es la pregunta que el proyecto **todavía no ha formulado** y que decide todo. Si la respuesta es "es un agregado de constructos distintos y en tensión", entonces un índice único es científicamente cuestionable *por diseño*, y el proyecto correcto sería un *tablero* (dashboard) normalizado, no un *índice*.

### C.3 Riesgo de tautología y de constructo vago
"Eficiencia operacional" no está definida en el proyecto de forma que la separe de "productividad", "rentabilidad", "desempeño" o "calidad". Sin una definición operacional que fije **qué cuenta como input y qué como output** —la distinción básica de toda medida de eficiencia (**[EVIDENCIA]**, tradición DEA/OEE)—, el GOEI corre el riesgo de ser un índice de "cosas buenas de un restaurante", que es exactamente el tipo de constructo que un revisor Q1 rechaza por vaguedad.

---

## D. Brecha científica

El comité distingue tres afirmaciones que el proyecto tiende a mezclar:

1. **"No existe el GOEI"** — verdadero pero trivial. La inexistencia de un nombre no es una brecha científica. (**[PROPUESTA]** rechazada como justificación.)
2. **"No existe un índice que integre estas dimensiones para gastronomía"** — probablemente verdadero (**[CONSENSO]**), pero es una brecha de *ingeniería/integración*, no necesariamente de *ciencia*.
3. **"No se sabe si la eficiencia operacional gastronómica puede representarse válidamente como índice compuesto unidimensional"** — **esta sí es una brecha científica genuina** (**[PROPUESTA]** del comité), porque es una pregunta de validez de constructo, empíricamente resoluble y publicable.

**Dictamen sobre la brecha:** existe una brecha científica *defendible*, pero **no es la que el proyecto cree tener**. No es "falta el índice"; es "no está demostrado que el constructo sea indexable sin pérdida inaceptable de validez". Todo el valor académico del GOEI depende de reformular su pregunta central hacia (3).

Riesgo adicional: la literatura de índices compuestos es tan extensa que **la novedad metodológica del GOEI será cercana a cero**. Normalización, ponderación y agregación son problemas resueltos en abstracto (**[EVIDENCIA]**, OECD/JRC 2008). La única novedad posible es *empírica y de dominio*: demostrar qué estructura factorial tiene la eficiencia operacional gastronómica y qué reglas de agregación resisten análisis de robustez en este dominio específico.

---

## E. Brecha industrial

Aquí el caso es más fuerte que en la dimensión científica, y conviene no exagerarlo ni subestimarlo.

**A favor de la existencia de la brecha (**[CONSENSO]**):**
- Los KPIs de foodservice existen pero están fragmentados, sin normalización a escala común ni reglas de comparabilidad entre categorías (una cafetería vs. un restaurante de manteles largos vs. un dark kitchen).
- DEA y BSC requieren analista experto; no son operables por el 90% de los establecimientos, que son PYMES sin capacidad técnica (**[PROPUESTA]**, requiere dato).
- La comparabilidad entre establecimientos heterogéneos es un problema real: no hay una unidad común que permita decir "este local está mejor operado que aquel" controlando por categoría.

**En contra (el comité debe ser honesto):**
- La demanda de mercado por un *índice único* no está demostrada. Los operadores quizá prefieran KPIs accionables individuales antes que un número agregado cuyo mecanismo no entienden. **Falta evidencia de que alguien vaya a usar el GOEI.** (**[PROPUESTA]**, riesgo de "solución en busca de problema".)
- Existen plataformas comerciales que ya integran KPIs en tableros. El GOEI competiría con ellas sin la ventaja de datos en tiempo real.

**Dictamen:** la brecha industrial es **real pero no cuantificada**. Antes de continuar, el proyecto debe producir *evidencia de demanda* (entrevistas, encuestas a operadores), no asumirla. Un estándar que nadie adopta no es un estándar.

---

## F. Evaluación crítica del GOEI (errores conceptuales actuales)

El comité identifica los siguientes errores o debilidades en el diseño conceptual *tal como está planteado hoy*:

1. **Ambición nominal desproporcionada.** Llamarlo "estándar internacional" antes de tener definición de constructo, validación ni adopción es un error retórico que predispone en contra a cualquier revisor. Un estándar (ISO, Codex) surge de consenso multi-actor tras años de validación; no se declara. (**[EVIDENCIA]** sobre cómo nacen las normas.)

2. **Confusión entre índice y tablero.** El proyecto asume que la representación correcta es un *número único*. Esa es una decisión de diseño no justificada. El Balanced Scorecard existe justamente porque colapsar dimensiones oculta información (**[EVIDENCIA]**). El GOEI debe justificar por qué agrega en lugar de mostrar el perfil.

3. **"Calculable manualmente" tratado como virtud pura, no como restricción con costo.** La exigencia de cálculo manual con calculadora básica limita severamente las técnicas de normalización y ponderación disponibles (excluye, p. ej., ponderación por análisis factorial, DEA, benchmarking de frontera). Esto puede degradar la validez estadística. La restricción es legítima como objetivo de usabilidad, pero **hay que reconocer explícitamente el trade-off validez ↔ simplicidad**, no ocultarlo.

4. **Compensabilidad no resuelta.** La agregación lineal permite que un buen resultado financiero compense un mal resultado de inocuidad —exactamente lo que el principio de "no compensación" del proyecto quiere evitar. Pero combinar reglas de no-compensación con un índice aditivo manual es técnicamente delicado (**[EVIDENCIA]**, crítica de compensabilidad en índices compuestos). El proyecto declara el principio pero no ha mostrado cómo implementarlo sin romper la aditividad simple.

5. **Ausencia de un criterio de verdad (ground truth).** ¿Contra qué se valida el GOEI? La eficiencia operacional "verdadera" no es observable. Sin un criterio externo (supervivencia del negocio, rentabilidad futura, satisfacción, reducción de brotes), el índice no puede validarse y queda como una convención arbitraria.

6. **Riesgo de doble conteo y correlación entre dimensiones.** Costo, servicio, calidad e inocuidad no son independientes. Agregarlos como si lo fueran infla o deforma el índice. Se requiere análisis de estructura de correlación antes de ponderar.

7. **Taxonomía de establecimientos aún inexistente.** Sin una taxonomía validada, la comparabilidad "entre pares de la misma categoría" carece de base. La categoría es el denominador de toda la propuesta y todavía no está definida.

---

## G. Riesgos metodológicos

| # | Riesgo | Descripción | Severidad |
|---|---|---|---|
| R1 | **Validez de constructo** | Que "eficiencia operacional gastronómica" no sea un constructo unidimensional válido | Crítica |
| R2 | **Arbitrariedad de ponderaciones** | Que los pesos determinen el resultado y no puedan justificarse; "el índice cuenta la historia que quiera su autor" (**[EVIDENCIA]**) | Crítica |
| R3 | **No robustez** | Que el ranking cambie según normalización/agregación elegida; falta de análisis de incertidumbre y sensibilidad | Crítica |
| R4 | **Compensabilidad indebida** | Que dimensiones críticas (inocuidad, legalidad) sean compensadas por financieras | Alta |
| R5 | **Ausencia de ground truth** | Imposibilidad de validar contra un criterio externo | Crítica |
| R6 | **Trade-off simplicidad-validez** | Que la exigencia de cálculo manual degrade la calidad estadística | Alta |
| R7 | **Sesgo de categoría / comparabilidad** | Comparar establecimientos no equivalentes por taxonomía débil | Alta |
| R8 | **Gaming del indicador (Ley de Goodhart)** | Que al volverse objetivo, el índice deje de medir lo que medía | Alta |
| R9 | **Datos faltantes en PYMES** | Que los establecimientos pequeños no puedan proveer los insumos del índice | Media-Alta |
| R10 | **Solución sin demanda** | Que no exista mercado real de usuarios del índice | Alta |

Los riesgos R2 y R3 son precisamente los que la metodología OECD/JRC obliga a tratar con análisis de incertidumbre y sensibilidad (**[EVIDENCIA]**). Un GOEI sin ese análisis es, por definición del estado del arte, no publicable.

---

## H. Condiciones mínimas para continuar el proyecto

El comité autoriza la continuación **solo si**, y **antes de diseñar cualquier KPI**, el proyecto compromete lo siguiente:

**H1. Definición operacional del constructo.** Definir "eficiencia operacional gastronómica" con una frontera clara input/output y distinguirla explícitamente de productividad, rentabilidad, calidad y desempeño. Sin esto, no hay proyecto.

**H2. Justificación de la forma (índice vs. tablero).** Argumentar por qué se agrega en un número único en lugar de un perfil multidimensional, reconociendo el precedente del Balanced Scorecard. Si no hay justificación, el producto debe ser un tablero normalizado, no un índice.

**H3. Definición del criterio de validación (ground truth).** Especificar contra qué criterio externo verificable se validará el GOEI (p. ej. supervivencia del negocio a N años, rentabilidad, satisfacción, incidencia de no-conformidades). Sin criterio, no hay validación posible.

**H4. Evidencia de demanda.** Producir evidencia primaria (entrevistas/encuestas a operadores y reguladores) de que existe un usuario que adoptaría el índice. Estándar sin adopción no es estándar.

**H5. Compromiso metodológico con robustez.** Aceptar de entrada que el índice se someterá a análisis de incertidumbre y sensibilidad conforme a OECD/JRC (2008), y que si el ranking no es robusto, el índice se rediseña o se abandona.

**Regla de decisión del comité:** si el proyecto no puede satisfacer H1, H3 y H5, el comité recomienda **no** desarrollar un índice y, en su lugar, desarrollar un *protocolo de tablero comparable* —producto más modesto pero científicamente defendible.

---

## I. Hoja de ruta de investigación (previa a todo diseño de KPI)

**Fase 0 — Delimitación conceptual (obligatoria).**
Definir constructo (H1), decidir índice vs. tablero (H2), fijar taxonomía provisional de establecimientos. Producto: documento conceptual + registro de decisión.

**Fase 1 — Revisión sistemática.**
Revisión sistemática (tipo PRISMA) de la medición de eficiencia/desempeño en foodservice, para mapear con rigor qué se ha medido, cómo y con qué validez. Producto: estado del arte defendible, no anecdótico.

**Fase 2 — Estudio de demanda y ground truth.**
Investigación cualitativa con operadores y reguladores (H4) + definición del criterio de validación (H3). Producto: evidencia de necesidad + criterio externo.

**Fase 3 — Estructura del constructo.**
Estudio empírico exploratorio (correlaciones, análisis factorial) para probar si las dimensiones forman un constructo coherente o no. Aquí se responde la brecha científica del cap. D. Producto: decisión fundamentada sobre unidimensionalidad.

**Fase 4 — Recién aquí:** diseño de KPIs, normalización, ponderación, agregación —cada uno con su prueba de robustez.

**Fase 5 — Validación con casos reales y expertos** contra el ground truth de Fase 2.

El proyecto actualmente quiere saltar a la Fase 4. El comité lo prohíbe hasta cerrar Fases 0–3.

---

## J. Recomendación final del comité

**Dictamen: REVISAR Y REPRESENTAR (revise & resubmit). No aceptar en estado actual; no rechazar definitivamente.**

**¿Rechazaría hoy este proyecto un revisor extremadamente exigente?** — **Sí, hoy lo rechazaría**, por cinco razones acumulativas: constructo no definido (C, F1), forma (índice) no justificada (F2), ausencia de criterio de validación (F5, R5), ausencia de evidencia de demanda (E, R10), y ausencia de compromiso con robustez (R2, R3). Cualquiera de las tres primeras basta para un rechazo en Q1.

**Pero el proyecto no está muerto.** Sobrevive a la refutación en un punto decisivo: **ningún instrumento existente cumple simultáneamente cobertura operacional multidimensional + comparabilidad estandarizada entre categorías + auditabilidad + bajo costo tecnológico.** Esa intersección vacía es un hueco real. La pregunta científica reformulada —¿es la eficiencia operacional gastronómica un constructo válidamente indexable?— es original, publicable y empíricamente resoluble.

**Qué debe demostrarse obligatoriamente** para que el GOEI aspire a ser referencia internacional:
1. Que el constructo existe y es medible de forma válida y confiable (validez de constructo, fiabilidad).
2. Que su representación como índice único es superior —o al menos no inferior— a un tablero, para el propósito declarado.
3. Que el índice es **robusto** frente a decisiones de normalización, ponderación y agregación (OECD/JRC).
4. Que **predice o se asocia** con un criterio externo verificable (validez de criterio).
5. Que puede aplicarse manualmente **sin** que la simplificación destruya (1)–(4).
6. Que existe demanda y viabilidad de adopción.

**Recomendación operativa:** rebajar de inmediato la denominación de "estándar internacional" a "protocolo de medición integrada en desarrollo y validación", cerrar las Fases 0–3 antes de tocar un solo KPI, y aceptar como resultado admisible del proyecto que la conclusión pueda ser *"un tablero comparable, no un índice único"*. Si el proyecto se niega a esa posibilidad, está haciendo advocacy, no ciencia.

---

### Fuentes

- OECD, European Union, JRC (Nardo, Saisana, Saltelli, Tarantola). *Handbook on Constructing Composite Indicators: Methodology and User Guide* (2008). https://www.oecd.org/content/dam/oecd/en/publications/reports/2008/08/handbook-on-constructing-composite-indicators-methodology-and-user-guide_g1gh9301/9789264043466-en.pdf
- Kaplan, R. & Norton, D. (1992). *The Balanced Scorecard: Measures that Drive Performance*. https://www.researchgate.net/publication/298043780_The_Balanced_Scorecard_measures_that_drive_performance
- *Balanced scorecard in the hospitality and tourism industry: Past, present and future* (2020), PMC. https://pmc.ncbi.nlm.nih.gov/articles/PMC7456592/
- Nakajima / OEE — revisión: *A Review of Overall Equipment Effectiveness (OEE)*. https://jcasc.com/index.php/jcasc/article/download/4578/1850/9554
- *Operational efficiency evaluation of restaurant firms* (IJCHM). https://emerald.com/insight/content/doi/10.1108/IJCHM-09-2016-0547/full/html
- *Multiunit restaurant productivity assessment using three-phase data envelopment analysis*. https://www.sciencedirect.com/science/article/abs/pii/S0278431905000769
- *Robustness and sensitivity of weighting and aggregation in constructing composite indices*, Ecological Indicators. https://www.sciencedirect.com/science/article/abs/pii/S1470160X13000034
- Stevens, Knutson, Patton (1995). *DINESERV: A tool for measuring service quality in restaurants*, Cornell HRA Quarterly. https://journals.sagepub.com/doi/10.1177/001088049503600226
- Kimes, S. — RevPASH (Cornell). Ref. práctica: https://pos.toasttab.com/blog/on-the-line/restaurant-kpis
- *An Analysis of Restaurant Food Safety Rating Systems*. https://www.foodpoisoningnews.com/an-analysis-of-restaurant-food-safety-rating-systems/
- *Foodborne Illness Complaint Systems... and Restaurant Inspection Programs* (PMC). https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10877379/

*Nota: las URL corresponden a fuentes reales localizadas en la revisión; se recomienda archivar copia legal en `02_Bibliografia/` y verificar el acceso a texto completo antes de citar en la tesis.*
