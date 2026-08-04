# Auditoría técnica GOEI-AUDIT-0005 — D-017 / cierre B2

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0005` |
| Fecha | 2026-08-04 |
| Resultado | **ACEPTABLE PARA DECISIÓN, CON PROMOCIÓN LIMITADA** |
| Alcance | Suficiencia formal, consistencia arquitectónica y trazabilidad |
| Exclusión | No evalúa literatura, validez científica ni suficiencia empírica |
| Decisión auditada | D-017, aprobada por el Comité Científico |

## 1. Dictamen técnico

Los tres artefactos B2 identifican la pregunta, las alternativas, el método, la evidencia, la propuesta, las limitaciones, los casos límite, las dependencias y la recomendación de cierre. D-017 separa autoridad científica y ratificación directiva y consume correctamente `GOEI-BSL-PROC-0001 v0.1.0`, D-006 y `GOEI-PMM-0001`.

El expediente es **aceptable para decisión**. La carencia de un inventario de checksums dentro del handoff se subsana mediante el manifiesto de baseline; la matriz elemento–evidencia–decisión se reconstruye sin inferencia en §3. No se requieren nuevas decisiones científicas para resolver esos defectos documentales.

## 2. Controles contractuales

| Control | Resultado | Evidencia / reserva |
|---|---|---|
| Identidad, fecha, autoridad y estado | Conforme | D-017 §§1–2 |
| Pregunta, alcance y alternativas | Conforme | D-017 §§3–4 |
| Método y evidencia identificable | Conforme | revisión B2 §§1–5; D-017 §5 |
| Resultados separados de propuestas | Conforme con reserva | etiquetas explícitas; los valores permanecen candidatos |
| Type/token | Conforme | Establecimiento = token; Categoría = tipo compuesto |
| Relación con P1–P9 | Conforme | no modifica la baseline; mapea realizaciones P4–P6 |
| Casos límite | Conforme como registro | no se promueven sus reglas candidatas |
| Impacto y dependencias | Conforme | D-017 §§12–13 |
| Identificadores | Conforme para estructura | FX-1…FX-3 estables; valores sin ID quedan excluidos |
| Cardinalidades | Parcial | 1 valor por faceta e híbridos son candidatos; no se promueven |
| Grafo y jerarquías | Conforme para alcance promovido | estructura facetada sin ciclos; D-006 no se modifica |
| Papel/software | Representable | selección por IDs versionados; implementación diferida |
| Checksums | Conforme por control compensatorio | manifiesto `GOEI-BSL-TAX-0001 v0.1.0` |

## 3. Matriz elemento–evidencia–decisión–promoción

| Elemento | Evidencia declarada | D-017 | Resultado técnico |
|---|---|---|---|
| Taxonomía operacional-analítica facetada | Broughton; Bailey; clasificaciones oficiales contrastadas | Adoptada | Promovible |
| Unidad de clasificación Establecimiento | D-006; D-008 | Adoptada | Promovible; multiunidad excluida |
| Categoría como combinación de facetas | metamodelo type/token | Adoptada | Promovible como regla estructural |
| FX-1 Modalidad de servicio/entrega | revisión B2 | Eje indispensable | Promovible sin catálogo de valores |
| FX-2 Sistema de producción | Spears & Gregoire; ISS-014 | Eje indispensable | Promovible al ratificarse D-017 |
| FX-3 Naturaleza económica | D-008 y revisión B2 | Eje indispensable | Promovible sin valores concretos |
| Facetas opcionales FO-1…FO-4 | propuesta del Comité | Opcionales/modulares | No promovidas en v0.1.0 |
| Valores enumerados | candidatos | No validados | Excluidos; Issue específico |
| Casos híbridos y multi-marca | análisis/candidatos | No resueltos | Excluidos; `GOEI-ISS-008` |
| Crosswalk ISIC/NACE/NAICS | propuesta de interoperabilidad | Candidato | Excluido de baseline |

## 4. Compatibilidad arquitectónica

- **D-006:** intacta. La baseline usa `Establecimiento` y `Categoría` ya referidos por el expediente; no incorpora entidades ontológicas nuevas.
- **Process Baseline:** intacta. FX-1, FX-2 y FX-3 seleccionan o condicionan realizaciones; no redefinen P1–P9.
- **EPIC-002:** compatible con la separación Proceso tipo / realización. No se añaden procesos gastronómicos al metamodelo.
- **Knowledge Graph:** facetas y baseline se registran como componentes/artefactos normativos; valores y clasificaciones de establecimientos no se materializan.
- **Formularios y software:** la estructura puede representarse por IDs de faceta y versiones, pero ningún selector de valores es normativo todavía.

## 5. Bloqueos selectivos

1. `GOEI-ISS-008`: unidad en configuraciones multiunidad, multi-marca y flujos híbridos.
2. `GOEI-ISS-054`: catálogo controlado de valores, definiciones, cardinalidad multivaluada, casos canónicos y validación.
3. Facetas opcionales, crosswalks y ejemplos: material candidato fuera de baseline.
4. `GOEI-ISS-015` y `GOEI-ISS-043`: conservan sus ramas y no bloquean el cierre nuclear B2.

## 6. Conclusión

La Oficina Técnica recomienda ratificar D-017 **solo en su núcleo estructural**, congelar `GOEI-BSL-TAX-0001 v0.1.0`, cerrar `GOEI-ISS-014` por adopción de FX-2 y declarar B2 cerrada en su pregunta nuclear. B3 puede habilitarse sin utilizar valores taxonómicos concretos; toda rama que los requiera permanecerá no calculable/bloqueada hasta `GOEI-ISS-054`.

