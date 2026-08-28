begin;

do $$
begin
  if not exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'establishments' and column_name = 'synthetic_profile'
  ) then raise exception 'FAIL: falta synthetic_profile'; end if;
  if to_regprocedure('public.create_profiled_synthetic_establishment(uuid,text,text,jsonb)') is null
  then raise exception 'FAIL: falta función segura de creación'; end if;
end $$;

select 'PASS' as result,
  'Perfil sintético estructurado y función autorizada presentes' as verification,
  'La estructura no habilita captura real' as scope;

rollback;
