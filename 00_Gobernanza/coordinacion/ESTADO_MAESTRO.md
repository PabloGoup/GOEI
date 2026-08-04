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
| B Construcción del conocimiento | Comité Científico | B1 investigada; cierre directivo pendiente | D-008/cierre B1 y luego B2–B10 secuenciales |
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
- esquema y catálogo bibliográfico procesable disponibles; cero fuentes migradas o científicamente evaluadas.

## Próxima dependencia científica crítica

El Comité entregó el expediente B1 y propuso D-008. La auditoría formal concluyó que el paquete puede elevarse a Dirección, pero no es integrable normativamente hasta que la Dirección apruebe o rechace D-008, responda las preguntas elevadas y declare el cierre de B1.

## Política de avance

Mientras el cierre directivo de B1 esté pendiente, la Oficina Técnica continuará validadores, gestión de configuración, BOK estructural, estructura de tesis, plantillas de publicación, control de calidad y preparación de repositorio, sin poblar el catálogo normativo de procesos ni iniciar B2 como fase científica.

El ciclo técnico GOEI-CYCLE-0002 confirmó la reconstrucción determinista del inventario de Ontology Baseline v0.1 y dejó preparadas las compuertas G0–G5. Estas compuertas describen requisitos de promoción, pero ninguna herramienta puede otorgar aprobación científica o institucional.

## Control de productos derivados

Los archivos `12_Tesis/GOEI_Tesis_Manuscrito.md` y `13_Publicaciones/GOEI_Articulo_metodologico.md` fueron auditados mediante GOEI-AUDIT-0001 y se encuentran en cuarentena. Contienen propuestas científicas prematuras y no prueban avance de Fase E. Las fuentes válidas de estado son las matrices de ensamblaje y `program_state.json`.

## Preparación verificable

El estado procesable por máquinas se mantiene en `program_state.json`. A este corte, los tres objetivos finales —Standard validado, tesis terminada y manuscrito publicable— permanecen bloqueados por compuertas científicas y de validación explícitas.
