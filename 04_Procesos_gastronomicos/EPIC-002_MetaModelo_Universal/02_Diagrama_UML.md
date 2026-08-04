# Diagrama UML conceptual — MetaModelo Universal de Procesos

| Campo | Valor |
|---|---|
| Identificador | GOEI-PMM-UML-0001 |
| Versión | 0.1.0-draft |

```mermaid
classDiagram
direction LR
class Proceso {
  +id
  +proposito
  +alcance
  +estado
  +version
}
class Subproceso
class Actividad
class Evento
class Entrada
class Salida
class Recurso
class Agente
class Restriccion
class Evidencia
class Observacion
class Riesgo
class Control
class Documento
class Registro
class Indicador

Proceso <|-- Subproceso : rol composicional
Proceso "1" *-- "1..*" Actividad : contiene
Proceso "0..1" *-- "0..*" Subproceso : descompone
Actividad "0..*" --> "0..*" Evento : disparada/finalizada
Proceso "1" --> "0..*" Entrada : recibe
Actividad "1" --> "0..*" Entrada : consume
Proceso "1" --> "0..*" Salida : produce
Actividad "1" --> "0..*" Salida : produce
Salida "0..*" --> "0..*" Entrada : alimenta
Proceso "0..*" --> "0..*" Recurso : usa
Actividad "0..*" --> "0..*" Recurso : usa/consume
Agente "0..*" --> "0..*" Proceso : realiza
Agente "0..*" --> "0..*" Actividad : ejecuta
Restriccion "0..*" --> "1..*" Proceso : restringe
Restriccion "0..*" --> "1..*" Actividad : restringe
Riesgo "0..*" --> "1..*" Proceso : amenaza
Riesgo "0..*" --> "1..*" Actividad : amenaza
Control "0..*" --> "1..*" Riesgo : trata
Control "0..*" --> "1..*" Restriccion : verifica
Agente "1..*" --> "0..*" Control : ejecuta
Actividad "0..*" --> "0..*" Evidencia : genera
Evento "0..*" --> "0..*" Observacion : genera
Observacion "0..*" --> "0..*" Evidencia : soportadaPor
Documento "0..*" --> "1..*" Proceso : documenta
Registro "0..*" --> "1" Documento : instanciaDe
Registro "0..*" --> "1..*" Actividad : registra
Registro "1" o-- "0..*" Observacion : contiene
Indicador "0..*" --> "1..*" Proceso : mide
Indicador "0..*" --> "1..*" Actividad : mide
Indicador "0..*" --> "0..*" Observacion : usa
```

Las multiplicidades representan el contrato conceptual, no el número de instancias operacionales de una ejecución concreta.
