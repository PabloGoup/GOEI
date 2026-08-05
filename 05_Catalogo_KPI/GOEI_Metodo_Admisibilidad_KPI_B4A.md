# Método de Admisibilidad KPI GOEI — B4-A

| Campo | Valor |
|---|---|
| Identificador | `GOEI-KPI-ADM-MTH-0001` |
| Versión | 0.1.0 |
| Estado | Ratificado por `GOEI-DIR-RES-0004` |
| Autoridad científica | Comité Científico GOEI |
| Alcance | Evaluación B4-B de `GOEI-KPI-C-001`…`031` al nivel `Establecimiento` |
| Exclusión | No evalúa candidatos, no aprueba KPI y no contiene medición, referencias, GTRM, normalización, matemática o interpretación |

## 1. Fuente científica y precedencia

Este documento es una **integración técnica**, no una nueva decisión científica. Sus fuentes de verdad, preservadas sin sobrescritura, son:

1. `GOEI_SCI_DICTAMEN_B4A_Metodo_Admisibilidad.md`;
2. `GOEI_SCI_ADENDA_B4A_Resolutiva.md`, que sustituye las secciones que declara;
3. `GOEI_SCI_CORRIGENDA_B4A.md`, que corrige §H.4 y complementa §A2/§D.

En caso de conflicto se aplica únicamente la precedencia explícita del expediente. Esta vista no puede utilizarse para alterar el contenido científico de sus fuentes.

## 2. Método

Cribado de admisibilidad basado en criterios, no compensatorio y referenciado a evidencia. Cada candidato se evalúa contra todos los criterios necesarios; cada veredicto conserva evidencia y procedencia; el estado global se deriva por una regla léxica determinista y nunca por puntuación.

## 3. Criterios necesarios

| Código | Criterio | Regla B4-A |
|---|---|---|
| C-DEF | Definición conceptual unívoca | Necesario y aplicable universalmente |
| C-MED | Operacionalización medible | En B4 exige definición operacional, unidad y numerador/denominador sólo cuando la fuente los provea |
| C-TRAZ | Trazabilidad de datos y fuente | Necesario y aplicable universalmente |
| C-REP | Repetibilidad / reproducibilidad | Necesario y aplicable universalmente |
| C-AUD | Auditabilidad | Necesario y aplicable universalmente |
| C-FACT | Factibilidad / realizabilidad | Necesario y aplicable universalmente |
| C-PERT | Pertinencia a proceso GOEI | Necesario y aplicable universalmente |
| C-NORED | No redundancia | Admite `NO APLICA` cuando no existe comparador; duplicidad estricta falla; inclusión y complementariedad se registran sin fallo automático |
| C-LEGSEG | Compatibilidad con no compensación crítica | Admite `NO APLICA` fuera de inocuidad, seguridad o legalidad; el rol AX-4 se registra sin anticipar su efecto matemático |

## 4. Vocabularios controlados

### Eje A — candidato–criterio

`CUMPLE` · `NO CUMPLE` · `EVIDENCIA INSUFICIENTE` · `NO APLICA` · `BLOQUEADO`

### Eje B — estado global al nivel Establecimiento

`ADMISIBLE` · `ADMISIBLE CONDICIONADO` · `NO ADMISIBLE` · `EVIDENCIA INSUFICIENTE` · `BLOQUEADO`

`NO EVALUABLE` es control de alcance, no estado de la matriz. El estado global `NO APLICA` por categoría está reservado bajo `GOEI-ISS-059` y no se usa mientras no existan categorías instanciadas aprobadas.

## 5. Aplicabilidad

`NO APLICA` por criterio queda fuera de la conjunción lógica y sólo puede usarse en C-NORED o C-LEGSEG con justificación. Los otros siete criterios nunca admiten `NO APLICA`.

La matriz contiene exactamente C-001…C-031. C-032 se registra sólo como exclusión de alcance y no genera fila.

## 6. Regla de resumen

Tras aplicar la regla de aplicabilidad:

1. cualquier `NO CUMPLE` en criterio necesario aplicable produce `NO ADMISIBLE`;
2. sin fallos, cualquier `BLOQUEADO` de criterio produce `BLOQUEADO`;
3. sin fallos ni bloqueos, cualquier `EVIDENCIA INSUFICIENTE` produce el estado global homónimo;
4. todos los criterios aplicables `CUMPLE` con condición externa documentada producen `ADMISIBLE CONDICIONADO`;
5. todos los criterios aplicables `CUMPLE` sin condición producen `ADMISIBLE`.

`ADMISIBLE CONDICIONADO` sólo procede cuando la condición no contradice ni deja indeterminado un criterio marcado `CUMPLE`. Si lo contradice o indetermina, el criterio se reevalúa como `EVIDENCIA INSUFICIENTE` o `BLOQUEADO`, según el expediente científico.

## 7. Evidencia

La suficiencia probatoria se aplica cualitativamente conforme a §A4 de la adenda: fuente citable, nivel admitido y ausencia de contradicción no resuelta de nivel igual o superior. Toda evaluación conserva fuente exacta, justificación, autoridad, versión e Issue aplicable.

## 8. Bloqueos selectivos

- `GOEI-ISS-055`: impide afirmar exhaustividad, no evaluar candidatos individuales.
- `GOEI-ISS-056`: sólo bloquea el criterio de C-003 que dependa de exactitud de pronóstico cerrada.
- `GOEI-ISS-057`: condición de promoción de C-005, C-014, C-015 y C-030, sujeta al invariante del estado condicionado.
- `GOEI-ISS-058`: reserva la comparabilidad/normalización jurisdiccional de C-021, no su admisibilidad conceptual.
- `GOEI-ISS-054/059`: bloquean aplicabilidad por categoría, no la evaluación al nivel `Establecimiento`.
- `GOEI-ISS-008`, `015` y `043`: se conservan en sus alcances registrados.

## 9. Integridad de implementación

La matriz detallada candidato–criterio es la fuente operativa de verdad. La hoja de evidencia y la vista de estado global son derivadas y no pueden editarse independientemente. La partición en lotes es técnica y no tiene significado científico.

Toda modificación del método exige Issue formal, análisis de impacto, decisión científica, ratificación competente, nueva versión y preservación de esta versión.
