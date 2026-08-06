/**
 * Unidad 07 — Ejemplo 01
 * Declaración de vectores, acceso y modificación por índice.
 *
 * Ejecutar con: node 01-declarar-y-acceder.js
 */

// --- Tres formas de declarar ---

const vacio = []
const conValores = [1, 2, 3, 4, 5]
const conDimension = new Array(3)

console.log('Vacío:          ', vacio)
console.log('Con valores:    ', conValores)
console.log('Con dimensión:  ', conDimension, '<- 3 posiciones sin inicializar')

// --- Acceso por índice ---

const nombres = ['Juan', 'Ana', 'Luis']

console.log('\nnombres[0]:', nombres[0])
console.log('nombres[2]:', nombres[2])

// --- Modificación ---

nombres[1] = 'María'
console.log('Después de nombres[1] = María:', nombres)

// --- .length y el último índice ---

console.log('\n.length:        ', nombres.length)
console.log('Último índice:  ', nombres.length - 1)
console.log('Último elemento:', nombres[nombres.length - 1])

// --- Irse de rango: NO tira error ---

console.log('\nnombres[3]:    ', nombres[3], '<- undefined, sin error')
console.log('nombres[3] + 1:', nombres[3] + 1, '<- NaN, acá empiezan los problemas')
