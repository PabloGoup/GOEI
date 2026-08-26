-- GOEI APP · Corrección técnica de restricciones para identificadores de criterio.
-- Acepta exclusivamente D1.1 a D7.4. No modifica contenido científico ni datos.

alter table public.assessment_responses
  drop constraint if exists assessment_responses_criterion_id_check;

alter table public.assessment_responses
  add constraint assessment_responses_criterion_id_check
  check (criterion_id ~ '^D[1-7]\.[1-4]$');

alter table public.evidence_items
  drop constraint if exists evidence_items_criterion_id_check;

alter table public.evidence_items
  add constraint evidence_items_criterion_id_check
  check (criterion_id is null or criterion_id ~ '^D[1-7]\.[1-4]$');
