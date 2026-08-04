# Revisión técnica y arquitectónica de la Ontología Conceptual GOEI D-006

| Campo | Valor |
|---|---|
| Identificador | GOEI-REV-ONT-0001 |
| Tipo | Revisión técnica de arquitectura de conocimiento |
| Estado | Informe para decisión posterior |
| Objeto revisado | `Fase4_D006_Ontologia_del_GOEI.md` |
| Versión del objeto | Documento fechado 2026-08-04; sin versión semántica declarada |
| Alcance | Consistencia, modelado, escalabilidad e implementabilidad |
| Exclusiones | Corrección científica, bibliográfica y normativa |
| Modificaciones al objeto | Ninguna |

## 1. Dictamen ejecutivo

La ontología constituye una **base conceptual competente**, pero todavía no una especificación ontológica implementable sin decisiones de ingeniería adicionales. Sus fortalezas principales son la separación type/token, la distinción de jerarquías, el anclaje temporal, la trazabilidad y la declaración explícita de invariantes. Estas decisiones reducen ambigüedades importantes desde el inicio.

El principal riesgo técnico es la mezcla, en algunas entidades, de tres planos que conviene representar por separado: **realidad del dominio**, **acto de evaluación** y **registro informacional**. También falta convertir varias relaciones narrativas en contratos formales: dominio, rango, cardinalidad, identidad, alcance de versión, procedencia y tratamiento de estados no calculables.

Conclusión: la ontología es adecuada como **modelo conceptual de primera versión**. Antes de usarla como contrato de software, formularios o motor matemático, necesita una segunda capa de especificación lógica y de datos. Esta conclusión no cuestiona ninguna decisión científica.

## 2. Evaluación por criterio

| Criterio | Evaluación | Observación técnica |
|---|---|---|
| Consistencia interna | Buena con tensiones localizadas | Los axiomas son compatibles en general; algunas clasificaciones mezclan entidad real y objeto informacional. |
| Coherencia terminológica | Buena en el núcleo | “Observación/Medición”, “Perfil/Registro” y “KPI” aún agrupan conceptos diferentes. |
| Metamodelo, tipos e instancias | Buena intención; formalización incompleta | El plano definicional y operacional está claro, pero `Estándar GOEI (versión)` no debe confundirse con el metamodelo que lo describe. |
| Redundancias | Moderadas y resolubles | Hay pares candidatos a separación o consolidación, no redundancia destructiva. |
| Relaciones | Núcleo suficiente; cobertura incompleta | Faltan cardinalidades, procedencia, vigencia, aplicabilidad y relaciones de cálculo explícitas. |
| Entidades | Adecuadas para concepto; incompletas para implementación | Faltan artefactos de versión, captura, cálculo, calidad y aplicabilidad. |
| Restricciones | Buen comienzo | AX-1–AX-10 deben complementarse con invariantes de versión, unidad, estado y reproducibilidad. |
| Escalabilidad | Prometedora | IDs, modularidad, particiones y versiones deben formalizarse antes de crecer. |
| Futuras versiones | Parcial | AX-9 reconoce el problema, pero falta modelar vigencia y sucesión de cada definición. |
| Software | Parcialmente compatible | Puede orientar un modelo de dominio, pero aún permite implementaciones divergentes. |
| Formularios manuales | Parcialmente compatible | Existe `Definición de formulario`, pero faltan campos, respuestas, reglas y control de versión como entidades separadas. |
| Motor matemático | Conceptualmente compatible | La cadena de derivación existe, pero faltan objetos explícitos de ejecución, parámetros, precisión y estado de cálculo. |

## 3. Consistencia interna

### 3.1 Fortalezas

- CO-1 establece una frontera clara entre definiciones y realizaciones.
- CO-2 y CO-4 ofrecen dos ejes ortogonales útiles: naturaleza temporal y función arquitectónica.
- AX-1, AX-2 y AX-10 forman un buen núcleo de identidad y trazabilidad.
- AX-4 expresa la no compensación como restricción y evita esconderla en una fórmula.
- AX-9 reconoce que la comparabilidad entre versiones no es automática.
- Las cuatro jerarquías se declaran separadas, lo que previene errores frecuentes de modelado.

### 3.2 Tensiones internas

1. **`Estándar GOEI (versión)` y metamodelo.** El texto llama al Estándar un metamodelo que define types. Técnicamente conviene distinguir:
   - el metamodelo ontológico que define qué clases pueden existir;
   - una edición o línea base del estándar;
   - los componentes definicionales contenidos o referenciados por esa edición.
   Sin esta separación, cambiar la ontología y publicar una nueva edición del estándar pueden parecer el mismo evento.

2. **`Observación / Medición`.** Se describe simultáneamente como acto ocurrente y como productor de un dato, y se marca `[O]→[P]`. Una misma entidad no debería ser a la vez el acto y su registro. Esta mezcla afecta evidencia, formularios y auditoría.

3. **`Valor de KPI`.** Se presenta como cualidad estimada y como estructura pasiva con valor crudo y normalizado. La cualidad estimada del establecimiento y el registro informacional que porta un número no son necesariamente la misma entidad.

4. **`Resultado GOEI`.** También combina estimación conceptual, puntaje, clasificación y estado de compuertas. Para un motor matemático puede necesitar una salida compuesta con componentes diferenciados.

5. **`Periodo` como `[O/región]`.** Una región temporal y un proceso temporal no tienen el mismo comportamiento. Conviene fijar una sola categoría ontológica y relacionarla con los ocurrentes.

6. **Ciclos de vida y naturaleza.** El texto anuncia ciclos de vida de “ocurrentes/dinámicos”, pero incluye continuantes y artefactos informacionales como Estándar, Establecimiento, Certificación y Definición de KPI. No es un error funcional, pero sí una inconsistencia de encabezado y clasificación.

## 4. Coherencia terminológica

La terminología central es consistente, especialmente `Definición de KPI` frente a `Valor de KPI`. Deben resolverse los siguientes términos compuestos:

| Término actual | Problema técnico | Recomendación conceptual para decisión posterior |
|---|---|---|
| Observación / Medición | dos actos potencialmente distintos y su dato asociado | separar acto de medición, observación registrada y valor observado |
| Perfil/Registro de establecimiento | perfil descriptivo y registro administrativo pueden divergir | definir si son uno o dos artefactos |
| fuente de dato / fuente / evidencia | tres conceptos usados sin taxonomía de procedencia | establecer vocabulario controlado y relaciones diferenciadas |
| resultado / puntaje / banda | salida numérica y clasificación se mezclan | modelar componentes del resultado |
| versión de estándar | puede significar edición, línea base o versión ontológica | fijar nombres y relaciones de versión |
| formulario/instrumento | plantilla abstracta, edición imprimible y respuesta no son equivalentes | separar definición, versión, instancia y respuesta |

Además, toda relación debe tener nombre canónico, inversa declarada cuando sea útil y una definición no circular.

## 5. Separación entre metamodelo, tipos e instancias

La separación declarada es correcta como principio, pero necesita al menos cuatro niveles técnicos:

```text
M2  Metamodelo GOEI       define clases, propiedades y reglas permitidas
M1  Modelo definicional   contiene KPI-def, categorías, reglas y formularios type
M0  Aplicación            contiene establecimiento, evaluación y registros token
P   Procedencia           registra quién, cómo, cuándo y con qué versión produjo M1/M0
```

El plano de procedencia no es un nivel de instanciación; es transversal. Esta separación permitiría que una misma ontología soporte múltiples ediciones del estándar sin duplicar el metamodelo.

También debe decidirse si `Dimensión`, `Categoría` y otras entidades son clases ontológicas, individuos de un vocabulario controlado o ambos mediante *punning*/patrones equivalentes. Un documento conceptual puede tolerar esa ambigüedad; un esquema ejecutable no.

## 6. Posibles redundancias

No se recomienda eliminar entidades en esta fase. Se identifican áreas que requieren normalización:

- `Dimensión` y `Sub-dimensión` podrían modelarse como una sola clase jerárquica con relación `parte_de`, salvo que tengan reglas diferentes.
- `Operación` y `Ejecución de proceso` necesitan una relación de composición y criterios de identidad que demuestren que no son niveles redundantes.
- `Establecimiento` y `Perfil/Registro` son justificables si uno representa la entidad y otro su descripción; esa diferencia debe hacerse explícita.
- `Auditoría` y `Evaluación` requieren un supertipo o propiedades compartidas si ambas usan actores, periodos, evidencias y estados.
- `No conformidad` y `Hallazgo` no siempre son equivalentes: un hallazgo puede confirmar conformidad o ser observación neutral. El uso combinado debe aclararse.
- `Regla crítica` y una futura regla general de decisión podrían compartir una abstracción sin perder el carácter no compensatorio.

## 7. Relaciones faltantes

Relaciones candidatas para evaluación arquitectónica posterior:

1. `componente_definicional incluido_en version_estandar` con vigencia desde/hasta;
2. `version_estandar basada_en version_ontologia`;
3. `definicion sustituye / es_sustituida_por definicion`;
4. `evaluacion usa conjunto_aplicabilidad` congelado para su versión y categoría;
5. `observacion realizada_por actor` y `capturada_con instrumento_version`;
6. `registro_de_medicion representa acto_de_medicion`;
7. `evidencia custodiada_por`, `generada_por` y `verifica afirmacion`;
8. `valor_KPI calculado_mediante regla_calculo` y `ejecucion_calculo`;
9. `resultado compuesto_por resultados_de_dimension`;
10. `regla_critica evaluada_en evaluacion` con resultado de regla explícito;
11. `formulario_version implementa definicion_instrumento`;
12. `respuesta_formulario instancia campo_definido`;
13. `unidad_de_medida aplicable_a variable` y conversión autorizada;
14. `hallazgo referencia requisito` y evidencia;
15. `actor desempeña rol durante actividad`, evitando fijar personas a roles permanentes.

## 8. Entidades faltantes

### 8.1 Para versionado y gobernanza semántica

- `Versión de ontología`;
- `Componente definicional versionado`;
- `Conjunto de aplicabilidad` o *profile* de evaluación;
- `Mapa de compatibilidad` como entidad, no solo atributo;
- `Decisión de origen` y `Fuente de evidencia` enlazables desde cada definición;
- `Estado de vigencia` con fechas de efecto.

### 8.2 Para medición y formularios

- `Acto de medición`;
- `Registro de observación`;
- `Campo de instrumento`;
- `Versión de instrumento`;
- `Respuesta de formulario`;
- `Unidad de medida`;
- `Regla de validación de dato`;
- `Estado de calidad del dato`;
- `Motivo de ausencia` y `estado de aplicabilidad`.

### 8.3 Para el motor matemático

- `Regla de cálculo`;
- `Modelo de agregación`;
- `Asignación de ponderación`;
- `Conjunto de parámetros`;
- `Ejecución de cálculo`;
- `Resultado de dimensión`;
- `Resultado de regla crítica`;
- `Política de precisión y redondeo`;
- `Estado de cálculo` — calculable, incompleto, inválido o no aplicable;
- `Traza de cálculo`.

Estas son necesidades arquitectónicas candidatas. Incorporarlas a la ontología exige decisión formal; el informe no las incorpora.

## 9. Restricciones adicionales candidatas

| Área | Restricción recomendada |
|---|---|
| Identidad | IDs globalmente únicos, inmutables y no reutilizables. |
| Versión | Una evaluación cerrada usa una sola línea base inmutable y versiones compatibles de todos sus componentes. |
| Vigencia | Ningún componente fuera de vigencia puede entrar en una evaluación nueva salvo regla explícita de transición. |
| Cardinalidad | Toda relación nuclear declara mínimo y máximo. |
| Taxonomía | La jerarquía `is-a` y la jerarquía `part-of` deben ser acíclicas. |
| Unidades | Todo valor cuantitativo declara unidad; toda conversión usa una regla identificada. |
| Aplicabilidad | Cada KPI aplicable tiene exactamente uno de los estados: medido, ausente justificado, inválido o no aplicable. |
| Procedencia | Todo dato y resultado registra actor o sistema, método, instrumento, tiempo y fuente. |
| Cierre | Una evaluación finalizada es inmutable; una corrección crea revisión enlazada. |
| Cálculo | Misma entrada, línea base y parámetros producen la misma salida, incluida precisión y redondeo. |
| Evidencia | La evidencia tiene integridad verificable, custodia y política de acceso. |
| Formularios | Cada respuesta referencia exactamente un campo y una versión del instrumento. |
| Reglas críticas | Cada regla aplicable produce un resultado explícito antes de clasificar el resultado global. |
| Comparabilidad | Un mapa de compatibilidad declara alcance, dirección y limitaciones; su existencia no implica equivalencia total. |

## 10. Escalabilidad y futuras versiones

La ontología puede escalar si evita enumeraciones cerradas dentro del esquema y trata categorías, KPI, reglas, unidades e instrumentos como componentes versionados. Para diez años de evolución se requieren:

- namespaces estables y resolubles;
- separación entre ID conceptual y versión;
- desactivación lógica en lugar de borrado;
- paquetes o módulos con dependencias explícitas;
- perfiles por categoría sin duplicar definiciones comunes;
- compatibilidad direccional entre versiones;
- migraciones documentadas para datos históricos;
- vocabularios multilingües donde las etiquetas cambien sin cambiar la identidad.

Debe evitarse que un cambio editorial de etiqueta genere una entidad nueva o que un cambio semántico conserve silenciosamente la misma versión.

## 11. Compatibilidad con software

### 11.1 Evaluación

La ontología es traducible a un modelo de dominio, pero aún no debe convertirse directamente en tablas de base de datos. Primero requiere un diccionario de clases y propiedades con:

- ID, definición, superclase y disjunciones;
- dominio, rango y cardinalidad;
- reglas de identidad;
- estado y alcance de versión;
- restricciones comprobables;
- ejemplos positivos y negativos.

### 11.2 Patrón técnico recomendado

Mantener tres artefactos sincronizados:

1. especificación conceptual legible por personas;
2. esquema lógico procesable por máquinas;
3. esquema de intercambio para evaluaciones y resultados.

Ninguno debe convertirse en fuente independiente. La especificación aprobada gobierna; los esquemas la implementan y se verifican mediante pruebas de conformidad.

### 11.3 Riesgos de implementación directa

- herencia incorrecta entre type y token;
- pérdida de procedencia al guardar solo números;
- mutación retroactiva de evaluaciones al actualizar un KPI-def;
- uso de `null` para mezclar ausencia, invalidez y no aplicabilidad;
- cálculos diferentes entre implementaciones por falta de precisión y redondeo;
- acoplamiento de certificación a evaluación antes de decidir el esquema institucional.

## 12. Compatibilidad con formularios manuales

La arquitectura es compatible con operación manual porque ya reconoce definiciones de instrumentos, observaciones y evidencia. Para que dos evaluadores produzcan registros equivalentes, el futuro modelo debe representar explícitamente:

- versión visible del formulario;
- código estable de cada campo;
- unidad y formato de respuesta;
- instrucciones y ventana temporal;
- obligatoriedad y aplicabilidad;
- motivo normalizado de ausencia;
- responsable, fecha y firma o validación equivalente;
- vínculo entre campo, variable y KPI-def;
- correcciones sin sobreescribir el valor original.

El papel puede ser una representación de la misma definición de instrumento usada por software. No debe existir una ontología paralela para formularios manuales.

## 13. Compatibilidad con motor matemático

La cadena `Observación → Valor de KPI → Resultado de dimensión → Resultado GOEI` es apropiada, pero el motor necesita un contrato explícito:

```text
Entradas versionadas
  + conjunto de aplicabilidad
  + reglas y parámetros
  + política de precisión
  → ejecución de cálculo identificada
  → resultados parciales
  → resultados de reglas críticas
  → resultado global y clasificación
  + traza reproducible
```

El motor debe poder explicar cada salida, detectar entradas incompletas y reproducir resultados históricos usando la línea base original. La fórmula por sí sola no basta; la configuración ejecutada también forma parte de la evidencia.

## 14. Recomendaciones arquitectónicas priorizadas

### 14.1 Críticas — antes de formalizar software o modelo matemático

| ID | Recomendación | Riesgo que evita |
|---|---|---|
| RA-ONT-C01 | Separar formalmente metamodelo, versión de ontología, edición del estándar y componentes definicionales. | versiones incompatibles y semántica circular |
| RA-ONT-C02 | Separar acto de medición, registro observado y valor representado. | pérdida de auditabilidad y errores en formularios/base de datos |
| RA-ONT-C03 | Definir versionado y vigencia de cada entidad definicional, con evaluación ligada a una línea base inmutable. | modificación retroactiva de resultados |
| RA-ONT-C04 | Especificar dominio, rango y cardinalidad de todas las relaciones nucleares. | implementaciones divergentes |
| RA-ONT-C05 | Modelar aplicabilidad, ausencia, invalidez y no calculabilidad como estados distintos. | resultados matemáticos falsamente completos |
| RA-ONT-C06 | Crear el contrato de procedencia y traza desde dato hasta resultado. | imposibilidad de auditoría y reproducción |
| RA-ONT-C07 | Definir entidades de ejecución matemática, parámetros, precisión, redondeo y resultados parciales. | cálculos diferentes con la misma evidencia |

### 14.2 Importantes — antes de pilotos operativos amplios

| ID | Recomendación | Beneficio |
|---|---|---|
| RA-ONT-I01 | Normalizar términos compuestos y publicar un diccionario canónico de clases y relaciones. | coherencia humana y técnica |
| RA-ONT-I02 | Separar definición, versión, campo, instancia y respuesta de instrumentos. | equivalencia entre papel y software |
| RA-ONT-I03 | Convertir el mapa de compatibilidad en entidad versionada y direccional. | comparación histórica controlada |
| RA-ONT-I04 | Introducir unidades y conversiones como objetos controlados. | interoperabilidad y cálculo seguro |
| RA-ONT-I05 | Definir reglas de identidad y sucesión para todas las entidades versionables. | mantenimiento a largo plazo |
| RA-ONT-I06 | Revisar `Hallazgo` frente a `No conformidad` y evaluación frente a auditoría. | evita equivalencias institucionales prematuras |
| RA-ONT-I07 | Modularizar núcleo, medición, evaluación, conformidad y procedencia. | escalabilidad y menor acoplamiento |

### 14.3 Deseables — madurez e interoperabilidad internacional

| ID | Recomendación | Beneficio |
|---|---|---|
| RA-ONT-D01 | Definir namespaces persistentes y estrategia multilingüe de etiquetas. | internacionalización sin pérdida de identidad |
| RA-ONT-D02 | Publicar representaciones procesables por máquinas derivadas de la fuente humana. | interoperabilidad y validación automática |
| RA-ONT-D03 | Crear ejemplos positivos, negativos y casos límite por restricción. | pruebas y formación |
| RA-ONT-D04 | Incorporar SHACL, JSON Schema u otro lenguaje solo después de aprobar el modelo lógico. | control automatizado sin anticipar decisiones |
| RA-ONT-D05 | Mantener catálogo de patrones de modelado y decisiones arquitectónicas. | consistencia entre módulos futuros |
| RA-ONT-D06 | Definir política de extensiones externas y perfiles nacionales. | evita fragmentación del estándar |

## 15. Secuencia recomendada para decisiones posteriores

1. Resolver RA-ONT-C01 a C03: capas y versionado.
2. Crear diccionario formal y resolver RA-ONT-C04 a C06.
3. Definir contrato matemático RA-ONT-C07 sin decidir todavía fórmulas.
4. Diseñar el modelo de instrumentos y datos manuales.
5. Modularizar y crear esquema lógico.
6. Solo entonces implementar software o serialización formal.

Esta secuencia es una recomendación de ingeniería. Cada incorporación a la ontología debe quedar autorizada por una decisión oficial y registrada con análisis de impacto.
