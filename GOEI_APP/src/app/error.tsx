"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, WifiOff } from "lucide-react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("GOEI route error", { message: error.message, digest: error.digest }); }, [error]);
  const delayed = /tiempo de espera|timeout/i.test(error.message);
  return <main className="recovery-page"><section className="recovery-card"><span><WifiOff size={28}/></span><p className="section-kicker">Conexión temporalmente no disponible</p><h1>{delayed ? "La conexión tardó demasiado" : "No pudimos cargar este espacio"}</h1><p>Tu sesión y tus datos no se modificaron. Reintenta; si el problema persiste, vuelve al inicio de sesión.</p><div><button className="button primary" onClick={reset}><RefreshCw size={16}/> Reintentar</button><Link className="button secondary" href="/login?error=conexion">Volver a ingresar</Link></div></section></main>;
}
