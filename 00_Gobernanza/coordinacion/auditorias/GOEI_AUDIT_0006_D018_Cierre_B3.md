# Auditoría técnica GOEI-AUDIT-0006 — D-018 / cierre B3

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0006` |
| Fecha | 2026-08-04 |
| Resultado | **ACEPTABLE PARA DECISIÓN, CON PROMOCIÓN LIMITADA** |
| Alcance | Suficiencia formal, consistencia registral y trazabilidad del universo candidato B3 |
| Exclusión | No evalúa literatura, pertinencia, validez, admisibilidad ni prioridad científica |
| Decisión auditada | D-018, aprobada por el Comité Científico |

## 1. Dictamen técnico

Los cuatro artefactos B3 satisfacen el contrato de `GOEI-PIPE-B2-B10-0001`: describen protocolo y límites, inventario, evidencia por registro, definiciones encontradas, cobertura, duplicados, vacíos, limitaciones y una propuesta inequívoca de cierre limitado. La auditoría no encontró identificadores repetidos, registros de indicador sin fuente declarada ni promociones indebidas a KPI del estándar.

El expediente es **aceptable para decisión** como universo candidato no normativo. La promoción se limita a congelar un inventario para evaluación en B4; no aprueba ningún KPI, definición GOEI, admisibilidad, fórmula, referencia, peso, puntaje, umbral o regla de agregación.

## 2. Controles contractuales

| Control | Resultado | Evidencia / reserva |
|---|---|---|
| Entradas B1/B2 | Conforme | `GOEI-BSL-PROC-0001 v0.1.0`, `GOEI-BSL-TAX-0001 v0.1.0` y `GOEI-DIR-RES-0002` |
| Identificadores | Conforme | 32 IDs `GOEI-KPI-C-001`–`032`, únicos y consecutivos |
| Estado no normativo | Conforme | 31 registros `CANDIDATO`; C-032 separado como `CANDIDATO CONTEXTUAL` |
| Fuente por candidato | Conforme formalmente | los 31 indicadores declaran fuente APA 7; no se juzga su calidad científica |
| Esquema de ficha | Conforme | definición, unidad, numerador/denominador cuando consta, proceso, faceta, fuente, datos, frecuencia, limitaciones, duplicados, evidencia y estado |
| Cobertura P1–P9 | Conforme con vacíos | todos los procesos poseen registros; cobertura parcial P1 queda explícita en `GOEI-ISS-056` |
| Relación taxonómica | Conforme | solo identidades FX-1…FX-3; no usa valores bloqueados por `GOEI-ISS-054` |
| Unidad de referencia | Conforme | Establecimiento; rollups excluidos por `GOEI-ISS-008` |
| Duplicados/solapamientos | Conforme | siete relaciones explícitas; resolución diferida a B4 |
| Vacíos y sesgos | Conforme | V-B3-01…06 y Issues/reservas asociados |
| Ausencia de admisibilidad | Conforme | no hay resultado candidato–criterio ni estado `admisible` |
| Ausencia de fórmula GOEI, pesos y umbrales | Conforme | las expresiones transcriben definiciones fuente; no son fórmulas GOEI |
| Baselines previas | Conforme | no se modifica ontología, procesos ni taxonomía |
| Papel/software | No aplicable aún | B3 congela identidades y procedencia, no especificaciones calculables |

## 3. Control de identidad y clasificación

La comprobación mecánica encontró 32 encabezados, 32 IDs únicos y una secuencia completa 001–032. Los 31 indicadores documentados conservan estado `CANDIDATO` y serán la única cola de evaluación B4.

`GOEI-KPI-C-032` declara expresamente que Balanced Scorecard es un marco y no un indicador. Para impedir que software o Knowledge Graph lo interpreten como instancia de KPI, se normalizó técnicamente como `CANDIDATO CONTEXTUAL`, sin alterar su contenido científico, y se excluyó de la cola B4. Permanece en el catálogo únicamente por trazabilidad del expediente D-018.

## 4. Cobertura, duplicados y bloqueos selectivos

- P1–P9 están representados al menos por un indicador candidato.
- La densidad declarada no equivale a pertinencia ni suficiencia científica.
- Los solapamientos C-028/C-009/C-029, C-012/C-018, C-017/C-018, C-005/C-014, C-008/C-027, C-007 FLI/FWI y C-008 P4/P8 quedan para B4.
- `GOEI-ISS-008` bloquea rollups multiunidad/multimarca.
- `GOEI-ISS-054` bloquea valores concretos de faceta.
- `GOEI-ISS-043` mantiene fuera de la baseline de procesos la clasificación de merma; C-007 no la reabre.
- `GOEI-ISS-015` mantiene sin resolver el doble rol de inocuidad.

## 5. Issues exigibles antes o durante B4

Se deben registrar `GOEI-ISS-055` a `GOEI-ISS-058` exactamente con las ramas y condiciones de cierre declaradas en D-018. No bloquean el cierre registral B3, pero B4 no podrá promover los candidatos afectados mientras su criterio científico dependiente permanezca sin resolver.

## 6. Conclusión

La Oficina Técnica recomienda ratificar D-018 exclusivamente como cierre de la pregunta nuclear B3, congelar `GOEI-CAT-KPI-C-0001 v0.1.0` y `GOEI-MTZ-KPI-C-0001 v0.1.0` como **baseline de catálogo candidato**, registrar 31 indicadores candidatos y un marco contextual, y habilitar B4.

Esta auditoría no autoriza presentar los registros como KPI GOEI. B4 deberá aprobar primero su método y criterios de admisibilidad y evaluar cada candidato con trazabilidad criterio–evidencia–resultado.

