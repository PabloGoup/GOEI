# Reglas de integridad — MetaModelo Universal de Procesos

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-INT-0001 |
| Versión | 0.1.0-draft |

| ID | Regla |
|---|---|
| PMM-INT-001 | Todo elemento tiene ID, clase, estado y versión del metamodelo. |
| PMM-INT-002 | Proceso, Subproceso y Actividad type no se confunden con sus ejecuciones token. |
| PMM-INT-003 | Todo Proceso contiene al menos una Actividad directa o mediante Subproceso. |
| PMM-INT-004 | Todo Subproceso tiene exactamente un padre por contexto de composición. |
| PMM-INT-005 | Las jerarquías `parte_de` son acíclicas. |
| PMM-INT-006 | La relación `precede` forma un orden dirigido; ciclos solo se representan mediante constructo de repetición explícito, no ciclo accidental. |
| PMM-INT-007 | Una Actividad interna no queda aislada: tiene conexión de entrada/salida o evento habilitante/terminador. |
| PMM-INT-008 | Entrada y Salida declaran la entidad subyacente cuyo rol desempeñan. |
| PMM-INT-009 | Toda Salida usada como Entrada conserva trazabilidad al productor. |
| PMM-INT-010 | Todo Evento token tiene periodo y pertenece a al menos una ejecución de proceso. |
| PMM-INT-011 | Todo uso/consumo/producción de Recurso distingue el verbo; no son sinónimos. |
| PMM-INT-012 | La Persona y su capacidad como Recurso no se fusionan, conforme AX-13. |
| PMM-INT-013 | Toda Observación cumple AX-11: entidad, proceso, evento y periodo. |
| PMM-INT-014 | Todo Registro cerrado es inmutable; correcciones generan una revisión enlazada. |
| PMM-INT-015 | Toda Restricción normativa enlaza decisión o fuente de autoridad. |
| PMM-INT-016 | Todo Control tiene al menos un objetivo: Riesgo, Restricción o elemento controlado. |
| PMM-INT-017 | `trata` no implica eficacia; la eficacia exige evidencia o validación explícita. |
| PMM-INT-018 | Todo Riesgo tiene al menos un objeto amenazado; no se exige cuantificación. |
| PMM-INT-019 | Todo Documento/Registro conserva separación type/token y versión fuente. |
| PMM-INT-020 | Todo Indicador tiene objeto medido, pero no puede contener fórmula, umbral o KPI no aprobado. |
| PMM-INT-021 | Ningún modelo de proceso puede modificar entidades importadas de GOEI-BSL-ONT-0001. |
| PMM-INT-022 | Cambiar el metamodelo o sus mapeos requiere Issue formal y nueva versión. |
| PMM-INT-023 | Las cardinalidades se validan en la versión publicada del modelo, no por apariencia del diagrama. |
| PMM-INT-024 | Toda inferencia derivada de BPMN/ArchiMate declara el mapeo que la produjo. |

## Niveles de conformidad

- **Estructural:** clases, relaciones y cardinalidades válidas.
- **Semántica:** significados, type/token y roles correctos.
- **Trazabilidad:** versiones, procedencia y decisiones enlazadas.
- **Intercambio:** serialización conforme a esquema futuro.

Un modelo no se declara conforme si falla cualquiera de los niveles aplicables.
