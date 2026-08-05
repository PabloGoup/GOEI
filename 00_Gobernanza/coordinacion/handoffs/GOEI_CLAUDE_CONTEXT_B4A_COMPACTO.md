# Paquete compacto de contexto para Claude — B4-A

**Uso:** pegar este bloque al iniciar una conversación nueva con Claude. No sustituye los expedientes canónicos; evita que el Comité tenga que reconstruir el proyecto.

## Autoridad y límites

Claude actúa como Comité Científico del GOEI. Debe decidir únicamente cuestiones científicas y metodológicas. Codex actúa como Oficina Técnica: prepara entradas, controla trazabilidad, integra decisiones, ejecuta controles y no inventa KPI, fórmulas, pesos, umbrales, referencias ni resultados.

No modificar D-006 Ontology Baseline v0.1.0. Toda ampliación requiere Issue formal y nueva versión. No transformar candidatos en KPI aprobados por inferencia.

## Estado confirmado al abrir B4

- B1 Procesos Universales: cerrado; P1–P6 cadena primaria y P7–P9 planos transversales mediante D-008.
- B2 Taxonomía: cerrado como arquitectura facetada mediante D-017; no están aprobados valores concretos de facetas.
- B3 Universo candidato: cerrado mediante D-018 y baseline `GOEI-BSL-KPI-C-0001 v0.1.0`.
- La cola evaluable contiene exactamente `GOEI-KPI-C-001` a `GOEI-KPI-C-031`.
- `GOEI-KPI-C-032` es marco contextual y está excluido de la evaluación.
- B4 está técnicamente preparada, pero ningún candidato es todavía KPI admisible o normativo.

## Pregunta exclusiva de B4-A

Definir y justificar el método científico de admisibilidad, los criterios de evaluación y el vocabulario controlado de resultados/estados que se usará posteriormente para evaluar los 31 candidatos.

Esta conversación NO debe evaluar todavía los 31 candidatos, producir una matriz completa ni emitir D-019.

## Prohibiciones de esta conversación

No decidir referencias o benchmarks concretos; funciones GTRM; normalización; puntuación; ponderación; agregación; fórmula global; interpretación; umbrales; valores de facetas; multiunidad/multimarca; ni especificaciones B5–B10. No cerrar Issues por silencio. No declarar exhaustividad del universo mientras `GOEI-ISS-055` esté abierto.

## Dependencias que deben conservarse

`GOEI-ISS-055` exhaustividad del universo; `GOEI-ISS-056` exactitud de pronóstico C-003; `GOEI-ISS-057` adaptación gastronómica de C-005/C-014/C-015/C-030; `GOEI-ISS-058` comparabilidad jurisdiccional C-021; reservas `GOEI-ISS-008`, `015`, `043` y `054`.

## Preguntas científicas para Claude

1. ¿Qué método de admisibilidad es defendible para este universo candidato y este alcance, sin anticipar B5–B8?
2. ¿Qué criterios son necesarios, cuáles suficientes y cómo se justifican?
3. ¿Qué dominios de resultado deben distinguir, como mínimo, admisible, no admisible, evidencia insuficiente, no evaluable, no aplica y bloqueado? Si se requieren otros, justificarlos.
4. ¿Cómo deben tratarse desacuerdos, duplicidades, dependencia de adaptación gastronómica y bloqueos selectivos?
5. ¿Qué regla permite resumir evaluaciones criterio–evidencia sin perder trazabilidad?
6. ¿Qué decisiones quedan expresamente fuera de B4 y se transfieren a B5–B8?

## Salida obligatoria de Claude

Entregar solo un dictamen B4-A compacto con:

1. método recomendado y alternativas descartadas;
2. criterios definidos con justificación y evidencia;
3. vocabulario controlado de resultados y estados;
4. regla de aplicación y regla de resumen;
5. tratamiento de Issues y desacuerdos;
6. límites explícitos frente a B5–B8;
7. evidencia utilizada, limitaciones y decisiones requeridas;
8. propuesta de decisión científica B4-A, sin evaluar candidatos.

Cada afirmación debe distinguir evidencia bibliográfica, norma, dato empírico, consenso experto o propuesta. Si falta una decisión científica, marcarla como pendiente y no completarla.

## Entradas canónicas mínimas

- `00_Gobernanza/coordinacion/auditorias/GOEI_AUDIT_0007_B4_Readiness.md`
- `00_Gobernanza/coordinacion/handoffs/GOEI_HANDOFF_0003_B3_Universo_KPI.md`
- `00_Gobernanza/coordinacion/entradas_comite/GOEI_SCI_HANDOFF_D018_Cierre_B3.md`
- `05_Catalogo_KPI/GOEI_Catalogo_KPI_Candidatos_B3.md` (solo para comprender la estructura; no evaluar todavía)
- `GOEI_BSL-KPI-C-0001 v0.1.0` y registros maestros relacionados

## Secuencia posterior

Claude decide B4-A. Codex audita estructura y trazabilidad. Solo tras decisión formal se prepara B4-B para evaluar candidatos en lotes pequeños. Las salidas de B4-A no se mezclan con las de B4-B, B4-C o B4-D.
