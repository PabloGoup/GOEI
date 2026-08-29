-- GOEI APP · Planes de mejora trazables.
-- Las acciones son decisiones operativas editables; no son recomendaciones científicas automáticas.

create table public.improvement_actions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete restrict,
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  dimension_id text check (dimension_id is null or dimension_id ~ '^D[1-7]$'),
  criterion_id text check (criterion_id is null or criterion_id ~ '^D[1-7]\\.[1-4]$'),
  title text not null check (char_length(trim(title)) between 4 and 240),
  rationale text not null default '' check (char_length(rationale) <= 1200),
  owner_name text check (owner_name is null or char_length(trim(owner_name)) between 2 and 120),
  due_date date,
  verification_note text not null default '' check (char_length(verification_note) <= 1200),
  status text not null default 'OPEN' check (status in ('OPEN','IN_PROGRESS','VERIFIED','CANCELLED')),
  created_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.improvement_actions enable row level security;
revoke all on public.improvement_actions from anon, authenticated;
grant select, insert, update on public.improvement_actions to authenticated;
create policy improvement_actions_read on public.improvement_actions for select to authenticated using (public.can_access_assessment(assessment_id));
create policy improvement_actions_insert on public.improvement_actions for insert to authenticated with check (
  public.can_access_assessment(assessment_id) and created_by = (select auth.uid())
  and exists (select 1 from public.assessments a where a.id = assessment_id and a.organization_id = improvement_actions.organization_id)
);
create policy improvement_actions_update on public.improvement_actions for update to authenticated using (public.can_access_assessment(assessment_id)) with check (public.can_access_assessment(assessment_id));
