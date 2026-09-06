/**
 * Unidad 06 — Ejemplo 06
 * Math.random(): decimales entre 0 y 1.
 *
 * ⚠️ Cada ejecución da números distintos. Corrélo varias veces.
 *
 * Ejecutalo con:  node 06-math-random.js
 */

console.log('Cinco valores de Math.random():')
for (let i = 1; i <= 5; i++) {
  console.log(`  ${Math.random()}`)
}

// Siempre entre 0 y 1: incluye el 0, NUNCA llega al 1.
// Así solo no sirve de mucho — nadie mide tensiones entre 0 y 1.
// Hay que estirarlo al rango que interesa. Eso es lo que hace rndInt().
