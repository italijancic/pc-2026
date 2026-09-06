/**
 * Unidad 06 — Ejemplo 02
 * Parámetros y argumentos, y qué pasa si faltan.
 *
 * Ejecutalo con:  node 02-parametros.js
 */

/**
 * Calcula la potencia de una carga resistiva.
 * @param {number} voltage - Tensión, en volt
 * @param {number} current - Corriente, en ampere
 * @returns {number} Potencia, en watt
 */
const power = (voltage, current) => voltage * current
//              ↑ parámetros: los huecos de la declaración

console.log(`power(380, 4.2) = ${power(380, 4.2)}`)
//                 ↑ argumentos: los valores concretos

console.log()

// El ORDEN importa. Acá no se nota porque multiplicar es conmutativo...
console.log(`power(4.2, 380) = ${power(4.2, 380)}`)

// ...pero acá sí:
/**
 * Calcula la desviación porcentual de un valor respecto de una referencia.
 * @param {number} measured - Valor medido
 * @param {number} nominal - Valor nominal de referencia
 * @returns {number} Desviación en porcentaje
 */
const deviation = (measured, nominal) => (measured - nominal) / nominal * 100

console.log()
console.log(`deviation(372.5, 380) = ${deviation(372.5, 380).toFixed(2)} %`)
console.log(`deviation(380, 372.5) = ${deviation(380, 372.5).toFixed(2)} %  ← no es lo mismo`)

console.log()

// Si falta un argumento, JavaScript NO se queja: queda undefined y da NaN.
console.log(`power(380) = ${power(380)}   ← faltó la corriente`)
