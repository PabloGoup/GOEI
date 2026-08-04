# GOEI — repositorio del estándar

Este repositorio conserva los activos científicos y técnicos del **Gastronomic Operational Efficiency Index (GOEI)** con trazabilidad documental. La tesis y las publicaciones son productos derivados; no gobiernan el contenido del estándar.

## Estado actual

- **Estado del repositorio:** arquitectura técnica en borrador.
- **Autoridad científica:** comité científico independiente.
- **Autoridad técnica:** Arquitectura e Ingeniería de Conocimiento, limitada a implementar decisiones científicas aprobadas.
- **Restricción vigente:** la arquitectura propuesta en D-005 aún figura como provisional. Por ello, la estructura de carpetas es un contenedor reversible y no constituye ratificación científica.
- **Versión del estándar:** no asignada. No existe todavía una versión publicable del GOEI.

## Regla de incorporación

Ningún componente pasa a formar parte del estándar sin:

1. una decisión científica identificada y aprobada;
2. evidencia registrada o enlazada por esa decisión;
3. versión de incorporación definida;
4. dependencias documentales declaradas;
5. estado documental y naturaleza normativa/informativa explícitos.

La ausencia de cualquiera de estos elementos bloquea la promoción del componente, pero no impide preparar una plantilla o un borrador claramente marcado como no normativo.

## Navegación

- [Arquitectura del repositorio oficial](00_Gobernanza/Arquitectura_del_repositorio_oficial_GOEI.md)
- [Constitución GOEI — esqueleto](00_Gobernanza/Constitucion_GOEI.md)
- [Arquitectura documental](00_Gobernanza/Arquitectura_documental_GOEI.md)
- [Revisión técnica de la ontología D-006](09_Manual_tecnico_general/Revision_tecnica_arquitectonica_D006.md)
- [Ontology Baseline v0.1](15_Mantenimiento/lineas_base/GOEI_ONT_v0.1/MANIFEST.md)
- [EPIC-001 — GOEI Knowledge Graph & MetaModel](09_Manual_tecnico_general/EPIC-001_GOEI_Knowledge_Graph/README.md)
- [EPIC-002 — Universal Process MetaModel](04_Procesos_gastronomicos/EPIC-002_MetaModelo_Universal/README.md)
- [GOEI Technical Office](00_Gobernanza/Oficina_Tecnica_GOEI.md)
- [Coordinación automática GOEI](00_Gobernanza/coordinacion/README.md)
- [Estado maestro](00_Gobernanza/coordinacion/ESTADO_MAESTRO.md)
- [Roadmap técnico](00_Gobernanza/Roadmap_tecnico_GOEI.md)
- [Política Git y contribución](00_Gobernanza/Politica_Git_y_contribucion.md)
- [Guía de contribución](CONTRIBUTING.md)
- [CHANGELOG](CHANGELOG.md)
- [Matriz de trazabilidad](00_Gobernanza/Matriz_de_trazabilidad.md)
- [Registro de componentes](00_Gobernanza/Registro_de_componentes.md)
- [Preguntas y bloqueos](00_Gobernanza/Preguntas_abiertas.md)
- [Política de versionado](00_Gobernanza/Politica_de_versionado.md)
- [Convenciones documentales](00_Gobernanza/Convenciones_documentales.md)
- [Plantillas](./_Plantillas/README.md)

## Fuentes de autoridad

El orden de precedencia es:

1. decisión científica aprobada en `00_Gobernanza/Registro_de_decisiones.md`;
2. expediente de la decisión y evidencia que esta cite;
3. especificación técnica derivada;
4. manuales, formularios y otros productos de aplicación;
5. tesis, artículos y materiales de comunicación.

Un documento derivado nunca modifica por sí mismo una decisión científica.

## Controles locales

```bash
python3 16_Herramientas/validadores/validate_repository.py
cd 16_Herramientas/validadores
python3 -m unittest discover -s tests -v
python3 validate_technical_roadmap.py
```

Los evaluadores de preparación devuelven código `2` mientras existan compuertas pendientes; esto no equivale a un fallo técnico.
