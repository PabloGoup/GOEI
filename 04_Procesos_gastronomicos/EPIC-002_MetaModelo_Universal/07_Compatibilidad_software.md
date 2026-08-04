# Compatibilidad con futura implementación en software

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-SW-0001 |
| Versión | 0.1.0-draft |

## 1. Modelo lógico recomendado

Separar:

- `ProcessDefinition`, `ActivityDefinition`, `EventType` y demás types;
- `ProcessExecution`, `ActivityExecution`, `EventOccurrence` y demás tokens;
- `ArtifactVersion` y `BaselineReference`;
- relaciones de composición, flujo, participación, información y control.

Nunca guardar la definición y la ejecución en la misma tabla o documento polimórfico sin discriminación obligatoria.

## 2. Contratos mínimos

Cada definición debe ser serializable con:

`id`, `type`, `version`, `status`, `label`, `definition`, `relationships`, `constraints`, `sourceDecision`, `ontologyBaseline` y `extensions`.

Cada ejecución debe añadir:

`instanceId`, `definitionId`, `definitionVersion`, `startedAt`, `endedAt`, `actors`, `resources`, `events`, `inputs`, `outputs`, `records` y `provenance`.

## 3. Representaciones futuras

- JSON-LD/RDF para interoperabilidad semántica.
- SHACL o equivalente para cardinalidades e integridad.
- BPMN XML como vista intercambiable con extensiones GOEI.
- ArchiMate Exchange Format como vista arquitectónica.
- Mermaid/PlantUML solo para documentación, no como fuente canónica.

La selección definitiva requiere Issue y ADR técnico.

## 4. Servicios futuros

- catálogo versionado de definiciones;
- editor con validación en tiempo real;
- importación/exportación BPMN y ArchiMate con reporte de pérdida;
- instancia y seguimiento de ejecuciones;
- captura de observaciones AX-11;
- gestión de documentos, registros y evidencia;
- análisis de impacto entre versiones;
- consulta de linaje desde Indicador hasta Observaciones;
- validación contra baseline ontológico y PMM.

## 5. Requisitos no funcionales

- IDs independientes de proveedor;
- historial append-only;
- reconstrucción temporal;
- control de acceso y privacidad;
- internacionalización de etiquetas sin cambiar identidad;
- exportación completa y estrategia de migración;
- pruebas automatizadas de round-trip entre formatos;
- determinismo en validadores.

## 6. Pruebas de conformidad futuras

1. modelo mínimo válido;
2. ciclo de composición inválido;
3. actividad huérfana;
4. observación sin AX-11;
5. registro sin versión de esquema;
6. indicador con fórmula no autorizada;
7. importación BPMN con extensión preservada;
8. exportación/importación sin pérdida semántica crítica;
9. reconstrucción de una versión retirada;
10. intento de modificar baseline sin Issue.
