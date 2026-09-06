/**
 * Unidad 05 — Revisión de código · la bomba
 *
 * Un compañero te pasa este programa para que lo mires antes de entregarlo.
 * Releva el caudal de una bomba: pide cuántas mediciones son, las lee una por
 * una y al final informa el total, el promedio y cuántas quedaron fuera del
 * rango de trabajo (40 a 60 m3/h).
 *
 * ¿Lo aprobás?
 *
 * Al revisar cualquier código se miran tres cosas:
 *
 *    · declaraciones y nombres
 *    · buenas prácticas
 *    · decisiones y bucles
 *
 * 🧪 ANTES DE LEERLO, CORRELO. Pedí 4 mediciones y cargá:
 *
 *       45   ·   52   ·   68   ·   38
 *
 *    El rango de trabajo es 40 a 60. ¿La salida tiene sentido?
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

var CAUDAL_MINIMO = 40;
let caudal_maximo = 60

const n = prompt('¿Cuántas mediciones? ')
let total = 0
let fuera = 0

for (let i = 1; i < n; i++) {
  const c = parseFloat(prompt('Medición ' + i + ' [m3/h]: '))
  total = total + c
  if (c < CAUDAL_MINIMO || c > caudal_maximo)
    fuera++
    console.log('  ← fuera de rango')
  console.log('Promedio: ' + total / i)
}

console.log('Mediciones: ' + n)
console.log('Total: ' + total.toFixed(2))
console.log('Promedio: ' + (total / n).toFixed(2))
console.log('Fuera de rango: ' + fuera)
