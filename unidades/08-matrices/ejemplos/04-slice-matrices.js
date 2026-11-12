/**
 * Unidad 08 — Ejemplo 04
 * .slice() en una matriz copia SÓLO el vector de filas: las filas siguen
 * compartidas. Para copiar una matriz hay que copiar fila por fila.
 *
 * Es el ejemplo más importante de la unidad: es la trampa de la unidad 07,
 * pero ahora con .slice() puesto. Correlo y compará las salidas.
 *
 * Ejecutar con: node 04-slice-matrices.js
 */

// --- Caso 1: .slice() sobre la matriz (lo que en un vector funcionaba) ---

/**
 * Duplica cada elemento de una matriz, copiándola con .slice().
 * Ejemplo de lo que NO alcanza: la copia es superficial.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[][]} Matriz con cada elemento multiplicado por 2
 */
const doubleAllBad = (matrix) => {
  const result = matrix.slice()           // copia el vector de FILAS, no las filas

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = result[i][j] * 2
    }
  }

  return result
}

const original1 = [
  [1, 2],
  [3, 4]
]
const doubled1 = doubleAllBad(original1)

console.log('=== Caso 1: matriz.slice() ===')
console.log('Original: ', original1, '<- SE ARRUINÓ, y eso que usamos .slice()')
console.log('Duplicada:', doubled1)

// --- Por qué pasa ---

const values = [
  [10, 20],
  [30, 40]
]
const shallow = values.slice()

console.log('\n=== Por qué pasa ===')
console.log('¿Son la misma matriz?    ', shallow === values, '<- no: .slice() creó un vector nuevo...')
console.log('¿Comparten la fila 0?    ', shallow[0] === values[0], '<- ...pero las filas son las MISMAS')

shallow[0][0] = 999
console.log('values después de shallow[0][0] = 999:', values)

// --- Caso 2: la solución, copiar fila por fila ---

/**
 * Crea una copia independiente de una matriz, fila por fila.
 * @param {number[][]} matrix - Matriz a copiar
 * @returns {number[][]} Copia de la matriz que no comparte filas con el original
 */
const copyMatrix = (matrix) => {
  const copy = new Array(matrix.length)

  for (let i = 0; i < matrix.length; i++) {
    copy[i] = matrix[i].slice()           // cada FILA es un vector: esa sí se copia bien
  }

  return copy
}

/**
 * Duplica cada elemento de una matriz, sin modificar la matriz original.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[][]} Matriz nueva con cada elemento multiplicado por 2
 */
const doubleAll = (matrix) => {
  const result = copyMatrix(matrix)

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = result[i][j] * 2
    }
  }

  return result
}

const original2 = [
  [1, 2],
  [3, 4]
]
const doubled2 = doubleAll(original2)

console.log('\n=== Caso 2: copiar fila por fila ===')
console.log('Original: ', original2, '<- intacta')
console.log('Duplicada:', doubled2)

// --- Bonus: la fila compartida al CREAR una matriz ---

const sharedRow = new Array(3)
const grid = new Array(2)

for (let j = 0; j < sharedRow.length; j++) {
  sharedRow[j] = 0
}
for (let i = 0; i < grid.length; i++) {
  grid[i] = sharedRow                     // ⚠️ la MISMA fila en todas las posiciones
}

grid[0][1] = 7

console.log('\n=== Bonus: una sola fila para toda la matriz ===')
console.log('grid después de grid[0][1] = 7:', grid, '<- cambiaron las DOS filas')
