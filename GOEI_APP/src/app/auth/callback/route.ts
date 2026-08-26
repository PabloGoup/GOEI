import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const requestedNext = url.searchParams.get("next") ?? "/dashboard";
  const next = requestedNext.startsWith("/") && !requestedNext.startsWith("//") ? requestedNext : "/dashboard";

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        const forwardedHost = request.headers.get("x-forwarded-host");
        const forwardedProtocol = request.headers.get("x-forwarded-proto") ?? "https";
        if (process.env.NODE_ENV === "production" && forwardedHost) {
          return NextResponse.redirect(`${forwardedProtocol}://${forwardedHost}${next}`);
        }
        return NextResponse.redirect(`${url.origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${url.origin}/login?error=oauth_callback`);
}
