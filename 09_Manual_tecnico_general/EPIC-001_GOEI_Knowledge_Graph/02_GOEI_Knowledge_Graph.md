# GOEI Knowledge Graph

| Campo | Valor |
|---|---|
| Identificador | GOEI-KG-0001 |
| Estado | Diseño lógico |
| Versión | 0.1.0-draft |
| Modelo | Grafo dirigido, tipado, versionado y con procedencia |

## 1. Unidad del grafo

Cada afirmación se representa como una aserción identificable:

`sujeto — relación → objeto + procedencia + autoridad + intervalo de vigencia`

La procedencia pertenece a la aserción, no solo a los nodos. Dos fuentes pueden sostener relaciones diferentes entre los mismos elementos.

## 2. Subgrafos

| Subgrafo | Nodos principales | Pregunta que responde |
|---|---|---|
| Autoridad | Constitución, Organización, Agente, Decisión | ¿quién podía decidir? |
| Evidencia | Fuente, Evidencia, Investigación, Observación, Hipótesis, Debate | ¿por qué se consideró? |
| Construcción | Decisión, Componente, Requisito, Regla, Ontología, Taxonomía, Proceso, KPI, Fórmula | ¿qué creó o cambió la decisión? |
| Documentación | Documento, Manual, Formulario, Anexo, BOK, Standard | ¿dónde está expresado? |
| Validación | Validación, Evidencia, Componente, Línea base | ¿qué fue comprobado y con qué alcance? |
| Evolución | Issue, Registro de cambio, Versión, Línea base, Release | ¿cuándo cambió y qué sigue vigente? |
| Difusión | Publicación, Tesis, BOK | ¿cómo se comunicó o sintetizó? |

## 3. Caminos canónicos

### 3.1 De evidencia a estándar

`Fuente → Evidencia → Investigación/Debate → Decisión → Componente/Requisito → Documento → Standard → Versión → Línea base → Release`

### 3.2 De issue a resolución

`Issue → bloquea → Rama/Componente → requiere_decisión → Decisión → resuelve → Issue → desbloquea → Registro de cambio`

### 3.3 De estándar a evidencia

`Requisito → autorizado_por → Decisión → informado_por → Evidencia → extraída_de → Fuente`

### 3.4 De resultado académico a fuente normativa

`Tesis/Publicación → deriva_de → {Investigación, Standard, Versión}`. Está prohibido recorrer la inversa como autoridad normativa salvo nueva Decisión explícita.

## 4. Perspectiva temporal

El grafo conserva cuatro tiempos:

- tiempo del hecho o actividad;
- tiempo de registro;
- tiempo de vigencia;
- tiempo de conocimiento, cuando el GOEI conoció la aserción.

Una consulta histórica debe reconstruir el grafo **como era válido** en una fecha o línea base, no solo mostrar el estado actual.

## 5. Perspectiva de versiones

Los conceptos persistentes y sus realizaciones se separan:

```text
Componente conceptual
  ├─ tiene_version → v1.0.0
  ├─ tiene_version → v1.1.0
  └─ tiene_version → v2.0.0

Línea base GOEI X
  └─ fija_version → v1.1.0
```

No se enlaza una evaluación, manual o publicación a “la versión más reciente”; se enlaza a una versión exacta o línea base.

## 6. Procedencia de una arista

Toda arista normativa o científica debe registrar:

- ID de aserción;
- fuente o decisión que la autoriza;
- agente que la registró;
- fecha de registro;
- versión de origen y destino;
- estado: propuesta, aceptada, rechazada, sustituida;
- confianza solo si existe un método aprobado; de lo contrario, no se asigna.

## 7. Tratamiento de vacíos

Cuando una relación necesaria no puede establecerse:

1. no se crea una arista hipotética;
2. se crea un `Issue` con pregunta exacta;
3. se enlaza `Issue —bloquea→ entidad/relación`;
4. se marca el alcance transitivo afectado;
5. las demás ramas continúan;
6. solo una resolución registrada permite desbloquear.

## 8. Vistas de consumo

- **Vista científica:** fuentes, evidencia, hipótesis, debates y decisiones.
- **Vista normativa:** decisiones, requisitos, reglas, componentes y Standard.
- **Vista técnica:** componentes, dependencias, versiones, validaciones e issues.
- **Vista editorial:** documentos, manuales, anexos, BOK, publicaciones y traducciones.
- **Vista histórica:** cambios, sustituciones, líneas base y releases.

Todas son proyecciones del mismo grafo; ninguna mantiene datos duplicados como fuente independiente.
