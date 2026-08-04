# Reglas de integridad del GOEI Knowledge Graph

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-INT-0001 |
| Versión | 0.1.0-draft |

| ID | Regla de integridad |
|---|---|
| KG-INT-001 | Todo nodo controlado tiene exactamente un ID persistente y una clase. |
| KG-INT-002 | Ningún ID se reutiliza, incluso después del retiro. |
| KG-INT-003 | Todo nodo declara estado; los normativos declaran además vigencia y naturaleza. |
| KG-INT-004 | Toda arista cumple dominio, rango y cardinalidad del diccionario. |
| KG-INT-005 | Toda aserción científica o normativa registra procedencia y autoridad. |
| KG-INT-006 | Toda Decisión aprobada contiene problema, alternativas, evidencia, resolución, limitaciones, autoridad y fecha. |
| KG-INT-007 | Todo Componente normativo tiene al menos una Decisión aprobada mediante `creado_por`. |
| KG-INT-008 | Todo elemento vigente tiene al menos una representación canónica mediante `se_expresa_en`. |
| KG-INT-009 | Toda Versión publicada tiene checksum y pertenece a un solo artefacto conceptual. |
| KG-INT-010 | Toda Línea base fija versiones exactas; se prohíben referencias móviles. |
| KG-INT-011 | Todo Release publica exactamente una Línea base y posee manifiesto verificable. |
| KG-INT-012 | `sustituye`, `sucede_a`, `parte_de` y jerarquías taxonómicas son acíclicas. |
| KG-INT-013 | Una Decisión aprobada, Línea base o Release publicada es inmutable. |
| KG-INT-014 | Un Issue bloqueante impide publicar únicamente los descendientes afectados. |
| KG-INT-015 | Cerrar un Issue exige relación `resuelto_por` y verificación del criterio de cierre. |
| KG-INT-016 | Manual, Formulario, BOK, Publicación y Tesis no pueden ser origen único de Requisito o Regla. |
| KG-INT-017 | Toda traducción referencia una versión fuente exacta y declara idioma de autoridad. |
| KG-INT-018 | Toda Validación referencia objeto y versión exactos; su resultado no se hereda automáticamente a versiones posteriores. |
| KG-INT-019 | Toda Observación cumple el anclaje cuádruple AX-11 del baseline ontológico. |
| KG-INT-020 | Modificar la Ontología Baseline v0.1 requiere Issue formal previo y nueva baseline. |
| KG-INT-021 | Una arista rechazada o sustituida se conserva con estado histórico; no se elimina. |
| KG-INT-022 | No existe dependencia normativa circular entre componentes vigentes. |
| KG-INT-023 | Toda aserción temporal declara intervalos coherentes: inicio no posterior al fin. |
| KG-INT-024 | Un agente solo aprueba dentro del mandato y periodo de su rol. |
| KG-INT-025 | El estado calculado por inferencia se distingue del estado declarado por autoridad. |

## Compuerta de publicación

Una Línea base es publicable solo si KG-INT-001–025 no presentan violaciones críticas o si cada excepción está respaldada por Issue y decisión de excepción explícita. Un Issue abierto no es una excepción automática.
