# GOEI APP — Estado vivo y coordinación de trabajo

> **Documento obligatorio de continuidad.** Codex, Claude y cualquier colaborador deben leer este archivo antes de modificar la aplicación y actualizarlo al terminar cada cambio material.

## Última actualización

- Fecha: 2026-08-29
- Responsable de la actualización: Codex
- Fase activa: Fase 3 — resultados, reportes y experiencia operativa
- Estado técnico: MVP sintético funcional con cinco casos comparables, formularios normalizados, perfil operativo y exportaciones PDF/Excel; la demostración pública muestra la comparación de los cinco desenlaces y desplaza explícitamente hacia el criterio o la lectura solicitada. Las siete migraciones y sus pruebas estructurales están confirmadas en Supabase.
- Captura real: **NO AUTORIZADA**
- Repositorio de aplicación: `PabloGoup/GOEI_APP` privado, con rama propia `main` y contenido de la app en la raíz.
- Repositorio científico: `PabloGoup/GOEI`; no debe recibir merges ni commits de la aplicación.
- Despliegue de producción Vercel: `https://goei-app.vercel.app` — confirmado públicamente accesible.
- Última publicación confirmada: repositorio privado `PabloGoup/GOEI_APP`, rama `main`, commit de despliegue verificado `e670dc7`, Vercel `Ready` el 2026-08-26.
- Traspaso para Visual Studio: `docs/PROMPT_MAESTRO_CONTINUIDAD.md` y `../00_Gobernanza/coordinacion/GOEI_HANDOFF_0007_WEBAPP_VISUAL_STUDIO.md`.
- Línea base técnica de continuidad: `GOEI-BSL-TECH-WEBAPP-0001`, anclada al commit `41643a411be0f817870ce50e8bbc9841b77082ef`.

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
- Google OAuth fue habilitado y el proveedor acepta credenciales; el primer recorrido reveló dos ajustes operativos.
- Se corrigió la URI OAuth de Google al callback real de Supabase `oohjotwfgqsnhepdxdei.supabase.co`.
- Se eliminó el parámetro de consulta del `redirectTo` para que coincida exactamente con `/auth/callback` autorizado en Supabase.
- La portada consulta la sesión y cambia “Ingresar” por “Abrir portal” cuando existe identidad autenticada.
- Se corrigió la identidad Git de despliegue mediante la cuenta noreply verificada de GitHub; Vercel volvió a desplegar correctamente.
- Rutas públicas `/privacidad` y `/terminos` creadas para completar la información de marca exigida por Google.
- La página principal enlaza visiblemente ambas páginas legales sin exigir inicio de sesión.
- La política declara que Google sólo aporta identidad básica y que GOEI App no solicita Gmail, Drive, Calendar, contactos ni archivos.
- Los activos corporativos de `public/brand` son autocontenidos para que Vercel no dependa de enlaces hacia carpetas científicas externas.
- El usuario confirmó el 2026-08-26 el acceso Google en producción, la llegada del callback a `/dashboard`, la creación de una cuenta de prueba y la creación de su organización mediante `/onboarding`.

### Flujo operativo de revisión de evaluaciones sintéticas

- Estados visibles y controlados: borrador, aplicación, enviada, revisión, devuelta y cerrada.
- Un evaluador sólo puede enviar cuando los 28 criterios dejaron de estar pendientes.
- Supervisor metodológico o administrador de organización puede iniciar revisión.
- Devolver o cerrar exige una nota de revisión trazable.
- Las respuestas quedan bloqueadas mientras el expediente está enviado, en revisión o cerrado.
- Migración aditiva `202608250004_assessment_review_workflow.sql` con función `security definer`, historial de transiciones, RLS y auditoría.
- Prueba SQL `assessment_review_workflow.sql` para comprobar tabla, función segura y política RLS.
- La interfaz demuestra el flujo localmente sin persistir ni confundirlo con una transición real.
- El flujo rechaza expedientes verificados y conserva `field_capture_authorized = false`.

### Evidencias privadas sintéticas

- Solicitud de carga firmada desde una acción de servidor autenticada.
- Carga directa al bucket privado `goei-evidence`, sin pasar el archivo por Server Actions.
- Formatos permitidos: PDF, JPEG, PNG y CSV; límite de 15 MB.
- Ruta aislada por organización y evaluación, generada en servidor.
- Registro de título, criterio, procedencia E1/E2/E3, sensibilidad, tipo y tamaño.
- Verificación de existencia en Storage antes de registrar metadatos.
- Lectura mediante URL firmada de 60 segundos, nunca mediante URL pública.
- Registro del evento `evidence.uploaded` sin almacenar contenido sensible en auditoría.
- El modo demostrativo mantiene la carga deshabilitada y no acepta archivos locales.

### Auditoría operativa visible

- Pantalla de auditoría conectada a `audit_events` bajo RLS organizacional.
- Acceso de lectura limitado a administración de organización y supervisión metodológica.
- Historial sintético explícito en modo demostrativo.
- Filtros por evaluaciones, evidencias, establecimientos y reportes.
- Búsqueda por evento, criterio o referencia operativa.
- Traducción de códigos técnicos a lenguaje humano.
- Sanitización de metadatos mediante lista positiva; no se muestran tokens, correos ni estructuras arbitrarias.
- Límite de 200 eventos recientes para conservar una vista operativa manejable.
- La interfaz advierte que el registro técnico no constituye evidencia científica por sí solo.

### Verificación funcional de aislamiento RLS preparada

- Prueba SQL transaccional con dos usuarios y dos organizaciones completamente sintéticas.
- Comprobación bidireccional sobre organizaciones, membresías, establecimientos, evaluaciones, respuestas, evidencias, vínculos, revisión, auditoría y Storage privado.
- Prueba negativa de escritura cruzada mediante la función segura de auditoría.
- Limpieza automática mediante `ROLLBACK`; el ensayo no conserva sus datos sintéticos.
- Guía humana `docs/GUIA_VALIDACION_SUPABASE.md` con el orden de migraciones, pruebas e interpretación del resultado.
- La prueba está preparada localmente; todavía debe ejecutarse y confirmar `PASS` en el proyecto remoto de Supabase.
- La primera ejecución remota reveló una expresión regular incorrectamente escapada en las restricciones de `criterion_id` heredadas de Fase 2.
- La migración correctiva `202608260005_fix_criterion_id_constraints.sql` reemplaza ambas restricciones y conserva exclusivamente el rango `D1.1` a `D7.4`.
- La prueba `criterion_id_constraints.sql` comprueba límites válidos e identificadores inválidos antes de repetir el aislamiento.
- El usuario ejecutó la corrección y presentó resultado remoto `PASS` de `cross_organization_isolation.sql` el 2026-08-26.
- Quedó confirmado el aislamiento bidireccional en las 10 superficies cubiertas y el bloqueo de escritura cruzada; los datos sintéticos fueron descartados mediante `ROLLBACK`.

### Panel de preparación técnica

- La ruta `/configuracion` dejó de mostrar estados codificados y ahora obtiene una lectura operativa desde el servidor.
- En modo conectado verifica sesión, organización bajo RLS, disponibilidad del instrumento candidato y lectura autorizada de expedientes.
- Separa controles verificados, pruebas pendientes, bloqueos esperados y alertas técnicas.
- Mantiene evidencias privadas como prueba integral pendiente y el motor GOEI como integración de Fase 3.
- Advierte explícitamente que un control técnico correcto no autoriza captura real ni sustituye decisiones científicas, éticas o de privacidad.
- Panel publicado en producción y disponible para pruebas en el entorno demostrativo.

### Preparación del recorrido sintético integral

- Guía operativa única creada en `docs/GUIA_QA_RECORRIDO_INTEGRAL.md` para validar identidad, altas sintéticas, autoguardado, evidencia privada, ciclo de revisión, auditoría y presentación responsiva.
- La variable `NEXT_PUBLIC_APP_MODE` de producción fue cambiada de `demo` a `connected` el 2026-08-26 para ejercitar Supabase con la cuenta y organización de prueba existentes.
- Este cambio habilita únicamente los flujos sintéticos ya protegidos por las funciones RPC y RLS; `field_capture_authorized` continúa en `false` y la captura real sigue sin autorización.
- La portada adapta su acción principal al modo real del entorno: en producción conectada dirige al acceso, no promete una demostración local inexistente.
- El panorama conectado dejó de mostrar establecimientos, evaluaciones y porcentajes codificados: obtiene bajo RLS los casos de la organización, cuenta expedientes y calcula el avance desde respuestas no pendientes.
- El listado de establecimientos muestra el total real autorizado y el número de evaluaciones asociadas; el listado de evaluaciones recupera su porcentaje de completitud real.

### Fase 3 — base técnica del motor candidato

- `@goei/engine-ts` se incorporó dentro de `packages/engine-ts` como paquete privado e independiente de React y Supabase, conservando su fuente TypeScript canónica.
- La aplicación consume el paquete mediante una dependencia local versionada; Vercel no depende de carpetas externas del repositorio científico.
- Se creó `src/domain/engine-adapter.ts` para transformar respuestas, evidencias y metadatos explícitos al contrato `AssessmentInput` del motor.
- El adaptador rechaza cálculo cuando faltan criterios, unidad de análisis, período o gate crítico; no inventa valores para completar el contrato.
- Sólo admite expedientes declarados o sintéticos en esta etapa y conserva la naturaleza de datos correspondiente.
- La aplicación guiada muestra una tarjeta de preparación del motor con los bloqueos humanos pendientes y mantiene desempeño, cobertura y confianza como conceptos separados.
- El build raíz recompila el paquete privado antes de construir Next.js, por lo que Vercel no depende de artefactos `dist` conservados en Git.
- El QA visual local confirmó que el caso demostrativo presenta únicamente los bloqueos reales: 28 criterios, período y gate crítico; la etiqueta humana del caso sintético se normaliza al contrato técnico sin alterar su significado.
- Cuando el contrato está completo, la salida conserva digest SHA-256, versiones, advertencias y etiqueta `PROVISIONAL — NO VALIDADO`.
- Se añadieron tres pruebas de integración del adaptador: bloqueo por período/gate ausentes, salida parcial con gate no verificable y bloqueo por criterio pendiente.
- La fuente canónica del motor fue verificada nuevamente: TypeScript, build y 151/151 pruebas de paridad aprobadas el 2026-08-28.

### MVP sintético — recorrido completo preparado

- La evaluación incorpora captura explícita de inicio y fin del período, estado del gate crítico, fundamento y versión opcional del protocolo.
- La interfaz no infiere el gate desde respuestas ni desde un puntaje y conserva el carácter no compensatorio de un gate rojo.
- Una acción de servidor vuelve a leer evaluación, respuestas y evidencias bajo la sesión autorizada antes de invocar el motor; no confía en un resultado enviado por el navegador.
- La migración `202608280006_candidate_engine_runs.sql` agrega metadatos del gate y el historial inmutable `assessment_calculation_runs` con entrada, salida, digest, versiones, autor y fecha.
- El historial tiene políticas RLS independientes para lectura e inserción y continúa limitado a expedientes declarados o sintéticos sin captura real autorizada.
- La ruta `/resultados` muestra desempeño, cobertura, confianza, gate, banda, fecha y digest sin convertir la salida en certificación.
- El modo demostrativo incluye un expediente completo y reproducible que emite correctamente un perfil parcial sin puntaje ante gate no verificable.
- QA visual local en escritorio confirmó captura del contrato, bloqueo responsable, ejecución completa, siete perfiles dimensionales y la etiqueta `PROVISIONAL — NO VALIDADO`.
- La aplicación mantiene una consulta de compatibilidad mientras la nueva migración no esté instalada; guardar o ejecutar en modo conectado permanece bloqueado de forma explícita hasta aplicarla.

### Casos de negocio y guía humana

- Los tres casos demostrativos incluyen fichas coherentes con concepto, cocina, modelo de servicio, contexto, asientos, equipo, días, horarios, canales, demanda, abastecimiento, datos disponibles y desafíos operativos.
- La ruta dinámica `/establecimientos/[id]` presenta todos los datos del negocio en paneles legibles y enlaza directamente su evaluación.
- El formulario de alta sintética captura el mismo perfil integral y mantiene prohibidos nombres comerciales, direcciones, RUT y personas reales.
- La migración `202608280007_synthetic_business_profiles.sql` agrega el perfil JSON estructurado sólo a establecimientos sintéticos y una función segura de creación; conserva compatibilidad con casos anteriores sin inventar campos faltantes.
- La guía explica en lenguaje humano qué es GOEI, el alcance piloto, desempeño, confianza, cobertura, gate crítico, el recorrido completo del MVP y cómo interpretar una lectura.
- Se añadieron pruebas del contrato del perfil y de la restricción que impide asociarlo a establecimientos no sintéticos.

### Experiencia guiada, comparación y exportaciones

- Los campos repetibles del alta sintética se normalizaron mediante selectores y grupos de opciones para concepto, cocina, servicio, contexto, días, horario, canales, demanda, abastecimiento, registros y desafíos.
- El formulario se reorganizó en tres pasos humanos, con ayudas breves y explicación explícita del resultado de la acción.
- El banco demostrativo aumentó de tres a cinco establecimientos y cinco evaluaciones completas con salidas diferentes: 100, 75, 25, cero por gate rojo y perfil sin puntaje por gate no verificable.
- La pantalla de resultados incorpora tarjetas comparables de desempeño, gate, cobertura y confianza, sin confundir esas variables.
- Cada resultado puede descargar un reporte PDF, un libro Excel y una constancia de evaluación sintética; toda salida conserva la advertencia `PROVISIONAL — NO VALIDADO` y niega expresamente carácter de certificación.
- La lectura dentro del expediente ahora presenta un resumen ejecutivo, explicación del gate, siete dimensiones con nombre, métricas separadas de cobertura y confianza, trazabilidad y un panel de descargas visible; la comparación pública también ofrece PDF, Excel y constancia para cada uno de los cinco casos.
- Las exportaciones de los cinco expedientes públicos se resuelven de manera explícita en servidor, incluso cuando el portal conectado está activo, sin exponer ni depender de datos privados.
- El expediente incorpora una orientación trazable para cada uno de los 28 criterios: propósito, acción condicionada al hallazgo, evidencia que permite comprobarla y estado metodológico. La base de orientación se declara `CANDIDATO_TECNICO` hasta que exista la revisión científica formal correspondiente; no se presenta como recomendación clínica, jurídica ni como estándar ratificado.
- Los exportadores recuperan la ejecución autorizada en servidor y no aceptan una salida arbitraria enviada por el navegador.
- Los buscadores de establecimientos y evaluaciones, así como los filtros de estado, dejaron de ser elementos decorativos y funcionan en cliente.
- La navegación resalta la ruta activa correctamente y la tarjeta de usuario abre un perfil editable; organización y rol permanecen visibles y separados del nombre.
- Se añadió `uuid >=11.1.1` como override de seguridad para la cadena de ExcelJS; `npm audit` volvió a cero vulnerabilidades.

### Sistema visual editorial, navegación lateral y casos explicados

- La navegación se reorganizó según el recorrido del producto: Inicio, Establecimientos, Evaluaciones, Diagnóstico y Evolución; Informes, Comparar y Metodología permanecen disponibles sin exponer toda la complejidad de administración.
- Inicio muestra conjuntamente puntaje, gate, confianza y cobertura cuando existe una ejecución; Diagnóstico explica el perfil y los focos dimensionales sin convertir esa lectura en una regla normativa de priorización.
- Evolución exige al menos dos ejecuciones trazables del mismo expediente y advierte cuando sólo existen casos distintos, para no fabricar una trayectoria inexistente.
- El expediente añade un desglose transparente por dimensión y criterio, con nivel, subpuntaje normalizado, evidencia y condición de calculabilidad.

- La navegación lateral persistente se restauró en escritorio para el portal conectado y la demostración pública, conservando la estética editorial de superficies y tarjetas.
- Las rutas de uso frecuente permanecen visibles y guía, laboratorio y administración continúan accesibles mediante `Más`.
- En pantallas móviles la navegación pasa a un dock inferior de cinco accesos, con una hoja de opciones secundarias y respeto por el área segura del dispositivo.
- La portada dejó el patrón de dashboard promocional y adoptó una narrativa editorial: sistema de siete dimensiones, recorrido trazable y casos demostrativos.
- Tarjetas, estados y superficies ganaron jerarquía, profundidad y microinteracciones breves; todas las animaciones respetan `prefers-reduced-motion`.
- El cambio es exclusivamente visual y de navegación: no altera criterios, gates, cálculo, resultados ni autoridad metodológica.
- Los cinco casos públicos abren con sus 28 respuestas sintéticas completas y muestran automáticamente puntuación o condición de no emisión, dimensiones, cobertura, confianza y gate.
- El estado antiguo de `localStorage` ya no reemplaza los expedientes canónicos evaluados.
- Cada caso incluye fortalezas, hallazgos y acciones ilustrativas propias, separadas expresamente de cualquier recomendación ratificada del estándar.

### Laboratorio conectado al banco sintético

- La ruta `/laboratorio` ya no es un estado vacío: permite contrastar dos lecturas provisionales existentes del banco sintético.
- Se puede alternar la variable visible entre desempeño, cobertura y confianza, manteniéndolas separadas en todo momento.
- La comparación muestra los siete perfiles dimensionales y conserva los gates de ambos expedientes; nunca los compensa ni crea proyecciones.
- Los controles enlazan directamente las dos evaluaciones de origen para que la lectura sea verificable.

### Biblioteca navegable de criterios

- La Guía GOEI incluye ahora una biblioteca de los 28 criterios candidatos, con búsqueda y filtro por dimensión.
- Cada entrada expone sólo su nombre autorizado y la orientación de evidencia ya incluida en el instrumento; no incorpora umbrales, KPI ni reglas nuevas.

### Accesibilidad operativa inicial

- El portal conectado y la demostración pública incluyen un enlace de salto al contenido principal para uso por teclado y lector de pantalla.
- Navegación, menú secundario, perfil, formularios y controles conservan un foco visible consistente.
- El desplegable `Más` quedó en una capa de navegación superior a tarjetas y contenido; la hoja móvil conserva la misma prioridad visual.

### Portada editorial: trazabilidad

- La sección de trazabilidad se rediseñó como un recorrido compacto de cuatro etapas: hallazgo, evidencia, lectura y decisión.
- Se redujo el espacio ornamental y el tamaño excesivo del titular, priorizando legibilidad, contexto y acceso directo a la demostración.

### Resiliencia de acceso y carga conectada

- La verificación de sesión y permisos ahora tiene límites de espera: una demora de Supabase no deja la interfaz en un estado indeterminado.
- Se incorporaron pantalla de carga, recuperación con `Reintentar` y mensajes de login diferenciados para conexión, callback OAuth, origen y proveedor Google.
- El retorno OAuth construye la URL pública desde los encabezados reenviados por Vercel, reduciendo la dependencia de un encabezado `origin` ausente o inconsistente.
- El menú `Más` se cierra al elegir una ruta, al pulsar fuera o con `Escape`, por lo que no queda cubriendo la pantalla.
- Una organización conectada y vacía puede cargar cinco casos demostrativos sintéticos desde el panorama; la acción es idempotente, conserva perfiles y 28 respuestas por expediente, y no habilita captura real.
- La misma carga ahora genera y persiste la lectura provisional reproducible de cada expediente, junto con su digest, versiones y evento de auditoría; una segunda ejecución completa únicamente los resultados que falten.

## Verificaciones realizadas

Última verificación completa después de preparar producción conectada y sustituir los resúmenes codificados:

- TypeScript estricto: PASS.
- ESLint: PASS.
- Pruebas automatizadas de la aplicación: PASS — 30 de 30.
- Motor candidato independiente: PASS — 151 de 151 pruebas, incluida paridad Python/Excel.
- Build de producción: PASS.
- Next.js generó 19 rutas, incluidas callback OAuth, onboarding, aplicación guiada y resultados trazables.
- Dependencias: 0 vulnerabilidades en la última instalación/auditoría disponible.
- La pantalla guiada respondió desde el servidor local.
- `git diff --check`: sin problemas conocidos.
- Prueba de humo de producción del 2026-08-26: portada HTTP 200, ruta `/configuracion` HTTP 200 y estado Vercel `success`.
- Despliegue conectado `6795d01` confirmado `Ready` y asociado a `https://goei-app.vercel.app`; el acceso sin sesión redirige correctamente a `/login`.
- Integración del motor candidato publicada en `main` mediante `496b4c5`; despliegue de producción `dpl_4cLcbGpt1hrp29VGSgD8LA9Sbb57` confirmado `Ready` y asociado a `https://goei-app.vercel.app` el 2026-08-28.
- MVP sintético publicado en `main` mediante `ce7110e`; despliegue `dpl_rvPccVnfF1nAUKsrUqpoe9qNs4ck` confirmado `Ready` y asociado a `https://goei-app.vercel.app` el 2026-08-28.
- Fichas integrales y guía humana publicadas en `main` mediante `7817b9a`; despliegue `dpl_7xRq7ePYD5dbERrway8RA3c54k6n` confirmado `Ready` y asociado a `https://goei-app.vercel.app` el 2026-08-28.
- Experiencia guiada, cinco casos, comparación, reportes y perfil publicados en `main` mediante `03294f3`; despliegue `dpl_GvygZgCN5YjybHbipaEM7vcV9vob` confirmado `Ready` y asociado a `https://goei-app.vercel.app` el 2026-08-28. Smoke test público: portada, `/demo` y `/login` HTTP 200; `/demo` confirmó cinco casos.
- El salto OAuth de Google no puede ser completado por el navegador automatizado debido a su política de navegación externa; el recorrido autenticado requiere que el usuario abra la sesión de prueba antes de continuar la automatización.

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

### Estado de ejecución en Supabase

1. Migración `202608250003_authenticated_workspace.sql`: instalada y prueba estructural confirmada.
2. Migración `202608250004_assessment_review_workflow.sql`: instalada y prueba estructural confirmada.
3. Migración correctiva `202608260005_fix_criterion_id_constraints.sql`: instalada y prueba estructural confirmada.
4. Prueba funcional `cross_organization_isolation.sql`: `PASS` confirmado el 2026-08-26.

Las migraciones `202608280006_candidate_engine_runs.sql` y `202608280007_synthetic_business_profiles.sql` quedaron registradas y verificadas en el proyecto remoto el 2026-08-28. Las pruebas SQL `candidate_engine_runs.sql` y `synthetic_business_profiles.sql` devolvieron `PASS`; el historial local y remoto coincide para las siete migraciones. La credencial temporal usada para la conexión fue eliminada del llavero al terminar.

No ejecutar la prueba antes de la migración correspondiente.

## Variables de entorno

La aplicación utiliza:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
NEXT_PUBLIC_APP_MODE
```

- `NEXT_PUBLIC_APP_MODE=demo`: conserva los casos sintéticos aunque Supabase esté conectado.
- `NEXT_PUBLIC_APP_MODE=connected`: exige sesión y organización, y persiste exclusivamente los expedientes sintéticos habilitados en Supabase.
- No usar `service_role` en variables públicas.
- No leer, copiar ni registrar secretos dentro de este documento.

## Pendientes inmediatos

### Para cerrar Fase 2

- [x] Ejecutar migración y prueba Fase 2 en Supabase.
- [x] Ejecutar y confirmar la migración y prueba de flujo autenticado.
- [x] Habilitar Google en Supabase Auth y configurar sus URLs autorizadas.
- [ ] Evaluar un dominio propio y su verificación sólo cuando se prepare la publicación definitiva; no bloquea las pruebas en Vercel.
- [x] Desplegar página principal, privacidad y condiciones en `https://goei-app.vercel.app`.
- [x] Registrar las tres URLs públicas en Google Auth Platform y completar el cliente OAuth.
- [x] Probar acceso Google local y en el dominio HTTPS de producción.
- [x] Confirmar que el nuevo callback termina en `/dashboard` y marcar la prueba OAuth como aprobada.
- [x] Crear usuario real de prueba mediante Supabase Auth.
- [x] Crear la organización inicial desde `/onboarding`.
- [x] Ejecutar en Supabase la prueba funcional preparada para dos organizaciones y confirmar `PASS`.
- [x] Conectar formularios sintéticos de establecimientos a acciones de servidor.
- [x] Conectar creación sintética de evaluación y autoasignación del evaluador.
- [x] Sustituir autoguardado local por persistencia Supabase en expedientes conectados.
- [x] Conectar carga de evidencias al bucket privado mediante rutas firmadas; prueba integrada contra Supabase pendiente.
- [x] Registrar creación y guardado de respuestas desde funciones seguras de auditoría.
- [x] Implementar e instalar estados de envío, revisión, devolución y cierre; recorrido autenticado integral pendiente.
- [x] Preparar una guía humana única para el recorrido autenticado integral y QA responsivo.
- [ ] Realizar QA visual real en escritorio, tablet y móvil.

### Fase 3 — en curso

- [x] Integrar `17_Prototipo_Web/engine-ts` como paquete independiente.
- [x] Verificar nuevamente las 151 pruebas y paridad Python/Excel.
- [x] Construir el adaptador desde respuestas persistidas al contrato del motor.
- [x] Preparar persistencia de entrada, salida, digest y versiones por ejecución; migración remota pendiente.
- [x] Implementar captura explícita del período y del gate crítico sin compensación; migración remota pendiente.
- [x] Preparar visualización separada de desempeño, cobertura y confianza cuando el contrato esté completo.
- [x] Generar reportes PDF y Excel desde servidor.
- [x] Mantener la etiqueta provisional en pantalla y resultados.
- [x] Instalar y confirmar `PASS` de la migración/prueba de ejecuciones en Supabase.
- [x] Instalar y confirmar `PASS` de la migración/prueba de perfiles sintéticos en Supabase.

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

Conectar el banco de cinco casos a una carga demostrativa reproducible para organizaciones autenticadas y validar visualmente el nuevo sistema de navegación en producción. La captura real permanece bloqueada.
