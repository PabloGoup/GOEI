/**
 * Aritmética racional exacta con `bigint`.
 *
 * ¿Por qué? El motor de referencia Python usa `decimal.Decimal` con precisión
 * alta y `ROUND_HALF_UP` visible. Para reproducirlo bit a bit en JavaScript sin
 * arrastrar el error binario de `number`, se lleva cada magnitud como fracción
 * exacta no negativa `n/d` (d > 0) y solo se convierte a `number`/entero al
 * final, replicando el mismo procedimiento numérico del Python:
 *
 *   - puntaje de dimensión: fracción exacta sd/nd (sd = 25·Σnivel, nd = evaluables);
 *   - puntaje global: se toma el `double` de cada dimensión, se re-parsea su
 *     representación decimal corta (equivalente a `str(float)` de Python) y se
 *     suman como fracciones exactas antes de dividir por 7. Así se preserva el
 *     mismo "ida y vuelta a float" que hace el motor de referencia.
 */

export interface Frac {
  n: bigint;
  d: bigint;
}

function gcd(a: bigint, b: bigint): bigint {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y !== 0n) {
    const t = x % y;
    x = y;
    y = t;
  }
  return x === 0n ? 1n : x;
}

function norm(n: bigint, d: bigint): Frac {
  if (d === 0n) {
    throw new Error("denominador cero");
  }
  let nn = n;
  let dd = d;
  if (dd < 0n) {
    nn = -nn;
    dd = -dd;
  }
  const g = gcd(nn, dd);
  return { n: nn / g, d: dd / g };
}

export function fromInt(i: number | bigint): Frac {
  return { n: BigInt(i), d: 1n };
}

/** Convierte una cadena decimal simple ("123", "8.333") en fracción exacta. */
export function fromDecimalString(s: string): Frac {
  if (s.includes("e") || s.includes("E")) {
    throw new Error(`notación exponencial inesperada: ${s}`);
  }
  let sign = 1n;
  let body = s;
  if (body.startsWith("-")) {
    sign = -1n;
    body = body.slice(1);
  } else if (body.startsWith("+")) {
    body = body.slice(1);
  }
  const dot = body.indexOf(".");
  if (dot < 0) {
    return norm(sign * BigInt(body), 1n);
  }
  const intPart = body.slice(0, dot);
  const fracPart = body.slice(dot + 1);
  const scale = BigInt(fracPart.length);
  const digits = (intPart === "" ? "0" : intPart) + (fracPart === "" ? "" : fracPart);
  const num = sign * BigInt(digits);
  const den = 10n ** scale;
  return norm(num, den);
}

/**
 * Fracción exacta a partir de la representación decimal corta de un `double`.
 * `String(x)` en JS produce el round-trip más corto, idéntico a `str(float)` en
 * Python 3, por lo que reproduce exactamente el valor que suma el motor Python.
 */
export function fromNumberViaString(x: number): Frac {
  if (!Number.isFinite(x)) {
    throw new Error(`valor no finito: ${x}`);
  }
  return fromDecimalString(String(x));
}

export function addFrac(a: Frac, b: Frac): Frac {
  return norm(a.n * b.d + b.n * a.d, a.d * b.d);
}

export function divInt(a: Frac, k: bigint): Frac {
  return norm(a.n, a.d * k);
}

/** Signo de (a − k) con k entero: −1, 0 o 1. */
export function cmpInt(a: Frac, k: bigint): -1 | 0 | 1 {
  const lhs = a.n;
  const rhs = k * a.d;
  if (lhs < rhs) {
    return -1;
  }
  if (lhs > rhs) {
    return 1;
  }
  return 0;
}

/**
 * Redondeo a entero medio-hacia-arriba (ROUND_HALF_UP) para fracciones no
 * negativas: floor((2n + d) / (2d)). Exacto, sin punto flotante.
 */
export function roundHalfUp(a: Frac): number {
  if (a.n < 0n) {
    throw new Error("roundHalfUp definido solo para valores no negativos en v0.1");
  }
  const q = (2n * a.n + a.d) / (2n * a.d);
  return Number(q);
}

/**
 * Convierte la fracción a `number` mediante una expansión decimal de 30 cifras
 * y `Number(...)`, que aplica el redondeo correcto a `double` (idéntico al
 * `float(Decimal)` del motor de referencia).
 */
export function toNumber(a: Frac): number {
  const intPart = a.n / a.d;
  let rem = a.n % a.d;
  if (rem < 0n) {
    rem = -rem;
  }
  let s = intPart.toString();
  s += ".";
  for (let i = 0; i < 30; i += 1) {
    rem *= 10n;
    s += (rem / a.d).toString();
    rem %= a.d;
  }
  return Number(s);
}
