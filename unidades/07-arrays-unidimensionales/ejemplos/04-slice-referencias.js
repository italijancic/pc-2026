/**
 * Unidad 07 — Ejemplo 04
 * Por qué las funciones que trabajan con vectores necesitan .slice()
 *
 * Este es el ejemplo más importante de la unidad. Correlo y compará las tres salidas.
 *
 * Ejecutar con: node 04-slice-referencias.js
 */

// --- Caso 1: un NÚMERO se pasa por copia ---

/**
 * Intenta duplicar un número recibido por parámetro.
 * @param {number} number - Número a duplicar
 * @returns {number} El número duplicado
 */
const doubleNumber = (number) => {
  number = number * 2
  return number
}

let aNumber = 5
const doubled = doubleNumber(aNumber)

console.log('=== Caso 1: números (se pasan por COPIA) ===')
console.log('Original: ', aNumber, '<- intacto')
console.log('Duplicado:', doubled)

// --- Caso 2: un VECTOR se pasa por referencia (el problema) ---

/**
 * Duplica los elementos de un vector, MODIFICANDO el vector original.
 * Ejemplo de lo que NO hay que hacer.
 * @param {number[]} vector - Vector de números
 * @returns {number[]} El mismo vector, con sus elementos duplicados
 */
const doubleAllBad = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    vector[i] = vector[i] * 2
  }
  return vector
}

const original1 = [1, 2, 3]
const doubled1 = doubleAllBad(original1)

console.log('\n=== Caso 2: vectores SIN .slice() (se pasan por REFERENCIA) ===')
console.log('Original: ', original1, '<- SE ARRUINÓ')
console.log('Duplicado:', doubled1)

// --- Caso 3: la solución ---

/**
 * Duplica cada elemento de un vector, sin modificar el vector original.
 * @param {number[]} vector - Vector de números
 * @returns {number[]} Nuevo vector con cada elemento multiplicado por 2
 */
const doubleAll = (vector) => {
  const result = vector.slice()

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i] * 2
  }

  return result
}

const original2 = [1, 2, 3]
const doubled2 = doubleAll(original2)

console.log('\n=== Caso 3: vectores CON .slice() ===')
console.log('Original: ', original2, '<- intacto')
console.log('Duplicado:', doubled2)

// --- Por qué pasa: dos nombres, un solo vector en memoria ---

const values = [10, 20, 30]
const alias = values      // alias NO es una copia: es otro nombre para el mismo vector
const copy = values.slice()   // copy SÍ es una copia independiente

alias[0] = 999
copy[1] = 888

console.log('\n=== Por qué pasa ===')
console.log('values:', values, '<- cambió cuando modificamos alias')
console.log('alias: ', alias, '<- alias y values son el MISMO vector')
console.log('copy:  ', copy, '<- copy es una copia: su cambio no afectó a values')
