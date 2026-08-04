# GOEI-CHG-0001 — Normalización de IDs de Issues

| Campo | Valor |
|---|---|
| Fecha | 2026-08-04 |
| Estado | Aplicado y verificado |
| Tipo | Corrección de configuración; sin cambio científico |
| Motivo | Colisión de IDs entre registro maestro y EPIC-001 |

## Migración

| ID anterior EPIC-001 | ID canónico nuevo |
|---|---|
| GOEI-ISS-011 | GOEI-ISS-031 |
| GOEI-ISS-012 | GOEI-ISS-032 |
| GOEI-ISS-013 | GOEI-ISS-033 |
| GOEI-ISS-014 | GOEI-ISS-034 |
| GOEI-ISS-015 | GOEI-ISS-035 |
| GOEI-ISS-016 | GOEI-ISS-036 |
| GOEI-ISS-017 | GOEI-ISS-037 |
| GOEI-ISS-018 | GOEI-ISS-038 |

Los Issues científicos `GOEI-ISS-011` a `017` del registro maestro conservan sus IDs y significado. No se cerró, respondió ni modificó ninguna pregunta científica.

## Verificación

El validador de configuración debe reportar unicidad de definiciones después de la migración.
