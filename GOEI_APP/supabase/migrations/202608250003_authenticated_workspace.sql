-- GOEI APP · Flujo autenticado de espacio de trabajo.
-- Crea identidad operativa, primera organización y auditoría sin otorgar privilegios globales.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    left(coalesce(nullif(trim(new.raw_user_meta_data ->> 'display_name'), ''), split_part(new.email, '@', 1)), 120)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

create or replace function public.create_synthetic_establishment(target_org uuid, requested_name text, requested_code text)
returns uuid language plpgsql security definer set search_path = '' as $$
declare current_user_id uuid := auth.uid(); created_id uuid;
begin
  if current_user_id is null or not public.has_org_role(target_org, array['organization_admin']::public.app_role[]) then raise exception 'ACCESS_DENIED'; end if;
  if char_length(trim(requested_name)) not between 2 and 180 then raise exception 'INVALID_NAME'; end if;
  if trim(requested_code) !~ '^SYN-[A-Z0-9-]{2,30}$' then raise exception 'INVALID_SYNTHETIC_CODE'; end if;
  insert into public.establishments (organization_id, display_name, pseudonymous_code, scope_status, is_synthetic)
  values (target_org, trim(requested_name), trim(requested_code), 'unverified', true) returning id into created_id;
  insert into public.audit_events (organization_id, actor_user_id, event_type, entity_type, entity_id, metadata)
  values (target_org, current_user_id, 'establishment.created', 'establishment', created_id::text, jsonb_build_object('synthetic', true));
  return created_id;
end; $$;

create or replace function public.create_synthetic_assessment(target_establishment uuid)
returns uuid language plpgsql security definer set search_path = '' as $$
declare current_user_id uuid := auth.uid(); target_org uuid; instrument_id uuid; created_id uuid;
begin
  select organization_id into target_org from public.establishments where id = target_establishment and is_synthetic = true;
  if target_org is null or current_user_id is null or not public.has_org_role(target_org, array['organization_admin','methodology_supervisor','evaluator']::public.app_role[]) then raise exception 'ACCESS_DENIED'; end if;
  select id into instrument_id from public.instrument_versions where instrument_code = 'GOEI-INSTRUMENT-PILOT-28' and version = '0.1.0-candidate';
  if instrument_id is null then raise exception 'INSTRUMENT_NOT_AVAILABLE'; end if;
  insert into public.assessments (organization_id, establishment_id, instrument_version_id, assessment_kind, status, field_capture_authorized, created_by)
  values (target_org, target_establishment, instrument_id, 'SYNTHETIC_DEMONSTRATION', 'DRAFT', false, current_user_id) returning id into created_id;
  insert into public.assessment_assignments (assessment_id, user_id, assignment_role, assigned_by) values (created_id, current_user_id, 'EVALUATOR', current_user_id);
  insert into public.audit_events (organization_id, actor_user_id, event_type, entity_type, entity_id, metadata)
  values (target_org, current_user_id, 'assessment.created', 'assessment', created_id::text, jsonb_build_object('synthetic', true, 'instrumentVersion', '0.1.0-candidate'));
  return created_id;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Backfill defensivo para usuarios creados antes de instalar el trigger.
insert into public.profiles (id, display_name)
select u.id, left(coalesce(nullif(trim(u.raw_user_meta_data ->> 'display_name'), ''), split_part(u.email, '@', 1)), 120)
from auth.users u
where not exists (select 1 from public.profiles p where p.id = u.id);

create or replace function public.create_first_organization(org_name text, org_slug text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  created_org_id uuid;
  clean_name text := trim(org_name);
  clean_slug text := lower(trim(org_slug));
begin
  if current_user_id is null then
    raise exception 'AUTHENTICATION_REQUIRED';
  end if;
  if char_length(clean_name) not between 2 and 160 then
    raise exception 'INVALID_ORGANIZATION_NAME';
  end if;
  if clean_slug !~ '^[a-z0-9]+(?:-[a-z0-9]+)*$' then
    raise exception 'INVALID_ORGANIZATION_SLUG';
  end if;
  if exists (
    select 1 from public.organization_memberships
    where user_id = current_user_id and status in ('active', 'invited')
  ) then
    raise exception 'MEMBERSHIP_ALREADY_EXISTS';
  end if;

  insert into public.organizations (name, slug)
  values (clean_name, clean_slug)
  returning id into created_org_id;

  insert into public.organization_memberships (organization_id, user_id, role, status)
  values (created_org_id, current_user_id, 'organization_admin', 'active');

  insert into public.audit_events (
    organization_id, actor_user_id, event_type, entity_type, entity_id, metadata
  ) values (
    created_org_id, current_user_id, 'organization.created', 'organization', created_org_id::text,
    jsonb_build_object('source', 'authenticated_onboarding')
  );

  return created_org_id;
exception
  when unique_violation then
    raise exception 'ORGANIZATION_SLUG_UNAVAILABLE';
end;
$$;

create or replace function public.append_audit_event(
  target_org uuid,
  requested_event_type text,
  requested_entity_type text,
  requested_entity_id text default null,
  requested_metadata jsonb default '{}'::jsonb
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  created_event_id bigint;
begin
  if current_user_id is null or not public.is_org_member(target_org) then
    raise exception 'ACCESS_DENIED';
  end if;
  if requested_event_type not in (
    'establishment.created', 'assessment.created', 'assessment.response_saved',
    'assessment.submitted', 'assessment.returned', 'assessment.closed',
    'evidence.uploaded', 'evidence.accessed', 'report.exported'
  ) then
    raise exception 'EVENT_TYPE_NOT_ALLOWED';
  end if;
  if char_length(trim(requested_entity_type)) not between 2 and 80 then
    raise exception 'INVALID_ENTITY_TYPE';
  end if;
  if jsonb_typeof(coalesce(requested_metadata, '{}'::jsonb)) <> 'object' then
    raise exception 'INVALID_METADATA';
  end if;

  insert into public.audit_events (
    organization_id, actor_user_id, event_type, entity_type, entity_id, metadata
  ) values (
    target_org, current_user_id, requested_event_type, trim(requested_entity_type),
    requested_entity_id, coalesce(requested_metadata, '{}'::jsonb)
  ) returning id into created_event_id;

  return created_event_id;
end;
$$;

revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.create_first_organization(text, text) from public, anon;
grant execute on function public.create_first_organization(text, text) to authenticated;
revoke all on function public.append_audit_event(uuid, text, text, text, jsonb) from public, anon;
grant execute on function public.append_audit_event(uuid, text, text, text, jsonb) to authenticated;
revoke all on function public.create_synthetic_establishment(uuid, text, text) from public, anon;
grant execute on function public.create_synthetic_establishment(uuid, text, text) to authenticated;
revoke all on function public.create_synthetic_assessment(uuid) from public, anon;
grant execute on function public.create_synthetic_assessment(uuid) to authenticated;
