# Compatibilidad con BPMN

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-BPMN-0001 |
| Versión | 0.1.0-draft |
| Alcance | Mapeo conceptual; no adopción normativa de una edición BPMN |

## 1. Principio

BPMN es una notación de procesos; el MetaModelo GOEI es la semántica canónica. Una representación BPMN es una vista y debe conservar IDs GOEI en extensiones o metadatos.

| GOEI PMM | BPMN candidato | Calidad del mapeo | Observación |
|---|---|---|---|
| Proceso | Process | directa | distinguir definición de instancia |
| Subproceso | Sub-Process / Call Activity | contextual | Call Activity favorece reutilización |
| Actividad | Task / Activity | directa | tipo específico de Task es perfil de presentación |
| Evento | Start, Intermediate, End Event | directa con especialización | trigger y posición se conservan |
| Entrada/Salida | Data Input, Data Output, Data Object | parcial | GOEI modela rol y entidad subyacente |
| Recurso | ResourceRole/Resource | parcial | BPMN no cubre toda semántica D-006 |
| Agente | Participant, Lane, ResourceRole | parcial | Pool/Lane no equivale automáticamente a persona/organización |
| Restricción | TextAnnotation/extension/formalExpression | débil | requiere extensión GOEI, no solo texto |
| Evidencia | DataObject/Artifact | parcial | procedencia e integridad requieren extensión |
| Observación | DataObject producido por Activity/Event | parcial | AX-11 debe añadirse como metadatos |
| Riesgo | extensión/Artifact | sin elemento nativo suficiente | no inventar iconografía normativa |
| Control | Task/Sub-Process + extensión | contextual | separar definición y ejecución |
| Documento | DataObject/DataStore | parcial | distinguir type, archivo e instancia |
| Registro | DataObject/DataStore instance | parcial | cierre, integridad y retención son extensiones |
| Indicador | extensión GOEI | sin elemento nativo | vínculo por ID al objeto medido |

## 2. Elementos BPMN no equivalentes automáticamente

- Sequence Flow expresa flujo, no `parte_de`.
- Message Flow no equivale a transferencia de recurso sin mapeo.
- Gateway es control de flujo, no Control de riesgo.
- Data Object no distingue por sí mismo Entrada, Salida, Documento, Registro o Evidencia.
- Lane representa responsabilidad visual/contextual, no autoridad normativa.

## 3. Reglas de intercambio futuro

- Conservar ID y versión GOEI en `extensionElements`.
- Declarar la versión exacta BPMN usada.
- Validar el modelo GOEI después de importar; un archivo BPMN válido puede no ser conforme al PMM.
- Exportar solo relaciones representables; las restantes permanecen como extensiones sin pérdida.
- No inferir KPI, riesgos, controles o restricciones desde nombres de tareas.

La edición normativa concreta de BPMN queda pendiente de verificación técnica y decisión de interoperabilidad; no afecta el metamodelo conceptual.
