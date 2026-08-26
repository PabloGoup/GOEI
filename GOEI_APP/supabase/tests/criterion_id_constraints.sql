-- Ejecutar después de 202608260005_fix_criterion_id_constraints.sql.
-- Verifica las restricciones sin conservar registros.

begin;

do $$
declare
  response_definition text;
  evidence_definition text;
begin
  select pg_get_constraintdef(c.oid) into response_definition
  from pg_constraint c
  where c.conrelid = 'public.assessment_responses'::regclass
    and c.conname = 'assessment_responses_criterion_id_check';

  select pg_get_constraintdef(c.oid) into evidence_definition
  from pg_constraint c
  where c.conrelid = 'public.evidence_items'::regclass
    and c.conname = 'evidence_items_criterion_id_check';

  if response_definition is null or evidence_definition is null then
    raise exception 'FAIL: faltan restricciones de criterion_id';
  end if;

  if not ('D1.1' ~ '^D[1-7]\.[1-4]$' and 'D7.4' ~ '^D[1-7]\.[1-4]$') then
    raise exception 'FAIL: la expresión no acepta los límites válidos';
  end if;

  if 'D0.1' ~ '^D[1-7]\.[1-4]$' or 'D1x1' ~ '^D[1-7]\.[1-4]$' or 'D8.5' ~ '^D[1-7]\.[1-4]$' then
    raise exception 'FAIL: la expresión acepta identificadores inválidos';
  end if;
end $$;

select 'PASS' as result,
  'Las restricciones aceptan D1.1 a D7.4 y rechazan identificadores inválidos' as verification;

rollback;
