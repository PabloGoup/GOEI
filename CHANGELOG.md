# Changelog

Todos los cambios relevantes del GOEI se documentarán en este archivo siguiendo Keep a Changelog y versionado semántico. La entrada `Unreleased` no confiere vigencia científica ni institucional.

## [Unreleased]

### Added

- Ratificación directiva del método científico B4-A mediante `GOEI-DIR-RES-0004`.
- `GOEI-BSL-KPI-ADM-0001 v0.1.0`, baseline metodológica separada de la baseline candidata B3.
- `GOEI-ISS-059`, bloqueo exclusivo de aplicabilidad global por categoría.
- `GOEI-HO-0004`, que habilita B4-B por lotes al nivel `Establecimiento`.
- Lote B4-B 01 (`C-001…C-005`) evaluado por el Comité, corregido tras `GOEI-AUDIT-0011` y aceptado técnicamente mediante `GOEI-AUDIT-0012`.
- Lote B4-B 02 (`C-006…C-010`) evaluado por el Comité, corregido tras `GOEI-AUDIT-0013` y aceptado técnicamente mediante `GOEI-AUDIT-0014`.

### Changed

- Roadmap, estado maestro, BOK, trazabilidad y Knowledge Graph preparados para B4-B.
- Comandos de validación documentados con rutas ejecutables desde la raíz del repositorio.

### Scientific scope

- Candidatos evaluados: **10 de 31**; resultados parciales acumulados: 5 `ADMISIBLE`, 2 `ADMISIBLE CONDICIONADO`, 2 `EVIDENCIA INSUFICIENTE`, 1 `BLOQUEADO`.
- KPI aprobados: **0**.
- D-019: **no emitida**.
- D-006 y baselines previas: **sin modificación**.

- Ratificada D-018 mediante `GOEI-DIR-RES-0003`; B3 queda cerrada en su pregunta nuclear y se congela `GOEI-BSL-KPI-C-0001 v0.1.0` con 31 indicadores candidatos, sin aprobar ningún KPI.
- C-032 se preserva como marco contextual BSC y se excluye expresamente de la cola de admisibilidad B4; abiertos `GOEI-ISS-055`–`058` y habilitada B4.

- Ratificada D-017 con alcance limitado mediante `GOEI-DIR-RES-0002`; B2 queda cerrada en su pregunta nuclear y se congela `GOEI-BSL-TAX-0001 v0.1.0` sin catálogo de valores, facetas opcionales, crosswalks ni reglas multiunidad.
- Emitida `GOEI-AUDIT-0005`, cerrado `GOEI-ISS-014`, abierto `GOEI-ISS-054` y habilitada B3 sin creación de KPI.

- Ratificación directiva D-008 y cierre limitado de B1 mediante `GOEI-DIR-RES-0001`.
- Creación de `GOEI-BSL-PROC-0001 v0.1.0`, con residuos/merma excluido de clasificación normativa mientras `GOEI-ISS-043` permanezca abierto.
- Activación del paquete científico B2; PRISMA completa y Delphi se conservan como validaciones posteriores.
- Incorporación del marco científico GTRM como D-009–D-016, sin emitir GTRM reales ni alterar D-006.

### Added

- Arquitectura documental, registros maestros y Constitución estructural.
- Ontology Baseline v0.1 congelada con política Issue-only.
- EPIC-001 GOEI Knowledge Graph & MetaModel.
- EPIC-002 Universal Process MetaModel como candidato técnico.
- Oficina Técnica y coordinación sistemática científico–técnica.
- Política de releases, manifiestos, comparación y compuertas G0–G5.
- Plan Maestro Directoral y control de 64 requisitos mínimos de tesis.
- Roadmap técnico procesable de 15 paquetes.
- Validadores y pruebas automáticas del repositorio.
- Mandato de dirección operativa ampliada y coordinación paralela asistida, sin transferencia de autoridad científica.
- Pipeline científico–técnico B2–B10, matriz capítulo–evidencia y especificación editorial APA 7 orientada a UDLA.
- Borrador controlado de resolución D-008/B1 y paquete vacío de activación científica B2, ambos sin efectos normativos.
- Expediente consultivo GTRM con fuente preservada, dictamen científico B, auditoría arquitectónica, matriz de controles e Issue de adopción, sin modificar D-006 ni el pipeline oficial.
- Auditoría de preparación D-008/B1 y migración de tres fuentes ya cotejadas por el Comité al catálogo bibliográfico, conservadas como `under_review` hasta decisión científica y directiva.
- Expediente formal GOEI-ISS-044 con resolución directiva A/B/C, ocho slots científicos y plantilla reutilizable, sin seleccionar decisiones ni modificar D-006.
- Delegación ejecutiva GOEI-DIR-0004 y resolución final GOEI-DIR-RES-GTRM-0001: Opción A, cierre del destino de GOEI-ISS-044 y apertura de GOEI-ISS-045–052, sin aprobar soluciones científicas ni modificar D-006/B5/B6.
- Auditoría técnica GOEI-AUDIT-0004, cierre acotado de GOEI-ISS-045–052, apertura de GOEI-ISS-053 y creación de candidatas ontológica v0.2.0 y arquitectónica B5/B6, ambas no normativas.

### Changed

- Normalización de IDs de Issues del EPIC-001 para eliminar colisiones.
- Arquitectura de tesis actualizada a cuatro tomos y 17 capítulos.

### Security

- Exclusión de secretos, archivos temporales y metadatos locales mediante `.gitignore`.

## Política

- Las releases publicadas usan enlaces comparativos cuando exista historia remota.
- Una decisión científica se menciona aquí únicamente después de su registro aprobado.
- Las correcciones de una baseline se publican como nueva versión o errata; no se reescriben.

[Unreleased]: https://github.com/PabloGoup/GOEI/compare/HEAD...HEAD
