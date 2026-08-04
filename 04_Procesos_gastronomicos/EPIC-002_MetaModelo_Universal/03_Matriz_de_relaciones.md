# Matriz de relaciones — MetaModelo Universal de Procesos

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-MAT-0001 |
| Versión | 0.1.0-draft |

| Sujeto | Relación | Objeto | Cardinalidad sujeto→objeto | Obligatoria | Inversa |
|---|---|---|---|---|---|
| Proceso | contiene | Actividad | 1..* | Sí | parte_de |
| Proceso/Subproceso | contiene | Subproceso | 0..* | No | parte_de |
| Subproceso | parte_de | Proceso/Subproceso | 1 | Sí | contiene |
| Actividad | parte_de | Proceso/Subproceso | 1..* | Sí | contiene |
| Actividad/Evento | precede | Actividad/Evento | 0..* | No | sigue_a |
| Evento | dispara | Proceso/Actividad/Control | 0..* | No | disparado_por |
| Evento | interrumpe/finaliza | Proceso/Actividad | 0..* | No | interrumpido/finalizado_por |
| Proceso/Actividad | recibe | Entrada | 0..* | No | entrada_de |
| Proceso/Actividad/Evento | produce | Salida | 0..* | No | salida_de |
| Salida | alimenta | Entrada | 0..* | No | proviene_de |
| Proceso/Actividad/Evento | usa | Recurso | 0..* | No | usado_por |
| Proceso/Actividad/Evento | consume | Recurso | 0..* | No | consumido_por |
| Agente | ejecuta | Proceso/Actividad/Evento/Control | 0..* | No | ejecutado_por |
| Restricción | restringe | cualquier elemento de proceso | 1..* | Sí | sujeto_a |
| Riesgo | amenaza | Proceso/Actividad/Recurso/Salida | 1..* | Sí | amenazado_por |
| Control | trata | Riesgo | 1..* | Condicional | tratado_por |
| Control | verifica | Restricción | 0..* | No | verificada_por |
| Actividad/Evento/Control | genera | Evidencia/Observación/Registro | 0..* | No | generado_por |
| Observación | soportada_por | Evidencia | 0..* | No | sustenta |
| Observación | registrada_en | Registro | 0..* | No | contiene |
| Documento | documenta | Proceso/Actividad/Control/Restricción | 1..* | Sí | documentado_en |
| Registro | instancia_de | Documento/Formulario | 1 | Sí | tiene_instancia |
| Indicador | mide | Proceso/Actividad/Salida/Control/Riesgo | 1..* | Sí | medido_por |
| Indicador | usa | Observación/Registro | 1..* | Sí cuando esté operacionalizado | usado_por |

## Compatibilidad de roles Entrada/Salida

`Entrada` y `Salida` son roles que pueden ser desempeñados por `Recurso`, `Documento`, `Registro`, `Evidencia` u otro objeto aprobado. El metamodelo no duplica la identidad subyacente.
