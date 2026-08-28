/**
 * Constantes del contrato GOEI v0.1.
 *
 * Reproducen literalmente `reference_engine/goei_reference.py`
 * (MODEL_VERSION, CONTRACT_VERSION, DIMENSIONS, CRITERIA) y los identificadores
 * de regla que el motor de referencia emite en `trace.rules`.
 *
 * Este módulo NO define ciencia nueva: traduce el candidato
 * `GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate`. Toda discrepancia se eleva al
 * documento de origen; el software no decide en silencio.
 */

export const MODEL_VERSION = "GOEI-MOD-SCORE-PILOT-0001@0.1.0-candidate" as const;
export const CONTRACT_VERSION = "0.1.0" as const;

/** Siete dimensiones D1..D7. */
export const DIMENSIONS: readonly string[] = ["D1", "D2", "D3", "D4", "D5", "D6", "D7"];

/** Veintiocho criterios D1.1..D7.4, en orden canónico. */
export const CRITERIA: readonly string[] = (() => {
  const out: string[] = [];
  for (let d = 1; d <= 7; d += 1) {
    for (let c = 1; c <= 4; c += 1) {
      out.push(`D${d}.${c}`);
    }
  }
  return out;
})();

/**
 * Identificadores de regla emitidos en la traza (idénticos al motor de
 * referencia). No son texto libre: nombran la regla activada.
 */
export const RULE_IDS: readonly string[] = [
  "GOEI-SCORE-LEVEL-X25",
  "GOEI-DIM-MEAN-EVALUABLE-MIN3",
  "GOEI-GLOBAL-EQUAL-DIMENSIONS",
  "GOEI-GATE-NONCOMPENSATORY",
  "GOEI-CONFIDENCE-SEPARATE",
  "GOEI-DISPLAY-ROUND-HALF-UP",
];
