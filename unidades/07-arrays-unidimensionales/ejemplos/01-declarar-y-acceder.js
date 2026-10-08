/**
 * Unidad 07 — Ejemplo 01
 * Declaración de vectores, acceso y modificación por índice.
 *
 * Ejecutar con: node 01-declarar-y-acceder.js
 */

// --- Tres formas de declarar ---

const empty = []
const withValues = [1, 2, 3, 4, 5]
const withSize = new Array(3)

console.log('Vacío:          ', empty)
console.log('Con valores:    ', withValues)
console.log('Con dimensión:  ', withSize, '<- 3 posiciones sin inicializar')

// --- Acceso por índice ---

const names = ['Juan', 'Ana', 'Luis']

console.log('\nnames[0]:', names[0])
console.log('names[2]:', names[2])

// --- Modificación ---

names[1] = 'María'
console.log('Después de names[1] = María:', names)

// --- .length y el último índice ---

console.log('\n.length:        ', names.length)
console.log('Último índice:  ', names.length - 1)
console.log('Último elemento:', names[names.length - 1])

// --- Irse de rango: NO tira error ---

console.log('\nnames[3]:    ', names[3], '<- undefined, sin error')
console.log('names[3] + 1:', names[3] + 1, '<- NaN, acá empiezan los problemas')
