# Restricciones de consistencia GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-CON-0001 |
| Versión | 0.1.0-draft |

## 1. Consistencia semántica

- Un término tiene una definición canónica por versión e idioma de autoridad.
- `KPI` sin calificador se interpreta como `KPI-def` solo en el metamodelo; datos operacionales deben usar una clase token distinta definida por D-006.
- `Evidencia`, `Fuente`, `Observación` y `Dato` no son intercambiables.
- `Aprobado`, `validado`, `publicado` y `vigente` son estados independientes.
- El GOEI Knowledge Graph no redefine entidades de realidad R de D-006-REV.

## 2. Consistencia de autoridad

- Ningún agente aprueba su propia propuesta cuando una política de independencia lo prohíba.
- La autoría de un documento no confiere autoridad para aprobarlo.
- Una revisión técnica informa; solo una decisión competente autoriza cambios científicos.
- Si dos decisiones vigentes se contradicen, se crea Issue y se bloquea la rama común; no se elige silenciosamente una.

## 3. Consistencia de versiones

- Todas las dependencias de una Línea base apuntan a versiones exactas.
- Una versión no puede suceder temporalmente a otra publicada después de ella.
- Una versión sustituida puede seguir siendo válida para reconstrucción histórica, pero no para nuevas aplicaciones salvo transición explícita.
- No se mezclan componentes mayores incompatibles sin mapa de compatibilidad.
- Cambiar checksum sin cambiar versión constituye incidente de integridad.

## 4. Consistencia documental

- Un componente tiene una fuente canónica; copias y compilaciones la referencian.
- Un anexo declara documento principal y naturaleza.
- Una traducción no altera IDs ni significado; las divergencias abren Issue.
- Un Manual o Formulario no contiene requisitos sin enlace al Requisito fuente.
- BOK, Publicación y Tesis distinguen material normativo, evidencia y explicación.

## 5. Consistencia del grafo

- Aristas directas y aristas inferidas se distinguen.
- Ninguna inferencia atraviesa una arista rechazada, expirada o bloqueada.
- La transitividad de `depende_de` no transfiere automáticamente autoridad ni validación.
- Una relación eliminada lógicamente conserva vigencia histórica.
- Los nodos fusionados conservan `sameAs` solo si identidad estricta fue demostrada; semejanza usa mapeo no equivalencia.

## 6. Consistencia epistémica

- Una hipótesis no cambia a hecho por repetición de citas.
- Evidencia contradictoria se conserva y se presenta al decisor.
- Una validación inconclusa no se modela como validación negativa.
- La ausencia de evidencia no se modela automáticamente como evidencia de ausencia.
- Los niveles de confianza no se inventan; requieren método aprobado.
