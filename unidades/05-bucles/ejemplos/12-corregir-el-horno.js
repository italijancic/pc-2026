/**
 * Unidad 05 — Revisión de código · el horno
 *
 * Otro compañero te pasa este programa. Registra temperaturas de un horno
 * hasta que el operario ingresa 0, y después informa cuántas se cargaron, el
 * promedio, la máxima y la mínima.
 *
 * ¿Lo aprobás?
 *
 * ⚠️ ESTE ES MÁS DIFÍCIL que el de la bomba. Varios de los problemas sólo
 *    aparecen en los CASOS BORDE. Probalo con:
 *
 *       a)  62.5 · 71 · 68.5 · 0      ← una jornada normal
 *       b)  -5 · -12 · -3 · 0         ← temperaturas bajo cero
 *       c)  0                          ← el operario corta sin cargar nada
 *
 * 🛑 UNO DE LOS ERRORES HACE QUE EL PROGRAMA NO TERMINE. Si se te cuelga
 *    imprimiendo sin parar, cortá con Ctrl + C. No es un problema de tu
 *    máquina: es el hallazgo.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

const CENTINELA = 0
let maxima = 0
let minima = 0
let total = 0
let cantidad = 0
let temperatura

do {
  temperatura = parseFloat(prompt('Temperatura [°C] (0 para terminar): '))
  total = total + temperatura
  cantidad++
  if (temperatura > maxima) {
    maxima = temperatura
  }
  if (temperatura < minima) {
    minima = temperatura
  }
} while (temperatura != CENTINELA)

console.log('Cantidad: ' + cantidad)
console.log('Promedio: ' + (total / cantidad).toFixed(2))
console.log('Máxima: ' + maxima)
console.log('Mínima: ' + minima)

let i = 1
while (i <= cantidad) {
  console.log('Registro ' + i + ' procesado')
}
