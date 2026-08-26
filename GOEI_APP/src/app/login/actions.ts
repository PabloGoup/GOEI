"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import type { Route } from "next";
import { createClient } from "@/lib/supabase/server";

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || password.length < 8) redirect("/login?error=credenciales");
  const supabase = await createClient();
  if (!supabase) redirect("/login?error=configuracion");
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect("/login?error=acceso");
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/login");
}

export async function signInWithGoogle() {
  const supabase = await createClient();
  if (!supabase) redirect("/login?error=configuracion");
  const requestHeaders = await headers();
  const origin = requestHeaders.get("origin");
  if (!origin) redirect("/login?error=origen");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${origin}/auth/callback?next=/dashboard` }
  });
  if (error || !data.url) redirect("/login?error=google");
  redirect(data.url as Route);
}
