/**
 * Unidad 04 — Ejemplo 02
 * if / else: dos caminos, siempre se toma uno.
 *
 * Ejecutalo con:  node 02-if-else.js
 */

const UPPER_LIMIT = 399
const measured = 405

if (measured > UPPER_LIMIT) {
  console.log(`${measured} V — TENSIÓN ALTA`)
} else {
  console.log(`${measured} V — dentro del límite superior`)
}

// Guardar la condición en una variable con nombre hace que el if se lea solo
const isOverLimit = measured > UPPER_LIMIT

if (isOverLimit) {
  console.log('Se registra el evento en el parte diario')
} else {
  console.log('No hace falta registrar nada')
}
