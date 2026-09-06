/**
 * Unidad 05 — Ejemplo 04
 * do-while: el cuerpo se ejecuta SIEMPRE al menos una vez.
 *
 * Ejecutalo con:  node 04-do-while.js
 */

let value = 100

do {
  console.log(`Valor: ${value}`)
  value = value - 30
} while (value > 0)

console.log()

// La diferencia con while, en el caso límite: con una condición que ya arranca
// falsa, el while no entra nunca y el do-while entra una vez.
let x = 50

while (x > 100) {
  console.log('el while NO imprime esto')
}

do {
  console.log('el do-while SÍ imprime esto, aunque la condición sea falsa')
} while (x > 100)
