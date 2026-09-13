/**
 * Unidad 06 — Ejemplo 05
 * Las variables de adentro no se ven desde afuera.
 *
 * Ejecutalo con:  node 05-ambito.js
 */

/**
 * Calcula la potencia de una carga resistiva.
 * @param {number} voltage - Tensión, en volt
 * @param {number} current - Corriente, en ampere
 * @returns {number} Potencia, en watt
 */
const power = (voltage, current) => {
  const result = voltage * current
  return result
}

console.log(`power(380, 4.2) = ${power(380, 4.2)}`)

// Descomentá la línea siguiente para ver el error:
//   ReferenceError: result is not defined
// console.log(result)

// Y eso es BUENO: podés usar `result`, `i` o `total` adentro de una función
// sin miedo a pisar una variable del programa principal.
const result = 'esta es OTRA variable, la del programa principal'
console.log(result)

console.log()

// La regla: una función trabaja con SUS parámetros. Si necesita un dato, se
// lo pasás — no lo lee de afuera.
const TOLERANCE = 0.05

/**
 * Calcula el límite superior admitido para una tensión nominal.
 * @param {number} nominal - Tensión nominal, en volt
 * @param {number} tolerance - Tolerancia, como fracción (0.05 es 5 %)
 * @returns {number} Límite superior, en volt
 */
const upperLimit = (nominal, tolerance) => nominal * (1 + tolerance)

console.log(`upperLimit(380, ${TOLERANCE}) = ${upperLimit(380, TOLERANCE)} V`)
