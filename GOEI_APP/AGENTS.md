# Instrucciones obligatorias para GOEI APP

## Raíz de trabajo

`/Users/ptoledos/GOEI/GOEI_APP` es la raíz exclusiva de la aplicación web GOEI.

- Todo el código, configuración, migraciones, pruebas, documentación técnica y recursos visuales de la aplicación deben crearse dentro de esta carpeta.
- No crear código de la aplicación en otras carpetas del repositorio GOEI.
- Las carpetas superiores del repositorio se consultan como fuente metodológica de solo lectura.
- No mover, renombrar, reescribir ni eliminar documentos científicos o de gobernanza desde el desarrollo de la aplicación.

## Autoridad metodológica

La aplicación implementa GOEI, pero no define ni modifica su ciencia.

- No inventar KPI, criterios, fórmulas, pesos, umbrales, bandas, gates ni clasificaciones.
- Implementar únicamente reglas identificadas y versionadas en el repositorio metodológico.
- Distinguir siempre propuesta, decisión ratificada, medición, simulación y validación empírica.
- Conservar los desconocidos como desconocidos; nunca convertirlos automáticamente en cero.
- Mantener C-016 y C-023 bloqueados mientras sus gates no estén autorizados.
- Identificar todo resultado piloto como provisional y no validado cuando corresponda.

## Arquitectura

- Next.js con App Router, React y TypeScript estricto.
- Supabase para autenticación, PostgreSQL, almacenamiento privado, auditoría y Row Level Security.
- Motor GOEI independiente, determinista, versionado y sin dependencia directa de Supabase o React.
- Separar interfaz, dominio, persistencia, autorización, cálculo, reportes y simuladores.
- Toda tabla de negocio debe tener políticas RLS explícitas y pruebas de aislamiento entre organizaciones.
- No guardar secretos en el repositorio.

## Forma de trabajo

Antes de implementar una fase:

1. Revisar el estado existente dentro de `GOEI_APP`.
2. Consultar las fuentes metodológicas necesarias fuera de esta carpeta sin modificarlas.
3. Identificar riesgos e impactos.
4. Implementar de forma incremental y compatible.
5. Ejecutar typecheck, lint dirigido, pruebas y revisión visual.
6. Registrar cualquier decisión científica faltante como bloqueo, sin resolverla desde el código.

La especificación funcional completa se encuentra en `PROJECT_BRIEF.md`.

## Coordinación obligatoria entre agentes

- Leer `PROJECT_STATUS.md` completo antes de iniciar cualquier tarea.
- Actualizar `PROJECT_STATUS.md` después de cada cambio material.
- Registrar allí lo implementado, verificaciones reales, pendientes y bloqueos.
- No declarar una fase cerrada si el estado vivo conserva comprobaciones pendientes.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
