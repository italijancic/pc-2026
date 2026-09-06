/**
 * Unidad 05 — Ejemplo 02
 * La traza: seguir el bucle paso a paso.
 *
 * Cuando un bucle no hace lo que esperás, escribí la traza. Este programa la
 * imprime solo, para que veas qué tendrías que anotar en papel.
 *
 * Ejecutalo con:  node 02-la-traza.js
 */

console.log('vuelta | i al entrar | ¿i <= 4? | imprime | i después')
console.log('-------|-------------|----------|---------|----------')

let vuelta = 0

for (let i = 1; i <= 4; i++) {
  vuelta++
  console.log(`   ${vuelta}   |      ${i}      |    sí    |    ${i}    |     ${i + 1}`)
}

console.log('   -   |      5      |    NO    |    -    | el bucle termina')

// Fijate en la última fila: con i = 5 la condición da false y el cuerpo NO se
// ejecuta. La condición se evalúa ANTES de entrar.
