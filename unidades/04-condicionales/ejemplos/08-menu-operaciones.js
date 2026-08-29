/**
 * Unidad 04 — Ejemplo 08
 * switch sobre una opción leída por consola.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

console.log('Cálculos eléctricos')
console.log('  P  potencia      (V × I)')
console.log('  R  resistencia   (V / I)')
console.log('  I  corriente     (V / R)')
console.log()

// .toLowerCase() normaliza: así 'P' y 'p' entran por el mismo case
const option = prompt('Opción: ').toLowerCase()
const voltage = parseFloat(prompt('Tensión [V]: '))
const value = parseFloat(prompt('Corriente [A] o resistencia [Ω]: '))

console.log()

switch (option) {
  case 'p':
    console.log(`Potencia:    ${(voltage * value).toFixed(2)} W`)
    break
  case 'r':
    console.log(`Resistencia: ${(voltage / value).toFixed(2)} Ω`)
    break
  case 'i':
    console.log(`Corriente:   ${(voltage / value).toFixed(2)} A`)
    break
  default:
    console.log(`Opción desconocida: «${option}»`)
}
