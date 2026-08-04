# GOEI: historia, construcción y estado actual del proyecto

## Nota de lectura

Este documento explica el proyecto GOEI de forma continua. No es el estándar, no es un manual técnico y no sustituye los registros oficiales. Su propósito es permitir que una persona comprenda qué se ha intentado construir, por qué se adoptó cada decisión, qué está aprobado, qué permanece provisional y qué falta para llegar al estándar, la tesis y una publicación.

La narración se basa en la Constitución, los registros de decisiones, las resoluciones de Dirección, las auditorías técnicas, las líneas base, el Knowledge Graph, el Body of Knowledge, los planes de tesis y los expedientes científicos conservados en el repositorio. Cuando se menciona una decisión, se mantiene la diferencia entre propuesta, decisión científica, ratificación directiva e integración técnica.

## 1. El punto de partida

GOEI significa Gastronomic Operational Efficiency Index. El proyecto nació con una ambición mayor que crear una lista de indicadores para restaurantes. Su objetivo es desarrollar un estándar internacional capaz de evaluar la salud operacional de establecimientos gastronómicos mediante elementos cuantificables, repetibles, auditables y comparables.

La expresión salud operacional fue elegida para abarcar algo más amplio que el desempeño financiero. Un establecimiento puede vender mucho y, sin embargo, operar con problemas graves de inocuidad, deterioro de inventarios, fallos de servicio, mantenimiento insuficiente o prácticas que no son sostenibles en el tiempo. Por esa razón, el GOEI no puede reducirse a rentabilidad, productividad o eficiencia aisladas. Tampoco puede permitir que un buen resultado financiero o comercial oculte un incumplimiento crítico.

Desde el inicio se establecieron varias exigencias. El estándar debe ser independiente de la tecnología; tiene que poder aplicarse mediante formularios, tablas y una calculadora básica. Los datos originales pueden utilizar unidades diferentes, pero cualquier indicador incorporado a una fórmula global deberá transformarse de manera científicamente justificada a una escala común. Cada KPI deberá ser definible, medible, trazable, repetible, auditable y realizable por el tipo de establecimiento al cual se aplique.

También se decidió distinguir tres niveles futuros: un núcleo universal, elementos específicos por categoría y módulos complementarios. Esta separación evita suponer que un restaurante de servicio rápido, una cafetería, un casino institucional, un hotel, una dark kitchen o un food truck funcionan de la misma manera. El desafío consiste en identificar qué puede compararse sin borrar las diferencias operacionales relevantes.

## 2. El estándar antes que la tesis

Una de las decisiones estratégicas más importantes fue no comenzar escribiendo una tesis completa. Primero se construirá el estándar GOEI. La tesis deberá ser una consecuencia documentada de ese proceso.

Esta elección modifica la forma de trabajar. En un proyecto centrado exclusivamente en una tesis, muchos razonamientos podrían permanecer dentro de capítulos narrativos. En el GOEI, cada componente debe existir como una unidad controlada: debe tener identidad, origen, evidencia, versión, estado, dependencias e historial. La tesis utilizará esos componentes para explicar la investigación, pero no será la única fuente de verdad.

La consecuencia práctica es que no basta con redactar una idea convincente. Una definición, una taxonomía, un proceso, un KPI o una función matemática solo puede ingresar al estándar cuando existe una decisión científicamente autorizada, una auditoría técnica y una integración versionada. Las propuestas que aún no cumplen esas condiciones deben permanecer visibles como candidatas, provisionales o bloqueadas.

Este enfoque aumenta el trabajo documental, pero protege la reproducibilidad. Dentro de varios años debe ser posible responder qué se sabía en cada momento, qué evidencia se utilizó, quién tenía autoridad para decidir y qué versión del estándar produjo una evaluación concreta.

## 3. La organización del proyecto

La estructura institucional acordada ubica a Pablo Toledo Salinas como Director General. Bajo esa dirección funciona el Comité Directivo. El trabajo se divide entre el Comité Científico, representado operativamente por Claude, y la Oficina Técnica, representada por Codex.

El Comité Científico investiga, interpreta evidencia, evalúa alternativas metodológicas y propone decisiones. La Oficina Técnica transforma el conocimiento aprobado en componentes mantenibles: organiza documentos, controla configuraciones, registra decisiones e Issues, crea baselines, mantiene el Knowledge Graph, genera diagramas, integra manuales, administra Git y comprueba consistencia.

La separación no es decorativa. Codex no debe inventar KPI, fórmulas, ponderaciones, umbrales o conclusiones metodológicas. Cuando falta una decisión científica, la Oficina Técnica registra el vacío, documenta su impacto y bloquea únicamente la rama afectada. El resto del trabajo debe continuar.

Posteriormente, mediante GOEI-DIR-0004, la Dirección General delegó en Codex la conducción operativa dentro del marco aprobado. Esto permite organizar el trabajo, emitir actos directivos de cierre e integrar resultados sin solicitar validaciones intermedias al usuario. La delegación no convierte a Codex en autoridad científica: las decisiones metodológicas siguen necesitando un expediente atribuible al Comité Científico.

En agosto de 2026 la dirección automática quedó pausada por instrucción del Director General. Cuando se reactive, deberá abrirse una conversación nueva con Claude y utilizar paquetes de contexto compactos. Esta medida responde al consumo excesivo de tokens observado en sesiones previas.

## 4. La Constitución y la arquitectura documental

Antes de desarrollar el contenido del estándar se diseñó una Constitución GOEI. El documento fundador organiza visión, misión, propósito, principios, alcance, objetivos, reglas metodológicas, gobernanza, jerarquía documental, ciclo de vida, incorporación de decisiones, modificación del estándar y definiciones generales.

La Constitución no pretende resolver el contenido científico. Establece las reglas mediante las cuales dicho contenido podrá ser aceptado, modificado o retirado. Esa distinción protege al proyecto de convertir preferencias operativas en reglas científicas por simple edición de documentos.

El repositorio se organizó para conservar gobernanza, investigación, bibliografía, taxonomía, procesos, KPI, normalización, ponderación y fórmula, interpretación, manuales, validación, tesis, publicaciones, anexos, mantenimiento y herramientas. A esa estructura se sumaron registros maestros de decisiones, directivas, componentes, Issues, preguntas abiertas, trazabilidad, versiones, baselines y cambios.

Git se utiliza como sistema de configuración, no solo como respaldo. Los commits describen cambios intencionales; las baselines congelan conjuntos de artefactos; los manifiestos conservan tamaños y huellas SHA-256; las releases deben superar compuertas de integridad, decisión y aprobación. Un archivo presente en el repositorio no se considera automáticamente aprobado.

## 5. El Knowledge Graph y el MetaModel

Cuando el proyecto superó la fase inicial de organización documental se abrió EPIC-001: GOEI Knowledge Graph & MetaModel. El objetivo fue representar el origen y las dependencias de cualquier elemento del estándar.

El metamodelo incluye entidades como evidencia, fuente bibliográfica, investigación, hipótesis, pregunta abierta, observación, debate científico, decisión científica, revisión técnica, componente, documento, manual, ontología, taxonomía, proceso, KPI, regla, fórmula, validación, publicación, tesis, versión, registro de cambio, Issue, Constitución y Body of Knowledge.

La utilidad del grafo se entiende mediante relaciones sencillas: una evidencia sustenta una decisión; una decisión crea o modifica un componente; un componente pertenece a un documento; un documento integra una versión del estándar; una baseline congela determinados artefactos; un Issue bloquea una rama; una validación evalúa un componente o una versión.

El proyecto dispone de diccionarios de entidades y relaciones, reglas de integridad, restricciones de consistencia, reglas de navegación, diagramas, matriz entidad-relación y una proyección procesable en JSON. La proyección actual se valida automáticamente y mantiene 236 nodos y 292 relaciones.

El Knowledge Graph no determina si una afirmación científica es correcta. Su función es impedir que una conclusión pierda su procedencia o que una modificación se propague de forma invisible.

## 6. D-006: la ontología conceptual congelada

La primera versión de la ontología conceptual fue desarrollada y validada metodológicamente por el Comité Científico. La Oficina Técnica la revisó desde la arquitectura de conocimiento: consistencia interna, terminología, separación entre metamodelo, tipos e instancias, redundancias, relaciones, restricciones, escalabilidad y compatibilidad futura con software, formularios y motor matemático.

Después de esa revisión se ordenó congelar D-006 como Ontology Baseline v0.1. Desde ese momento ninguna modificación puede realizarse silenciosamente. Todo cambio requiere un Issue formal, análisis de impacto, decisión competente, nueva versión y preservación de la versión anterior.

Esta baseline es provisional en el sentido evolutivo de cualquier estándar, pero es inmutable como registro histórico. Existe un candidato de ontología v0.2.0 relacionado con la arquitectura GTRM; no reemplaza a D-006. GOEI-ISS-053 conserva abierta la posible ampliación futura.

La ontología también fijó separaciones que luego resultaron esenciales: un fenómeno real no es idéntico a la observación que lo representa; una observación no es lo mismo que una medición registrada; un valor KPI es una derivación; una puntuación normalizada pertenece a una fase posterior. Sin esa separación el futuro software podría mezclar datos originales, cálculos y resultados interpretados.

## 7. EPIC-002 y el lenguaje universal de procesos

EPIC-002 se inició para crear el MetaModelo Universal de Procesos. El encargo no consistía en investigar qué procesos gastronómicos existen, sino en diseñar el lenguaje capaz de representarlos.

El metamodelo contempla proceso, subproceso, actividad, evento, entrada, salida, recurso, agente, restricción, evidencia, observación, riesgo, control, documento, registro e indicador. Para cada entidad se diseñaron propósito, atributos, relaciones, cardinalidades, restricciones y ciclo de vida.

También se construyeron diagramas UML, matrices de relaciones, reglas de integridad y correspondencias con BPMN y ArchiMate. El resultado permite que un proceso aprobado pueda representarse tanto en documentación manual como en una implementación informática sin convertir una notación externa en la autoridad normativa del GOEI.

Esta fase dejó preparado el lenguaje. La identificación científica de los procesos universales se resolvió después, dentro de B1.

## 8. B1 y D-008: el núcleo universal de procesos

La pregunta de B1 fue si existe un conjunto de procesos común a los establecimientos gastronómicos. El Comité examinó modelos de sistemas de foodservice, cadenas operacionales, hotelería, catering, delivery y sistemas de producción.

La conclusión no fue que todos los establecimientos realicen las mismas actividades concretas. Una dark kitchen, un casino de alimentación y un restaurante de mesa pueden ejecutar tareas diferentes. La decisión D-008 estableció un núcleo universal a nivel de subsistema funcional, cuyas realizaciones específicas podrán variar según categoría o sistema.

El núcleo quedó organizado como una cadena primaria P1–P6 y planos transversales P7–P9:

1. P1: planificación y menú o demanda.
2. P2: aprovisionamiento.
3. P3: recepción, almacenamiento e inventario.
4. P4: producción o preparación.
5. P5: distribución, servicio o cumplimiento.
6. P6: transacción y cierre.
7. P7: inocuidad e higiene.
8. P8: mantenimiento.
9. P9: gestión.

D-008 cerró únicamente la pregunta nuclear. No determinó todos los subprocesos, actividades o variantes. Tampoco convirtió residuos o merma en un macroproceso normativo. Los asuntos todavía dependientes de investigación permanecieron registrados como Issues.

La Dirección ratificó D-008 mediante GOEI-DIR-RES-0001 y congeló GOEI-BSL-PROC-0001 v0.1.0. Esa baseline habilitó la fase B2.

## 9. B2 y D-017: una taxonomía facetada

La taxonomía debía evitar dos errores: asumir categorías rígidas sin evidencia suficiente o tratar todos los negocios como comparables. El Comité concluyó que la estructura más escalable era un modelo multieje o facetado.

D-017 estableció como unidad ordinaria el Establecimiento. Una categoría se representa como combinación de facetas, no como una etiqueta aislada. Se aprobaron tres identidades de faceta:

1. FX-1: modalidad de servicio o entrega.
2. FX-2: sistema de producción.
3. FX-3: naturaleza económica.

También se reconocieron relaciones estructurales entre FX-1 y P5, FX-2 y P4/P5, y FX-3 y P6. Estas relaciones indican dónde una faceta puede condicionar la realización de un proceso.

La decisión no aprobó valores concretos de cada faceta. No existe todavía una lista normativa definitiva de categorías, cardinalidades, combinaciones híbridas, reglas para establecimientos multiunidad o correspondencias externas. Estos elementos permanecen bajo GOEI-ISS-008 y GOEI-ISS-054.

La Dirección ratificó D-017 mediante GOEI-DIR-RES-0002 y congeló GOEI-BSL-TAX-0001 v0.1.0. Con ello se abrió B3.

## 10. B3 y D-018: el universo candidato de KPI

B3 tuvo un alcance deliberadamente limitado: identificar indicadores documentados que pudieran representar P1–P9 y las facetas aprobadas. La fase no debía decidir admisibilidad, fórmula, ponderación, puntuación, referencia o normalización.

El Comité produjo una revisión, un catálogo candidato, una matriz de cobertura y el handoff científico D-018. Inicialmente se registraron 32 elementos. La auditoría técnica determinó que C-032, Balanced Scorecard, era un marco contextual y no un indicador. Por ello la baseline se cerró con 31 candidatos evaluables y C-032 quedó conservado fuera de la cola KPI.

Aceptar el universo candidato no significa aprobar los KPI. Cada ficha conserva nombre fuente, definición encontrada, unidad, fórmula solo cuando la fuente la proporciona, proceso relacionado, alcance de faceta, procedencia bibliográfica, datos requeridos, frecuencia cuando consta, limitaciones, duplicados y estado candidato.

La cobertura es desigual. Existen candidatos para los nueve procesos, pero P1 mantiene un vacío relacionado con una métrica cerrada de exactitud del pronóstico específica de foodservice. También existen indicadores procedentes de marcos genéricos cuya adaptación al contexto gastronómico no ha sido resuelta.

D-018 abrió GOEI-ISS-055 a GOEI-ISS-058:

1. ISS-055 impide afirmar que el universo sea exhaustivo sin una revisión sistemática suficiente.
2. ISS-056 bloquea selectivamente la rama de exactitud de pronóstico de C-003.
3. ISS-057 afecta la adaptación gastronómica de candidatos derivados de SCOR e ISO 30414.
4. ISS-058 conserva abierta la comparabilidad jurisdiccional de inspecciones sanitarias.

La Dirección ratificó D-018 mediante GOEI-DIR-RES-0003 y congeló GOEI-BSL-KPI-C-0001 v0.1.0. B3 quedó cerrada en su pregunta nuclear y B4 fue habilitada.

## 11. La ampliación GTRM

Durante el proyecto se propuso una arquitectura denominada Gastronomic Technical Reference Matrix o GTRM. La propuesta podía afectar medición, referencias, normalización, software, formularios y taxonomía. Por eso no se incorporó directamente: se abrió una auditoría científica y técnica.

La auditoría exigió distinguir diez conceptos:

1. Observación: representación de un fenómeno o evento observado.
2. Medición registrada: dato conservado con instrumento, unidad, método, agente y periodo.
3. Valor de KPI: resultado derivado de mediciones válidas.
4. Condición de referencia: estado normativo, regulatorio o empírico utilizado como patrón.
5. Benchmark: valor o distribución comparativa correspondiente a una población, categoría, jurisdicción y periodo.
6. Función de puntuación: transformación que utiliza el valor KPI y sus referencias.
7. Normalización: operación que hace comparables escalas heterogéneas.
8. Puntuación normalizada: salida de la transformación en una escala común.
9. Tabla de consulta manual: representación fiel de la función para papel y calculadora.
10. Interpretación: significado permitido de la puntuación y límites de las conclusiones.

Las decisiones D-009 a D-016 concluyeron que la GTRM actúa sobre un valor KPI ya derivado, no sobre observaciones brutas. Se definió como una función normativa parametrizada cuya aplicación produce la puntuación normalizada del KPI. Por tanto, no debe existir una segunda normalización que transforme nuevamente el resultado.

La condición de referencia y el benchmark son entidades diferentes. Pueden existir referencias universales, regulatorias, jurisdiccionales o específicas, pero su selección no puede ser inferida por el software cuando falta una regla aprobada. Si no existe una referencia válida o existe un conflicto no resuelto, el resultado debe quedar no calculable y generar un Issue selectivo.

La incertidumbre debe conservar fuentes separadas: medición, muestreo, benchmark, parámetros y puntuación. Todavía no se ha aprobado un método concreto para representarla en cada KPI.

La tabla manual y el código serán dos representaciones de la misma especificación normativa. Ninguno puede convertirse en una fuente independiente. Cada evaluación deberá conservar versión de GTRM, función, parámetros, referencias, fecha de vigencia, precisión, redondeo, entradas originales, salida e incertidumbre. Una versión sustituida no se sobrescribirá.

La Dirección adoptó la resolución GTRM y cerró ISS-044 únicamente respecto de su ubicación arquitectónica. Los Issues posteriores conservan abiertos los aspectos científicos o implementaciones concretas. D-006 no fue alterada; cualquier incorporación definitiva requiere ISS-053 y nueva versión ontológica.

## 12. B4: el punto exacto donde está detenido el trabajo científico

B4 debe responder qué criterios gobiernan la admisibilidad de KPI y cuáles de los 31 candidatos los satisfacen. Antes de evaluar candidatos, el Comité debe aprobar el método y el vocabulario de resultados.

La Oficina Técnica completó GOEI-AUDIT-0007. La auditoría verificó los 31 IDs, la exclusión de C-032, los campos de las fichas, los hashes de la baseline y las dependencias. También fijó catorce controles mecánicos para la futura matriz.

La matriz B4 deberá mostrar una evaluación por candidato y criterio, con evidencia, justificación, autoridad, decisión e Issue aplicable. Tendrá que distinguir resultado negativo, evidencia insuficiente, no aplicación, falta de evaluación y bloqueo. No podrá introducir referencias concretas, GTRM, normalización, ponderaciones, fórmula global o interpretación, porque esas decisiones pertenecen a fases posteriores.

El primer intento de ejecutar B4 utilizó una tarea demasiado amplia de Claude: método, 31 evaluaciones, seis documentos y dictamen. La sesión alcanzó su límite de créditos. A raíz de ello se acordó un protocolo más eficiente.

Cuando se reanude el trabajo se abrirá una conversación nueva con Claude. Codex preparará un paquete mínimo y B4 se dividirá en cuatro partes:

1. B4-A: método, criterios y estados.
2. B4-B: evaluación de candidatos en lotes controlados.
3. B4-C: duplicidades, discrepancias, bloqueos y excepciones.
4. B4-D: dictamen consolidado y propuesta D-019.

Claude decidirá únicamente ciencia. Codex generará matrices, realizará controles, integrará resultados, actualizará registros, congelará baselines y publicará cambios. Esta separación reduce tokens y evita que el Comité use contexto para tareas mecánicas.

## 13. Las fases restantes del estándar

Si D-019 cierra B4, el proyecto todavía deberá recorrer B5–B10.

B5 definirá cómo se mide cada KPI admisible. Deberá establecer variables, unidades, periodo, direccionalidad, calidad de datos, faltantes y condiciones de referencia. Un KPI no podrá pasar a puntuación si su medición permanece ambigua.

B6 definirá las funciones GTRM, sus parámetros, escalas, dominio, precisión e incertidumbre. También deberá demostrar que la tabla manual y el software son equivalentes mediante casos canónicos de prueba.

B7 abordará ponderación y agregación. Aquí deberán resolverse científicamente la contribución de cada KPI y las reglas de no compensación. Codex no puede proponer pesos ni fórmulas por iniciativa propia.

B8 establecerá interpretación y estados de validez. Una puntuación debe indicar qué significa, qué no significa, bajo qué condiciones puede compararse y qué sucede cuando existen fallas críticas o datos insuficientes.

B9 transformará las especificaciones aprobadas en formularios, tablas manuales y procedimientos de aplicación. La independencia tecnológica se verificará en esta fase.

B10 integrará el conocimiento normativo en el Manual Técnico General y en el GOEI Body of Knowledge. Solo después de B10 existirá una base suficiente para construir un candidato completo del estándar.

## 14. Validación, formularios y software

El GOEI no puede declararse estándar internacional únicamente porque sus documentos sean consistentes. Será necesario diseñar y ejecutar una validación científica y operacional.

La validación deberá incluir revisión de expertos, pruebas con casos reales, consistencia entre evaluadores, sensibilidad de las puntuaciones, comportamiento ante faltantes, incertidumbre, comparabilidad y capacidad de aplicación manual. El expediente tendrá que distinguir resultados empíricos de propuestas metodológicas.

Los formularios manuales no son una versión simplificada del software. Ambos deben aplicar la misma especificación. Las pruebas de equivalencia deberán cubrir límites exactos, valores inmediatamente inferiores y superiores, extremos, unidades convertidas, redondeos, referencias incompatibles y versiones suspendidas o expiradas.

El futuro software deberá almacenar observaciones, mediciones, valores KPI, referencias, funciones, puntuaciones y versiones como entidades separadas. También deberá conservar evaluaciones históricas con la versión original y permitir simulaciones con versiones nuevas sin reescribir el pasado.

En el estado actual no corresponde construir un motor GOEI definitivo. El estándar aún no dispone de KPI admisibles aprobados, especificaciones de medición, funciones concretas, ponderaciones o fórmula global.

## 15. La tesis y las publicaciones

La tesis se planificó como producto derivado del estándar. El repositorio contiene un Plan Maestro, una matriz de requisitos, estructuras de capítulos, anexos y artefactos de cobertura. Sin embargo, estos documentos son esqueletos y controles, no una tesis terminada.

La evaluación automática de cobertura registra 64 requisitos. Ninguno posee todavía estado Aprobado o Publicado. Algunos cuentan con contenido parcial, estructural o técnico; otros están bloqueados porque dependen de fases metodológicas, validación o resultados empíricos.

Una tesis completa deberá explicar el problema, la construcción conceptual, la metodología, la selección de componentes, la normalización, la agregación, la validación, los resultados, la discusión y las limitaciones. Actualmente no pueden redactarse como definitivos los capítulos que dependen de B4–B10 o de la validación.

Las publicaciones académicas siguen la misma lógica. Es posible preparar títulos, preguntas, estructuras y protocolos, pero un manuscrito de resultados no será publicable hasta disponer de un estándar candidato y evidencia de validación. GOEI-ISS-039 y GOEI-ISS-040 conservan estos bloqueos.

## 16. Qué está realmente terminado

El proyecto cuenta con una infraestructura profesional que ya funciona:

1. Constitución y arquitectura documental.
2. Convenciones, Git, commits, releases, CHANGELOG y baselines.
3. Registros de decisiones, directivas, componentes, Issues y trazabilidad.
4. Knowledge Graph, MetaModel y reglas de integridad.
5. Ontology Baseline D-006 v0.1 congelada.
6. MetaModelo Universal de Procesos.
7. Baseline de procesos P1–P9 aprobada.
8. Baseline de taxonomía facetada aprobada.
9. Baseline de 31 candidatos KPI congelada.
10. Marco científico GTRM D-009–D-016 ratificado.
11. Auditoría de preparación B4.
12. Herramientas de manifiestos, compuertas, roadmap, bibliografía, tesis y Knowledge Graph.

El repositorio supera 112 controles estructurales, 22 pruebas automatizadas, 15 controles de roadmap y las comprobaciones del Knowledge Graph. Estos resultados demuestran integridad técnica, no validez científica completa.

## 17. Qué no está terminado

Todavía no existen:

1. Catálogo de KPI admisibles aprobado.
2. Fichas normativas completas de medición.
3. Referencias y benchmarks concretos por KPI y alcance.
4. Funciones GTRM concretas y tablas manuales.
5. Sistema de incertidumbre aplicado.
6. Ponderaciones y fórmula global aprobadas.
7. Reglas críticas y de no compensación completamente formalizadas.
8. Tabla de interpretación aprobada.
9. Formularios finales y manual piloto validado.
10. Estándar candidato integrado.
11. Validación con expertos y establecimientos reales.
12. Tesis científicamente terminada.
13. Manuscrito listo para someter a una revista.
14. Software normativamente implementable.

Tampoco están cerrados los fundamentos provisionales D-003 y D-005 ni los Issues 006, 007, 016 y 017 de la fase A. Esta deuda conceptual debe resolverse sin deshacer las baselines posteriores que ya tengan autoridad independiente.

## 18. Issues que condicionan el futuro inmediato

Los Issues no representan todos el mismo tipo de bloqueo. Algunos detienen una rama concreta; otros impiden declarar una fase completa.

ISS-008 mantiene abierta la agregación multiunidad y multimarca. ISS-015 conserva el doble papel de inocuidad como proceso y restricción crítica. ISS-043 evita reintroducir merma o residuos como macroproceso sin decisión. ISS-053 protege D-006 frente a ampliaciones no autorizadas. ISS-054 bloquea valores concretos de facetas y reglas híbridas.

ISS-055 impide afirmar exhaustividad del universo KPI. ISS-056 afecta C-003. ISS-057 afecta los candidatos cuya adaptación gastronómica no está resuelta. ISS-058 limita la comparabilidad jurisdiccional de C-021.

ISS-041 afecta la validación piloto. ISS-039 e ISS-040 afectan tesis y publicaciones. Los registros maestros contienen las condiciones exactas de cierre y deben consultarse antes de modificar cualquier estado.

## 19. La ruta recomendada desde aquí

El siguiente movimiento no debe ser redactar más capítulos ni crear nuevos KPI. Debe reanudarse B4 con el protocolo compacto.

Primero se prepara una ficha de contexto de pocas páginas con las decisiones indispensables, la baseline de 31 candidatos, los Issues y la pregunta B4-A. Claude decide método, criterios y estados. Codex convierte esa decisión en una matriz controlada.

Después los candidatos se evalúan en lotes pequeños. Cada lote devuelve resultados estructurados, no narraciones extensas. Codex integra los lotes y detecta duplicidades o contradicciones. Claude recibe únicamente las excepciones y emite el dictamen consolidado D-019.

Si la auditoría técnica resulta conforme, la Dirección ratifica D-019, congela una baseline de KPI admisibles y habilita B5. El mismo patrón se repite hasta B10: pregunta científica acotada, expediente breve, auditoría técnica, resolución, baseline y actualización de trazabilidad.

Una vez cerrado B10 se construye el candidato del estándar. Después se ejecuta la validación. Solo entonces se completan los capítulos de resultados, discusión y conclusiones de la tesis, y se prepara la publicación.

## 20. Conclusión general

El GOEI no está detenido por falta de documentos. Tiene una arquitectura más avanzada que su contenido científico definitivo. La base técnica permite saber con precisión qué está aprobado y qué falta.

Las decisiones más importantes logradas hasta ahora son la separación entre estándar y tesis, la gobernanza científico-técnica, la ontología congelada, el núcleo P1–P9, la taxonomía facetada, el universo de 31 candidatos y el marco GTRM. Estas piezas permiten continuar sin reconstruir el proyecto desde cero.

El principal riesgo actual es confundir volumen documental con avance científico. Generar más páginas no cerrará B4 ni producirá una fórmula válida. El progreso dependerá de decisiones científicas acotadas, evidencia trazable, integración técnica estricta y validación empírica.

El próximo hito real es D-019. Después vendrán medición, puntuación, agregación, interpretación, aplicación manual, manual técnico, validación, tesis y publicación. El proyecto debe conservar el orden porque cada fase utiliza decisiones de la anterior.

## Anexo A. Línea temporal resumida

1. Se define la visión del GOEI como estándar internacional de salud operacional.
2. Se decide construir el estándar antes que la tesis.
3. Se diseña la arquitectura documental, Constitución y gobernanza.
4. Se profesionaliza el repositorio con Git, releases, CHANGELOG y baselines.
5. EPIC-001 crea el MetaModel y Knowledge Graph.
6. D-006 se congela como Ontology Baseline v0.1.
7. EPIC-002 crea el lenguaje universal de procesos.
8. D-008 cierra B1 y congela P1–P9.
9. D-017 cierra B2 y congela la taxonomía facetada.
10. D-018 cierra B3 y congela 31 candidatos KPI.
11. D-009–D-016 resuelven la arquitectura científica GTRM.
12. GOEI-AUDIT-0007 declara B4 técnicamente preparada.
13. Claude alcanza un límite de créditos durante el primer intento amplio de B4.
14. Se adopta el protocolo de paquetes compactos y conversación nueva.
15. La dirección automática queda pausada hasta nueva instrucción.

## Anexo B. Documentos esenciales para comprobar esta narración

1. 00_Gobernanza/Constitucion_GOEI.md
2. 00_Gobernanza/Registro_de_decisiones.md
3. 00_Gobernanza/Registro_de_directivas.md
4. 00_Gobernanza/Preguntas_abiertas.md
5. 00_Gobernanza/Matriz_de_trazabilidad.md
6. 00_Gobernanza/coordinacion/ESTADO_MAESTRO.md
7. 00_Gobernanza/coordinacion/PIPELINE_B2_B10.md
8. 00_Gobernanza/coordinacion/resoluciones/GOEI_DIR_RES_0001_D008_B1.md
9. 00_Gobernanza/coordinacion/resoluciones/GOEI_DIR_RES_0002_D017_B2.md
10. 00_Gobernanza/coordinacion/resoluciones/GOEI_DIR_RES_0003_D018_B3.md
11. 00_Gobernanza/coordinacion/auditorias/GOEI_AUDIT_0007_B4_Readiness.md
12. 09_Manual_tecnico_general/Fase4_D006_Ontologia_del_GOEI.md
13. 04_Procesos_gastronomicos/EPIC-002_GOEI_Universal_Process_MetaModel.md
14. 03_Taxonomia_negocios/FaseB_B2_Taxonomia_universal_candidata.md
15. 05_Catalogo_KPI/GOEI_Catalogo_KPI_Candidatos_B3.md
16. 00_Gobernanza/coordinacion/decisiones_cientificas/GTRM/GOEI_CC_DICTAMEN_GTRM_INTEGRACION.md
17. 09_Manual_tecnico_general/GOEI_BOK/README.md
18. 12_Tesis/PLAN_MAESTRO_TESIS_GOEI.md
19. 12_Tesis/GOEI_Matriz_Requisitos_Tesis.csv
