# Diccionario de entidades del GOEI Knowledge Graph

| Campo | Valor |
|---|---|
| Identificador | GOEI-DD-ENT-0001 |
| Estado | Propuesta arquitectónica |
| Versión | 0.1.0-draft |

## Convenciones

Todos los elementos heredan: `id`, `titulo_o_etiqueta`, `estado`, `creado_en`, `creado_por`, `version`, `procedencia`, `idioma`, `licencia_o_acceso` y `checksum` cuando exista representación digital. `Documentos` indica los contenedores permitidos, no archivos inventados. `Decisión creadora` identifica el requisito de autoridad; `no aplica` significa que es registro de conocimiento, no contenido científico.

## E01 — Evidencia

| Campo | Definición |
|---|---|
| Identificador | `GOEI-EVD-NNNN` |
| Propósito | Representar soporte verificable utilizado en investigación, debate, decisión o validación. |
| Descripción | Fragmento, dato, resultado o artefacto con procedencia; no equivale a la fuente que lo contiene. |
| Atributos obligatorios | tipo, afirmación_soportada, procedencia, localización_exacta, fecha, estado_verificación, restricciones_uso |
| Relaciones permitidas | `extraída_de Fuente`; `producida_por Investigación/Validación`; `sustenta|contradice Hipótesis/Decisión`; `contenida_en Documento` |
| Restricciones | No puede existir sin procedencia; citarla no implica aceptación; una evidencia no crea componentes. |
| Ciclo de vida | registrada → verificada → aceptada/rechazada → sustituida/archivada |
| Dependencias | Fuente o actividad productora; método de obtención cuando aplique. |
| Documentos que la contienen | ficha de fuente, informe de investigación, expediente de decisión o validación. |
| Decisiones que la crean | No aplica; la decisión puede aceptar su uso. |
| Versionado | Inmutable como captura; correcciones generan nueva versión enlazada. |

## E02 — Fuente bibliográfica

| Campo | Definición |
|---|---|
| Identificador | `GOEI-SRC-NNNN` |
| Propósito | Identificar una obra, norma, regulación o dataset de procedencia. |
| Descripción | Registro bibliográfico controlado, independiente de las evidencias extraídas. |
| Atributos obligatorios | autor, año, título, tipo, edición, identificador_verificable, idioma, acceso, verificación |
| Relaciones permitidas | `contiene Evidencia`; `citada_por Documento/Investigación/Decisión`; `sustituye Fuente` |
| Restricciones | ID único por edición; URL sola no basta si existe DOI/ISBN/código; disponibilidad no implica calidad. |
| Ciclo de vida | candidata → catalogada → verificada → activa/descartada → archivada |
| Dependencias | Metadatos y ubicación legal. |
| Documentos que la contienen | catálogo bibliográfico y ficha de fuente. |
| Decisiones que la crean | No aplica. |
| Versionado | Cada edición o versión normativa es nodo distinto relacionado. |

## E03 — Investigación

| Campo | Definición |
|---|---|
| Identificador | `GOEI-RES-NNNN` |
| Propósito | Representar una actividad científica delimitada. |
| Descripción | Protocolo y ejecución que responde preguntas mediante métodos explícitos. |
| Atributos obligatorios | objetivo, preguntas, método, responsables, periodo, alcance, estado, protocolo, productos |
| Relaciones permitidas | `usa Fuente`; `produce Evidencia/Observación/Hipótesis/Documento`; `responde Pregunta`; `informa Debate/Decisión` |
| Restricciones | No puede declararse cerrada sin productos y limitaciones; resultado no equivale a decisión. |
| Ciclo de vida | propuesta → protocolizada → en_ejecución → analizada → cerrada → reproducida/archivada |
| Dependencias | Protocolo, fuentes, datos y autorizaciones aplicables. |
| Documentos que la contienen | protocolo, revisión, informe y paquete de reproducibilidad. |
| Decisiones que la crean | Puede ser encargada por Decisión; no siempre requiere decisión científica. |
| Versionado | Protocolo versionado; ejecución congelada conserva la versión usada. |

## E04 — Hipótesis

| Campo | Definición |
|---|---|
| Identificador | `GOEI-HYP-NNNN` |
| Propósito | Registrar una proposición comprobable aún no aceptada como decisión. |
| Descripción | Afirmación provisional con criterios de contraste y alcance. |
| Atributos obligatorios | enunciado, alcance, estado_epistémico, criterios_contraste, origen, fecha |
| Relaciones permitidas | `derivada_de Investigación/Evidencia`; `evaluada_por Investigación/Validación/Debate`; `aceptada|rechazada_por Decisión` |
| Restricciones | No crea reglas, KPI ni componentes; debe permanecer etiquetada como hipótesis. |
| Ciclo de vida | propuesta → en_contraste → apoyada/refutada/inconclusa → cerrada |
| Dependencias | Pregunta y evidencia de origen. |
| Documentos que la contienen | protocolo, informe, debate y expediente de decisión. |
| Decisiones que la crean | No aplica; una decisión puede adoptarla o rechazarla. |
| Versionado | Cambio de enunciado sustantivo crea nueva versión o hipótesis. |

## E05 — Pregunta abierta

| Campo | Definición |
|---|---|
| Identificador | `GOEI-ISS-NNNN` con subtipo `open-question` |
| Propósito | Registrar una incógnita que requiere investigación o decisión. |
| Descripción | Pregunta delimitada, con alcance y productos bloqueados identificados. |
| Atributos obligatorios | pregunta, origen, autoridad_requerida, impacto, prioridad, estado, criterio_cierre |
| Relaciones permitidas | `origina Investigación/Debate`; `bloquea Componente/Relación`; `respondida_por Decisión/Investigación` |
| Restricciones | No contiene respuesta provisional como hecho; cierre exige enlace verificable. |
| Ciclo de vida | abierta → en_estudio → respondida → cerrada/reabierta |
| Dependencias | Artefacto que detectó el vacío. |
| Documentos que la contienen | registro de issues, investigación y expediente de decisión. |
| Decisiones que la crean | No aplica. |
| Versionado | Registro acumulativo; no reescribir la pregunta cerrada. |

## E06 — Observación

| Campo | Definición |
|---|---|
| Identificador | `GOEI-OBS-NNNN` |
| Propósito | Registrar un dato o constatación concreta con procedencia. |
| Descripción | Artefacto descriptivo del estrato D de D-006-REV; no confundir con una opinión. |
| Atributos obligatorios | entidad, proceso, evento, periodo, valor_o_contenido, autor/agente, método, admisibilidad |
| Relaciones permitidas | `generada_por Evento/Investigación`; `acerca_de Entidad`; `soportada_por Evidencia`; `alimenta Validación/KPI-token` |
| Restricciones | Cumple AX-11; observación sin anclaje cuádruple es inadmisible; no crea KPI-def. |
| Ciclo de vida | capturada → verificada → admisible/inadmisible → usada → archivada |
| Dependencias | D-006-REV, evento, periodo, entidad y proceso. |
| Documentos que la contienen | registro de investigación, formulario respondido o expediente de validación. |
| Decisiones que la crean | No aplica; su estructura deriva de D-006-REV. |
| Versionado | Inmutable; corrección mediante revisión enlazada preservando original. |

## E07 — Debate científico

| Campo | Definición |
|---|---|
| Identificador | `GOEI-DEB-NNNN` |
| Propósito | Preservar alternativas, argumentos, objeciones y disensos. |
| Descripción | Actividad deliberativa previa o posterior a una decisión. |
| Atributos obligatorios | cuestión, participantes, periodo, posiciones, evidencias_citadas, resultado, acta |
| Relaciones permitidas | `discute Hipótesis/Pregunta/Propuesta`; `usa Evidencia`; `informa Decisión`; `registra_disenso_de Agente` |
| Restricciones | No equivale a decisión; posiciones deben atribuirse. |
| Ciclo de vida | convocado → abierto → deliberación → cerrado/suspendido → reabierto |
| Dependencias | Pregunta o propuesta y reglas de gobernanza. |
| Documentos que la contienen | acta, expediente de decisión y revisión. |
| Decisiones que la crean | Puede ser convocado por órgano competente. |
| Versionado | Actas inmutables; adendas enlazadas. |

## E08 — Decisión científica

| Campo | Definición |
|---|---|
| Identificador | `GOEI-DEC-NNNN` |
| Propósito | Autorizar, rechazar, sustituir o retirar una proposición científica del GOEI. |
| Descripción | Registro oficial de autoridad del Comité Científico. |
| Atributos obligatorios | problema, alternativas, evidencia, resolución, justificación, limitaciones, autoridad, fecha, estado, impacto |
| Relaciones permitidas | `informada_por Evidencia/Debate/Investigación`; `resuelve Issue/Hipótesis`; `crea|modifica|retira Componente`; `sustituye Decisión` |
| Restricciones | Una resolución principal; aprobada es inmutable; no puede autoaprobarse. |
| Ciclo de vida | propuesta → admisible → en_debate → aprobada/rechazada → sustituida/retirada |
| Dependencias | Expediente, autoridad y evidencia declarada. |
| Documentos que la contienen | registro de decisiones y expediente individual. |
| Decisiones que la crean | Órgano científico mediante acto de aprobación. |
| Versionado | No se edita sustantivamente; nueva decisión sustituye a la anterior. |

## E09 — Revisión técnica

| Campo | Definición |
|---|---|
| Identificador | `GOEI-REV-NNNN` |
| Propósito | Evaluar coherencia, implementabilidad, dependencias e impacto sin decidir ciencia. |
| Descripción | Informe consultivo de arquitectura, calidad o ingeniería. |
| Atributos obligatorios | objeto, versión_objeto, alcance, exclusiones, hallazgos, prioridades, revisor, fecha |
| Relaciones permitidas | `revisa Componente/Documento/Ontología`; `recomienda Cambio`; `detecta Issue`; `informa Decisión` |
| Restricciones | No modifica el objeto ni crea autoridad científica. |
| Ciclo de vida | planificada → en_revisión → emitida → respondida → cerrada |
| Dependencias | Objeto y criterios de revisión. |
| Documentos que la contienen | informe de revisión y registro de componentes. |
| Decisiones que la crean | No aplica; una decisión posterior puede adoptar recomendaciones. |
| Versionado | Informe emitido inmutable; corrección mediante fe de erratas o versión. |

## E10 — Componente

| Campo | Definición |
|---|---|
| Identificador | `GOEI-CMP-NNNN` o clase especializada |
| Propósito | Unidad modular y trazable del Framework. |
| Descripción | Contrato técnico derivado de una o más decisiones aprobadas. |
| Atributos obligatorios | responsabilidad, entradas, salidas, invariantes, estado, naturaleza, decisión_origen, propietario, versión |
| Relaciones permitidas | `creado_por Decisión`; `depende_de Componente`; `se_expresa_en Documento`; `validado_por Validación`; `incluido_en LíneaBase` |
| Restricciones | Responsabilidad única; no amplía la decisión; dependencias acíclicas salvo excepción documentada. |
| Ciclo de vida | propuesto → diseñado → revisión → aprobado → vigente → obsoleto → retirado |
| Dependencias | Decisiones y componentes declarados. |
| Documentos que la contienen | especificación, Standard, BOK y manuales derivados. |
| Decisiones que la crean | Decisión científica o institucional competente. |
| Versionado | SemVer; ruptura semántica incrementa mayor. |

## E11 — Documento

| Campo | Definición |
|---|---|
| Identificador | `GOEI-DOC-NNNN` |
| Propósito | Ser contenedor editorial de elementos del grafo. |
| Descripción | Artefacto informacional con ruta, formato, idioma y estado controlados. |
| Atributos obligatorios | título, tipo, naturaleza, idioma, estado, ruta_canónica, autores, aprobador, versión, checksum |
| Relaciones permitidas | `contiene Componente/Decisión/Evidencia`; `depende_de Documento`; `traduce Documento`; `incluido_en LíneaBase` |
| Restricciones | Contener un elemento no otorga autoridad; una única ruta canónica por versión. |
| Ciclo de vida | borrador → revisión → aprobado → publicado → sustituido → archivado |
| Dependencias | Componentes y decisiones que expresa. |
| Documentos que la contienen | No aplica; puede ser adjunto o parte de compilación. |
| Decisiones que la crean | Según naturaleza; los normativos requieren decisión. |
| Versionado | SemVer documental y relación explícita entre traducciones. |

## E12 — Manual

| Campo | Definición |
|---|---|
| Identificador | `GOEI-MAN-NNNN` |
| Propósito | Guiar aplicación humana de componentes aprobados. |
| Descripción | Documento derivado, general o por categoría. |
| Atributos obligatorios | audiencia, alcance, componentes_fuente, versión_fuente, idioma, estado |
| Relaciones permitidas | `deriva_de Standard/Componente`; `explica Regla/Formulario`; `aplica_a Taxonomía`; `incluye Anexo` |
| Restricciones | No introduce reglas ausentes del núcleo; debe fijar versión fuente. |
| Ciclo de vida | planificado → redactado → verificado → publicado → sustituido/retirado |
| Dependencias | Standard y componentes vigentes. |
| Documentos que la contienen | colección de manuales o release. |
| Decisiones que la crean | Decisión de aplicación/editorial; contenido normativo ya autorizado. |
| Versionado | Compatible con línea base; versión propia enlazada. |

## E13 — Ontología

| Campo | Definición |
|---|---|
| Identificador | `GOEI-ONT-NNNN` |
| Propósito | Definir conceptualización, entidades, relaciones y axiomas. |
| Descripción | Artefacto científico/técnico aprobado; puede tener vistas y serializaciones. |
| Atributos obligatorios | alcance, compromisos, clases, relaciones, axiomas, versión, decisión_origen, namespace futuro |
| Relaciones permitidas | `creada_por Decisión`; `define Componente`; `representada_en Documento/Esquema`; `depende_de Ontología` |
| Restricciones | Serialización no modifica semántica; no completar vacíos sin decisión. |
| Ciclo de vida | propuesta → revisión → aprobada → formalizada → vigente → sustituida |
| Dependencias | Decisiones D-006/D-006-REV y futuras. |
| Documentos que la contienen | especificación ontológica, Standard o anexo. |
| Decisiones que la crean | Decisión científica. |
| Versionado | Identidad conceptual separada de versión y serialización. |

## E14 — Taxonomía

| Campo | Definición |
|---|---|
| Identificador | `GOEI-TAX-NNNN` |
| Propósito | Organizar clases y criterios de pertenencia. |
| Descripción | Componente clasificatorio versionado. |
| Atributos obligatorios | alcance, clases, jerarquía, criterios, exclusiones, versión, decisión_origen |
| Relaciones permitidas | `especializa Ontología`; `clasifica Entidad`; `delimita_aplicabilidad KPI/Manual`; `mapea_a Taxonomía` |
| Restricciones | Jerarquía `is-a` acíclica; criterios no inferidos; clasificación conserva evidencia. |
| Ciclo de vida | propuesta → piloto → aprobada → vigente → ampliada/sustituida |
| Dependencias | Ontología y decisión de unidad/clasificación. |
| Documentos que la contienen | catálogo taxonómico, Standard y manual. |
| Decisiones que la crean | Decisión científica. |
| Versionado | Cambios de pertenencia evalúan compatibilidad histórica. |

## E15 — Proceso

| Campo | Definición |
|---|---|
| Identificador | `GOEI-PRC-NNNN` |
| Propósito | Representar un tipo de comportamiento o proceso de referencia. |
| Descripción | Componente definicional; no es una ejecución operacional concreta. |
| Atributos obligatorios | nombre, definición, límites, entradas, salidas, relaciones, versión, decisión_origen |
| Relaciones permitidas | `parte_de Proceso`; `usa Componente`; `relacionado_con KPI`; `definido_por Ontología` |
| Restricciones | Separar type de ejecución; jerarquía part-of acíclica. |
| Ciclo de vida | candidato → modelado → aprobado → vigente → sustituido/retirado |
| Dependencias | Ontología y catálogo de procesos aprobado. |
| Documentos que la contienen | catálogo, mapas y Standard. |
| Decisiones que la crean | Decisión científica. |
| Versionado | SemVer; cambios de límites pueden ser incompatibles. |

## E16 — KPI

| Campo | Definición |
|---|---|
| Identificador | `GOEI-KPI-NNNN` |
| Propósito | Identificar una definición de KPI type aprobada. |
| Descripción | Contrato de medición; nunca un valor observado. EPIC-001 no crea instancias concretas. |
| Atributos obligatorios | nombre, definición, propósito, variable, unidad, dirección, aplicabilidad, fuente, frecuencia, regla_cálculo, estado_admisibilidad, versión |
| Relaciones permitidas | `creado_por Decisión`; `mide Componente`; `relacionado_con Proceso`; `usa Regla/Fórmula`; `validado_por Validación` |
| Restricciones | Type/token separados; no existe KPI sin decisión y admisibilidad; ningún valor concreto se define aquí. |
| Ciclo de vida | propuesto → evaluado → admisible/rechazado → aprobado → activo → obsoleto → retirado |
| Dependencias | Ontología, taxonomía, procesos, criterios y decisión científica. |
| Documentos que la contienen | catálogo KPI, Standard, manual y formulario derivado. |
| Decisiones que la crean | Decisión científica específica. |
| Versionado | Cambios semánticos/fórmula/unidad requieren nueva versión y análisis de comparabilidad. |

## E17 — Regla

| Campo | Definición |
|---|---|
| Identificador | `GOEI-RUL-NNNN` |
| Propósito | Expresar una condición, obligación, transformación o decisión controlada. |
| Descripción | Superclase de reglas normativas, integridad, cálculo, aplicabilidad y navegación. |
| Atributos obligatorios | tipo, enunciado, alcance, entradas, efecto, prioridad, naturaleza, versión, decisión_origen |
| Relaciones permitidas | `gobierna Componente`; `implementada_por Fórmula/Formulario`; `conflicta_con Regla`; `validada_por Validación` |
| Restricciones | Toda regla normativa requiere decisión; conflictos se resuelven por jerarquía explícita. |
| Ciclo de vida | propuesta → revisión → aprobada → vigente → suspendida/sustituida/retirada |
| Dependencias | Decisión, conceptos y componentes referenciados. |
| Documentos que la contienen | Standard, ontología, especificación matemática o política. |
| Decisiones que la crean | Científica o institucional según tipo. |
| Versionado | SemVer y vigencia temporal. |

## E18 — Fórmula

| Campo | Definición |
|---|---|
| Identificador | `GOEI-FML-NNNN` |
| Propósito | Representar una expresión matemática aprobada y reproducible. |
| Descripción | Componente formal con símbolos vinculados a entidades; EPIC-001 solo define su contrato. |
| Atributos obligatorios | expresión, símbolos, dominio, rango, precondiciones, precisión, redondeo, casos_prueba, versión, decisión_origen |
| Relaciones permitidas | `implementa Regla`; `calcula KPI/Resultado`; `usa Parámetro/Componente`; `validada_por Validación` |
| Restricciones | Ningún símbolo sin referente; no crear fórmulas sin decisión; determinismo declarado. |
| Ciclo de vida | propuesta → revisión_formal → validación → aprobada → vigente → sustituida |
| Dependencias | Reglas, KPI, unidades y decisiones aprobadas. |
| Documentos que la contienen | especificación matemática, Standard y casos de prueba. |
| Decisiones que la crean | Decisión científica. |
| Versionado | Cambio de expresión o política numérica requiere versión y comparabilidad. |

## E19 — Formulario

| Campo | Definición |
|---|---|
| Identificador | `GOEI-FRM-NNNN` |
| Propósito | Capturar o presentar datos manualmente de acuerdo con componentes aprobados. |
| Descripción | Instrumento derivado con campos versionados; no es fuente autónoma de reglas. |
| Atributos obligatorios | propósito, audiencia, campos, instrucciones, componentes_fuente, idioma, formato, versión |
| Relaciones permitidas | `implementa Componente/Regla`; `captura Observación`; `aplica_a Taxonomía`; `incluido_en Manual` |
| Restricciones | Todo campo enlaza definición fuente; versión visible; papel y software comparten contrato. |
| Ciclo de vida | diseñado → probado → verificado → publicado → sustituido/retirado |
| Dependencias | Componentes, reglas, ontología y manual. |
| Documentos que la contienen | instrumento, manual o anexo. |
| Decisiones que la crean | Decisión de aplicación; reglas subyacentes ya aprobadas. |
| Versionado | Propio y enlazado a línea base; respuestas conservan versión exacta. |

## E20 — Validación

| Campo | Definición |
|---|---|
| Identificador | `GOEI-VAL-NNNN` |
| Propósito | Evaluar una afirmación o componente contra criterios definidos. |
| Descripción | Actividad y expediente con alcance, método, datos, resultado y limitaciones. |
| Atributos obligatorios | objeto, versión_objeto, preguntas, método, criterios, responsables, datos, resultado, limitaciones, fecha |
| Relaciones permitidas | `valida|no_valida Componente/Fórmula/KPI/LíneaBase`; `produce Evidencia`; `usa Observación`; `informa Decisión/Release` |
| Restricciones | Resultado limitado al objeto y versión; validación no modifica el objeto. |
| Ciclo de vida | diseñada → aprobada → ejecutada → analizada → cerrada → replicada/archivada |
| Dependencias | Protocolo, objeto congelado, criterios y datos. |
| Documentos que la contienen | protocolo, informe y expediente de liberación. |
| Decisiones que la crean | Puede ser exigida o encargada por Decisión. |
| Versionado | Cada ejecución es nodo; protocolo y reporte se versionan. |

## E21 — Publicación

| Campo | Definición |
|---|---|
| Identificador | `GOEI-PUB-NNNN` |
| Propósito | Comunicar resultados o versiones a una audiencia externa. |
| Descripción | Producto derivado científico, técnico o divulgativo. |
| Atributos obligatorios | título, autores, tipo, fecha, identificador, audiencia, fuentes_goei, versión_goei, estado |
| Relaciones permitidas | `deriva_de Investigación/Standard/Validación`; `cita Fuente`; `publica Documento`; `relacionada_con Tesis` |
| Restricciones | No adquiere autoridad normativa; debe declarar versión GOEI. |
| Ciclo de vida | propuesta → redactada → revisión → aceptada/publicada → corregida/retirada |
| Dependencias | Productos fuente y permisos. |
| Documentos que la contienen | expediente editorial y repositorio de publicaciones. |
| Decisiones que la crean | No aplica; publicación oficial puede requerir autorización institucional. |
| Versionado | Preprint, versión aceptada y publicada como realizaciones enlazadas. |

## E22 — Tesis

| Campo | Definición |
|---|---|
| Identificador | `GOEI-THS-NNNN` |
| Propósito | Integrar un trabajo académico derivado del desarrollo GOEI. |
| Descripción | Producto académico subordinado al estándar y sus versiones. |
| Atributos obligatorios | título, autor, institución, programa, supervisión, periodo, versión_goei, estado, repositorio |
| Relaciones permitidas | `deriva_de Investigación/Standard`; `cita Fuente`; `produce Publicación`; `incluye Anexo` |
| Restricciones | No crea reglas ni decisiones; afirmaciones propias conservan estado académico. |
| Ciclo de vida | propuesta → protocolizada → desarrollo → revisión → defendida → publicada/archivada |
| Dependencias | Protocolo académico y artefactos GOEI citados. |
| Documentos que la contienen | carpeta de tesis y repositorio institucional. |
| Decisiones que la crean | No aplica al contenido GOEI. |
| Versionado | Entregas versionadas; versión defendida inmutable con correcciones registradas. |

## E23 — Versión

| Campo | Definición |
|---|---|
| Identificador | `GOEI-VER-NNNN` |
| Propósito | Identificar un estado concreto de un artefacto versionable. |
| Descripción | Realización inmutable con número, contenido, fecha y compatibilidad. |
| Atributos obligatorios | artefacto, número, esquema_versionado, fecha, estado, checksum, autoría, cambios |
| Relaciones permitidas | `versión_de Elemento`; `sucede_a Versión`; `incluida_en LíneaBase`; `validada_por Validación` |
| Restricciones | Única por artefacto+número; publicada es inmutable; no implica vigencia. |
| Ciclo de vida | borrador → candidata → publicada → sustituida → retirada |
| Dependencias | Artefacto conceptual y registro de cambio. |
| Documentos que la contienen | manifiesto, metadatos y línea base. |
| Decisiones que la crean | Cambio aprobado o publicación autorizada. |
| Versionado | La entidad Versión no se versiona; se corrige mediante registro y nueva realización. |

## E24 — Línea base GOEI

| Campo | Definición |
|---|---|
| Identificador | `GOEI-BSL-NNNN` |
| Propósito | Congelar un conjunto coherente de versiones de componentes. |
| Descripción | Manifiesto reproducible del Framework en un punto de control. |
| Atributos obligatorios | nombre, fecha_corte, versiones_incluidas, estado, checksum_manifiesto, compatibilidad, aprobador |
| Relaciones permitidas | `fija Versión`; `publicada_por Release`; `sustituye LíneaBase`; `validada_por Validación` |
| Restricciones | Inmutable; todas las dependencias cerradas o issues declarados; no contiene referencias flotantes. |
| Ciclo de vida | propuesta → construida → verificada → aprobada → publicada → sustituida/retirada |
| Dependencias | Versiones exactas y autoridad. |
| Documentos que la contienen | manifiesto de línea base e historial. |
| Decisiones que la crean | Autorización de publicación; contenido ya decidido. |
| Versionado | Cada línea base es nodo nuevo. |

## E25 — Release

| Campo | Definición |
|---|---|
| Identificador | `GOEI-REL-NNNN` |
| Propósito | Publicar y distribuir una línea base verificable. |
| Descripción | Evento/registro de liberación con artefactos, notas y fecha efectiva. |
| Atributos obligatorios | etiqueta, línea_base, fecha_publicación, fecha_vigencia, notas, artefactos, checksums, autorizador |
| Relaciones permitidas | `publica LíneaBase`; `incluye Documento/Manual/Formulario`; `sucede_a Release`; `resuelve Issue` |
| Restricciones | Una release apunta a una sola línea base; no cambia su contenido. |
| Ciclo de vida | planificada → candidata → autorizada → publicada → soportada → retirada |
| Dependencias | Línea base verificada y autorización. |
| Documentos que la contienen | notas de release y manifiesto. |
| Decisiones que la crean | Decisión/autorización de liberación. |
| Versionado | Releases no se sobrescriben; correcciones generan otra release. |

## E26 — Registro de cambio

| Campo | Definición |
|---|---|
| Identificador | `GOEI-CHG-NNNN` |
| Propósito | Controlar una modificación desde solicitud hasta aplicación. |
| Descripción | Expediente de cambio con justificación, impacto, autoridad y migración. |
| Atributos obligatorios | motivo, solicitante, alcance, clase, objeto, impacto, decisión_habilitante, estado, versiones_origen_destino |
| Relaciones permitidas | `propone_cambio_a Elemento`; `implementa Decisión`; `produce Versión`; `resuelve Issue`; `requiere Validación` |
| Restricciones | No aplica cambios sin autoridad; un cambio rechazado se conserva. |
| Ciclo de vida | presentado → triage → análisis → aprobado/rechazado → implementado → verificado → cerrado |
| Dependencias | Objeto, decisión y análisis de impacto. |
| Documentos que la contienen | registro y expediente de cambios. |
| Decisiones que la crean | No aplica; ejecución requiere decisión competente. |
| Versionado | Registro acumulativo e inmutable tras cierre. |

## E27 — Issue

| Campo | Definición |
|---|---|
| Identificador | `GOEI-ISS-NNNN` |
| Propósito | Registrar problema, vacío, riesgo o dependencia no resuelta. |
| Descripción | Unidad operativa con alcance bloqueado y criterio de cierre. |
| Atributos obligatorios | tipo, enunciado, origen, prioridad, alcance, bloqueados, autoridad_requerida, criterio_cierre, estado |
| Relaciones permitidas | `detectado_por Revisión/Investigación`; `bloquea Elemento/Relación`; `requiere Decisión`; `resuelto_por Decisión/Cambio` |
| Restricciones | Cierre exige evidencia; no bloquear ramas no dependientes. |
| Ciclo de vida | abierto → clasificado → en_progreso → resuelto → verificado → cerrado/reabierto |
| Dependencias | Objeto afectado y responsable. |
| Documentos que la contienen | registro de issues y expediente relacionado. |
| Decisiones que la crean | No aplica. |
| Versionado | Historia de eventos; no se reescribe tras cierre. |

## E28 — Constitución

| Campo | Definición |
|---|---|
| Identificador | `GOEI-CON-NNNN` |
| Propósito | Establecer principios superiores, autoridad y procesos de gobierno. |
| Descripción | Documento fundador; no define KPI ni fórmulas. |
| Atributos obligatorios | alcance, principios, órganos, jerarquía, procesos_cambio, aprobación, vigencia, versión |
| Relaciones permitidas | `establece Organización/Rol/Regla`; `prevalece_sobre Documento`; `autoriza ProcesoGobernanza`; `enmendada_por Decisión` |
| Restricciones | Contenido pendiente no se trata como vigente; enmienda exige procedimiento reforzado. |
| Ciclo de vida | esqueleto → deliberación → aprobada → vigente → enmendada/sustituida |
| Dependencias | Autoridad constituyente aún por definir. |
| Documentos que la contienen | documento constitucional y anexos. |
| Decisiones que la crean | Acto constituyente institucional. |
| Versionado | Versiones mayores para enmiendas sustantivas; historia completa. |

## E29 — GOEI Standard

| Campo | Definición |
|---|---|
| Identificador | `GOEI-STD-NNNN` |
| Propósito | Integrar el corpus oficial del estándar en una edición. |
| Descripción | Artefacto normativo/informativo compuesto; no es el metamodelo ni toda la realidad GOEI. |
| Atributos obligatorios | alcance, módulos, referencias, naturaleza_partes, versión, línea_base, vigencia, aprobador |
| Relaciones permitidas | `integra Documento/Componente/Requisito`; `depende_de Ontología/Taxonomía`; `publicado_como Release`; `explicado_por Manual/BOK` |
| Restricciones | Solo integra componentes aprobados; partes normativas identificadas; no referencias flotantes. |
| Ciclo de vida | borrador → candidato → validación → aprobado → publicado/vigente → sustituido/retirado |
| Dependencias | Componentes, validación y gobernanza. |
| Documentos que la contienen | compilación oficial y manifiesto. |
| Decisiones que la crean | Decisiones científicas de contenido y autorización institucional de publicación. |
| Versionado | Ediciones/lineas base; comparabilidad explícita. |

## E30 — GOEI BOK

| Campo | Definición |
|---|---|
| Identificador | `GOEI-BOK-NNNN` |
| Propósito | Organizar el cuerpo de conocimiento explicativo del GOEI. |
| Descripción | Vista curada de conceptos, métodos, decisiones y guías; no sustituye al Standard. |
| Atributos obligatorios | alcance, mapa_conocimiento, fuentes, versión_standard, audiencia, curadores, versión |
| Relaciones permitidas | `explica Standard/Componente`; `referencia Decisión/Investigación`; `incluye Manual/Publicación`; `deriva_de LíneaBase` |
| Restricciones | Debe distinguir norma, evidencia y explicación; no introduce requisitos. |
| Ciclo de vida | planificado → curado → revisión → publicado → actualizado/sustituido |
| Dependencias | Grafo, Standard y productos aprobados. |
| Documentos que la contienen | portal o compilación BOK. |
| Decisiones que la crean | Autorización editorial; contenido fuente ya autorizado. |
| Versionado | Versión propia ligada a línea base. |

## E31 — Requisito normativo

| Campo | Definición |
|---|---|
| Identificador | `GOEI-REQ-NNNN` |
| Propósito | Representar una obligación verificable del Standard. |
| Descripción | Unidad normativa atómica, trazable a decisión. |
| Atributos obligatorios | enunciado, sujeto, condición, criterio_conformidad, alcance, decisión_origen, versión, vigencia |
| Relaciones permitidas | `creado_por Decisión`; `expresado_en Documento`; `implementado_por Componente/Formulario`; `verificado_por Validación/Auditoría` |
| Restricciones | Atómico, no ambiguo y verificable; no existe sin decisión aprobada. |
| Ciclo de vida | propuesto → revisado → aprobado → vigente → suspendido/sustituido/retirado |
| Dependencias | Decisión, términos ontológicos y regla aplicable. |
| Documentos que la contienen | Standard y anexos normativos. |
| Decisiones que la crean | Decisión científica o institucional competente. |
| Versionado | Cambios de obligación requieren versión y análisis de transición. |

## E32 — Anexo

| Campo | Definición |
|---|---|
| Identificador | `GOEI-ANX-NNNN` |
| Propósito | Contener material complementario identificado como normativo o informativo. |
| Descripción | Documento dependiente de uno principal. |
| Atributos obligatorios | documento_principal, naturaleza, alcance, versión_fuente, estado, idioma |
| Relaciones permitidas | `anexo_de Documento/Standard/Manual`; `contiene Componente/Ejemplo`; `traduce Anexo` |
| Restricciones | No existe sin propietario; naturaleza explícita; no contradice documento principal. |
| Ciclo de vida | borrador → revisión → aprobado → publicado → sustituido/retirado |
| Dependencias | Documento principal y componentes. |
| Documentos que la contienen | compilación o paquete de release. |
| Decisiones que la crean | Si normativo, decisión; si informativo, autorización editorial. |
| Versionado | Ligado a versión principal y con identidad propia. |

## E33 — Agente

| Campo | Definición |
|---|---|
| Identificador | `GOEI-AGT-NNNN` |
| Propósito | Atribuir creación, revisión, aprobación, custodia o ejecución. |
| Descripción | Persona, sistema o rol actuante en el grafo de conocimiento; separado del Agente del dominio cuando corresponda. |
| Atributos obligatorios | tipo, nombre_o_seudónimo, roles, afiliación, periodo_rol, identificador_externo, estado |
| Relaciones permitidas | `miembro_de Organización`; `crea/revisa/aprueba Elemento`; `declara_conflicto`; `custodia Evidencia` |
| Restricciones | Acción atribuida al rol vigente; privacidad según política; sistema no asume autoridad humana. |
| Ciclo de vida | registrado → activo → suspendido/inactivo → archivado |
| Dependencias | Rol y organización cuando aplique. |
| Documentos que la contienen | registros de gobernanza y procedencia. |
| Decisiones que la crean | No aplica. |
| Versionado | Cambios de afiliación/rol son eventos temporales, no reescritura. |

## E34 — Organización

| Campo | Definición |
|---|---|
| Identificador | `GOEI-ORG-NNNN` |
| Propósito | Representar órganos, instituciones y custodios con autoridad o responsabilidad. |
| Descripción | Entidad colectiva con mandato y periodo de vigencia. |
| Atributos obligatorios | nombre, tipo, mandato, autoridad, composición, vigencia, jurisdicción, estado |
| Relaciones permitidas | `establecida_por Constitución/Decisión`; `tiene_miembro Agente`; `aprueba/custodia Elemento`; `sucede_a Organización` |
| Restricciones | Autoridad explícita y temporal; no inferida por autoría. |
| Ciclo de vida | propuesta → constituida → activa → reorganizada/disuelta → archivada |
| Dependencias | Constitución o acto institucional. |
| Documentos que la contienen | constitución, política y registros. |
| Decisiones que la crean | Acto institucional competente. |
| Versionado | Mandato versionado; identidad institucional persistente salvo sucesión. |

## Resumen de cobertura

Las 34 entidades cubren todas las solicitadas y añaden únicamente las necesarias para autoridad (`Agente`, `Organización`), atomicidad normativa (`Requisito`), empaquetado (`Anexo`, `Línea base`, `Release`, `Formulario`) y distinción entre Framework y corpus (`GOEI Standard`). Ninguna añade contenido científico.
