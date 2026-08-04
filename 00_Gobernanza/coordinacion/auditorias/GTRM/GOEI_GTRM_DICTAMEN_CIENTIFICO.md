# GOEI · Auditoría metodológica GTRM — Dictamen científico (consultivo)
## Comité Científico → Oficina Técnica

**Naturaleza:** documento **consultivo**, no decisión oficial. La ratificación corresponde a la Dirección; la integración y el versionado, a la Oficina Técnica (Codex).
**Objeto auditado:** propuesta *GOEI Technical Reference Matrix* (GTRM) — fuente no normativa `GTRM_PROPUESTA_FUENTE_NO_NORMATIVA.txt`.
**Contraste:** D-003 (constructo), D-004 (formativo), D-005 (arquitectura), D-006/D-006-REV (ontología), pipeline B2–B10.
**Fecha:** 2026-08-04.

> Etiquetas: **[EVIDENCIA]**, **[ANÁLISIS]**, **[PROPUESTA]**. No se crean matrices, KPI, puntajes, umbrales, fórmulas ni categorías concretas.

---

## 0. Alcance y método
Se audita si la GTRM constituye (a) un **componente científico nuevo**, (b) una **reingeniería de gobernanza** de un paso ya existente, o (c) una simple reetiquetación de la normalización. Se apoya en literatura metodológica primaria: teoría de **funciones de valor** en análisis multicriterio (Keeney & Raiffa, 1976; von Winterfeldt & Edwards, 1986), metodología de **índices compuestos** (OECD/JRC — Nardo et al., 2008), **incertidumbre de medición** (JCGM 100:2008; JCGM 106:2012) y **condición de referencia** (Karr, 1981).

## 1. Separación conceptual obligatoria (las diez capas)
El principal servicio de esta auditoría es descomponer lo que la propuesta fusiona (**[ANÁLISIS]**):

1. **Observación** — acto ocurrente de captar un fenómeno (D-006: *Observación*, anclada a entidad-proceso-evento-periodo, AX-11).
2. **Medición registrada** — el dato crudo con su unidad (p. ej., minutos), resultado de la observación.
3. **Valor de KPI (crudo)** — instancia (token) de una *definición de KPI* para un establecimiento y periodo, aún en unidad original.
4. **Condición de referencia** — estado normativo de "operación sana" (ancla): qué cuenta como inaceptable y qué como referencia. Es **prescriptiva**.
5. **Benchmark** — comparación **empírica** con una distribución de pares (percentiles, medias sectoriales). Es **descriptiva**.
6. **Función de puntuación (value function)** — regla que mapea el valor crudo a un puntaje, dada una referencia/benchmark. Puede ser lineal, por tramos o no lineal (Keeney & Raiffa, 1976).
7. **Normalización** — transformación a la escala común del índice (0–100) respetando la dirección de bondad.
8. **Puntuación normalizada** — el valor de KPI ya en escala común.
9. **Tabla manual** — *artefacto* de consulta: discretización de la función de puntuación para cálculo con lápiz y papel.
10. **Interpretación** — traducción del resultado agregado a bandas.

**Hallazgo central (**[ANÁLISIS]**):** la GTRM no introduce una capa nueva entre (1) y (10); introduce **la trazabilidad, la evidencia y la gobernanza** de las capas 4–6 (referencia + función de puntuación), que hoy existen conceptualmente en la ontología (*condición de referencia*, *regla de normalización*, D-006) pero **sin procedencia auditable**. La GTRM es, en esencia, la **materialización versionada y evidenciada de la función de valor para un KPI y un dominio de aplicación explícito**; dicho dominio puede ser universal, regulatorio, jurisdiccional, sectorial o específico por categoría, según futura decisión.

## 2. ¿Dónde y cómo actúa la GTRM?
- **¿Sobre observaciones o sobre valores de KPI?** — **Sobre el valor de KPI derivado de mediciones registradas, no sobre la observación cruda ni sobre el registro aislado.** La propuesta dice "transformar una observación objetiva en un puntaje", pero ontológicamente la observación debe producir mediciones registradas y estas alimentar la derivación de un *valor de KPI* (capas 1→3) antes de puntuar. La GTRM opera en 3→8. **[ANÁLISIS]**
- **¿Produce la puntuación final o parámetros?** — **No produce el GOEI final** (la ponderación y agregación permanecen en el modelo matemático). Debe producir la **puntuación normalizada por KPI**, y —para ser científica y no arbitraria— debe hacerlo **exponiendo sus parámetros** (referencia, forma de la función, dominio de validez). Recomendación: la GTRM es primariamente **portadora de parámetros justificados**; la puntuación es su salida derivada. **[PROPUESTA]**
- **¿Hay doble normalización?** — **Sí, riesgo real en la propuesta tal como está escrita.** El diagrama de la fuente encadena "GTRM → puntaje normalizado → Sistema de Normalización", lo que normaliza dos veces. **Debe resolverse:** la GTRM y el Sistema de Normalización son **el mismo paso**, no dos. La GTRM *parametriza y justifica* la normalización; el Sistema de Normalización es el *motor* que aplica esos parámetros **una sola vez**. **[ANÁLISIS — defecto a corregir]**
- **¿Es función, parametrización o tabla?** — Conceptualmente es una **función de valor parametrizada**; la **tabla manual es un derivado discretizado**. Presentarla primariamente como "tabla" reintroduce la arbitrariedad que la propuesta quiere evitar (una tabla sin la función generadora y su evidencia sigue siendo "números con portada"). Recomendación: GTRM = *condición de referencia + función + parámetros + evidencia + incertidumbre + dominio de validez*; la tabla es una **renderización versionada** de esa función. **[PROPUESTA]**

## 3. Condición de referencia vs. benchmark; tipos y precedencia
- **Distinción obligatoria:** la *condición de referencia* (capa 4) es **normativa** ("qué es sano"); el *benchmark* (capa 5) es **empírico** ("qué hacen los pares"). La propuesta los confunde. Un benchmark puede *informar* una referencia, pero no *es* la referencia. **[ANÁLISIS]**
- **Tipología de referencias por origen y precedencia propuesta (**[PROPUESTA]**):**
  1. **Regulatoria/jurisdiccional** (ley sanitaria del país; p. ej., límites de inocuidad) — **precedencia máxima**; opera como **regla crítica no compensable** (AX-4), fuera del tramo puntuable.
  2. **Universal/normativa internacional** (Codex, ISO) — precedencia alta cuando no hay regulación local más estricta.
  3. **Sectorial** (asociaciones profesionales) — precedencia media.
  4. **Por categoría / empírica** (benchmark de pares de la misma clase taxonómica) — precedencia baja; solo cuando no existe referencia normativa.
  Regla: **la referencia más estricta y de mayor autoridad legal prevalece**; el benchmark empírico es subsidiario. Esto conecta la GTRM con la taxonomía (B2) y con las reglas críticas.

## 4. Autoridad científica vs. autoridad normativa
Toda GTRM requiere **doble autoría**: (i) **autoridad científica** — la evidencia y el método que fundan la referencia y la función (revisión, Delphi, dato empírico); (ii) **autoridad normativa** — el órgano de gobernanza del estándar (D-005, T1) que la **ratifica, publica, versiona y retira**. Sin (i) la GTRM es arbitraria; sin (ii) no es normativa. La GTRM hereda el ciclo de vida y el esquema de conformidad ya definidos (D-005: T1 gobernanza, T3 validación-compuerta, T4 versionado, K auditoría). **[ANÁLISIS]**

## 5. Ausencia y conflicto de referencia
- **Ausencia:** si para un KPI×categoría no existe referencia defendible, **no puede emitirse GTRM** y el KPI queda **inadmisible** para esa categoría (enlaza con B4/admisibilidad). No se fabrica una tabla para "rellenar". **[PROPUESTA]**
- **Conflicto:** si dos referencias chocan (p. ej., regulatoria vs. empírica), se aplica la **precedencia del §3**; si el conflicto es entre fuentes de igual rango y no resoluble, se **marca como issue abierto** y no se emite la GTRM hasta resolverlo. Nunca se promedia silenciosamente. **[PROPUESTA]**

## 6. Incertidumbre y reproducibilidad histórica
- **Fuentes de incertidumbre a documentar (**[EVIDENCIA]**, JCGM 100:2008):** (a) **medición** (instrumento/observador); (b) **muestreo** (número y representatividad de observaciones); (c) **benchmark** (tamaño/representatividad de la muestra de pares); (d) **parámetros** (incertidumbre de la función ajustada); (e) **puntuación** (propagación de a–d al puntaje). Sin este tratamiento, la GTRM otorga **falsa precisión** y "lava" arbitrariedad con apariencia de rigor — el principal riesgo de la propuesta. JCGM 106:2012 es directamente pertinente al uso de la incertidumbre en **evaluación de conformidad**.
- **Reproducibilidad histórica:** cada evaluación debe **congelar la versión de GTRM** empleada; resultados bajo GTRM v1 no son comparables con v2 salvo **mapa de compatibilidad** (coherente con AX-9). El versionado de GTRM es condición de la comparabilidad temporal. **[ANÁLISIS]**

## 7. Equivalencia papel–software
La **tabla manual** es una **discretización** de una función; el **software** puede aplicar la función continua. Deben someterse a **prueba de equivalencia con error acotado**. Riesgo: la discretización introduce **saltos (cliffs)** en los bordes de tramo (por qué 8 min = 90 y 8,1 min = 80) que reintroducen arbitrariedad si no se documentan la función generadora y la regla de binning. La equivalencia papel–software exige publicar **la función y su discretización**, no solo la tabla. **[ANÁLISIS]**

## 8. Riesgos
- **Conceptuales:** confundir referencia (normativa) con benchmark (empírica); tratar la GTRM como capa nueva cuando es gobernanza de una existente; "tabla" que oculta la función.
- **Estadísticos:** falsa precisión por incertidumbre no propagada; benchmarks con muestras no representativas; sobreajuste de funciones a datos escasos por categoría.
- **Matemáticos:** **doble normalización** (§2); discontinuidades por discretización; funciones no monótonas mal justificadas; interacción con la agregación no compensatoria (una GTRM mal calibrada puede activar/omitir compuertas críticas indebidamente).
- **Prácticos:** proliferación combinatoria (KPI × categoría × jurisdicción) → **explosión de GTRM** difícil de mantener; carga de evidencia por cada matriz; riesgo de que el evaluador use tablas sin entender su dominio de validez.
- **Normativos:** GTRM regulatorias dependientes de jurisdicción → fragmentan la comparabilidad internacional; gobernanza y autoría de cada GTRM; *gaming* si las tablas son públicas y estáticas (Ley de Goodhart).

## 9. Comparación de las tres ubicaciones en el pipeline
| Ubicación candidata | Qué implica | Veredicto |
|---|---|---|
| **(i) En la observación/medición** (GTRM antes del valor de KPI) | La GTRM capturaría y puntuaría a la vez | **Rechazada:** viola la separación observación→valor→puntaje (D-006); impide auditar el dato crudo |
| **(ii) Sustituyendo a la normalización** | GTRM = normalización renombrada | **Insuficiente:** subestima su aporte de gobernanza/evidencia; y deja sin resolver la procedencia si se trata como mera etiqueta |
| **(iii) Como sustrato normativo del paso de normalización** (parametriza y justifica la función; el motor normaliza una vez) | GTRM = artefacto tipo-nivel (estrato Norma) que porta condición de referencia + función + evidencia + incertidumbre + dominio, seleccionado por la taxonomía | **Recomendada:** resuelve la doble normalización, preserva la separación conceptual y operacionaliza el principio "ningún puntaje sin justificación" |

## 10. Respuesta a las diez solicitudes originales
1. **¿Componente científico nuevo o parte de la normalización?** — **Ni una cosa ni la otra en estado puro:** no es una transformación científica nueva (la función de valor ya existe en MCDA y la referencia ya está en la ontología), pero **sí es un artefacto arquitectónico y de gobernanza nuevo** que dota de procedencia auditable a la normalización. Es **gobernanza científica de un paso existente**. **[ANÁLISIS]**
2. **¿Nueva fase oficial y posición?** — **No una fase nueva del pipeline**, sino un **sustrato normativo** del paso de normalización (posición (iii), §9), alimentado por taxonomía y especificaciones de medición.
3. **Impacto por componente:** *Sin cambio:* constructo (D-003/D-004), procesos (B1), ponderación/agregación/interpretación, type/token y tres estratos. *Se amplía:* ontología (nueva entidad tipo-nivel "GTRM" que empaqueta condición de referencia + regla de normalización + admisibilidad + procedencia); taxonomía (pasa a ser operacionalmente determinante); admisibilidad (nuevo criterio: "existe referencia defendible ⇒ GTRM-izable"); validación (cada GTRM añade carga de validación); manual técnico y formularios (se vuelven GTRM-driven); Knowledge Graph/MetaModel/Constitución/BOK (nuevo nodo/gobernanza); tesis/publicaciones (aporte metodológico publicable: procedencia de subpuntajes de índices compuestos). *A reescribir:* la **sección de normalización** (para integrar GTRM y **eliminar la doble normalización**).
4. **¿Clasificación de GTRM?** — Sí, pero **por origen de la referencia**, no por capricho: regulatoria/jurisdiccional, universal-normativa, sectorial, estadística/benchmark, Delphi/consenso, empírica, e híbrida. Esta tipología coincide con las **fuentes de la condición de referencia** (§3) y con la precedencia.
5. **¿Identidad propia / documento normativo independiente?** — **Sí.** Cada GTRM debe tener código, versión, autoridad (científica y normativa), procedencia, dominio de validez, categoría, proceso, KPI, unidad, método, bibliografía, restricciones, estado, baseline y compatibilidad. Es un **tipo del estrato Norma** con ciclo de vida propio (coherente con D-006 y D-005/T4).
6. **¿Modifica el pipeline?** — No lo reordena; **lo fundamenta**. El pipeline conceptual permanece; la normalización deja de ser una tabla arbitraria y pasa a ejecutarse **vía GTRM** (parámetros justificados) seleccionada por taxonomía.
7. **¿Fortalece o debilita?** — **Fortalece** trazabilidad, auditabilidad, reproducibilidad (si se versiona), independencia tecnológica, aplicación manual, robustez y gobernanza. **Debilita** (riesgos §8): mantenibilidad (explosión combinatoria) y comparabilidad internacional (GTRM jurisdiccionales), que deben mitigarse.
8. **Riesgos:** ver §8 (no complaciente): el mayor es la **falsa precisión** y la **doble normalización**.
9. **Incorporación oficial (si se acepta):** nivel arquitectónico = **estrato Norma (tipo)**, dentro del paso de normalización; relaciones = *KPI-def* + *categoría* + *condición de referencia* + *regla de normalización*; dependencias = taxonomía (B2), admisibilidad (B4), especificaciones de medición; autoridad = científica + T1; ciclo de vida = propuesta→validada→publicada→obsoleta→retirada (con baseline y compatibilidad); integración = seleccionada automáticamente por la taxonomía y consumida por el motor de normalización.
10. **Dictamen:** ver §11.

## 11. Dictamen técnico-científico
**Veredicto: B) ACEPTAR LA PROPUESTA CON MODIFICACIONES.**

**Evidencia:** el problema que motiva la GTRM (procedencia del puntaje) es **real y consistente** con el principio rector del proyecto y con la crítica establecida a los índices compuestos (Nardo et al., 2008); la solución tiene fundamento en la teoría de **funciones de valor** (Keeney & Raiffa, 1976; von Winterfeldt & Edwards, 1986) y en la metrología de **incertidumbre** (JCGM 100:2008; 106:2012). Es decir, la GTRM **no inventa** ciencia: **operacionaliza y gobierna** ciencia ya existente que hoy el GOEI aplica sin trazabilidad.

**Justificación del "B" (y no "A" ni "C"):**
- No **A (rechazo):** la propuesta ataca un vacío genuino y mejora trazabilidad/auditabilidad/aplicación manual.
- No **C (aceptación como está):** la fuente contiene defectos que la harían científicamente insostenible: **doble normalización**, **confusión referencia/benchmark**, encuadre primario como "tabla" (reintroduce arbitrariedad), ambigüedad sobre si produce puntaje o parámetros, **ausencia de tratamiento de incertidumbre**, y falta de reglas de **precedencia** y de **ausencia/conflicto** de referencia.
- **B (con modificaciones):** aceptar la GTRM **reencuadrada** como *artefacto normativo tipo-nivel que parametriza y justifica el único paso de normalización* (posición (iii)), con las seis correcciones: (1) un solo paso de normalización; (2) referencia ≠ benchmark con precedencia; (3) función+evidencia+dominio, tabla como derivado; (4) identidad y ciclo de vida normativos; (5) incertidumbre obligatoria y versionado para reproducibilidad; (6) reglas de ausencia/conflicto y de equivalencia papel–software.

**Limitaciones del dictamen:** es **consultivo**; no ejecuta la reingeniería; depende de que B2 (taxonomía) y B4 (admisibilidad) estén cerradas antes de emitir GTRM reales; no evalúa GTRM concretas (ninguna existe); la mantenibilidad de la explosión combinatoria requiere un estudio de gobernanza aparte.

---

## Tabla conclusión–evidencia–limitación–impacto
| Conclusión | Evidencia | Limitación | Impacto |
|---|---|---|---|
| GTRM no es capa nueva, sino gobernanza de la función de valor/referencia existente | Keeney & Raiffa (1976); von Winterfeldt & Edwards (1986); D-006 (condición de referencia) | La ontología aún no formaliza "GTRM" como tipo | Amplía ontología y normalización; no toca constructo |
| Riesgo de doble normalización en la fuente | Análisis del diagrama de la propuesta; OECD/JRC (2008) | Depende de cómo se implemente el motor | Reescribir sección de normalización |
| Referencia (normativa) ≠ benchmark (empírico), con precedencia | Karr (1981); reglas críticas AX-4 | Precedencia jurisdiccional fragmenta comparabilidad | Define tipología y jerarquía de referencias |
| Sin incertidumbre → falsa precisión | JCGM 100:2008; JCGM 106:2012 | Datos escasos por categoría | Obliga a documentar y propagar incertidumbre |
| Reproducibilidad exige versionado y congelado de GTRM | AX-9 (comparabilidad entre versiones) | Coste de mantenimiento de versiones | Baseline y mapa de compatibilidad |
| Equivalencia papel–software requiere publicar la función, no solo la tabla | Análisis de discretización | Saltos en bordes de tramo | Prueba de equivalencia con error acotado |
| Veredicto B (aceptar con modificaciones) | Síntesis §1–§10 | Consultivo; B2/B4 deben cerrarse antes | Habilita incorporación reencuadrada |

## Bloqueos científicos
1. **Dependencia de cierre previo:** no pueden emitirse GTRM reales hasta cerrar **B2 (taxonomía)** y **B4 (admisibilidad)**; la GTRM presupone categoría y KPI admisibles.
2. **Doble normalización sin resolver** en la fuente: bloquea la integración hasta unificar el paso de normalización.
3. **Ausencia de política de incertidumbre y de precedencia de referencias:** sin ella, la GTRM es científicamente inauditable.
4. **Riesgo de explosión combinatoria** (KPI×categoría×jurisdicción) no gobernado: requiere estudio de gobernanza y de compatibilidad antes de escalar.

---

### Referencias (APA 7)
- Keeney, R. L., & Raiffa, H. (1976). *Decisions with multiple objectives: Preferences and value tradeoffs*. Wiley. (Reimpresión: Cambridge University Press, 1993.)
- von Winterfeldt, D., & Edwards, W. (1986). *Decision analysis and behavioral research*. Cambridge University Press.
- Nardo, M., Saisana, M., Saltelli, A., & Tarantola, S. (2008). *Handbook on constructing composite indicators: Methodology and user guide*. OECD Publishing. https://doi.org/10.1787/9789264043466-en
- Joint Committee for Guides in Metrology. (2008). *Evaluation of measurement data — Guide to the expression of uncertainty in measurement (JCGM 100:2008 / GUM)*. BIPM. https://doi.org/10.59161/jcgm100-2008e
- Joint Committee for Guides in Metrology. (2012). *Evaluation of measurement data — The role of measurement uncertainty in conformity assessment (JCGM 106:2012)*. BIPM. https://www.bipm.org/en/committees/jc/jcgm/publications
- Karr, J. R. (1981). Assessment of biotic integrity using fish communities. *Fisheries, 6*(6), 21–27. https://doi.org/10.1577/1548-8446(1981)006<0021:AOBIUF>2.0.CO;2
- Thokala, P., Devlin, N., Marsh, K., Baltussen, R., Boysen, M., Kalo, Z., … Ijzerman, M. (2016). Multiple criteria decision analysis for health care decision making — An introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force. *Value in Health, 19*(1), 1–13. https://doi.org/10.1016/j.jval.2015.12.003

*Documento consultivo. No modifica decisiones oficiales ni otros archivos. La adopción de "B" y de sus seis modificaciones requiere Decision Record y ratificación directiva.*
