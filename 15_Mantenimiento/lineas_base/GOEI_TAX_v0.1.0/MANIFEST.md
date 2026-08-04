# GOEI Taxonomy Baseline v0.1.0

| Campo | Valor |
|---|---|
| Identificador | `GOEI-BSL-TAX-0001` |
| Versión | `0.1.0` |
| Fecha efectiva | 2026-08-04 |
| Estado | Congelada; baseline estructural con reservas |
| Decisión científica | D-017 |
| Aprobación | `GOEI-DIR-RES-0002` |
| Unidad ordinaria | Establecimiento (token) |
| Modelo | Taxonomía operacional-analítica multieje/facetada |

## Configuración normativa

| ID | Faceta indispensable | Relación aprobada con procesos |
|---|---|---|
| FX-1 | Modalidad de servicio/entrega | condiciona la realización de P5 |
| FX-2 | Sistema de producción | condiciona la realización de P4–P5 |
| FX-3 | Naturaleza económica | condiciona la realización de P6 |

Una `Categoría` es un tipo compuesto por valores de facetas. Esta baseline aprueba la estructura y la identidad de las facetas indispensables, pero **no aprueba sus valores concretos**.

## Exclusiones controladas

- catálogo y definiciones de valores;
- cardinalidades excepcionales, modalidad primaria/secundaria y evaluación por flujo;
- configuraciones multiunidad, multi-marca y franquicia;
- facetas opcionales FO-1…FO-4;
- ejemplos de categorías y crosswalks estadísticos;
- instancias, KPI, GTRM, fórmulas o reglas de puntuación.

## Artefactos congelados

| Documento | Rol | Bytes | SHA-256 |
|---|---|---:|---|
| `01_Estado_del_arte/FaseB_B2_Revision_taxonomia_universal.md` | Revisión científica B2 | 10742 | `af479a9da08d9667a880bcb00cdf17bc6df8cfbb402395586d22a7d9b64dcbe2` |
| `03_Taxonomia_negocios/FaseB_B2_Taxonomia_universal_candidata.md` | Propuesta científica (incluye material no promovido) | 6117 | `4e11b8e7f4a630184ed6d1becdfef678cf30d2ea0875dd7cacf910ae33ec369f` |
| `00_Gobernanza/coordinacion/entradas_comite/GOEI_SCI_HANDOFF_D017_Cierre_B2.md` | Decisión científica D-017 | 8788 | `78297ec16d620fe03c090033f5747d62168691fd6f4ca77f1ae8ec537c7a9e20` |

La resolución `GOEI-DIR-RES-0002` y este manifiesto determinan qué subconjunto de los artefactos científicos fue promovido. El material excluido conserva carácter candidato.

## Dependencias y reservas

- `GOEI-ISS-008` bloquea la rama multiunidad/multi-marca.
- `GOEI-ISS-054` bloquea valores concretos y reglas de clasificación operacional.
- PRISMA completa, Delphi y prueba empírica quedan pendientes.
- D-006 Ontology Baseline v0.1 y Process Baseline v0.1.0 permanecen intactas.

## Política de cambio

Rige `POLITICA_ISSUE_ONLY.md`. Cualquier divergencia de tamaño o huella en los tres artefactos congelados abre un incidente de integridad.

