-- GOEI APP · Fase 1. Base operativa; no define contenido científico.
create type public.app_role as enum (
  'platform_admin','organization_admin','methodology_supervisor',
  'evaluator','establishment_representative','observer'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (char_length(display_name) between 1 and 120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 160),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  status text not null default 'active' check (status in ('active','suspended','archived')),
  created_at timestamptz not null default now()
);

create table public.organization_memberships (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  status text not null default 'active' check (status in ('invited','active','suspended')),
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create table public.establishments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 180),
  pseudonymous_code text not null,
  scope_status text not null default 'unverified' check (scope_status in ('unverified','eligible','ineligible')),
  is_synthetic boolean not null default false,
  created_at timestamptz not null default now(),
  unique (organization_id, pseudonymous_code)
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  organization_id uuid references public.organizations(id) on delete restrict,
  actor_user_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  entity_type text not null,
  entity_id text,
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

create or replace function public.is_org_member(target_org uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.organization_memberships m
    where m.organization_id = target_org and m.user_id = (select auth.uid()) and m.status = 'active'
  );
$$;

create or replace function public.has_org_role(target_org uuid, allowed public.app_role[])
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.organization_memberships m
    where m.organization_id = target_org and m.user_id = (select auth.uid())
      and m.status = 'active' and m.role = any(allowed)
  );
$$;

alter table public.profiles enable row level security;
alter table public.organizations enable row level security;
alter table public.organization_memberships enable row level security;
alter table public.establishments enable row level security;
alter table public.audit_events enable row level security;

revoke all on public.profiles, public.organizations, public.organization_memberships, public.establishments, public.audit_events from anon, authenticated;
grant select, update on public.profiles to authenticated;
grant select on public.organizations, public.organization_memberships to authenticated;
grant select, insert, update on public.establishments to authenticated;
grant select on public.audit_events to authenticated;

create policy profiles_select_self on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy profiles_update_self on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy organizations_select_member on public.organizations for select to authenticated using (public.is_org_member(id));
create policy memberships_select_member on public.organization_memberships for select to authenticated using (public.is_org_member(organization_id));
create policy establishments_select_member on public.establishments for select to authenticated using (public.is_org_member(organization_id));
create policy establishments_insert_admin on public.establishments for insert to authenticated with check (public.has_org_role(organization_id, array['organization_admin']::public.app_role[]));
create policy establishments_update_admin on public.establishments for update to authenticated using (public.has_org_role(organization_id, array['organization_admin']::public.app_role[])) with check (public.has_org_role(organization_id, array['organization_admin']::public.app_role[]));
create policy audit_select_admin_supervisor on public.audit_events for select to authenticated using (public.has_org_role(organization_id, array['organization_admin','methodology_supervisor']::public.app_role[]));

-- No client policy inserts audit events. A trusted server function will append them.
create index memberships_user_idx on public.organization_memberships(user_id, status);
create index establishments_org_idx on public.establishments(organization_id);
create index audit_org_time_idx on public.audit_events(organization_id, occurred_at desc);
