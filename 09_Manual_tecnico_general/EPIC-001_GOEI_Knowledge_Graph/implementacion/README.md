# Proyección procesable del Knowledge Graph

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-IMPL-0001 |
| Versión | 0.1.0 |
| Estado | Proyección técnica regenerable; no normativa |
| Fuente | Registros maestros GOEI |
| Limitación | No resuelve tecnología ni namespace persistentes (GOEI-ISS-037) |

## Propósito

Materializar la trazabilidad ya registrada como nodos y aristas JSON. La proyección no agrega relaciones por semejanza, interpretación o inferencia. Si una relación no tiene fuente explícita, no se emite.

## Contenido

- `knowledge_graph.registry.json`: snapshot determinista.
- `build_registry_knowledge_graph.py`: generador y modo `--check`.

## Entidades proyectadas

`Component`, `Document`, `Decision`, `Issue` y `Version`.

## Relaciones proyectadas

- `CONTAINS`: documento canónico contiene componente;
- `ORIGINATES`: decisión aparece como origen registrado del componente;
- `INCORPORATED_IN`: componente declara versión GOEI;
- `TRACED_IN`: componente posee fila en la matriz de trazabilidad;
- `REGISTERED_IN`: Issue pertenece a un registro canónico.

Todas las aristas incluyen `sourceDocument`. Los campos de evidencia, dependientes y estados se conservan como literales de los registros hasta que exista identidad estructurada suficiente para crear más nodos o aristas.

## Regeneración

```bash
python3 09_Manual_tecnico_general/EPIC-001_GOEI_Knowledge_Graph/implementacion/build_registry_knowledge_graph.py
```

Verificación sin modificar:

```bash
python3 09_Manual_tecnico_general/EPIC-001_GOEI_Knowledge_Graph/implementacion/build_registry_knowledge_graph.py --check
```
