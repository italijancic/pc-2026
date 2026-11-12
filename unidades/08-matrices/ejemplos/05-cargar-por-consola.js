/**
 * Unidad 08 — Ejemplo 05
 * Carga de una matriz desde la consola.
 *
 * ATENCIÓN: este ejemplo usa prompt(), así que necesita el template del curso.
 * Copiá este archivo a src/ de tu proyecto y ejecutalo con: npm run dev
 * (no funciona con `node 05-cargar-por-consola.js` desde esta carpeta,
 *  porque necesita el módulo prompt.js y la dependencia readline-sync)
 */

import { prompt } from './prompt.js'

/**
 * Solicita al usuario las dimensiones y los valores de una matriz de enteros.
 * @returns {number[][]} Matriz cargada con los valores ingresados
 */
const readMatrix = () => {
  const rows = parseInt(prompt('Cantidad de filas: '))
  const cols = parseInt(prompt('Cantidad de columnas: '))
  const matrix = new Array(rows)

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = parseInt(prompt(`Valor de [${i}][${j}]: `))
    }
  }

  return matrix
}

/**
 * Calcula la suma de cada fila de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[]} Vector con la suma de cada fila
 */
const rowSums = (matrix) => {
  const sums = new Array(matrix.length)
  let rowTotal

  for (let i = 0; i < matrix.length; i++) {
    rowTotal = 0
    for (let j = 0; j < matrix[i].length; j++) {
      rowTotal += matrix[i][j]
    }
    sums[i] = rowTotal
  }

  return sums.slice()
}

// --- Programa principal ---

const myMatrix = readMatrix()

console.log('\nLa matriz ingresada es:')
console.table(myMatrix)

console.log('Suma de cada fila:')
console.table(rowSums(myMatrix))

// Recordá: prompt() devuelve SIEMPRE un string.
// Sin parseInt(), las sumas concatenan en lugar de sumar.
