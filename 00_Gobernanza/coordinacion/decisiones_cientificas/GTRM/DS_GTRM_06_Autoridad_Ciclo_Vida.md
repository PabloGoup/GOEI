# DS-GTRM-06 — Autoridad y ciclo de vida

| Campo | Valor |
|---|---|
| Identificador de expediente | GOEI-DS-GTRM-06-0001 |
| Slot de origen | DS-GTRM-06 |
| Identificador de decisión | D-014 |
| Versión documental | 0.1.0 |
| Estado | Incorporada como marco científico por D-014; órganos definitivos sujetos a GOEI-ISS-003 |
| Autoridad científica | Comité Científico GOEI |
| Issue relacionado | GOEI-ISS-044 / GOEI-ISS-050 |
| Expediente rector | GOEI-EXP-ISS-044-0001 |
| Baseline de referencia | D-006 Ontology Baseline v0.1 (sin modificación) |
| Fecha | 2026-08-04 |

## 1. Pregunta y alcance
**Pregunta exacta:** ¿Quién crea, aprueba, revisa, suspende y reemplaza una GTRM, y dónde reside su autoridad científica y normativa?
**Incluye:** modelo de autoridad y ciclo de vida (marco).
**Excluye:** designar personas u órganos concretos (depende de la gobernanza institucional, GOEI-ISS-003).
**Conceptos usados:** planos T1 (gobernanza), T3 (validación-compuerta), T4 (versionado) y esquema K (conformidad) de D-005.

## 2. Alternativas consideradas
| ID | Alternativa | Fortalezas | Limitaciones | Estado |
|---|---|---|---|---|
| ALT-01 | **Doble autoridad separada**: científica (evidencia/método) + normativa (órgano de gobernanza) con ciclo de vida versionado e inmutable | Separa ciencia de norma; auditable; reproducible | Requiere gobernanza definida | **Adoptada** |
| ALT-02 | **Autoridad única** | Simplicidad | Confunde validez científica con vigencia normativa | Rechazada |
| ALT-03 | La **Oficina Técnica** funda la ciencia de la GTRM | Rápido | Viola regla #9 (artefacto técnico ≠ ciencia) | Rechazada |

## 3. Evidencia y procedencia (APA 7)
| Tipo | Fuente | Enlace/DOI | Afirmación |
|---|---|---|---|
| Norma de conformidad | ISO/IEC 17065:2012 | https://www.iso.org/standard/46568.html | Separa competencia técnica, imparcialidad y autoridad del esquema |
| Marco de madurez | CMMI Institute. (2018). *CMMI V2.0* (modelo, evaluación, certificación). ISACA. | https://cmmiinstitute.com | Ciclo de vida y autoridad de evaluación/versión de artefactos normativos |
| Hecho de proyecto | D-005 (T1/T3/T4/K) | Archivo canónico | Gobernanza, validación-compuerta, versionado y conformidad ya definidos |

## 4. Análisis científico
**Método:** análisis de gobernanza de estándares (separación autor científico / autoridad normativa) y de gestión de versiones.
**Incertidumbre/sesgos:** riesgo de que un artefacto técnico se tome como ciencia si la autoría no se separa.
**Reproducibilidad:** inmutabilidad de versiones garantiza reproducibilidad histórica (enlaza DS-GTRM-08).

## 5. Decisión propuesta
**Disposición:** adoptar ALT-01.
**Texto inequívoco:** Toda GTRM tiene **doble autoridad separada**: (i) **científica** —la evidencia y el método aprobados por el Comité Científico que fundan referencia, función y parámetros—; (ii) **normativa** —el órgano de gobernanza del estándar (D-005, T1) que ratifica, publica, versiona, suspende y retira—. Se adopta como **marco de ciclo de vida**: `borrador → revisión científica → recomendada → aprobada → vigente`, con ramas `devuelta|rechazada`, `suspendida↔vigente` y `sustituida→retirada`. **Ninguna versión se sobrescribe**; una evaluación histórica conserva la versión usada y una simulación con versión nueva se marca **contrafactual**.
**Justificación:** sin autoría científica la GTRM es arbitraria; sin autoridad normativa no es exigible; sin inmutabilidad no es reproducible.
**Qué no decide:** no designa órganos/personas concretas (GOEI-ISS-003).

## 6. Limitaciones, vigencia y pendientes
**Limitaciones:** depende de la definición institucional del propietario del estándar (GOEI-ISS-003).
**Preguntas abiertas:** mapeo concreto de roles al órgano de gobernanza → Issue GOEI-ISS-050/003.

## 7. Impacto y dependencias
| Componente | Efecto | Dependencia |
|---|---|---|
| Constitución/gobernanza | Define autoridad y roles | GOEI-ISS-003 |
| T4 versionado | Aplica ciclo de vida GTRM | D-005 |
| Knowledge Graph | Representa procedencia, autoridad, sucesión | Issue |

**Efecto papel–software:** ambos citan ID, versión, estado y autoridad de la GTRM aplicada.
**Efecto histórico:** inmutabilidad y sucesión explícitas.

## 8. Recomendación de integración
Recomendar incorporación del marco de autoridad y ciclo de vida tras auditoría y ratificación institucional.

## 9. Controles
Cumplidos íntegramente.
