/**
 * Unidad 05 — Ejemplo 07
 * Máximo y mínimo, y la trampa de inicializar en cero.
 *
 * Ejecutalo con:  node 07-maximo-y-minimo.js
 */

// ── Con mediciones positivas, inicializar en 0 parece andar ──────────────
let maximum = 0

for (let i = 1; i <= 5; i++) {
  const measured = 350 + i * 15
  if (measured > maximum) {
    maximum = measured
  }
}

console.log(`Máxima (tensiones): ${maximum} V`)

console.log()

// ── Con temperaturas bajo cero, se rompe ─────────────────────────────────
// Mediciones: -5, -12, -19, -26, -33. El máximo real es -5.
let maxWrong = 0

for (let i = 1; i <= 5; i++) {
  const temperature = 2 - i * 7
  if (temperature > maxWrong) {
    maxWrong = temperature
  }
}

console.log(`Máxima (mal, arrancando en 0): ${maxWrong} °C`)
console.log('  ⚠️  Ese 0 NO es ninguna de las mediciones: nunca hubo un -5 > 0')

console.log()

// ── La forma correcta: arrancar con el PRIMER valor real ─────────────────
let maxOk = 2 - 1 * 7          // la primera medición

for (let i = 2; i <= 5; i++) { // desde la segunda
  const temperature = 2 - i * 7
  if (temperature > maxOk) {
    maxOk = temperature
  }
}

console.log(`Máxima (bien): ${maxOk} °C`)

// En la unidad 07 esto se va a escribir `maximo = vector[0]`, y es
// exactamente el mismo razonamiento.
