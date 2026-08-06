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
const sumarVector = (vector) => {
  let suma = 0

  for (let i = 0; i < vector.length; i++) {
    suma += vector[i]
  }

  return suma
}

/**
 * Cuenta cuántos elementos pares hay en un vector.
 * @param {number[]} vector - Vector de números enteros
 * @returns {number} Cantidad de elementos pares
 */
const contarPares = (vector) => {
  let cantidad = 0

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 === 0) {
      cantidad++
    }
  }

  return cantidad
}

/**
 * Busca el valor máximo de un vector y la posición donde se encuentra.
 * @param {number[]} vector - Vector de números
 * @returns {number[]} Vector de dos elementos: [valorMaximo, posicion]
 */
const buscarMaximo = (vector) => {
  let maximo = vector[0]
  let posicion = 0

  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > maximo) {
      maximo = vector[i]
      posicion = i
    }
  }

  return [maximo, posicion]
}

/**
 * Busca la primera posición en la que aparece un valor dentro de un vector.
 * @param {number[]} vector - Vector donde buscar
 * @param {number} buscado - Valor a buscar
 * @returns {number} Posición del valor, o -1 si no está en el vector
 */
const buscarPosicion = (vector, buscado) => {
  let posicion = -1
  let i = 0

  while (i < vector.length && posicion === -1) {
    if (vector[i] === buscado) {
      posicion = i
    }
    i++
  }

  return posicion
}

/**
 * Genera un vector de enteros aleatorios dentro de un rango dado.
 * @param {number} dimension - Cantidad de elementos a generar
 * @param {number} min - Valor mínimo del rango
 * @param {number} max - Valor máximo del rango
 * @returns {number[]} Vector de enteros aleatorios
 */
const generarVectorAleatorio = (dimension, min, max) => {
  const vector = new Array(dimension)

  for (let i = 0; i < dimension; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}

// --- Programa principal ---

const numeros = [15, 42, 7, 81, 23, 56]

console.log('Vector de trabajo:', numeros)

// 1. Acumular
const suma = sumarVector(numeros)
console.log(`\n1. Suma:     ${suma}`)
console.log(`   Promedio: ${(suma / numeros.length).toFixed(2)}`)

// 2. Contar
console.log(`\n2. Cantidad de pares: ${contarPares(numeros)}`)

// 3. Máximo
const [maximo, posMaximo] = buscarMaximo(numeros)
console.log(`\n3. Máximo: ${maximo} en la posición ${posMaximo}`)

// Por qué NO inicializar en 0
const negativos = [-5, -12, -3, -40]
const [maxNeg, posNeg] = buscarMaximo(negativos)
console.log(`   Con el vector [-5, -12, -3, -40]: máximo ${maxNeg} en posición ${posNeg}`)
console.log('   (si hubiéramos inicializado maximo = 0, el resultado sería 0: un valor que NO está)')

// 4. Búsqueda lineal
console.log(`\n4. Buscar 81: posición ${buscarPosicion(numeros, 81)}`)
console.log(`   Buscar 99: posición ${buscarPosicion(numeros, 99)} (no está)`)

// 5. Vector aleatorio
console.log(`\n5. Vector aleatorio de 6 elementos entre 1 y 10:`)
console.log('  ', generarVectorAleatorio(6, 1, 10))
