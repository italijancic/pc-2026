/**
 * Unidad 03 — Ejemplo 02
 * Los tipos de datos y typeof, la herramienta de diagnóstico.
 *
 * Ejecutalo con:  node 02-tipos-y-typeof.js
 */

const voltage = 380            // number
const motorId = 'M-14'         // string
const isRunning = true         // boolean
let temperature                // undefined: todavía no medí
const noSensor = null          // null: decidí que acá no hay dato

console.log(`${voltage}\t→ ${typeof voltage}`)
console.log(`${motorId}\t→ ${typeof motorId}`)
console.log(`${isRunning}\t→ ${typeof isRunning}`)
console.log(`${temperature}\t→ ${typeof temperature}`)
console.log(`${noSensor}\t→ ${typeof noSensor}`)

// 220 y 4.2 son los dos number: no hay un tipo entero y otro decimal
console.log()
console.log(`${typeof 220} y ${typeof 4.2}`)

// El diagnóstico que más vas a usar: ¿esto que creo número, es número?
console.log()
console.log(`'380' es ${typeof '380'}`)
console.log(`parseFloat('380') es ${typeof parseFloat('380')}`)
