/**
 * Unidad 07 — Ejemplo 02
 * Recorrido de un vector con for y con while.
 *
 * Ejecutar con: node 02-recorrer.js
 */

/**
 * Imprime por consola cada elemento de un vector junto con su índice.
 * @param {number[]} vector - Vector a imprimir
 * @returns {void}
 */
const imprimirConFor = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    console.log(`  Índice ${i}: ${vector[i]}`)
  }
}

/**
 * Imprime por consola cada elemento de un vector usando un bucle while.
 * @param {number[]} vector - Vector a imprimir
 * @returns {void}
 */
const imprimirConWhile = (vector) => {
  let i = 0

  while (i < vector.length) {
    console.log(`  Índice ${i}: ${vector[i]}`)
    i++
  }
}

const mediciones = [219, 235, 210, 195]

console.log('Recorrido con for:')
imprimirConFor(mediciones)

console.log('\nRecorrido con while:')
imprimirConWhile(mediciones)

// --- El error clásico: i <= length ---

console.log('\nQué pasa con i <= vector.length:')
for (let i = 0; i <= mediciones.length; i++) {
  console.log(`  Índice ${i}: ${mediciones[i]}`)
}
console.log('  ^ el índice 4 no existe: se imprime undefined')

// --- Recorrido al revés ---

console.log('\nRecorrido al revés:')
for (let i = mediciones.length - 1; i >= 0; i--) {
  console.log(`  Índice ${i}: ${mediciones[i]}`)
}
