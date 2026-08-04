# GOEI Ontology Baseline v0.1

| Campo | Valor |
|---|---|
| Identificador | GOEI-BSL-ONT-0001 |
| Estado | Congelada provisionalmente |
| Versión | 0.1 |
| Fecha de congelamiento | 2026-08-04 |
| Autoridad | Instrucción expresa del proyecto |
| Política de modificación | Issue formal obligatorio |
| Alcance | Ontología conceptual D-006 con su revisión y cierre D-006-REV |

## Componentes congelados

| Documento | Rol en baseline | Bytes | SHA-256 |
|---|---|---:|---|
| `09_Manual_tecnico_general/Fase4_D006_Ontologia_del_GOEI.md` | Especificación base | 18798 | `4ed8fdb6295cb5a857909a678c7e8b39146289ea5d0c92018369a284cec7f163` |
| `09_Manual_tecnico_general/Fase4_D006_REV_Ontologia_revision_y_cierre.md` | Revisiones aprobadas y cierre | 15024 | `6ea6988191ec532ca96946d6ad0735573c2949f2ea8aea426ff14a2e4b9b7e3f` |

## Regla de interpretación

D-006-REV complementa y, cuando exista una corrección explícita, prevalece sobre D-006. El baseline no consolida ambos textos en un tercero porque eso alteraría los artefactos científicos congelados.

## Regla de inmutabilidad

Los documentos listados no se editan, renombran, sustituyen ni eliminan directamente. Toda modificación futura requiere:

1. Issue `GOEI-ISS-NNNN` con problema, alcance y motivo;
2. análisis de impacto y compatibilidad;
3. autoridad requerida identificada;
4. decisión formal cuando el cambio afecte contenido científico;
5. registro de cambio;
6. nueva versión de ontología y nueva línea base;
7. conservación permanente de v0.1.

Un Issue por sí solo autoriza análisis, no modificación científica.

## Verificación

La integridad se comprueba recalculando SHA-256 y comparando exactamente con este manifiesto. Cualquier diferencia abre un incidente de integridad y bloquea el uso del artefacto alterado hasta resolverlo.
