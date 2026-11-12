/**
 * Unidad 08 — Revisión de código
 *
 * Un compañero te pasa este programa antes de entregarlo y te pide que lo
 * mires. Registra la carga de los transformadores de una subestación, en %
 * de su potencia nominal, hora por hora durante un turno: cada fila es un
 * transformador y cada columna, una hora.
 *
 * ¿Lo aprobás?
 *
 * Ejecutar con: node 06-corregir-los-transformadores.js
 */

const TRANSFORMADORES = 4
const HORAS = 6
const LIMITE_SOBRECARGA = 100

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

/**
 * Genera el registro de carga de la subestación.
 * @param {number} filas - Cantidad de transformadores
 * @param {number} columnas - Cantidad de horas
 * @returns {number[][]} Matriz con la carga de cada transformador en cada hora
 */
const generarCargas = (filas, columnas) => {
  const matriz = new Array(filas)
  const fila = new Array(columnas)

  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      fila[j] = rndInt(40, 120)
    }
    matriz[i] = fila
  }

  return matriz
}

/**
 * Calcula la carga acumulada de cada transformador en el turno.
 * @param {number[][]} matriz - Matriz de cargas
 * @returns {number[]} Vector con la carga acumulada de cada transformador
 */
const cargaPorTransformador = (matriz) => {
  const totales = new Array(matriz.length)
  let suma = 0

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      suma += matriz[i][j]
    }
    totales[i] = suma
  }

  return totales
}

/**
 * Calcula la carga total de cada hora, sumando todos los transformadores.
 * @param {number[][]} matriz - Matriz de cargas
 * @returns {number[]} Vector con la carga total de cada hora
 */
const cargaPorHora = (matriz) => {
  const totales = new Array(matriz[0].length)

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      totales[j] += matriz[i][j]
    }
  }

  return totales.slice()
}

/**
 * Busca la mayor carga registrada y en qué transformador y hora ocurrió.
 * @param {number[][]} matriz - Matriz de cargas
 * @returns {number[]} Vector [carga máxima, transformador, hora]
 */
const mayorCarga = (matriz) => {
  let maximo = 0
  let posicion = [0, 0]

  for (let i = 1; i < matriz.length; i++) {
    for (let j = 1; j < matriz[i].length; j++) {
      const carga = matriz[i][j]
      if (carga > maximo) {
        maximo = carga
        posicion = [i, j]
      }
    }
  }

  return [maximo, posicion[0], posicion[1]]
}

/**
 * Busca la primera sobrecarga del turno, recorriendo hora por hora.
 * @param {number[][]} matriz - Matriz de cargas
 * @returns {number[]} Vector [transformador, hora] de la primera sobrecarga, o [-1, -1]
 */
const primeraSobrecarga = (matriz) => {
  let resultado = [0, -1]

  for (let j = 0; j < matriz[0].length; j++) {
    for (let i = 0; i < matriz.length; i++) {
      if (matriz[i][j] > 100) {
        resultado = [i, j]
      }
    }
  }

  return resultado
}

const aPorUnidad = (matriz) => {
  const copia = matriz.slice()

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia[i].length; j++) {
      copia[i][j] = copia[i][j] / 100
    }
  }

  return copia
}

const cargas = generarCargas(TRANSFORMADORES, HORAS)

const porTransformador = cargaPorTransformador(cargas)
const porHora = cargaPorHora(cargas)
const maxima = mayorCarga(cargas)
const sobrecarga = primeraSobrecarga(cargas)

console.log('Carga acumulada por transformador:', porTransformador)
console.log('Carga total por hora:', porHora)
console.log(`Mayor carga: ${maxima[0]} % (transformador ${maxima[1] + 1}, hora ${maxima[2]})`)

if (sobrecarga[0] == -1) {
  console.log('No hubo sobrecargas en el turno')
} else {
  console.log(`Primera sobrecarga: transformador ${sobrecarga[0]}, hora ${sobrecarga[1]}`)
}

const enPorUnidad = aPorUnidad(cargas)

console.log('Cargas en por unidad:')
console.table(enPorUnidad)
console.log('Cargas originales:')
console.table(cargas)
