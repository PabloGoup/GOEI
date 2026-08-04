# GOEI MetaModel

| Campo | Valor |
|---|---|
| Identificador | GOEI-MM-0001 |
| Estado | Propuesta arquitectónica |
| Versión | 0.1.0-draft |
| Dependencias | D-006, D-006-REV, GOEI-ARCH-001 y GOEI-ARCH-002 |
| Naturaleza | Metamodelo de gestión de conocimiento; no es ontología científica del dominio |

## 1. Propósito

Definir las clases de conocimiento que puede administrar el GOEI, sus contratos, relaciones, restricciones y trazabilidad. El metamodelo gobierna **cómo se registra** un elemento; no decide **qué afirma científicamente** ese elemento.

## 2. Frontera con D-006/D-006-REV

```text
Metamodelo de conocimiento EPIC-001
  └─ describe artefactos, autoridad, procedencia, versiones y dependencias

Ontología científica D-006/D-006-REV
  └─ describe realidad gastronómica, norma y datos R/N/D
```

La entidad `Ontología` del grafo apunta al artefacto D-006/D-006-REV. No redefine sus clases `Establecimiento`, `Recurso`, `Evento`, `Agente` ni sus axiomas.

## 3. Capas del metamodelo

| Capa | Entidades | Responsabilidad |
|---|---|---|
| K0 Identidad y autoridad | Agente, Organización, Constitución, Decisión, Issue | quién puede crear, revisar, aprobar o bloquear |
| K1 Procedencia epistémica | Fuente, Evidencia, Investigación, Hipótesis, Observación, Debate | de dónde proviene una afirmación y cuál es su estado |
| K2 Ingeniería del estándar | Revisión técnica, Componente, Requisito, Regla, Ontología, Taxonomía, Proceso, KPI, Fórmula | traducción controlada de decisiones a artefactos técnicos |
| K3 Empaquetado documental | Documento, Manual, Formulario, Anexo, GOEI Standard, GOEI BOK | dónde se expresa o distribuye el conocimiento |
| K4 Validación y difusión | Validación, Publicación, Tesis | cómo se comprueba o comunica, sin adquirir autoridad automática |
| K5 Evolución | Versión, Línea base, Release, Registro de cambio | vigencia, compatibilidad, publicación e historia |

## 4. Superclases arquitectónicas

| Superclase | Especializaciones | Regla |
|---|---|---|
| `ElementoGOEI` | todas las entidades controladas | posee ID, estado, procedencia y versión o declara por qué no aplica |
| `ArtefactoInformacional` | Fuente, Evidencia, Documento, Decisión, Revisión, Componente, Validación, Publicación, Tesis, BOK | puede tener representación física y checksum |
| `ActividadConocimiento` | Investigación, Debate, Validación, Revisión técnica | produce artefactos y tiene responsables y periodo |
| `ArtefactoNormativo` | Constitución, Requisito, Regla aprobada, Standard, anexos normativos | exige autoridad y decisión habilitante |
| `ArtefactoDerivado` | Manual, Formulario, Publicación, Tesis, BOK | no puede originar reglas por sí mismo |
| `ArtefactoVersionable` | Documento, Componente, ontología, taxonomía, KPI-def, fórmula, Standard, BOK | conserva identidad conceptual separada de sus versiones |
| `RegistroGobernanza` | Decisión, Issue, Registro de cambio, Línea base, Release | conserva historia y no se elimina físicamente |

## 5. Identidad

Todo nodo controlado utiliza un IRI lógico futuro y un ID humano inmutable:

`GOEI-{CLASE}-{NNNN}`

La identidad conceptual no contiene versión. Una `Versión` identifica una realización concreta del nodo. Cambiar una etiqueta no crea identidad nueva; cambiar el significado más allá de compatibilidad exige nueva versión o nueva identidad según la decisión de cambio.

## 6. Estado, autoridad y vigencia

Se separan tres dimensiones:

- **estado de trabajo:** borrador, revisión, aprobado, rechazado, sustituido, retirado;
- **estado epistémico:** evidencia, dato, hipótesis, propuesta, consenso, decisión;
- **vigencia normativa:** no aplicable, futura, vigente, suspendida, expirada.

Nunca se infiere una dimensión desde otra. `Publicado` no significa `aprobado`; `aprobado` no significa `vigente`; `citado` no significa `aceptado`.

## 7. Patrón obligatorio de procedencia

```text
Fuente Bibliográfica ─es_fuente_de→ Evidencia
Investigación ─produce→ {Evidencia, Observación, Hipótesis}
{Evidencia, Debate, Hipótesis} ─informa→ Decisión Científica
Decisión Científica ─autoriza_creacion_o_cambio→ Componente
Componente ─se_expresa_en→ Documento
Documento ─es_incluido_en→ Versión
Versión ─es_congelada_en→ Línea Base
Release ─publica→ Línea Base
```

Una decisión puede rechazar una hipótesis o componente; esa arista también se conserva.

## 8. Dependencias y bloqueo parcial

Las dependencias se modelan como nodos o aristas con tipo, alcance, versión y fuerza:

- `requiere`: sin el objetivo no puede progresar;
- `usa`: puede progresar, pero debe mantener compatibilidad;
- `deriva_de`: su significado procede del objetivo;
- `implementa`: realiza un contrato ya aprobado;
- `reemplaza`: establece sucesión.

Si una dependencia científica no está resuelta, se crea un `Issue`, se enlaza mediante `bloquea` y solo se detiene el subgrafo descendiente alcanzado por esa dependencia.

## 9. Conformidad del metamodelo

Un nodo es conforme cuando:

1. tiene ID único y clase válida;
2. cumple atributos obligatorios de su clase;
3. usa relaciones declaradas con dominio y rango válidos;
4. enlaza su procedencia y autoridad;
5. declara versión, estado y vigencia;
6. no viola restricciones de integridad ni consistencia;
7. no atraviesa un Issue bloqueante sin resolución.

## 10. Resultado de EPIC-001

Este metamodelo habilita inventario, análisis de impacto, auditoría, navegación, generación documental y futura implementación. No autoriza crear contenido del estándar.
