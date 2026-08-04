# Pipeline operativo B2–B10 del GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-PIPE-B2-B10-0001 |
| Tipo | Contrato de coordinación científico–técnica |
| Estado | Preparado; activación condicionada al cierre oficial de B1 |
| Propietario operativo | Oficina Técnica GOEI |
| Propietario del contenido científico | Comité Científico GOEI |
| Autoridad de aprobación | Dirección General, conforme a la gobernanza vigente |
| Alcance | Fases B2 a B10 |
| Exclusión | Este documento no responde preguntas científicas ni crea contenido del estándar |

## 1. Propósito

Definir el flujo controlado mediante el cual una investigación del Comité Científico puede convertirse, después de auditoría formal y aprobación competente, en componentes versionados del GOEI. El pipeline preserva la separación de autoridad: el Comité investiga y recomienda; la Oficina Técnica comprueba forma, identidad, trazabilidad e impacto; la Dirección aprueba, rechaza o devuelve; y solo una aprobación explícita habilita la integración normativa.

Este documento establece **cómo avanzar**, pero no determina **qué contenido debe aprobarse**.

## 2. Condición de activación

B2 solo podrá pasar de `bloqueada` a `habilitada` cuando exista evidencia documental de todos los elementos siguientes:

1. decisión oficial que resuelva D-008 o la decisión que la sustituya;
2. declaración directiva inequívoca de cierre de B1;
3. cierre o disposición explícita de los Issues críticos de B1;
4. versión objetivo asignada a los componentes aprobados en B1;
5. integración técnica de B1 terminada y validada sin alterar el contenido aprobado.

La mera existencia de una recomendación, borrador, manuscrito, informe o texto propuesto no satisface esta condición.

## 3. Estados y actores

### 3.1 Estados permitidos por fase

`bloqueada` → `habilitada` → `investigación` → `expediente recibido` → `auditoría técnica` → `elevada a decisión` → (`aprobada` | `devuelta` | `rechazada`) → `integración técnica` → `cerrada`.

- `devuelta` retorna al Comité con observaciones formales o requerimientos científicos expresados por la autoridad competente.
- `rechazada` conserva el expediente y la decisión en el historial, pero no habilita integración normativa.
- `cerrada` exige aprobación, integración, trazabilidad, versión y controles técnicos conformes.

### 3.2 Separación de responsabilidades

| Actividad | Comité Científico | Oficina Técnica | Dirección General |
|---|---|---|---|
| Formular y resolver la pregunta científica | Responsable | No participa en el contenido | Toma conocimiento |
| Investigar y evaluar evidencia | Responsable | No interpreta | No sustituye al Comité |
| Proponer decisión | Responsable | Registra como propuesta | Recibe expediente |
| Auditar completitud y consistencia formal | Consultado | Responsable | Toma conocimiento |
| Aprobar, rechazar o devolver | Consultado | No aprueba ciencia | Responsable |
| Integrar componentes aprobados | Consultado | Responsable | Autoriza mediante decisión |
| Versionar, trazar y validar repositorio | Informa dependencias | Responsable | Supervisa |

## 4. Contrato común de expediente y handoff

Cada fase debe producir un expediente científico y un handoff técnico con identificadores únicos. Como mínimo, el expediente deberá contener:

- identificador, título, fase, versión, fecha, autoría y estado;
- pregunta científica delimitada;
- alcance, exclusiones y unidad de análisis aplicable;
- protocolo o método empleado;
- inventario trazable de evidencias y fuentes;
- síntesis de resultados, alternativas, objeciones y limitaciones;
- propuesta de decisión claramente separada de la evidencia;
- elementos candidatos, sin presentarlos como normativos antes de aprobación;
- dependencias recibidas y dependencias que el resultado genera;
- preguntas abiertas e Issues;
- declaración del Comité sobre suficiencia o necesidad de investigación adicional;
- análisis de impacto esperado sobre ontología, Knowledge Graph, BOK, documentos normativos, tesis, publicación, formularios y software;
- firma o mecanismo de autenticidad definido por la gobernanza.

El handoff de la Oficina Técnica registrará, sin dictaminar validez científica:

- artefactos recibidos y sus checksums;
- decisión o propuesta relacionada;
- controles de completitud, identidad y trazabilidad;
- contradicciones terminológicas o estructurales detectadas;
- dependencias e impacto técnico;
- componentes integrables y ramas selectivamente bloqueadas;
- resultado: `aceptable para decisión`, `devolver por defecto formal` o `no auditable`;
- condición exacta de reanudación.

## 5. Pipeline por fase

### B2 — Taxonomía universal

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B1 cerrada; catálogo/versionado de procesos aprobado; alcance y unidad de análisis vigentes; ontología baseline disponible; Issues heredados identificados |
| Pregunta científica del Comité | ¿Qué sistema de clasificación permite delimitar y comparar las entidades comprendidas por el GOEI, con qué ejes, criterios de pertenencia, exclusiones y casos límite? |
| Expediente requerido | Revisión científica de alternativas taxonómicas, propuesta de taxonomía, definiciones, criterios de clasificación, casos límite, limitaciones y propuesta de decisión B2 |
| Handoff requerido | Inventario de clases y relaciones candidatas, mapa con la ontología, control de términos, IDs, fuentes, Issues y efectos sobre procesos y comparabilidad |
| Auditoría técnica Codex | Separación tipo/instancia; unicidad de identificadores; jerarquías no circulares; cardinalidades; compatibilidad con formularios, software y Knowledge Graph; trazabilidad completa |
| Decisión de compuerta | Dirección aprueba, rechaza o devuelve la taxonomía y declara expresamente si B2 queda cerrada |
| Artefactos habilitados | Taxonomía baseline; vocabulario controlado; esquemas de clasificación; actualización aprobada de BOK/KG; apertura de B3 |
| Blockers | B1 no cerrada; universo o unidad de análisis no resueltos; criterios de pertenencia ausentes; contradicción con ontología; decisión no aprobada |
| No avance | No iniciar selección científica de KPI mientras no exista taxonomía aprobada o una excepción directiva documentada |

### B3 — Universo y catálogo candidato de KPI

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B2 cerrada; taxonomía y procesos aprobados; plantilla de entidad KPI disponible; protocolo de revisión científica aprobado por el Comité |
| Pregunta científica del Comité | ¿Qué indicadores documentados podrían representar los procesos y categorías aprobados dentro del alcance del GOEI? |
| Expediente requerido | Protocolo de búsqueda/selección, inventario de candidatos, evidencia por candidato, definiciones operacionales encontradas, cobertura, duplicados, vacíos, limitaciones y propuesta de decisión B3 |
| Handoff requerido | Catálogo candidato con IDs estables, procedencia, estado no normativo, relaciones proceso–categoría–evidencia y lista explícita de vacíos |
| Auditoría técnica Codex | Esquema completo; ausencia de candidatos sin fuente; control de duplicidad; consistencia de unidades y términos como datos declarados; cobertura trazable sin evaluar pertinencia científica |
| Decisión de compuerta | Dirección acepta el universo candidato como insumo de B4, lo devuelve o rechaza; aceptar candidatos no los incorpora al estándar |
| Artefactos habilitados | Registro controlado de KPI candidatos; matriz de cobertura; cola de evaluación B4; actualización registral del KG |
| Blockers | Procesos/taxonomía no aprobados; fuentes no trazables; candidatos mezclados con KPI normativos; protocolo incompleto; vacíos científicos no registrados |
| No avance | Ningún candidato puede recibir estado `admisible`, fórmula GOEI, ponderación, umbral o integración normativa en B3 |

### B4 — Admisibilidad y selección de KPI

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B3 cerrada; catálogo candidato congelado; criterios y método de admisibilidad sometidos a decisión científica |
| Pregunta científica del Comité | ¿Qué criterios deben gobernar la admisibilidad y qué candidatos los satisfacen para cada alcance aprobado? |
| Expediente requerido | Método de evaluación, criterios justificados, matriz candidato–criterio, resultados, desacuerdos, exclusiones, limitaciones, vacíos y propuesta de decisión B4 |
| Handoff requerido | Estados por candidato, evidencia de cada evaluación, razones de inclusión/exclusión, dependencias de datos y mapeo a procesos/categorías |
| Auditoría técnica Codex | Integridad de la matriz; vocabulario de estados; trazabilidad criterio–evidencia–resultado; coherencia de IDs; ninguna conclusión sin decisión asociada |
| Decisión de compuerta | Dirección aprueba el método y la selección, devuelve o rechaza; declara cierre B4 y alcance exacto de lo admisible |
| Artefactos habilitados | Catálogo de KPI admisibles versionado; catálogo histórico de excluidos; requisitos de datos; apertura de B5 |
| Blockers | Criterios no aprobados; evaluación incompleta; candidatos sin evidencia; conflictos de alcance; decisiones de inclusión ambiguas |
| No avance | No definir referencias, transformaciones, pesos, agregación o interpretación para KPI no aprobados |

### B5 — Condiciones de referencia y especificación de medición

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B4 cerrada; KPI admisibles identificados; procesos, taxonomía, unidades de análisis y periodos aplicables aprobados |
| Pregunta científica del Comité | ¿Cómo debe especificarse la medición de cada KPI admisible y contra qué condiciones de referencia científicamente justificadas debe interpretarse? |
| Expediente requerido | Definiciones operacionales, variables requeridas, unidades, direccionalidad, periodos, condiciones de referencia, datos faltantes, calidad de datos, limitaciones y propuesta de decisión B5 |
| Handoff requerido | Fichas de medición candidatas, diccionario de datos, reglas candidatas de captura y mapa de dependencias documentales |
| Auditoría técnica Codex | Campos obligatorios; consistencia dimensional; identificadores de variables; representación manual y digital; reglas expresables sin ambigüedad; trazabilidad a decisiones |
| Decisión de compuerta | Dirección aprueba, devuelve o rechaza especificaciones y referencias; cierre B5 debe ser explícito |
| Artefactos habilitados | Fichas KPI aprobadas; diccionario de datos baseline; requisitos de formularios; insumos autorizados para B6 |
| Blockers | Referencias no justificadas; definición incompleta; unidad/periodo ambiguos; tratamiento de datos ausente; dependencia empírica no resuelta |
| No avance | No normalizar una variable cuya definición, dirección o referencia no esté aprobada |

### B6 — Normalización

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B5 cerrada; fichas KPI y referencias aprobadas; requisitos de comparabilidad declarados |
| Pregunta científica del Comité | ¿Qué transformación a una escala común es válida para cada KPI y cómo deben tratarse límites, faltantes, valores extremos y diferencias de categoría? |
| Expediente requerido | Alternativas evaluadas, supuestos, transformaciones candidatas, reglas de dominio, pruebas o simulaciones autorizadas, limitaciones y propuesta de decisión B6 |
| Handoff requerido | Especificación matemática candidata por transformación, casos de prueba proporcionados por el Comité, variables y reglas de error |
| Auditoría técnica Codex | Sintaxis y completitud; dominios/codominios declarados; determinismo; unidades; casos frontera; implementabilidad manual y digital; correspondencia exacta con decisión |
| Decisión de compuerta | Dirección aprueba, devuelve o rechaza el sistema de normalización y declara cierre B6 |
| Artefactos habilitados | Especificación de normalización versionada; tablas/formularios derivados; pruebas de conformidad; apertura de B7 |
| Blockers | KPI o referencias no aprobados; función sin dominio; comportamiento frontera indefinido; incompatibilidad manual no resuelta; falta de decisión |
| No avance | Codex no elegirá ni ajustará una transformación y no inferirá parámetros faltantes |

### B7 — Ponderación, agregación y no compensación

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B6 cerrada; valores normalizados formalmente definidos; estructura de componentes/dimensiones aprobada si corresponde |
| Pregunta científica del Comité | ¿Qué método de ponderación y agregación representa el constructo y qué restricciones de no compensación deben gobernar el resultado? |
| Expediente requerido | Alternativas, supuestos, justificación, método de obtención/validación de parámetros, reglas críticas, análisis preliminar de sensibilidad, limitaciones y propuesta de decisión B7 |
| Handoff requerido | Especificación candidata de pesos/parámetros, operador de agregación, reglas de veto o restricción y casos de prueba autorizados |
| Auditoría técnica Codex | Completitud algebraica; referencias válidas; suma/dominio cuando la decisión lo exija; orden de operaciones; comportamiento de reglas críticas; cálculo manual y software reproducible |
| Decisión de compuerta | Dirección aprueba, devuelve o rechaza el sistema completo; cualquier parte no aprobada mantiene bloqueada B8 |
| Artefactos habilitados | Especificación de ponderación/agregación; reglas críticas versionadas; motor matemático candidato; apertura de B8 |
| Blockers | Dimensiones no aprobadas; parámetros sin método; reglas contradictorias; sensibilidad insuficiente según el Comité; decisión parcial sin alcance explícito |
| No avance | La Oficina Técnica no asignará pesos, operadores, umbrales, vetos ni valores por defecto |

### B8 — Modelo matemático, incertidumbre e interpretación

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B7 cerrada; especificaciones B5–B7 aprobadas; reglas críticas completas; casos de prueba científicos disponibles |
| Pregunta científica del Comité | ¿El modelo integrado es coherente, robusto e interpretable, y cómo deben expresarse incertidumbre, sensibilidad, validez del resultado y significado de las salidas? |
| Expediente requerido | Modelo integrado, supuestos, análisis de sensibilidad/incertidumbre, reglas de validez, interpretación candidata, limitaciones, escenarios y propuesta de decisión B8 |
| Handoff requerido | Especificación ejecutable o formal, conjunto de pruebas de referencia, tabla de entradas/salidas, reglas de error y trazabilidad de cada término |
| Auditoría técnica Codex | Reproducibilidad; cobertura de ecuaciones; dependencias; determinismo; precisión y redondeo declarados; equivalencia manual/software; pruebas de regresión; ausencia de parámetros huérfanos |
| Decisión de compuerta | Dirección aprueba, devuelve o rechaza el modelo y su interpretación; cierre B8 exige una versión candidata inequívoca |
| Artefactos habilitados | Modelo matemático candidato versionado; especificación del motor; tablas de interpretación aprobadas; insumos para protocolo B9 |
| Blockers | Componentes previos provisionales; sensibilidad/incertidumbre no resueltas; interpretación sin evidencia; casos de prueba insuficientes; divergencia manual/software |
| No avance | Ningún resultado podrá denominarse puntuación GOEI oficial antes de aprobación y validación posterior |

### B9 — Protocolo de validación

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B8 cerrada; modelo candidato completo; población y alcance aprobados; GOEI-ISS-041 resuelto o dispuesto formalmente |
| Pregunta científica del Comité | ¿Qué diseño y criterios permiten evaluar la validez, confiabilidad, factibilidad, robustez y límites del GOEI de acuerdo con la naturaleza del constructo? |
| Expediente requerido | Paradigma, diseño, población/muestra, expertos, pilotos, instrumentos, análisis, criterios de aceptación, ética, datos, preregistro, replicación, riesgos y propuesta de decisión B9 |
| Handoff requerido | Protocolo versionado candidato, formularios/instrumentos candidatos, plan de datos, plan de análisis, matriz ética y criterios de cierre |
| Auditoría técnica Codex | Completitud protocolaria; consistencia de IDs; versionado de instrumentos; trazabilidad a objetivos/hipótesis; reproducibilidad operacional; gestión de datos y cambios; sin juzgar la elección científica |
| Decisión de compuerta | Dirección aprueba, devuelve o rechaza el protocolo; la aprobación habilita ejecución futura, no prueba que la validación haya ocurrido |
| Artefactos habilitados | Protocolo oficial; instrumentos controlados; plan de validación; secciones metodológicas autorizadas para manual/tesis; apertura de B10 |
| Blockers | Modelo incompleto; técnicas no resueltas; acceso/ética/datos sin tratamiento; criterios de aceptación ausentes; instrumentos no versionados |
| No avance | No fabricar datos, expertos, pilotos ni resultados; no confundir protocolo aprobado con validación ejecutada |

### B10 — Manual Técnico General candidato

| Control | Definición operativa |
|---|---|
| Entrada obligatoria | B2–B9 cerradas; componentes aprobados disponibles; protocolo B9 versionado; jerarquía normativa vigente |
| Pregunta científica del Comité | ¿La síntesis científica del Manual representa fielmente todas las decisiones aprobadas, sus límites y condiciones de uso? |
| Expediente requerido | Revisión científica de la síntesis, tabla decisión–sección, declaración de suficiencia, contradicciones, limitaciones y propuesta de cierre B10/Fase B |
| Handoff requerido | Manual candidato, anexos, formularios, glosario, matrices de trazabilidad, informe de cobertura y lista de Issues remanentes |
| Auditoría técnica Codex | Cobertura bidireccional; consistencia terminológica; jerarquía documental; enlaces e IDs; ausencia de contenido normativo sin decisión; capacidad manual; coherencia con ontología/KG/modelo; control editorial |
| Decisión de compuerta | Dirección aprueba, devuelve o rechaza el Manual candidato y declara, de forma separada, si B10 y la Fase B quedan cerradas |
| Artefactos habilitados | Manual Técnico General candidato; candidato de GOEI Standard; BOK integrado; formularios; estructura de tesis poblable; preparación controlada de publicación; apertura de Fase C |
| Blockers | Cualquier fase B2–B9 no cerrada; contradicción normativa; cobertura incompleta; Issues críticos; contenido prematuro; aprobación ausente |
| No avance | El Manual no se denominará Standard validado y la tesis/publicación no presentarán resultados de validación inexistentes |

## 6. Ciclo de devolución

Cada devolución deberá ser explícita, trazable y limitada al defecto detectado:

1. la Oficina Técnica emite hallazgos formales numerados o la Dirección formula requerimientos científicos;
2. se conserva sin sobrescritura el expediente recibido;
3. el Comité entrega una nueva revisión con historial de cambios y respuesta punto por punto;
4. la Oficina Técnica repite la auditoría completa, no solo los controles fallidos;
5. la Dirección emite una nueva resolución;
6. ningún cambio adquiere efecto normativo por el solo hecho de corregir el expediente.

Si la devolución revela una pregunta científica nueva, se abre un Issue y se bloquea únicamente el elemento dependiente. Si revela un defecto puramente documental, la Oficina Técnica puede corregir estructura o metadatos sin alterar el significado y debe registrar el cambio.

## 7. Coordinación paralela segura

La secuencia científica B2→B10 es obligatoria para promoción normativa. Sin embargo, pueden ejecutarse en paralelo trabajos preparatorios que no presupongan resultados:

| Trabajo paralelo permitido | Condición de seguridad |
|---|---|
| Plantillas de expedientes, decisiones y handoffs | Campos vacíos; sin respuestas sugeridas |
| Esquemas de datos y validadores | Validan forma, IDs y relaciones; no adjudican validez científica |
| Arquitectura de BOK, tesis, manual y publicación | Solo índices, slots y trazabilidad; sin poblar conclusiones |
| Ontología y Knowledge Graph registral | Incorporan estados reales y propuestas identificadas; no promueven candidatos |
| Formularios técnicos genéricos | Estructura neutral; sin variables, umbrales o reglas no aprobadas |
| Pruebas de infraestructura | Datos sintéticos etiquetados como técnicos; no se presentan como evidencia GOEI |
| Gestión de bibliografía | Identidad, metadatos y procedencia; sin interpretar literatura |
| Planificación de software | Interfaces y contratos abstractos; no codifica contenido científico provisional como oficial |

No es paralelismo seguro: investigar la siguiente pregunta antes de habilitación formal cuando dependa del resultado previo; seleccionar KPI antes de cerrar taxonomía; diseñar fórmulas antes de aprobar KPI; redactar conclusiones antes de validar; o usar borradores como si fueran baselines.

## 8. Reglas de bloqueo selectivo y no avance

1. Todo vacío científico se registra como Issue con rama afectada, impacto y condición de cierre.
2. Un Issue bloquea solo los componentes que dependen materialmente de su resolución.
3. Ninguna herramienta, prueba, agente o automatización puede otorgar aprobación científica o directiva.
4. `Propuesto`, `candidato`, `en revisión` y `aprobado` son estados distintos y no intercambiables.
5. Una fase no se cierra por ausencia de objeciones, por paso del tiempo ni por completitud editorial.
6. Todo cierre requiere decisión explícita, versión objetivo, integración técnica y validación de trazabilidad.
7. Si una decisión modifica una baseline, se exige Issue formal, análisis de impacto y procedimiento de cambio aplicable.
8. Las ramas posteriores pueden preparar contenedores, pero no asumir el contenido de una fase pendiente.
9. La tesis y las publicaciones consumen conocimiento aprobado y resultados reales; no son fuentes de autoridad para crearlos.
10. Ante contradicción entre documentos, prevalece la jerarquía documental vigente y se bloquea la integración hasta resolverla.

## 9. Regla de cierre de cada fase

Una fase Bn solo se considera `cerrada` cuando existe evidencia verificable de:

- expediente científico completo;
- auditoría técnica conforme;
- decisión aprobada y registrada;
- Issues críticos cerrados o dispuestos expresamente;
- componentes integrados sin desviación semántica;
- relaciones y dependencias actualizadas;
- versión y registro de cambio asignados;
- validadores pertinentes conformes;
- handoff a Bn+1 emitido.

La falta de cualquiera de estos elementos mantiene la fase en el último estado demostrado.

## 10. Handoff final B10→Fase C

El cierre de B10 no equivale a un GOEI validado. El handoff a Fase C deberá distinguir al menos:

- conocimiento científico aprobado;
- especificaciones normativas candidatas;
- instrumentos y protocolo de validación;
- limitaciones y Issues remanentes;
- evidencia todavía requerida en pilotos o estudios;
- contenido autorizado para tesis y publicaciones;
- contenido expresamente prohibido como conclusión hasta validación.

Solo después de ensamblaje, revisión, validación empírica y release competente podrá promoverse un candidato a Standard validado.
