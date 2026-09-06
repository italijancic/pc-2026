/**
 * Unidad 06 — Ejemplo 08
 * Generar datos en vez de tipearlos.
 *
 * ⚠️ Cada ejecución da números distintos.
 *
 * Ejecutalo con:  node 08-simular-mediciones.js
 */

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Genera una medición de tensión simulada dentro de un rango razonable.
 * @returns {number} Tensión simulada, en volt
 */
const simulateMeasurement = () => rndInt(355, 405)
//                          ↑ sin parámetros: los paréntesis van igual, vacíos

for (let i = 1; i <= 5; i++) {
  console.log(`Medición ${i}: ${simulateMeasurement()} V`)
}

// Con esto podés probar un programa con cien casos sin tipear ninguno.
