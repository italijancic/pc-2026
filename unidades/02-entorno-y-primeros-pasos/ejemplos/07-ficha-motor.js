/**
 * Unidad 02 — Ejemplo 07
 * Integrador de la clase: leer, convertir, calcular y mostrar.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js y corré: npm run dev
 */

import { prompt } from './prompt.js'

const identificacion = prompt('Identificación del motor: ')
const tension = parseFloat(prompt('Tensión nominal [V]: '))
const corriente = parseFloat(prompt('Corriente nominal [A]: '))
const horas = parseFloat(prompt('Horas de uso por día: '))

const potencia = tension * corriente          // [W]
const consumoDiario = potencia * horas / 1000 // [kWh]

console.log()
console.log('─── Ficha técnica ───')
console.log(`Motor:           ${identificacion}`)
console.log(`Tensión:         ${tension.toFixed(1)} V`)
console.log(`Corriente:       ${corriente.toFixed(2)} A`)
console.log(`Potencia:        ${potencia.toFixed(2)} W`)
console.log(`Consumo diario:  ${consumoDiario.toFixed(2)} kWh`)
