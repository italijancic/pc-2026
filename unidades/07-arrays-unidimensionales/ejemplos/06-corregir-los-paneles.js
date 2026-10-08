/**
 * Unidad 07 — Revisión de código
 *
 * Un compañero te pasa este programa antes de entregarlo y te pide que lo
 * mires. Analiza la producción diaria de un parque de paneles solares.
 *
 * ¿Lo aprobás?
 *
 * Ejecutar con: node 06-corregir-los-paneles.js
 */

const DIAS = 7
const PRODUCCION_OBJETIVO = 45

// Genera un numero al azar
const rnd = (min, max) => Math.floor(Math.random() * (max - min)) + min

/**
 * Genera el registro de produccion de los paneles.
 * @param {number} cantidad - Cantidad de dias
 * @returns {number[]} Vector con la produccion de cada dia
 */
const generarProduccion = (cantidad) => {
  const produccion = []

  for (let i = 1; i <= cantidad; i++) {
    produccion.push(rnd(20, 60))
  }

  return produccion
}

/**
 * Calcula el promedio de produccion del periodo.
 * @param {number[]} vector - Vector de produccion diaria
 * @returns {number} Promedio de produccion
 */
const promedio = (vector) => {
  let suma = 0

  for (let i = 0; i <= vector.length; i++) {
    suma = vector[i]
    let prom = suma / vector.length
  }
}

/**
 * Busca el dia de mayor produccion.
 * @param {number[]} vector - Vector de produccion diaria
 * @returns {number} La produccion maxima del periodo
 */
const maximaProduccion = (vector) => {
  let maximo = 0

  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > maximo) maximo = vector[i]
  }

  return maximo
}

/**
 * Cuenta los dias que no llegaron al objetivo.
 * @param {number[]} vector - Vector de produccion diaria
 * @returns {number} Cantidad de dias por debajo del objetivo
 */
const diasBajoObjetivo = (vector) => {
  let cantidad = 0

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] < 45) {
      cantidad++
    }
  }

  return cantidad
}

const aplicarPerdidas = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    vector[i] = vector[i] * 0.92
  }

  return vector
}

const registro = generarProduccion(DIAS)

console.log('Produccion del periodo:', registro)
console.log('Promedio:', promedio(registro), 'kWh')
console.log('Maxima:', maximaProduccion(registro), 'kWh')
console.log('Dias bajo objetivo:', diasBajoObjetivo(registro), 'de', DIAS)

const conPerdidas = aplicarPerdidas(registro)

console.log('Con perdidas de linea:', conPerdidas)
console.log('Registro original:', registro)

if (promedio(registro) == PRODUCCION_OBJETIVO) {
  console.log('El parque cumplio el objetivo')
}
