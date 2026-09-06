/**
 * Unidad 05 — Ejemplo 03
 * while: mientras se cumpla una condición.
 *
 * Ejecutalo con:  node 03-while.js
 */

// Las tres piezas del for siguen estando, pero repartidas:
let i = 1                 // 1. inicialización — ANTES del bucle

while (i <= 3) {          // 2. condición
  console.log(`Vuelta ${i}`)
  i++                     // 3. incremento — ADENTRO, y no te lo podés olvidar
}

console.log()

// Un caso donde while se lee mejor que for: no sabemos cuántas vueltas son,
// sabemos cuándo parar.
let pressure = 10

while (pressure > 6) {
  console.log(`Presión: ${pressure} bar`)
  pressure = pressure - 1
}

console.log('Presión mínima alcanzada')
