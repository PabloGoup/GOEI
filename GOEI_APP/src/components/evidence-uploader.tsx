"use client";

import { useRef, useState, useTransition } from "react";
import { ExternalLink, FileCheck2, FileUp, LoaderCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { createEvidenceReadUrl, finalizeEvidenceUpload, requestEvidenceUpload } from "@/server/actions/evidence-actions";

type EvidenceItem = {evidence_code:string;title:string;storage_path:string;mime_type:string;size_bytes:number;provenance:string;sensitivity:string};

export function EvidenceUploader({assessmentId,criterionId,enabled,items}:{assessmentId:string;criterionId:string;enabled:boolean;items:EvidenceItem[]}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title,setTitle] = useState("");
  const [provenance,setProvenance] = useState("E3");
  const [sensitivity,setSensitivity] = useState("internal");
  const [message,setMessage] = useState("");
  const [pending,startTransition] = useTransition();

  const upload = () => {
    const file = inputRef.current?.files?.[0];
    if (!file || !title.trim()) { setMessage("Selecciona un archivo y escribe un título."); return; }
    startTransition(()=>{ void (async()=>{
      setMessage("Preparando carga privada…");
      const request = await requestEvidenceUpload({assessmentId,criterionId,title,mimeType:file.type,sizeBytes:file.size,provenance,sensitivity});
      if (!request.ok) { setMessage(request.error); return; }
      const supabase = createClient();
      const { error } = await supabase.storage.from("goei-evidence").uploadToSignedUrl(request.storagePath,request.token,file,{contentType:file.type});
      if (error) { setMessage("La carga privada no pudo completarse."); return; }
      const finalized = await finalizeEvidenceUpload({assessmentId,criterionId,title,mimeType:file.type,sizeBytes:file.size,provenance,sensitivity,storagePath:request.storagePath,evidenceCode:request.evidenceCode});
      if (!finalized.ok) { setMessage(finalized.error); return; }
      setMessage("Evidencia registrada con trazabilidad."); setTitle(""); if (inputRef.current) inputRef.current.value="";
    })();});
  };

  const openEvidence = (item:EvidenceItem) => { startTransition(()=>{ void createEvidenceReadUrl({assessmentId,storagePath:item.storage_path}).then(result=>{
    if (!result.ok) { setMessage(result.error); return; }
    window.open(result.url,"_blank","noopener,noreferrer");
  });}); };

  if (!enabled) return <div className="evidence-upload locked"><FileUp size={17}/><span><strong>Adjuntar evidencia</strong><small>Disponible sólo en expedientes sintéticos conectados y editables.</small></span><button disabled>Seleccionar archivo</button></div>;

  return <div className="evidence-manager"><div className="evidence-form"><label>Título<input value={title} onChange={event=>setTitle(event.target.value)} maxLength={180}/></label><label>Procedencia<select value={provenance} onChange={event=>setProvenance(event.target.value)}><option value="E1">E1 · Exigible</option><option value="E2">E2 · Derivable</option><option value="E3">E3 · Levantamiento GOEI</option></select></label><label>Sensibilidad<select value={sensitivity} onChange={event=>setSensitivity(event.target.value)}><option value="internal">Interna</option><option value="confidential">Confidencial</option><option value="restricted">Restringida</option></select></label><label className="file-field">Archivo<input ref={inputRef} type="file" accept="application/pdf,image/jpeg,image/png,text/csv"/></label><button className="button secondary" onClick={upload} disabled={pending}>{pending?<LoaderCircle className="spin" size={15}/>:<FileUp size={15}/>} Cargar evidencia</button></div>{message&&<p role="status">{message}</p>}<div className="evidence-list">{items.map(item=><button key={item.evidence_code} onClick={()=>openEvidence(item)} disabled={pending}><FileCheck2 size={15}/><span><strong>{item.title}</strong><small>{item.provenance} · {Math.ceil(item.size_bytes/1024)} KB · {item.sensitivity}</small></span><ExternalLink size={13}/></button>)}</div></div>;
}
