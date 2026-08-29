/**
 * Unidad 04 — Ejemplo 07
 * Integrador: leer una medición y clasificarla.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

const NOMINAL_VOLTAGE = 380
const TOLERANCE = 0.05

const panelId = prompt('Identificación del tablero: ')
const measured = parseFloat(prompt('Tensión medida [V]: '))

const lowerLimit = NOMINAL_VOLTAGE * (1 - TOLERANCE)
const upperLimit = NOMINAL_VOLTAGE * (1 + TOLERANCE)
const deviation = (measured - NOMINAL_VOLTAGE) / NOMINAL_VOLTAGE * 100

console.log()
console.log(`Tablero ${panelId}`)
console.log(`Medida:     ${measured.toFixed(1)} V`)
console.log(`Desviación: ${deviation.toFixed(2)} %`)

// Rangos de menor a mayor: así el orden no puede fallar
if (measured < lowerLimit) {
  console.log('Estado:     BAJA — revisar la acometida')
} else if (measured <= upperLimit) {
  console.log('Estado:     NORMAL')
} else {
  console.log('Estado:     ALTA — riesgo para los equipos')
}
