/**
 * ============================================================================
 * TP UNIDAD 08 — MATRICES · Una resolución posible
 * Consumo de energía de un taller de mecanizado
 * Programación en Computación — UTN FRRQ 2026
 * ============================================================================
 *
 * Enunciado: tp.pdf, en esta misma carpeta.
 *
 * No es la única forma correcta de resolverlo: los nombres y la manera de
 * repartir el trabajo entre funciones pueden variar. Lo que no varía son las
 * reglas de la cátedra (bucles tradicionales, funciones con parámetros y
 * retorno, ninguna función modifica la matriz que recibe).
 *
 * ATENCIÓN: usa prompt(), así que necesita el template del curso. Copialo a
 * la carpeta src/ de tu proyecto y ejecutalo con npm run dev.
 *
 * Para comparar con los ejemplos del enunciado, usá la matriz fija que está
 * comentada en el programa principal.
 */

import { prompt } from './prompt.js'

const MACHINES = ['Torno', 'Fresadora', 'Compresor', 'Soldadora']
const DAYS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
const PEAK_LIMIT = 75
const ENERGY_PRICE = 140

/**
 * Genera un numero entero aleatorio en el rango [min, max].
 * @param {number} min - Valor minimo del rango (inclusive)
 * @param {number} max - Valor maximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// ---------------------------------------------------------------------------
// Problema 1 — Generacion del registro
// ---------------------------------------------------------------------------

/**
 * Genera una matriz de enteros aleatorios dentro de un rango dado.
 * @param {number} rows - Cantidad de filas
 * @param {number} cols - Cantidad de columnas
 * @param {number} min - Valor minimo del rango
 * @param {number} max - Valor maximo del rango
 * @returns {number[][]} Matriz de rows x cols con enteros aleatorios
 */
const createRandomMatrix = (rows, cols, min, max) => {
  const matrix = new Array(rows)

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = rndInt(min, max)
    }
  }

  return matrix
}

// ---------------------------------------------------------------------------
// Problema 2 — Consumo total y promedio
// ---------------------------------------------------------------------------

/**
 * Calcula la suma de todos los elementos de una matriz.
 * @param {number[][]} matrix - Matriz de numeros
 * @returns {number} Suma total
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
 * @param {number[][]} matrix - Matriz de numeros
 * @returns {number} Promedio de los elementos
 */
const getAverage = (matrix) => {
  return sumAll(matrix) / (matrix.length * matrix[0].length)
}

// ---------------------------------------------------------------------------
// Problema 3 — Maximo y minimo con su posicion
// ---------------------------------------------------------------------------

/**
 * Busca el maximo de una matriz y la posicion donde aparece por primera vez.
 * @param {number[][]} matrix - Matriz de numeros
 * @returns {number[]} Vector [maximo, fila, columna]
 */
const findMax = (matrix) => {
  let max = matrix[0][0]
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
 * Busca el minimo de una matriz y la posicion donde aparece por primera vez.
 * @param {number[][]} matrix - Matriz de numeros
 * @returns {number[]} Vector [minimo, fila, columna]
 */
const findMin = (matrix) => {
  let min = matrix[0][0]
  let minRow = 0
  let minCol = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j]
        minRow = i
        minCol = j
      }
    }
  }

  return [min, minRow, minCol].slice()
}

// ---------------------------------------------------------------------------
// Problema 4 — Consumo por maquina y por dia
// ---------------------------------------------------------------------------

/**
 * Calcula la suma de cada fila de una matriz.
 * @param {number[][]} matrix - Matriz de numeros
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

/**
 * Calcula la suma de cada columna de una matriz.
 * @param {number[][]} matrix - Matriz de numeros
 * @returns {number[]} Vector con la suma de cada columna
 */
const colSums = (matrix) => {
  const sums = new Array(matrix[0].length)
  let colTotal

  for (let j = 0; j < matrix[0].length; j++) {
    colTotal = 0
    for (let i = 0; i < matrix.length; i++) {
      colTotal += matrix[i][j]
    }
    sums[j] = colTotal
  }

  return sums.slice()
}

// ---------------------------------------------------------------------------
// Problema 5 — Picos de consumo
// ---------------------------------------------------------------------------

/**
 * Cuenta cuantos elementos de una matriz superan un limite.
 * @param {number[][]} matrix - Matriz de numeros
 * @param {number} limit - Valor limite (no se cuenta si es igual)
 * @returns {number} Cantidad de elementos mayores que el limite
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

// ---------------------------------------------------------------------------
// Problema 6 — Matriz de costos
// ---------------------------------------------------------------------------

/**
 * Calcula el costo de cada consumo, sin modificar la matriz de consumos.
 * @param {number[][]} matrix - Matriz de consumos [kWh]
 * @param {number} price - Precio de la energia [ARS/kWh]
 * @returns {number[][]} Matriz nueva con el costo de cada consumo [ARS]
 */
const getCostMatrix = (matrix, price) => {
  const costs = new Array(matrix.length)

  for (let i = 0; i < matrix.length; i++) {
    costs[i] = new Array(matrix[i].length)
    for (let j = 0; j < matrix[i].length; j++) {
      costs[i][j] = matrix[i][j] * price
    }
  }

  return costs
}

// ---------------------------------------------------------------------------
// Problema 7 — Resumen semanal
// ---------------------------------------------------------------------------

/**
 * Busca el maximo de un vector y su posicion (funcion de la unidad 07).
 * @param {number[]} vector - Vector de numeros
 * @returns {number[]} Vector [maximo, posicion]
 */
const findVectorMax = (vector) => {
  let max = vector[0]
  let position = 0

  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > max) {
      max = vector[i]
      position = i
    }
  }

  return [max, position].slice()
}

// ---------------------------------------------------------------------------
// Programa principal
// ---------------------------------------------------------------------------

const minConsumption = parseInt(prompt('Ingrese el consumo diario mínimo posible [kWh]: '))
const maxConsumption = parseInt(prompt('Ingrese el consumo diario máximo posible [kWh]: '))
const consumption = createRandomMatrix(MACHINES.length, DAYS.length, minConsumption, maxConsumption)

// Para comparar con los ejemplos del enunciado, reemplazá la línea anterior
// por la matriz fija:
// const consumption = [
//   [42, 55, 61, 48, 77, 30],
//   [68, 72, 80, 65, 59, 41],
//   [85, 79, 88, 90, 83, 52],
//   [25, 33, 47, 76, 38, 21]
// ]

console.log('\n--- Problema 1: Registro de consumos ---')
console.log('Consumo diario por máquina [kWh]:')
console.table(consumption)

console.log('\n--- Problema 2: Total y promedio ---')
console.log(`Consumo total de la semana: ${sumAll(consumption)} kWh`)
console.log(`Consumo promedio por máquina y por día: ${getAverage(consumption).toFixed(2)} kWh`)

console.log('\n--- Problema 3: Máximo y mínimo ---')
const max = findMax(consumption)
const min = findMin(consumption)
console.log(`Mayor consumo: ${max[0]} kWh (${MACHINES[max[1]]}, ${DAYS[max[2]]})`)
console.log(`Menor consumo: ${min[0]} kWh (${MACHINES[min[1]]}, ${DAYS[min[2]]})`)

console.log('\n--- Problema 4: Consumo por máquina y por día ---')
const byMachine = rowSums(consumption)
const byDay = colSums(consumption)
console.log('Por máquina:')
for (let i = 0; i < byMachine.length; i++) {
  console.log(`  ${MACHINES[i]}: ${byMachine[i]} kWh`)
}
console.log('Por día:')
for (let j = 0; j < byDay.length; j++) {
  console.log(`  ${DAYS[j]}: ${byDay[j]} kWh`)
}

console.log('\n--- Problema 5: Picos de consumo ---')
const peaks = countAbove(consumption, PEAK_LIMIT)
const total = MACHINES.length * DAYS.length
console.log(`Lecturas por encima de ${PEAK_LIMIT} kWh: ${peaks} de ${total} (${(peaks / total * 100).toFixed(2)}%)`)

console.log('\n--- Problema 6: Costo de la energía ---')
const costs = getCostMatrix(consumption, ENERGY_PRICE)
console.log(`Costo diario por máquina [ARS] (a ${ENERGY_PRICE} ARS/kWh):`)
console.table(costs)
console.log('Matriz de consumos luego de calcular los costos:')
console.table(consumption)
console.log('(debe estar intacta)')

console.log('\n--- Problema 7: Resumen semanal ---')
const topMachine = findVectorMax(byMachine)
const topDay = findVectorMax(byDay)
console.log(`Máquina de mayor consumo: ${MACHINES[topMachine[1]]} (${topMachine[0]} kWh, ${topMachine[0] * ENERGY_PRICE} ARS)`)
console.log(`Día de mayor consumo:     ${DAYS[topDay[1]]} (${topDay[0]} kWh, ${topDay[0] * ENERGY_PRICE} ARS)`)
console.log(`Costo total de la semana: ${sumAll(costs)} ARS`)

// ---------------------------------------------------------------------------
// El informe completo
// ---------------------------------------------------------------------------

console.log('\n===========================================================')
console.log('   CONSUMO DE ENERGIA DEL TALLER — SEMANA')
console.log('===========================================================')
console.log('\nConsumo diario por máquina [kWh]:')
console.table(consumption)
console.log(`\nConsumo total de la semana: ${sumAll(consumption)} kWh`)
console.log(`Consumo promedio por máquina y por día: ${getAverage(consumption).toFixed(2)} kWh`)
console.log(`Mayor consumo: ${max[0]} kWh (${MACHINES[max[1]]}, ${DAYS[max[2]]})`)
console.log(`Menor consumo: ${min[0]} kWh (${MACHINES[min[1]]}, ${DAYS[min[2]]})`)
console.log(`Lecturas por encima de ${PEAK_LIMIT} kWh: ${peaks} de ${total} (${(peaks / total * 100).toFixed(2)}%)`)
console.log(`Máquina de mayor consumo: ${MACHINES[topMachine[1]]} (${topMachine[0]} kWh, ${topMachine[0] * ENERGY_PRICE} ARS)`)
console.log(`Día de mayor consumo:     ${DAYS[topDay[1]]} (${topDay[0]} kWh, ${topDay[0] * ENERGY_PRICE} ARS)`)
console.log(`Costo total de la semana: ${sumAll(costs)} ARS`)
console.log('\n===========================================================')
console.log('                    FIN DEL INFORME')
console.log('===========================================================')
