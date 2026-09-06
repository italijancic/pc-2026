/**
 * Unidad 05 — Ejemplo 05
 * El patrón acumulador: el más importante del curso.
 *
 * Tres pasos, siempre los mismos:
 *   1. declarar ANTES del bucle, en cero
 *   2. sumarle algo ADENTRO, en cada vuelta
 *   3. usarlo DESPUÉS
 *
 * Ejecutalo con:  node 05-acumulador.js
 */

let total = 0

for (let i = 1; i <= 5; i++) {
  total = total + i
  console.log(`vuelta ${i}: le sumo ${i}, total = ${total}`)
}

console.log(`Total: ${total}`)

console.log()

// ── El error que más cuesta ver ──────────────────────────────────────────
// Declarado ADENTRO, el acumulador nace y muere en cada vuelta: arranca en 0
// cinco veces y el resultado se pierde.
console.log('Con el acumulador adentro (mal):')
for (let i = 1; i <= 5; i++) {
  let totalMal = 0
  totalMal = totalMal + i
  console.log(`  vuelta ${i}: totalMal = ${totalMal}`)
}
// Y al salir del bucle totalMal ni siquiera existe.

console.log()

// ── Promediar: sumar adentro, dividir DESPUÉS ────────────────────────────
const MEASUREMENTS = 4
let sum = 0

for (let i = 1; i <= MEASUREMENTS; i++) {
  sum = sum + i * 100
}

console.log(`Promedio: ${(sum / MEASUREMENTS).toFixed(2)}`)
