/**
 * Unidad 02 — Ejemplo 06
 * Por qué 20 + 5 puede dar 205.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js y corré: npm run dev
 */

import { prompt } from './prompt.js'

// prompt() devuelve SIEMPRE texto, aunque escribas un número.
// Y para el texto, el operador + no suma: pega.
const textoA = prompt('Primer número: ')
const textoB = prompt('Segundo número: ')

console.log(`Sin convertir: ${textoA + textoB}`)

// parseInt convierte el texto a número entero
const a = parseInt(textoA)
const b = parseInt(textoB)

console.log(`Convertidos:   ${a + b}`)
