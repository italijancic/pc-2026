/**
 * Unidad 03 — Ejemplo 05
 * Comparar: los operadores relacionales devuelven siempre true o false.
 *
 * Ejecutalo con:  node 05-relacionales.js
 */

const measured = 219.4
const nominal = 220

console.log(`${measured} <  ${nominal}   → ${measured < nominal}`)
console.log(`${measured} >= 200   → ${measured >= 200}`)
console.log(`${measured} === ${nominal}  → ${measured === nominal}`)
console.log(`${measured} !== ${nominal}  → ${measured !== nominal}`)

// La trampa que más se cobra en el parcial: == contra ===
console.log()
console.log(`5 === 5     → ${5 === 5}`)
console.log(`'5' === 5   → ${'5' === 5}`)
console.log(`'5' == 5    → ${'5' == 5}   ← == convierte los tipos por su cuenta`)

// Por eso en la cátedra se usa SIEMPRE === y !==
