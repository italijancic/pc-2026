/**
 * Unidad 05 — Ejemplo 10
 * do-while con centinela: cargar datos hasta que el usuario diga basta.
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

const SENTINEL = 0

// Se declara ANTES del do: si naciera adentro, al llegar al while ya no
// existiría (murió con el bloque).
let temperature
let total = 0
let howMany = 0

do {
  temperature = parseFloat(prompt(`Temperatura [°C] (${SENTINEL} para terminar): `))

  if (temperature !== SENTINEL) {
    total = total + temperature
    howMany++
  }
} while (temperature !== SENTINEL)

console.log()

if (howMany === 0) {
  console.log('No se cargó ninguna medición')
} else {
  console.log(`Se cargaron ${howMany} mediciones`)
  console.log(`Promedio: ${(total / howMany).toFixed(2)} °C`)
}
