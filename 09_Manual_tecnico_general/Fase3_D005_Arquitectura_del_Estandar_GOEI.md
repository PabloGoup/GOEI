# FASE 3 — Decisión metodológica D-005
## Arquitectura del GOEI Standard

**Tipo de documento:** diseño de la **arquitectura** del estándar (no de su contenido).
**Regla de la fase:** NO se definen dimensiones, KPI, fórmulas, pesos ni umbrales. Solo la estructura que todo el proyecto deberá seguir.
**Premisas heredadas (D-001 a D-004, provisionales):** brecha defendible; GOEI = índice compuesto **formativo**; "Salud Operacional Gastronómica" metodológicamente válida; el objeto pasa de *índice* a *estándar técnico*.
**Fecha:** 2026-08-04.

> **Etiquetas:** **[EVIDENCIA]** (cómo están construidos los estándares reales), **[ANÁLISIS]** (juicio del comité), **[PROPUESTA/PENDIENTE]**.

---

## 0. Cambio de objeto: de "índice" a "estándar" (y sus consecuencias)

Un índice es un **número**. Un estándar es un **sistema socio-técnico** que produce ese número de forma reproducible, auditable y gobernada. La lección transversal de CMMI es explícita: CMMI v2.0 no es un documento, es un **product suite** de cinco componentes —modelo, formación/certificación, guía de adopción, método de evaluación y herramientas— (**[EVIDENCIA]**). Diseñar la arquitectura del GOEI significa, por tanto, diseñar **más que el documento del índice**: significa diseñar el modelo, el esquema de conformidad, la evidencia, la gobernanza y el mantenimiento. La arquitectura de 12 niveles propuesta describe bien el **documento técnico**, pero un estándar internacional tiene capas que ese listado no contempla. Ese es el hallazgo central de esta fase (**[ANÁLISIS]**).

---

## 1. Anatomía comparada de estándares internacionales

Qué partes estructurales tiene cada referencia (**[EVIDENCIA]**):

| Estándar | Fundamento normativo | Modelo/marco | Estructura del dominio | Medición | Lógica de decisión | Aplicación/guía | Evaluación de conformidad | Gobernanza/mantenimiento |
|---|---|---|---|---|---|---|---|---|
| **ISO (Annex SL / Estructura Armonizada)** | Alcance, Referencias normativas, Términos y definiciones (bloqueados) | Cláusulas 4–10 (contexto, liderazgo…) | — | Cláusula 9 (evaluación del desempeño) | Requisitos "shall" | Anexos informativos | ISO/IEC 17065, esquemas de certificación | Directivas ISO, ciclo de revisión, comité técnico |
| **Codex / HACCP** | Definiciones, principios generales de higiene | 7 principios HACCP | Códigos de prácticas por producto | Límites críticos, monitoreo | **Límites críticos = puertas** | Códigos de práctica, guías FAO | Verificación/validación oficial | Comisión del Codex |
| **SCOR** | Terminología estandarizada | Modelo de referencia de procesos | Descomposición jerárquica (niveles 1–4) | >250 métricas jerárquicas (5 atributos) | Benchmarking | *Practices* + *People/Skills* | Benchmarking, certificación APICS | ASCM (propietario) |
| **EFQM** | — | Modelo (enablers→results) | Criterios y subcriterios | Puntaje | **Lógica RADAR** | Guías | Evaluación/premio | EFQM |
| **Shingo** | Principios | Principios→sistemas→herramientas→resultados | — | — | Evaluación de comportamientos | Guías de aplicación | **Shingo Prize** (assessment) | Shingo Institute (Utah State) |
| **PMBOK** | Glosario | — | Áreas de conocimiento | — | — | Procesos (ITTO) | Certificación PMP | PMI |
| **ITIL** | Principios rectores | Service Value System | Prácticas | — | — | Prácticas | Certificación | Axelos/PeopleCert |
| **CMMI** | — | Modelo | Áreas de proceso/práctica; **niveles de madurez/capacidad** | — | Rating de nivel | Guía de adopción; herramientas | **SCAMPI** (clases A/B/C); certificación | Product suite; ISACA |
| **Balanced Scorecard** | — | 4 perspectivas | Mapa estratégico (causa-efecto) | Medidas/metas | Iniciativas | — | — | — |
| **Ocean Health Index** | Definiciones de metas | 10 metas (marco Estado-Presión-Respuesta) | Metas/subobjetivos | Puntaje 0–100; capas de datos | **Estado de referencia**; estado + futuro | Metodología reproducible (código abierto) | Repetición anual auditada | OHI-Science |

**Patrón (**[ANÁLISIS]**):** todos comparten un **frente normativo** (alcance + términos), un **modelo**, una **medición** y una **lógica de decisión**. Los más maduros añaden tres cosas que los índices simples no tienen: **(i) un esquema de evaluación de conformidad** (SCAMPI, Shingo Prize, ISO 17065), **(ii) una gobernanza con ciclo de revisión** (Directivas ISO, Comisión Codex), y **(iii) una base de evidencia/validación** (OHI publica métodos reproducibles; los estándares alimentarios exigen *validación*).

---

## 2. Componentes estructurales universales de un estándar técnico

Síntesis de lo anterior: **diez familias de componentes** que recurren en un estándar internacional maduro (**[ANÁLISIS/EVIDENCIA]**). Se marcan las que la arquitectura de 12 niveles **ya cubre** (✓), **cubre parcialmente** (~) o **omite** (✗).

| # | Familia de componente | Función | ¿En los 12 niveles? |
|---|---|---|---|
| C1 | **Gobernanza e institución** | Propietario del esquema, comité técnico, IP/licencia, ciclo de revisión, ética y gobernanza de datos | ✗ |
| C2 | **Fundamento normativo (frente)** | Alcance y propósito, principios rectores, **términos y definiciones (glosario)**, referencias normativas | ~ (implícito en "modelo conceptual") |
| C3 | **Modelo conceptual/de referencia** | El constructo y su marco (aquí: Salud Operacional formativa) | ✓ (Nivel 1) |
| C4 | **Estructura del dominio** | Taxonomía + matriz/mapa de procesos + descomposición jerárquica | ✓ (Niveles 3, 4) |
| C5 | **Sistema de medición** | Catálogo de indicadores + **matriz de admisibilidad** + normalización + modelo de agregación | ✓ (Niveles 5, 6, 7) |
| C6 | **Lógica de decisión** | Reglas críticas no compensatorias (puertas) + escala de interpretación/clasificación | ✓ (Niveles 8, 9) |
| C7 | **Aplicación y operación** | Manual técnico general + manuales por categoría + formularios + ejemplos/herramientas | ✓ (Niveles 2, 11, 12) |
| C8 | **Evaluación de conformidad** | Protocolo de auditoría + **competencia/cualificación del evaluador** + **esquema de certificación** + acreditación/imparcialidad | ~ (Nivel 10 solo "auditoría") |
| C9 | **Base de evidencia y validación** | Dossier científico, piloto, fiabilidad/reproducibilidad, robustez, calibración de estados de referencia | ✗ |
| C10 | **Mejora continua y mantenimiento** | Retroalimentación, ciclo de revisión, control de cambios/versionado, **vigilancia anti-gaming**, formación/capacitación | ✗ |

**Diagnóstico:** de las 10 familias, la arquitectura propuesta cubre plenamente 4 (C3–C7 en parte), parcialmente 2 (C2, C8) y **omite 3 críticas: C1 (gobernanza), C9 (validación) y C10 (mantenimiento)**. Precisamente C9 (validación) es lo que —según D-001— separa un estándar de "otro KPI". Su ausencia en la arquitectura es el defecto más grave. (**[ANÁLISIS clave]**)

---

## 3. Evaluación de la arquitectura de 12 niveles propuesta

### 3.1 ¿Es suficiente? — **No.** Es un buen esqueleto del *documento técnico*, pero no del *estándar*. Faltan las capas institucional (C1), de validación (C9) y de mantenimiento (C10), y el esquema de conformidad está subdimensionado (C8).

### 3.2 ¿Falta algo? — Sí, siete componentes:
1. **Glosario / términos y definiciones** como pieza propia y anterior (norma ISO: términos bloqueados al frente). Hoy está disuelto en "modelo conceptual".
2. **Alcance y principios rectores** explícitos (qué mide y qué NO mide el estándar; a quién aplica).
3. **Base de evidencia y validación** (dossier científico, piloto, fiabilidad, robustez): el corazón de un estándar científico.
4. **Esquema de evaluación de conformidad completo** (no solo "auditoría"): método de evaluación con clases de rigor (cf. SCAMPI A/B/C), **cualificación del evaluador**, certificación e imparcialidad (cf. ISO 17065).
5. **Gobernanza**: propietario del estándar, comité técnico, IP/licencia, ética y **gobernanza de datos**.
6. **Mantenimiento y versionado**: ciclo de revisión, control de cambios, compatibilidad entre versiones.
7. **Vigilancia anti-gaming** (Ley de Goodhart): mecanismo para detectar que el índice deje de medir lo que mide al volverse objetivo.

### 3.3 ¿Sobra algo? — **No sobra, pero hay agrupamiento incorrecto.** "Manual Técnico General" (N2), "Formularios" (N11) y "Manuales por categoría" (N12) son **una misma capa de aplicación** dispersa en tres puntos no contiguos. No son redundantes, pero deben convivir. Y el "Manual Técnico General" en N2 está **fuera de lugar por prematuro**: el manual es el *empaquetado* de los niveles técnicos (taxonomía→interpretación), luego no puede preceder a lo que empaqueta.

### 3.4 ¿El orden es correcto? — **Parcialmente.** Aciertos: el flujo modelo→taxonomía→procesos→indicadores→normalización→matemática→reglas→interpretación es lógicamente correcto (no se puede normalizar lo que no se ha definido). Errores de orden:
- El **glosario/alcance** debe ir **primero**, no disuelto en N1.
- El **Manual Técnico General (N2)** debe ir **después** del núcleo técnico, no en segundo lugar.
- La **auditoría (N10)** no es un "nivel" secuencial sino un **esquema paralelo** que consume el núcleo técnico; su sitio es un plano aparte, no un peldaño.
- La **validación** debería actuar como **compuerta previa a la publicación**, no aparecer en ningún lugar del listado (hoy no aparece).

**Síntesis del diagnóstico:** la arquitectura de 12 niveles es un **eje normativo correcto pero plano e incompleto**; confunde niveles secuenciales con planos transversales y omite las capas que convierten un índice en estándar. (**[ANÁLISIS]**)

---

## 4. Arquitectura propuesta para el GOEI Standard

Se propone sustituir el listado plano por una arquitectura de **un eje normativo secuencial** envuelto por **planos transversales** y acompañado por un **esquema de conformidad paralelo** —la forma canónica de un estándar internacional (ISO + CMMI product suite). (**[PROPUESTA/PENDIENTE de ratificación]**)

### 4.1 Vista de conjunto

```
                    ┌────────────────────────────────────────────────┐
   PLANO T1  ──────►│  GOBERNANZA E INSTITUCIÓN (propietario, comité, │
   (transversal)    │  IP, ética y gobernanza de datos, versionado)   │
                    └────────────────────────────────────────────────┘
                    ┌────────────────────────────────────────────────┐
   PLANO T2  ──────►│  TERMINOLOGÍA Y GLOSARIO (definiciones bloqueadas)│
   (transversal)    └────────────────────────────────────────────────┘

   EJE NORMATIVO (secuencial, cada capa depende de la anterior):
   N0  Fundamento normativo ....... alcance, propósito, principios, referencias
   N1  Modelo conceptual .......... constructo formativo "Salud Operacional"
   N2  Taxonomía de establecimientos
   N3  Matriz/mapa de procesos
   N4  Sistema de indicadores ..... catálogo + matriz de admisibilidad
   N5  Sistema de normalización ... a escala común
   N6  Modelo matemático .......... agregación formativa
   N7  Reglas críticas ............ puertas no compensatorias
   N8  Interpretación ............. escala y clasificación
   N9  Capa de aplicación ......... Manual Técnico General + Manuales por
                                    categoría + Formularios + ejemplos/herramientas

                    ┌────────────────────────────────────────────────┐
   PLANO T3  ──────►│  VALIDACIÓN Y EVIDENCIA (dossier, piloto,       │
   (compuerta)      │  fiabilidad, robustez, calibración de referencia)│◄─ gate previo a publicar
                    └────────────────────────────────────────────────┘

   ESQUEMA PARALELO DE CONFORMIDAD (consume N0–N9):
   K1  Protocolo de evaluación/auditoría (clases de rigor)
   K2  Cualificación y competencia del evaluador
   K3  Esquema de certificación e imparcialidad
   K4  Acreditación / reconocimiento

                    ┌────────────────────────────────────────────────┐
   PLANO T4  ──────►│  MEJORA CONTINUA (retroalimentación, ciclo de   │
   (transversal)    │  revisión, control de cambios, vigilancia anti-gaming,│
                    │  formación y capacitación)                       │
                    └────────────────────────────────────────────────┘
```

### 4.2 Descripción de las capas

**Planos transversales (tocan todas las capas):**
- **T1 Gobernanza e institución** — quién es dueño del estándar, cómo se decide, IP/licencia, ética, **gobernanza de datos** (privacidad de los establecimientos evaluados). Sin esto no hay estándar, solo un documento.
- **T2 Terminología y glosario** — definiciones estables y "bloqueadas" (modelo ISO Annex SL) que todas las capas deben usar idénticamente; garantiza coherencia terminológica (principio del proyecto).
- **T3 Validación y evidencia** — *compuerta*: ninguna versión del estándar se publica como referencia sin dossier de validación (contenido, criterio, fiabilidad, reproducibilidad, robustez, calibración de estados de referencia). Es la respuesta directa al riesgo R de D-001.
- **T4 Mejora continua** — ciclo de revisión, versionado, control de cambios, **vigilancia anti-gaming** y formación.

**Eje normativo (secuencial):** N0→N9 conserva y completa la propuesta original, con el glosario/alcance al frente (N0) y la aplicación consolidada al final (N9).

**Esquema paralelo de conformidad (K1–K4):** define cómo se **audita y certifica** el cumplimiento —separado del eje porque *usa* el estándar, no *forma parte* de su construcción. Distingue el documento (norma), el esquema (certificación) y el organismo (gobernanza), como hacen ISO/IEC 17065 y CMMI/SCAMPI.

### 4.3 Distinción normativo vs. informativo (regla ISO)
Cada capa debe etiquetarse como **normativa** (requisito obligatorio, "debe") o **informativa** (guía, ejemplo). Propuesta inicial: N0–N8, T2, T3 y K1–K4 = **normativos**; N9 (manuales, formularios, ejemplos), T1 parcialmente y las herramientas = **informativos**. Esto evita que guías de aplicación se confundan con requisitos.

---

## 5. Correspondencia arquitectura propuesta ↔ 12 niveles originales

| Original | Destino en la nueva arquitectura | Cambio |
|---|---|---|
| N1 Modelo conceptual | N1 (y N0 absorbe alcance/principios) | Se antepone N0 y T2 |
| N2 Manual Técnico General | N9 (capa de aplicación) | **Reubicado al final** |
| N3 Taxonomía | N2 | Reordenado |
| N4 Catálogo de procesos | N3 | Reordenado |
| N5 Sistema de indicadores | N4 (+ matriz de admisibilidad) | Se explicita la admisibilidad |
| N6 Normalización | N5 | = |
| N7 Modelo matemático | N6 | = |
| N8 Reglas críticas | N7 | = |
| N9 Interpretación | N8 | = |
| N10 Auditoría | **K1–K4** (esquema paralelo) | **Promovido a esquema de conformidad completo** |
| N11 Formularios | N9 (aplicación) | Agrupado |
| N12 Manuales por categoría | N9 (aplicación) | Agrupado |
| — | **T1 Gobernanza** | **Nuevo** |
| — | **T2 Glosario** | **Nuevo (extraído)** |
| — | **T3 Validación** | **Nuevo (crítico)** |
| — | **T4 Mejora continua** | **Nuevo** |

---

## 6. Veredicto y preguntas abiertas

**Veredicto (**[ANÁLISIS]**):** la arquitectura de 12 niveles es **necesaria pero no suficiente**. Captura correctamente el **eje normativo técnico** (con dos reubicaciones: manual y auditoría), pero **omite las tres capas que definen un estándar frente a un índice**: gobernanza (T1), validación (T3) y mantenimiento (T4), y subdimensiona la conformidad (K1–K4). La arquitectura propuesta —eje normativo + planos transversales + esquema paralelo— es la forma canónica que usan ISO, Codex, CMMI y OHI, y es la que el comité recomienda adoptar como **columna vertebral de todo el proyecto**.

**Preguntas que hereda la Fase 4 (contenido):**
1. ¿El comité adopta la distinción **eje normativo / planos transversales / esquema paralelo**, o prefiere el listado plano por simplicidad de gestión?
2. ¿Se acepta que la **validación (T3) sea compuerta obligatoria** previa a declarar cualquier versión como "estándar"?
3. ¿El GOEI aspira a **certificación de terceros** (K1–K4 completos) o solo a **autoevaluación** (subconjunto de K)? Decide el alcance institucional.
4. ¿Quién será el **propietario/gobernanza** (T1): universidad, asociación gremial, organismo de normalización)? Sin dueño, el estándar no puede mantenerse.
5. ¿Se etiqueta desde ya cada capa como **normativa o informativa**?

---

### Fuentes

- ISO/IEC — *Annex SL / Estructura Armonizada* (alcance, referencias normativas, términos y definiciones, cláusulas 4–10). https://en.wikipedia.org/wiki/Annex_SL · guía: https://cdn.standards.iteh.ai/samples/86702/8f41fa2567644fb6b27ba4a6e76659d3/ISO-DGuide-83.pdf
- ISO/IEC 17065:2012 — *Conformity assessment — Requirements for bodies certifying products, processes and services*; serie ISO/IEC 17000. https://www.iso.org/obp/ui/#iso:std:iso-iec:17065:ed-1:v1:en
- CMMI v2.0 — product suite (modelo, formación/certificación, guía de adopción, método de evaluación, herramientas); SCAMPI A/B/C. https://en.wikipedia.org/wiki/Standard_CMMI_Appraisal_Method_for_Process_Improvement · https://en.wikipedia.org/wiki/Process_area_(CMMI)
- SCOR — modelo de referencia (procesos, métricas, prácticas, personas; descomposición jerárquica). https://en.wikipedia.org/wiki/Supply_chain_operations_reference
- EFQM (enablers/results, lógica RADAR). https://umbrex.com/resources/frameworks/organization-frameworks/efqm-excellence-model/
- Shingo Model / Shingo Prize (principios→sistemas→herramientas→resultados; assessment). https://uen.pressbooks.pub/opexintro/chapter/intro-to-shingo/
- Codex Alimentarius / HACCP (principios, límites críticos, validación/verificación). FAO.
- Ocean Health Index (marco de metas, estado de referencia, 0–100, métodos reproducibles). https://www.nature.com/articles/nature11397 · https://oceanhealthindex.org/images/htmls/Supplement.html
- Balanced Scorecard (perspectivas, mapa estratégico). Kaplan & Norton (1992).

*Verificación pendiente (Fase 1): confirmar edición vigente de ISO/IEC Directives Annex SL y de ISO/IEC 17065; contrastar estructura Codex (CXC 1-1969, principios generales de higiene) antes de citar en la tesis.*
