/**
 * Unidad 06 — Ejemplo 09
 * El pago de la promesa: el informe de la unidad 05, con funciones.
 *
 * ⚠️ Cada ejecución da números distintos.
 *
 * Ejecutalo con:  node 09-informe-con-funciones.js
 */

const NOMINAL_VOLTAGE = 380
const TOLERANCE = 0.05

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Genera una medición de tensión simulada.
 * @returns {number} Tensión simulada, en volt
 */
const simulateMeasurement = () => rndInt(355, 405)

/**
 * Indica si una medición está dentro de la tolerancia admitida.
 * @param {number} measured - Tensión medida, en volt
 * @returns {boolean} true si está dentro de la tolerancia
 */
const isWithinRange = (measured) =>
  measured >= NOMINAL_VOLTAGE * (1 - TOLERANCE) &&
  measured <= NOMINAL_VOLTAGE * (1 + TOLERANCE)

/**
 * Calcula la desviación porcentual respecto de la tensión nominal.
 * @param {number} measured - Tensión medida, en volt
 * @returns {number} Desviación en porcentaje
 */
const deviation = (measured) => (measured - NOMINAL_VOLTAGE) / NOMINAL_VOLTAGE * 100

/**
 * Imprime una línea del informe para una medición.
 * @param {number} index - Número de medición
 * @param {number} measured - Tensión medida, en volt
 */
const printLine = (index, measured) => {
  const mark = isWithinRange(measured) ? '' : '  ←'
  console.log(`Medición ${index}: ${measured} V   ${deviation(measured).toFixed(2)} %${mark}`)
}

// El programa principal se lee como una oración
for (let i = 1; i <= 8; i++) {
  printLine(i, simulateMeasurement())
}

// Cada función cuenta CÓMO; el programa principal cuenta QUÉ.
// Y si mañana cambia la tolerancia, hay UN SOLO lugar donde tocar.
