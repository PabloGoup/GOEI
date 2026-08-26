# GOEI-HANDOFF-0007 — Continuidad de GOEI APP en Visual Studio

| Campo | Valor |
|---|---|
| Fecha | 2026-08-25 |
| Estado | Activo para desarrollo técnico con datos sintéticos |
| Aplicación | `GOEI_APP/` |
| Línea base técnica | `41643a411be0f817870ce50e8bbc9841b77082ef` |
| Captura real | NO AUTORIZADA |
| Autoridad científica | Repositorio metodológico GOEI y decisiones ratificadas |

## Propósito del traspaso

Permitir que el desarrollo continúe en Visual Studio sin depender del historial de una conversación y sin perder el límite entre metodología, aplicación, simulación y validación empírica.

## Punto de entrada obligatorio

Al abrir el proyecto:

1. abrir `GOEI_APP/` como carpeta de trabajo de la aplicación;
2. leer `GOEI_APP/AGENTS.md`;
3. leer `GOEI_APP/PROJECT_STATUS.md`;
4. usar `GOEI_APP/docs/PROMPT_MAESTRO_CONTINUIDAD.md` para iniciar al asistente;
5. revisar el estado Git antes de editar;
6. mantener el repositorio metodológico como fuente de consulta y autoridad.

## Estado recibido

- Base Next.js, TypeScript y sistema visual implementados.
- Supabase Auth, organizaciones, membresías, roles y RLS preparados.
- Núcleo de establecimientos, evaluaciones y respuestas implementado.
- Modo demostrativo sintético separado del modo conectado.
- Producción publicada y callback de autenticación corregido.
- Motor científico todavía pendiente de integración en la Fase 3.
- Captura real bloqueada por gates científicos y externos.

## Próxima secuencia recomendada

1. Ejecutar y comprobar la migración autenticada pendiente.
2. Crear dos usuarios y dos organizaciones de prueba.
3. Verificar aislamiento RLS real entre organizaciones.
4. Conectar evidencias al bucket privado mediante rutas firmadas.
5. Implementar envío, revisión, devolución y cierre.
6. Ejecutar QA visual en escritorio, tablet y móvil.
7. Integrar el motor existente sólo después de cerrar la Fase 2 con evidencia.

## Reglas de continuidad

- No inventar contenido GOEI desde el software.
- No editar migraciones ya aplicadas; crear migraciones nuevas.
- No mezclar datos sintéticos y reales.
- No habilitar campo por una variable de interfaz.
- No presentar el puntaje como certificación.
- Actualizar `PROJECT_STATUS.md` después de cada cambio material.
- Registrar decisiones técnicas, pruebas ejecutadas y pendientes reales.

## Criterio de cierre de este handoff

El traspaso queda correctamente recibido cuando Visual Studio abre `GOEI_APP/`, el colaborador puede identificar la fase activa desde `PROJECT_STATUS.md`, ejecuta las verificaciones del proyecto y conserva `fieldCaptureAuthorized: false` mientras los gates externos continúen pendientes.
