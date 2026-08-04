# Auditoría técnica GOEI-AUDIT-0007 — Preparación mecánica de B4

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0007` |
| Fecha | 2026-08-04 |
| Resultado | **PREPARADA CON BLOQUEOS SELECTIVOS HEREDADOS** |
| Alcance | Integridad de entrada, identidad, cardinalidad, esquema documental y controles mecánicos para B4 |
| Exclusión | No evalúa evidencia científica, pertinencia, admisibilidad, validez ni selección de KPI |
| Entradas canónicas | D-018; `GOEI-DIR-RES-0003`; `GOEI-BSL-KPI-C-0001 v0.1.0`; `GOEI-HO-0003` |

## 1. Dictamen técnico

B4 dispone de una entrada reproducible y técnicamente suficiente: una baseline inmutable con **31 indicadores candidatos** identificados consecutivamente como `GOEI-KPI-C-001`–`031`, más `GOEI-KPI-C-032` preservado como marco contextual y expresamente excluido de la cola de evaluación. Las huellas SHA-256 y los tamaños de los cuatro artefactos congelados coinciden con el manifiesto.

La preparación no equivale a admisibilidad. B4 deberá definir y aprobar científicamente su método y sus criterios antes de asignar resultados. Esta auditoría solo fija controles verificables para impedir omisiones, duplicaciones, cambios silenciosos, mezcla de estados o anticipación de B5–B8.

Los Issues `GOEI-ISS-055`–`058` y las reservas `008`, `015`, `043` y `054` permanecen activos con alcance selectivo. La matriz B4 puede construirse completa, pero no podrá promover una rama cuando su conclusión dependa de una cuestión científica abierta.

## 2. Verificación de la configuración de entrada

| Control | Resultado | Evidencia |
|---|---|---|
| Identidad de baseline | Conforme | `GOEI-BSL-KPI-C-0001 v0.1.0` |
| Autoridad científica | Conforme | D-018, Comité Científico GOEI |
| Ratificación directiva | Conforme | `GOEI-DIR-RES-0003`, bajo `GOEI-DIR-0004` |
| Cardinalidad del inventario | Conforme | 32 encabezados, 32 IDs únicos y secuencia completa 001–032 |
| Cola evaluable | Conforme | 31 registros con estado candidato; C-032 contextual excluido |
| Esquema de ficha | Conforme | Los 32 registros contienen los 13 campos declarados por el catálogo |
| Fuente por ficha | Conforme formalmente | Los 31 candidatos declaran `Fuente APA 7`; esta auditoría no juzga suficiencia o calidad |
| Cobertura registral | Conforme con reservas | P1–P9 representados; densidad no equivale a suficiencia |
| Integridad de artefactos | Conforme | Bytes y SHA-256 coinciden en los cuatro artefactos del manifiesto |
| Inmutabilidad | Conforme | `POLITICA_ISSUE_ONLY.md` exige Issue, impacto, decisión, nueva versión y preservación |
| Estado de compuerta | Conforme | `GOEI-HO-0003` cierra B3 y habilita B4 sin aprobar KPI |

## 3. Huellas verificadas

| Artefacto | Bytes | SHA-256 verificado |
|---|---:|---|
| `01_Estado_del_arte/FaseB_B3_Revision_universo_KPI.md` | 17605 | `7a9aa918ce9f82188c9ecb1f6b02b8f3b013c8df6eabb2b964424bc4d40a1db1` |
| `05_Catalogo_KPI/GOEI_Catalogo_KPI_Candidatos_B3.md` | 36174 | `6a32e14583c883e243bbddd4fafc68de301449f82824e34bfacbd4e6f21c3106` |
| `05_Catalogo_KPI/GOEI_Matriz_Cobertura_KPI_Candidatos_B3.md` | 6241 | `13ab765920c2402f2da1861c01b4968eb87ba098516b6c91ef3bec5f0c5b2045` |
| `00_Gobernanza/coordinacion/entradas_comite/GOEI_SCI_HANDOFF_D018_Cierre_B3.md` | 13065 | `511ea02a423a691faf52c2cca2e8638e9c8ada33abd221732f9362df63a7f666` |

## 4. Contrato mecánico exigible a la matriz B4

### 4.1 Identidad y cardinalidad

1. La matriz contendrá exactamente una fila maestra por cada ID `GOEI-KPI-C-001`–`031`.
2. No contendrá una fila de evaluación KPI para `GOEI-KPI-C-032`.
3. No podrá crear, renumerar, fusionar ni retirar IDs. Toda variación del universo exige Issue y nueva versión de baseline.
4. La clave primaria será el ID estable del candidato; el nombre será descriptivo y no se usará como clave.
5. Si el diseño usa una fila por combinación candidato–criterio, deberá cumplirse `31 × N`, donde `N` es el número de criterios científicos aprobados, sin celdas ausentes ni duplicadas.
6. Una vista resumida candidato–resultado deberá derivarse de la matriz detallada y no constituir una segunda fuente de verdad.

### 4.2 Campos técnicos mínimos por evaluación

Sin prescribir los criterios científicos, cada resultado candidato–criterio deberá registrar como mínimo:

- ID de candidato;
- ID y versión del criterio aprobado;
- resultado controlado del criterio;
- justificación o referencia al razonamiento científico;
- evidencia o fuente exacta utilizada;
- decisión científica que autoriza criterio y resultado;
- Issue o dependencia aplicable;
- estado del bloqueo, si existe;
- fecha y versión de evaluación;
- autoridad científica responsable;
- procedencia al artefacto B3 de origen.

La fila resumen por candidato deberá conservar: estado B4 controlado, alcance de ese estado, criterios determinantes, criterios no evaluables, desacuerdos, exclusiones, limitaciones, dependencias y enlace a todas sus evaluaciones detalladas.

### 4.3 Dominios de estado y completitud

- El vocabulario de resultados y estados deberá ser definido y aprobado por el Comité antes de poblar la matriz.
- Un valor vacío no podrá significar simultáneamente “no aplica”, “sin evidencia”, “no evaluado” o “bloqueado”; cada situación requiere un estado explícito.
- Todo resultado deberá distinguir decisión negativa, insuficiencia de evidencia y dependencia no resuelta.
- Ningún estado B4 podrá llamarse o implicar `KPI aprobado`, porque la fase decide admisibilidad dentro del alcance aprobado, no especificación, puntuación ni incorporación a la fórmula.
- Los desacuerdos no podrán resolverse por sobrescritura: deberán quedar versionados y vinculados al dictamen que prevalece.
- Toda modificación posterior conservará la evaluación anterior y declarará sustitución, no edición histórica silenciosa.

### 4.4 Trazabilidad y procedencia

- Cada ID deberá enlazar a su ficha exacta en `GOEI-CAT-KPI-C-0001 v0.1.0`.
- La matriz deberá conservar literalmente el ID; no deberá copiar ni reinterpretar la definición fuente como una definición GOEI.
- Toda fuente deberá apuntar a la referencia bibliográfica declarada o a nueva evidencia formalmente incorporada por el Comité.
- Una nueva fuente no modifica la baseline B3: se registra como evidencia B4 con su propia procedencia y versión.
- El resultado deberá vincular criterio → evidencia → evaluación → decisión científica → estado del candidato.
- Las asociaciones P1–P9 y FX-1–FX-3 son datos de procedencia B3; cambiarlas exige Issue y no puede hacerse lateralmente desde B4.

### 4.5 Separación de fases

La matriz deberá rechazar mecánicamente campos o resultados que introduzcan:

- fórmula GOEI o fórmula de puntuación;
- referencia, benchmark o GTRM concreta;
- umbral, rango o tabla de interpretación;
- normalización, peso o regla de agregación;
- tolerancia papel–software;
- valor concreto de faceta taxonómica;
- clasificación multiunidad o multimarca.

Las expresiones transcritas desde las fuentes B3 pueden citarse como procedencia, pero no deberán etiquetarse como especificaciones normativas GOEI.

## 5. Mapa de bloqueos selectivos exigible

| Issue / reserva | Rama afectada en B4 | Control técnico |
|---|---|---|
| `GOEI-ISS-055` | Afirmaciones de completitud o exhaustividad del universo | Prohibir estado o conclusión que declare universo exhaustivo mientras siga abierto |
| `GOEI-ISS-056` | C-003 cuando se evalúe exactitud de pronóstico | Registrar evaluación no resoluble/deferida si el resultado depende de una métrica cerrada ausente |
| `GOEI-ISS-057` | C-005, C-014, C-015 y C-030 | No promover mientras la adaptación gastronómica sea condición necesaria no resuelta |
| `GOEI-ISS-058` | C-021 en comparabilidad o puntuación jurisdiccional | Separar posible admisibilidad conceptual de comparabilidad/puntuación no resuelta |
| `GOEI-ISS-043` | C-007 y clasificación de merma | No reintroducir residuos/merma como proceso normativo mediante la evaluación KPI |
| `GOEI-ISS-015` | C-021–C-024 / doble rol de inocuidad | Preservar la reserva; no decidir arquitectura compensatoria desde B4 |
| `GOEI-ISS-054` | Cualquier selección por valores concretos FX-1/2/3 | Admitir solo identidad de faceta; impedir valores o categorías inferidas |
| `GOEI-ISS-008` | Agregación multiunidad/multimarca | Mantener `Establecimiento` como unidad ordinaria; bloquear rollups |

## 6. Solapamientos que requieren tratamiento explícito, no resolución técnica

La matriz deberá incluir una referencia de dependencia para cada relación ya registrada, sin que esta auditoría determine cuál candidato prevalece:

- C-028 con C-009 y C-029;
- C-012 con C-018;
- C-017 con C-018;
- C-005 con C-014;
- C-008 con C-027;
- los dos componentes internos de C-007;
- C-008 en P4 y P8.

El Comité deberá decidir científicamente si cada caso constituye duplicidad, inclusión, complementariedad, diferente contexto de uso o necesidad de redefinición. El control mecánico solo exige que ninguna relación desaparezca sin decisión trazable.

## 7. Pruebas automáticas recomendadas para el artefacto B4

| Código | Aserción |
|---|---|
| B4-M01 | Conjunto de IDs evaluados = `{001..031}` |
| B4-M02 | C-032 no aparece como candidato evaluado |
| B4-M03 | No existen IDs duplicados o desconocidos |
| B4-M04 | Cada candidato posee una evaluación por cada criterio aprobado |
| B4-M05 | Cada evaluación tiene criterio versionado, estado explícito, evidencia, autoridad y decisión |
| B4-M06 | Cada estado resumido es derivable de evaluaciones detalladas según una regla científica registrada |
| B4-M07 | Todo Issue aplicable aparece en las filas afectadas y conserva su estado maestro |
| B4-M08 | Toda fuente es resoluble a una referencia o expediente controlado |
| B4-M09 | No aparecen campos prohibidos de B5–B8 ni valores concretos de facetas |
| B4-M10 | Las siete relaciones de solapamiento conservan tratamiento explícito |
| B4-M11 | Los hashes de la baseline B3 siguen coincidiendo antes y después de B4 |
| B4-M12 | El artefacto distingue no aplica, no evaluado, evidencia insuficiente, bloqueo y resultado negativo |
| B4-M13 | No se afirma exhaustividad mientras `GOEI-ISS-055` siga abierto |
| B4-M14 | Toda salida tiene versión, fecha, autoridad y vínculo a D-018 y a la decisión B4 correspondiente |

## 8. Riesgos técnicos de entrada

1. **Falsa completitud:** la cobertura P1–P9 puede interpretarse erróneamente como universo exhaustivo; `GOEI-ISS-055` lo impide.
2. **Promoción semántica accidental:** el término KPI del nombre del catálogo no convierte los registros candidatos en KPI normativos.
3. **Resultado agregado opaco:** una sola celda final sin evaluación criterio–evidencia impediría auditar la decisión.
4. **Pérdida de matiz en bloqueos:** tratar todo Issue como bloqueo total ocultaría que las reservas son selectivas.
5. **Duplicación de fuente de verdad:** mantener matrices detallada y resumida editables independientemente produciría divergencias.
6. **Contaminación entre fases:** introducir referencias, puntuación o ponderación durante admisibilidad anticiparía decisiones no aprobadas.

## 9. Conclusión

B4 está **técnicamente preparada** para comenzar con los 31 candidatos congelados, siempre que el Comité Científico apruebe primero el método, los criterios y los dominios de resultado. No existe impedimento registral para construir la matriz completa. Los Issues abiertos deben expresarse como bloqueos selectivos por fila o criterio y no como razón para detener la fase entera.

La condición de aceptación técnica del futuro expediente B4 será superar B4-M01–B4-M14, conservar intacta `GOEI-BSL-KPI-C-0001 v0.1.0` y demostrar trazabilidad completa desde cada resultado hasta su candidato, criterio, evidencia, autoridad y decisión científica.
