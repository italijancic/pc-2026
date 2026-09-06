/**
 * Unidad 05 — Ejemplo 06
 * El patrón contador: los bucles de hoy con los condicionales de la unidad 04.
 *
 * Igual que el acumulador, pero suma UNO, y sólo cuando se cumple una condición.
 *
 * Ejecutalo con:  node 06-contador.js
 */

const LOWER_LIMIT = 361
const UPPER_LIMIT = 399

let outOfRange = 0

for (let i = 1; i <= 5; i++) {
  const measured = 350 + i * 15

  if (measured < LOWER_LIMIT || measured > UPPER_LIMIT) {
    outOfRange++
    console.log(`  ${measured} V  ← fuera de rango`)
  } else {
    console.log(`  ${measured} V`)
  }
}

console.log()
console.log(`Fuera de rango: ${outOfRange} de 5`)
