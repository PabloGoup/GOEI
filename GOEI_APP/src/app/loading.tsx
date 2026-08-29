export default function Loading() {
  return <main className="app-loading" aria-live="polite" aria-busy="true">
    <div className="loading-mark"><i/><i/><i/></div>
    <div><strong>Preparando tu espacio GOEI</strong><p>Estamos verificando sesión, permisos y datos autorizados.</p></div>
  </main>;
}
