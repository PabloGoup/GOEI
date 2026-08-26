-- Ejecutar después de 202608250003_authenticated_workspace.sql.
-- Prueba estructural nativa: devuelve una fila PASS o lanza una excepción.
do $$
declare
  missing_count integer;
begin
  select count(*) into missing_count
  from (values
    ('handle_new_user', 0),
    ('create_first_organization', 2),
    ('append_audit_event', 5),
    ('create_synthetic_establishment', 3),
    ('create_synthetic_assessment', 1)
  ) expected(function_name, argument_count)
  where not exists (
    select 1
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.proname = expected.function_name
      and p.pronargs = expected.argument_count
      and p.prosecdef
  );

  if missing_count > 0 then
    raise exception 'FAIL: faltan funciones security definer del flujo autenticado';
  end if;

  if not exists (
    select 1 from pg_trigger t
    join pg_class c on c.oid = t.tgrelid
    join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'auth' and c.relname = 'users'
      and t.tgname = 'on_auth_user_created' and not t.tgisinternal
  ) then
    raise exception 'FAIL: falta trigger de creación de perfil';
  end if;
end $$;

select 'PASS' as authenticated_workspace_structure;
