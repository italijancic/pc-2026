/**
 * Unidad 07 — Ejemplo 05
 * Carga de un vector desde la consola.
 *
 * ATENCIÓN: este ejemplo usa prompt(), así que necesita el template del curso.
 * Copiá este archivo a src/ de tu proyecto y ejecutalo con: npm run dev
 * (no funciona con `node 05-cargar-por-consola.js` desde esta carpeta,
 *  porque necesita el módulo prompt.js y la dependencia readline-sync)
 */

import { prompt } from './prompt.js'

/**
 * Solicita al usuario la dimensión y los valores de un vector de enteros.
 * @returns {number[]} Vector cargado con los valores ingresados
 */
const readVector = () => {
  const size = parseInt(prompt('Ingrese la dimensión del vector: '))
  const vector = new Array(size)

  for (let i = 0; i < size; i++) {
    vector[i] = parseInt(prompt(`Ingrese el valor del índice ${i}: `))
  }

  return vector.slice()
}

/**
 * Calcula la suma de todos los elementos de un vector.
 * @param {number[]} vector - Vector de números
 * @returns {number} Suma total de los elementos
 */
const sumAll = (vector) => {
  let total = 0

  for (let i = 0; i < vector.length; i++) {
    total += vector[i]
  }

  return total
}

// --- Programa principal ---

const myVector = readVector()

console.log('\nEl vector ingresado es:')
console.table(myVector)

console.log(`Suma:     ${sumAll(myVector)}`)
console.log(`Promedio: ${(sumAll(myVector) / myVector.length).toFixed(2)}`)

// Recordá: prompt() devuelve SIEMPRE un string.
// Sin parseInt(), '5' + 3 daría '53' en lugar de 8.
