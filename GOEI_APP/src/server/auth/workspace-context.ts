import { redirect } from "next/navigation";
import { roleLabels, type AppRole } from "@/domain/access";
import { env } from "@/lib/env";
import { createClient } from "@/lib/supabase/server";

export type WorkspaceContext = {
  mode: "demo" | "connected";
  userId: string | null;
  displayName: string;
  initials: string;
  organizationId: string | null;
  organizationName: string;
  role: AppRole;
  roleLabel: string;
};

function initialsOf(value: string) {
  return value.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]?.toUpperCase()).join("") || "GO";
}

export async function requireWorkspaceContext(): Promise<WorkspaceContext> {
  if (env.appMode === "demo") {
    return {
      mode: "demo", userId: null, displayName: "Entorno demostrativo", initials: "DE",
      organizationId: null, organizationName: "Organización sintética", role: "organization_admin",
      roleLabel: "Administrador · demostración"
    };
  }

  const supabase = await createClient();
  if (!supabase) redirect("/login?error=configuracion");
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (claimsError || !userId) redirect("/login?error=sesion");

  const [{ data: profile }, { data: memberships, error: membershipError }] = await Promise.all([
    supabase.from("profiles").select("display_name").eq("id", userId).maybeSingle(),
    supabase.from("organization_memberships")
      .select("organization_id,role,organizations(name)")
      .eq("user_id", userId).eq("status", "active").limit(1)
  ]);
  if (membershipError) redirect("/login?error=permisos");
  const membership = memberships?.[0];
  if (!membership) redirect("/onboarding");
  const organization = Array.isArray(membership.organizations) ? membership.organizations[0] : membership.organizations;
  const role = membership.role as AppRole;
  const displayName = profile?.display_name || "Usuario GOEI";

  return {
    mode: "connected", userId, displayName, initials: initialsOf(displayName),
    organizationId: membership.organization_id,
    organizationName: organization?.name ?? "Organización",
    role, roleLabel: roleLabels[role]
  };
}

