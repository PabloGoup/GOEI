# Recomendaciones para futura implementación en software

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-SW-0001 |
| Versión | 0.1.0-draft |
| Estado | Recomendaciones no vinculantes |

## 1. Arquitectura recomendada

Separar cuatro capas:

1. **registro canónico de artefactos** — archivos versionados y manifiestos;
2. **modelo lógico del grafo** — nodos, aserciones, versiones y procedencia;
3. **validación** — esquemas, cardinalidades, reglas y pruebas;
4. **proyecciones** — buscador, BOK, matriz de impacto, documentos y APIs.

El grafo no debe ser la única copia de documentos ni el repositorio Git la única base consultable. Ambos se enlazan mediante IDs y checksums.

## 2. Modelo de datos

- Nodo conceptual separado de `ArtifactVersion`.
- Aserción como entidad de primera clase con sujeto, predicado, objeto, procedencia, estado y vigencia.
- IDs estables en namespace controlado, por ejemplo futuro `https://goei.org/id/...`.
- Tiempos bitemporales: vigencia y registro; añadir tiempo de hecho cuando corresponda.
- Estados controlados, no strings libres.
- Relaciones inversas calculadas.
- Borrado lógico y auditoría append-only.

## 3. Tecnologías candidatas

La selección queda para decisión técnica posterior. El modelo debe ser portable a:

- RDF/OWL para semántica e interoperabilidad;
- SHACL para restricciones de grafo;
- JSON-LD para intercambio web;
- base de grafos de propiedades para navegación operacional;
- Git para fuentes humanas y líneas base.

No elegir tecnología antes de definir casos de consulta, escala, seguridad y gobernanza.

## 4. Servicios mínimos

- registro/consulta de entidades y aserciones;
- trazabilidad ascendente y descendente;
- comparación de versiones y líneas base;
- análisis de impacto;
- gestión Issue-only para cambios ontológicos;
- validación de integridad;
- exportación de manifiestos y BOK;
- control de acceso y redacción de datos sensibles;
- reconstrucción histórica reproducible.

## 5. API conceptual

```text
GET /entities/{id}
GET /entities/{id}/versions/{version}
GET /trace/origin/{id}
GET /trace/impact/{id}
GET /baselines/{id}
GET /baselines/{a}/compare/{b}
GET /issues?blocks={id}
POST /issues
POST /change-records
POST /validate
```

Las mutaciones de contenido aprobado no deben realizarse directamente por API; deben materializar el workflow Issue → autoridad → cambio → baseline.

## 6. Controles

- autenticación separada de autorización por rol;
- firmas o aprobaciones verificables;
- checksums y manifiestos;
- logs append-only;
- pruebas de cardinalidad, ciclos y autoridad;
- validación de enlaces a decisiones;
- backups, exportación abierta y plan de migración tecnológica;
- IDs e interfaces independientes del proveedor.

## 7. Fases futuras

1. casos de uso y consultas de competencia;
2. perfil lógico mínimo;
3. esquema SHACL/JSON-LD experimental;
4. carga del inventario documental existente;
5. validador y reportes de calidad;
6. piloto de navegación e impacto;
7. revisión antes de declarar implementación oficial.

Ninguna fase debe serializar contenido científico no aprobado.
