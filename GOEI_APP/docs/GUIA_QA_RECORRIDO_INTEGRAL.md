# Guía de QA — Recorrido sintético integral y QA visual

> Guía operativa de verificación manual para cerrar los pendientes con salvedad de
> Fase 2. No autoriza captura real: todo el recorrido usa exclusivamente casos
> sintéticos y la aplicación debe conservar `field_capture_authorized = false`.

## Contexto

- Fecha de creación: 2026-08-26
- Fase activa: Fase 2 — núcleo operativo
- Entorno de prueba: producción demostrativa `https://goei-app.vercel.app`
- Estado técnico previo verificado el 2026-08-26: TypeScript PASS, ESLint PASS,
  pruebas 21/21 PASS, build PASS (18 rutas), 0 vulnerabilidades.

Esta guía cubre dos pendientes del `PROJECT_STATUS.md`:

1. **Recorrido sintético integral** (la "Próxima acción recomendada"): al completarlo
   se cierran de hecho los dos ítems marcados como hechos pero con salvedad:
   - carga de evidencias — *prueba integrada contra Supabase pendiente*;
   - estados de envío/revisión/devolución/cierre — *recorrido autenticado integral pendiente*.
2. **QA visual real** en escritorio, tablet y móvil.

## Preparación

- [ ] Confirmar `NEXT_PUBLIC_APP_MODE` en el entorno bajo prueba (demo vs conectado).
      El recorrido integral debe hacerse en **modo conectado** para ejercitar Supabase.
- [ ] Tener a mano la cuenta real de prueba creada en Supabase Auth el 2026-08-26.
- [ ] Confirmar que la organización inicial de prueba existe (creada vía `/onboarding`).
- [ ] Preparar archivos sintéticos de evidencia de prueba dentro de los formatos
      permitidos (PDF, JPEG, PNG, CSV) y bajo el límite de 15 MB. Ninguno debe
      contener información real de ningún establecimiento.

## A. Recorrido sintético integral (extremo a extremo)

### A1. Acceso e identidad
- [ ] Ingresar con la cuenta de prueba (correo/contraseña o Google).
- [ ] Verificar que el callback OAuth termina en `/dashboard`.
- [ ] Confirmar que el perfil lateral muestra el usuario y rol reales (no codificados).
- [ ] La portada muestra "Abrir portal" en lugar de "Ingresar" con sesión activa.

### A2. Alta de establecimiento sintético
- [ ] Ir a `/establecimientos/nuevo` y crear un establecimiento sintético.
- [ ] Confirmar validación Zod ante datos incompletos o inválidos.
- [ ] Verificar que aparece en el listado `/establecimientos` bajo la organización activa.

### A3. Creación de evaluación y autoasignación
- [ ] Ir a `/evaluaciones/nueva` y crear una evaluación sobre el establecimiento sintético.
- [ ] Confirmar la autoasignación del creador como evaluador del expediente.
- [ ] Verificar el estado inicial: **borrador**.

### A4. Aplicación guiada y autoguardado Supabase
- [ ] Abrir la evaluación y recorrer las 7 dimensiones / 28 criterios.
- [ ] Registrar estado, nivel, evidencia y justificación en varios criterios.
- [ ] Confirmar que el autoguardado persiste en Supabase (no solo `localStorage`).
- [ ] Recargar la página y verificar que las respuestas guardadas se recuperan.
- [ ] Verificar que NO se calcula puntaje (Fase 2 no puntúa).
- [ ] Confirmar el mensaje explícito que impide ingresar información real.

### A5. Evidencia privada (carga y lectura firmada)
- [ ] Subir un archivo sintético a un criterio (formato permitido, < 15 MB).
- [ ] Confirmar que la carga va directa al bucket privado `goei-evidence`
      (no pasa el archivo por Server Actions).
- [ ] Verificar el registro de metadatos: título, criterio, procedencia E1/E2/E3,
      sensibilidad, tipo y tamaño.
- [ ] Confirmar que la lectura se hace mediante **URL firmada de 60 s**, nunca pública.
- [ ] Intentar un formato no permitido y confirmar el rechazo.
- [ ] Confirmar que el evento `evidence.uploaded` queda en auditoría sin contenido sensible.

### A6. Envío (gate de completitud)
- [ ] Intentar enviar con criterios pendientes → debe **bloquearse**.
- [ ] Completar los 28 criterios y enviar → estado **enviada**.
- [ ] Confirmar que las respuestas quedan **bloqueadas** tras el envío.

### A7. Revisión, devolución y cierre
- [ ] Con rol supervisor metodológico o admin de organización, iniciar **revisión**.
- [ ] **Devolver** exigiendo una nota de revisión trazable → estado **devuelta**.
- [ ] Verificar que se puede reabrir/editar tras la devolución y reenviar.
- [ ] **Cerrar** exigiendo nota de revisión → estado **cerrada**.
- [ ] Confirmar que respuestas quedan bloqueadas en enviada, revisión y cerrada.
- [ ] Verificar el historial de transiciones de estado.

### A8. Auditoría operativa
- [ ] Abrir `/auditoria` (con rol de lectura autorizado).
- [ ] Confirmar que aparecen los eventos del recorrido: respuesta guardada,
      evidencia subida, transiciones de estado.
- [ ] Probar filtros (evaluaciones, evidencias, establecimientos, reportes) y búsqueda.
- [ ] Verificar traducción de códigos técnicos a lenguaje humano.
- [ ] Confirmar que no se muestran tokens, correos ni estructuras arbitrarias.

### A9. Invariantes de seguridad (verificación cruzada rápida)
- [ ] Con una segunda organización/usuario, confirmar que NO se ven expedientes ajenos.
- [ ] Confirmar que en todo el recorrido `field_capture_authorized` permanece `false`.

## B. QA visual por dispositivo

Repetir las pantallas clave en cada perfil. Sugerido: escritorio 1440px, tablet 768px,
móvil 390px (o dispositivos reales). Usar el modo responsive del navegador si no hay hardware.

Pantallas a revisar en cada dispositivo: portada `/`, `/login`, `/dashboard`,
`/establecimientos` (+ `/nuevo`), `/evaluaciones` (+ `/nueva` + aplicación guiada),
`/auditoria`, `/configuracion`, `/onboarding`, `/privacidad`, `/terminos`.

### Escritorio
- [ ] Layout, tipografía y espaciados correctos; sin desbordes horizontales.
- [ ] Navegación del `AppShell` y perfil lateral legibles.
- [ ] Formularios y aplicación guiada usables con teclado.

### Tablet
- [ ] Navegación colapsa/adapta correctamente.
- [ ] La aplicación guiada de 28 criterios es navegable sin cortes.
- [ ] Tablas/listas de auditoría y evaluaciones scrollean sin romper el layout.

### Móvil
- [ ] Menús y acciones alcanzables con el pulgar; objetivos táctiles suficientes.
- [ ] Enlaces legales visibles en la portada sin iniciar sesión.
- [ ] Botones de estado (enviar/revisar/devolver/cerrar) accesibles y claros.
- [ ] No hay texto cortado ni superposiciones en criterios con justificación larga.

### Transversal (todos los dispositivos)
- [ ] Contraste y foco visibles (accesibilidad básica).
- [ ] Mensajes de bloqueo (captura real, formato de evidencia, gate de envío) legibles.
- [ ] La etiqueta provisional / advertencias metodológicas se mantienen visibles.

## Registro de resultado

Al terminar, anotar en `PROJECT_STATUS.md`:

- [ ] Marcar el recorrido sintético integral como completado y mover a "Trabajo completado".
- [ ] Marcar "Realizar QA visual real en escritorio, tablet y móvil".
- [ ] Actualizar fecha, responsable y estado.
- [ ] Registrar cualquier defecto encontrado como nuevo pendiente o bloqueo.

> Recordatorio: un recorrido correcto valida funciones sintéticas, seguridad,
> roles y trazabilidad. **No** autoriza captura real ni sustituye decisiones
> científicas, éticas o de privacidad.
