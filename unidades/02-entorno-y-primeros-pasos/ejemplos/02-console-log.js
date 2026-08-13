/**
 * Unidad 02 — Ejemplo 02
 * Las tres formas de mostrar información en la consola.
 *
 * Ejecutalo con:  node 02-console-log.js
 */

// 1. Un texto suelto
console.log('Mediciones del tablero')

// 2. Varios argumentos separados por comas: van en la misma línea
console.log('Tensión:', 220, 'V')

// 3. Template literal: el valor se mete DENTRO del texto con ${...}
//    Ojo: son backticks ` , no comillas simples '
const tension = 220
console.log(`La tensión de línea es ${tension} V`)

// Una línea en blanco para separar bloques de salida
console.log()
console.log('Listo')
