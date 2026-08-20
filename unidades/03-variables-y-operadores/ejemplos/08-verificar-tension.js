/**
 * Unidad 03 — Ejemplo 08
 * Integrador: leer una medición y verificar si está en tolerancia.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

// Constantes del problema: van en UPPER_SNAKE_CASE
const NOMINAL_VOLTAGE = 380
const TOLERANCE = 0.05

const motorId = prompt('Identificación del tablero: ')
const measured = parseFloat(prompt('Tensión medida [V]: '))

const lowerLimit = NOMINAL_VOLTAGE * (1 - TOLERANCE)
const upperLimit = NOMINAL_VOLTAGE * (1 + TOLERANCE)
const deviation = (measured - NOMINAL_VOLTAGE) / NOMINAL_VOLTAGE * 100

console.log()
console.log(`Tablero ${motorId}`)
console.log(`Nominal:    ${NOMINAL_VOLTAGE} V`)
console.log(`Medida:     ${measured.toFixed(1)} V`)
console.log(`Tolerancia: ${lowerLimit.toFixed(1)} V a ${upperLimit.toFixed(1)} V`)
console.log(`Desviación: ${deviation.toFixed(2)} %`)
console.log(`En rango:   ${measured >= lowerLimit && measured <= upperLimit}`)
