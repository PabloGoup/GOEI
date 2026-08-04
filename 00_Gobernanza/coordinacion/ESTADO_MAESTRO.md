# Estado maestro del programa GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-STATUS-0001 |
| Fecha de corte | 2026-08-04 |
| Estado global | En desarrollo — fundamentos y arquitectura técnica |
| Baseline científica congelada | Ontología v0.1 |
| Requisito mínimo de tesis | GOEI-THS-REQ-0001 / GOEI-DIR-0002 |
| Automatización técnica | Activa |

## Fases

| Fase | Responsable principal | Estado verificable | Compuerta pendiente |
|---|---|---|---|
| A Fundamentos científicos | Comité Científico | En cierre según Master Plan | cierre oficial y ausencia de bloqueos críticos |
| B Construcción del conocimiento | Comité Científico | B1–B3 cerradas en sus preguntas nucleares; B4 habilitada | método, criterios y evaluación científica B4; luego B5–B10 secuenciales |
| C Construcción del estándar | Oficina Técnica | Preparación arquitectónica anticipada; contenido bloqueado | cierre oficial de Fase B |
| D Validación piloto | Director + Comité | No iniciada | Standard candidato y protocolo aprobado |
| E Publicaciones | Autoridad/Comité/Oficina | Estructura editorial únicamente | resultados y aprobaciones previas |
| F Software | Oficina Técnica | Arquitectura conceptual únicamente | estándar estable |

## Trabajo técnico completado

- arquitectura documental y del repositorio;
- Constitución en esqueleto;
- Oficina Técnica formalizada;
- Ontología Baseline v0.1 e Issue-only;
- Knowledge Graph y MetaModel EPIC-001;
- Universal Process MetaModel EPIC-002 como candidato;
- registros maestros y trazabilidad inicial.
- política de releases, manifiestos reproducibles y comparación de líneas base;
- contrato procesable y evaluador de compuertas G0–G5;
- pruebas automatizadas de identidad, trazabilidad, integridad y autoridad documental.
- arquitectura directoral de tesis: 4 tomos, 17 capítulos y cobertura auxiliar controlada.
- evaluador procesable de 64 requisitos mínimos de tesis con vocabulario de estados normalizado.
- roadmap técnico maestro procesable con 15 paquetes, dependencias y targets finales.
- repositorio Git local, política de contribución, CHANGELOG y CI preparados; protecciones remotas pendientes bajo GOEI-ISS-042.
- esquema y catálogo bibliográfico procesable disponibles; tres fuentes de D-008 migradas con metadatos verificados y estado científico `under_review`.
- Knowledge Graph registral implementado como proyección JSON regenerable; persistencia oficial sigue bajo GOEI-ISS-037.
- consultas de nodo, vecindad, caminos e impacto directo disponibles sobre la proyección registral sin inferencia.
- auditoría científica y arquitectónica GTRM emitida con dictamen consultivo B; ninguna modificación del estándar autorizada y GOEI-ISS-044 abierto.
- expediente formal GOEI-ISS-044 preparado con resolución directiva A/B/C y ocho slots científicos separados; ninguna opción seleccionada.
- auditoría GOEI-AUDIT-0003 confirma que D-008/B1 está lista para resolución directiva y que GOEI-ISS-043 bloquea solo la clasificación normativa de residuos/merma.
- `GOEI-DIR-RES-0001` ratifica D-008, cierra B1 en su pregunta nuclear, crea `GOEI-BSL-PROC-0001 v0.1.0` y habilita B2; PRISMA completa y Delphi quedan como validaciones posteriores.
- D-009–D-016 incorporan el marco científico GTRM tras `GOEI-AUDIT-0004`; GOEI-ISS-045–052 quedan cerrados solo en su alcance de marco.
- `GOEI-ONT-CAND-0001` y `GOEI-ARQ-GTRM-0001` preparan el cambio ontológico y los contratos B5/B6 sin modificar D-006 ni habilitar instancias, fórmulas, parámetros o tolerancias.
- D-017 y `GOEI-DIR-RES-0002` cierran B2 en su pregunta nuclear y congelan `GOEI-BSL-TAX-0001 v0.1.0`; valores, multiunidad, facetas opcionales y crosswalks permanecen excluidos.
- D-018 y `GOEI-DIR-RES-0003` cierran B3 en su pregunta nuclear y congelan `GOEI-BSL-KPI-C-0001 v0.1.0`: 31 indicadores candidatos pasan a la cola B4 y C-032 queda preservado solo como marco contextual; ningún KPI ha sido aprobado.

## Próxima dependencia científica crítica

La dependencia crítica activa es B4 — Admisibilidad y selección de KPI. Antes de evaluar candidatos, el Comité debe decidir el método y los criterios. `GOEI-ISS-055`–`058` y las reservas heredadas bloquean únicamente las ramas declaradas; GOEI-ISS-053 protege D-006.

## Política de avance

La Oficina Técnica preservará las baselines de ontología, procesos, taxonomía y catálogo candidato; coordinará B4 sin crear criterios científicos ni promover KPI por inferencia.

El ciclo técnico GOEI-CYCLE-0002 confirmó la reconstrucción determinista del inventario de Ontology Baseline v0.1 y dejó preparadas las compuertas G0–G5. Estas compuertas describen requisitos de promoción, pero ninguna herramienta puede otorgar aprobación científica o institucional.

## Control de productos derivados

Los archivos `12_Tesis/GOEI_Tesis_Manuscrito.md` y `13_Publicaciones/GOEI_Articulo_metodologico.md` fueron auditados mediante GOEI-AUDIT-0001 y se encuentran en cuarentena. Contienen propuestas científicas prematuras y no prueban avance de Fase E. Las fuentes válidas de estado son las matrices de ensamblaje y `program_state.json`.

## Preparación verificable

El estado procesable por máquinas se mantiene en `program_state.json`. A este corte, los tres objetivos finales —Standard validado, tesis terminada y manuscrito publicable— permanecen bloqueados por compuertas científicas y de validación explícitas.
