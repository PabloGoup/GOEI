/**
 * Serialización JSON canónica compatible con el motor de referencia Python.
 *
 * Reproduce exactamente:
 *   json.dumps(payload, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
 *
 * Requisitos que garantizan la igualdad byte a byte para el contrato v0.1:
 *   - claves de objeto ordenadas ascendentemente (todas ASCII → el orden por
 *     unidades UTF-16 de JS coincide con el orden por code point de Python);
 *   - sin espacios entre tokens;
 *   - `ensure_ascii=False`: los caracteres no ASCII (p. ej. "é") se emiten tal
 *     cual, igual que `JSON.stringify` de strings individuales;
 *   - los números del contrato de entrada son enteros (level, evidenceGrade),
 *     por lo que no aparece el formato de float de Python. Un número no entero
 *     se rechaza para no divergir en silencio.
 */
export function canonicalize(value: unknown): string {
  if (value === null || value === undefined) {
    return "null";
  }
  const t = typeof value;
  if (t === "string") {
    return JSON.stringify(value);
  }
  if (t === "boolean") {
    return value ? "true" : "false";
  }
  if (t === "number") {
    const n = value as number;
    if (!Number.isFinite(n)) {
      throw new Error(`número no finito en la entrada canónica: ${n}`);
    }
    if (!Number.isInteger(n)) {
      throw new Error(
        `número no entero en la entrada canónica (${n}): el digest v0.1 asume enteros`,
      );
    }
    return String(n);
  }
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalize(item)).join(",")}]`;
  }
  if (t === "object") {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj).sort();
    const parts = keys.map((k) => `${JSON.stringify(k)}:${canonicalize(obj[k])}`);
    return `{${parts.join(",")}}`;
  }
  throw new Error(`tipo no serializable en canonicalize: ${t}`);
}
