-- Corrección aditiva: criterio válido y coherencia organización-expediente.
-- No habilita captura real ni cambia la metodología.
begin;

alter table public.improvement_actions
  drop constraint improvement_actions_criterion_id_check;
alter table public.improvement_actions
  add constraint improvement_actions_criterion_id_check
  check (criterion_id is null or criterion_id ~ '^D[1-7][.][1-4]$');

drop policy improvement_actions_update on public.improvement_actions;
create policy improvement_actions_update on public.improvement_actions
for update to authenticated
using (public.can_access_assessment(assessment_id))
with check (
  public.can_access_assessment(assessment_id)
  and exists (
    select 1 from public.assessments a
    where a.id = assessment_id
      and a.organization_id = improvement_actions.organization_id
  )
);

commit;
