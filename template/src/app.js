import { prompt } from './prompt.js'

// Ejemplos de lectura desde la consola
// ------------------------------------

// Leer un texto
const name = prompt('¿Cómo te llamás? ')
console.log(`Hola ${name}, bienvenido a Programación en Computación 2026 | UTN - FRRQ`)

// Leer un número entero
const fileNumber = parseInt(prompt('Tu número de legajo: '))
console.log(`Legajo: ${fileNumber}`)

// Leer un número con decimales
const height = parseFloat(prompt('¿Cuánto medís [m]? '))
console.log(`${name} mide ${height.toFixed(2)} m`)
