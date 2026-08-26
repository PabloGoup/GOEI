-- GOEI APP · Prueba funcional de aislamiento entre organizaciones.
-- Ejecutar después de las migraciones 001 a 004.
-- Crea datos sintéticos dentro de una transacción y siempre termina con ROLLBACK.

begin;

insert into auth.users (
  id, aud, role, email, raw_app_meta_data, raw_user_meta_data, created_at, updated_at
) values
  ('10000000-0000-4000-8000-000000000001', 'authenticated', 'authenticated',
   'rls-a@synthetic.invalid', '{"provider":"email","providers":["email"]}',
   '{"display_name":"Usuario sintético A"}', now(), now()),
  ('20000000-0000-4000-8000-000000000002', 'authenticated', 'authenticated',
   'rls-b@synthetic.invalid', '{"provider":"email","providers":["email"]}',
   '{"display_name":"Usuario sintético B"}', now(), now());

insert into public.organizations (id, name, slug) values
  ('a0000000-0000-4000-8000-000000000001', 'Organización sintética A', 'rls-synthetic-a'),
  ('b0000000-0000-4000-8000-000000000002', 'Organización sintética B', 'rls-synthetic-b');

insert into public.organization_memberships (organization_id, user_id, role, status) values
  ('a0000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001', 'organization_admin', 'active'),
  ('b0000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002', 'organization_admin', 'active');

insert into public.establishments (
  id, organization_id, display_name, pseudonymous_code, scope_status, is_synthetic
) values
  ('a1000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'Local sintético A', 'SYN-RLS-A', 'unverified', true),
  ('b1000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000002', 'Local sintético B', 'SYN-RLS-B', 'unverified', true);

insert into public.assessments (
  id, organization_id, establishment_id, instrument_version_id, assessment_kind,
  status, field_capture_authorized, created_by
) select
  fixtures.assessment_id,
  fixtures.organization_id,
  fixtures.establishment_id,
  instrument.id,
  'SYNTHETIC_DEMONSTRATION',
  'DRAFT',
  false,
  fixtures.user_id
from (values
  ('a2000000-0000-4000-8000-000000000001'::uuid, 'a0000000-0000-4000-8000-000000000001'::uuid, 'a1000000-0000-4000-8000-000000000001'::uuid, '10000000-0000-4000-8000-000000000001'::uuid),
  ('b2000000-0000-4000-8000-000000000002'::uuid, 'b0000000-0000-4000-8000-000000000002'::uuid, 'b1000000-0000-4000-8000-000000000002'::uuid, '20000000-0000-4000-8000-000000000002'::uuid)
) fixtures(assessment_id, organization_id, establishment_id, user_id)
cross join lateral (
  select id from public.instrument_versions
  where instrument_code = 'GOEI-INSTRUMENT-PILOT-28' and version = '0.1.0-candidate'
  limit 1
) instrument;

insert into public.assessment_assignments (assessment_id, user_id, assignment_role, assigned_by) values
  ('a2000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001', 'EVALUATOR', '10000000-0000-4000-8000-000000000001'),
  ('b2000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002', 'EVALUATOR', '20000000-0000-4000-8000-000000000002');

insert into public.assessment_responses (
  assessment_id, criterion_id, dimension_id, status, evidence_grade, justification, updated_by
) values
  ('a2000000-0000-4000-8000-000000000001', 'D1.1', 'D1', 'PENDING', 0, 'Caso sintético A', '10000000-0000-4000-8000-000000000001'),
  ('b2000000-0000-4000-8000-000000000002', 'D1.1', 'D1', 'PENDING', 0, 'Caso sintético B', '20000000-0000-4000-8000-000000000002');

insert into public.evidence_items (
  id, organization_id, assessment_id, criterion_id, evidence_code, title, storage_path,
  mime_type, size_bytes, provenance, data_status, sensitivity, uploaded_by
) values
  ('a3000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'a2000000-0000-4000-8000-000000000001', 'D1.1', 'EVD-RLSA00000001', 'Evidencia sintética A', 'a0000000-0000-4000-8000-000000000001/a2000000-0000-4000-8000-000000000001/fixture.pdf', 'application/pdf', 128, 'E3', 'AVAILABLE_SYNTHETIC', 'internal', '10000000-0000-4000-8000-000000000001'),
  ('b3000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000002', 'b2000000-0000-4000-8000-000000000002', 'D1.1', 'EVD-RLSB00000002', 'Evidencia sintética B', 'b0000000-0000-4000-8000-000000000002/b2000000-0000-4000-8000-000000000002/fixture.pdf', 'application/pdf', 128, 'E3', 'AVAILABLE_SYNTHETIC', 'internal', '20000000-0000-4000-8000-000000000002');

insert into public.response_evidence (assessment_id, criterion_id, evidence_id, linked_by) values
  ('a2000000-0000-4000-8000-000000000001', 'D1.1', 'a3000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001'),
  ('b2000000-0000-4000-8000-000000000002', 'D1.1', 'b3000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002');

insert into public.audit_events (organization_id, actor_user_id, event_type, entity_type, entity_id, metadata) values
  ('a0000000-0000-4000-8000-000000000001', '10000000-0000-4000-8000-000000000001', 'assessment.created', 'assessment', 'a2000000-0000-4000-8000-000000000001', '{"synthetic":true}'),
  ('b0000000-0000-4000-8000-000000000002', '20000000-0000-4000-8000-000000000002', 'assessment.created', 'assessment', 'b2000000-0000-4000-8000-000000000002', '{"synthetic":true}');

insert into public.assessment_review_events (
  assessment_id, organization_id, from_status, to_status, note, actor_user_id
) values
  ('a2000000-0000-4000-8000-000000000001', 'a0000000-0000-4000-8000-000000000001', 'DRAFT', 'IN_PROGRESS', 'Evento sintético A', '10000000-0000-4000-8000-000000000001'),
  ('b2000000-0000-4000-8000-000000000002', 'b0000000-0000-4000-8000-000000000002', 'DRAFT', 'IN_PROGRESS', 'Evento sintético B', '20000000-0000-4000-8000-000000000002');

insert into storage.objects (bucket_id, name, metadata) values
  ('goei-evidence', 'a0000000-0000-4000-8000-000000000001/a2000000-0000-4000-8000-000000000001/fixture.pdf', '{"mimetype":"application/pdf","size":128}'),
  ('goei-evidence', 'b0000000-0000-4000-8000-000000000002/b2000000-0000-4000-8000-000000000002/fixture.pdf', '{"mimetype":"application/pdf","size":128}');

set local role authenticated;
select set_config('request.jwt.claim.sub', '10000000-0000-4000-8000-000000000001', true);
select set_config('request.jwt.claim.role', 'authenticated', true);

do $$
declare blocked boolean := false;
begin
  if (select count(*) from public.organizations) <> 1 then raise exception 'FAIL A: organizations no está aislada'; end if;
  if (select count(*) from public.organization_memberships) <> 1 then raise exception 'FAIL A: memberships no está aislada'; end if;
  if (select count(*) from public.establishments) <> 1 then raise exception 'FAIL A: establishments no está aislada'; end if;
  if (select count(*) from public.assessments) <> 1 then raise exception 'FAIL A: assessments no está aislada'; end if;
  if (select count(*) from public.assessment_responses) <> 1 then raise exception 'FAIL A: responses no está aislada'; end if;
  if (select count(*) from public.evidence_items) <> 1 then raise exception 'FAIL A: evidence_items no está aislada'; end if;
  if (select count(*) from public.response_evidence) <> 1 then raise exception 'FAIL A: response_evidence no está aislada'; end if;
  if (select count(*) from public.audit_events) <> 1 then raise exception 'FAIL A: audit_events no está aislada'; end if;
  if (select count(*) from public.assessment_review_events) <> 1 then raise exception 'FAIL A: review_events no está aislada'; end if;
  if (select count(*) from storage.objects where bucket_id = 'goei-evidence' and name in (
    'a0000000-0000-4000-8000-000000000001/a2000000-0000-4000-8000-000000000001/fixture.pdf',
    'b0000000-0000-4000-8000-000000000002/b2000000-0000-4000-8000-000000000002/fixture.pdf'
  )) <> 1 then raise exception 'FAIL A: Storage no está aislado'; end if;
  if public.can_access_assessment('b2000000-0000-4000-8000-000000000002') then raise exception 'FAIL A: puede acceder a evaluación B'; end if;

  begin
    perform public.append_audit_event(
      'b0000000-0000-4000-8000-000000000002', 'assessment.created', 'assessment',
      'b2000000-0000-4000-8000-000000000002', '{"synthetic":true}'
    );
  exception when others then
    blocked := true;
  end;
  if not blocked then raise exception 'FAIL A: append_audit_event permitió escritura cruzada'; end if;
end $$;

select set_config('request.jwt.claim.sub', '20000000-0000-4000-8000-000000000002', true);

do $$
begin
  if (select count(*) from public.organizations) <> 1 then raise exception 'FAIL B: organizations no está aislada'; end if;
  if (select count(*) from public.establishments) <> 1 then raise exception 'FAIL B: establishments no está aislada'; end if;
  if (select count(*) from public.assessments) <> 1 then raise exception 'FAIL B: assessments no está aislada'; end if;
  if (select count(*) from public.assessment_responses) <> 1 then raise exception 'FAIL B: responses no está aislada'; end if;
  if (select count(*) from public.evidence_items) <> 1 then raise exception 'FAIL B: evidence_items no está aislada'; end if;
  if (select count(*) from public.audit_events) <> 1 then raise exception 'FAIL B: audit_events no está aislada'; end if;
  if (select count(*) from storage.objects where bucket_id = 'goei-evidence' and name in (
    'a0000000-0000-4000-8000-000000000001/a2000000-0000-4000-8000-000000000001/fixture.pdf',
    'b0000000-0000-4000-8000-000000000002/b2000000-0000-4000-8000-000000000002/fixture.pdf'
  )) <> 1 then raise exception 'FAIL B: Storage no está aislado'; end if;
  if public.can_access_assessment('a2000000-0000-4000-8000-000000000001') then raise exception 'FAIL B: puede acceder a evaluación A'; end if;
end $$;

select 'PASS' as result,
  'Aislamiento bidireccional verificado en 10 superficies; escritura cruzada bloqueada' as verification,
  'Los datos sintéticos se eliminan mediante ROLLBACK' as cleanup;

rollback;
