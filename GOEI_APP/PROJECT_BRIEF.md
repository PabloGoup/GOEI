# GOEI APP — Documento base del producto

## Propósito

Construir una aplicación web robusta, segura, visual e interactiva para aplicar GOEI a establecimientos gastronómicos, guiar a evaluadores, administrar evidencias, ejecutar simulaciones separadas de los casos reales y generar reportes trazables.

## Alcance inicial

- Restaurante con servicio en sitio.
- MIPYME de Chile.
- Establecimiento individual.
- Prepiloto y posterior piloto GOEI.
- Resultados provisionales claramente diferenciados de una validación científica.

## Usuarios y roles operativos propuestos

- Administrador de plataforma.
- Administrador de organización.
- Supervisor metodológico.
- Evaluador.
- Representante del establecimiento.
- Observador o lector.

Los roles son una configuración operativa revisable; no constituyen una decisión científica.

## Capacidades principales

- Inicio de sesión y recuperación de acceso.
- Organizaciones, equipos, establecimientos y usuarios.
- Evaluaciones guiadas mediante el instrumento GOEI versionado.
- Explicación humana de cada criterio: propósito, relevancia, señales y evidencia esperada.
- Registro de respuestas, hallazgos, justificaciones, fuentes y evidencias.
- Gates críticos, cobertura y confianza visibles.
- Revisión, control de calidad e historial de cambios.
- Reportes en pantalla y exportaciones autorizadas.
- Planes de mejora y seguimiento.
- Laboratorio de simulación claramente separado de evaluaciones reales.
- Biblioteca explicativa integrada.
- Grillas profesionales para información operativa y auditoría.

## Experiencia visual

La línea editorial debe ser institucional, sobria, clara y contemporánea, coherente con los documentos GOEI existentes:

- azul marino y azul técnico como base;
- verde suave para derivaciones y estados conformes;
- amarillo cálido para entradas y atención;
- rojo moderado para bloqueos y condiciones críticas;
- fondos claros, contraste accesible y tipografía legible;
- animaciones breves con propósito y soporte para reducción de movimiento;
- visualizaciones que expliquen progreso, dimensiones, gates, cobertura, confianza y evolución;
- identidad corporativa reutilizada desde recursos existentes, sin deformar ni reinventar logotipos.

## Seguridad mínima

- Supabase Auth y separación por organización.
- Row Level Security en todas las tablas de negocio.
- Buckets privados y enlaces firmados para evidencias.
- Autorización comprobada en servidor y base de datos, no sólo en la interfaz.
- Mínimo privilegio, seudonimización, minimización y retención controlada.
- Auditoría de accesos, cambios relevantes, exportaciones y cambios de estado.
- Validación de archivos, formatos y tamaños.
- Ningún secreto o service-role key expuesto al navegador.

## Flujo central

1. Inicio de sesión y selección de organización.
2. Selección o registro del establecimiento.
3. Verificación del alcance y la elegibilidad.
4. Creación de evaluación con instrumento y motor versionados.
5. Comprobación de gates previos.
6. Aplicación guiada de los 28 criterios.
7. Registro de evidencia, hallazgos y justificación.
8. Revisión de pendientes e inconsistencias.
9. Revisión paralela cuando corresponda.
10. Evaluación del gate crítico.
11. Cálculo solamente cuando el resultado sea emitible.
12. Revisión, reporte y plan de mejora.

## Fases previstas

### Fase 0 — Diagnóstico y arquitectura

Inventario de activos reutilizables, mapa de fuentes metodológicas, arquitectura, modelo de datos, matriz de permisos, mapa de pantallas, riesgos y criterios de aceptación.

### Fase 1 — Base segura

Next.js, sistema visual, Supabase, autenticación, organizaciones, perfiles, membresías, roles, RLS y navegación principal.

### Fase 2 — Núcleo de evaluación

Establecimientos, instrumentos versionados, evaluaciones, aplicación guiada, evidencias, autoguardado y trazabilidad.

### Fase 3 — Motor y reportes

Integración independiente del motor existente, paridad, gates, cobertura, confianza, resultados provisionales y exportaciones.

### Fase 4 — Guía y simuladores

Biblioteca explicativa, ayuda contextual, escenarios sintéticos y visualizaciones interactivas.

### Fase 5 — Preparación de campo

Pruebas de seguridad, roles, entrenamiento, auditoría y habilitación controlada. No se capturan datos reales hasta aprobar los gates externos.

## Primera entrega requerida

Antes de construir pantallas o bases de datos, producir dentro de esta carpeta:

1. Diagnóstico del prototipo y motor existentes.
2. Inventario de componentes reutilizables.
3. Arquitectura propuesta.
4. Modelo de datos preliminar.
5. Matriz de roles y permisos.
6. Mapa de pantallas y navegación.
7. Riesgos técnicos y metodológicos.
8. Plan incremental con criterios de aceptación.

Después de revisar esta primera entrega se inicia la Fase 1.
