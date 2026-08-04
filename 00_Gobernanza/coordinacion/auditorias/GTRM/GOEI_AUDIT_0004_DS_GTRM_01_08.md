# GOEI-AUDIT-0004 — Auditoría técnica de DS-GTRM-01…08

| Campo | Valor |
|---|---|
| Identificador | GOEI-AUDIT-0004 |
| Fecha | 2026-08-04 |
| Autoridad | Oficina Técnica GOEI |
| Objeto | Consistencia, suficiencia formal, trazabilidad y dependencias del paquete científico GTRM |
| Resultado | Conforme para incorporación como marco científico D-009–D-016, con reserva interpretativa en DS-GTRM-04 |
| Efecto | Integra decisiones de marco; no emite GTRM, no modifica D-006 y no fija fórmulas, parámetros, tolerancias ni precedencias operativas completas |

## Dictamen técnico

Los ocho slots tienen identidad, alcance, alternativas, evidencia clasificada, decisión explícita, limitaciones, dependencias, controles y autoridad científica. Son mutuamente consistentes: entrada (01), transformación única (02), referencias (03–04), incertidumbre (05), autoridad y ciclo de vida (06), faltantes/conflictos (07) y equivalencia/reproducibilidad (08) forman una cadena completa sin crear KPI ni instancias GTRM.

La incorporación es suficiente como **contrato arquitectónico**, no como autorización para producir puntuaciones. Continúan diferidos a B2/B4/B5/B6 los dominios reales, admisibilidad, métodos de medición, funciones, parámetros, umbrales, tolerancias y reglas operativas por familia.

## Reserva interpretativa controlada

DS-GTRM-04 distingue correctamente los dominios y prohíbe selección inferida. La frase “regla candidata” sobre autoridad legal se incorpora solo en este alcance:

1. los requisitos regulatorios y jurisdiccionales aplicables son obligatorios y, cuando protegen inocuidad o legalidad, operan como compuertas no compensables conforme AX-4;
2. esto no establece una jerarquía total entre referencia universal, sectorial, empírica o categorial;
3. toda precedencia operativa restante requiere acto científico trazable en B2/B4 y no puede ser inferida por software.

Esta precisión evita convertir una candidatura en una precedencia concreta no aprobada, sin alterar la conclusión científica estable.

## Trazabilidad y cierre de Issues

| Slot | Decisión asignada | Issue resuelto | Dependencia residual |
|---|---|---|---|
| DS-GTRM-01 | D-009 | GOEI-ISS-045 | B4/B5: regla de derivación y admisibilidad del valor KPI |
| DS-GTRM-02 | D-010 | GOEI-ISS-046 | B6: familias funcionales y parámetros |
| DS-GTRM-03 | D-011 | GOEI-ISS-047 | B5: protocolo benchmark→referencia |
| DS-GTRM-04 | D-012 | GOEI-ISS-048 | B2/B4: precedencia operativa no inferida |
| DS-GTRM-05 | D-013 | GOEI-ISS-049 | B5: método, intervalos y suficiencia por familia |
| DS-GTRM-06 | D-014 | GOEI-ISS-050 | GOEI-ISS-003: órganos definitivos de gobernanza |
| DS-GTRM-07 | D-015 | GOEI-ISS-051 | B4/B7/B8: estados operativos y resultados parciales |
| DS-GTRM-08 | D-016 | GOEI-ISS-052 | B5/B6/B9: tolerancia y casos por familia |

Cerrar estos Issues significa responder sus preguntas de marco. No cierra las dependencias residuales ni habilita instancias GTRM.

## Control D-006

Se abre GOEI-ISS-053 para gestionar una futura versión ontológica. D-006 Ontology Baseline v0.1 permanece inmutable. La especificación candidata v0.2.0-candidate es un análisis de delta, no una baseline ni un componente vigente.

## Conclusión

El paquete es **técnicamente conforme para registrar D-009–D-016**. La arquitectura B5/B6 puede prepararse como candidata. La emisión de GTRM reales y cualquier modificación normativa permanecen bloqueadas por sus compuertas científicas específicas.
