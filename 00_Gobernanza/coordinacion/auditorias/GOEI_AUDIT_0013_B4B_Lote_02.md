# Auditoría técnica GOEI-AUDIT-0013 — B4-B Lote 02

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0013` |
| Fecha | 2026-08-04 |
| Autoridad | Oficina Técnica GOEI (Codex) |
| Objeto | `GOEI-SCI-B4B-L02-0001` — C-006…C-010 |
| Método | `GOEI-BSL-KPI-ADM-0001 v0.1.0` |
| Resultado | **NO CONFORME — corrigenda focalizada requerida** |
| Efecto | No integrar; no emitir D-019; no promover candidatos |

## 1. Controles conformes

- cinco candidatos C-006…010 y exactamente nueve criterios únicos por candidato: 45 evaluaciones;
- vocabularios de ambos ejes válidos y cinco resúmenes presentes;
- prohibiciones, exclusión de C-032, no exhaustividad y evaluación al nivel `Establecimiento` declaradas;
- ninguna creación material de D-019, KPI aprobado, fórmula, peso, puntaje, umbral, benchmark, GTRM, normalización o interpretación.

## 2. No conformidades

| ID | Prioridad | Ubicación | Hallazgo | Corrección requerida |
|---|---|---|---|---|
| NC-0013-01 | Crítica | C-010 / C-REP, C-FACT y global | `C-REP` figura `CUMPLE`, pero su limitación reconoce que la reproducibilidad depende de definir «utilizable». La condición deja indeterminado un criterio necesario y viola el invariante de `ADMISIBLE CONDICIONADO`. | Reevaluar los criterios afectados como `EVIDENCIA INSUFICIENTE` o `BLOQUEADO`, según autoridad científica, y redeterminar el global por §D. |
| NC-0013-02 | Crítica | C-007 / C-TRAZ, C-REP, C-AUD y C-FACT | C-MED reconoce ausencia de operacionalización a `Establecimiento`, pero otros criterios se marcan `CUMPLE` usando propiedades del marco macro o datos hipotéticos; las limitaciones admiten el cambio de nivel. | Reevaluar todos los criterios estrictamente al nivel `Establecimiento`; no transferir trazabilidad, repetibilidad, auditabilidad o factibilidad macro por inferencia. |
| NC-0013-03 | Importante | C-006, C-007 y C-010 / C-NORED | C-006 sólo menciona un inverso no instanciado; C-010 declara duplicados «—»; FLI/FWI son subindicadores internos de C-007, no comparadores candidatos separados. El precedente B4-A/Lote 01 usa `NO APLICA` cuando no existe comparador en el universo. | Aplicar `NO APLICA` o justificar con precisión un comparador instanciado dentro de C-001…031. |
| NC-0013-04 | Importante | C-007, C-008 y C-010 / Issues | ISS-043 reserva la clasificación de merma como proceso, no la carencia de operacionalización. ISS-054 reserva valores concretos de faceta, no define «equipo» ni «utilizable». | No atribuir vacíos a Issues ajenos. Dejar sin Issue cuando proceda o proponer Issue científico nuevo, de rama acotada, sin abrirlo ni resolverlo técnicamente. |
| NC-0013-05 | Importante | C-008 / invariante condicionado | Se afirma, pero no se demuestra, que definir «equipo» no deja indeterminados C-DEF, C-MED o C-FACT. | Emitir razonamiento focalizado y reevaluar criterios/global si la condición afecta un criterio necesario. |

## 3. Dictamen

El lote permanece fuera de la matriz operativa. La corrección no reabre B4-A ni invalida las filas estructuralmente conformes. El Comité debe sustituir el expediente completo manteniendo 45 evaluaciones, recalcular los cinco resúmenes y conservar C-009 salvo que una corrección dependiente exija documentar impacto.
