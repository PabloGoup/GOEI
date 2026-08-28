-- GOEI APP · Fase 3. Ejecuciones trazables del motor candidato.
-- No ratifica el modelo, no autoriza captura real y no convierte resultados en certificación.

alter table public.assessments
  add column gate_status text,
  add column gate_basis text,
  add column gate_protocol_version text,
  add constraint assessments_gate_status_check
    check (gate_status is null or gate_status in ('VERDE','ROJO','NO_VERIFICABLE')),
  add constraint assessments_gate_complete_check
    check (
      (gate_status is null and gate_basis is null and gate_protocol_version is null)
      or (gate_status is not null and char_length(trim(gate_basis)) >= 8)
    );

create table public.assessment_calculation_runs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete restrict,
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  contract_version text not null,
  model_version text not null,
  input_digest text not null check (input_digest ~ '^sha256:[0-9a-f]{64}$'),
  input_payload jsonb not null,
  output_payload jsonb not null,
  emission_status text not null check (emission_status in ('PROVISIONAL_SCORE','ZERO_BY_RED_GATE','PARTIAL_PROFILE_NO_SCORE')),
  calculated_by uuid not null references auth.users(id) on delete restrict,
  calculated_at timestamptz not null,
  created_at timestamptz not null default now(),
  unique (assessment_id, input_digest, calculated_at)
);

alter table public.assessment_calculation_runs enable row level security;
revoke all on public.assessment_calculation_runs from public, anon, authenticated;
grant select, insert on public.assessment_calculation_runs to authenticated;

create policy calculation_runs_read_authorized
on public.assessment_calculation_runs for select to authenticated
using (public.can_access_assessment(assessment_id));

create policy calculation_runs_insert_authorized
on public.assessment_calculation_runs for insert to authenticated
with check (
  calculated_by = (select auth.uid())
  and public.can_access_assessment(assessment_id)
  and exists (
    select 1 from public.assessments a
    where a.id = assessment_id
      and a.organization_id = organization_id
      and a.assessment_kind in ('DECLARED_PREASSESSMENT','SYNTHETIC_DEMONSTRATION')
      and a.field_capture_authorized = false
  )
);

create index calculation_runs_assessment_time_idx
  on public.assessment_calculation_runs(assessment_id, calculated_at desc);
create index calculation_runs_org_time_idx
  on public.assessment_calculation_runs(organization_id, calculated_at desc);

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
    'assessment.calculated', 'evidence.uploaded', 'evidence.accessed', 'report.exported'
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
