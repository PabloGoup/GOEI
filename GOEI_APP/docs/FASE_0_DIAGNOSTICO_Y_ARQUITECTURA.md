# Fase 0 — Diagnóstico y arquitectura

## Dictamen

La nueva aplicación debe evolucionar como un producto separado dentro de `GOEI_APP`, reutilizando por integración controlada el motor, los contratos y los recursos institucionales existentes. No se recomienda extender directamente el prototipo anterior: fue diseñado como demostrador local sin servicios externos y no incorpora identidad, multiorganización, RLS ni ciclo de expedientes.

## Activos reutilizables

| Activo existente | Reutilización prevista | Condición |
|---|---|---|
| Motor TypeScript `engine-ts` | Paquete de dominio independiente en Fase 3 | Mantener versión, digest, paridad y 151 pruebas |
| Contratos JSON v0.1 | Validación de entradas y salidas | No alterar desde la interfaz |
| Motor Python de referencia | Oráculo de paridad y regresión | No usar como backend de producción |
| Banco de escenarios | Laboratorio de simulación | Rotular siempre como sintético |
| Exportadores PDF y Excel | Base para servicio de reportes | Recalcular en servidor antes de exportar |
| Catálogo de 7 dimensiones y 28 criterios | Lectura versionada del instrumento | Estado candidato; no editable desde la app |
| Libro de prepiloto | Referencia manual y prueba de paridad | No importarlo como datos reales |
| Logo e icono canónicos | Identidad de interfaz y exportaciones | No editar, deformar ni recolorear |
| Protocolo y matriz de gates | Bloqueo de captura real | `fieldCaptureAuthorized` continúa en falso |

## Riesgos y controles

| Riesgo | Impacto | Control arquitectónico |
|---|---|---|
| Confundir producto provisional con certificación | Reputacional y metodológico | Etiqueta persistente, gate y estado de emisión |
| Convertir ausencias en cero | Resultado engañoso | Estados explícitos y campos anulables |
| Deriva entre motor y base de datos | Pérdida de reproducibilidad | Guardar entrada, salida, versión y digest |
| Acceso cruzado entre organizaciones | Exposición de datos | RLS, funciones de membresía y pruebas negativas |
| Evidencias sensibles expuestas | Privacidad y ética | Bucket privado, rutas seudónimas y URLs firmadas |
| Roles usados como autoridad científica | Gobernanza incorrecta | Roles operativos; instrumento sólo por versiones autorizadas |
| Simulaciones mezcladas con casos reales | Falsa evidencia | Tipo de expediente inmutable y espacio visual separado |
| Código acoplado a Supabase | Motor difícil de auditar | Puertos de repositorio y dominio puro |

## Arquitectura propuesta

```text
Interfaz Next.js
  ├── Sitio institucional y guía
  ├── Espacio autenticado por organización
  └── Vistas: establecimientos, evaluaciones, evidencia, revisión y reportes
          │
Casos de uso / autorización de servidor
  ├── Identidad y permisos
  ├── Flujo de evaluación
  ├── Evidencias y auditoría
  └── Reportes
          │
Dominio puro GOEI                    Adaptadores
  ├── Tipos y estados                ├── Supabase PostgreSQL
  ├── Gate crítico                   ├── Supabase Storage
  ├── Motor versionado               └── PDF / Excel
  └── Contratos y digest
```

Los Server Components leen información autorizada. Las mutaciones se realizan mediante acciones o rutas de servidor que vuelven a verificar identidad, organización, rol y estado del expediente. RLS actúa como segunda frontera y no como sustituto de la autorización de aplicación.

## Modelo de datos preliminar

- `profiles`: presentación mínima del usuario autenticado.
- `organizations`: límite de tenencia.
- `organization_memberships`: relación usuario–organización y rol operativo.
- `establishments`: unidad de análisis dentro de una organización.
- `instrument_versions`: edición inmutable del instrumento.
- `assessments`: expediente y estado de una aplicación o simulación.
- `assessment_assignments`: evaluadores y supervisores autorizados.
- `assessment_responses`: estado, nivel, evidencia, hallazgo y justificación por criterio.
- `evidence_items`: metadatos y ruta privada; no almacena el archivo binario en PostgreSQL.
- `gate_decisions`: gate, estado, fundamento, autor y fecha.
- `calculation_runs`: entrada, salida, digest, versiones y advertencias inmutables.
- `improvement_actions`: plan derivado y verificable.
- `audit_events`: eventos anexados sin edición desde clientes.

El esquema de Fase 1 implementa sólo identidad, organizaciones, membresías, establecimientos y auditoría. Las demás entidades se promoverán con su fase para evitar congelar prematuramente campos metodológicos.

## Matriz de permisos resumida

| Rol | Organización | Usuarios | Establecimientos | Evaluación | Revisión | Evidencias sensibles |
|---|---|---|---|---|---|---|
| Administrador de plataforma | Administra altas técnicas | No acceso automático | No acceso automático | No | No | No |
| Administrador de organización | Su organización | Gestiona membresías | Gestiona | Lee autorizadas | No resuelve ciencia | Según permiso explícito |
| Supervisor metodológico | Asignadas | No | Lee | Revisa | Sí, operativa | Según asignación |
| Evaluador | Asignadas | No | Lee asignados | Captura y envía | No aprueba | Sólo expediente asignado |
| Representante | Su establecimiento | No | Lee | Contribuye cuando se invita | No | Sólo aportes autorizados |
| Observador | Autorizada | No | Sólo lectura | Sólo lectura | No | No por defecto |

## Mapa de pantallas

```text
Inicio institucional
├── Ingreso / recuperación
└── Guía pública controlada

Espacio autenticado
├── Panorama
├── Establecimientos
├── Evaluaciones
│   ├── Elegibilidad y gates previos
│   ├── Aplicación guiada de 28 criterios
│   ├── Evidencias y hallazgos
│   ├── Revisión paralela
│   └── Resultado / plan de mejora
├── Laboratorio sintético
├── Guía contextual
├── Equipo y roles
├── Auditoría
└── Configuración
```

## Decisiones pendientes que bloquean funciones, no la Fase 1

- B5 y el modelo B6–B8 requieren resolución científica.
- La captura real requiere ética o exención, privacidad, elegibilidad y capacitación.
- C-016 y C-023 permanecen bloqueados selectivamente.
- El rol operativo no autoriza modificar el instrumento.

## Criterios de aceptación de Fase 1

1. La aplicación compila con TypeScript estricto y lint sin errores.
2. Existe una interfaz responsiva con identidad, login, navegación y estados provisionales.
3. Supabase puede conectarse sólo mediante variables de entorno.
4. Las sesiones SSR usan cookies y actualización segura.
5. Organizaciones y membresías están separadas por RLS.
6. No existe una service-role key en código cliente.
7. Los roles son configuración operativa revisable.
8. La captura real aparece bloqueada y los casos demostrativos se rotulan como sintéticos.
9. Hay pruebas de permisos puros y un esquema de pruebas RLS.
10. El build de producción y la revisión visual escritorio/móvil resultan conformes.
