import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/lib/env";

export function createClient() {
  if (!env.supabaseUrl || !env.supabaseKey) {
    throw new Error("Supabase no está configurado. Revisa .env.local.");
  }
  return createBrowserClient(env.supabaseUrl, env.supabaseKey);
}
