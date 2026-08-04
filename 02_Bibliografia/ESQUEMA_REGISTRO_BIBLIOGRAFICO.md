# Esquema del registro bibliográfico GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-BIB-SCHEMA-0001 |
| Versión | 1.0.0 |
| Estado | Activo para control técnico |
| Responsable | Oficina Técnica GOEI |
| Naturaleza | Metadatos y trazabilidad; no evaluación científica |

## 1. Principio

Una fuente puede estar disponible sin estar verificada, verificada sin haber sido revisada científicamente y revisada sin ser admitida como evidencia. Estos estados nunca se deducen entre sí.

## 2. Identidad

Cada registro usa `GOEI-SRC-NNNN`. El ID es permanente y no se reutiliza. DOI, ISBN, URL, código normativo y otros identificadores se conservan como claves externas, no sustituyen el ID GOEI.

## 3. Campos por fuente

| Campo | Obligatorio | Función |
|---|---|---|
| `id` | sí | identidad GOEI |
| `sourceType` | sí | artículo, libro, norma, regulación, dataset, informe u otro |
| `title` | sí al verificar | título transcrito |
| `creators` | sí al verificar | autores personales o institucionales |
| `year` | cuando conste | año sin inferencia |
| `identifiers` | sí al verificar | DOI, ISBN, URL persistente o código |
| `language` | sí al verificar | código de idioma |
| `editionOrVersion` | cuando conste | edición o versión fuente |
| `verificationStatus` | sí | estado técnico de metadatos |
| `scientificReviewStatus` | sí | estado asignado por Comité Científico |
| `custody` | sí | acceso, licencia, ruta local y checksum aplicables |
| `citedByDecisions` | sí | IDs de decisiones que citan la fuente |
| `claims` | sí | enlaces a afirmaciones, localización y tipo de respaldo |
| `annotations` | sí | anotaciones controladas y autoría |

## 4. Vocabularios de estado

### Verificación técnica

`unverified` → `metadata_verified` → `superseded`.

### Revisión científica

`not_reviewed`, `under_review`, `admitted`, `rejected`, `limited`, `superseded`.

La Oficina Técnica puede asignar `metadata_verified` tras cotejar los metadatos con una fuente identificable. Solo el Comité puede cambiar `scientificReviewStatus` fuera de `not_reviewed` cuando ello implique juicio científico.

### Acceso y custodia

`external_only`, `open_copy`, `licensed_copy`, `restricted_copy`, `metadata_only`.

Una copia restringida no se publica. El registro conserva custodia, licencia y checksum sin revelar material protegido.

## 5. Claims

Cada claim usa un ID local, una referencia a la afirmación GOEI, localización exacta dentro de la fuente, clase de respaldo y estado. El registro enlaza afirmaciones ya formuladas por la investigación; la Oficina Técnica no redacta ni interpreta esas afirmaciones.

## 6. Reglas de integridad

1. IDs de fuente únicos e inmutables.
2. Identificadores externos no duplicados salvo alias documentado.
3. Una fuente verificada no admite placeholders.
4. Toda decisión citada debe existir en el registro oficial.
5. Toda ruta local debe permanecer dentro del repositorio y existir.
6. Todo checksum SHA-256 debe contener 64 caracteres hexadecimales.
7. `admitted`, `rejected` o `limited` exige acto o expediente científico enlazado.
8. El catálogo no almacena credenciales ni datos personales innecesarios.
9. La ausencia de copia local no invalida metadatos; debe declararse el estado de acceso.
10. Eliminar una fuente es lógico: se usa `superseded`, no se reutiliza su ID.
