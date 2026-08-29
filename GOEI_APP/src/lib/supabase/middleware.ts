import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "@/lib/env";
import { waitForRemote } from "@/lib/remote";

export async function updateSession(request: NextRequest) {
  if (!env.supabaseUrl || !env.supabaseKey) return NextResponse.next({ request });
  let response = NextResponse.next({ request });
  const supabase = createServerClient(env.supabaseUrl, env.supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (items) => {
        items.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        items.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      }
    }
  });
  try {
    await waitForRemote("validar la sesión", supabase.auth.getClaims(), 5000);
  } catch {
    // La página mostrará una recuperación controlada si su consulta autenticada tampoco responde.
    // No bloqueamos toda la navegación por una renovación de sesión lenta.
  }
  return response;
}
