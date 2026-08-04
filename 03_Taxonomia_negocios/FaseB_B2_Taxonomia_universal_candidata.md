# FASE B — B2 · Taxonomía universal candidata (multieje / facetada)
## Elementos candidatos NO normativos — sujetos a decisión D-017 y ratificación directiva

**Naturaleza:** propuesta científica candidata. **Ningún** valor aquí es normativo hasta aprobación e integración. No contiene KPI, fórmulas, ponderaciones, umbrales ni referencias GTRM.
**Vínculo:** consume `GOEI-BSL-PROC-0001 v0.1.0`, `GOEI-PMM-0001` (type/token) y D-006 v0.1 (sin modificar).
**Fecha:** 2026-08-04.

---

## 1. Unidad de clasificación y reglas type/token
- **Unidad de clasificación:** el **Establecimiento** (token del estrato Realidad, ancla D-006). Configuraciones multiunidad (cadenas, franquicias, multi-marca) permanecen bajo **GOEI-ISS-008**; una cadena es un **agregado** de tokens, no la unidad.
- **Categoría = tipo** (type-level, estrato Norma): una *categoría GOEI* es una **combinación de valores de facetas**. Un Establecimiento (token) `es_clasificado_como` exactamente una combinación por evaluación.
- **Regla de identidad:** la clasificación de un token se versiona; un cambio de modelo operativo genera una nueva clasificación con historial, no una sobrescritura.

## 2. Estructura facetada candidata
Cada faceta es un eje ortogonal con valores enumerados y **abiertos** (extensibles bajo gobernanza). Cardinalidad por defecto: **un valor por faceta indispensable** por evaluación (con manejo declarado de híbridos, §4).

### Facetas indispensables (candidatas)
| ID faceta | Faceta | Realiza / afecta | Valores candidatos (no normativos) | Fuente |
|---|---|---|---|---|
| FX-1 | **Modalidad de servicio/entrega** | P5 | mesa; mostrador; autoservicio/línea; delivery/cumplimiento; banquete/transporte; bandeja/distribución institucional | ISIC/NACE; Spears |
| FX-2 | **Sistema de producción** | P4–P5 | convencional; ready-prepared/cook-chill; commissary/centralizado; assembly-serve | Spears & Gregoire (GOEI-ISS-014) |
| FX-3 | **Naturaleza económica** | P6; alcance | comercial; no comercial/institucional | NAICS/ISIC; D-008 |

### Facetas opcionales/modulares (candidatas, para submuestras analíticas)
| ID faceta | Faceta | Uso | Valores candidatos |
|---|---|---|---|
| FO-1 | Complejidad de oferta | escala de carga de procesos | menú fijo; limitado; amplio; a la carta compleja |
| FO-2 | Segmento de servicio/precio | comparabilidad comercial | QSR; fast casual; casual; fine dining (consenso industrial) |
| FO-3 | Tamaño | estratificación | micro; pequeño; mediano; grande (según definición jurisdiccional) |
| FO-4 | Jurisdicción | compatibilidad regulatoria | código país/región (para crosswalk y GTRM regulatorias) |

## 3. Combinaciones y cardinalidades
- La taxonomía **admite cualquier combinación** de valores de facetas; la **población empírica** de combinaciones (cuáles existen y con qué frecuencia) es materia de datos, no de la estructura.
- Cardinalidad: Establecimiento → 1 valor por faceta indispensable (o "híbrido declarado", §4); 0..1 por faceta opcional.
- **Ejemplos ilustrativos de categorías como combinaciones** (candidatos, no normativos): *restaurante full-service* = {mesa, convencional, comercial}; *dark kitchen* = {delivery, convencional/assembly, comercial}; *casino/comedor institucional* = {bandeja, cook-chill/commissary, no comercial}; *catering de eventos* = {banquete-transporte, commissary/convencional, comercial}; *panadería con consumo* = {mostrador, convencional, comercial}.

## 4. Tratamiento de casos límite (candidato)
| Caso | Regla candidata |
|---|---|
| **Híbrido** (varias modalidades) | Declarar **modalidad primaria** + secundarias marcadas; o evaluar por **flujo operativo** (enlaza GOEI-ISS-008) |
| **Cadena/franquicia** | Cada local = token clasificado; la cadena no es unidad (GOEI-ISS-008) |
| **Dark kitchen multi-marca** | Un local físico con varios flujos de marca → unidad de evaluación pendiente (GOEI-ISS-008) |
| **Catering** | Faceta modalidad = banquete/transporte (ISIC 562 / NACE 56.2) |
| **Institucional** | Naturaleza = no comercial; modalidad = bandeja; P6 = requisición |

## 5. Mapa candidato hacia la ontología D-006 (sin modificarla)
- `Categoría` (type, Norma) ← combinación de valores de facetas.
- `Establecimiento` (token, Realidad) `es_clasificado_como` `Categoría`.
- Facetas y valores = **tipos** del estrato Norma; su emisión sigue el ciclo de vida de GOEI-PMM-0001 (propuesto→…→vigente). **No** se edita D-006; una eventual entidad "Faceta/Categoría" se añadiría solo por Issue formal.

## 6. Mapa candidato hacia los procesos B1 (baseline)
| Faceta | Procesos cuya realización condiciona |
|---|---|
| FX-1 Modalidad | P5 (distribución/servicio/cumplimiento) |
| FX-2 Sistema de producción | P4 (producción), P5 |
| FX-3 Naturaleza económica | P6 (transacción/cierre) |
| — | P1–P4, P7–P9 estables entre categorías |

## 7. Crosswalk candidato hacia clasificaciones estadísticas
| Categoría candidata GOEI | ISIC Rev.4 | NAICS |
|---|---|---|
| Restaurante mesa (comercial) | 5610 | 7221 |
| Limited-service / mostrador | 5610 | 7222 |
| Dark kitchen (delivery) | 5610 | 7222/7223 |
| Catering de eventos/contrato | 562 | 7223 |
| Institucional (contrato) | 562 | 7223 |
| Bar / bebidas | 563 (NACE) | 7224 |

*El crosswalk es para interoperabilidad estadística; no subordina la taxonomía operacional a la estadística.*

## 8. Estados no resueltos (bloqueo selectivo)
- **Unidad multiunidad/marca** (GOEI-ISS-008): bloquea solo la rama de cadenas/dark-kitchen multi-marca.
- **Catálogo concreto de valores** por faceta: candidato; requiere validación (Delphi/empírica).
- **Sistema de producción como eje** (GOEI-ISS-014): recomendado, pendiente de ratificación directiva.
- **Residuos/merma** (GOEI-ISS-043): no afecta la taxonomía; permanece en procesos.

## 9. Historial de revisiones
| Versión | Fecha | Cambio |
|---|---|---|
| 0.1.0 | 2026-08-04 | Emisión inicial de candidatos B2 (no normativos) |

*Todos los elementos son candidatos no normativos hasta decisión D-017 aprobada e integración técnica.*
