-- GOEI APP · Perfiles integrales de casos de negocio sintéticos.
-- La estructura describe el caso; no crea KPI ni autoriza información real.

alter table public.establishments
  add column synthetic_profile jsonb,
  add constraint establishments_synthetic_profile_check check (
    synthetic_profile is null or (
      is_synthetic = true
      and jsonb_typeof(synthetic_profile) = 'object'
      and jsonb_typeof(synthetic_profile -> 'channels') = 'array'
      and jsonb_typeof(synthetic_profile -> 'challenges') = 'array'
      and (synthetic_profile ->> 'seats')::integer between 1 and 2000
      and (synthetic_profile ->> 'teamSize')::integer between 1 and 1000
    )
  );

create or replace function public.create_profiled_synthetic_establishment(
  target_org uuid,
  requested_name text,
  requested_code text,
  requested_profile jsonb
)
returns uuid language plpgsql security definer set search_path = '' as $$
declare current_user_id uuid := auth.uid(); created_id uuid;
begin
  if current_user_id is null or not public.has_org_role(target_org, array['organization_admin']::public.app_role[]) then raise exception 'ACCESS_DENIED'; end if;
  if char_length(trim(requested_name)) not between 2 and 180 then raise exception 'INVALID_NAME'; end if;
  if trim(requested_code) !~ '^SYN-[A-Z0-9-]{2,30}$' then raise exception 'INVALID_SYNTHETIC_CODE'; end if;
  if jsonb_typeof(requested_profile) <> 'object' then raise exception 'INVALID_PROFILE'; end if;
  insert into public.establishments (organization_id, display_name, pseudonymous_code, scope_status, is_synthetic, synthetic_profile)
  values (target_org, trim(requested_name), trim(requested_code), 'unverified', true, requested_profile) returning id into created_id;
  insert into public.audit_events (organization_id, actor_user_id, event_type, entity_type, entity_id, metadata)
  values (target_org, current_user_id, 'establishment.created', 'establishment', created_id::text, jsonb_build_object('synthetic', true, 'profiled', true));
  return created_id;
end; $$;

revoke all on function public.create_profiled_synthetic_establishment(uuid, text, text, jsonb) from public, anon;
grant execute on function public.create_profiled_synthetic_establishment(uuid, text, text, jsonb) to authenticated;
