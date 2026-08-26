-- GOEI APP · Verificación estructural de Fase 2 sin pgTAP.
-- Ejecutar después de 202608250002_phase2_core.sql.

do $$
declare
  missing_tables text[];
  missing_policies text[];
  rls_disabled text[];
  bucket_public boolean;
begin
  select array_agg(expected.table_name order by expected.table_name) into missing_tables
  from (values
    ('instrument_versions'),('assessments'),('assessment_assignments'),
    ('assessment_responses'),('evidence_items'),('response_evidence')
  ) expected(table_name)
  where to_regclass('public.' || expected.table_name) is null;
  if missing_tables is not null then raise exception 'GOEI F2 TEST: faltan tablas: %', array_to_string(missing_tables, ', '); end if;

  select array_agg(c.relname order by c.relname) into rls_disabled
  from pg_catalog.pg_class c join pg_catalog.pg_namespace n on n.oid=c.relnamespace
  where n.nspname='public' and c.relname=any(array[
    'instrument_versions','assessments','assessment_assignments',
    'assessment_responses','evidence_items','response_evidence'
  ]) and not c.relrowsecurity;
  if rls_disabled is not null then raise exception 'GOEI F2 TEST: RLS deshabilitado en: %', array_to_string(rls_disabled, ', '); end if;

  select array_agg(expected.policy_name order by expected.policy_name) into missing_policies
  from (values
    ('instrument_versions_read'),('assessments_read_authorized'),('assessments_create_non_real'),
    ('assessments_update_authorized'),('assignments_read_authorized'),('assignments_manage_admin'),
    ('responses_read_authorized'),('responses_insert_editor'),('responses_update_editor'),
    ('evidence_read_authorized'),('evidence_insert_editor'),('evidence_update_uploader'),
    ('response_evidence_read'),('response_evidence_insert')
  ) expected(policy_name)
  where not exists (select 1 from pg_catalog.pg_policies p where p.schemaname='public' and p.policyname=expected.policy_name);
  if missing_policies is not null then raise exception 'GOEI F2 TEST: faltan políticas: %', array_to_string(missing_policies, ', '); end if;

  if to_regprocedure('public.can_access_assessment(uuid)') is null then raise exception 'GOEI F2 TEST: falta can_access_assessment'; end if;
  if to_regprocedure('public.can_edit_assessment(uuid)') is null then raise exception 'GOEI F2 TEST: falta can_edit_assessment'; end if;

  select public into bucket_public from storage.buckets where id='goei-evidence';
  if bucket_public is null then raise exception 'GOEI F2 TEST: falta bucket goei-evidence'; end if;
  if bucket_public then raise exception 'GOEI F2 TEST: el bucket de evidencia no es privado'; end if;

  if not exists (
    select 1 from public.instrument_versions
    where instrument_code='GOEI-INSTRUMENT-PILOT-28' and version='0.1.0-candidate'
      and scientific_status='candidate' and (definition->>'criteriaCount')::int=28
  ) then raise exception 'GOEI F2 TEST: falta snapshot candidato de 28 criterios'; end if;
end
$$;

select 'PASS' as result,
  'Fase 2: 6 tablas, RLS, 14 políticas, 2 funciones, bucket privado e instrumento candidato' as verification,
  now() as checked_at;
