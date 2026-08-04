# Arquitectura del repositorio oficial GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-ARCH-002 |
| Tipo | Diseño de repositorio |
| Estado | Propuesta para adopción |
| Alcance | Estructura y reglas de gestión documental; no contiene el estándar |
| Versión documental | 0.1.0-draft |
| Horizonte de diseño | Diez años o más |
| Sustituye | No sustituye todavía a GOEI-ARCH-001 |

## 1. Criterios de diseño

La estructura propuesta aplica seis criterios técnicos:

1. separar autoridad, investigación, norma, aplicación y productos derivados;
2. mantener una única ubicación canónica por artefacto;
3. separar el contenido vigente de borradores e historia;
4. permitir versiones simultáneas y traducciones sin duplicar la fuente normativa;
5. almacenar contenido legible por personas junto con metadatos procesables por máquinas;
6. conservar trazabilidad bidireccional entre evidencia, decisión, requisito, artefacto y versión publicada.

## 2. Árbol canónico propuesto

```text
GOEI/
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── CITATION.cff
├── LICENSES/
│   └── README.md
├── 00_gobernanza/
│   ├── constitucion/
│   ├── organos_y_roles/
│   ├── politicas/
│   ├── decisiones/
│   │   ├── propuestas/
│   │   ├── aprobadas/
│   │   ├── rechazadas/
│   │   └── sustituidas/
│   ├── actas/
│   ├── conflictos_de_interes/
│   ├── control_de_cambios/
│   └── registros_maestros/
├── 01_investigacion/
│   ├── agenda/
│   ├── protocolos/
│   ├── revisiones/
│   ├── informes/
│   ├── datos/
│   │   ├── diccionarios/
│   │   ├── anonimizados/
│   │   └── acceso_restringido/
│   └── reproducibilidad/
├── 02_bibliografia/
│   ├── catalogo/
│   ├── fichas_de_fuente/
│   ├── normativa_y_regulacion/
│   ├── copias_legales/
│   └── fuentes_descartadas/
├── 03_estandar/
│   ├── borradores/
│   ├── candidatos/
│   ├── vigente/
│   ├── modulos_normativos/
│   ├── modulos_informativos/
│   ├── referencias_normativas/
│   └── traducciones/
├── 04_ontologia/
│   ├── conceptual/
│   ├── terminologia/
│   ├── modelos_formales/
│   ├── esquemas/
│   ├── reglas_de_integridad/
│   ├── mapeos/
│   └── ejemplos_no_normativos/
├── 05_taxonomia/
│   ├── modelo/
│   ├── categorias/
│   ├── reglas_de_clasificacion/
│   ├── correspondencias/
│   └── historial/
├── 06_procesos/
│   ├── arquitectura/
│   ├── catalogo/
│   ├── relaciones/
│   └── representaciones/
├── 07_kpi/
│   ├── criterios_de_admisibilidad/
│   ├── catalogo/
│   ├── variables_y_metricas/
│   ├── aplicabilidad/
│   ├── estados_de_referencia/
│   └── retirados/
├── 08_modelo_matematico/
│   ├── especificacion/
│   ├── normalizacion/
│   ├── ponderacion/
│   ├── agregacion/
│   ├── reglas_criticas/
│   ├── precision_y_redondeo/
│   └── casos_de_prueba/
├── 09_instrumentos/
│   ├── formularios_fuente/
│   ├── instrucciones/
│   ├── hojas_de_calculo/
│   ├── versiones_imprimibles/
│   ├── traducciones/
│   └── ejemplos_no_normativos/
├── 10_validacion/
│   ├── marco/
│   ├── protocolos/
│   ├── pilotos/
│   ├── resultados/
│   ├── reproducibilidad/
│   ├── sensibilidad_y_robustez/
│   └── expedientes_de_liberacion/
├── 11_conformidad/
│   ├── evaluacion/
│   ├── auditoria/
│   ├── competencia/
│   ├── certificacion/
│   └── imparcialidad_y_apelaciones/
├── 12_publicaciones/
│   ├── articulos/
│   ├── ponencias/
│   ├── informes_publicos/
│   └── materiales_de_difusion/
├── 13_tesis/
│   ├── protocolo/
│   ├── capitulos/
│   ├── anexos/
│   └── entregas/
├── 14_anexos/
│   ├── normativos/
│   ├── informativos/
│   ├── tablas/
│   └── diagramas/
├── 15_versiones_e_historial/
│   ├── lineas_base/
│   ├── notas_de_version/
│   ├── compatibilidad/
│   ├── migraciones/
│   └── retiradas/
├── 16_herramientas/
│   ├── plantillas/
│   ├── esquemas_de_metadatos/
│   ├── validadores/
│   ├── generadores/
│   └── pruebas/
└── 99_archivo/
    ├── documentos_heredados/
    ├── borradores_abandonados/
    └── migraciones_del_repositorio/
```

Este árbol es el destino canónico. Los archivos existentes no deben moverse hasta aprobar y registrar un plan de migración con tabla ruta-origen/ruta-destino, redirecciones y comprobación de enlaces.

## 3. Función y frontera de cada carpeta raíz

| Carpeta | Función exclusiva | No debe contener |
|---|---|---|
| `00_gobernanza` | autoridad, reglas institucionales, decisiones y registros maestros | resultados científicos no aprobados como decisiones |
| `01_investigacion` | trabajo científico, protocolos, datos e informes que pueden sustentar decisiones | requisitos normativos vigentes |
| `02_bibliografia` | procedencia, metadatos y custodia legal de fuentes | conclusiones sin expediente de investigación |
| `03_estandar` | corpus normativo e informativo publicado o candidato | investigación exploratoria, tesis o borradores personales |
| `04_ontologia` | semántica, entidades, relaciones, axiomas, vocabularios y esquemas | valores concretos de KPI no aprobados |
| `05_taxonomia` | clasificación de establecimientos y reglas de pertenencia | mapas de procesos o fórmulas |
| `06_procesos` | arquitectura y catálogo de procesos del dominio | mediciones o resultados de aplicación |
| `07_kpi` | definiciones de KPI, variables, admisibilidad y aplicabilidad | observaciones de establecimientos reales |
| `08_modelo_matematico` | especificación reproducible de cálculo y casos de prueba | decisiones científicas sin registrar |
| `09_instrumentos` | formularios y herramientas manuales derivadas del estándar | reglas que existan únicamente en el formulario |
| `10_validacion` | pruebas, pilotos, robustez y expedientes de liberación | cambios normativos no aprobados |
| `11_conformidad` | reglas y evidencias para evaluar cumplimiento | contenido del núcleo duplicado |
| `12_publicaciones` | productos científicos o públicos derivados | única copia de una regla normativa |
| `13_tesis` | desarrollo académico derivado del estándar | autoridad sobre el estándar |
| `14_anexos` | anexos compartidos clasificados por naturaleza | material sin documento principal y propietario |
| `15_versiones_e_historial` | líneas base, compatibilidad, migraciones y retiradas | archivos de trabajo activos |
| `16_herramientas` | automatización, plantillas, esquemas y controles de calidad | fuente normativa humana única |
| `99_archivo` | custodia inmutable de material heredado o abandonado | documentos vigentes |

## 4. Reglas de nombrado

### 4.1 Carpetas y archivos

- Codificación UTF-8 y finales de línea LF.
- Rutas canónicas en minúsculas, sin tildes y con guion bajo: `modelo_matematico/`.
- Archivos controlados: `{id}__{titulo_corto}__{idioma}.{extension}`.
- Ejemplo estructural: `goei-dec-0007__unidad_de_analisis__es.md`.
- `titulo_corto` usa minúsculas, ASCII, guion bajo y máximo recomendado de 80 caracteres para el nombre completo.
- Idioma mediante BCP 47 abreviado cuando baste: `es`, `en`, `pt-BR`.
- No incluir estado, fecha ni número de versión en el nombre del archivo canónico; esos datos viven en metadatos y Git.
- Las instantáneas publicadas pueden incorporar la versión en `15_versiones_e_historial/lineas_base/`.

### 4.2 Identificadores persistentes

Formato: `GOEI-{CLASE}-{NNNN}`. El identificador es inmutable y nunca se reutiliza.

| Clase | Uso |
|---|---|
| `CON` | Constitución y documentos fundacionales |
| `DEC` | decisión científica o institucional |
| `POL` | política de gobernanza |
| `STD` | documento o módulo del estándar |
| `ONT` | componente ontológico |
| `TAX` | componente taxonómico |
| `PRC` | definición de proceso |
| `KPI` | definición de KPI type |
| `MET` | variable o métrica type |
| `MAT` | regla o componente matemático |
| `FRM` | instrumento o formulario |
| `VAL` | protocolo o expediente de validación |
| `SRC` | ficha bibliográfica |
| `PUB` | publicación derivada |
| `REV` | revisión técnica o científica |
| `CHG` | solicitud o expediente de cambio |
| `ISS` | pregunta abierta o bloqueo |

Los identificadores de clase no conceden estatus normativo.

### 4.3 Decisiones

- ID canónico: `GOEI-DEC-NNNN`.
- Título: una pregunta o acción decidible, no un tema amplio.
- Estados: `propuesta`, `en_revision`, `aprobada`, `rechazada`, `sustituida`, `retirada`.
- Una decisión contiene una sola resolución principal.
- Una decisión aprobada es inmutable. Una corrección sustantiva requiere otra decisión que la sustituya.
- Toda decisión señala evidencia, autoridad, fecha, alcance, versión objetivo, componentes afectados y decisiones sustituidas.

## 5. Versiones

Se controlan por separado:

| Nivel | Convención | Propósito |
|---|---|---|
| Repositorio | Git commit y etiqueta firmada | historia exacta del conjunto de archivos |
| Documento/componente | SemVer `MAYOR.MENOR.PARCHE` | evolución semántica del artefacto |
| Línea base GOEI | `GOEI YYYY.M` o esquema que apruebe gobernanza | edición integrada del estándar |
| Esquema legible por máquina | versión propia enlazada a la ontología | compatibilidad técnica |

Regla provisional para componentes:

- `MAYOR`: ruptura de significado, contrato o comparabilidad;
- `MENOR`: ampliación compatible aprobada;
- `PARCHE`: corrección sin cambio semántico;
- sufijos `draft`, `rc.N` y `deprecated` para estados no vigentes.

La versión de una traducción debe declarar exactamente qué versión fuente traduce. La traducción no crea una versión científica distinta.

## 6. Metadatos obligatorios

Cada documento controlado debe declarar en un bloque uniforme:

`id`, `titulo`, `tipo`, `estado`, `naturaleza`, `idioma`, `version_documental`, `version_goei`, `fecha`, `autores`, `revisores`, `aprobador`, `decisiones_origen`, `evidencia`, `dependencias`, `dependientes`, `sustituye`, `sustituido_por`, `licencia` y `checksum_de_publicacion` cuando corresponda.

Los metadatos deberán poder representarse en Markdown y en un esquema estructurado futuro, sin que el esquema reemplace el documento humano.

## 7. Modelo de ramas y publicaciones

- `main`: historia protegida de material aprobado o administrativo estable.
- ramas cortas: `proposal/GOEI-DEC-NNNN-descripcion` o `change/GOEI-CHG-NNNN-descripcion`.
- toda modificación entra mediante revisión trazable;
- las versiones oficiales usan etiquetas firmadas y un manifiesto con checksums;
- no se reescribe la historia de una versión publicada;
- correcciones posteriores se publican como nueva versión o errata vinculada.

La aprobación científica no se deduce de la fusión de una rama: debe existir una decisión aprobada.

## 8. Historial y archivo

- Git conserva cambios textuales; `15_versiones_e_historial` conserva líneas base y relaciones de compatibilidad.
- `99_archivo` conserva material fuera de circulación y nunca actúa como fuente vigente.
- Las eliminaciones lógicas usan estados `sustituido` o `retirado`; no se destruye la evidencia histórica.
- Los datos sensibles o restringidos no se almacenan en el repositorio público. Se conserva un registro de custodia y acceso.

## 9. Reglas de dependencia

```text
bibliografia → investigacion → decision → ontologia/nucleo → instrumentos
                                      ↘ validacion ↗
nucleo + validacion → estandar publicado → publicaciones/tesis
```

- Ningún artefacto derivado puede modificar su fuente.
- Un formulario no puede introducir reglas ausentes del núcleo.
- Una implementación de software no puede ser la única definición del cálculo.
- Una tesis o artículo no puede ser fuente normativa única.
- Todo componente normativo debe enlazar una decisión aprobada.

## 10. Controles de calidad del repositorio

El repositorio deberá incorporar validaciones automáticas para:

- IDs duplicados o referencias rotas;
- metadatos obligatorios ausentes;
- estados o tipos no permitidos;
- dependencias circulares;
- decisiones inexistentes o no aprobadas;
- enlaces internos y citas incompletas;
- divergencia entre formularios, esquemas y documento fuente;
- cambios normativos sin expediente `GOEI-CHG`;
- versiones publicadas sin manifiesto ni checksum.

## 11. Migración desde la estructura actual

La migración debe ser una operación separada y aprobada. Secuencia mínima:

1. congelar inventario y checksums;
2. asignar IDs y metadatos a documentos heredados sin cambiar su contenido;
3. aprobar tabla de correspondencias de rutas;
4. mover archivos conservando historial cuando exista Git;
5. actualizar enlaces y registros maestros;
6. ejecutar controles de integridad;
7. conservar un manifiesto de migración en `99_archivo/migraciones_del_repositorio/`.

No se ejecutó esta migración en esta fase.
