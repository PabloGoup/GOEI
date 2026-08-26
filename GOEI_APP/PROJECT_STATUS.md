# GOEI APP — Estado vivo y coordinación de trabajo

> **Documento obligatorio de continuidad.** Codex, Claude y cualquier colaborador deben leer este archivo antes de modificar la aplicación y actualizarlo al terminar cada cambio material.

## Última actualización

- Fecha: 2026-08-25
- Responsable de la actualización: Codex
- Fase activa: Fase 2 — núcleo operativo
- Estado técnico: Fases 1 y 2 confirmadas en Supabase; ampliación autenticada implementada localmente y pendiente de migrar
- Captura real: **NO AUTORIZADA**
- Repositorio de aplicación: `PabloGoup/GOEI_APP` privado, con rama propia `main` y contenido de la app en la raíz.
- Repositorio científico: `PabloGoup/GOEI`; no debe recibir merges ni commits de la aplicación.

## Propósito del producto

GOEI APP es la aplicación web para aplicar, explicar y auditar la metodología GOEI en establecimientos gastronómicos. Debe guiar al evaluador, conservar evidencias y trazabilidad, separar desempeño de calidad de evidencia y producir resultados provisionales sólo cuando las reglas vigentes lo permitan.

La aplicación implementa el estándar, pero no crea ciencia. No puede inventar ni modificar criterios, KPI, fórmulas, pesos, bandas, gates, umbrales o clasificaciones.

## Alcance vigente

- Restaurante con servicio en sitio.
- MIPYME de Chile.
- Establecimiento individual.
- Instrumento piloto candidato de 7 dimensiones y 28 criterios.
- Prepiloto y posterior piloto.
- Modo demostrativo basado exclusivamente en casos sintéticos.
- Resultados identificados como `PROVISIONAL — NO VALIDADO`.

## Reglas metodológicas que el software debe conservar

1. Un dato desconocido nunca se convierte automáticamente en cero.
2. `NO_APLICA`, `NO_VERIFICABLE`, ausencia e inconsistencia son estados diferentes.
3. Desempeño, evidencia, confianza, cobertura y gate crítico permanecen separados.
4. Las simulaciones no son evidencia empírica.
5. Un resultado favorable no compensa un gate crítico.
6. C-016 y C-023 permanecen bloqueados hasta cerrar sus gates específicos.
7. La captura real sólo podrá habilitarse cuando las autoridades externas y científicas correspondientes la autoricen.
8. El motor GOEI debe permanecer independiente de React y Supabase.

## Arquitectura acordada

- Next.js 16 con App Router y React 19.
- TypeScript estricto.
- Supabase Auth con sesiones SSR mediante cookies.
- PostgreSQL y Row Level Security como segunda frontera de autorización.
- Supabase Storage privado para evidencias.
- Dominio GOEI desacoplado de persistencia e interfaz.
- Repositorios de servidor capaces de operar en modo demostrativo o conectado.
- Motor TypeScript existente reservado para integración en Fase 3.
- PDF y Excel se generarán en servidor y recalcularán antes de exportar.

## Trabajo completado

### Preparación y coordinación

- Se creó `GOEI_APP` como raíz exclusiva del software.
- `AGENTS.md` contiene límites técnicos y metodológicos.
- `PROJECT_BRIEF.md` contiene el alcance funcional general.
- `docs/FASE_0_DIAGNOSTICO_Y_ARQUITECTURA.md` contiene diagnóstico, riesgos, arquitectura, permisos y mapa de pantallas.
- Se configuraron scripts de typecheck, lint, pruebas, build y verificación completa.

### Fase 1 — base técnica

- Aplicación Next.js, React y TypeScript.
- Página institucional, login, panorama, guía, laboratorio, administración, auditoría y configuración.
- Sistema visual institucional responsivo.
- Logo e icono enlazados a los activos canónicos sin copias editadas.
- Supabase SSR preparado mediante cliente de navegador, servidor y `proxy.ts`.
- Migración `202608250001_phase1_foundation.sql` con:
  - perfiles;
  - organizaciones;
  - membresías y seis roles;
  - establecimientos;
  - auditoría;
  - RLS y funciones de autorización.
- Prueba SQL nativa `phase1_rls.sql`, sin dependencia de pgTAP.
- El usuario confirmó que la migración y la verificación de Fase 1 están correctas en Supabase.

### Fase 2 — núcleo operativo implementado localmente

- Snapshot de presentación del instrumento candidato:
  - 7 dimensiones;
  - 28 criterios;
  - rúbrica 0–4;
  - evidencia 0–3.
- Catálogo ubicado en `src/domain/instrument.ts`.
- Repositorio dual en `src/server/repositories/workspace.ts`:
  - modo `demo`: casos sintéticos;
  - modo conectado: consultas Supabase sometidas a RLS.
- Acción de servidor validada con Zod para guardar respuestas.
- Pantalla de establecimientos sintéticos.
- Listado de evaluaciones.
- Aplicación guiada de los 28 criterios.
- Navegación por dimensiones y criterios.
- Registro de estado, nivel, evidencia y justificación.
- Autoguardado local exclusivo para demostración sintética.
- Mensaje explícito que impide ingresar información real.
- Adjuntos deshabilitados hasta conectar el bucket privado.
- No se calcula puntaje en Fase 2.
- Migración `202608250002_phase2_core.sql` creada con:
  - versiones del instrumento;
  - evaluaciones;
  - asignaciones;
  - respuestas;
  - evidencias;
  - vínculos respuesta–evidencia;
  - políticas RLS;
  - bucket privado `goei-evidence`;
  - snapshot candidato del instrumento.
- Prueba estructural `phase2_core.sql` creada sin pgTAP.

### Ampliación autenticada posterior a Fase 2

- Contexto de sesión que obtiene usuario, organización y rol desde Supabase bajo RLS.
- Protección de todas las pantallas contenidas en `AppShell` cuando el modo es conectado.
- Perfil lateral dinámico; ya no contiene un nombre o rol codificado.
- Cierre de sesión real mediante acción de servidor.
- Ruta `/onboarding` para crear la primera organización sin autoconceder administración de plataforma.
- Migración `202608250003_authenticated_workspace.sql` con:
  - creación automática y backfill de perfiles desde Supabase Auth;
  - alta transaccional de la primera organización y membresía;
  - función controlada para añadir eventos de auditoría;
  - creación transaccional de establecimientos y evaluaciones exclusivamente sintéticos;
  - asignación automática del creador como evaluador del expediente sintético.
- Prueba SQL nativa `authenticated_workspace.sql` para verificar funciones privilegiadas y trigger.
- Rutas `/establecimientos/nuevo` y `/evaluaciones/nueva`.
- Formularios validados con Zod y funciones RPC sometidas a identidad y rol.
- Carga de evaluaciones conectadas y respuestas existentes desde Supabase.
- Autoguardado Supabase para respuestas de expedientes conectados.
- Registro de auditoría `assessment.response_saved` después de persistir una respuesta.
- El modo demostrativo continúa usando sólo `localStorage`; no mezcla casos locales con casos conectados.
- La captura real continúa bloqueada: las nuevas funciones sólo aceptan establecimientos y evaluaciones sintéticos.

### Autenticación con Google

- Botón “Continuar con Google” integrado sin eliminar el acceso por correo y contraseña.
- Inicio OAuth mediante Supabase Auth con proveedor `google`.
- Ruta segura `/auth/callback` para intercambiar el código PKCE por una sesión en cookies.
- Redirección posterior restringida a rutas internas para impedir redirecciones abiertas.
- Los usuarios de Google utilizan el mismo trigger de perfil, onboarding, membresías, roles y RLS.
- No se solicitan tokens para acceder a Drive, Gmail u otros servicios de Google.
- Configuración de Google Cloud y Supabase documentada en `README.md`; Client Secret fuera del repositorio.
- Rutas públicas `/privacidad` y `/terminos` creadas para completar la información de marca exigida por Google.
- La página principal enlaza visiblemente ambas páginas legales sin exigir inicio de sesión.
- La política declara que Google sólo aporta identidad básica y que GOEI App no solicita Gmail, Drive, Calendar, contactos ni archivos.
- Los activos corporativos de `public/brand` son autocontenidos para que Vercel no dependa de enlaces hacia carpetas científicas externas.

## Verificaciones realizadas

Última verificación completa después de implementar el flujo autenticado:

- TypeScript estricto: PASS.
- ESLint: PASS.
- Pruebas automatizadas: PASS — 5 de 5.
- Build de producción: PASS.
- Next.js generó 16 rutas, incluidas callback OAuth, onboarding, altas sintéticas y aplicación guiada dinámica.
- Dependencias: 0 vulnerabilidades en la última instalación/auditoría disponible.
- La pantalla guiada respondió desde el servidor local.
- `git diff --check`: sin problemas conocidos.

Después de cada modificación se debe volver a ejecutar:

```bash
npm run verify
git diff --check -- GOEI_APP
```

## Estado de Supabase

### Confirmado por el usuario

- Migración Fase 1 ejecutada.
- Prueba estructural Fase 1: correcta.
- Migración Fase 2 ejecutada.
- Prueba estructural Fase 2: correcta.

### Pendiente de ejecutar en Supabase

1. Ejecutar `supabase/migrations/202608250003_authenticated_workspace.sql`.
2. Ejecutar `supabase/tests/authenticated_workspace.sql`.
3. Confirmar que la prueba devuelve `PASS`.

No ejecutar la prueba antes de la migración correspondiente.

## Variables de entorno

La aplicación utiliza:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
NEXT_PUBLIC_APP_MODE
```

- `NEXT_PUBLIC_APP_MODE=demo`: conserva los casos sintéticos aunque Supabase esté conectado.
- No usar `service_role` en variables públicas.
- No leer, copiar ni registrar secretos dentro de este documento.

## Pendientes inmediatos

### Para cerrar Fase 2

- [x] Ejecutar migración y prueba Fase 2 en Supabase.
- [ ] Ejecutar y confirmar la migración y prueba de flujo autenticado.
- [ ] Habilitar Google en Supabase Auth y configurar sus URLs autorizadas.
- [ ] Desplegar las páginas públicas en un dominio HTTPS controlado y verificar ese dominio en Google Search Console.
- [ ] Probar acceso Google local y en el dominio HTTPS de producción.
- [ ] Crear usuario real de prueba mediante Supabase Auth.
- [ ] Crear la organización inicial desde `/onboarding`.
- [ ] Probar aislamiento RLS entre dos organizaciones con usuarios distintos.
- [x] Conectar formularios sintéticos de establecimientos a acciones de servidor.
- [x] Conectar creación sintética de evaluación y autoasignación del evaluador.
- [x] Sustituir autoguardado local por persistencia Supabase en expedientes conectados.
- [ ] Conectar carga de evidencias al bucket privado mediante rutas firmadas.
- [x] Registrar creación y guardado de respuestas desde funciones seguras de auditoría.
- [ ] Implementar estados de envío, revisión, devolución y cierre.
- [ ] Realizar QA visual real en escritorio, tablet y móvil.

### Fase 3 — todavía no iniciada

- [ ] Integrar `17_Prototipo_Web/engine-ts` como paquete independiente.
- [ ] Verificar nuevamente las 151 pruebas y paridad Python/Excel.
- [ ] Construir el adaptador desde respuestas persistidas al contrato del motor.
- [ ] Guardar entrada, salida, digest y versiones por ejecución.
- [ ] Implementar gate crítico sin compensación.
- [ ] Mostrar cobertura y confianza por separado.
- [ ] Generar reportes PDF y Excel desde servidor.
- [ ] Mantener la etiqueta provisional en pantalla y exportaciones.

### Fases posteriores

- Biblioteca explicativa ampliada para los 28 criterios.
- Revisión paralela y resolución de discrepancias.
- Planes de mejora y seguimiento temporal.
- Laboratorio visual conectado al banco sintético existente.
- Auditoría integral de accesibilidad y seguridad.
- Preparación controlada para el prepiloto real cuando los gates externos estén aprobados.

## Bloqueos científicos y externos

- Resolución científica B5 pendiente.
- Ratificación o corrección de B6–B8 pendiente.
- Ética o exención pendiente.
- Privacidad, custodia, retención e incidentes pendientes de aprobación aplicable.
- Elegibilidad MIPYME pendiente de regla ratificada.
- Capacitación y autorización de evaluadores pendientes.
- C-016 y C-023 bloqueados selectivamente.

Estos bloqueos no impiden desarrollar y probar funciones sintéticas, seguridad, roles, trazabilidad o arquitectura.

## Protocolo para Codex y Claude

Antes de comenzar:

1. Abrir `AGENTS.md`.
2. Abrir este `PROJECT_STATUS.md` completo.
3. Revisar `git status` y no sobrescribir cambios ajenos.
4. Confirmar la fase y los pendientes que se abordarán.
5. Consultar el repositorio metodológico como solo lectura.

Al terminar:

1. Actualizar fecha, responsable y estado en este archivo.
2. Mover tareas terminadas a “Trabajo completado”.
3. Añadir nuevos pendientes o bloqueos descubiertos.
4. Registrar migraciones, rutas y decisiones técnicas relevantes.
5. Ejecutar verificaciones y anotar el resultado real.
6. No declarar cerrada una fase sin evidencia verificable.

## Próxima acción recomendada

Ejecutar la migración autenticada y su prueba. Después, crear dos usuarios y dos organizaciones de prueba para comprobar aislamiento RLS real antes de conectar evidencias privadas.
