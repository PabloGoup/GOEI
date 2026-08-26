-- GOEI APP · Flujo operativo de revisión para expedientes sintéticos.
-- No calcula resultados, no valida la metodología y no autoriza captura real.

create table public.assessment_review_events (
  id bigint generated always as identity primary key,
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  organization_id uuid not null references public.organizations(id) on delete restrict,
  from_status public.assessment_status not null,
  to_status public.assessment_status not null,
  note text,
  actor_user_id uuid not null references auth.users(id) on delete restrict,
  created_at timestamptz not null default now(),
  check (note is null or char_length(trim(note)) between 4 and 3000)
);

alter table public.assessment_review_events enable row level security;
revoke all on public.assessment_review_events from anon, authenticated;
grant select on public.assessment_review_events to authenticated;

create policy assessment_review_events_read on public.assessment_review_events
for select to authenticated using (public.can_access_assessment(assessment_id));

create index assessment_review_events_assessment_idx
on public.assessment_review_events(assessment_id, created_at desc);

create or replace function public.transition_synthetic_assessment(
  target_assessment uuid,
  requested_action text,
  requested_note text default null
)
returns public.assessment_status
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_user_id uuid := auth.uid();
  current_record public.assessments%rowtype;
  next_status public.assessment_status;
  response_count integer;
  clean_note text := nullif(trim(requested_note), '');
  is_evaluator boolean;
  is_reviewer boolean;
begin
  if current_user_id is null then raise exception 'AUTHENTICATION_REQUIRED'; end if;
  select * into current_record from public.assessments where id = target_assessment for update;
  if current_record.id is null then raise exception 'ASSESSMENT_NOT_FOUND'; end if;
  if current_record.assessment_kind <> 'SYNTHETIC_DEMONSTRATION' or current_record.field_capture_authorized then
    raise exception 'SYNTHETIC_ONLY';
  end if;

  is_evaluator := public.has_org_role(current_record.organization_id, array['organization_admin']::public.app_role[])
    or exists (select 1 from public.assessment_assignments where assessment_id = target_assessment and user_id = current_user_id and assignment_role = 'EVALUATOR');
  is_reviewer := public.has_org_role(current_record.organization_id, array['organization_admin','methodology_supervisor']::public.app_role[]);

  if requested_action = 'SUBMIT' and current_record.status in ('DRAFT','IN_PROGRESS','RETURNED') and is_evaluator then
    select count(*) into response_count from public.assessment_responses
    where assessment_id = target_assessment and status <> 'PENDING';
    if response_count <> 28 then raise exception 'ASSESSMENT_INCOMPLETE'; end if;
    next_status := 'SUBMITTED';
  elsif requested_action = 'START_REVIEW' and current_record.status = 'SUBMITTED' and is_reviewer then
    next_status := 'IN_REVIEW';
  elsif requested_action = 'RETURN' and current_record.status = 'IN_REVIEW' and is_reviewer then
    if clean_note is null or char_length(clean_note) < 4 then raise exception 'REVIEW_NOTE_REQUIRED'; end if;
    next_status := 'RETURNED';
  elsif requested_action = 'CLOSE' and current_record.status = 'IN_REVIEW' and is_reviewer then
    if clean_note is null or char_length(clean_note) < 4 then raise exception 'REVIEW_NOTE_REQUIRED'; end if;
    next_status := 'CLOSED';
  else
    raise exception 'TRANSITION_NOT_ALLOWED';
  end if;

  update public.assessments set
    status = next_status,
    submitted_at = case when next_status = 'SUBMITTED' then now() else submitted_at end,
    closed_at = case when next_status = 'CLOSED' then now() else null end,
    updated_at = now()
  where id = target_assessment;

  insert into public.assessment_review_events (assessment_id, organization_id, from_status, to_status, note, actor_user_id)
  values (target_assessment, current_record.organization_id, current_record.status, next_status, clean_note, current_user_id);

  insert into public.audit_events (organization_id, actor_user_id, event_type, entity_type, entity_id, metadata)
  values (current_record.organization_id, current_user_id,
    case next_status when 'SUBMITTED' then 'assessment.submitted' when 'IN_REVIEW' then 'assessment.review_started'
      when 'RETURNED' then 'assessment.returned' else 'assessment.closed' end,
    'assessment', target_assessment::text, jsonb_build_object('fromStatus', current_record.status, 'toStatus', next_status));
  return next_status;
end;
$$;

revoke all on function public.transition_synthetic_assessment(uuid, text, text) from public, anon;
grant execute on function public.transition_synthetic_assessment(uuid, text, text) to authenticated;
