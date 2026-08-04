# GOEI Cycle Report 0011 — Navegación del Knowledge Graph

**Fecha:** 2026-08-04

## Auditoría de entrada

- CI de `6613b94`: exitosa;
- decisiones científicas nuevas: ninguna;
- estado B1: pendiente de D-008 y GOEI-ISS-030.

## Resultado

Se añadió GOEI-TOOL-KG-0002 para consultar la proyección registral mediante:

- recuperación de nodo;
- vecinos entrantes, salientes o ambos;
- filtro por tipo de relación;
- camino más corto dirigido o bidireccional explícito;
- impacto directo de decisiones y componentes.

## Regla de seguridad epistemológica

La herramienta no expande dependencias desde texto libre. Los campos `dependents` y `evidence` se devuelven como literales registrados y se etiquetan como no inferidos. Un camino solo usa aristas presentes en el snapshot.

## Verificación

| Control | Resultado |
|---|---|
| Snapshot | 135 nodos / 153 aristas |
| Consulta de impacto D-006 | 2 componentes y 2 documentos directos; inferencia `false` |
| Pruebas unitarias | 22/22 conformes |
| Validador integral | PASS — 112 controles |
| Persistencia oficial | Sin cambios; GOEI-ISS-037 abierto |
