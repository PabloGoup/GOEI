# FASE 4 — Decisión metodológica D-006
## Ontología conceptual del GOEI

**Tipo de documento:** ontología conceptual (universo de entidades del estándar). No es diseño de contenido.
**Regla de la fase:** NO se definen dimensiones concretas, KPI, fórmulas ni pesos. Se define **qué clases de entidades existen**, sus atributos (ranuras, no valores), relaciones, jerarquías, restricciones y ciclos de vida.
**Objetivo:** que al cerrar esta fase el modelo matemático pueda construirse **sin ambigüedad**, porque cada término tendrá un referente ontológico único.
**Fecha:** 2026-08-04.

> **Etiquetas:** **[EVIDENCIA]** (marcos ontológicos reales), **[ANÁLISIS]** (decisión de modelado del comité), **[PROPUESTA/PENDIENTE]**.

---

## 0. Marcos de referencia analizados

| Marco | Aporte a la ontología del GOEI | Ref. |
|---|---|---|
| **Componentes de ontología** (Gruber, 1993) | Toda ontología se compone de **clases, instancias, atributos, relaciones y axiomas**; ontología = "especificación explícita de una conceptualización" | **[EVIDENCIA]** |
| **Basic Formal Ontology (BFO)** — Smith | Distinción **continuante** (perdura: establecimiento, categoría) vs **ocurrente** (sucede en el tiempo: evaluación, proceso); **continuante independiente** (portador) vs **continuante dependiente** (cualidad que inhiere en un portador) | **[EVIDENCIA]** |
| **Enterprise Ontology** (Uschold & King; Dietz, DEMO) | Términos fundacionales de la empresa: **entidad, relación, actor**; áreas actividad/organización/estrategia | **[EVIDENCIA]** |
| **ArchiMate / TOGAF (metamodelo)** | Separar **estructura activa** (actores), **comportamiento** (procesos, evaluaciones) y **estructura pasiva** (datos, evidencia, formularios) | **[EVIDENCIA]** |
| **Niveles type/token/metamodelo** | **Token** = entidad individual; **type** = clase; **metamodelo** = generalización. El Estándar es un **metamodelo** que define types; una evaluación produce **tokens** | **[EVIDENCIA]** |

De estos marcos derivan las cinco decisiones ontológicas que estructuran todo el universo GOEI.

---

## 1. Cinco compromisos ontológicos (los que eliminan la ambigüedad)

**CO-1 — Dos planos: Definicional (type) vs Operacional (token).** *La distinción más importante.* El **Estándar** define **tipos** (p. ej., "la definición del KPI X"); una **evaluación** produce **tokens** (p. ej., "el valor de X para el establecimiento E en el periodo P"). Confundir "un KPI" (la definición) con "un valor de KPI" (la medición) es la ambigüedad que hace imposible un modelo matemático limpio. **Se prohíbe usar la palabra "KPI" sin decir si se refiere al *type* o al *token*.** (**[ANÁLISIS clave]**)

**CO-2 — Continuante vs Ocurrente (BFO).** Perduran (continuantes): Establecimiento, Categoría, Dimensión, Definición-de-KPI, Condición de referencia, Regla crítica, Estándar. Suceden en el tiempo (ocurrentes): Operación, Ejecución-de-proceso, Observación, Evaluación, Auditoría. Esta partición fija qué entidades llevan **estados temporales** (ciclos de vida) y cuáles no.

**CO-3 — El GOEI mide una *cualidad* (continuante dependiente).** La "Salud Operacional" es una **cualidad que inhiere en el Establecimiento** (portador), no una cosa autónoma. Un **Resultado GOEI** es una **estimación de esa cualidad** en un momento, obtenida a través de valores de KPI. Semántica limpia para el modelo matemático: *Resultado ≈ estimador de una cualidad del portador en un periodo.* (**[ANÁLISIS]**)

**CO-4 — Estructura activa / comportamiento / estructura pasiva (ArchiMate).** Actores (Evaluador, Operador) = activos; Procesos y Evaluaciones = comportamiento; Evidencia, Formularios, Datos = pasivos. Impide mezclar "quién actúa", "qué ocurre" y "qué se registra".

**CO-5 — Identidad y marco temporal.** Cada entidad tiene un **criterio de identidad** explícito (qué la hace ser la misma) y, si es ocurrente, un **periodo**. Una **cadena** de locales = **múltiples** instancias de Establecimiento (cada local es un token), no una sola. Todo valor de KPI está **anclado a un periodo**. (**[ANÁLISIS]**)

---

## 2. Catálogo de entidades

Notación: **[C]** continuante, **[O]** ocurrente, **[A]** actor/estructura activa, **[P]** estructura pasiva. Los atributos son **ranuras estructurales** (no valores de contenido).

### 2.1 PLANO DEFINICIONAL (types — definidos por el Estándar)

| Entidad | Descripción ontológica | Atributos (ranuras) | Naturaleza |
|---|---|---|---|
| **Estándar GOEI (versión)** | Metamodelo normativo que define todos los demás types | id-versión, estado, fecha, alcance, mapa de compatibilidad con otras versiones | [C] |
| **Categoría** | Clase de establecimiento en la taxonomía | id, nombre, criterios de pertenencia, categoría-padre, dimensiones/KPI aplicables | [C] |
| **Dimensión** | Componente **formativo** del constructo | id, nombre, definición, sub-dimensiones, condición de referencia asociada | [C] |
| **Sub-dimensión** | Parte de una dimensión | id, dimensión-padre | [C] |
| **Tipo de proceso** | Proceso de referencia en la matriz de procesos | id, nombre, macro-proceso, dimensión(es) que toca | [C] |
| **Definición de KPI** | Especificación de un medible (NO un valor) | id, nombre, dimensión, unidad original, **dirección de bondad**, fuente de dato, frecuencia, regla de normalización, estado de admisibilidad, categorías aplicables | [C] |
| **Definición de métrica/variable** | Variable cruda que alimenta un KPI | id, unidad, tipo de dato, método de captura | [C] |
| **Regla de normalización** | Transformación a escala común | id, tipo de transformación, referencia usada | [C] |
| **Condición de referencia** | Patrón normativo de "operación sana" (qué es 0 y 100) | id, dimensión/KPI, base (norma/empírica/experta), ancla inferior/superior | [C] |
| **Regla crítica (compuerta)** | Restricción **no compensatoria** (inocuidad, legalidad) | id, condición de activación, efecto sobre el resultado | [C] |
| **Esquema de ponderación** | Entidad que porta la importancia relativa (contenido posterior) | id, alcance, método | [C] |
| **Banda de interpretación** | Nivel de clasificación del resultado | id, etiqueta, rango, orden | [C] |
| **Criterio de admisibilidad** | Condiciones que un KPI debe cumplir para entrar | id, criterios (medible, trazable, auditable, repetible…) | [C] |
| **Definición de formulario/instrumento** | Plantilla de captura | id, campos, KPI/observaciones que recoge | [C][P] |
| **Perfil de competencia del evaluador** | Cualificación exigida | id, requisitos, alcance de categorías | [C] |

### 2.2 PLANO OPERACIONAL (tokens — producidos en aplicación)

| Entidad | Descripción ontológica | Atributos (ranuras) | Naturaleza |
|---|---|---|---|
| **Establecimiento** | Portador independiente; unidad de análisis (un local) | id, categoría (clasificación), identidad, datos de registro, estado | [C][A] |
| **Perfil/Registro de establecimiento** | Instanciación administrativa del establecimiento | id, establecimiento, categoría asignada, fecha de alta | [C][P] |
| **Operación** | Totalidad ocurrente de procesos de valor que el establecimiento realiza | id, establecimiento, alcance temporal | [O] |
| **Ejecución de proceso** | Instancia de un Tipo de proceso | id, tipo de proceso, establecimiento, periodo | [O] |
| **Observación / Medición** | Acto de captar una variable cruda; produce un dato | id, métrica, valor crudo, periodo, fuente, evidencia | [O]→[P] |
| **Valor de KPI** | Cualidad estimada: instancia de una Definición de KPI para un establecimiento/periodo (crudo y normalizado) | id, KPI-def, establecimiento, periodo, valor crudo, valor normalizado | [C dependiente][P] |
| **Evaluación** | Evento que vincula establecimiento + versión + periodo y produce el resultado | id, establecimiento, versión de estándar, periodo, estado, evaluador | [O] |
| **Resultado GOEI** | Salida: estimación de la cualidad (puntaje + clasificación + estado de compuertas) | id, evaluación, puntajes por dimensión, resultado de reglas críticas, banda | [C dependiente][P] |
| **Evidencia** | Soporte verificable de observaciones | id, tipo, observación soportada, fecha | [P] |
| **Evaluador** | Actor que ejecuta/auditar la evaluación | id, perfil de competencia, acreditación | [A] |
| **Auditoría** | Ocurrente que verifica una evaluación | id, evaluación auditada, evaluador, clase de rigor, hallazgos | [O] |
| **No conformidad / Hallazgo** | Desviación detectada en auditoría | id, auditoría, severidad, estado | [C][P] |
| **Certificación** | Resultado de la evaluación de conformidad | id, establecimiento, resultado, auditoría, vigencia, estado | [C][P] |
| **Periodo** | Región temporal de medición | id, inicio, fin | [O/región] |

---

## 3. Modelo de relaciones (relaciones nucleares)

```
Establecimiento ──clasificado_como──► Categoría ──delimita_aplicabilidad──► {Dimensión, KPI-def}
Dimensión ──compone(formativo)──► Constructo(Salud Operacional)
KPI-def ──pertenece_a──► Dimensión
KPI-def ──gobernado_por──► Regla de normalización
KPI-def ──evaluado_contra──► Condición de referencia
KPI-def ──debe_cumplir──► Criterio de admisibilidad
Regla crítica ──restringe(no compensa)──► Resultado GOEI

Evaluación ──evalúa──► Establecimiento
Evaluación ──usa──► Estándar(versión)
Evaluación ──cubre──► Periodo
Evaluación ──produce──► Resultado GOEI
Evaluación ──genera──► {Valor de KPI}*        (uno por KPI-def aplicable)
Valor de KPI ──instancia_de──► KPI-def
Valor de KPI ──derivado_de──► {Observación}*
Observación ──soportada_por──► Evidencia
Resultado GOEI ──clasificado_en──► Banda de interpretación

Auditoría ──verifica──► Evaluación
Auditoría ──ejecutada_por──► Evaluador
Evaluador ──posee──► Perfil de competencia
Certificación ──basada_en──► (Auditoría + Resultado GOEI)
```

**Relación semántica central (CO-3):** `Resultado GOEI` **estima** la cualidad "Salud Operacional" que **inhiere_en** el `Establecimiento` durante un `Periodo`, según la `versión` del Estándar. (**[ANÁLISIS]**)

---

## 4. Jerarquías

Cuatro jerarquías **distintas** que no deben confundirse (**[ANÁLISIS]**):

1. **Taxonómica (is-a)** — Categoría → subcategorías (árbol de tipos de establecimiento).
2. **Composicional / mereológica (part-of)** — Constructo ⊃ Dimensión ⊃ Sub-dimensión ⊃ KPI-def; y Macro-proceso ⊃ Proceso ⊃ Actividad.
3. **De instanciación (type→token)** — Categoría⇒Establecimiento; KPI-def⇒Valor de KPI; Tipo de proceso⇒Ejecución de proceso.
4. **De agregación de evidencia (deriva)** — Observaciones ⇒ Valor de KPI ⇒ (puntaje de dimensión) ⇒ Resultado GOEI. *(cadena de derivación; las funciones de agregación son contenido de la Fase de modelo matemático, aquí solo se declara el orden de dependencia.)*

Confundir la jerarquía **part-of** con la **is-a**, o la **instanciación** con la **agregación**, es un error clásico que rompe el modelo matemático. Se mantienen separadas por diseño.

---

## 5. Restricciones (axiomas de integridad)

- **AX-1 (unicidad de instancia):** todo `Valor de KPI` instancia **exactamente una** `KPI-def` y pertenece a **exactamente una** `Evaluación`.
- **AX-2 (cierre de la evaluación):** toda `Evaluación` referencia **exactamente una** `versión de Estándar`, **un** `Establecimiento` y **un** `Periodo`.
- **AX-3 (admisibilidad):** una `KPI-def` entra en una `Evaluación` **solo si** es admisible para la `Categoría` del `Establecimiento`.
- **AX-4 (no compensación):** la `Banda` de un `Resultado GOEI` está **subordinada** a las `Reglas críticas`: si una compuerta falla, ninguna agregación puede elevar la clasificación por encima del techo que la regla impone. *(constraint estructural, no fórmula.)*
- **AX-5 (dependencia de referencia):** no puede existir `Valor de KPI` normalizado sin una `Condición de referencia` definida para su `KPI-def`/`Dimensión`.
- **AX-6 (integridad temporal):** toda `Observación` de una `Evaluación` cae dentro de su `Periodo`.
- **AX-7 (censo formativo / completitud):** el conjunto de `Dimensiones` es un **censo**; quitar una **cambia el constructo**. Ninguna evaluación válida omite una dimensión aplicable.
- **AX-8 (identidad):** un `Establecimiento` conserva identidad entre evaluaciones; una cadena = múltiples establecimientos; su fusión/cierre altera identidad (ver ciclos de vida).
- **AX-9 (comparabilidad entre versiones):** `Resultados` de distintas `versiones` no son directamente comparables salvo que exista `mapa de compatibilidad`.
- **AX-10 (trazabilidad):** todo `Valor de KPI` es trazable hasta sus `Observaciones` y su `Evidencia` (auditabilidad).

---

## 6. Ciclos de vida (máquinas de estado de los ocurrentes/dinámicos)

**Estándar (versión):**
`Borrador → En validación → Publicado/Activo → Sustituido → Retirado`
(no pasa a "Publicado" sin superar la compuerta de validación T3, cf. D-005).

**Establecimiento (registro):**
`Registrado → Activo → Suspendido → Dado de baja` (baja/fusión/cierre afecta identidad, AX-8).

**Evaluación:**
`Planificada → Recolección de datos → Calculada → En auditoría → Validada/Finalizada → (Impugnada) → Archivada`

**Auditoría:**
`Programada → En curso → Hallazgos emitidos → Cerrada (conforme / no conforme)`

**Certificación:**
`Otorgada → Activa → Vigilancia → Renovada / Suspendida / Retirada / Expirada`

**Definición de KPI (dentro del mantenimiento del estándar, T4):**
`Propuesta → Admisible (validada) → Activa → Obsoleta → Retirada`

---

## 7. Diagrama conceptual (vista integrada)

```
        PLANO DEFINICIONAL (Estándar = metamodelo, types)
   ┌───────────────────────────────────────────────────────────┐
   │ Estándar(v) ─ define ─► Categoría, Dimensión, Tipo-proceso, │
   │ KPI-def, Regla-normaliz., Cond.-referencia, Regla-crítica,   │
   │ Banda-interpretación, Criterio-admisibilidad, Formulario,    │
   │ Perfil-competencia                                           │
   └───────────────┬───────────────────────────────────────────┘
                   │ instanciación (type→token)
                   ▼
        PLANO OPERACIONAL (aplicación, tokens)
   ┌───────────────────────────────────────────────────────────┐
   │ Establecimiento ─realiza─► Operación ─contiene─► Ejec.-proceso│
   │        │ inhiere cualidad "Salud Operacional"                │
   │        ▼                                                     │
   │ Evaluación ─genera─► Valor-KPI ◄─deriva─ Observación ◄─ Evid.│
   │        └─produce─► Resultado GOEI ─clasificado_en─► Banda     │
   │ Auditoría ─verifica─► Evaluación ; Evaluador ─ejecuta         │
   │ Certificación ─basada_en─► (Auditoría + Resultado)           │
   └───────────────────────────────────────────────────────────┘
```

---

## 8. Qué habilita esta ontología (cierre)

Con este universo definido, el **modelo matemático** (fase posterior) podrá escribirse sin ambigüedad porque (**[ANÁLISIS]**):
- cada símbolo tendrá un referente único (un *valor de KPI* es un token con establecimiento y periodo, nunca "un KPI" genérico);
- la agregación operará sobre la **cadena de derivación** (§4.4), no sobre entidades mezcladas;
- la **no compensación** ya está declarada como restricción estructural (AX-4), no como truco de fórmula;
- la **comparabilidad** (entre establecimientos, en el tiempo, entre versiones) tiene reglas de identidad y de versión (AX-8, AX-9);
- el resultado tiene un **significado ontológico** preciso: estimación de una cualidad del portador en un periodo (CO-3).

**Lo que esta fase deliberadamente NO hizo:** no dice cuáles son las dimensiones, ni los KPI, ni las reglas de normalización, ni las bandas. Solo dice **qué clases de cosas son** y cómo se relacionan.

---

## 9. Preguntas que hereda la fase siguiente

1. ¿Se ratifica la separación estricta **plano definicional / plano operacional** (CO-1) como regla terminológica obligatoria del estándar?
2. ¿La **unidad de análisis** es el local individual (token Establecimiento)? ¿Cómo se tratan cadenas, franquicias, dark kitchens y operadores multi-marca (identidad, AX-8)?
3. ¿El **Periodo** es fijo (p. ej. ventana estándar) o variable por KPI? Afecta AX-6 y la comparabilidad.
4. ¿"Esquema de ponderación" y "Condición de referencia" son entidades **por-categoría** o **globales**? Decide la estructura del modelo matemático.
5. ¿La cualidad medida se nombra "Salud Operacional" o "Condición operacional" (pendiente estratégico de D-003/D-004)? La ontología es neutra al nombre, pero el estándar debe fijarlo.

---

### Fuentes

- Gruber, T. (1993), *A translation approach to portable ontology specifications* — definición de ontología y componentes. Panorámica: https://www.sciencedirect.com/topics/computer-science/ontology
- Smith, B. et al. — *Basic Formal Ontology (BFO)*: continuantes/ocurrentes, continuantes dependientes/independientes, cualidades, procesos. http://ontology.buffalo.edu/smith/articles/Material_Entities.pdf · https://ieeexplore.ieee.org/document/7288715/
- Uschold, M. & King, M. — *The Enterprise Ontology*. https://www.aiai.ed.ac.uk/project/enterprise/ontology.html · https://www.aiai.ed.ac.uk/project/oplan/documents/1998/98-ker-ent-ontology.pdf
- Dietz, J. & Mulder, H. — *Enterprise Ontology / DEMO*. https://link.springer.com/book/10.1007/978-3-030-38854-6
- ArchiMate / TOGAF — metamodelo (estructura activa/comportamiento/estructura pasiva; capas). https://archimatetool.gitbook.io/quick_guide/archimate-core-metamodel
- Niveles type/token/metamodelo. https://www.sciencedirect.com/science/article/abs/pii/S0164121210002906

*Verificación pendiente (Fase 1/2): confirmar edición de Gruber (1993) y de la monografía BFO (Arp, Smith & Spear, 2015) antes de citar en la tesis.*
