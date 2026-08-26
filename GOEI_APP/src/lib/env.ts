const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const env = {
  supabaseUrl,
  supabaseKey,
  isSupabaseConfigured: Boolean(supabaseUrl && supabaseKey),
  appMode: process.env.NEXT_PUBLIC_APP_MODE ?? "demo"
} as const;
