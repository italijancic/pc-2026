/**
 * Unidad 04 — Ejemplo 01
 * if: ejecutar un bloque sólo si se cumple la condición.
 *
 * Ejecutalo con:  node 01-if.js
 */

const MAX_TEMPERATURE = 85
const temperature = 91

if (temperature > MAX_TEMPERATURE) {
  console.log(`Temperatura ${temperature} °C — FUERA DE RANGO`)
}

console.log('Fin del control')

// Con 70 °C la primera línea no se imprime: el programa salta directo al final.
// Probá cambiar el valor y volvé a ejecutar.
