/**
 * Unidad 03 — Ejemplo 06
 * Combinar condiciones: && (y), || (o), ! (no).
 *
 * Ejecutalo con:  node 06-logicos.js
 */

// La norma admite 380 V con ±5 %. ¿La medición está en rango?
// Las dos condiciones tienen que cumplirse a la vez → &&
const NOMINAL_VOLTAGE = 380
const TOLERANCE = 0.05
const measured = 372.5

const lowerLimit = NOMINAL_VOLTAGE * (1 - TOLERANCE)
const upperLimit = NOMINAL_VOLTAGE * (1 + TOLERANCE)

console.log(`Límites: ${lowerLimit} V a ${upperLimit} V`)
console.log(`${measured} V en rango → ${measured >= lowerLimit && measured <= upperLimit}`)

// Un motor va a revisión si supera 10.000 horas O si pasó los 85 °C.
// Con cualquiera de las dos alcanza → ||
console.log()
const hours = 4200
const temperature = 91

console.log(`${hours} h > 10000       → ${hours > 10000}`)
console.log(`${temperature} °C > 85          → ${temperature > 85}`)
console.log(`¿va a revisión?     → ${hours > 10000 || temperature > 85}`)

// ! invierte
console.log()
const isRunning = false
console.log(`isRunning  → ${isRunning}`)
console.log(`!isRunning → ${!isRunning}`)
