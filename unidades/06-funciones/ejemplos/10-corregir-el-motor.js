/**
 * Unidad 06 — Revisión de código · el motor
 *
 * Un compañero te pasa este programa para que lo mires antes de entregarlo.
 * Calcula la potencia, la resistencia, el consumo diario y el costo de tener
 * un motor funcionando, y de paso muestra un número al azar.
 *
 * ¿Lo aprobás?
 *
 * Al revisar cualquier código se miran tres cosas:
 *
 *    · declaraciones y nombres
 *    · buenas prácticas
 *    · las funciones: qué reciben, qué devuelven y cómo se llaman
 *
 * 🧪 ANTES DE LEERLO, CORRELO con el motor M-14 y 8 horas de uso.
 *
 *    Datos del motor: 380 V · 4.2 A · energía a $ 85.50 el kWh.
 *    ¿La salida tiene sentido?
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

var TENSION = 380;
let costo_kwh = 85.5

function calc(voltage, current) {
  const p = voltage * current
}

const resistencia = (current, voltage) => voltage / current

const rnd = (min, max) => Math.floor(Math.random() * (max - min)) + min

const consumo = (horas) => {
  return calc(TENSION, 4.2) * horas / 1000
}

const mostrar = (motor, horas) => {
  const kwh = consumo(horas)
  console.log('Motor ' + motor + ': ' + kwh + ' kWh')
  return kwh * costo_kwh
}

const motor = prompt('Identificación del motor: ')
const horas = parseFloat(prompt('Horas de uso: '))

mostrar(motor, horas)

console.log('Resistencia: ' + resistencia(TENSION, 4.2))
console.log('Muestra al azar: ' + rnd)
