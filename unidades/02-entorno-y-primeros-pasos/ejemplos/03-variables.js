/**
 * Unidad 02 — Ejemplo 03
 * Guardar datos con un nombre y calcular con ellos.
 *
 * Ejecutalo con:  node 03-variables.js
 */

const identificacion = 'M-14'
const tension = 380      // [V]
const corriente = 4.2    // [A]

// Escribir `tension` es lo mismo que escribir 380
const potencia = tension * corriente

console.log(`Motor: ${identificacion}`)
console.log(`Tensión: ${tension} V`)
console.log(`Corriente: ${corriente} A`)
console.log(`Potencia: ${potencia} W`)
