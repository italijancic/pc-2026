/**
 * ============================================================================
 * PRÁCTICA INTEGRADORA DE VECTORES 1 — Una resolución posible
 * Monitoreo de un aerogenerador
 * Programación en Computación — UTN FRRQ 2026
 * ============================================================================
 *
 * Enunciado: practica-1.pdf, en esta misma unidad.
 *
 * No es la única forma correcta de resolverla: los nombres y la manera de
 * repartir el trabajo entre funciones pueden variar. Lo que no varía son las
 * reglas de la cátedra (bucles tradicionales, funciones con parámetros y
 * retorno, .slice() al devolver un vector).
 *
 * Para comparar con los ejemplos del enunciado, usá el vector fijo que está
 * comentado en el programa principal.
 */

const HOURS = 24
const MIN_WIND = 0
const MAX_WIND = 26

const RATED_POWER = 2000 // kW
const CUT_IN = 3 // m/s
const RATED_SPEED = 12 // m/s
const CUT_OUT = 25 // m/s
const GUST_LIMIT = 8 // m/s

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// ----------------------------------------------------------------------------
// Inciso 1 — Generación de datos
// ----------------------------------------------------------------------------

/**
 * Genera un vector de enteros aleatorios dentro de un rango.
 * @param {number} size - Cantidad de elementos
 * @param {number} min - Valor mínimo (inclusive)
 * @param {number} max - Valor máximo (inclusive)
 * @returns {number[]} Vector de enteros aleatorios
 */
const getRandomVector = (size, min, max) => {
  const vector = new Array(size)

  for (let i = 0; i < size; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}

// ----------------------------------------------------------------------------
// Inciso 2 — Potencia y energía
// ----------------------------------------------------------------------------

/**
 * Calcula la potencia que entrega el aerogenerador con una velocidad de viento.
 * @param {number} speed - Velocidad del viento (m/s)
 * @returns {number} Potencia entregada (kW), redondeada a 1 decimal
 */
const powerAt = (speed) => {
  if (speed < CUT_IN || speed > CUT_OUT) {
    return 0
  } else if (speed < RATED_SPEED) {
    const ratio = (speed - CUT_IN) / (RATED_SPEED - CUT_IN)
    return Number((RATED_POWER * ratio ** 3).toFixed(1))
  } else {
    return RATED_POWER
  }
}

/**
 * Genera el vector de potencia hora por hora.
 * @param {number[]} speeds - Velocidades del viento por hora (m/s)
 * @returns {number[]} Potencia entregada por hora (kW)
 */
const getPowerVector = (speeds) => {
  const power = new Array(speeds.length)

  for (let i = 0; i < speeds.length; i++) {
    power[i] = powerAt(speeds[i])
  }

  return power.slice()
}

/**
 * Suma todos los elementos de un vector.
 * @param {number[]} vector - Vector de números
 * @returns {number} Suma de los elementos
 */
const sumAll = (vector) => {
  let total = 0

  for (let i = 0; i < vector.length; i++) {
    total += vector[i]
  }

  return total
}

// ----------------------------------------------------------------------------
// Inciso 3 — Estados de operación
// ----------------------------------------------------------------------------

/**
 * Clasifica el estado de operación según la velocidad del viento.
 * @param {number} speed - Velocidad del viento (m/s)
 * @returns {string} 'PARADO', 'PARCIAL', 'NOMINAL' o 'CORTE'
 */
const stateAt = (speed) => {
  if (speed < CUT_IN) {
    return 'PARADO'
  } else if (speed < RATED_SPEED) {
    return 'PARCIAL'
  } else if (speed <= CUT_OUT) {
    return 'NOMINAL'
  } else {
    return 'CORTE'
  }
}

/**
 * Genera el vector de estados hora por hora.
 * @param {number[]} speeds - Velocidades del viento por hora (m/s)
 * @returns {string[]} Estado de operación por hora
 */
const getStateVector = (speeds) => {
  const states = new Array(speeds.length)

  for (let i = 0; i < speeds.length; i++) {
    states[i] = stateAt(speeds[i])
  }

  return states.slice()
}

/**
 * Cuenta cuántas horas estuvo el aerogenerador en un estado dado.
 * @param {string[]} states - Vector de estados
 * @param {string} state - Estado a contar
 * @returns {number} Cantidad de horas en ese estado
 */
const countState = (states, state) => {
  let count = 0

  for (let i = 0; i < states.length; i++) {
    if (states[i] === state) {
      count++
    }
  }

  return count
}

// ----------------------------------------------------------------------------
// Inciso 4 — Ráfagas
// ----------------------------------------------------------------------------

/**
 * Cuenta las ráfagas: horas en que el viento cambió más de GUST_LIMIT m/s
 * respecto de la hora anterior, subiendo o bajando.
 * @param {number[]} speeds - Velocidades del viento por hora (m/s)
 * @returns {number} Cantidad de ráfagas
 */
const countGusts = (speeds) => {
  let count = 0
  let change = 0

  for (let i = 1; i < speeds.length; i++) {
    change = speeds[i] - speeds[i - 1]
    if (change > GUST_LIMIT || change < -GUST_LIMIT) {
      count++
    }
  }

  return count
}

/**
 * Imprime cada ráfaga con su hora y su cambio de velocidad.
 * @param {number[]} speeds - Velocidades del viento por hora (m/s)
 */
const printGusts = (speeds) => {
  let change = 0

  for (let i = 1; i < speeds.length; i++) {
    change = speeds[i] - speeds[i - 1]
    if (change > GUST_LIMIT || change < -GUST_LIMIT) {
      console.log(`  Hora ${i}: ${speeds[i - 1]} → ${speeds[i]} m/s (${change > 0 ? '+' : ''}${change})`)
    }
  }
}

// ----------------------------------------------------------------------------
// Inciso 5 — Reporte
// ----------------------------------------------------------------------------

/**
 * Busca la primera hora en un estado dado.
 * @param {string[]} states - Vector de estados
 * @param {string} state - Estado buscado
 * @returns {number} Primera hora en ese estado, o -1 si no hubo ninguna
 */
const firstHourIn = (states, state) => {
  for (let i = 0; i < states.length; i++) {
    if (states[i] === state) {
      return i
    }
  }

  return -1
}

/**
 * Busca la hora de mayor potencia (la primera, si hay empate).
 * @param {number[]} power - Potencia por hora (kW)
 * @returns {number} Hora de mayor potencia
 */
const peakHour = (power) => {
  let max = power[0]
  let hour = 0

  for (let i = 1; i < power.length; i++) {
    if (power[i] > max) {
      max = power[i]
      hour = i
    }
  }

  return hour
}

// ----------------------------------------------------------------------------
// Programa principal
// ----------------------------------------------------------------------------

// Para comparar con el ejemplo del enunciado, usar el vector fijo:
// const V = [2, 4, 6, 9, 11, 13, 15, 14, 12, 10, 19, 24, 27, 17, 16, 13, 9, 7, 5, 3, 1, 4, 8, 6]
const V = getRandomVector(HOURS, MIN_WIND, MAX_WIND)

console.log('Velocidad del viento por hora V (m/s):')
console.log(V)

const P = getPowerVector(V)
const energy = sumAll(P)
const capacityFactor = energy / (RATED_POWER * HOURS) * 100

console.log('\nPotencia por hora P (kW):')
console.log(P)
console.log(`\nEnergía generada en el día: ${(energy / 1000).toFixed(2)} MWh`)
console.log(`Factor de capacidad: ${capacityFactor.toFixed(1)} %`)

const C = getStateVector(V)

console.log('\nEstado por hora C:')
console.log(C)
console.log('\nHoras por estado:')
console.log(`  PARADO:  ${countState(C, 'PARADO')}`)
console.log(`  PARCIAL: ${countState(C, 'PARCIAL')}`)
console.log(`  NOMINAL: ${countState(C, 'NOMINAL')}`)
console.log(`  CORTE:   ${countState(C, 'CORTE')}`)

console.log(`\nRáfagas detectadas: ${countGusts(V)}`)
printGusts(V)

const firstCut = firstHourIn(C, 'CORTE')
const peak = peakHour(P)

console.log('\n─── Reporte del día ───')
console.log(`Hora de mayor potencia: ${peak} (${P[peak]} kW con ${V[peak]} m/s)`)
if (firstCut === -1) {
  console.log('No hubo cortes por viento excesivo')
} else {
  console.log(`Primer corte por viento excesivo: hora ${firstCut} (${V[firstCut]} m/s)`)
}
