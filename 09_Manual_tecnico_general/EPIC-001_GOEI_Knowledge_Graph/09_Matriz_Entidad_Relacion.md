# Matriz Entidad–Relación

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-MAT-0001 |
| Versión | 0.1.0-draft |

Leyenda: `S` puede ser sujeto; `O` puede ser objeto; `SO` ambos; `—` no participa. Las familias remiten al diccionario: procedencia R001–010; construcción R011–028; versión R029–035; bloqueo R036–038; autoridad R039–043; editorial R044–050.

| Entidad | Procedencia | Construcción | Versión | Bloqueo | Autoridad | Editorial |
|---|---:|---:|---:|---:|---:|---:|
| Evidencia | SO | O | O | O | O | O |
| Fuente bibliográfica | SO | O | O | O | O | O |
| Investigación | S | S | O | O | O | O |
| Hipótesis | SO | O | O | O | O | O |
| Pregunta abierta | O | O | O | SO | O | O |
| Observación | O | O | O | O | O | O |
| Debate científico | S | O | O | O | O | O |
| Decisión científica | SO | S | SO | SO | SO | O |
| Revisión técnica | S | S | O | S | SO | O |
| Componente | O | SO | SO | O | O | SO |
| Documento | O | SO | SO | O | O | SO |
| Manual | O | SO | SO | O | O | SO |
| Ontología | O | SO | SO | O | O | SO |
| Taxonomía | O | SO | SO | O | O | SO |
| Proceso | O | SO | SO | O | O | O |
| KPI | O | SO | SO | O | O | O |
| Regla | O | SO | SO | O | SO | SO |
| Fórmula | O | SO | SO | O | O | O |
| Formulario | O | SO | SO | O | O | SO |
| Validación | S | SO | SO | O | O | O |
| Publicación | S | S | SO | O | O | SO |
| Tesis | S | S | SO | O | O | SO |
| Versión | O | O | SO | O | O | O |
| Línea base | O | O | SO | O | O | SO |
| Release | O | O | SO | O | SO | S |
| Registro de cambio | O | SO | S | SO | O | O |
| Issue | O | O | O | SO | O | O |
| Constitución | O | O | SO | O | SO | S |
| GOEI Standard | O | SO | SO | O | O | SO |
| GOEI BOK | O | SO | SO | O | O | SO |
| Requisito normativo | O | SO | SO | O | O | SO |
| Anexo | O | SO | SO | O | O | SO |
| Agente | O | O | O | O | SO | O |
| Organización | O | O | O | O | SO | O |

## Matriz de cardinalidades nucleares

| Sujeto | Relación | Objeto | Mínimo | Máximo |
|---|---|---|---:|---:|
| Evidencia | extraída_de | Fuente | 1 | 1 |
| Decisión aprobada | informada_por | Evidencia/Investigación/Debate | 1 | * |
| Componente normativo | creado_por | Decisión aprobada | 1 | * |
| Requisito | se_expresa_en | Documento | 1 | * |
| Artefacto versionable publicado | tiene_version | Versión | 1 | * |
| Versión | versión_de | Artefacto | 1 | 1 |
| Línea base | fija_version | Versión | 1 | * |
| Release | publica | Línea base | 1 | 1 |
| Issue abierto | bloquea | Elemento/Relación | 1 | * |
| Issue cerrado | resuelto_por | Decisión/Cambio | 1 | * |
| Anexo | anexo_de | Documento principal | 1 | 1 |
| Traducción | traduce | Documento fuente | 1 | 1 |

La lista exhaustiva de pares permitidos está en el Diccionario de relaciones; esta matriz es una vista de cobertura y no una fuente semántica independiente.
