/**
 * Unidad 05 — Ejemplo 01
 * for: cuando sabés cuántas veces.
 *
 * Ejecutalo con:  node 01-for.js
 */

// Tres partes, separadas por punto y coma:
//   inicialización ; condición ; incremento
for (let i = 1; i <= 3; i++) {
  console.log(`Medición ${i}`)
}

// Cambiar el 3 por 31 son treinta y una vueltas, sin escribir una línea más.

console.log()

// El incremento no tiene por qué ser de a uno
console.log('De 5 en 5:')
for (let i = 0; i <= 20; i += 5) {
  console.log(i)
}

console.log()

// Ni tiene que ir para arriba
console.log('Cuenta regresiva:')
for (let i = 5; i >= 1; i--) {
  console.log(i)
}
