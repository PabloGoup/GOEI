# Reglas de navegación del GOEI Knowledge Graph

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-NAV-0001 |
| Versión | 0.1.0-draft |

## 1. Principios

1. Toda vista comienza en una entidad identificada, no en texto libre.
2. La interfaz muestra relación, dirección, procedencia, estado y versión.
3. Se diferencia lo declarado de lo inferido.
4. Los filtros temporales usan fecha de vigencia y fecha de conocimiento por separado.
5. Un Issue bloqueante es visible en cada descendiente afectado.

## 2. Rutas obligatorias por entidad

| Punto de partida | Ruta disponible | Resultado esperado |
|---|---|---|
| Requisito/Regla/Componente | `creado_por → informada_por → sustentada_por → Fuente` | origen científico completo |
| Fuente | `contiene_evidencia → informa → Decisión → crea` | impacto de la fuente |
| Decisión | `crea/modifica/retira → integrado_en → LíneaBase/Release` | implementación e impacto |
| Issue | `bloquea → dependientes` y `resuelto_por` | alcance y resolución |
| Versión | `versión_de`, `sucede_a`, `fijada_en` | historia y publicaciones |
| Línea base | `fija_version`, `publicada_por`, `sucede_a` | contenido exacto y transición |
| Documento | `expresa`, `depende_de`, `incluido_en`, `traduce` | autoridad, contexto y copias |
| KPI | `creado_por`, `relacionado_con`, `usa`, `validado_por` | contrato, no valores operacionales |
| Tesis/Publicación | `deriva_de` hasta línea base y fuentes | alcance de afirmaciones derivadas |

## 3. Navegación de impacto

- **Impacto directo:** una arista saliente `depende_de`, `implementa`, `contiene` o `deriva_de`.
- **Impacto transitivo:** recorrido solo por relaciones declaradas como propagadoras.
- **Límite:** detener en versión fija, componente retirado o Issue que declare frontera.
- **Salida:** lista de nodos, camino causal, versiones y responsable.

## 4. Navegación histórica

La consulta `as_of(fecha)` incluye nodos y aristas vigentes en esa fecha. La consulta `baseline(id)` reconstruye exactamente el manifiesto aunque componentes estén retirados hoy. No se usa el grafo actual para reinterpretar una línea base histórica.

## 5. Navegación segura

- No mostrar documentos restringidos sin autorización; sí puede mostrarse su existencia y metadatos mínimos si la política lo permite.
- No exponer datos personales desde nodos Agente en vistas públicas.
- No permitir editar desde una vista inferida; las mutaciones se realizan sobre la fuente canónica mediante Issue/Cambio.

## 6. Consultas mínimas futuras

- `trace_origin(element_id, version)`
- `trace_impact(decision_id)`
- `why_blocked(element_id)`
- `compare_baselines(a, b)`
- `reconstruct_release(release_id)`
- `find_unresolved_dependencies(element_id)`
- `find_orphan_nodes()`
- `find_authority_gaps()`
- `find_unvalidated_components(baseline_id)`
