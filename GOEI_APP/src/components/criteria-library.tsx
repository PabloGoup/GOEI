"use client";

import { useMemo, useState } from "react";
import { BookMarked, Search } from "lucide-react";
import { instrumentCriteria, instrumentDimensions } from "@/domain/instrument";

export function CriteriaLibrary() {
  const [query,setQuery] = useState("");
  const [dimension,setDimension] = useState("ALL");
  const criteria = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return instrumentCriteria.filter(item => (dimension === "ALL" || item.dimensionId === dimension) && (!normalized || `${item.id} ${item.name} ${item.evidenceHint}`.toLowerCase().includes(normalized)));
  },[query,dimension]);

  return <section className="criteria-library" aria-labelledby="criteria-library-title">
    <header><BookMarked size={25}/><div><span className="section-kicker">Biblioteca del instrumento</span><h2 id="criteria-library-title">Los 28 criterios en lenguaje operativo</h2><p>Consulta el nombre y la orientación de evidencia de cada criterio candidato. Esta biblioteca ayuda a leer el instrumento; no agrega reglas ni reemplaza la versión metodológica autorizada.</p></div></header>
    <div className="criteria-library-tools"><label><Search size={15}/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Buscar por criterio, tema o evidencia" aria-label="Buscar criterios"/></label><select value={dimension} onChange={event=>setDimension(event.target.value)} aria-label="Filtrar por dimensión"><option value="ALL">Las 7 dimensiones</option>{instrumentDimensions.map(item=><option value={item.id} key={item.id}>{item.id} · {item.name}</option>)}</select></div>
    <p className="criteria-count">{criteria.length} de {instrumentCriteria.length} criterios visibles</p>
    <div className="criteria-library-grid">{criteria.map(item=><article key={item.id}><span>{item.id}</span><div><h3>{item.name}</h3><p><strong>Orientación de evidencia:</strong> {item.evidenceHint}</p></div></article>)}</div>
    {criteria.length === 0 && <div className="criteria-empty"><Search/><strong>No hay coincidencias</strong><span>Prueba con otra palabra o vuelve a mostrar todas las dimensiones.</span></div>}
  </section>;
}
