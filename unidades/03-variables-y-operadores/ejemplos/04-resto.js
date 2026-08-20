/**
 * Unidad 03 — Ejemplo 04
 * El resto (%): para qué sirve de verdad.
 *
 * Ejecutalo con:  node 04-resto.js
 */

// 1. Saber si un número es par: si al dividir por 2 no sobra nada, es par
const measurements = 30

console.log(`${measurements} % 2      = ${measurements % 2}`)
console.log(`¿es par?         ${measurements % 2 === 0}`)

const odd = 17
console.log(`${odd} % 2      = ${odd % 2}`)
console.log(`¿es par?         ${odd % 2 === 0}`)

// 2. Repartir en grupos: 17 sensores de 5 en 5 → cuántos quedan sueltos
console.log()
const sensors = 17
const groupSize = 5

console.log(`${sensors} sensores en grupos de ${groupSize}`)
console.log(`grupos completos: ${(sensors - sensors % groupSize) / groupSize}`)
console.log(`quedan sueltos:   ${sensors % groupSize}`)
