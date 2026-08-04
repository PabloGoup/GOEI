# Sistema de coordinación automática GOEI

| Campo | Valor |
|---|---|
| Identificador | GOEI-GOV-COORD-0001 |
| Estado | Activo |
| Versión | 0.1.0 |
| Autoridad | Mandato de Dirección General para coordinación continua |
| Órganos | Comité Científico y Oficina Técnica, con aprobación de Dirección General según Master Plan |

## Objetivo

Operar un flujo continuo y auditable hasta obtener un estándar validado, tesis terminada y manuscrito potencialmente publicable, sin sustituir ninguna autoridad científica.

## Directorios

- `entradas_comite/`: expedientes recibidos del Comité Científico, todavía no aceptados por la Oficina Técnica.
- `cola_cientifica/`: preguntas y paquetes que requieren trabajo del Comité.
- `cola_tecnica/`: decisiones aprobadas listas para integración.
- `handoffs/`: comprobantes de entrega entre funciones.
- `reportes/`: estado, bloqueos y auditorías periódicas.

## Máquina de estados

```text
NECESIDAD
  → COLA_CIENTÍFICA
  → EXPEDIENTE_RECIBIDO
  → AUDITORÍA_DE_COMPLETITUD
  → DECISIÓN_APROBADA
  → COLA_TÉCNICA
  → INTEGRACIÓN
  → VERIFICACIÓN
  → BASELINE
  → APROBACIÓN_DE_VERSIÓN
  → RELEASE
  → INCORPORACIÓN_BOK/TESIS/PUBLICACIÓN
```

Si una compuerta falla se crea Issue y solo se detiene la rama afectada.

## Contrato de entrada del Comité

Un expediente científico es integrable únicamente si contiene:

- ID de decisión;
- pregunta y alcance;
- evidencia y bibliografía identificables;
- alternativas consideradas;
- resolución inequívoca;
- limitaciones y pendientes;
- estado de aprobación;
- impacto esperado;
- versión objetivo.

La Oficina Técnica valida presencia y coherencia formal, no corrección científica.

## Contrato de salida de la Oficina Técnica

Cada integración produce:

- componentes creados o modificados;
- correspondencia decisión-componente;
- análisis de impacto;
- pruebas de consistencia;
- actualización del Knowledge Graph;
- registro de cambio;
- versión y baseline, cuando corresponda;
- actualización derivada de BOK, tesis y publicación;
- Issues pendientes.

## Regla de finalización

El programa solo puede declararse terminado cuando las compuertas del roadmap indiquen estándar publicado y validado, tesis completa y aprobada por la autoridad académica, y manuscrito técnicamente listo para envío. La Oficina Técnica no puede autoaprobar ciencia, tesis ni publicación.
