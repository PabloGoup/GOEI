# Paquete de activación científica — B2 Taxonomía Universal

| Campo | Valor |
|---|---|
| Identificador | GOEI-SCI-QUEUE-0002 |
| Fase | B2 — Taxonomía Universal |
| Tipo | Contrato técnico vacío de investigación y handoff |
| Estado | Bloqueado; preparado para activación condicionada |
| Responsable del contenido científico | Comité Científico GOEI |
| Responsable de control técnico | Oficina Técnica GOEI |
| Autoridad de aprobación | Dirección General, conforme a la gobernanza vigente |
| Versión del paquete | 0.1.0-draft |
| Contenido normativo | Ninguno |

## 1. Propósito

Definir el contenedor, las entradas, las dependencias y el contrato de entrega que permitirán iniciar B2 una vez que B1 haya sido cerrada e integrada formalmente.

Este paquete no investiga, enumera ni propone categorías, clases, criterios taxonómicos o resultados científicos. Su existencia no habilita por sí sola el inicio de B2.

## 2. Condición estricta de activación

El estado solo podrá cambiar de `bloqueado` a `habilitado` cuando exista evidencia verificable de todos los elementos siguientes:

1. decisión D-008, o la decisión que la sustituya, aprobada y registrada por la autoridad competente;
2. declaración directiva inequívoca de cierre de B1;
3. integración técnica completa y versionada de los componentes aprobados en B1;
4. catálogo oficial de procesos resultante de B1, con identificadores estables y alcance declarado;
5. unidad de análisis y alcance vigentes disponibles como entradas controladas;
6. disposición explícita de los Issues críticos heredados de B1;
7. ontología baseline D-006 v0.1 disponible sin modificaciones no autorizadas;
8. verificación técnica satisfactoria de trazabilidad, dependencias y ausencia de contradicciones formales.

Mientras falte cualquiera de estas condiciones, el Comité no deberá interpretar este paquete como una orden para iniciar investigación dependiente de B1.

## 3. Entradas controladas requeridas

Al activarse, la Oficina Técnica deberá completar esta tabla únicamente con referencias a artefactos oficiales:

| Entrada | Identificador o ruta | Versión | Estado requerido | Estado actual |
|---|---|---|---|---|
| Decisión de cierre B1 | Pendiente | Pendiente | Aprobada | No disponible para activación |
| Catálogo de procesos B1 | Pendiente | Pendiente | Integrado y versionado | No disponible para activación |
| Alcance GOEI vigente | Pendiente de vinculación | Pendiente | Vigente | Pendiente de vinculación |
| Unidad de análisis | Pendiente de vinculación | Pendiente | Aprobada | Pendiente de vinculación |
| Ontología conceptual | D-006 | Baseline v0.1 | Congelada | Disponible; modificación solo mediante Issue |
| MetaModelo de procesos | GOEI-PMM-0001 | 0.1.0-draft o versión vigente | Referencia técnica | Disponible como estructura, no como contenido científico |
| Issues heredados | Pendiente de inventario al cierre B1 | N/A | Dispuestos formalmente | Pendiente |

No se aceptarán borradores, manuscritos, inferencias ni recomendaciones no aprobadas como sustitutos de una entrada requerida.

## 4. Pregunta científica no respondida

> ¿Qué sistema de clasificación permite delimitar y comparar las entidades comprendidas por el GOEI, con qué ejes, criterios de pertenencia, exclusiones y tratamiento de casos límite?

Esta pregunta pertenece exclusivamente al Comité Científico. Permanece abierta y este paquete no anticipa su respuesta.

## 5. Alcance de la investigación a definir por el Comité

El expediente deberá declarar, sin que la Oficina Técnica lo determine:

- alcance de la pregunta;
- unidad o unidades de clasificación;
- protocolo o método de investigación;
- criterios científicos para evaluar alternativas;
- tratamiento de exclusiones y casos límite;
- relación con los procesos aprobados en B1;
- limitaciones, sesgos y condiciones de transferibilidad;
- evidencia faltante y preguntas abiertas.

## 6. Exclusiones obligatorias

Este paquete no autoriza a la Oficina Técnica ni a ningún agente técnico a:

- proponer o seleccionar taxonomías;
- crear categorías, subcategorías, ejes o criterios de pertenencia;
- interpretar literatura o determinar suficiencia científica;
- resolver casos límite;
- modificar D-006 o cualquier baseline sin un Issue formal;
- crear KPI, fórmulas, ponderaciones, umbrales o reglas metodológicas;
- presentar candidatos como contenido normativo;
- declarar cerrada B2 sin decisión aprobada e integración técnica completa.

## 7. Contrato del expediente científico B2

El Comité deberá entregar un expediente único, versionado e inmutable por revisión, que incluya como mínimo:

1. identificador, título, fecha, versión, autoría y estado;
2. pregunta científica y alcance delimitados;
3. dependencias de B1 efectivamente utilizadas;
4. protocolo o método aplicado;
5. inventario de fuentes y evidencias con identificadores verificables;
6. alternativas taxonómicas consideradas;
7. criterios de evaluación, inclusión y exclusión;
8. resultados y propuesta científica claramente separados;
9. definiciones y elementos candidatos identificados como no normativos hasta su aprobación;
10. criterios de pertenencia y tratamiento de casos límite propuestos;
11. objeciones, desacuerdos y alternativas descartadas con sus razones;
12. limitaciones, sesgos, transferibilidad y evidencia faltante;
13. impacto esperado sobre ontología, procesos, Knowledge Graph, BOK, formularios, software, tesis y publicaciones;
14. Issues nuevos o heredados, con rama afectada y condición de cierre;
15. propuesta de decisión B2 con alcance exacto;
16. declaración del Comité sobre suficiencia del expediente y recomendación de cierre o devolución.

## 8. Artefactos mínimos del handoff científico–técnico

El handoff deberá acompañar el expediente con:

- inventario de archivos y checksums;
- tabla de identificadores candidatos;
- vocabulario y definiciones propuestas;
- matriz elemento–evidencia–propuesta de decisión;
- mapa candidato hacia la ontología D-006, sin modificarla;
- mapa candidato hacia los procesos aprobados en B1;
- jerarquías y relaciones candidatas expresadas de forma auditable;
- casos límite y estados no resueltos;
- dependencias e impactos documentales;
- historial de revisiones y respuesta a observaciones previas, si existen.

## 9. Criterios de aceptación técnica del handoff

La Oficina Técnica verificará exclusivamente:

- completitud de los campos contractuales;
- identidad, unicidad y estabilidad de los identificadores;
- trazabilidad bidireccional entre propuesta, evidencia y decisión;
- separación explícita entre metamodelo, tipos e instancias;
- ausencia de jerarquías circulares o referencias huérfanas en la representación entregada;
- cardinalidades y relaciones declaradas sin ambigüedad técnica;
- consistencia terminológica interna;
- compatibilidad representacional con formularios manuales, software y Knowledge Graph;
- correspondencia con las entradas aprobadas de B1;
- registro selectivo de dependencias no resueltas;
- ausencia de promoción normativa previa a la aprobación.

La aceptación técnica no equivale a validación científica ni aprobación directiva.

## 10. Blockers iniciales

| Bloqueador | Rama afectada | Impacto | Condición de desbloqueo |
|---|---|---|---|
| D-008 sin ratificación normativa | Activación completa de B2 | Impide usar el resultado de B1 como entrada oficial | Decisión aprobada y registrada |
| B1 sin cierre directivo | Activación completa de B2 | Mantiene incierto el conjunto oficial de procesos | Declaración explícita de cierre B1 |
| Integración técnica B1 pendiente | Mapeo proceso–clasificación | No existen entradas versionadas consumibles | Integración, trazabilidad y controles conformes |
| Issues críticos B1 sin disposición | Solo ramas dependientes | Puede dejar alcance o conceptos sin base aprobada | Cierre, aceptación de riesgo o disposición formal |
| Entradas de alcance/unidad de análisis no vinculadas | Delimitación del expediente | Impide auditar cobertura y pertenencia | Referencias oficiales registradas |

Todo bloqueador adicional detectado deberá registrarse como Issue. Se detendrá únicamente la rama materialmente dependiente.

## 11. Resultado permitido de la auditoría técnica

La Oficina Técnica emitirá uno de estos resultados:

- `aceptable para decisión`: expediente formalmente completo y trazable;
- `devolver por defecto formal`: faltan elementos corregibles sin decisión científica nueva;
- `no auditable`: no es posible reconstruir identidad, evidencia, propuesta o dependencias.

Ninguno de estos resultados aprueba la taxonomía.

## 12. Criterios de handoff a decisión

El expediente solo podrá elevarse a la Dirección General cuando:

1. todas las entradas obligatorias estén identificadas y versionadas;
2. el Comité haya declarado finalizada su revisión para esta versión;
3. cada elemento candidato sea trazable a evidencia y a una propuesta de decisión;
4. las limitaciones y preguntas abiertas estén registradas;
5. los cambios potenciales a baselines estén vinculados a Issues formales;
6. la auditoría técnica determine `aceptable para decisión`;
7. exista análisis de impacto sobre componentes dependientes.

## 13. Criterios posteriores de cierre B2

B2 solo podrá declararse `cerrada` después de:

- decisión directiva explícita de aprobación y cierre;
- registro de la decisión en los registros maestros;
- integración técnica fiel del contenido aprobado;
- asignación de versión y baseline cuando corresponda;
- actualización controlada de Knowledge Graph, BOK y trazabilidad;
- validación de integridad del repositorio;
- disposición de los Issues críticos de B2.

Solo entonces podrá habilitarse B3. La existencia de este paquete, del expediente o de una recomendación científica no satisface el cierre.

## 14. Registro de activación

| Campo | Valor |
|---|---|
| Fecha de habilitación | Pendiente |
| Decisión habilitante | Pendiente |
| Responsable del cambio de estado | Pendiente |
| Entradas verificadas por | Pendiente |
| Estado resultante | Bloqueado |
| Observaciones | Paquete preparado sin contenido científico |
