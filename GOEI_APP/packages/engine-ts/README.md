# Motor GOEI v0.1 · TypeScript estricto (`engine-ts`)

Implementación TypeScript del motor determinista GOEI v0.1. **No aprueba ciencia**:
reproduce técnicamente `GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate` y es paritario,
byte a byte, con el motor de referencia Python (`../reference_engine/goei_reference.py`).

Consume conceptualmente los contratos de `../contracts/v0.1/*.json`. Toda regla
ambigua se eleva al documento de origen; el software no decide en silencio.

## Qué implementa

- 28 criterios exactos y únicos; coherencia `criterionId`↔`dimensionId`.
- Estados `EVALUABLE` / `NO_APLICA` / `NO_VERIFICABLE`; nivel 0–4 y evidencia 1–3
  solo para `EVALUABLE`; evidencia 0 solo para `NO_VERIFICABLE`.
- Dimensión calculable: ≥3 evaluables, sin `NO_VERIFICABLE`, ≤1 `NO_APLICA`.
- Media dimensional y global sin redondeo intermedio; gate no compensatorio
  (`VERDE` emite, `ROJO`→0, `NO_VERIFICABLE`→sin puntaje).
- Confianza y cobertura **separadas** del desempeño.
- `ROUND_HALF_UP` **visible** (los campos `display*`), con precisión interna exacta.
- Bandas provisionales `CRITICO/VULNERABLE/FUNCIONAL_CON_BRECHAS/FORTALECIDO`.
- Digest canónico de la entrada (`sha256:` sobre JSON canónico compatible con Python).

## Aritmética exacta

El motor Python usa `decimal.Decimal`. Para reproducirlo sin error binario, este
motor lleva cada magnitud como **fracción exacta `bigint`** (`src/rational.ts`) y
solo convierte a `number`/entero al final. El puntaje global replica el mismo
"ida y vuelta a `float`" del Python (se re-parsea el `double` de cada dimensión con
`String(x)`, equivalente a `str(float)`), de modo que la paridad es exacta incluso
en decimales periódicos y fronteras de banda.

## Estructura

```
src/            fuente TypeScript estricta (fuente de verdad)
  constants.ts  versiones, 7 dimensiones, 28 criterios, IDs de regla
  types.ts      tipos del contrato (solo compilación)
  rational.ts   fracciones exactas bigint + ROUND_HALF_UP
  canonicalJson.ts  JSON canónico compatible con json.dumps(sort_keys,...)
  inputSchema.ts espejo ejecutable del JSON Schema canónico
  digest.ts     sha256 portable del JSON canónico (navegador y Node)
  validate.ts   JSON Schema runtime + validación semántica
  engine.ts     calculate(): puerto fiel de goei_reference.calculate
  index.ts      API pública
test/           tests TypeScript + fixtures de paridad
  fixtures/     cases.json / invalid-cases.json (generados por el Python)
tools/generate_fixtures.py   genera fixtures ejecutando el motor de referencia
dist/           build EJECUTABLE (ver nota de entorno)
```

## Verificación

```bash
npm run gen:fixtures   # regenera fixtures desde el motor Python (python3)
npm test               # node --test dist/test  (151 pruebas)
npm run typecheck      # tsc --noEmit   (requiere TypeScript instalado)
npm run build          # tsc            (regenera dist/ desde src/)
```

### Verificación del entorno

La revisión técnica posterior instaló las dependencias declaradas desde el
registro oficial y ejecutó satisfactoriamente:

- `npm run typecheck` con TypeScript estricto;
- `npm run build`, que regeneró `dist/` desde `src/` mediante `tsc`;
- `npm test`, con **151/151 pruebas aprobadas**;
- auditoría de dependencias, sin vulnerabilidades reportadas por npm.

El fuente de verdad es `src/*.ts`; `dist/` es exclusivamente su salida compilada.
La verificación cubre **TypeScript ↔ motor Python** (84 entradas válidas y ocho
inválidas), 40 resultados del Excel provisional (10 negocios × M0–M3), reglas
unitarias, JSON Schema runtime y SHA-256 portable. Las fracciones periódicas del
Excel se comparan con tolerancia `1e-12`; entero visible y banda deben coincidir
exactamente. Véase `PARITY_REPORT.md`.

## Estado para integrar la web

- JSON Schema runtime: **implementado** con AJV 2020; una prueba impide deriva
  respecto de `contracts/v0.1/assessment-input.schema.json`.
- Paridad Excel provisional: **40/40** resultados, bandas y gates.
- Digest para navegador/Node: **implementado** sin `node:crypto`.

Esto habilita integración técnica con la interfaz. No valida las anclas BARS,
umbrales científicos ni eficacia diagnóstica en establecimientos reales.
