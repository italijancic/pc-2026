/**
 * Unidad 03 — Ejemplo 03
 * Operadores aritméticos y precedencia.
 *
 * Ejecutalo con:  node 03-aritmeticos.js
 */

const a = 10
const b = 3

console.log(`${a} + ${b}  = ${a + b}`)
console.log(`${a} - ${b}  = ${a - b}`)
console.log(`${a} * ${b}  = ${a * b}`)
console.log(`${a} / ${b}  = ${a / b}`)
console.log(`${a} % ${b}  = ${a % b}`)
console.log(`${a} ** ${b} = ${a ** b}`)

// Precedencia: primero * / %, después + -. Los paréntesis mandan.
console.log()
console.log(`2 + 3 * 4   = ${2 + 3 * 4}`)
console.log(`(2 + 3) * 4 = ${(2 + 3) * 4}`)
