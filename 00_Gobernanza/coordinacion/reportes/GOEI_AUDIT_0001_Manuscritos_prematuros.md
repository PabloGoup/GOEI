# GOEI-AUDIT-0001 — Auditoría de manuscritos prematuros

| Campo | Valor |
|---|---|
| Fecha | 2026-08-04 |
| Responsable | Oficina Técnica GOEI |
| Alcance | Tesis y artículo metodológico aparecidos en el repositorio |
| Resultado | No conformes para integración; conservados en cuarentena lógica |
| Modificación del contenido | Ninguna |

## Artefactos auditados

- `12_Tesis/GOEI_Tesis_Manuscrito.md`
- `13_Publicaciones/GOEI_Articulo_metodologico.md`

## Hallazgos críticos

| ID | Hallazgo | Evidencia | Regla vulnerada | Efecto |
|---|---|---|---|---|
| AUD-001 | Presenta el constructo y denominación como definidos pese a D-003/D-004 e Issues abiertos. | tesis §§Resumen, 3, 16; artículo §§Abstract, 3 | no completar vacíos científicos | excluir de ensamblaje |
| AUD-002 | Trata arquitectura D-005 como adoptada y T3 como compuerta obligatoria pese a que D-005 sigue provisional. | tesis §6; artículo §5 | decisión provisional no es requisito vigente | excluir afirmación |
| AUD-003 | Trata el núcleo de procesos como resultado consolidado cuando D-008 y cierre B1 no están aprobados. | tesis §§7, 16; artículo §§6, 10 | GOEI-ISS-030 | bloquear procesos |
| AUD-004 | Crea taxonomía multieje sin decisión B2. | tesis §8 | Master Plan: fases secuenciales; no inventar taxonomía | bloquear capítulo |
| AUD-005 | Crea siete dimensiones candidatas sin decisión científica. | tesis §9; artículo §7 | prohibición de crear contenido científico | bloquear capítulo |
| AUD-006 | Crea catálogo de KPI candidatos. | tesis §10.2; artículo §7 | prohibición expresa de crear KPI | bloquear capítulo |
| AUD-007 | Propone normalización 0–100 y métodos de agregación. | tesis §§11–12; artículo §7 | prohibición de crear fórmula/normalización/ponderación | bloquear capítulos |
| AUD-008 | Propone reglas críticas, bandas y protocolo de validación no aprobados. | tesis §§13–14; artículo §§7–8 | decisiones B8/B9 ausentes | bloquear capítulos |
| AUD-009 | Formula conclusiones de “demostración” sin cierre de fases ni validación empírica. | tesis §16; artículo §10 | no cerrar investigación ni sobredimensionar evidencia | no publicable |
| AUD-010 | Referencias indican explícitamente verificación pendiente. | tesis Referencias; artículo References | fuentes no verificadas para envío | no publicable |

## Dictamen

Los artefactos pueden conservarse como **borradores exploratorios no autorizados**, pero no son tesis terminada, artículo candidato, componente GOEI ni fuente científica. No deben citarse como autoridad, entrar en una baseline ni alimentar el BOK salvo como antecedente descartado.

## Remediación futura

1. Conservar el contenido original y su checksum.
2. No editarlo para “hacerlo parecer” conforme.
3. Cuando existan decisiones B1–B10, reconstruir los manuscritos desde la matriz de ensamblaje y fuentes canónicas.
4. Reutilizar únicamente fragmentos que puedan trazarse línea por línea a decisiones aprobadas y fuentes verificadas.
5. Someter la nueva versión a auditoría científica, técnica, académica y editorial.

## Issues

- GOEI-ISS-039: reconstrucción trazable de la tesis después de B1–B10 y validación.
- GOEI-ISS-040: reconstrucción del artículo después de resultados y elección de alcance editorial.
