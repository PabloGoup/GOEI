# GOEI Process Baseline v0.1.0

| Campo | Valor |
|---|---|
| Identificador | `GOEI-BSL-PROC-0001` |
| Versión | `0.1.0` |
| Fecha efectiva | 2026-08-04 |
| Estado | Congelada; baseline temprana con reservas |
| Decisión científica | D-008 |
| Aprobación | `GOEI-DIR-RES-0001` |
| Unidad de modelado | Tipo de proceso a nivel de subsistema funcional |
| Alcance | Foodservice comercial y no comercial/institucional |

## Contenido de la configuración

### Cadena primaria

| ID | Tipo de proceso ratificado |
|---|---|
| P1 | Planificación y menú / demanda |
| P2 | Aprovisionamiento |
| P3 | Recepción, almacenamiento e inventario |
| P4 | Producción / preparación |
| P5 | Distribución / servicio / cumplimiento |
| P6 | Transacción / cierre — venta o requisición/registro interno según contexto |

### Planos transversales

| ID | Tipo de proceso ratificado |
|---|---|
| P7 | Inocuidad, higiene y sanitización |
| P8 | Mantenimiento de equipos e instalación |
| P9 | Gestión y control |

La baseline ratifica existencia y estructura al nivel indicado; no define actividades concretas, taxonomía, KPI, fórmulas, ponderaciones, umbrales ni reglas de cálculo.

## Exclusión controlada

Gestión de residuos/merma no forma parte de esta configuración como macroproceso, proceso transversal definitivo ni subproceso normativo. Permanece como candidato bajo `GOEI-ISS-043`.

## Fuentes canónicas

- `00_Gobernanza/coordinacion/entradas_comite/GOEI_SCI_HANDOFF_D008_Cierre_B1.md`
- `01_Estado_del_arte/FaseB_B1_Revision_sistematica_procesos_universales.md`
- `04_Procesos_gastronomicos/Fase4_Nucleo_universal_de_macroprocesos.md`
- `00_Gobernanza/coordinacion/resoluciones/GOEI_DIR_RES_0001_D008_B1.md`
- `15_Mantenimiento/lineas_base/GOEI_PROC_v0.1.0/POLITICA_ISSUE_ONLY.md`

## Artefactos congelados

| Documento | Rol | Bytes | SHA-256 |
|---|---|---:|---|
| `00_Gobernanza/coordinacion/entradas_comite/GOEI_SCI_HANDOFF_D008_Cierre_B1.md` | Especificación científica D-008 | 12230 | `0a607c61dab8e07b001fe15a023f1787262ce700093e1b9ceb6fa51b39daccc6` |
| `00_Gobernanza/coordinacion/resoluciones/GOEI_DIR_RES_0001_D008_B1.md` | Acto de ratificación y alcance | 3430 | `00bbb2ce79e5a48a31cac80136335039f3827c5e3d858cadc2b3bc6db80a45b8` |

Cualquier divergencia de tamaño o huella abre un incidente de integridad y bloquea el uso de la baseline hasta su resolución.

## Reservas y dependencias

- PRISMA completa y Delphi son validaciones posteriores.
- `GOEI-ISS-014`, `GOEI-ISS-015` y `GOEI-ISS-043` permanecen abiertos.
- Las realizaciones específicas dependen de B2 y decisiones posteriores.
- D-006 Ontology Baseline v0.1 permanece intacta.

## Política de cambio

Esta configuración no se sobrescribe. Toda modificación exige Issue formal, análisis de impacto, decisión competente, nueva versión y conservación reproducible de `v0.1.0`.
