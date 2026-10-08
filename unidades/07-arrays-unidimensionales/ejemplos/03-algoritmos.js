/**
 * Unidad 07 — Ejemplo 03
 * Los cinco algoritmos fundamentales sobre vectores.
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

/**
 * Cuenta cuántos elementos pares hay en un vector.
 * @param {number[]} vector - Vector de números enteros
 * @returns {number} Cantidad de elementos pares
 */
const countEven = (vector) => {
  let count = 0

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 === 0) {
      count++
    }
  }

  return count
}

/**
 * Busca el valor máximo de un vector y la posición donde se encuentra.
 * @param {number[]} vector - Vector de números
 * @returns {number[]} Vector de dos elementos: [valorMaximo, posicion]
 */
const findMax = (vector) => {
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

/**
 * Busca la primera posición en la que aparece un valor dentro de un vector.
 * @param {number[]} vector - Vector donde buscar
 * @param {number} wanted - Valor a buscar
 * @returns {number} Posición del valor, o -1 si no está en el vector
 */
const linearSearch = (vector, wanted) => {
  let position = -1
  let i = 0

  while (i < vector.length && position === -1) {
    if (vector[i] === wanted) {
      position = i
    }
    i++
  }

  return position
}

/**
 * Genera un vector de enteros aleatorios dentro de un rango dado.
 * @param {number} size - Cantidad de elementos a generar
 * @param {number} min - Valor mínimo del rango
 * @param {number} max - Valor máximo del rango
 * @returns {number[]} Vector de enteros aleatorios
 */
const getRandomVector = (size, min, max) => {
  const vector = new Array(size)

  for (let i = 0; i < size; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}

// --- Programa principal ---

const numbers = [15, 42, 7, 81, 23, 56]

console.log('Vector de trabajo:', numbers)

// 1. Acumular
const total = sumAll(numbers)
console.log(`\n1. Suma:     ${total}`)
console.log(`   Promedio: ${(total / numbers.length).toFixed(2)}`)

// 2. Contar
console.log(`\n2. Cantidad de pares: ${countEven(numbers)}`)

// 3. Máximo
const maxResult = findMax(numbers)
console.log(`\n3. Máximo: ${maxResult[0]} en la posición ${maxResult[1]}`)

// Por qué NO inicializar en 0
const negatives = [-5, -12, -3, -40]
const negResult = findMax(negatives)
console.log(`   Con el vector [-5, -12, -3, -40]: máximo ${negResult[0]} en posición ${negResult[1]}`)
console.log('   (si hubiéramos inicializado max = 0, el resultado sería 0: un valor que NO está)')

// 4. Búsqueda lineal
console.log(`\n4. Buscar 81: posición ${linearSearch(numbers, 81)}`)
console.log(`   Buscar 99: posición ${linearSearch(numbers, 99)} (no está)`)

// 5. Vector aleatorio
console.log(`\n5. Vector aleatorio de 6 elementos entre 1 y 10:`)
console.log('  ', getRandomVector(6, 1, 10))
