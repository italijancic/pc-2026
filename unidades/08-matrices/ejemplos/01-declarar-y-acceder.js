/**
 * Unidad 08 — Ejemplo 01
 * Declaración de matrices, acceso por [fila][columna], dimensiones y
 * qué pasa cuando te vas de rango.
 *
 * Ejecutar con: node 01-declarar-y-acceder.js
 */

// --- Una matriz es un vector de vectores: cada elemento es una FILA ---

const temperatures = [
  [62, 68, 71, 74],   // fila 0: motor 0
  [58, 61, 83, 85],   // fila 1: motor 1
  [65, 70, 76, 78]    // fila 2: motor 2
]

console.log('La matriz completa:')
console.log(temperatures)

// --- Dimensiones ---

const rows = temperatures.length       // cuántas filas
const cols = temperatures[0].length    // cuántas columnas (largo de una fila)

console.log(`\nFilas: ${rows}  Columnas: ${cols}  Elementos: ${rows * cols}`)

// --- Acceso: primero la fila, después la columna ---

console.log('\ntemperatures[1][2]:', temperatures[1][2], '<- fila 1, columna 2')
console.log('temperatures[1]:   ', temperatures[1], '<- con UN índice, la fila entera')
console.log('Último elemento:   ', temperatures[rows - 1][cols - 1])

// --- Modificación ---

temperatures[0][3] = 99
console.log('\nDespués de temperatures[0][3] = 99:')
console.log(temperatures[0])

// --- Crear una matriz con dimensión conocida: UNA FILA NUEVA POR VUELTA ---

const zeros = new Array(2)

for (let i = 0; i < zeros.length; i++) {
  zeros[i] = new Array(3)
  for (let j = 0; j < zeros[i].length; j++) {
    zeros[i][j] = 0
  }
}

console.log('\nMatriz de 2 x 3 creada con bucles:')
console.log(zeros)

// --- Irse de rango ---

console.log('\ntemperatures[0][7]:', temperatures[0][7], '<- columna que no existe: undefined, sin error')
console.log('temperatures[5]:   ', temperatures[5], '<- fila que no existe: undefined')

// La fila 5 no existe, así que temperatures[5] es undefined... y pedirle
// la columna 0 a undefined SÍ es un error: el programa se corta.
// Descomentá la línea de abajo y corré de nuevo para verlo:
//
// console.log('temperatures[5][0]:', temperatures[5][0])
//
// TypeError: Cannot read properties of undefined (reading '0')
