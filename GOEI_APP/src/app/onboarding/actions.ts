"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const organizationSchema = z.object({
  name: z.string().trim().min(2).max(160),
  slug: z.string().trim().toLowerCase().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
});

export async function createFirstOrganization(formData: FormData) {
  const parsed = organizationSchema.safeParse({name: formData.get("name"), slug: formData.get("slug")});
  if (!parsed.success) redirect("/onboarding?error=formato");
  const supabase = await createClient();
  if (!supabase) redirect("/login?error=configuracion");
  const { data: claims } = await supabase.auth.getClaims();
  if (!claims?.claims?.sub) redirect("/login?error=sesion");
  const { error } = await supabase.rpc("create_first_organization", {
    org_name: parsed.data.name,
    org_slug: parsed.data.slug
  });
  if (error) redirect("/onboarding?error=organizacion");
  redirect("/dashboard");
}

