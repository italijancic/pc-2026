/**
 * Unidad 06 — Ejemplo 07
 * rndInt(min, max): la función más útil del curso, paso a paso.
 *
 * ⚠️ Cada ejecución da números distintos.
 *
 * Ejecutalo con:  node 07-rnd-int.js
 */

const MIN = 1
const MAX = 6

console.log('Paso 1 — estirar el rango: Math.random() * (max - min + 1)')
console.log(`  ${Math.random() * (MAX - MIN + 1)}   ← decimal entre 0 y 6`)

console.log()
console.log('Paso 2 — recortar decimales: Math.floor(...)')
console.log(`  ${Math.floor(Math.random() * (MAX - MIN + 1))}   ← entero entre 0 y 5`)

console.log()
console.log('Paso 3 — correr el rango: + min')
console.log(`  ${Math.floor(Math.random() * (MAX - MIN + 1)) + MIN}   ← entero entre 1 y 6`)

console.log()

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

console.log('Veinte tiradas de un dado con rndInt(1, 6):')
let salida = ''
for (let i = 1; i <= 20; i++) {
  salida = salida + rndInt(1, 6) + ' '
}
console.log(`  ${salida}`)

console.log()

// ── El error clásico: olvidarse el + 1 ───────────────────────────────────
/**
 * Versión INCORRECTA de rndInt: le falta el + 1 y nunca devuelve max.
 * @param {number} min - Valor mínimo
 * @param {number} max - Valor máximo
 * @returns {number} Entero entre min y max - 1
 */
const rndIntMal = (min, max) => Math.floor(Math.random() * (max - min)) + min

let conSeis = 0
let sinSeis = 0
for (let i = 1; i <= 1000; i++) {
  if (rndInt(1, 6) === 6) conSeis++
  if (rndIntMal(1, 6) === 6) sinSeis++
}

console.log('En 1000 tiradas, ¿cuántos 6 salieron?')
console.log(`  rndInt (bien): ${conSeis}`)
console.log(`  sin el + 1:    ${sinSeis}   ← el 6 no sale NUNCA`)
