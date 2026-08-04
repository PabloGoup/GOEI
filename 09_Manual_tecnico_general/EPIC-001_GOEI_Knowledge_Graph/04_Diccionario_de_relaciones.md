# Diccionario de relaciones GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-DD-REL-0001 |
| Estado | Propuesta arquitectónica |
| Versión | 0.1.0-draft |

Cada relación posee ID, dominio, rango, cardinalidad, inversa, procedencia y vigencia. `*` significa cero o más; `+`, uno o más.

| ID | Relación | Dominio → Rango | Cardinalidad por sujeto | Inversa | Restricción esencial |
|---|---|---|---|---|---|
| R001 | `extraída_de` | Evidencia → Fuente | 1 | `contiene_evidencia` | localización exacta obligatoria |
| R002 | `produce` | Investigación/Validación → Evidencia/Observación/Documento | 1..* | `producida_por` | producto atribuible a actividad y versión |
| R003 | `formula` | Investigación/Debate → Hipótesis | 0..* | `formulada_en` | no implica aceptación |
| R004 | `responde` | Investigación/Decisión → Pregunta | 0..* | `respondida_por` | cierre exige respuesta verificable |
| R005 | `sustenta` | Evidencia → Hipótesis/Decisión/Aserción | 0..* | `sustentada_por` | alcance de soporte explícito |
| R006 | `contradice` | Evidencia → Hipótesis/Aserción | 0..* | `contradicha_por` | no infiere rechazo automático |
| R007 | `discute` | Debate → Hipótesis/Pregunta/Propuesta | 1..* | `discutida_en` | posiciones atribuidas |
| R008 | `informa` | Investigación/Debate/Revisión/Validación → Decisión | 0..* | `informada_por` | no equivale a crear/aprobar |
| R009 | `acepta` | Decisión → Hipótesis/Propuesta | 0..* | `aceptada_por` | decisión aprobada requerida |
| R010 | `rechaza` | Decisión → Hipótesis/Propuesta/Componente | 0..* | `rechazada_por` | conservar objetivo rechazado |
| R011 | `crea` | Decisión → Componente/Requisito/Regla | 0..* | `creado_por` | decisión con autoridad y estado aprobado |
| R012 | `modifica` | Decisión/RegistroCambio → Componente/Documento | 0..* | `modificado_por` | versión anterior preservada |
| R013 | `retira` | Decisión → Componente/Requisito/Regla | 0..* | `retirado_por` | fecha efectiva obligatoria |
| R014 | `sustituye` | Entidad versionable/Decisión → misma clase | 0..1 | `sustituida_por` | acíclica; identidad objetivo distinta o versión previa |
| R015 | `depende_de` | Componente/Documento → Elemento | 0..* | `es_dependencia_de` | tipo y versión de dependencia explícitos |
| R016 | `implementa` | Componente/Fórmula/Formulario → Regla/Requisito | 0..* | `implementado_por` | no amplía contrato fuente |
| R017 | `se_expresa_en` | Componente/Requisito/Regla → Documento | 1..* vigente | `expresa` | al menos un documento canónico para elemento vigente |
| R018 | `contiene` | Documento/Manual/Anexo/BOK → Elemento | 0..* | `contenido_en` | contención no confiere autoridad |
| R019 | `integra` | GOEI Standard/BOK → Documento/Componente | 1..* | `integrado_en` | Standard solo integra aprobados |
| R020 | `deriva_de` | Manual/Formulario/Publicación/Tesis/BOK → Elemento | 1..* | `origina_derivado` | dirección de autoridad no reversible |
| R021 | `explica` | Manual/BOK → Standard/Componente/Regla | 1..* | `explicado_por` | no agrega requisitos |
| R022 | `aplica_a` | KPI/Manual/Formulario/Regla → Taxonomía/Proceso | 0..* | `tiene_aplicable` | alcance y versión explícitos |
| R023 | `define` | Ontología/Taxonomía/Documento → Entidad/Concepto | 1..* | `definido_por` | una definición canónica vigente por idioma/versión |
| R024 | `parte_de` | Componente/Proceso/Anexo → misma familia/Documento | 0..1 | `tiene_parte` | acíclica |
| R025 | `relacionado_con` | KPI → Proceso/Componente | 1..* | `tiene_indicador` | no implica causalidad |
| R026 | `usa` | Investigación/Fórmula/Validación → Fuente/Regla/Componente/Observación | 0..* | `usado_por` | versión exacta cuando sea versionable |
| R027 | `valida` | Validación → Elemento/Versión/LíneaBase | 1..* | `validado_por` | resultado, alcance y método explícitos |
| R028 | `no_valida` | Validación → Elemento/Versión/LíneaBase | 0..* | `no_validado_por` | no elimina el objeto; crea issue si bloquea |
| R029 | `tiene_version` | Elemento versionable → Versión | 1..* | `versión_de` | número único por elemento |
| R030 | `sucede_a` | Versión/Release/LíneaBase → misma clase | 0..1 | `precede_a` | acíclica y temporalmente ordenada |
| R031 | `fija_version` | LíneaBase → Versión | 1..* | `fijada_en` | referencias exactas, sin latest |
| R032 | `publica` | Release → LíneaBase | 1 | `publicada_por` | una release, una baseline |
| R033 | `incluye_artefacto` | Release → Documento/Manual/Formulario/Anexo | 1..* | `distribuido_en` | checksum por artefacto |
| R034 | `propone_cambio_a` | RegistroCambio → Elemento | 1..* | `tiene_cambio_propuesto` | análisis de impacto obligatorio |
| R035 | `produce_version` | RegistroCambio → Versión | 0..* | `producida_por_cambio` | solo tras aprobación |
| R036 | `bloquea` | Issue → Elemento/Relación/Release | 1..* | `bloqueado_por` | alcance mínimo necesario |
| R037 | `requiere_decisión` | Issue/RegistroCambio → Decisión | 0..* | `requerida_por` | puede apuntar a decisión aún no creada mediante ID reservado |
| R038 | `resuelve` | Decisión/RegistroCambio → Issue | 0..* | `resuelto_por` | criterio de cierre verificado |
| R039 | `creado_por_agente` | Elemento → Agente | 1..* | `crea_elemento` | rol y fecha vigentes |
| R040 | `revisado_por` | Elemento/Versión → Agente/Revisión | 0..* | `revisa` | independencia declarada si aplica |
| R041 | `aprobado_por` | Decisión/Elemento/Release → Agente/Organización | 0..* | `aprueba` | autoridad demostrable |
| R042 | `miembro_de` | Agente → Organización | 0..* | `tiene_miembro` | intervalo temporal |
| R043 | `establecida_por` | Organización/Regla → Constitución/Decisión | 1..* | `establece` | acto vigente requerido |
| R044 | `anexo_de` | Anexo → Documento/Standard/Manual | 1 | `tiene_anexo` | naturaleza y versión del principal |
| R045 | `traduce` | Documento/Manual/Formulario/Anexo → misma clase | 0..1 | `traducido_como` | versión fuente exacta; autoridad lingüística declarada |
| R046 | `cita` | Documento/Publicación/Tesis → Fuente | 0..* | `citada_por` | cita no equivale a sustento aceptado |
| R047 | `captura` | Formulario → Observación | 0..* | `capturada_con` | respuesta referencia versión y campo |
| R048 | `verifica` | Requisito/Regla → Validación/Evidencia | 0..* | `verifica_a` | usar inversa según dirección de consulta |
| R049 | `prevalece_sobre` | Constitución/Documento normativo → Documento | 0..* | `subordinado_a` | solo gobernanza puede declararla |
| R050 | `congela` | LíneaBase → Ontología/Standard/Componente | 1..* | `congelado_en` | checksum y versión obligatorios |

## Reglas del diccionario

- No se crean sinónimos técnicos como propiedades nuevas; se mantiene una etiqueta canónica y aliases de presentación.
- Relaciones transitivas (`depende_de`, `parte_de`) solo se materializan si la implementación distingue aristas directas de inferidas.
- Relaciones inversas pueden calcularse; no es obligatorio duplicarlas físicamente.
- Las relaciones normativas y científicas requieren procedencia de la propia aserción.
