# Arquitectura candidata B5–B6 para GTRM

| Campo | Valor |
|---|---|
| Identificador | GOEI-ARQ-GTRM-0001 |
| Estado | Candidata técnica no normativa |
| Origen | D-009–D-016; GOEI-AUDIT-0004 |
| Alcance | Contratos y compuertas; sin contenido científico concreto |

## Pipeline autorizado como arquitectura

```text
B5 Especificación de medición
→ observación y medición registrada preservadas
→ derivación versionada del valor KPI
→ referencia/benchmark aplicable y trazable
B6 Especificación GTRM
→ aplicación única de función normativa parametrizada
→ puntuación normalizada e incertidumbre declarada
→ salida admisible para agregación
```

GTRM y normalización son un único paso lógico. Está prohibido aplicar una segunda normalización a su salida.

## Contrato B5 candidato

B5 deberá conservar instrumento, unidad, método, agente, periodo, entradas originales, regla de derivación, procedencia, incertidumbre de medición y muestreo, y distinción entre condición de referencia y benchmark. No seleccionará referencias por cercanía ni inferencia.

## Contrato B6 candidato

B6 recibirá un valor KPI válido y una especificación GTRM vigente. Deberá conservar identidad, versión, dominio, jurisdicción, unidad, vigencia, referencia, parámetros aprobados, incertidumbre y estado. Producirá la puntuación normalizada del KPI o un estado no calculable; nunca fabricará un fallback.

## Representaciones conformes

La especificación de la función es la fuente normativa única. Tabla manual y software son representaciones derivadas, versionadas y verificadas mediante casos canónicos. La tolerancia y los casos finales requieren aprobación científica por familia y no se establecen aquí.

## Bloqueos

Esta arquitectura no habilita ninguna instancia GTRM. La implementación concreta depende de B2, B4, B5 y B6 y del eventual cambio ontológico gestionado mediante GOEI-ISS-053.
