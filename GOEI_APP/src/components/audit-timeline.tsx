"use client";

import { useMemo, useState } from "react";
import { Building2, ClipboardCheck, FileCheck2, FileOutput, Search, ShieldCheck } from "lucide-react";
import { auditCategory, auditEventLabel } from "@/domain/audit";
import type { AuditEventView } from "@/server/repositories/audit";

const icons = {assessment:ClipboardCheck,evidence:FileCheck2,establishment:Building2,report:FileOutput,organization:ShieldCheck};
const filters = [{id:"all",label:"Todos"},{id:"assessment",label:"Evaluaciones"},{id:"evidence",label:"Evidencias"},{id:"establishment",label:"Establecimientos"},{id:"report",label:"Reportes"}];

function formatAuditDate(value:string) {
  return new Intl.DateTimeFormat("es-CL",{
    dateStyle:"medium",
    timeStyle:"short",
    timeZone:"America/Santiago",
  }).format(new Date(value)).replace(/[\u00a0\u202f]/g," ");
}

export function AuditTimeline({events}:{events:AuditEventView[]}) {
  const [query,setQuery] = useState("");
  const [filter,setFilter] = useState("all");
  const visible = useMemo(()=>events.filter(event=>{
    const category = auditCategory(event.eventType);
    const haystack = `${auditEventLabel(event.eventType)} ${event.entityLabel} ${Object.values(event.metadata).join(" ")}`.toLowerCase();
    return (filter === "all" || category === filter) && haystack.includes(query.trim().toLowerCase());
  }),[events,filter,query]);

  return <><section className="card audit-toolbar"><label><Search size={16}/><input aria-label="Buscar eventos" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar por evento, criterio o referencia…"/></label><div className="filter-chips">{filters.map(item=><button className={filter===item.id?"active":""} onClick={()=>setFilter(item.id)} key={item.id}>{item.label}</button>)}</div><span>{visible.length} de {events.length} eventos</span></section><section className="audit-timeline">{visible.map(event=>{const category=auditCategory(event.eventType);const Icon=icons[category];return <article className="card audit-event" key={event.id}><span className={`audit-icon ${category}`}><Icon size={17}/></span><div><span className="section-kicker">{event.entityType} · {event.entityLabel}</span><h2>{auditEventLabel(event.eventType)}</h2><p>{Object.entries(event.metadata).map(([key,value])=><span key={key}><b>{key}</b> {String(value)}</span>)}</p></div><time dateTime={event.occurredAt}>{formatAuditDate(event.occurredAt)}</time></article>})}{visible.length===0&&<div className="empty-state card"><h2>Sin coincidencias</h2><p>Ajusta la búsqueda o los filtros. La ausencia de eventos no se interpreta como ausencia de actividad fuera del sistema.</p></div>}</section></>;
}
