# Política de releases y líneas base GOEI

**ID:** GOEI-REL-POL-0001  
**Versión documental:** 0.1.0  
**Estado:** control técnico activo; no constituye aprobación científica  
**Responsable:** Oficina Técnica GOEI

## 1. Propósito

Establecer el mecanismo reproducible para identificar, verificar, comparar y publicar configuraciones controladas del GOEI. Esta política administra estados documentales; no crea ni aprueba conocimiento científico.

## 2. Objetos de configuración

- **Snapshot técnico:** inventario reproducible de archivos y hashes. No expresa aprobación.
- **Release candidate (RC):** configuración técnicamente cerrada, todavía sujeta a todas las aprobaciones declaradas en su expediente.
- **Línea base:** conjunto identificado y congelado por autoridad competente para un alcance explícito.
- **Release GOEI:** línea base publicada con versión, manifiesto, registro de cambios, trazabilidad y aprobación documentada.

Los términos no son intercambiables. Un snapshot o una RC nunca se convierte automáticamente en línea base o release.

## 3. Identificación

| Objeto | Patrón | Ejemplo |
|---|---|---|
| Snapshot | `GOEI-SNP-YYYYMMDD-NNN` | `GOEI-SNP-20260804-001` |
| Release candidate | `GOEI-RC-vMAJOR.MINOR.PATCH-rc.N` | `GOEI-RC-v0.2.0-rc.1` |
| Línea base temática | `GOEI-BSL-{DOMINIO}-vMAJOR.MINOR` | `GOEI-BSL-ONT-v0.1` |
| Release | `GOEI-vMAJOR.MINOR.PATCH` | `GOEI-v1.0.0` |

La asignación de una versión no resuelve pendientes ni confiere vigencia científica.

## 4. Contenido obligatorio del expediente de release

Toda RC y release deberá contener:

1. `MANIFEST.json`, generado de forma determinista;
2. `RELEASE.md`, con alcance, autoridad, estado y exclusiones;
3. referencia al registro de cambios;
4. decisiones incluidas y estado verificable de cada una;
5. matriz de trazabilidad aplicable;
6. resultado del validador técnico;
7. resultado de las compuertas de preparación;
8. lista explícita de Issues abiertos y bloqueos;
9. hashes criptográficos de los artefactos incluidos.

## 5. Compuertas

### G0 — Identidad

Todos los componentes incluidos poseen ID único, ruta canónica y versión documental.

### G1 — Autoridad científica

Cada afirmación normativa o componente científico está originado en una decisión aprobada y registrada. Una propuesta, hipótesis o decisión pendiente bloquea solo el alcance que dependa de ella.

### G2 — Trazabilidad

Cada componente declara origen, evidencia, versión de incorporación y dependientes conocidos.

### G3 — Integridad técnica

El validador del repositorio finaliza satisfactoriamente; los artefactos congelados conservan sus hashes y no existen identificadores duplicados.

### G4 — Compatibilidad e impacto

Existe análisis de diferencias respecto de la línea base anterior y se documentan migraciones, rupturas o compatibilidad preservada.

### G5 — Aprobación y publicación

La autoridad correspondiente deja constancia expresa de aprobación. Solo entonces la Oficina Técnica puede etiquetar y publicar la release.

## 6. Reglas de promoción

- Snapshot a RC: requiere G0, G2 y G3; puede conservar bloqueos explícitos.
- RC a línea base: requiere G0–G4 y aprobación correspondiente al alcance.
- Línea base a release: requiere G0–G5 y expediente completo.
- Ninguna promoción ocurre por antigüedad, silencio, inferencia o resultado automático.
- Una compuerta fallida genera o referencia un Issue y detiene únicamente el alcance afectado.

## 7. Versionado

Se usa SemVer para releases técnicas:

- `MAJOR`: incompatibilidad normativa o estructural aprobada;
- `MINOR`: incorporación compatible de componentes aprobados;
- `PATCH`: corrección no semántica o técnica que no altera contenido científico.

La clasificación de un cambio con efecto científico debe constar en una decisión aprobada. La Oficina Técnica puede clasificar únicamente cambios documentales o de infraestructura inequívocamente no científicos.

## 8. Inmutabilidad y correcciones

Una línea base publicada no se reescribe. Toda corrección genera una nueva versión o, cuando proceda, un registro de errata enlazado. Los artefactos congelados solo cambian mediante el proceso formal aplicable; D-006 Baseline v0.1 conserva además su política Issue-only.

## 9. Reproducibilidad

El manifiesto ordena rutas lexicográficamente, registra tamaño y SHA-256, y excluye metadatos del sistema de control de versiones y artefactos transitorios. Dos ejecuciones sobre el mismo contenido deben producir el mismo inventario de archivos.

## 10. Estado actual

Esta política habilita la infraestructura de configuración, pero no declara una release integral del GOEI. La única línea base temática congelada registrada es la Ontology Baseline v0.1, dentro de su alcance explícito.
