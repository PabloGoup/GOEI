# GOEI APP

Aplicación web para aplicar, explicar y auditar la metodología GOEI.

Esta carpeta es la raíz exclusiva del proyecto de software. El repositorio GOEI que la contiene actúa como fuente metodológica y de gobernanza; no debe modificarse desde el desarrollo de la aplicación.

El despliegue y desarrollo de software se publican en el repositorio privado independiente `PabloGoup/GOEI_APP`. El repositorio científico `PabloGoup/GOEI` permanece separado y actúa como fuente metodológica de solo lectura para la aplicación.

Para comenzar una sesión de trabajo en Visual Studio, abre directamente:

`/Users/ptoledos/GOEI/GOEI_APP`

Lee primero `AGENTS.md`, `PROJECT_STATUS.md`, `PROJECT_BRIEF.md` y `docs/FASE_0_DIAGNOSTICO_Y_ARQUITECTURA.md`.

`PROJECT_STATUS.md` es el registro vivo obligatorio para mantener alineados a Codex, Claude y colaboradores humanos.

## Estado actual

- Fase 0 documentada.
- Fase 1 implementada como base funcional.
- Next.js 16, React 19 y TypeScript estricto.
- Supabase SSR preparado y migración inicial con RLS disponible.
- Entorno demostrativo con casos sintéticos; captura real bloqueada.

## Ejecutar

```bash
cp .env.example .env.local
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:3000`.

Para comprobar la base completa:

```bash
npm run verify
```

Sin credenciales de Supabase se mantiene el modo demostrativo. No agregues secretos al repositorio.

## Acceso con Google

La aplicación incluye Google OAuth mediante Supabase Auth y flujo PKCE. Para activarlo:

1. En Google Auth Platform crea un cliente OAuth de tipo **Web application**.
2. Añade como origen autorizado `http://localhost:3000` y posteriormente el dominio HTTPS de producción.
3. Añade como URI de redirección autorizada `https://TU_PROYECTO.supabase.co/auth/v1/callback`.
4. En Supabase abre **Authentication → Providers → Google**, habilita el proveedor e ingresa el Client ID y Client Secret. El secreto queda en Supabase, nunca en este repositorio.
5. En **Authentication → URL Configuration**, usa `http://localhost:3000` como Site URL durante desarrollo y agrega `http://localhost:3000/auth/callback` a Redirect URLs. Agrega también la URL equivalente de producción.

El callback interno de la aplicación es `/auth/callback`. Después del acceso, un usuario sin membresía pasa por `/onboarding`; un usuario existente entra a su organización bajo las mismas políticas RLS que cualquier otro método de autenticación.
