# Auditoría de preparación para resolución e integración D-008 / B1

| Campo | Valor |
|---|---|
| Identificador | `GOEI-AUDIT-0003` |
| Fecha de corte | 2026-08-04 |
| Alcance | D-008, cierre B1 y `GOEI-ISS-043` |
| Autor | Oficina Técnica GOEI |
| Naturaleza | Control técnico consultivo; sin efectos normativos |
| Resultado | Expediente listo para decisión directiva; integración normativa bloqueada hasta resolución formal |

> Esta auditoría no ratifica D-008, no cierra B1, no clasifica residuos/merma, no crea el catálogo normativo de procesos y no habilita B2.

## 1. Dictamen ejecutivo

El expediente científico D-008 contiene una aprobación metodológica explícita del Comité Científico y declara cerrada B1 en su **pregunta nuclear**. Esa declaración científica todavía no equivale a decisión oficial del proyecto: falta la ratificación de la Dirección General prevista por la gobernanza vigente.

El borrador `GOEI_DIR_RES_D008_B1_BORRADOR.md` es técnicamente suficiente para que la autoridad seleccione una de tres salidas: ratificar, devolver o rechazar. No se detecta un vacío técnico que justifique detener su presentación.

`GOEI-ISS-043` no impide necesariamente resolver la pregunta nuclear de B1 porque el propio Comité lo aisló como una clasificación pendiente y declaró que no bloquea el hallazgo nuclear. Sí impide incorporar residuos/merma como macroproceso, proceso transversal definitivo o subproceso normativo. La decisión sobre si esa reserva es compatible con el cierre de B1 pertenece a la Dirección General, no a la Oficina Técnica.

## 2. Estado de autoridad por elemento

| Elemento | Autoridad existente | Estado comprobado | Efecto permitido |
|---|---|---|---|
| D-007 | Registro de decisiones | Provisional / hipótesis | Antecedente; no baseline |
| D-008 | Comité Científico | Aprobada científicamente dentro del expediente; no registrada como decisión oficial | Puede someterse a Dirección |
| Pregunta nuclear B1 | Comité Científico | Declarada cerrada científicamente | Pendiente de cierre oficial directivo |
| Alcance comercial y no comercial (`ISS-012`) | Respuesta científica en D-008 | Propuesta favorable pendiente de ratificación | No cerrar Issue todavía |
| Estructura en dos niveles (`ISS-013`) | Respuesta científica en D-008 | Propuesta favorable pendiente de ratificación | No cerrar Issue todavía |
| Resolución D-008/B1 (`ISS-030`) | Dirección General | Pendiente | Bloquea integración y B2 |
| Residuos/merma (`ISS-043`) | Comité Científico + ratificación posterior | Candidato; clasificación no resuelta | Excluir de toda población normativa definitiva |
| PRISMA completa | Comité identifica limitación | Sin disposición directiva sobre prerrequisito o validación posterior | Debe seleccionarse en la resolución |
| Delphi | Comité identifica validación pendiente | Sin disposición directiva sobre prerrequisito o validación posterior | Debe seleccionarse en la resolución |
| Baseline de procesos | Ninguna autoridad efectiva | Identidad `GOEI-BSL-PROC-0001 v0.1.0` solo propuesta | No crear antes de ratificación |
| B2 | Pipeline técnico preparado | Bloqueada | No iniciar ciencia dependiente de B1 |

## 3. Completitud del paquete de resolución

| Control | Estado | Evidencia o acción restante |
|---|---|---|
| Expediente científico identificable | Conforme | `entradas_comite/GOEI_SCI_HANDOFF_D008_Cierre_B1.md` |
| Auditoría técnica previa | Conforme | `GOEI-AUDIT-0002` |
| Opciones mutuamente excluyentes | Conforme | Apartado 3 del borrador de resolución |
| Disposición de `ISS-012`, `013`, `030` y `043` | Conforme como propuesta | La autoridad debe seleccionar una opción |
| Tratamiento PRISMA y Delphi | Preparado | La autoridad debe marcar una disposición para cada actividad |
| Versión objetivo condicionada | Conforme | Solo existe para la opción A |
| Mandato de integración condicionado | Conforme | Solo se activa tras aprobación verificable |
| Firma, fecha y autoridad | Pendiente crítico | Requiere acto explícito de Dirección General |
| Clasificación de residuos/merma | Pendiente científico selectivo | No completar por inferencia; mantener `ISS-043` |

## 4. Separación de bloqueos

### Bloqueo de rama completa

`GOEI-ISS-030` bloquea:

- incorporación de D-008 al registro oficial;
- creación de la baseline de procesos;
- declaración oficial de cierre B1;
- promoción del núcleo a catálogo normativo;
- activación científica de B2.

### Bloqueo selectivo

`GOEI-ISS-043` bloquea exclusivamente:

- asignar una clase normativa a residuos/merma;
- incorporarlo como proceso oficial en la baseline;
- declarar resuelta su ubicación en el catálogo;
- construir descendientes que dependan de esa clasificación.

No bloquea el mantenimiento del MetaModelo Universal vacío, la trazabilidad, los validadores, el diseño del handoff ni la preparación de la integración.

## 5. Inconsistencias documentales detectadas

1. `GOEI_HANDOFF_0001_B1_Procesos_Universales.md` conserva el estado anterior a la subsanación bibliográfica y señala que D-008 es un texto propuesto sin decisión científica aprobada. La fuente más reciente demuestra que el Comité la declaró aprobada científicamente, aunque siga sin ratificación normativa.
2. Algunos reportes históricos describen D-008 simplemente como “propuesta no aprobada”. Son correctos para su fecha de corte, pero no deben utilizarse como estado vigente sin considerar el expediente posterior y `GOEI-AUDIT-0002`.
3. El Estado Maestro menciona “reservas bibliográficas” pese a que el addendum de `GOEI-AUDIT-0002` declara subsanado el cotejo. La reserva vigente es metodológica —PRISMA/Delphi— y científica selectiva —residuos/merma—, no de completitud de las tres referencias.

Estas inconsistencias son de sincronización documental. No alteran la decisión pendiente ni autorizan corregir registros maestros sin el flujo de integración coordinado.

## 6. Secuencia técnica preparada para cada salida

### Si Dirección ratifica D-008

1. preservar el acto firmado o su mecanismo verificable;
2. asignar identificador definitivo a la resolución;
3. registrar D-008 con alcance, autoridad, reservas y dependencias exactas;
4. disponer los Issues conforme a la resolución, manteniendo `ISS-043` abierto si así se ordena;
5. crear `GOEI-BSL-PROC-0001 v0.1.0` sin poblar residuos/merma como clase definitiva;
6. actualizar componentes, trazabilidad, Knowledge Graph, BOK, Estado Maestro, roadmap y CHANGELOG;
7. ejecutar validadores y prueba de no regresión;
8. emitir handoff técnico de apertura de B2.

### Si Dirección devuelve D-008

1. registrar la devolución y sus requisitos exactos;
2. mantener B1 y B2 bloqueadas;
3. remitir al Comité únicamente las subsanaciones seleccionadas;
4. actualizar condiciones de reanudación sin modificar ciencia.

### Si Dirección rechaza D-008

1. registrar el rechazo y su fundamento;
2. cerrar `ISS-030` respecto de D-008;
3. abrir Issue sucesor para un nuevo expediente B1;
4. mantener fuera de normativa todos los contenidos candidatos;
5. preservar `ISS-043` o reasignarlo según la resolución.

## 7. Controles previos de integración

Antes de ejecutar la opción A deberán verificarse conjuntamente:

- exactamente una opción seleccionada;
- firma o aprobación verificable y fecha efectiva;
- coherencia entre opción principal y tratamiento PRISMA/Delphi;
- disposición inequívoca de los cuatro Issues;
- ausencia de colisión de `GOEI-BSL-PROC-0001` y `0.1.0`;
- delimitación explícita de residuos/merma como candidato no normativo mientras `ISS-043` siga abierto;
- preservación de D-006 Ontology Baseline v0.1;
- prohibición de inferir taxonomías, KPI, fórmulas o ponderaciones.

## 8. Bloqueador preciso y condición de reanudación

El único bloqueo crítico para continuar la rama normativa B1 es una **resolución verificable de la Dirección General** que seleccione una opción del borrador, disponga PRISMA y Delphi, determine el estado de los Issues, defina la versión objetivo cuando corresponda e identifique fecha y autoridad.

La clasificación de residuos/merma permanece como dependencia científica separada bajo `GOEI-ISS-043`. Hasta su resolución no debe aparecer como elemento normativo definitivo, aunque la Dirección puede decidir si admite cerrar solo la pregunta nuclear de B1 con esa reserva abierta.

