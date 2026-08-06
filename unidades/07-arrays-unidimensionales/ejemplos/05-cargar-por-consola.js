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
const cargarVector = () => {
  const dimension = parseInt(prompt('Ingrese la dimensión del vector: '))
  const vector = new Array(dimension)

  for (let i = 0; i < dimension; i++) {
    vector[i] = parseInt(prompt(`Ingrese el valor del índice ${i}: `))
  }

  return vector.slice()
}

/**
 * Calcula la suma de todos los elementos de un vector.
 * @param {number[]} vector - Vector de números
 * @returns {number} Suma total de los elementos
 */
const sumarVector = (vector) => {
  let suma = 0

  for (let i = 0; i < vector.length; i++) {
    suma += vector[i]
  }

  return suma
}

// --- Programa principal ---

const miVector = cargarVector()

console.log('\nEl vector ingresado es:')
console.table(miVector)

console.log(`Suma:     ${sumarVector(miVector)}`)
console.log(`Promedio: ${(sumarVector(miVector) / miVector.length).toFixed(2)}`)

// Recordá: prompt() devuelve SIEMPRE un string.
// Sin parseInt(), '5' + 3 daría '53' en lugar de 8.
