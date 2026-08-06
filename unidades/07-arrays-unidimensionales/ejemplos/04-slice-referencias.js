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
 * @param {number} numero - Número a duplicar
 * @returns {number} El número duplicado
 */
const duplicarNumero = (numero) => {
  numero = numero * 2
  return numero
}

let unNumero = 5
const numeroDuplicado = duplicarNumero(unNumero)

console.log('=== Caso 1: números (se pasan por COPIA) ===')
console.log('Original: ', unNumero, '<- intacto')
console.log('Duplicado:', numeroDuplicado)

// --- Caso 2: un VECTOR se pasa por referencia (el problema) ---

/**
 * Duplica los elementos de un vector, MODIFICANDO el vector original.
 * Ejemplo de lo que NO hay que hacer.
 * @param {number[]} vector - Vector de números
 * @returns {number[]} El mismo vector, con sus elementos duplicados
 */
const duplicarMal = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    vector[i] = vector[i] * 2
  }
  return vector
}

const original1 = [1, 2, 3]
const duplicado1 = duplicarMal(original1)

console.log('\n=== Caso 2: vectores SIN .slice() (se pasan por REFERENCIA) ===')
console.log('Original: ', original1, '<- SE ARRUINÓ')
console.log('Duplicado:', duplicado1)

// --- Caso 3: la solución ---

/**
 * Duplica cada elemento de un vector, sin modificar el vector original.
 * @param {number[]} vector - Vector de números
 * @returns {number[]} Nuevo vector con cada elemento multiplicado por 2
 */
const duplicar = (vector) => {
  const resultado = vector.slice()

  for (let i = 0; i < resultado.length; i++) {
    resultado[i] = resultado[i] * 2
  }

  return resultado
}

const original2 = [1, 2, 3]
const duplicado2 = duplicar(original2)

console.log('\n=== Caso 3: vectores CON .slice() ===')
console.log('Original: ', original2, '<- intacto')
console.log('Duplicado:', duplicado2)

// --- Por qué pasa: dos nombres, un solo vector en memoria ---

const a = [10, 20, 30]
const b = a             // b NO es una copia: es otro nombre para el mismo vector
const c = a.slice()     // c SÍ es una copia independiente

b[0] = 999
c[1] = 888

console.log('\n=== Por qué pasa ===')
console.log('a:', a, '<- cambió cuando modificamos b')
console.log('b:', b, '<- b y a son el MISMO vector')
console.log('c:', c, '<- c es una copia: su cambio no afectó a a')
