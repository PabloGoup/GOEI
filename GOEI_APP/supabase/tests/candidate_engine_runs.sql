begin;

do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'assessments' and column_name = 'gate_status'
  ) then raise exception 'FAIL: falta gate_status'; end if;

  if not exists (
    select 1 from information_schema.tables
    where table_schema = 'public' and table_name = 'assessment_calculation_runs'
  ) then raise exception 'FAIL: falta assessment_calculation_runs'; end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'assessment_calculation_runs'
      and policyname = 'calculation_runs_read_authorized'
  ) then raise exception 'FAIL: falta RLS de lectura'; end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'assessment_calculation_runs'
      and policyname = 'calculation_runs_insert_authorized'
  ) then raise exception 'FAIL: falta RLS de inserción'; end if;
end $$;

select 'PASS' as result,
  'Gate explícito, historial inmutable y políticas RLS presentes' as verification,
  'ROLLBACK no altera el esquema instalado' as cleanup;

rollback;
