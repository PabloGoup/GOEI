# FASE 4 — D-006 (Revisión y cierre)
## Refinamiento de la ontología del GOEI: realismo, recursos, intercambio económico y ontología dinámica

**Tipo de documento:** revisión de D-006 en respuesta a las cinco observaciones del comité; cierre condicional de la ontología.
**Regla de la fase:** sigue sin definirse contenido (dimensiones/KPI/fórmulas). Solo estructura.
**Fecha:** 2026-08-04.

> **Etiquetas:** **[EVIDENCIA]**, **[ANÁLISIS]**, **[PROPUESTA/PENDIENTE]**.
> **Marcos añadidos:** REA (Resource-Event-Agent, McCarthy, 1982); PROV-O (W3C, ontología de procedencia: Entity/Activity/Agent/tiempo); realismo BFO / artefacto de información (IAO).

El comité acierta en los cinco puntos. Ninguno es cosmético: tres de ellos (1, 4 y 5) **corrigen errores estructurales** de la versión inicial. Se resuelven uno a uno y se integra el resultado.

---

## Punto 1 — El Estándar NO es la raíz: compromiso realista

**Observación aceptada.** En la v1, el Estándar aparecía como definidor de todo, lo que sugería —incorrectamente— que el estándar es la raíz del universo. Es un error de **anti-realismo**: confunde el *mapa* con el *territorio*. (**[ANÁLISIS]**)

**Corrección (compromiso realista, BFO/IAO):** la realidad gastronómica es primaria; el Estándar es un **artefacto de información** (un *continuante genéricamente dependiente*) que **representa y prescribe** cómo evaluar esa realidad, no la constituye. Esto obliga a separar **tres estratos** (**[EVIDENCIA]** realismo BFO; **[ANÁLISIS]**):

| Estrato | Qué contiene | Estatus ontológico |
|---|---|---|
| **R — Realidad** | Industria gastronómica, Establecimiento, Operación, Recursos, Eventos, Agentes, Productos, Pedidos, Clientes | Lo que **existe** |
| **N — Norma (representación prescriptiva)** | Estándar y sus *types*: Dimensiones, KPI-def, Condiciones de referencia, Reglas críticas, Bandas | Artefactos de información **sobre** R (prescriben cómo medir) |
| **D — Datos (representación descriptiva)** | Observaciones, Valores de KPI, Resultados GOEI, Auditorías, Certificaciones | Artefactos de información **sobre** una instancia concreta de R, **según** N |

**¿Cuál es la raíz, entonces?** Hay que distinguir tres nociones que no coinciden (**[ANÁLISIS]**):
- **Universo de discurso (alcance):** la **Industria gastronómica** — el conjunto/población que delimita el dominio. Es el *techo del alcance*, no un objeto que actúa.
- **Entidad focal / ancla de medición:** el **Establecimiento** — el *continuante independiente* que **porta la cualidad** que el GOEI mide (CO-3). Es la raíz del subárbol de medición y la unidad de análisis.
- **Comportamiento:** la **Operación** — un *ocurrente* que el establecimiento **realiza**; NO es raíz, es proceso en el que el establecimiento participa.

**Resolución:** la raíz del **dominio** es la Industria gastronómica (alcance); el **ancla ontológica** es el Establecimiento (portador de la cualidad); la Operación es comportamiento; y el **Estándar se degrada** de "raíz" a "artefacto normativo del estrato N". (**Nuevo compromiso CO-6 — Realismo.**)

---

## Punto 2 — Incorporación explícita del Recurso

**Observación aceptada.** El Recurso es una entidad fundamental ausente. En REA (McCarthy, 1982), el **Recurso económico** es uno de los tres pilares (Resource-Event-Agent) precisamente porque los eventos **usan, consumen o producen** recursos —y muchos KPI miden utilización/disponibilidad/desempeño de recursos. (**[EVIDENCIA]**)

**Nueva entidad: Recurso** (estrato R, continuante), con subtipos y una distinción clave:

| Subtipo de Recurso | Ejemplos | Tipo | Naturaleza de stock/flujo |
|---|---|---|---|
| **Personas** | Personal, dotación | Recurso **y** Agente (doble tipado) | Renovable (capacidad-tiempo) |
| **Equipamiento** | Cocina, mobiliario, equipos | Recurso durable | Renovable (se utiliza) |
| **Tiempo** | Horas-servicio, horas-hombre | Recurso-marco | Flujo perecedero |
| **Espacio** | Asientos, m², capacidad | Recurso-marco | Renovable (capacidad) |
| **Ingredientes** | Insumos, materia prima | Recurso material | **Consumible** |
| **Capital** | Efectivo, financiamiento | Recurso económico | Flujo/stock |
| **Información** | Datos, recetas, conocimiento | Recurso informacional | No rival |
| **Tecnología** | Software, sistemas | Recurso habilitador | Renovable |

**Atributos-ranura del Recurso:** id, tipo, capacidad, disponibilidad, estado, unidad de medida, propietario (establecimiento).
**Relaciones:** `Recurso ──pertenece_a──► Establecimiento`; `Evento ──{usa|consume|produce}──► Recurso`.
**Doble tipado (nuevo AX-13):** una **Persona** es simultáneamente **Agente** (estructura activa, actúa) y fuente de un **Recurso** (trabajo/tiempo-personal, que se utiliza). No confundir el agente con su capacidad utilizable. (**[ANÁLISIS]**)
**Distinción operativa:** recursos **renovables/marco** (espacio, equipo, tiempo) sostienen medidas de *utilización/disponibilidad*; recursos **consumibles** (ingredientes, capital) sostienen medidas de *rendimiento/merma*. (Relevante para la futura admisibilidad de KPI, sin definirlos aún.)

---

## Punto 3 — Producto, Servicio, Pedido y Cliente

**Observación aceptada: son entidades fundamentales**, y REA les da un lugar exacto en el **patrón de intercambio económico** (**[EVIDENCIA]**):

| Entidad | Rol REA | Estatus ontológico | Justificación |
|---|---|---|---|
| **Producto** | Recurso (output tangible) | Continuante | Es un Recurso producido por la Operación y entregado al Cliente (p. ej., un plato) |
| **Servicio** | Recurso/prestación (output intangible) | Ocurrente-provisión | La provisión de valor intangible al Cliente (la experiencia de servicio) |
| **Pedido** | **Compromiso** (commitment) | Continuante-compromiso | REA: una orden de venta es una **promesa** de un evento económico futuro; ancla la relación entre demanda y cumplimiento |
| **Cliente** | **Agente** (externo) | Continuante/Agente | Contraparte del intercambio; receptor del valor |

**Backbone de intercambio económico (nuevo):**
`Establecimiento(Agente) ──provee──► {Producto|Servicio}(Recurso) ──a──► Cliente(Agente)` mediante `Pedido(Compromiso)` cumplido por `Eventos económicos` (venta, entrega). Sobre este backbone se apoyarán muchos KPI (ticket, rotación, RevPASH…), por lo que debe existir en la ontología **antes** de diseñarlos. (**[ANÁLISIS]**)
**Generalización:** se introduce **Agente** como superclase de Evaluador, Operador, Cliente y Proveedor (estructura activa, CO-4).

---

## Punto 4 — Ontología dinámica (procesos y eventos)

**Observación aceptada, con un matiz importante.** La v1 describe entidades (vista **estructural**) pero no el **flujo**. Sin embargo, el comité pregunta si hace falta una *segunda ontología*. **Recomendación: NO una segunda ontología separada, sino una única ontología con dos VISTAS integradas** —estructural y dinámica— sobre el mismo universo. (**[ANÁLISIS]**) Dos ontologías desconectadas es un anti-patrón (se desincronizan); ArchiMate ya separa *estructura* y *comportamiento* dentro de **un** metamodelo, y REA hace pivotar todo sobre el **Evento**. (**[EVIDENCIA]**)

**Vista dinámica — nuevas entidades (estrato R, ocurrentes):**

| Entidad | Definición ontológica | Referencia |
|---|---|---|
| **Evento** | Ocurrente atómico: un suceso en un instante/intervalo corto que **cambia estado** y **usa/consume/produce** recursos (p. ej., pedido tomado, plato servido, recepción de insumo, lectura de temperatura) | REA *economic event*; PROV *Activity*; BFO *process boundary* |
| **Proceso** | Ocurrente estructurado con partes temporales, compuesto de eventos/actividades (p. ej., ciclo de servicio, aprovisionamiento) | BFO *process*; ya existía como Tipo/Ejecución de proceso |
| **Flujo** | Relación de orden entre eventos/procesos (precede, dispara, informa) | PROV `wasInformedBy`; DEMO transaction pattern |
| **Transición de estado** | Efecto de un evento sobre el ciclo de vida de una entidad (§6 de D-006) | Vincula eventos con máquinas de estado |

**Relaciones dinámicas nucleares:**
```
Proceso ──se_compone_de──► {Evento}*
Evento ──{usa|consume|produce}──► Recurso
Evento ──ejecutado_por──► Agente
Evento ──ocurre_en──► Periodo
Evento ──genera──► Observación
Evento ──dispara──► Transición de estado (de Establecimiento/Pedido/…)
Pedido(compromiso) ──se_cumple_mediante──► {Evento económico}*
```

**Resolución:** el GOEI requiere la **capa dinámica**, integrada como *vista de comportamiento* de la misma ontología (no una segunda ontología). El **Evento** pasa a ser la entidad-pivote que conecta lo estructural (recursos, agentes) con lo medible (observaciones). (**Nuevo compromiso CO-7 — una ontología, dos vistas.**)

---

## Punto 5 — Anclaje cuádruple de toda observación

**Observación aceptada y verificable.** El requisito —que toda observación se ubique simultáneamente en entidad + proceso + evento + periodo— es exactamente el modelo de **procedencia PROV-O** (**[EVIDENCIA]**): un dato (`prov:Entity`) `wasGeneratedBy` una `Activity` que `used` entidades, `wasAttributedTo` un agente y ocurrió en un tiempo (`startedAtTime`/`endedAtTime`).

**Nuevo axioma AX-11 (anclaje cuádruple de la observación):** toda `Observación` admisible DEBE poder ubicarse simultáneamente en:
1. **Entidad** — el portador/sujeto del que trata (un Recurso, el Establecimiento, un Producto…): la *aboutness*. → `es_acerca_de`
2. **Proceso** — la ejecución de proceso dentro de la cual surge. → `ocurre_dentro_de`
3. **Evento** — el evento de medición que la generó. → `wasGeneratedBy`
4. **Periodo** — la región temporal. → `startedAtTime/endedAtTime`
(+ opcionalmente **Agente** que midió → `wasAttributedTo`, y **Evidencia** que la soporta.)

**Mapeo PROV-O explícito:**
`Observación = prov:Entity` · `Evento de medición = prov:Activity` · `Evaluador = prov:Agent` · `Periodo = prov:atTime` · propiedades `used / wasGeneratedBy / wasAttributedTo / wasDerivedFrom`.

**Consecuencia (regla de admisibilidad de datos):** una observación que **no** pueda anclarse en las cuatro coordenadas es **inadmisible**. Esto convierte AX-11 en una **compuerta de calidad del dato** y refuerza la trazabilidad (AX-10). Responde afirmativamente a la comprobación pedida: **sí**, toda observación bien formada admite el anclaje cuádruple; y el estándar **rechaza** las que no. (**[ANÁLISIS]**)

**Verificación cruzada (ejemplo abstracto, sin contenido):** una lectura de temperatura de cámara → Entidad: el Recurso "equipo de refrigeración"; Proceso: "control de conservación"; Evento: "toma de lectura"; Periodo: la ventana; Agente: quien mide; Evidencia: registro. Cuádruple anclaje satisfecho. (**[ANÁLISIS]**)

---

## Integración: ontología revisada (síntesis)

**Compromisos ontológicos (actualizados):**
- CO-1..CO-5 (D-006) se conservan.
- **CO-6 (Realismo):** la realidad es primaria; Norma (N) y Datos (D) son representaciones; el Estándar deja de ser raíz. Ancla = Establecimiento; alcance = Industria; Operación = comportamiento.
- **CO-7 (Una ontología, dos vistas):** vista estructural + vista dinámica (evento-céntrica), integradas.

**Entidades añadidas:** Industria gastronómica (alcance); Recurso (+8 subtipos); Agente (superclase); Producto; Servicio; Pedido (compromiso); Cliente; Evento; Flujo; Transición de estado.

**Axiomas añadidos:**
- **AX-11** anclaje cuádruple de la observación (compuerta de calidad del dato).
- **AX-12** (conservación económica): todo Evento económico usa/consume/produce ≥1 Recurso.
- **AX-13** (doble tipado): Persona = Agente + fuente de Recurso; no confundir.

**Vista integrada (tres estratos):**
```
  R (REALIDAD)   Industria ⊃ Establecimiento ─realiza─► Operación ⊃ Procesos ⊃ Eventos
                 Establecimiento porta► [Cualidad: Salud Operacional]
                 Eventos {usan|consumen|producen} Recursos ; ejecutados por Agentes
                 Establecimiento(Agente) ─provee─► Producto/Servicio ─a─► Cliente(Agente)
                        vía Pedido(Compromiso)
                        │  (los Eventos generan…)
                        ▼
  D (DATOS)      Observación ─(ancla AX-11: entidad+proceso+evento+periodo)─► 
                 Valor-KPI ─► Resultado GOEI ; Auditoría ; Certificación
                        ▲
                        │ conforme a
  N (NORMA)      Estándar(v) define► Dimensiones, KPI-def, Cond.-referencia, 
                 Reglas críticas, Bandas   [artefactos de información SOBRE R]
```

---

## Cierre de D-006

**Estado: APROBADO CON REVISIONES.** Las cinco observaciones se incorporan; la ontología queda con **tres estratos (R/N/D)**, **dos vistas (estructural/dinámica)**, catálogo ampliado de entidades, y **13 axiomas**. Con esto se satisface el objetivo de la fase: **toda observación tiene referente único y anclaje cuádruple**, condición necesaria para escribir el modelo matemático sin ambigüedad.

**Lo que sigue sin hacerse (deliberado):** ninguna dimensión, KPI, fórmula, peso, umbral ni condición de referencia concreta.

**Preguntas que hereda la fase siguiente:**
1. ¿Se ratifican CO-6 (realismo, tres estratos) y CO-7 (una ontología, dos vistas)?
2. ¿Se adopta AX-11 como **compuerta de admisibilidad del dato** (rechazo de observaciones sin anclaje cuádruple)?
3. Unidad de análisis y tratamiento de cadenas (heredada, aún abierta).
4. ¿La capa dinámica se documentará como **vista** dentro del Manual Técnico (N1) o como anexo normativo propio?

---

### Fuentes

- McCarthy, W.E. (1982), *The REA Accounting Model* — Resource-Event-Agent; extensión a compromisos (commitments) y cadenas de valor. https://en.wikipedia.org/wiki/Resources,_Events,_Agents · https://www.researchgate.net/publication/228583572_The_Ontological_Foundation_of_REA_Enterprise_Information_Systems
- W3C (2013), *PROV-O: The PROV Ontology* — Entity/Activity/Agent; `used`, `wasGeneratedBy`, `wasAttributedTo`, `atTime`. https://www.w3.org/TR/prov-o/ · mapeo a BFO: https://www.nature.com/articles/s41597-025-04580-1
- Smith, B. et al. — *Basic Formal Ontology* (realismo; continuante genéricamente dependiente / artefacto de información). http://ontology.buffalo.edu/smith/articles/Material_Entities.pdf
- ArchiMate/TOGAF — separación estructura/comportamiento en un único metamodelo. https://archimatetool.gitbook.io/quick_guide/archimate-core-metamodel
- Dietz, J. — DEMO transaction pattern (flujo/coordinación). https://link.springer.com/book/10.1007/978-3-030-38854-6

*Verificación pendiente (Fase 1): confirmar McCarthy (1982, The Accounting Review) y la recomendación W3C PROV-O (2013) antes de citar en la tesis.*
