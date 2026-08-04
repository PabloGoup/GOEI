# Matriz de preguntas y controles de la auditoría GTRM

| Campo | Valor |
|---|---|
| Identificador documental | `GOEI-GTRM-AUDIT-CONTROLS-001` |
| Naturaleza | Instrumento consultivo de trazabilidad; no normativo |
| Objeto | Propuesta `GOEI Technical Reference Matrix (GTRM)` |
| Estado | Preparado para auditoría |
| Autoridad científica | Comité Científico (Claude), dentro de su competencia |
| Autoridad técnica | Oficina Técnica GOEI (Codex), dentro de su competencia |
| Efecto sobre el estándar | Ninguno hasta decisión formal posterior |
| Baseline protegida | D-006 Ontology Baseline v0.1 |

## 1. Propósito y límites

Esta matriz controla que la auditoría metodológica GTRM responda íntegramente la solicitud, mantenga separadas las competencias científica y técnica y permita rastrear cada conclusión hasta su evidencia.

Este documento:

- no responde las preguntas científicas;
- no selecciona el dictamen `A`, `B` o `C`;
- no crea GTRM, KPI, categorías, funciones, fórmulas, puntajes, umbrales ni tolerancias;
- no modifica decisiones, registros maestros, baselines, ontología ni el pipeline B2–B10;
- no convierte hipótesis de la propuesta en hechos aprobados;
- no autoriza la incorporación de un componente al estándar.

## 2. Estados permitidos para cada control

| Estado | Significado |
|---|---|
| Pendiente | No existe respuesta auditada suficiente. |
| En análisis científico | Claude reúne o evalúa evidencia dentro de su competencia. |
| En análisis técnico | Codex evalúa arquitectura, trazabilidad o implementación. |
| Devuelto | La evidencia o respuesta no satisface el criterio de aceptación. |
| Conforme para dictamen | El control tiene evidencia y razonamiento suficientes para alimentar el dictamen consultivo. |
| No aplicable justificado | La inaplicabilidad está documentada, fundamentada y auditada. |

`Conforme para dictamen` no significa aprobado ni incorporado al GOEI.

## 3. Separación conceptual obligatoria

| ID | Concepto que debe definirse sin solapamiento | Evidencia o especificación requerida | Responsable primario | Resultado esperado | Criterio de aceptación | Dependencia | Prohibición de inferencia |
|---|---|---|---|---|---|---|---|
| C-01 | Observación | Fundamento conceptual y correspondencia con D-006; fenómeno o evento observado | Claude; control arquitectónico Codex | Definición, entradas, salidas y límites | No se confunde con dato registrado, cálculo ni puntaje | D-006 v0.1 | Codex no redefine D-006; Claude no supone que toda observación sea una medición |
| C-02 | Medición registrada | Evidencia metrológica/metodológica; instrumento, unidad, método, agente, tiempo y procedencia | Claude; modelado Codex | Definición y relación explícita con observación | Distingue acto de medir, registro persistido y calidad del dato | C-01 | No asumir validez por el solo hecho de que exista un registro |
| C-03 | Valor de KPI | Especificación aprobada de cálculo y requisitos de datos, cuando exista | Claude | Definición del valor derivado y su procedencia | Se identifica como resultado de mediciones válidas, no como observación ni puntuación | C-02; futuras B3–B5 | No crear KPI, fórmula ni ejemplo numérico normativo |
| C-04 | Condición de referencia | Evidencia normativa, regulatoria, empírica o experta y dominio declarado | Claude | Definición del estado patrón de comparación | Se diferencia de una distribución o valor comparativo observado | C-03 | No declarar una referencia universal o específica sin evidencia |
| C-05 | Benchmark | Fuente, población, periodo, categoría, jurisdicción, método y estimación de incertidumbre | Claude | Definición de valor o distribución comparativa | Se distingue de condición normativa y conserva procedencia | C-03 | No equiparar benchmark con límite regulatorio ni con objetivo |
| C-06 | Función de puntuación | Método científico, dominio, parámetros, comportamiento y limitaciones | Claude | Definición de la transformación y autoridad que la sustenta | Entradas y salida inequívocas; no se oculta dentro de una tabla | C-03–C-05 | Codex no diseña curva, cortes, parámetros ni puntajes |
| C-07 | Normalización | Fundamento del propósito comparativo y relación con la función de puntuación | Claude | Definición operacional no redundante | Resuelve si es la misma transformación, una posterior o una validación de escala | C-06; futuras B6–B8 | No presumir que toda puntuación está normalizada |
| C-08 | Puntuación normalizada | Escala, dominio, precisión, incertidumbre y semántica aprobados | Claude | Definición de salida trazable | No se confunde con valor KPI, puntaje intermedio ni interpretación | C-06–C-07 | No fijar escala, precisión, redondeo o tolerancia |
| C-09 | Tabla de consulta manual | Especificación normativa fuente y prueba de equivalencia | Claude define requisitos; Codex verifica representación | Definición como representación, no autoridad independiente | Cada celda/rango es derivable de la misma especificación que usa el software | C-06–C-08 | No convertir conveniencia manual en justificación científica |
| C-10 | Interpretación | Evidencia de validez y límites de uso | Claude | Definición del significado y de inferencias prohibidas | Distingue resultado matemático, clasificación e inferencia sustantiva | C-08; futuras B8–B9 | No crear clases, etiquetas ni conclusiones de desempeño |

## 4. Matriz de las diez preguntas originales

| ID | Pregunta o solicitud | Evidencia requerida | Responsable | Resultado esperado | Criterio de aceptación | Dependencia | Prohibición de inferencia |
|---|---|---|---|---|---|---|---|
| P-01 | Determinar si GTRM es componente científico nuevo o parte de normalización | Literatura primaria sobre índices compuestos, escalamiento, referencias y funciones; análisis C-01–C-10 | Claude; contraste Codex | Conclusión fundamentada y efecto arquitectónico | Separa identidad científica de empaquetado documental o implementación | C-01–C-10 | No aceptar el nombre GTRM como prueba de independencia conceptual |
| P-02 | Determinar si debe ser una fase oficial y su posición exacta | Dependencias científicas y comparación de las tres ubicaciones candidatas | Claude y Codex | Ubicación recomendada o rechazo de fase autónoma | Entradas, salidas, gate, autoridad y relación B5–B8 explícitos | P-01 | No alterar el pipeline antes de decisión formal |
| P-03 | Analizar impacto sobre todos los componentes | Fuentes canónicas vigentes y decisión científica resultante | Codex; Claude en efectos científicos | Matriz `sin cambio / ampliar / reescribir / decisión requerida` | Cubre constructo, ontología, taxonomía, procesos, KPI, admisibilidad, medición, normalización, matemática, interpretación, validación, manuales, formularios, software, KG, MetaModel, Constitución, BOK, repositorio, tesis y publicaciones | P-01–P-02 | No editar componentes ni D-006 durante la auditoría |
| P-04 | Evaluar y, si corresponde, proponer clasificación | Evidencia sobre dimensiones de clasificación y análisis de solapamiento | Claude; formalización Codex | Clasificación multidimensional candidata o rechazo justificado | Ejes ortogonales; cada término tiene criterio de pertenencia | P-01 | No convertir ejemplos de la solicitud en clases oficiales |
| P-05 | Determinar identidad y condición documental de cada GTRM | Requisitos de estándares, configuración, procedencia y gobernanza | Codex; fundamento Claude | Modelo candidato de identidad, versión y ciclo de vida | Diferencia entidad científica, especificación normativa, tabla y software | P-01; P-04 | No asignar códigos reales, baseline ni vigencia |
| P-06 | Analizar modificación del pipeline y proponerlo si procede | Resultados P-01–P-05 y gates B5–B8 | Claude y Codex | Pipeline recomendado con dependencias y bloqueos | Evita doble transformación y asigna autoridad por etapa | P-01–P-05 | No cerrar ni reabrir fases vigentes |
| P-07 | Evaluar fortalezas o debilidades sistémicas | Comparación razonada de escenarios con/sin GTRM | Claude y Codex | Balance para trazabilidad, auditabilidad, reproducibilidad, comparabilidad, independencia tecnológica, aplicación manual, robustez y gobernanza | Cada efecto indica mecanismo, evidencia, limitación y riesgo residual | P-01–P-06 | No asumir que más documentación implica más validez |
| P-08 | Identificar riesgos metodológicos | Literatura, análisis estadístico conceptual, casos frontera y arquitectura | Claude; riesgos técnicos Codex | Registro de riesgos y mitigaciones candidatas | Incluye riesgos conceptuales, matemáticos, estadísticos, prácticos y normativos | C-01–C-10 | No presentar mitigaciones candidatas como decisiones aprobadas |
| P-09 | Proponer incorporación oficial solo si procede | Dictamen científico provisional y análisis arquitectónico | Claude y Codex | Nivel, relaciones, dependencias, restricciones, autoridad y ciclo de vida candidatos | La propuesta queda condicionada a Issue y decisión formal separada | P-01–P-08 | No implementar, versionar ni congelar GTRM |
| P-10 | Emitir dictamen `A`, `B` o `C` | Expediente completo, evidencia citada y todos los controles críticos conformes | Claude emite componente científico; Codex emite componente arquitectónico | Dictamen consultivo único, motivado y trazable | Una opción inequívoca; justificación, limitaciones, autoridad y efectos | P-01–P-09; E-01–E-15 | No registrar el dictamen como decisión oficial ni alterar el estándar |

## 5. Preguntas adicionales obligatorias

| ID | Pregunta adicional | Evidencia requerida | Responsable | Resultado esperado | Criterio de aceptación | Dependencia | Prohibición de inferencia |
|---|---|---|---|---|---|---|---|
| A-01 | ¿GTRM actúa sobre observaciones, mediciones registradas o valores KPI? | Modelo de procedencia y fundamento científico | Claude; consistencia Codex | Tipo de entrada inequívoco | Se documentan entradas inadmisibles y consecuencias | C-01–C-06 | No inferir entrada desde el ejemplo conceptual |
| A-02 | ¿Produce puntuación final o parámetros para otra transformación? | Definiciones de salida, escala y relación con normalización | Claude | Salida inequívoca y etapas posteriores | El flujo no contiene transformación oculta | C-06–C-08 | No denominar “normalizado” a un puntaje sin prueba |
| A-03 | ¿`GTRM → normalización` es doble transformación? | Análisis algebraico/conceptual de funciones, sin fijar fórmulas GOEI | Claude | Dictamen de redundancia o complementariedad | Cada transformación tiene propósito y dominio distintos o se fusionan | A-02 | Codex no resuelve una ambigüedad matemática por diseño documental |
| A-04 | ¿GTRM es función, parametrización o tabla? | Distinción entre especificación, parámetros y representación | Claude y Codex | Naturaleza y fuente de verdad determinadas | Solo una especificación tiene autoridad normativa; tabla y código son representaciones | A-02–A-03 | No tratarlas como equivalentes sin correspondencia demostrada |
| A-05 | ¿Condición de referencia y benchmark son distintos? | Evidencia conceptual y casos de aplicabilidad | Claude | Distinción, relación o equivalencia justificada | Autoridad, procedencia y semántica quedan separadas | C-04–C-05 | No usar términos como sinónimos por conveniencia |
| A-06 | ¿Toda referencia debe ser específica por categoría? | Evidencia empírica/metodológica de heterogeneidad y transferibilidad | Claude | Regla científica o agenda de validación | No se deriva especificidad solo de diferencias operacionales plausibles | C-04–C-05 | No asumir incomparabilidad absoluta entre categorías |
| A-07 | ¿Pueden existir referencias universales, regulatorias, jurisdiccionales, sectoriales o por categoría? | Normas, regulación y evidencia de alcance | Claude | Niveles admisibles y dominios | Cada nivel declara autoridad, jurisdicción, vigencia y límites | A-06 | No asumir jerarquía o transferibilidad automática |
| A-08 | ¿Cómo se selecciona entre varias referencias aplicables? | Decisión científica sobre precedencia y conflictos | Claude; implementación Codex | Regla de aplicabilidad candidata | Coincidencia explícita y tratamiento no calculable ante ausencia/conflicto | A-07 | Software y taxonomía no pueden inventar precedencia |
| A-09 | ¿Cómo se representa la incertidumbre? | Métodos válidos para medición, muestra, benchmark, parámetros y salida | Claude | Requisitos de representación, sin valores inventados | Distingue fuentes y propagación; declara insuficiencia cuando corresponda | C-02–C-08 | Codex no elige intervalo, clase, tolerancia ni redondeo |
| A-10 | ¿Cómo se preserva la reproducibilidad histórica? | Reglas de configuración, procedencia y versionado | Codex; requisitos científicos Claude | Registro mínimo para reproducción y simulación | La versión sustituida permanece recuperable y no se sobrescribe | P-05; A-09 | No recalcular silenciosamente evaluaciones históricas |
| A-11 | ¿Cómo se garantiza equivalencia papel–software? | Especificación común y casos canónicos | Codex; tolerancia y precisión Claude | Protocolo verificable de equivalencia | Cubre límites, extremos, faltantes, unidades, redondeos, conflictos y vigencia | C-09; A-09–A-10 | Código o tabla no pueden ser fuentes normativas independientes |
| A-12 | ¿Dónde reside la autoridad científica de la transformación? | Gobernanza vigente y expediente científico trazable | Claude y autoridad normativa competente; control Codex | Cadena de autoridad por creación, aprobación, revisión, suspensión y reemplazo | Metadatos, autoría e implementación se distinguen de aprobación científica/normativa | P-05 | Claude no se atribuye autoridad normativa; Codex no se atribuye autoridad científica |
| A-13 | ¿Qué ocurre sin referencia válida o vigente? | Decisión científica y reglas de integridad | Claude; implementación Codex | Estado no calculable o tratamiento científicamente aprobado | Nunca se selecciona una referencia aproximada o inferida | A-07–A-08 | No imputar, extrapolar ni usar fallback sin aprobación |
| A-14 | ¿Puede existir KPI aprobado sin función de puntuación aprobada? | Separación del ciclo de vida de definición, medición y puntuación | Claude; modelado Codex | Estados y gates explícitos | “KPI definido” no implica “KPI puntuable” ni “integrable” | C-03; C-06–C-08 | No activar cálculo por mera existencia en catálogo |
| A-15 | ¿Quién aprueba, revisa, suspende y reemplaza una GTRM? | Matriz de autoridad vigente y decisión posterior | Codex verifica; órganos competentes deciden | RACI o cadena de autoridad candidata | Ningún rol recibe facultades nuevas por inferencia | A-12 | No modificar gobernanza dentro de la auditoría |

## 6. Controles transversales de evidencia y razonamiento

| ID | Control | Responsable | Criterio de aceptación | Prohibición |
|---|---|---|---|---|
| T-01 | Procedencia bibliográfica | Claude; control formal Codex | Autor, año, título, fuente primaria, DOI/enlace y relación con la conclusión | No citar una fuente secundaria como prueba primaria sin declararlo |
| T-02 | Separación evidencia–inferencia–propuesta | Claude y Codex | Cada afirmación queda etiquetada por naturaleza y autoridad | No transformar consenso aparente en decisión |
| T-03 | Correspondencia conclusión–evidencia | Claude; auditoría Codex | Cada conclusión remite a evidencia suficiente y limitaciones | No extender resultados fuera del dominio estudiado |
| T-04 | Coherencia terminológica | Codex | Uso estable de C-01–C-10 en todo el expediente | No usar valor, puntaje, referencia y benchmark indistintamente |
| T-05 | No alteración de baseline | Codex | D-006 v0.1 permanece intacta; cambios candidatos generan Issue posterior | No editar la ontología durante la auditoría |
| T-06 | Independencia tecnológica | Claude y Codex | La especificación no depende de software propietario ni cálculo opaco | No aceptar código como única expresión del método |
| T-07 | Trazabilidad de autoridad | Codex | Toda conclusión indica emisor, competencia, estado y efecto | No confundir dictamen consultivo con resolución normativa |
| T-08 | Bloqueo selectivo | Codex | La falta científica bloquea solo la rama afectada y queda declarada | No completar vacíos para finalizar el expediente |

## 7. Checklist de los quince entregables

Ningún entregable se considera aprobado por marcarse como completo. La marca solo confirma presencia y conformidad para integrar el dictamen consultivo.

- [x] **E-01 — Glosario conceptual obligatorio:** conforme en auditoría científica, arquitectónica y consolidada.
- [x] **E-02 — Diagrama de transformación:** conforme en auditoría arquitectónica y consolidada.
- [x] **E-03 — Respuestas a preguntas originales y adicionales:** conforme en dictamen científico y consolidado.
- [x] **E-04 — Análisis de doble normalización:** conforme; defecto confirmado y corrección condicionada.
- [x] **E-05 — Clasificación multidimensional candidata:** conforme en consolidado; ejes de autoridad, evidencia, alcance, función y madurez.
- [x] **E-06 — Matriz de impacto:** conforme en auditoría arquitectónica y consolidada.
- [x] **E-07 — Modelo de identidad, autoridad y ciclo de vida:** conforme en auditoría arquitectónica y consolidada.
- [x] **E-08 — Reglas de aplicabilidad y precedencia:** conforme como propuesta pendiente de decisión.
- [x] **E-09 — Modelo de incertidumbre requerido:** conforme a nivel de requisitos; método concreto permanece pendiente.
- [x] **E-10 — Protocolo de equivalencia papel–software:** conforme a nivel de casos; tolerancia pendiente de aprobación científica.
- [x] **E-11 — Reglas de reproducibilidad histórica:** conforme.
- [x] **E-12 — Pipeline recomendado:** conforme; GTRM como sustrato normativo de B5/B6, no fase autónoma.
- [x] **E-13 — Registro de riesgos y mitigaciones:** conforme.
- [x] **E-14 — Issues y decisiones requeridas:** conforme; se registrará GOEI-ISS-044 al integrar la auditoría.
- [x] **E-15 — Dictamen final consultivo:** **B — Aceptar con modificaciones**, sin efecto normativo.

## 8. Gate de integridad previo al dictamen

El dictamen no puede emitirse hasta que:

1. C-01–C-10 estén conformes para dictamen;
2. P-01–P-09 y A-01–A-15 tengan respuesta trazable;
3. T-01–T-08 estén conformes;
4. E-01–E-14 estén completos y auditados;
5. toda ausencia de evidencia esté declarada como limitación o dependencia;
6. no exista ninguna modificación inadvertida del estándar, D-006, D-008/B1 o B2;
7. las competencias de Claude, Codex y la autoridad normativa permanezcan separadas.

Después del dictamen, E-15 solo podrá registrarse como resultado consultivo. Cualquier incorporación, Issue formal, modificación ontológica, cambio de pipeline, baseline o release requerirá su propio acto de autoridad conforme a la gobernanza vigente.
