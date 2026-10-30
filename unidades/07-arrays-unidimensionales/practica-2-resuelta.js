/**
 * ============================================================================
 * PRÁCTICA INTEGRADORA DE VECTORES 2 — Una resolución posible
 * Estación de carga de autoelevadores eléctricos
 * Programación en Computación — UTN FRRQ 2026
 * ============================================================================
 *
 * Enunciado: practica-2.pdf, en esta misma carpeta.
 *
 * No es la única forma correcta de resolverla: los nombres y la manera de
 * repartir el trabajo entre funciones pueden variar. Lo que no varía son las
 * reglas de la cátedra (bucles tradicionales, funciones con parámetros y
 * retorno, .slice() al devolver un vector).
 *
 * Para comparar con los ejemplos del enunciado, usá los vectores fijos que
 * están comentados en el programa principal.
 */
const FORKLIFTS = ['AE-01', 'AE-02', 'AE-03', 'AE-04', 'AE-05', 'AE-06', 'AE-07', 'AE-08']
const CAPACITY = [24, 24, 30, 30, 36, 36, 48, 48] // kWh
const CHARGER_POWER = 12 // kW
const CRITICAL_LEVEL = 20 // %
const LOW_LEVEL = 50 // %
const MAX_WAIT = 2 // h

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

/**
 * Indica si un valor está en un vector.
 * @param {number[]} vector - Vector donde buscar
 * @param {number} value - Valor buscado
 * @returns {boolean} true si el valor está en el vector
 */
const contains = (vector, value) => {
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === value) {
      return true
    }
  }

  return false
}

/**
 * Genera un orden aleatorio de los índices 0 a size - 1, sin repetir.
 * @param {number} size - Cantidad de índices
 * @returns {number[]} Vector con los índices en orden aleatorio
 */
const getRandomOrder = (size) => {
  const order = new Array(size)
  let candidate = 0

  for (let i = 0; i < size; i++) {
    order[i] = -1
  }

  for (let i = 0; i < size; i++) {
    do {
      candidate = rndInt(0, size - 1)
    } while (contains(order, candidate))
    order[i] = candidate
  }

  return order.slice()
}

// ----------------------------------------------------------------------------
// Inciso 2 — Energía y tiempo de carga
// ----------------------------------------------------------------------------

/**
 * Calcula la energía que necesita cada autoelevador para llegar al 100 %.
 * @param {number[]} capacity - Capacidad de cada batería (kWh)
 * @param {number[]} charge - Carga al llegar (%)
 * @returns {number[]} Energía a cargar por autoelevador (kWh), con 1 decimal
 */
const getEnergyVector = (capacity, charge) => {
  const energy = new Array(capacity.length)

  for (let i = 0; i < capacity.length; i++) {
    energy[i] = Number((capacity[i] * (100 - charge[i]) / 100).toFixed(1))
  }

  return energy.slice()
}

/**
 * Calcula el tiempo de carga de cada autoelevador.
 * @param {number[]} energy - Energía a cargar (kWh)
 * @param {number} power - Potencia del cargador (kW)
 * @returns {number[]} Tiempo de carga (h), con 2 decimales
 */
const getTimeVector = (energy, power) => {
  const time = new Array(energy.length)

  for (let i = 0; i < energy.length; i++) {
    time[i] = Number((energy[i] / power).toFixed(2))
  }

  return time.slice()
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
// Inciso 3 — Estado de las baterías
// ----------------------------------------------------------------------------

/**
 * Clasifica el estado de una batería según su carga al llegar.
 * @param {number} charge - Carga (%)
 * @returns {string} 'CRITICA', 'BAJA' u 'OK'
 */
const levelOf = (charge) => {
  if (charge < CRITICAL_LEVEL) {
    return 'CRITICA'
  } else if (charge <= LOW_LEVEL) {
    return 'BAJA'
  } else {
    return 'OK'
  }
}

/**
 * Genera el vector de estado de cada batería.
 * @param {number[]} charge - Carga al llegar (%)
 * @returns {string[]} Estado de cada batería
 */
const getLevelVector = (charge) => {
  const levels = new Array(charge.length)

  for (let i = 0; i < charge.length; i++) {
    levels[i] = levelOf(charge[i])
  }

  return levels.slice()
}

/**
 * Cuenta cuántos elementos de un vector son iguales a un valor.
 * @param {string[]} vector - Vector donde contar
 * @param {string} value - Valor a contar
 * @returns {number} Cantidad de apariciones
 */
const countEqual = (vector, value) => {
  let count = 0

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === value) {
      count++
    }
  }

  return count
}

// ----------------------------------------------------------------------------
// Inciso 4 — Cola de carga
// ----------------------------------------------------------------------------

/**
 * Calcula la hora de inicio de cada turno de carga, en orden de llegada.
 * @param {number[]} order - Orden de llegada (índices de autoelevador)
 * @param {number[]} time - Tiempo de carga de cada autoelevador (h)
 * @returns {number[]} Hora de inicio de cada turno (h), con 2 decimales
 */
const getStartVector = (order, time) => {
  const start = new Array(order.length)

  start[0] = 0
  for (let k = 1; k < order.length; k++) {
    start[k] = Number((start[k - 1] + time[order[k - 1]]).toFixed(2))
  }

  return start.slice()
}

/**
 * Imprime la tabla de turnos: quién carga, cuándo empieza y cuándo termina.
 * @param {number[]} order - Orden de llegada
 * @param {number[]} start - Hora de inicio de cada turno (h)
 * @param {number[]} time - Tiempo de carga de cada autoelevador (h)
 */
const printQueue = (order, start, time) => {
  let end = 0

  for (let k = 0; k < order.length; k++) {
    end = start[k] + time[order[k]]
    console.log(`  Turno ${k + 1}: ${FORKLIFTS[order[k]]}  de ${start[k].toFixed(2)} h a ${end.toFixed(2)} h`)
  }
}

// ----------------------------------------------------------------------------
// Inciso 5 — Reporte
// ----------------------------------------------------------------------------

/**
 * Busca la posición del mayor valor de un vector (la primera, si hay empate).
 * @param {number[]} vector - Vector de números
 * @returns {number} Posición del máximo
 */
const maxPosition = (vector) => {
  let max = vector[0]
  let position = 0

  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > max) {
      max = vector[i]
      position = i
    }
  }

  return position
}

/**
 * Cuenta los autoelevadores críticos que esperaron más que el máximo admitido.
 * @param {number[]} order - Orden de llegada
 * @param {number[]} start - Hora de inicio de cada turno (h)
 * @param {string[]} levels - Estado de cada batería
 * @param {number} maxWait - Espera máxima admitida (h)
 * @returns {number} Cantidad de críticos que esperaron de más
 */
const countLateCritical = (order, start, levels, maxWait) => {
  let count = 0

  for (let k = 0; k < order.length; k++) {
    if (levels[order[k]] === 'CRITICA' && start[k] > maxWait) {
      count++
    }
  }

  return count
}

// ----------------------------------------------------------------------------
// Programa principal
// ----------------------------------------------------------------------------

// Para comparar con los ejemplos del enunciado, usar los vectores fijos:
// const CHARGE = [15, 62, 40, 8, 75, 33, 50, 22]
// const ORDER = [1, 6, 3, 2, 7, 0, 5, 4]
const CHARGE = getRandomVector(FORKLIFTS.length, 5, 95)
const ORDER = getRandomOrder(FORKLIFTS.length)

console.log('Carga al llegar (%):', CHARGE)
console.log('Orden de llegada:  ', ORDER)

const ENERGY = getEnergyVector(CAPACITY, CHARGE)
const TIME = getTimeVector(ENERGY, CHARGER_POWER)

console.log('\nEnergía a cargar (kWh):', ENERGY)
console.log('Tiempo de carga (h):   ', TIME)
console.log(`Energía total: ${sumAll(ENERGY).toFixed(1)} kWh`)

const LEVELS = getLevelVector(CHARGE)

console.log('\nEstado de las baterías:', LEVELS)
console.log(`  CRITICA: ${countEqual(LEVELS, 'CRITICA')}`)
console.log(`  BAJA:    ${countEqual(LEVELS, 'BAJA')}`)
console.log(`  OK:      ${countEqual(LEVELS, 'OK')}`)

const START = getStartVector(ORDER, TIME)

console.log('\nCola de carga:')
printQueue(ORDER, START, TIME)

const neediest = maxPosition(ENERGY)
const lateCritical = countLateCritical(ORDER, START, LEVELS, MAX_WAIT)
const lastTurn = ORDER.length - 1

console.log('\n─── Reporte de la estación ───')
console.log(`Tiempo total de carga: ${(START[lastTurn] + TIME[ORDER[lastTurn]]).toFixed(2)} h`)
console.log(`Más energía: ${FORKLIFTS[neediest]} (${ENERGY[neediest]} kWh)`)
if (lateCritical === 0) {
  console.log(`Ningún autoelevador crítico esperó más de ${MAX_WAIT} h`)
} else {
  console.log(`Críticos que esperaron más de ${MAX_WAIT} h: ${lateCritical}`)
}
