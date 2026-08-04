# Contrato procesable del expediente de release GOEI

**ID:** GOEI-REL-SCHEMA-0001  
**Versión:** 1.0.0  
**Naturaleza:** especificación técnica, no normativa científica

## Propósito

Definir el documento JSON que permite evaluar las compuertas G0–G5 de una release sin inferir aprobaciones. El evaluador comprueba presencia, coherencia básica y evidencia documental; no determina validez científica.

## Campos obligatorios

| Campo | Tipo | Función |
|---|---|---|
| `schemaVersion` | string | Versión del contrato; actualmente `1.0` |
| `releaseId` | string | ID conforme a la política de releases |
| `version` | string | Versión SemVer del candidato |
| `status` | enum | `draft`, `candidate`, `approved`, `published`, `withdrawn` |
| `scope` | string no vacío | Alcance explícito |
| `components` | array | Componentes con `id`, `version` y `path` |
| `decisions` | array | Decisiones con `id`, `status` y `recordPath` |
| `traceabilityArtifacts` | array de rutas | Evidencia de trazabilidad |
| `technicalValidation` | object | `passed`, `command`, `recordPath` |
| `manifestPath` | ruta | Manifiesto JSON del candidato |
| `baselineComparison` | object | `recordPath` e `impactAnalysisPath` |
| `openIssues` | array | Issues conocidos no ocultos |
| `approval` | object | `approved`, `authority`, `date`, `recordPath` |

Todas las rutas son relativas a la raíz del repositorio y no pueden escapar de ella.

## Interpretación de compuertas

| Compuerta | Condición técnica mínima |
|---|---|
| G0 | ID/versión válidos; componentes identificados, versionados, existentes e inscritos en el registro maestro |
| G1 | toda decisión figura como `approved`, su registro existe y su ID consta en el registro oficial |
| G2 | existen artefactos de trazabilidad y cada componente posee referencia trazable |
| G3 | validación declarada satisfactoria, evidencia existente y manifiesto válido |
| G4 | comparación e informe de impacto existentes |
| G5 | aprobación explícita verdadera, autoridad/fecha presentes y acto documental existente |

`approved: true` sin un `recordPath` existente nunca es suficiente. Del mismo modo, la existencia del archivo no permite al evaluador interpretar si la decisión es científicamente correcta: esa responsabilidad permanece en la autoridad declarada.

## Resultado

El evaluador produce JSON con el resultado de cada compuerta, errores y estado general. `eligibleForPromotion` solo es verdadero cuando G0–G5 pasan; significa “expediente técnicamente elegible”, no una aprobación nueva.
