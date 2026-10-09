# Verificación operativa del piloto de simulación — 2026-10-08

Alcance confirmado por Dirección en esta sesión: aún no existen autorizaciones para uso real; se trabaja exclusivamente con simulaciones. Este registro no promueve ni valida científicamente el instrumento.

## Verificado

- [x] TypeScript, ESLint, 33 pruebas de aplicación y build de producción (`npm run verify`).
- [x] Los cinco expedientes demostrativos responden por HTTP.
- [x] Quince descargas: PDF, Excel y constancia por cada uno de los cinco casos, con cabeceras de archivo válidas.
- [x] Inspección visual de inicio en escritorio y expediente en móvil/tablet.
- [x] Ancho del expediente sin desborde: 390/390 px y 768/768 px después de la corrección.
- [x] Guardar período/gate y actualizar mejoras exige recuperar la fila modificada; una actualización de cero filas ya no se anuncia como exitosa.
- [x] Alta del establecimiento: un error de creación del perfil no se oculta creando otro registro sin perfil.
- [x] Migración aditiva 009 preparada y ejecutada en PostgreSQL aislado: acepta 28 criterios, rechaza cinco identificadores inválidos, conserva actualización legítima y rechaza cambio inconsistente de organización y acceso cruzado.
- [x] Secretos, archivos temporales e informes locales excluidos explícitamente del despliegue mediante `.vercelignore`.

La prueba aislada usa un fixture mínimo de autorización. No sustituye las políticas completas ni una ejecución en Supabase.

## Pendiente de cierre conectado

- [ ] Aplicar `supabase/migrations/202610080009_improvement_integrity.sql` en Supabase y verificar el flujo de mejoras con las políticas reales.
- [ ] Recorrido autenticado: alta, autoguardado, carga/lectura de evidencia privada, envío, devolución y cierre.
- [ ] QA completo de todas las rutas autenticadas en los tres tamaños de pantalla.

Estos puntos no se han marcado como aprobados a partir de las pruebas públicas.

## Reproducción

Desde GOEI_APP:

```sh
npm run verify
npm run dev -- --port 3100
```

En otra terminal:

```sh
node scripts/smoke-demo.mjs
```

Para una URL publicada, definir `GOEI_QA_URL` al ejecutar el mismo script.

La prueba PostgreSQL usa `@electric-sql/pglite` instalado en un directorio temporal. `GOEI_SQL_QA_PACKAGE` debe apuntar al `package.json` de ese entorno:

```sh
npm install --prefix /tmp/goei-sql-qa --no-package-lock @electric-sql/pglite
GOEI_SQL_QA_PACKAGE=/tmp/goei-sql-qa/package.json node scripts/verify-improvement-migration.mjs
```

## Uso permitido

Abrir `/demo`, elegir uno de los cinco expedientes y consultar su lectura, las 28 respuestas y las descargas. El portal autenticado permite trabajar con expedientes sintéticos según los permisos existentes. No ingresar datos reales de restaurantes, clientes o trabajadores.

La habilitación de campo continúa dependiendo de los requisitos documentados en `../11_Validacion/Prepiloto_MIPYME_Chile/CONTROL_DE_EJECUCION.md` (GOEI, 2026). No se han cambiado fórmulas, dimensiones, criterios, ponderaciones ni autorizaciones.

## Publicación y verificación remota

- [x] Demo pública existente `https://goei-app.vercel.app/demo`: cinco expedientes y quince descargas verificadas mediante `GOEI_QA_URL=https://goei-app.vercel.app node scripts/smoke-demo.mjs`.
- [ ] Publicación de las correcciones de esta sesión: **bloqueada por Vercel**.

Intento: `dpl_8NQRro5QeCg6grteJgA2ANWzGQpo`. Estado confirmado mediante API y CLI 63.1.0: `BLOCKED`, código `TEAM_ACCESS_REQUIRED`. Motivo: el autor del commit no tiene permiso para desplegar en el proyecto. No se modificó la identidad Git ni se intentó eludir el control. La demo pública verificada corresponde a la versión anterior, no a estas correcciones.

La vinculación del CLI descargó inicialmente variables de desarrollo; se restauró `.env.local` desde el entorno de producción del proyecto. No se imprimieron valores ni se incorporaron secretos al repositorio.
