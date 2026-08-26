-- Ejecutar después de 202608250004_assessment_review_workflow.sql.
do $$
begin
  if not exists (select 1 from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and c.relname='assessment_review_events') then
    raise exception 'FAIL: falta assessment_review_events';
  end if;
  if not exists (select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace where n.nspname='public' and p.proname='transition_synthetic_assessment' and p.pronargs=3 and p.prosecdef) then
    raise exception 'FAIL: falta transición segura';
  end if;
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='assessment_review_events' and policyname='assessment_review_events_read') then
    raise exception 'FAIL: falta RLS de lectura';
  end if;
end $$;
select 'PASS' as assessment_review_workflow_structure;
