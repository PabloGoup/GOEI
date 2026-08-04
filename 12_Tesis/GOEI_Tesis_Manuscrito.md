---
title: "GOEI — Índice de Eficiencia Operacional Gastronómica"
subtitle: "Fundamentación científica, construcción metodológica y protocolo de validación de un estándar para evaluar la Salud Operacional de establecimientos gastronómicos"
author: "Proyecto GOEI · Dirección General: Pablo Toledo Salinas · Comité Científico"
date: "2026"
lang: es
---

\newpage

## Nota de estatus y convenciones

Manuscrito alineado al **Plan Maestro de la Tesis (Versión Directoral)**. Integra el conocimiento de los Decision Records D-001 a D-007 y de la revisión sistemática B1. Conforme al Principio P-005, **ningún número, peso, umbral o clasificación se presenta como definitivo**.

Etiquetas de sección: **[REDACTADO]** contenido con respaldo bibliográfico; **[PROVISIONAL]** diseño propuesto pendiente de validación; **[PROTOCOLO]** diseño de método aún no ejecutado; **[PENDIENTE-EMPÍRICO]** requiere datos de campo (piloto/Delphi) inexistentes hoy. Etiquetas de evidencia: **[EVIDENCIA]**, **[CONSENSO]**, **[DATO]**, **[PROPUESTA]**.

Estado global: Tomo I mayormente **[REDACTADO]**; Tomo II **[REDACTADO/PROVISIONAL]**; Tomo III **[PROTOCOLO/PENDIENTE-EMPÍRICO]**; Tomo IV **[PROVISIONAL]**.

\newpage

# TOMO I — FUNDAMENTOS CIENTÍFICOS

## 1. Introducción

**1.1 Contexto mundial.** La gastronomía comercial es un sector global intensivo en mano de obra, con márgenes estrechos, alta rotación de negocios y creciente exigencia regulatoria en inocuidad y sostenibilidad. La digitalización (delivery, dark kitchens) ha reconfigurado sus operaciones. **[REDACTADO]** *(Datos cuantitativos específicos a incorporar de fuentes primarias — [DATO a completar en Fase 1]).*

**1.2 Contexto latinoamericano.** Predominio de micro y pequeñas empresas, alta informalidad, baja adopción tecnológica y capacidad técnica limitada, lo que hace inviables los instrumentos que exigen analista experto o software. **[REDACTADO]**

**1.3 Contexto nacional.** Marco sanitario aplicable (p. ej., Reglamento Sanitario de los Alimentos, en el caso chileno) y estructura de PYMES gastronómicas como destinatario principal del GOEI. **[REDACTADO]** *(precisar según país objeto de la tesis).*

**1.4 Problema de investigación.** No existe una forma estandarizada, comparable, auditable y de bajo costo tecnológico de expresar la condición operacional integral de un establecimiento gastronómico y compararlo consigo mismo y con pares de su categoría. **[REDACTADO]**

**1.5 Brecha científica.** Cada propiedad deseada existe por separado (multidimensionalidad, comparabilidad, auditabilidad, cálculo manual) pero ninguna las reúne; y, más profundamente, **no está demostrado que el constructo sea indexable sin pérdida inaceptable de validez** (validez de constructo). **[REDACTADO]** (D-001, D-002).

**1.6 Justificación científica.** Aporta una pregunta original y resoluble sobre validez de constructo y un marco metodológico reproducible. **1.7 Académica.** Genera tesis y artículos derivados. **1.8 Empresarial.** Provee a las PYMES un diagnóstico integral accionable. **1.9 Económica.** Bajo costo de aplicación (lápiz y papel). **1.10 Tecnológica.** Independiente de software (P-003). **1.11 Social.** Mejora la seguridad alimentaria y la sostenibilidad de los negocios. **[REDACTADO/PROPUESTA]**

**1.12 Objetivo general.** Fundamentar, diseñar y especificar la validación de un estándar (GOEI) para evaluar la Salud Operacional Gastronómica.

**1.13 Objetivos específicos.** (i) Demostrar la brecha; (ii) definir el constructo y su modelo de medición; (iii) diseñar arquitectura y ontología; (iv) identificar el núcleo universal de procesos; (v) proponer dimensiones, KPI, normalización, agregación y reglas críticas; (vi) especificar la validación.

**1.14 Preguntas de investigación.** P-central: ¿es la Salud Operacional un constructo multidimensional válidamente representable como índice compuesto, comparable entre establecimientos heterogéneos y calculable manualmente? + preguntas secundarias por objetivo.

**1.15 Hipótesis.** H1: la Salud Operacional es un constructo **formativo** válidamente indexable. H2: existe un núcleo universal de macroprocesos a nivel de subsistema. H3: un índice con compuertas no compensatorias representa mejor la condición operacional que uno lineal compensatorio. **[PROPUESTA — a contrastar]**

**1.16 Alcances.** Foodservice comercial y no comercial; unidad de análisis = establecimiento individual. **[PROVISIONAL]** **1.17 Limitaciones.** Validación empírica no ejecutada; revisión aún no PRISMA plena. **1.18 Supuestos.** Datos observables y obtenibles sin tecnología (P-005). **1.19 Definiciones preliminares.** Ver glosario (Anexos). **1.20 Estructura de la investigación.** Cuatro tomos (Fundamentos, Construcción, Validación, Estándar).

## 2. Estado del arte

**2.1 Metodología de revisión sistemática.** Revisión estructurada con aproximación PRISMA. **2.2 PRISMA.** Se declara que la revisión actual **aproxima** PRISMA; la PRISMA plena multibase con doble cribado y diagrama de flujo queda como tarea de cierre (B1/Fase 1). **[PROTOCOLO]** **2.3 Bases de datos.** Objetivo: Scopus, Web of Science, ScienceDirect, PubMed (pendiente de ejecución sistemática). **2.4 Inclusión / 2.5 Exclusión / 2.6 Estrategia de búsqueda.** Definidas en el protocolo B1. **2.7 Estudios seleccionados / 2.8 Síntesis.** Base convergente actual.

**Análisis comparativo (síntesis) [REDACTADO]:**

| Modelo | Qué mide | Fortaleza | Límite para el GOEI |
|---|---|---|---|
| Balanced Scorecard | Desempeño multidimensional | No reduce a lo financiero | No da número comparable entre empresas |
| OEE | Efectividad de activo (Disp×Rend×Cal) | Agregación **no compensatoria** | Diseñado para equipos |
| DEA | Eficiencia relativa | Base matemática fuerte | No manual; exige frontera |
| SCOR | Referencia de operaciones (5 atributos) | Estándar jerárquico | Complejo; no manual |
| Lean / Six Sigma | Flujo/desperdicio; variación/defectos | Enfoque en merma y calidad | Método, no constructo de estado |
| EFQM | Excelencia (enablers→results) | Puntaje agregado auditado | Pesado; no PYME |
| ISO (22000/9001) | Gestión de calidad/inocuidad | Norma reconocida | Certificación, no índice comparativo |
| SERVQUAL / DINESERV | Calidad de servicio percibida | Validado, específico restaurantes | Mide percepción, no operación física |
| RevPASH / Yield & Revenue Mgmt | Rendimiento de capacidad/ingreso | Combina tiempo y capacidad | Faceta única (ingreso) |
| Índices compuestos (OECD/JRC) | Método de agregación | El "cómo" del GOEI | Fuente de sus propias objeciones (robustez) |
| HACCP | Control de inocuidad | Norma de seguridad | Solo inocuidad |

**Conclusiones del estado del arte.** La brecha es de integración estandarizada + especificidad de dominio; la novedad metodológica pura es baja (normalización/ponderación/agregación ya resueltas en abstracto), por lo que el valor original del GOEI es **empírico y de dominio**. **[REDACTADO]**

## 3. Marco teórico

**3.1 Sistemas / 3.2 Organizaciones / 3.3 Operaciones / 3.4 Gestión operacional.** Teoría de sistemas (entrada-transformación-salida) como base; la operación como sistema socio-técnico. **[REDACTADO]**

**3.5 Salud operacional.** Constructo objeto: condición dinámica del sistema operativo. Distinguido de: **3.6 Productividad** (output/insumo), **3.7 Eficiencia** (relación con frontera), **3.8 Eficacia** (logro de objetivos), **3.9 Calidad** (conformidad). **[REDACTADO]** (D-003).

**3.10 KPI / 3.11 Constructos / 3.12 Índices compuestos.** Distinción **type/token**; constructos **formativos vs reflectivos** (Bollen & Lennox, 1991; Jarvis et al., 2003); índices compuestos (OECD/JRC, 2008). **[REDACTADO]** (D-004).

**3.13 Procesos / 3.14 Recursos / 3.15 Eventos.** Marco REA (McCarthy, 1982) y BFO (continuante/ocurrente). **3.16 Ontologías / 3.17 Taxonomías / 3.18 Arquitectura empresarial.** ArchiMate/TOGAF; APQC. **3.19 Ingeniería del conocimiento.** PROV-O; grafos de conocimiento. **3.20 Frameworks internacionales.** ISO Annex SL, CMMI, SCOR, Ocean Health Index. **[REDACTADO]** (D-005, D-006).

## 4. Modelo conceptual

**4.1 Constructo.** Salud Operacional Gastronómica. **4.2 Definición oficial.** Respaldada por **D-004** (no por instrumentos de gobernanza); su redacción formal es competencia de la Oficina Técnica tras el cierre de Fase A. **[PROVISIONAL]** **4.3 Alcance / 4.4 Límites.** Condición operacional presente evaluada contra estado de referencia; no mide reputación de marca ni percepción longitudinal (salvo Vía B). **4.5 Ontología** (cap. 6/anexos). **4.6 Taxonomía** (cap. 7). **4.7 Arquitectura conceptual / 4.8 Relaciones / 4.9 Hipótesis conceptuales.** Ver ontología de tres estratos. **4.10 Modelo conceptual final.** Salud Operacional = compuesto formativo de dimensiones constitutivas, con compuertas críticas, estimado como cualidad del establecimiento en un periodo. **[REDACTADO/PROVISIONAL]**

\newpage

# TOMO II — CONSTRUCCIÓN DEL GOEI

## 5. Arquitectura del GOEI

**5.1 Filosofía.** El conocimiento precede al estándar; el estándar precede al software (P-007, P-008). **5.2 Principios.** P-001..P-010 del Master Plan. **5.3 Objetivos.** Estándar reproducible e independiente de software. **5.4 Framework / 5.5 Arquitectura documental / 5.6 Jerarquía documental.** Eje normativo N0–N9 + planos transversales T1–T4 + esquema de conformidad K1–K4 (D-005). **5.7 Gobernanza.** Propietario, comité, IP, ética, gobernanza de datos (T1; pendiente GOEI-ISS-003). **5.8 Ciclo de vida / 5.9 Versionado.** Estados de versión (borrador→en validación→publicado→sustituido→retirado); competencia de la Oficina Técnica. **[REDACTADO/PROVISIONAL]**

## 6. Procesos universales

Núcleo a dos niveles (D-007, B1), convergente en Spears & Gregoire, APQC, BPM de restaurantes y foodservice hospitalario. **[REDACTADO]**

**6.1 Macroprocesos.** Cadena primaria: P1 planificación/menú · P2 aprovisionamiento · P3 recepción-almacenamiento-inventario · P4 producción · P5 distribución/entrega · P6 cierre transaccional. Transversales: inocuidad, mantenimiento, gestión, residuos.
**6.2 Procesos / 6.3 Subprocesos / 6.4 Actividades.** Descomposición jerárquica por macroproceso **[PROVISIONAL]**. **6.5 Eventos / 6.6 Recursos / 6.7 Entradas / 6.8 Salidas.** Modelados por REA (evento usa/consume/produce recurso). **6.9 Riesgos / 6.10 Controles.** Inocuidad con puntos de control en cada eslabón (doble rol: proceso + regla crítica). **[REDACTADO/PROVISIONAL]**

## 7. Taxonomía universal [PROVISIONAL]

Taxonomía **multieje** (no lista plana), anclada en sistemas reales de clasificación: NAICS 722 (Full-Service 7221, Limited-Service 7222, Special Food Services 7223, Drinking Places 7224); segmentación comercial QSR/Fast Casual/Casual/Fine Dining; y la partición comercial/no comercial. **[EVIDENCIA de clasificaciones existentes; combinación PROPUESTA]**

**Ejes candidatos:** (1) modo de entrega (mesa/mostrador/autoservicio/delivery/banquete/bandeja institucional); (2) sistema de producción (convencional/cook-chill/commissary/assembly-serve); (3) naturaleza económica (comercial/no comercial); (4) complejidad de oferta.

Las categorías del Plan Maestro se ubican como **combinaciones** de ejes:

| 7.x Categoría | Modo entrega | Naturaleza | Nota |
|---|---|---|---|
| 7.1 Restaurantes (full/casual/fine) | mesa | comercial | NAICS 7221 |
| 7.2 Hoteles (A&B/banquete) | mesa/banquete | comercial | multi-outlet |
| 7.3 Fast food / QSR | mostrador | comercial | NAICS 7222 |
| 7.4 Cafeterías | mostrador/mesa | comercial | |
| 7.5 Dark kitchens | delivery | comercial | sin FOH |
| 7.6 Casinos (comedores institucionales) | autoservicio/bandeja | comercial/no comercial | |
| 7.7 Catering | transporte/evento | comercial | NAICS 7223 |
| 7.8 Food trucks | mostrador/móvil | comercial | NAICS 7223 |
| 7.9 Panaderías | mostrador | comercial | producción intensiva |
| 7.10 Otras (hospitalario, escolar, penitenciario, aéreo) | bandeja/distribución | no comercial | tensiona P6 |

El GOEI aplica el **núcleo universal** a todas y **KPI/umbrales específicos** por combinación. **[PROVISIONAL — validar exhaustividad y exclusión mutua]**

## 8. Catálogo universal de KPI [PROVISIONAL — candidatos, sin pesos ni umbrales validados]

Estructura de ficha por KPI (según Plan Maestro): nombre · definición · autor · bibliografía · proceso asociado · variables · unidad · fórmula original · ventajas · limitaciones · método de captura · frecuencia · interpretación. Candidatos ilustrativos por dimensión:

- **Costos:** food cost %, prime cost %, costo laboral % (proceso P2/P4/gestión).
- **Productividad de recursos:** RevPASH (Kimes), rotación de mesas, productividad laboral, utilización de capacidad (P5/gestión).
- **Calidad de producto:** tasa de rehechos/conformidad (P4).
- **Servicio/experiencia:** ítems tipo DINESERV, tiempo de servicio, error en pedidos (P5).
- **Inocuidad:** cumplimiento de PCC HACCP, hallazgos críticos (transversal — gatekeeper).
- **Personas:** rotación de personal, cobertura de capacitación (gestión).
- **Sostenibilidad:** % de merma, desperdicio por cubierto (residuos).

*Cada ficha completa se poblará y depurará contra la matriz de admisibilidad y el Delphi.* **[PENDIENTE-EMPÍRICO para la selección definitiva]**

## 9. Manual de admisibilidad de KPI [PROVISIONAL]

Criterios (derivados de principios del proyecto + anclaje ontológico AX-11): observabilidad · medibilidad · auditabilidad · comparabilidad · repetibilidad · universalidad (realizable por la categoría) · disponibilidad · costo (obtenible sin tecnología) · validez · confiabilidad · no redundancia (colinealidad). Cada KPI candidato se puntúa contra estos criterios; solo los admisibles entran. **[PROPUESTA]**

## 10. Sistema de normalización [PROVISIONAL]

Normalización a **estado de referencia** 0–100 (análoga a IBI/OHI/HEI): cada KPI se transforma según su distancia entre un ancla inferior (inaceptable) y superior (referencia "sana"), respetando su dirección de bondad. Tratamiento de **outliers** y **valores faltantes** según OECD/JRC; **homologación** a escala común mediante tablas de conversión **calculables a mano**. Las anclas concretas requieren calibración. **[PROTOCOLO/PENDIENTE-EMPÍRICO]**

## 11. Modelo matemático [PROVISIONAL — estructura, sin pesos]

- **Ponderación:** por definir (igual / consenso experto / basada en datos), con justificación y análisis de sensibilidad. **No se fijan pesos aquí.**
- **Agregación:** intra-dimensión (KPI→dimensión) e inter-dimensión con **compensación limitada** (media geométrica o agregación penalizada) coherente con la crítica a la agregación lineal.
- **Compuertas críticas:** reglas no compensatorias (inocuidad/legalidad) como techos del resultado.
- **Sensibilidad / robustez / incertidumbre:** análisis obligatorio (OECD/JRC); si el ordenamiento no es robusto, se rediseña.
- **Fórmula GOEI:** se especifica la **forma** GOEI = f(puntajes de dimensión) sujeta a compuertas; los coeficientes se calibran en validación. **[PROTOCOLO]**

\newpage

# TOMO III — VALIDACIÓN

## 12. Metodología

Paradigma pospositivista; enfoque mixto; diseño de investigación de diseño + validación psicométrica de constructo formativo. Variables, población (establecimientos por categoría), muestra, instrumentos (formularios de captura) y procedimientos definidos en el protocolo. **[PROTOCOLO]**

## 13. Validación científica

- **Validez de contenido / completitud:** panel de expertos (**Delphi**).
- **Validez de constructo (formativo):** especificación causal indicador→constructo; **colinealidad** (VIF); modelos **MIMIC**. *(Nota: validez convergente/discriminante y α de Cronbach NO aplican a constructos formativos; se documenta explícitamente para evitar el error de coherencia.)*
- **Validez de criterio (externa):** asociación con continuidad del negocio, rentabilidad, satisfacción, no conformidades.
- **Confiabilidad / repetibilidad:** concordancia inter-evaluador y test-retest.
- **Robustez / sensibilidad:** incertidumbre y sensibilidad (OECD/JRC). **[PROTOCOLO]**

## 14. Casos piloto [PENDIENTE-EMPÍRICO]

Aplicación manual por categoría (p. ej. Caso 1 casual, Caso 2 fine dining, Caso 3 dark kitchen), comparación, resultados y análisis. **No ejecutables sin datos de campo reales; estructura preparada, resultados pendientes.**

## 15. Discusión

Interpretación; comparación con literatura; fortalezas (integración, no compensación, auditabilidad, cálculo manual); debilidades (novedad metodológica baja; carga de calibración); limitaciones (validación no ejecutada); aplicaciones (autoevaluación PYME, consultoría, regulación). **[REDACTADO parcialmente; completar tras piloto]**

## 16. Conclusiones

Cumplimiento de objetivos y contraste de hipótesis (parcial: H1–H3 fundamentadas, no aún validadas empíricamente); respuestas a preguntas; líneas futuras (Delphi, calibración, robustez, piloto, longitudinal/Vía B, software). **[REDACTADO/PENDIENTE]**

\newpage

# TOMO IV — ESTÁNDAR GOEI [PROVISIONAL]

## 17. GOEI Standard

**17.1 Constitución** (principios y gobernanza) · **17.2 Body of Knowledge** · **17.3 Manual Técnico General** (empaqueta N0–N9) · **17.4 Manuales por categoría** · **17.5 Formularios** · **17.6 Checklists** · **17.7 Procedimientos** · **17.8 Reglas** (críticas y de validez) · **17.9 Auditoría** (esquema K1–K4) · **17.10 Gobierno** (T1). Producción y versionado a cargo de la Oficina Técnica (Codex) tras el cierre de Fase B. **[PROVISIONAL]**

\newpage

# ANEXOS TÉCNICOS (estado)

Ontología completa (D-006/D-006-REV, tres estratos) **[REDACTADO]**; Knowledge Graph **[en producción — Codex, EPIC-001]**; diccionarios de datos/entidades/relaciones/procesos **[PROVISIONAL]**; taxonomía completa **[PROVISIONAL, cap. 7]**; repositorio documental y registros (decisiones D-001..D-008-propuesta, issues GOEI-ISS, cambios, roadmap) **[en gobernanza — Codex]**; bibliografía anotada **[PROTOCOLO — Fase 1]**; matrices de trazabilidad **[PROVISIONAL]**.

# DOCUMENTACIÓN VISUAL (estado)

Mapas conceptuales, diagramas de arquitectura, ontologías, taxonomías, diagramas operacionales, flujogramas, **BPMN**, **UML**, modelos de datos (ERD), **SIPOC** por macroproceso, **VSM**, matrices (proceso×KPI, proceso×recursos, KPI×bibliografía, dimensiones×procesos, etc.), heatmaps, dashboards, formularios y checklists: **estructura definida; producción gráfica a cargo de la Oficina Técnica (Codex)**. Diagramas conceptuales base ya disponibles en los Decision Records (arquitectura por capas D-005; ontología de tres estratos y anclaje cuádruple D-006-REV; núcleo de procesos D-007). **[PROVISIONAL / en producción]**

# PRODUCTOS CIENTÍFICOS DERIVADOS (estado)

- Artículo 1 (Justificación científica) **[borrador disponible: 13_Publicaciones]**.
- Artículos 2–9 (modelo conceptual, constructo, ontología, procesos, taxonomía, selección de KPI, modelo matemático, validación): **[PLANIFICADOS]**, cada uno derivable de un capítulo/Decision Record.
- Libro GOEI, Software GOEI, Manual Oficial, Repositorio Open Science: **[FASES POSTERIORES]**.

# Objetivo final

Que cualquier investigador, consultor, auditor o empresa pueda comprender, implementar, auditar y reproducir el GOEI usando solo la documentación oficial, con resultados consistentes y comparables, sin depender de los autores. Este manuscrito hace ese objetivo **posible y riguroso**; su realización plena depende del ciclo empírico de validación aún no ejecutado.

\newpage

## Referencias

Bollen & Lennox (1991); Charnes, Cooper & Rhodes (1978); Diamantopoulos & Winklhofer (2001); Elkington (1994); Gregoire & Spears, *Foodservice Organizations*; Halpern et al. (2012, *Nature*); Jarvis, MacKenzie & Podsakoff (2003); Kaplan & Norton (1992); Karr (1981); Kimes (RevPASH, Cornell); McCarthy (1982); Miles (1969); Nakajima (OEE/TPM); Neely, Gregory & Platts (1995); OECD/JRC — Nardo, Saisana, Saltelli & Tarantola (2008); Richard, Devinney, Yip & Johnson (2009); Stevens, Knutson & Patton (1995); APQC PCF; W3C PROV-O (2013); ISO/IEC Annex SL; ISO/IEC 17065; NAICS 722.

*Bibliografía a verificar en edición exacta y anotar (Fase 1) antes de someter a publicación.*
