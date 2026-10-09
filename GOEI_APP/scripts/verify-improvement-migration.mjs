// Isolated PostgreSQL verification. Requires @electric-sql/pglite in the runtime.
// This does not replace the authenticated Supabase integration test.
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(process.env.GOEI_SQL_QA_PACKAGE ?? import.meta.url);
const { PGlite } = require('@electric-sql/pglite');
const db = new PGlite();
try {
  await db.exec(`
    create role anon; create role authenticated;
    create schema auth;
    create table auth.users(id uuid primary key);
    create function auth.uid() returns uuid language sql stable as
      $$ select current_setting('request.jwt.claim.sub', true)::uuid $$;
    create table public.organizations(id uuid primary key);
    create table public.assessments(id uuid primary key, organization_id uuid);
    create function public.can_access_assessment(target uuid) returns boolean language sql stable as
      $$ select exists(select 1 from public.assessments where id=target
         and organization_id=auth.uid()) $$;
    grant usage on schema public, auth to authenticated;
    grant select on public.assessments to authenticated;
    insert into auth.users values ('10000000-0000-4000-8000-000000000001');
    insert into organizations values ('10000000-0000-4000-8000-000000000001'),('20000000-0000-4000-8000-000000000002');
    insert into assessments values
      ('a0000000-0000-4000-8000-000000000001','10000000-0000-4000-8000-000000000001'),
      ('b0000000-0000-4000-8000-000000000002','20000000-0000-4000-8000-000000000002');
  `);
  for (const name of ['202608290008_improvement_actions.sql','202610080009_improvement_integrity.sql']) {
    await db.exec(await readFile(new URL(`../supabase/migrations/${name}`,import.meta.url),'utf8'));
  }
  await db.exec(`
    set role authenticated;
    select set_config('request.jwt.claim.sub','10000000-0000-4000-8000-000000000001',false);
    insert into improvement_actions(organization_id,assessment_id,title,criterion_id,created_by)
      select '10000000-0000-4000-8000-000000000001','a0000000-0000-4000-8000-000000000001',
      'Acción sintética', 'D'||d||'.'||c,'10000000-0000-4000-8000-000000000001'
      from generate_series(1,7) d cross join generate_series(1,4) c;
    update improvement_actions set status='IN_PROGRESS';
  `);
  const rows = await db.query("select count(*)::int as n from improvement_actions where status='IN_PROGRESS'");
  if (rows.rows[0].n !== 28) throw Error('Valid criteria or normal update failed');
  async function rejects(sql, code) {
    try { await db.exec(sql); } catch (error) {
      if (error.code === code) return;
      throw error;
    }
    throw Error(`Expected rejection ${code}`);
  }
  for (const criterion of ['D0.1','D8.1','D1.0','D1.5','D1x1']) {
    await rejects(`update improvement_actions set criterion_id='${criterion}'`, '23514');
  }
  await rejects("update improvement_actions set organization_id='20000000-0000-4000-8000-000000000002'",'42501');
  await rejects("update improvement_actions set assessment_id='b0000000-0000-4000-8000-000000000002'",'42501');
  await db.exec("select set_config('request.jwt.claim.sub','20000000-0000-4000-8000-000000000002',false)");
  const hidden = await db.query('select count(*)::int as n from improvement_actions');
  if (hidden.rows[0].n !== 0) throw Error('Cross organization read was allowed');
  const untouched = await db.query("update improvement_actions set status='CANCELLED' returning id");
  if (untouched.rows.length) throw Error('Cross organization update was allowed');
  console.log('PASS: 28 valid criteria, 5 invalid criteria, normal update, organization integrity, cross organization read/update. Isolated PostgreSQL fixture; remote Supabase not verified.');
} finally { await db.close(); }
