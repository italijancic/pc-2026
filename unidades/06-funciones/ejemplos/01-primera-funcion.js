/**
 * Unidad 06 — Ejemplo 01
 * El problema que resuelven las funciones.
 *
 * Ejecutalo con:  node 01-primera-funcion.js
 */

const NOMINAL_VOLTAGE = 380

// ── Sin función: la misma cuenta tres veces ──────────────────────────────
console.log('Sin función:')

const measured1 = 372.5
console.log(`  Tablero 1: ${((measured1 - 380) / 380 * 100).toFixed(2)} %`)

const measured2 = 391
console.log(`  Tablero 2: ${((measured2 - 380) / 380 * 100).toFixed(2)} %`)

const measured3 = 405
console.log(`  Tablero 3: ${((measured3 - 380) / 380 * 100).toFixed(2)} %`)

// Si mañana cambia la fórmula, hay que corregirla en TRES lugares.
// Y el 380 está escrito tres veces.

console.log()

// ── Con función: la cuenta vive en un solo lugar ─────────────────────────
/**
 * Calcula la desviación porcentual respecto de la tensión nominal.
 * @param {number} measured - Tensión medida, en volt
 * @returns {number} Desviación en porcentaje, positiva o negativa
 */
const deviation = (measured) => (measured - NOMINAL_VOLTAGE) / NOMINAL_VOLTAGE * 100

console.log('Con función:')
console.log(`  Tablero 1: ${deviation(372.5).toFixed(2)} %`)
console.log(`  Tablero 2: ${deviation(391).toFixed(2)} %`)
console.log(`  Tablero 3: ${deviation(405).toFixed(2)} %`)
