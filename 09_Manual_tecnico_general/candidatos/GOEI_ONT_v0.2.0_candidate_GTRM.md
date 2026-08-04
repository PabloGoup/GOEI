# Especificación candidata de cambio ontológico GOEI v0.2.0 — GTRM

| Campo | Valor |
|---|---|
| Identificador | GOEI-ONT-CAND-0001 |
| Estado | Candidata no normativa; análisis de delta |
| Baseline de origen | GOEI-BSL-ONT-0001 / D-006 Ontology Baseline v0.1 |
| Decisiones habilitantes | D-009–D-016 |
| Issue de cambio | GOEI-ISS-053 |
| Regla | No modifica, sustituye ni reinterpreta la baseline vigente |

## Delta candidato

La futura revisión deberá representar explícitamente, sin fusionarlos:

- Observación;
- Medición registrada;
- Valor de KPI;
- Condición de referencia;
- Benchmark;
- Especificación GTRM o función normativa parametrizada;
- Puntuación normalizada;
- Representación manual derivada;
- Implementación software derivada;
- Declaración de incertidumbre;
- autoridad científica y normativa;
- versión, vigencia y sucesión.

Relaciones mínimas candidatas:

```text
Observación → origina → Medición registrada
Medición registrada → sustenta derivación de → Valor de KPI
Benchmark → puede informar mediante decisión → Condición de referencia
GTRM → recibe → Valor de KPI
GTRM → utiliza → Condición de referencia
GTRM → produce → Puntuación normalizada
Tabla manual / Software → representan → Especificación GTRM
Evaluación → conserva versión exacta de → GTRM
```

## Restricciones candidatas

- una observación o medición aislada no es entrada puntuable de GTRM;
- referencia y benchmark no son equivalentes;
- una GTRM sin declaración de incertidumbre no es admisible;
- tabla y software no son fuentes independientes de verdad;
- no se sobrescriben versiones utilizadas históricamente;
- ausencia o conflicto no resuelto bloquea solo la rama afectada;
- ninguna aplicación selecciona referencias o precedencias por inferencia.

## Criterio de promoción

Solo podrá convertirse en nueva baseline después del análisis de impacto completo de GOEI-ISS-053, resolución competente, migración trazable, validación de consistencia y publicación de una versión distinta. Este documento no contiene instancias, fórmulas, parámetros, tolerancias ni referencias concretas.
