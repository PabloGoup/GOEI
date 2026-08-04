# Política provisional de versionado GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-CMP-004 |
| Estado | Borrador |
| Naturaleza | Técnica, no normativa |
| Decisión de origen | D-005/T4, pendiente de ratificación |
| Versión GOEI | No asignada |

## Principios

1. La historia se conserva: un artefacto sustituido no se borra ni reutiliza su identificador.
2. La versión de un documento no equivale a la versión integrada del estándar.
3. Ninguna versión GOEI se declara oficial sin autoridad de publicación y compuertas aprobadas.
4. Todo cambio semántico registra impacto sobre dependientes y comparabilidad.

## Convención provisional

Para documentos se usa `MAYOR.MENOR.PARCHE` con sufijo de estado cuando corresponda, por ejemplo `0.2.0-draft`.

- `MAYOR`: cambio incompatible de significado, alcance o estructura.
- `MENOR`: ampliación compatible aprobada.
- `PARCHE`: corrección editorial o técnica sin cambio de significado.
- `draft`, `review` o `candidate`: documento no vigente.

Antes de la primera línea base aprobada, todos los componentes permanecen en serie `0.x`. Esta convención es reversible y deberá ser ratificada por la futura gobernanza.

## Registro mínimo de cambio

Cada cambio debe indicar identificador, fecha, autor, motivo, decisión habilitante, descripción, impacto, dependientes revisados, compatibilidad y aprobaciones.
