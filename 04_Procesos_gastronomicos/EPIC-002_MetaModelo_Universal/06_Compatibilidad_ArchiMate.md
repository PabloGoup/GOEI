# Compatibilidad con ArchiMate

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-ARCHI-0001 |
| Versión | 0.1.0-draft |
| Alcance | Mapeo conceptual; no adopción normativa de una edición ArchiMate |

## 1. Principio

ArchiMate ofrece vistas de estructura, comportamiento e información compatibles con CO-4 y CO-7. El mapeo es una proyección y no reemplaza el metamodelo GOEI.

| GOEI PMM | ArchiMate candidato | Calidad | Observación |
|---|---|---|---|
| Proceso/Subproceso | Business Process | directa | composición mediante Composition |
| Actividad | Business Process/Function/Interaction | contextual | decidir por semántica, no granularidad visual |
| Evento | Business Event | directa | disparo mediante Triggering |
| Entrada/Salida | Business Object/Data Object + Access | parcial | rol entrada/salida depende de la relación |
| Recurso | Resource/Equipment/Facility/Artifact según capa | parcial | conservar tipo GOEI original |
| Agente | Business Actor/Role/Collaboration | directa contextual | persona y rol separados |
| Restricción | Constraint | directa | fuente y versión como propiedades GOEI |
| Evidencia | Business Object/Artifact | parcial | procedencia requiere extensión |
| Observación | Data Object/Business Object | parcial | AX-11 fuera del metamodelo base |
| Riesgo | Assessment | parcial | riesgo no es idéntico a evaluación del riesgo |
| Control | Business Process/Function + Requirement/Constraint | contextual | no existe equivalencia única |
| Documento | Business Object/Artifact | directa contextual | lógico frente a realización física |
| Registro | Data Object/Business Object | parcial | estado e integridad GOEI adicionales |
| Indicador | Assessment/Outcome/Value + extensión | parcial | no inferir fórmula |

## 2. Relaciones

- `parte_de` → Composition/Aggregation según identidad y ciclo de vida.
- `precede/dispara` → Triggering.
- `usa/consume/produce` → Access, Serving o Association según semántica; no son intercambiables.
- `ejecuta` → Assignment.
- `documenta` → Association/Realization según caso.
- `mide` → Association con estereotipo GOEI.

## 3. Restricciones

- No mapear una misma relación GOEI a varias relaciones ArchiMate sin regla determinista.
- Preservar IDs y versiones como propiedades.
- Mantener vista estructural y dinámica en el mismo modelo, conforme CO-7.
- Un modelo ArchiMate válido no es automáticamente conforme al PMM.

La edición concreta y el perfil oficial de ArchiMate requieren ADR/Issue futuro.
