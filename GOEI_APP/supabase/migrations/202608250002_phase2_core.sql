-- GOEI APP · Fase 2. Núcleo operativo.
-- Implementa expedientes y trazabilidad; no autoriza captura real ni define ciencia.

create type public.assessment_kind as enum (
  'DECLARED_PREASSESSMENT','SYNTHETIC_DEMONSTRATION','VERIFIED_ASSESSMENT'
);
create type public.assessment_status as enum (
  'DRAFT','IN_PROGRESS','SUBMITTED','IN_REVIEW','RETURNED','CLOSED','CANCELLED'
);
create type public.assessment_assignment_role as enum ('EVALUATOR','REVIEWER');
create type public.criterion_status as enum ('PENDING','EVALUABLE','NO_APLICA','NO_VERIFICABLE');
create type public.data_provenance as enum ('E1','E2','E3');

create table public.instrument_versions (
  id uuid primary key default gen_random_uuid(),
  instrument_code text not null,
  version text not null,
  model_version text not null,
  scientific_status text not null check (scientific_status in ('candidate','approved','retired')),
  source_reference text not null,
  definition jsonb not null,
  definition_digest text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  unique (instrument_code, version)
);

create table public.assessments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete restrict,
  establishment_id uuid not null references public.establishments(id) on delete restrict,
  instrument_version_id uuid not null references public.instrument_versions(id) on delete restrict,
  assessment_kind public.assessment_kind not null,
  status public.assessment_status not null default 'DRAFT',
  period_start date,
  period_end date,
  field_capture_authorized boolean not null default false,
  created_by uuid not null references auth.users(id) on delete restrict,
  submitted_at timestamptz,
  closed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (period_end is null or period_start is null or period_end >= period_start),
  check (assessment_kind <> 'VERIFIED_ASSESSMENT' or field_capture_authorized)
);

create table public.assessment_assignments (
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  assignment_role public.assessment_assignment_role not null,
  assigned_by uuid not null references auth.users(id) on delete restrict,
  assigned_at timestamptz not null default now(),
  primary key (assessment_id, user_id, assignment_role)
);

create table public.assessment_responses (
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  criterion_id text not null check (criterion_id ~ '^D[1-7]\\.[1-4]$'),
  dimension_id text not null check (dimension_id ~ '^D[1-7]$'),
  status public.criterion_status not null default 'PENDING',
  level smallint check (level between 0 and 4),
  evidence_grade smallint not null default 0 check (evidence_grade between 0 and 3),
  provenance public.data_provenance,
  justification text not null default '',
  no_apply_basis text,
  bars_version text,
  source_evaluator_id uuid references auth.users(id) on delete set null,
  updated_by uuid not null references auth.users(id) on delete restrict,
  updated_at timestamptz not null default now(),
  primary key (assessment_id, criterion_id),
  check (
    (status = 'PENDING' and level is null and evidence_grade = 0) or
    (status = 'EVALUABLE' and level is not null and evidence_grade between 1 and 3) or
    (status = 'NO_APLICA' and level is null and no_apply_basis is not null and char_length(trim(no_apply_basis)) > 0) or
    (status = 'NO_VERIFICABLE' and level is null and evidence_grade = 0)
  )
);

create table public.evidence_items (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete restrict,
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  criterion_id text check (criterion_id is null or criterion_id ~ '^D[1-7]\\.[1-4]$'),
  evidence_code text not null,
  title text not null check (char_length(title) between 2 and 180),
  storage_path text not null unique,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0 and size_bytes <= 15728640),
  provenance public.data_provenance not null,
  data_status text not null,
  sensitivity text not null check (sensitivity in ('internal','confidential','restricted')),
  uploaded_by uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  deleted_at timestamptz,
  unique (assessment_id, evidence_code)
);

create table public.response_evidence (
  assessment_id uuid not null,
  criterion_id text not null,
  evidence_id uuid not null references public.evidence_items(id) on delete restrict,
  linked_by uuid not null references auth.users(id) on delete restrict,
  linked_at timestamptz not null default now(),
  primary key (assessment_id, criterion_id, evidence_id),
  foreign key (assessment_id, criterion_id) references public.assessment_responses(assessment_id, criterion_id) on delete cascade
);

create or replace function public.can_access_assessment(target_assessment uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.assessments a
    where a.id = target_assessment
      and (
        public.has_org_role(a.organization_id, array['organization_admin']::public.app_role[])
        or exists (
          select 1 from public.assessment_assignments aa
          where aa.assessment_id = a.id and aa.user_id = (select auth.uid())
        )
      )
  );
$$;

create or replace function public.can_edit_assessment(target_assessment uuid)
returns boolean language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.assessments a
    where a.id = target_assessment
      and a.status in ('DRAFT','IN_PROGRESS','RETURNED')
      and (
        public.has_org_role(a.organization_id, array['organization_admin']::public.app_role[])
        or exists (
          select 1 from public.assessment_assignments aa
          where aa.assessment_id = a.id and aa.user_id = (select auth.uid())
            and aa.assignment_role = 'EVALUATOR'
        )
      )
  );
$$;

alter table public.instrument_versions enable row level security;
alter table public.assessments enable row level security;
alter table public.assessment_assignments enable row level security;
alter table public.assessment_responses enable row level security;
alter table public.evidence_items enable row level security;
alter table public.response_evidence enable row level security;

revoke all on public.instrument_versions, public.assessments, public.assessment_assignments, public.assessment_responses, public.evidence_items, public.response_evidence from anon, authenticated;
grant select on public.instrument_versions to authenticated;
grant select, insert, update on public.assessments, public.assessment_assignments, public.assessment_responses, public.evidence_items, public.response_evidence to authenticated;

create policy instrument_versions_read on public.instrument_versions for select to authenticated using (true);
create policy assessments_read_authorized on public.assessments for select to authenticated using (public.can_access_assessment(id));
create policy assessments_create_non_real on public.assessments for insert to authenticated with check (
  public.has_org_role(organization_id, array['organization_admin','methodology_supervisor','evaluator']::public.app_role[])
  and created_by = (select auth.uid()) and field_capture_authorized = false
  and assessment_kind in ('DECLARED_PREASSESSMENT','SYNTHETIC_DEMONSTRATION')
);
create policy assessments_update_authorized on public.assessments for update to authenticated using (public.can_edit_assessment(id)) with check (public.can_edit_assessment(id) and field_capture_authorized = false);
create policy assignments_read_authorized on public.assessment_assignments for select to authenticated using (public.can_access_assessment(assessment_id));
create policy assignments_manage_admin on public.assessment_assignments for insert to authenticated with check (exists (
  select 1 from public.assessments a where a.id = assessment_id
    and public.has_org_role(a.organization_id, array['organization_admin']::public.app_role[])
));
create policy responses_read_authorized on public.assessment_responses for select to authenticated using (public.can_access_assessment(assessment_id));
create policy responses_insert_editor on public.assessment_responses for insert to authenticated with check (public.can_edit_assessment(assessment_id) and updated_by = (select auth.uid()));
create policy responses_update_editor on public.assessment_responses for update to authenticated using (public.can_edit_assessment(assessment_id)) with check (public.can_edit_assessment(assessment_id) and updated_by = (select auth.uid()));
create policy evidence_read_authorized on public.evidence_items for select to authenticated using (public.can_access_assessment(assessment_id) and deleted_at is null);
create policy evidence_insert_editor on public.evidence_items for insert to authenticated with check (public.can_edit_assessment(assessment_id) and uploaded_by = (select auth.uid()));
create policy evidence_update_uploader on public.evidence_items for update to authenticated using (public.can_edit_assessment(assessment_id) and uploaded_by = (select auth.uid())) with check (public.can_edit_assessment(assessment_id) and uploaded_by = (select auth.uid()));
create policy response_evidence_read on public.response_evidence for select to authenticated using (public.can_access_assessment(assessment_id));
create policy response_evidence_insert on public.response_evidence for insert to authenticated with check (public.can_edit_assessment(assessment_id) and linked_by = (select auth.uid()));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('goei-evidence', 'goei-evidence', false, 15728640, array['application/pdf','image/jpeg','image/png','text/csv'])
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy goei_evidence_read on storage.objects for select to authenticated using (
  bucket_id = 'goei-evidence'
  and case when (storage.foldername(name))[2] ~ '^[0-9a-f-]{36}$'
    then public.can_access_assessment(((storage.foldername(name))[2])::uuid) else false end
);
create policy goei_evidence_insert on storage.objects for insert to authenticated with check (
  bucket_id = 'goei-evidence'
  and case when (storage.foldername(name))[2] ~ '^[0-9a-f-]{36}$'
    then public.can_edit_assessment(((storage.foldername(name))[2])::uuid) else false end
);

create index assessments_org_status_idx on public.assessments(organization_id, status, updated_at desc);
create index assignments_user_idx on public.assessment_assignments(user_id, assessment_id);
create index responses_assessment_idx on public.assessment_responses(assessment_id, dimension_id);
create index evidence_assessment_idx on public.evidence_items(assessment_id, criterion_id) where deleted_at is null;

insert into public.instrument_versions (
  instrument_code, version, model_version, scientific_status, source_reference, definition
) values (
  'GOEI-INSTRUMENT-PILOT-28',
  '0.1.0-candidate',
  'GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate',
  'candidate',
  '07_Ponderacion_y_formula/GOEI_Modelo_Puntaje_Salud_Operacional_Piloto_v0.1.md',
  '{"dimensionIds":["D1","D2","D3","D4","D5","D6","D7"],"criterionIds":["D1.1","D1.2","D1.3","D1.4","D2.1","D2.2","D2.3","D2.4","D3.1","D3.2","D3.3","D3.4","D4.1","D4.2","D4.3","D4.4","D5.1","D5.2","D5.3","D5.4","D6.1","D6.2","D6.3","D6.4","D7.1","D7.2","D7.3","D7.4"],"criteriaCount":28,"scientificStatus":"candidate","fieldCaptureAuthorized":false}'::jsonb
) on conflict (instrument_code, version) do nothing;
