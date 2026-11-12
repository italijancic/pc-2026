/**
 * Unidad 08 — Ejemplo 02
 * Recorrido de una matriz con dos bucles anidados: por filas y por columnas.
 * console.table() para verla como tabla.
 *
 * Ejecutar con: node 02-recorrer.js
 */

/**
 * Imprime cada elemento de una matriz recorriéndola por filas.
 * @param {number[][]} matrix - Matriz a recorrer
 * @returns {void}
 */
const printByRows = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`  [${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}

/**
 * Imprime cada elemento de una matriz recorriéndola por columnas.
 * @param {number[][]} matrix - Matriz a recorrer
 * @returns {void}
 */
const printByColumns = (matrix) => {
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(`  [${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}

// --- Programa principal ---

const matrix = [
  [10, 20, 30],
  [40, 50, 60]
]

console.log('Por filas (i afuera, j adentro):')
printByRows(matrix)

console.log('\nPor columnas (j afuera, i adentro):')
printByColumns(matrix)

// console.table muestra la matriz como tabla: filas e índices de columna
console.log('\nCon console.table():')
console.table(matrix)
