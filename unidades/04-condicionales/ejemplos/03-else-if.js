/**
 * Unidad 04 — Ejemplo 03
 * if / else if / else: varios casos, y SÓLO se ejecuta el primero que da true.
 *
 * Ejecutalo con:  node 03-else-if.js
 */

const LOWER_LIMIT = 361
const UPPER_LIMIT = 399
const measured = 372.5

if (measured < LOWER_LIMIT) {
  console.log(`${measured} V — BAJA`)
} else if (measured <= UPPER_LIMIT) {
  // Si llegamos acá, ya sabemos que NO es menor a 361: la primera dio false.
  // Por eso no hace falta escribir measured >= LOWER_LIMIT && ...
  console.log(`${measured} V — NORMAL`)
} else {
  console.log(`${measured} V — ALTA`)
}
