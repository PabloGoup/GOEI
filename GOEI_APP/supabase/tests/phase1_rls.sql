-- GOEI APP · Verificación estructural de Fase 1
-- Ejecutable directamente en Supabase SQL Editor, sin pgTAP.
-- Esta prueba no modifica datos y falla con una excepción si falta un control.

do $$
declare
  missing_tables text[];
  missing_policies text[];
  rls_disabled text[];
begin
  select array_agg(expected.table_name order by expected.table_name)
  into missing_tables
  from (
    values
      ('profiles'),
      ('organizations'),
      ('organization_memberships'),
      ('establishments'),
      ('audit_events')
  ) as expected(table_name)
  where to_regclass('public.' || expected.table_name) is null;

  if missing_tables is not null then
    raise exception 'GOEI RLS TEST: faltan tablas: %', array_to_string(missing_tables, ', ');
  end if;

  select array_agg(c.relname order by c.relname)
  into rls_disabled
  from pg_catalog.pg_class c
  join pg_catalog.pg_namespace n on n.oid = c.relnamespace
  where n.nspname = 'public'
    and c.relname = any(array[
      'profiles',
      'organizations',
      'organization_memberships',
      'establishments',
      'audit_events'
    ])
    and not c.relrowsecurity;

  if rls_disabled is not null then
    raise exception 'GOEI RLS TEST: RLS deshabilitado en: %', array_to_string(rls_disabled, ', ');
  end if;

  select array_agg(expected.policy_name order by expected.policy_name)
  into missing_policies
  from (
    values
      ('profiles_select_self'),
      ('profiles_update_self'),
      ('organizations_select_member'),
      ('memberships_select_member'),
      ('establishments_select_member'),
      ('establishments_insert_admin'),
      ('establishments_update_admin'),
      ('audit_select_admin_supervisor')
  ) as expected(policy_name)
  where not exists (
    select 1
    from pg_catalog.pg_policies p
    where p.schemaname = 'public'
      and p.policyname = expected.policy_name
  );

  if missing_policies is not null then
    raise exception 'GOEI RLS TEST: faltan políticas: %', array_to_string(missing_policies, ', ');
  end if;

  if to_regprocedure('public.is_org_member(uuid)') is null then
    raise exception 'GOEI RLS TEST: falta public.is_org_member(uuid)';
  end if;

  if to_regprocedure('public.has_org_role(uuid,public.app_role[])') is null then
    raise exception 'GOEI RLS TEST: falta public.has_org_role(uuid,public.app_role[])';
  end if;
end
$$;

select
  'PASS' as result,
  '5 tablas, RLS, 8 políticas y 2 funciones verificadas' as verification,
  now() as checked_at;
