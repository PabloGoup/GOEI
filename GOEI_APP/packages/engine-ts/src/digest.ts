/**
 * Digest canónico de la entrada, idéntico a `_canonical_digest` del motor Python:
 *   "sha256:" + sha256( canonicalJson(payload) codificado en UTF-8 ).
 *
 * Implementación síncrona compatible con navegador y Node. `@noble/hashes`
 * evita depender de `node:crypto` y conserva la API determinista del motor.
 */
import { bytesToHex } from "@noble/hashes/utils.js";
import { sha256 } from "@noble/hashes/sha2.js";
import { canonicalize } from "./canonicalJson.js";

export function inputDigest(payload: unknown): string {
  const encoded = canonicalize(payload);
  const hex = bytesToHex(sha256(new TextEncoder().encode(encoded)));
  return `sha256:${hex}`;
}
