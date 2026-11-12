/**
 * Unidad 08 — Ejemplo 03
 * Los algoritmos de la unidad 07, ahora sobre una matriz: acumular, contar,
 * máximo con su posición, suma por fila, suma por columna y generar al azar.
 *
 * Ejecutar con: node 03-algoritmos.js
 */

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Genera una matriz de enteros aleatorios dentro de un rango dado.
 * @param {number} rows - Cantidad de filas
 * @param {number} cols - Cantidad de columnas
 * @param {number} min - Valor mínimo del rango
 * @param {number} max - Valor máximo del rango
 * @returns {number[][]} Matriz de rows x cols con enteros aleatorios
 */
const createRandomMatrix = (rows, cols, min, max) => {
  const matrix = new Array(rows)

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)          // una fila NUEVA en cada vuelta
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = rndInt(min, max)
    }
  }

  return matrix
}

/**
 * Calcula la suma de todos los elementos de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number} Suma total de los elementos
 */
const sumAll = (matrix) => {
  let total = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      total += matrix[i][j]
    }
  }

  return total
}

/**
 * Calcula el promedio de todos los elementos de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number} Promedio de los elementos
 */
const getAverage = (matrix) => {
  const count = matrix.length * matrix[0].length
  return sumAll(matrix) / count
}

/**
 * Cuenta cuántos elementos de una matriz superan un límite.
 * @param {number[][]} matrix - Matriz de números
 * @param {number} limit - Valor límite (no se cuenta si es igual)
 * @returns {number} Cantidad de elementos mayores que el límite
 */
const countAbove = (matrix, limit) => {
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > limit) {
        count++
      }
    }
  }

  return count
}

/**
 * Busca el máximo de una matriz y la posición donde aparece por primera vez.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[]} Vector de tres elementos: [máximo, fila, columna]
 */
const findMax = (matrix) => {
  let max = matrix[0][0]                  // el PRIMERO, no 0
  let maxRow = 0
  let maxCol = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j]
        maxRow = i
        maxCol = j
      }
    }
  }

  return [max, maxRow, maxCol].slice()
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
    rowTotal = 0                          // se reinicia en CADA fila
    for (let j = 0; j < matrix[i].length; j++) {
      rowTotal += matrix[i][j]
    }
    sums[i] = rowTotal
  }

  return sums.slice()
}

/**
 * Calcula la suma de cada columna de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[]} Vector con la suma de cada columna
 */
const colSums = (matrix) => {
  const sums = new Array(matrix[0].length)
  let colTotal

  for (let j = 0; j < matrix[0].length; j++) {      // columnas AFUERA
    colTotal = 0
    for (let i = 0; i < matrix.length; i++) {       // filas adentro
      colTotal += matrix[i][j]
    }
    sums[j] = colTotal
  }

  return sums.slice()
}

// --- Programa principal ---

const temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]

console.log('Matriz de trabajo:')
console.table(temperatures)

console.log('Suma total:       ', sumAll(temperatures))
console.log('Promedio:         ', getAverage(temperatures).toFixed(2))
console.log('Mayores que 80:   ', countAbove(temperatures, 80))

const max = findMax(temperatures)
console.log(`Máximo:            ${max[0]} en [${max[1]}][${max[2]}]`)

console.log('Suma por fila:    ', rowSums(temperatures))
console.log('Suma por columna: ', colSums(temperatures))

// --- Por qué el máximo NO arranca en 0 ---

const freezer = [
  [-18, -21, -19],
  [-22, -17, -20]
]
const coldest = findMax(freezer)
console.log(`\nCámara de frío: el máximo es ${coldest[0]} en [${coldest[1]}][${coldest[2]}]`)
console.log('(con let max = 0 hubiera dicho 0: un valor que no está en la matriz)')

// --- Una matriz aleatoria ---

console.log('\nMatriz aleatoria de 3 x 5 entre 1 y 9:')
console.table(createRandomMatrix(3, 5, 1, 9))
