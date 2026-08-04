# GOEI Universal Process MetaModel

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-0001 |
| Estado | Candidato técnico |
| Versión | 0.1.0-draft |
| Baseline importada | GOEI-BSL-ONT-0001 |
| Decisiones científicas modificadas | Ninguna |

## 1. Propósito

Definir un lenguaje estable y extensible con el cual el Comité Científico podrá representar posteriormente cualquier proceso, sin predeterminar cuáles procesos existen ni qué contenido deben tener.

## 2. Principios

1. Separación estricta entre **tipo** y **ejecución**.
2. Reutilización de entidades D-006/D-006-REV mediante referencias al baseline.
3. Un único núcleo conceptual con múltiples notaciones de presentación.
4. Ningún diagrama BPMN o ArchiMate se convierte en fuente semántica independiente.
5. Identidad, cardinalidad, procedencia y versión explícitas.
6. Indicador es una interfaz abstracta; no se crean KPI concretos.

## 3. Dos niveles de instanciación

```text
Nivel definicional: Proceso, Subproceso, Actividad, EventoTipo, EntradaTipo,
                    SalidaTipo, Restricción, Riesgo, Control, Indicador

Nivel operacional:  EjecuciónProceso, EjecuciónActividad, Evento,
                    EntradaUsada, SalidaProducida, Observación, Registro
```

EPIC-002 define principalmente los tipos y las relaciones necesarias para sus instancias. `Evento`, `Recurso`, `Agente`, `Evidencia` y `Observación` se importan del baseline ontológico; no se redefinen.

## 4. Entidades

### PM01 — Proceso

| Campo | Definición |
|---|---|
| Propósito | Representar un tipo de comportamiento con objetivo, límites y transformación. |
| Atributos | id, nombre, definición, propósito, alcance, inicio_lógico, fin_lógico, propietario_rol, estado, versión |
| Relaciones | contiene Subproceso/Actividad; recibe Entrada; produce Salida; usa Recurso; realizado_por Agente; sujeto_a Restricción; expuesto_a Riesgo; protegido_por Control; medido_por Indicador; documentado_en Documento |
| Cardinalidades | Actividad `1..*`; Entrada/Salida `0..*`; Recurso/Agente `0..*`; versión `1` por realización |
| Restricciones | Type, no ejecución; límites no solapados ambiguamente; composición acíclica; propósito obligatorio. |
| Ciclo de vida | propuesto → modelado → revisión → aprobado → vigente → obsoleto → retirado |

### PM02 — Subproceso

| Campo | Definición |
|---|---|
| Propósito | Permitir descomposición jerárquica reutilizable. |
| Atributos | los de Proceso + proceso_padre, orden_o_condición_de_activación |
| Relaciones | parte_de exactamente un Proceso/Subproceso en una composición; puede reutilizar un Proceso definicional. |
| Cardinalidades | padre `1` por relación de composición; hijos `0..*`; Actividades `1..*` si es hoja operacional. |
| Restricciones | Es un rol de Proceso, no una naturaleza distinta; sin ciclos; no puede ser ancestro de sí mismo. |
| Ciclo de vida | hereda Proceso; su vínculo de composición se versiona. |

### PM03 — Actividad

| Campo | Definición |
|---|---|
| Propósito | Representar la unidad de trabajo definicional dentro de un proceso. |
| Atributos | id, nombre, descripción, tipo, condición_inicio, condición_fin, duración_esperada_opcional, estado, versión |
| Relaciones | parte_de Proceso/Subproceso; precede/sigue Actividad; consume Entrada/Recurso; produce Salida/Registro/Evidencia; ejecutada_por Agente; disparada_por Evento; sujeta_a Restricción; protegida_por Control |
| Cardinalidades | padre `1..*` si es reutilizable, al menos `1` en un modelo; agente `0..*`; entradas/salidas `0..*` |
| Restricciones | Type separado de ejecución; conectividad exigida salvo actividad inicial/final; no inferir secuencia por orden visual. |
| Ciclo de vida | propuesta → definida → revisada → aprobada → activa → obsoleta → retirada |

### PM04 — Evento

| Campo | Definición |
|---|---|
| Propósito | Representar un suceso que inicia, interrumpe, termina o cambia el flujo/estado. |
| Atributos | id, nombre, tipo_evento, disparador, resultado, temporalidad, estado, versión |
| Relaciones | inicia/interrumpe/finaliza Proceso/Actividad; precede Evento; genera Observación/Registro; usa/consume/produce Recurso; ejecutado_por Agente |
| Cardinalidades | proceso_afectado `1..*`; disparador `0..1`; resultados `0..*` |
| Restricciones | Reutiliza `Evento` D-006-REV; tipo y token separados; un evento token tiene periodo. |
| Ciclo de vida | Tipo: propuesto→vigente→retirado. Token: previsto→ocurrido/cancelado→registrado→archivado. |

### PM05 — Entrada

| Campo | Definición |
|---|---|
| Propósito | Representar aquello requerido por una transformación. |
| Atributos | id, nombre, tipo, unidad_o_formato, condición_aceptación, obligatoriedad, versión |
| Relaciones | entrada_de Proceso/Actividad; proviene_de Salida/Agente/Evento; puede_ser Recurso/Documento/Registro |
| Cardinalidades | destino `1..*`; origen `0..*`; condición `0..*` |
| Restricciones | Rol contextual, no nueva sustancia; una misma entidad puede ser salida de un proceso y entrada de otro. |
| Ciclo de vida | definida → aprobada → activa → sustituida/retirada; instancia: esperada→recibida→aceptada/rechazada→consumida/archivada. |

### PM06 — Salida

| Campo | Definición |
|---|---|
| Propósito | Representar aquello producido o transformado por trabajo o evento. |
| Atributos | id, nombre, tipo, unidad_o_formato, criterio_aceptación, destinatario_rol, versión |
| Relaciones | salida_de Proceso/Actividad/Evento; se_convierte_en Entrada; entregada_a Agente; puede_ser Recurso/Documento/Registro/Evidencia |
| Cardinalidades | origen `1`; destinos `0..*`; criterios `0..*` |
| Restricciones | Rol contextual; no asumir aceptación por producirse; debe distinguir producto de registro de ejecución. |
| Ciclo de vida | definida → aprobada → activa → sustituida/retirada; instancia: producida→verificada→aceptada/rechazada→entregada/archivada. |

### PM07 — Recurso

| Campo | Definición |
|---|---|
| Propósito | Representar capacidad o entidad usada, consumida o producida. |
| Atributos | importados de D-006-REV: id, tipo, capacidad, disponibilidad, estado, unidad, propietario; perfil de uso del proceso |
| Relaciones | usado/consumido/producido_por Proceso/Actividad/Evento; asignado_a Agente; sujeto_a Control/Riesgo |
| Cardinalidades | participaciones `0..*`; propietario `0..1` según baseline; unidad `0..1` según tipo |
| Restricciones | No redefinir subtipos; distinguir recurso de agente y capacidad de persona según AX-13. |
| Ciclo de vida | Heredado de ontología; asignación: solicitada→reservada→usada→liberada/consumida. |

### PM08 — Agente

| Campo | Definición |
|---|---|
| Propósito | Representar quien ejecuta, decide, supervisa o recibe trabajo. |
| Atributos | id, tipo, rol, competencia_requerida, responsabilidad, autoridad, periodo_rol, versión_perfil |
| Relaciones | ejecuta Proceso/Actividad/Evento; responsable_de Control; provee Entrada; recibe Salida; genera Registro/Evidencia |
| Cardinalidades | actividades `0..*`; roles `1..*` en contexto; responsabilidad de proceso `0..*` |
| Restricciones | Importado de D-006-REV; rol no equivale a persona; autoridad contextual y temporal. |
| Ciclo de vida | perfil: propuesto→aprobado→activo→suspendido/retirado; asignación: planificada→activa→cerrada. |

### PM09 — Restricción

| Campo | Definición |
|---|---|
| Propósito | Limitar estados, secuencias, entradas, salidas o ejecuciones permitidas. |
| Atributos | id, enunciado, tipo, alcance, condición, severidad, fuente_autoridad, verificabilidad, versión |
| Relaciones | restringe Proceso/Actividad/Evento/Entrada/Salida/Recurso/Agente; verificada_por Control/Evidencia; expresada_en Documento |
| Cardinalidades | objetivos `1..*`; fuente_autoridad `1`; controles `0..*` |
| Restricciones | No crear restricción normativa sin decisión; enunciado no ambiguo; conflictos detectados. |
| Ciclo de vida | propuesta → revisada → aprobada → vigente → suspendida/sustituida/retirada |

### PM10 — Evidencia

| Campo | Definición |
|---|---|
| Propósito | Soportar que una ejecución, condición o control ocurrió o fue cumplido. |
| Atributos | id, tipo, afirmación_soportada, origen, fecha, custodio, integridad, acceso, retención |
| Relaciones | generada_por Actividad/Evento/Control/Agente; sustenta Observación/Registro; verifica Restricción; contenida_en Documento |
| Cardinalidades | generador `1..*`; afirmación `1..*`; custodio `0..1` |
| Restricciones | Importa contrato de Evidencia EPIC-001; no confundir con Documento o Registro; integridad verificable. |
| Ciclo de vida | generada → capturada → verificada → aceptada/rechazada → retenida → archivada/eliminada según política |

### PM11 — Observación

| Campo | Definición |
|---|---|
| Propósito | Registrar una constatación producida durante una ejecución. |
| Atributos | entidad, proceso, evento, periodo, contenido/valor, método, agente, admisibilidad, versión_esquema |
| Relaciones | acerca_de Entidad; ocurre_dentro_de Proceso; generada_por Evento; soportada_por Evidencia; registrada_en Registro; alimenta Indicador-token futuro |
| Cardinalidades | entidad `1`; proceso `1`; evento `1`; periodo `1`; evidencia `0..*` |
| Restricciones | AX-11 obligatorio; sin anclaje cuádruple es inadmisible. |
| Ciclo de vida | capturada → verificada → admisible/inadmisible → usada → archivada |

### PM12 — Riesgo

| Campo | Definición |
|---|---|
| Propósito | Representar una incertidumbre que puede afectar objetivos o resultados del proceso. |
| Atributos | id, enunciado, fuente, consecuencia, alcance, estado, propietario, método_evaluación_opcional, versión |
| Relaciones | amenaza Proceso/Actividad/Recurso/Salida; originado_por Evento/Restricción; tratado_por Control; soportado_por Evidencia |
| Cardinalidades | objetivos `1..*`; controles `0..*`; propietario `0..1` |
| Restricciones | EPIC-002 no define escalas, probabilidades ni umbrales; cualquier cuantificación requiere decisión. |
| Ciclo de vida | identificado → analizado → aceptado/tratado/transferido/evitado → monitorizado → cerrado/reabierto |

### PM13 — Control

| Campo | Definición |
|---|---|
| Propósito | Representar una medida diseñada para prevenir, detectar, corregir o evidenciar. |
| Atributos | id, nombre, objetivo, tipo, disparador, responsable_rol, frecuencia_opcional, evidencia_requerida, estado, versión |
| Relaciones | trata Riesgo; verifica Restricción; controla Proceso/Actividad/Evento/Recurso; ejecutado_por Agente; produce Evidencia/Registro |
| Cardinalidades | riesgo/restricción objetivo `1..*`; responsable `1..*`; evidencia `0..*` |
| Restricciones | No declarar eficacia sin Validación; separar definición de ejecución de control. |
| Ciclo de vida | propuesto → diseñado → aprobado → implementado → probado → activo → suspendido/retirado |

### PM14 — Documento

| Campo | Definición |
|---|---|
| Propósito | Comunicar especificaciones, instrucciones o información relativamente estable. |
| Atributos | id, título, tipo, propietario, estado, versión, vigencia, idioma, ubicación, checksum |
| Relaciones | documenta Proceso/Actividad/Control/Restricción; usado_como Entrada; producido_como Salida; contiene Registro/Evidencia por referencia |
| Cardinalidades | objetos documentados `1..*`; versiones `1..*` |
| Restricciones | Reutiliza Documento EPIC-001; no confundir plantilla con registro completado. |
| Ciclo de vida | borrador → revisión → aprobado → vigente → sustituido → archivado |

### PM15 — Registro

| Campo | Definición |
|---|---|
| Propósito | Conservar constancia de una ejecución, estado, decisión operacional o resultado. |
| Atributos | id, esquema, contenido, fecha, autor/agente, proceso, actividad/evento, versión_documento_fuente, integridad, retención |
| Relaciones | instancia_de Documento/Formulario; registra Proceso/Actividad/Evento/Control; contiene Observación; soportado_por Evidencia; producido_por Agente |
| Cardinalidades | esquema `1`; generador `1..*`; observaciones `0..*` |
| Restricciones | Inmutable tras cierre; correcciones enlazadas; no confundir con Documento type. |
| Ciclo de vida | abierto → en_captura → cerrado → verificado → retenido → archivado/eliminado según política |

### PM16 — Indicador

| Campo | Definición |
|---|---|
| Propósito | Representar una interfaz abstracta de medición asociable a procesos. |
| Atributos | id, nombre_provisional_o_referencia, objeto_medido, propósito, entradas_requeridas, salida_esperada, aplicabilidad, estado, versión |
| Relaciones | mide Proceso/Actividad/Salida/Control/Riesgo; usa Observación/Registro; definido_por Regla/Fórmula futura; especializable_como KPI-def si se aprueba |
| Cardinalidades | objeto_medido `1..*`; entradas `1..*`; regla de cálculo `0..1` mientras sea abstracto |
| Restricciones | No contiene KPI, fórmula, peso, umbral ni valor; equivalencia con KPI-def queda bloqueada por Issue. |
| Ciclo de vida | necesidad_identificada → especificación_abstracta → decisión_pendiente → aprobado/rechazado → activo/retirado |

## 5. Relaciones de flujo

| Relación | Dominio → Rango | Cardinalidad | Semántica |
|---|---|---|---|
| `contiene` | Proceso → Subproceso/Actividad | `1..*` | composición definicional |
| `precede` | Actividad/Evento → Actividad/Evento | `0..*` | orden parcial, no mera posición gráfica |
| `dispara` | Evento → Actividad/Proceso/Control | `0..*` | habilita transición |
| `recibe` | Proceso/Actividad → Entrada | `0..*` | rol de entrada |
| `produce` | Proceso/Actividad/Evento → Salida | `0..*` | rol de salida |
| `usa` | Proceso/Actividad/Evento → Recurso | `0..*` | recurso no necesariamente consumido |
| `consume` | Proceso/Actividad/Evento → Recurso | `0..*` | reduce o transforma disponibilidad |
| `ejecuta` | Agente → Proceso/Actividad/Evento/Control | `0..*` | participación activa |
| `sujeto_a` | Elemento proceso → Restricción | `0..*` | límite aplicable |
| `amenazado_por` | Elemento proceso → Riesgo | `0..*` | exposición sin cuantificación implícita |
| `protegido_por` | Elemento proceso/Riesgo → Control | `0..*` | diseño de tratamiento, no eficacia probada |
| `genera` | Actividad/Evento/Control → Evidencia/Observación/Registro | `0..*` | producción de información |
| `mide` | Indicador → Elemento proceso | `1..*` | asociación abstracta |

## 6. Conformidad

Un modelo de proceso es conforme si instancia solo entidades y relaciones declaradas, cumple cardinalidades, separa type/token, fija la versión del metamodelo y no contiene contenido bloqueado por Issues.
