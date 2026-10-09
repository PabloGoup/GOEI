// Smoke test HTTP del piloto sintético; no escribe datos ni requiere credenciales.
const base = process.env.GOEI_QA_URL ?? 'http://localhost:3100';
for (let index = 1; index <= 5; index++) {
  const page = await fetch(`${base}/demo/evaluaciones/synthetic-assessment-00${index}`);
  if (page.status !== 200) throw Error(`Caso ${index}: HTTP ${page.status}`);
  for (const format of ['pdf', 'xlsx', 'constancia']) {
    const response = await fetch(`${base}/api/exportaciones/synthetic-run-${index}/${format}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    const validHeader = format === 'xlsx'
      ? bytes[0] === 80 && bytes[1] === 75
      : new TextDecoder().decode(bytes.slice(0, 5)) === '%PDF-';
    if (response.status !== 200 || !validHeader || bytes.length < 1000) {
      throw Error(`Descarga ${index}/${format}: respuesta inválida`);
    }
    console.log(`PASS caso ${index}: ${format}, ${bytes.length} bytes`);
  }
}
console.log('PASS: 5 expedientes y 15 descargas sintéticas. No verifica persistencia autenticada.');
