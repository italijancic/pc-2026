/**
 * Unidad 06 — Ejemplo 04
 * Funciones que no devuelven nada: sólo hacen.
 *
 * Ejecutalo con:  node 04-sin-return.js
 */

/**
 * Imprime el encabezado de un informe de tablero.
 * @param {string} panelId - Identificación del tablero
 */
const printHeader = (panelId) => {
  console.log('─────────────────')
  console.log(`Tablero ${panelId}`)
  console.log('─────────────────')
}

printHeader('TAB-3')

console.log()

// Está bien que no devuelva nada. Pero si intentás usar su resultado:
const x = printHeader('TAB-1')
console.log(`El resultado de printHeader es: ${x}`)
