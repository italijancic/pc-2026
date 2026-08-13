/**
 * Unidad 02 — Ejemplo 04
 * Los decimales que no pediste, y cómo se arreglan.
 *
 * Es la precisión finita que vimos en la unidad 01 (0.1 + 0.2).
 * Acá aparece en una conversión de temperatura de todos los días.
 *
 * Ejecutalo con:  node 04-decimales.js
 */

const celsius = 21.7

// Pasar a Kelvin es sumar 273.15. Debería dar 294.85
const kelvin = celsius + 273.15

console.log(`Sin corregir: ${kelvin} K`)

// toFixed(n) redondea a n decimales y devuelve el número listo para mostrar
console.log(`Con toFixed:  ${kelvin.toFixed(2)} K`)
