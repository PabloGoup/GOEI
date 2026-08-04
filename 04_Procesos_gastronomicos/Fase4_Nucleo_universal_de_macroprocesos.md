# FASE 4 — Núcleo universal de macroprocesos gastronómicos
## Revisión comparativa de modelos de procesos por tipo de establecimiento

**Pregunta de investigación:** ¿existe un conjunto universal de macroprocesos presente en cualquier establecimiento gastronómico, con independencia de su categoría, que pueda servir de base al GOEI?
**Regla de la fase:** NO se diseña el GOEI. No se definen dimensiones, KPI ni pesos. Se mapea el paisaje de procesos y se prueba la hipótesis de un núcleo común.
**Fecha:** 2026-08-04.
**Vínculo ontológico (D-006-REV):** los "macroprocesos" son *Tipos de proceso* del estrato Norma; se realizan como *Ejecuciones de proceso / Eventos* en el estrato Realidad.

> **Etiquetas:** **[EVIDENCIA]** (literatura), **[ANÁLISIS]** (síntesis del comité), **[PROPUESTA/PENDIENTE]**.
> **Nota de alcance:** revisión *amplia y estructurada*, **no PRISMA-formal**. La revisión sistemática completa sigue siendo tarea de Fase 1. Ninguna conclusión se cierra aquí.

---

## 1. Modelos de referencia identificados

### 1.1 Modelo canónico académico — *Foodservice Systems Model* (Spears & Gregoire)
El modelo de sistemas de foodservice (Spears & Gregoire, *Foodservice Organizations: A Managerial and Systems Approach*) es la referencia académica dominante. **[EVIDENCIA]** Estructura entrada→transformación→salida:
- **Entradas:** recursos humanos, materiales, instalaciones, operacionales.
- **Subsistemas funcionales de la transformación:** **(1) aprovisionamiento (procurement); (2) producción; (3) distribución y servicio; (4) inocuidad, sanitización y mantenimiento.**
- **Funciones de gestión y procesos de enlace:** planificación, liderazgo, comunicación, decisión, RRHH, gestión financiera, marketing.
- **Salidas:** comidas, satisfacción del cliente, satisfacción del empleado, responsabilidad financiera; con **control/retroalimentación**.

*Relevancia:* propone que los **subsistemas funcionales son invariantes**, aunque su realización concreta varíe. Es la hipótesis del "núcleo común" ya formulada en la literatura.

### 1.2 Ciclo de control de A&B (hoteles / F&B)
Ciclo de 8 pasos: **compra → recepción → almacenamiento → requisición (issuing) → preparación/producción → servicio → venta → contabilidad/control.** **[EVIDENCIA]** Añade explícitamente la **venta** y la **contabilidad** como pasos, y cierra con control de costos.

### 1.3 Cadena de valor del restaurante (full service)
Proveedores → **compra → recepción → almacenamiento → preparación/cocción → servicio (emplatado/mesa) → experiencia** ; con lazo de **control de food cost**. **[EVIDENCIA]**

### 1.4 Catering / banquetes
**Planificación y menú → aprovisionamiento → producción → transporte/montaje → servicio del evento → desmontaje/limpieza**, con **puntos de inocuidad en cada etapa**. **[EVIDENCIA]** Introduce transporte, montaje y desmontaje como variantes del "servicio/distribución".

### 1.5 Dark kitchen / cloud / ghost
**Ingreso de pedido (digital) → preparación → cocción → empaque → despacho/entrega.** Sin sala ni servicio de mesa; el "servicio" se transforma en **cumplimiento/entrega (fulfillment)** y la toma de pedido es digital. **[EVIDENCIA]**

### 1.6 Tipos de sistema de producción (fuente de variación)
Cuatro tipos clásicos (Spears): **convencional** (cocina in situ y sirve), **ready-prepared/cook-chill** (cocina y enfría para regenerar), **commissary** (producción centralizada y distribución a satélites), **assembly-serve** (compra preparado y solo ensambla/calienta). **[EVIDENCIA]** *Muestran que el subproceso de PRODUCCIÓN varía en forma, no en existencia.*

---

## 2. Matriz comparativa de macroprocesos por tipo de establecimiento

Leyenda: **●** presente y central · **◑** presente con variación fuerte de modo · **○** reducido/ tercerizado · **—** ausente en sentido literal (subsumido en otro).

| Macroproceso candidato | Restaurante full-service | Fast food / QSR | Hotel F&B / banquete | Catering | Cafetería / institucional | Dark kitchen | Commissary / central |
|---|---|---|---|---|---|---|---|
| **P1 Planificación y menú / pronóstico de demanda** | ● | ● | ● | ● | ● | ● | ● |
| **P2 Aprovisionamiento (compra/proveedores)** | ● | ● | ● | ● | ● | ● | ● |
| **P3 Recepción, almacenamiento e inventario** | ● | ● | ● | ● | ● | ● | ● |
| **P4 Producción / preparación** | ● | ● | ● | ● | ● | ● | ● (centralizada) |
| **P5 Distribución / servicio / cumplimiento** | ◑ (mesa) | ◑ (mostrador) | ◑ (mesa/banquete) | ◑ (transporte/evento) | ◑ (línea/self) | ◑ (despacho/entrega) | ◑ (transporte a satélites) |
| **P6 Venta / transacción / gestión de pedido** | ● | ● | ● | ● | ◑ (cargo/no comercial) | ● | ○ (requisición interna) |
| **P7 Inocuidad, higiene y sanitización** (transversal) | ● | ● | ● | ● | ● | ● | ● |
| **P8 Mantenimiento (equipos/instalación)** | ● | ● | ● | ● | ● | ● | ● |
| **P9 Gestión (finanzas/costos, RRHH, marketing, calidad/control)** (transversal) | ● | ● | ● | ● | ● | ● | ● |

**Lectura (**[ANÁLISIS]**):** ninguna columna omite P1–P4, P7–P9. La variación se concentra en **P5 (modo de entrega del valor)** y parcialmente en **P6 (venta vs. requisición no comercial)**. Es decir, **lo que varía no es la existencia del proceso sino su realización**, tal como predice el modelo de Spears.

---

## 3. Análisis de invariancia

**Procesos casi perfectamente invariantes (existencia):** P2 aprovisionamiento, P3 recepción/almacenamiento, P4 producción, P7 inocuidad. Aparecen en el 100% de los modelos y en las cuatro tradiciones (académica, hotelera, catering, delivery). **[ANÁLISIS, alta confianza]**

**Procesos invariantes en existencia pero variables en forma:**
- **P5 Distribución/servicio/cumplimiento** — es el proceso con mayor divergencia de *modo*: servicio de mesa, mostrador, línea de autoservicio, banquete, transporte a evento, despacho a domicilio. **Solo es universal si se define en un nivel de abstracción alto**: "entrega del producto/servicio al consumidor" (la relación Establecimiento→Producto/Servicio→Cliente de la ontología D-006-REV). A nivel de actividad concreta, NO es universal (una dark kitchen no tiene servicio de mesa). **[ANÁLISIS crítico]**
- **P6 Venta/transacción** — universal en foodservice **comercial**; en foodservice **no comercial/institucional** (hospital, escuela, comedor) se transforma en requisición/cargo interno, no venta. Universal solo como "transacción/entrega de la comida al comensal", no como "venta". **[ANÁLISIS]**

**Procesos transversales (no secuenciales):** P7 inocuidad, P8 mantenimiento y P9 gestión atraviesan todas las etapas (la inocuidad tiene puntos de control en cada paso, según catering y HACCP). No son "eslabones" sino planos que envuelven la cadena. **[ANÁLISIS]**

**El determinante de la variación es el *tipo de sistema de producción* (§1.6)**, no la categoría comercial: convencional, cook-chill, commissary y assembly-serve reconfiguran P4–P5 (dónde y cuándo se produce y se entrega), pero preservan P1–P3 y P6–P9. **[ANÁLISIS]**

---

## 4. Núcleo universal candidato

Al nivel de abstracción de **subsistemas funcionales** (no de actividades concretas), la literatura sostiene un núcleo común. Se propone —como **hipótesis a validar**, no como diseño— el siguiente núcleo (**[PROPUESTA/PENDIENTE]**):

**Cadena primaria de valor (secuencial):**
1. **Planificación y menú / demanda** (P1)
2. **Aprovisionamiento** (P2)
3. **Recepción, almacenamiento e inventario** (P3)
4. **Producción / preparación** (P4)
5. **Distribución / servicio / cumplimiento** (P5) — *definido en abstracto como "entrega de valor al consumidor"*
6. **Transacción / cierre** (P6) — *venta o requisición según comercial/no comercial*

**Planos transversales (envuelven la cadena):**
- **A. Inocuidad, higiene y sanitización** (P7) — con puntos de control en cada eslabón.
- **B. Mantenimiento de equipos e instalación** (P8).
- **C. Gestión y control** (P9): finanzas/costos, personas (RRHH), marketing/cliente, calidad/retroalimentación.

Este núcleo es consistente con las cuatro tradiciones revisadas y **reproduce, generalizándolo, el modelo de Spears & Gregoire** (aprovisionamiento / producción / distribución-servicio / inocuidad-sanitización-mantenimiento + funciones de gestión). Su solidez proviene de que **coincide de forma independiente** en fuentes académicas, hoteleras, de catering y de delivery. **[ANÁLISIS]**

---

## 5. Dictamen: ¿existe un núcleo universal que pueda ser base del GOEI?

**Sí, condicionado al nivel de abstracción.** (**[ANÁLISIS]**)

- **A nivel de subsistema funcional:** existe un núcleo común robusto (P1–P4, P7–P9 casi perfectos; P5–P6 universales bajo abstracción adecuada). Es defendible como columna vertebral de procesos del GOEI y tiene respaldo en un modelo académico consolidado (Spears & Gregoire). **[ANÁLISIS]**
- **A nivel de actividad concreta:** NO existe universalidad —el servicio de mesa, la entrega a domicilio o el transporte de banquete son mutuamente excluyentes. Un GOEI que fije procesos a nivel de actividad **fracasaría en comparabilidad entre categorías** (viola el propósito). **[ANÁLISIS crítico]**

**Consecuencia de diseño (para fases posteriores, sin ejecutarla aún):** la matriz de procesos del GOEI debería definirse en **dos niveles**: un **núcleo universal a nivel de subsistema** (invariante, base de comparabilidad entre categorías) y **realizaciones específicas por categoría/tipo de sistema de producción** (variables). Esto encaja con la arquitectura D-005 (núcleo universal + KPI específicos por categoría) y con la ontología D-006 (Tipo de proceso → Ejecución de proceso).

**Riesgos y límites del hallazgo (honestidad metodológica):**
1. Revisión **amplia, no PRISMA-formal**: el núcleo es una **hipótesis fundamentada**, no un hecho cerrado. Requiere revisión sistemática + consenso de expertos (Fase 1 / Fase de validación).
2. Fuentes en parte **profesionales/de industria** junto a la académica; hay que elevar la proporción de fuentes primarias revisadas.
3. **P5 y P6** son los puntos frágiles de la universalidad; su definición abstracta debe validarse para no vaciarse de contenido.
4. El foodservice **no comercial** (hospital, escuela, penitenciario, aéreo) puede tensionar P6 y parte de P9 (marketing): confirmar si entra en el alcance del GOEI (decisión de taxonomía, N2).

**Veredicto:** hay base suficiente para **hipotetizar un núcleo universal de macroprocesos** al nivel de subsistema funcional, apto como fundamento del GOEI, **siempre que** se defina en dos niveles (universal + específico) y se someta a validación sistemática y de expertos antes de fijarse como normativo.

---

## 6. Preguntas que hereda la fase de taxonomía/procesos

1. ¿El alcance del GOEI incluye foodservice **no comercial** (institucional)? Decide si P6 se define como "venta" o como "transacción/entrega".
2. ¿La matriz de procesos se estructura en **dos niveles** (núcleo de subsistema + realización por categoría), como sugiere el análisis?
3. ¿El **tipo de sistema de producción** (convencional/cook-chill/commissary/assembly-serve) es un eje de la taxonomía (N2), dado que es el principal determinante de variación de P4–P5?
4. ¿P7 (inocuidad) se modela como **proceso transversal** y además como **regla crítica no compensatoria** (coherente con AX-4)? Doble rol a resolver.

---

### Fuentes

- Spears, M. & Gregoire, M., *Foodservice Organizations: A Managerial and Systems Approach* — modelo de sistemas de foodservice y subsistemas funcionales. https://www.amazon.com/Foodservice-Organizations-Managerial-Systems-Approach/dp/0134038940 · https://www.semanticscholar.org/paper/Foodservice-Organizations:-A-Managerial-and-Systems-Gregoire/39440d81540bee8224eed8b189deb9cbe4ed32db
- Tipos de sistema de foodservice (convencional, ready-prepared, commissary, assembly-serve). https://ecampusontario.pressbooks.pub/facilitiesmgmtfoodservice/chapter/2-3-food-production-systems/
- Ciclo de control de A&B (hoteles): compra→recepción→almacenamiento→requisición→producción→servicio→venta→contabilidad. https://www.tutorialspoint.com/food_and_beverage_services/food_and_beverage_services_operations.htm · https://www.goodfellowpublishers.com/free_files/Chapter%201-0f65228346ab6a401eb5193068256e5b.pdf
- Cadena de valor del restaurante / flujo de operaciones. https://umbrex.com/resources/how-industries-work/how-the-full-service-restaurant-industry-works/
- Operaciones de catering (planificación→aprovisionamiento→producción→transporte/montaje→servicio→desmontaje; inocuidad en cada etapa). https://fsm.how/catering-facility/catering-systems-hospitality-industry/
- Operaciones de dark kitchen / cloud / ghost (pedido→prep→cocción→empaque→despacho). https://cloudkitchens.com/blog/ultimate-guide-to-ghost-kitchens · https://www.deliverect.com/en/blog/dark-kitchens/dark-kitchen-business-models-and-how-they-work

*Verificación pendiente (Fase 1): elevar proporción de fuentes primarias revisadas por pares; confirmar edición vigente de Spears & Gregoire; ejecutar revisión sistemática PRISMA de modelos de procesos en foodservice antes de fijar el núcleo como normativo.*
