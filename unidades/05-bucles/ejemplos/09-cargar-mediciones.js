/**
 * Unidad 05 — Ejemplo 09
 * Leer N mediciones por consola y promediar. El esqueleto de casi todo el TP.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

const howMany = parseInt(prompt('¿Cuántas mediciones? '))
let total = 0

for (let i = 1; i <= howMany; i++) {
  const measured = parseFloat(prompt(`Medición ${i} [V]: `))
  total = total + measured
}

console.log()
console.log(`Suma:     ${total.toFixed(2)} V`)
console.log(`Promedio: ${(total / howMany).toFixed(2)} V`)

// El bucle NO sabe de antemano cuántas vueltas va a dar: howMany se conoce
// recién cuando el programa corre. Eso es justamente lo que no se podía hacer
// copiando y pegando líneas.
