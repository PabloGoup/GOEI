# Guía breve para validar Supabase

Esta guía permite comprobar la ampliación autenticada sin habilitar captura real ni utilizar información de negocios.

## Antes de comenzar

Usa el proyecto de Supabase destinado a GOEI APP y abre su editor SQL. No pegues claves, contraseñas ni datos personales en los scripts.

Confirma que las migraciones de Fase 1 y Fase 2 ya fueron ejecutadas. Si alguna migración siguiente ya fue aplicada, no la ejecutes nuevamente: continúa con su prueba.

## Orden obligatorio

1. Ejecuta `202608250003_authenticated_workspace.sql`.
2. Ejecuta `authenticated_workspace.sql` y confirma que devuelve `PASS`.
3. Ejecuta `202608250004_assessment_review_workflow.sql`.
4. Ejecuta `assessment_review_workflow.sql` y confirma que devuelve `PASS`.
5. Ejecuta `202608260005_fix_criterion_id_constraints.sql`.
6. Ejecuta `criterion_id_constraints.sql` y confirma que devuelve `PASS`.
7. Ejecuta `cross_organization_isolation.sql` y confirma que devuelve `PASS`.
8. Ejecuta `202608280006_candidate_engine_runs.sql`.
9. Ejecuta `candidate_engine_runs.sql` y confirma que devuelve `PASS`.

Los archivos están dentro de las carpetas `supabase/migrations` y `supabase/tests` de la aplicación.

## Qué comprueba la prueba de aislamiento

La prueba crea temporalmente dos usuarios, dos organizaciones y expedientes sintéticos separados. Luego simula la sesión de cada usuario y comprueba que sólo pueda ver los registros de su propia organización en:

- organizaciones y membresías;
- establecimientos;
- evaluaciones y respuestas;
- evidencias y vínculos;
- eventos de revisión;
- auditoría;
- objetos del bucket privado.

También intenta registrar un evento dentro de la organización ajena y exige que Supabase lo rechace.

Todo se ejecuta dentro de una transacción que termina con `ROLLBACK`. Si la prueba finaliza correctamente, no conserva usuarios, organizaciones, archivos ni registros sintéticos.

## Cómo interpretar el resultado

- `PASS`: las políticas aplicadas aislaron correctamente las dos organizaciones en este escenario de prueba.
- `FAIL ...`: no avances a una prueba con usuarios reales. Conserva el mensaje completo para diagnosticar la política o tabla indicada.
- Error por objeto existente: confirma que una ejecución anterior no quedó abierta y vuelve a iniciar la prueba en una nueva consulta.

Un resultado correcto valida el aislamiento técnico del escenario cubierto. No autoriza captura real, no valida científicamente GOEI y no sustituye una auditoría de seguridad independiente.

La migración de ejecuciones agrega el período y gate explícitos al contrato operativo y un historial inmutable de entradas y salidas del motor. La aplicación conserva compatibilidad de lectura antes de instalarla, pero no podrá guardar ni ejecutar cálculos conectados hasta completar los pasos 8 y 9.
