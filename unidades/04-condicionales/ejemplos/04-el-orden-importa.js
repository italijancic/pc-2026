/**
 * Unidad 04 — Ejemplo 04
 * EL error de la unidad: los mismos rangos, en el orden equivocado.
 *
 * Ejecutalo con:  node 04-el-orden-importa.js
 */

const measured = 300   // 300 V es BAJA: el límite inferior es 361

console.log('── Orden equivocado (del más general al más específico) ──')
if (measured <= 399) {
  console.log(`${measured} V — NORMAL`)      // entra acá, y está MAL
} else if (measured < 361) {
  console.log(`${measured} V — BAJA`)        // nunca se evalúa
} else {
  console.log(`${measured} V — ALTA`)
}

console.log()
console.log('── Orden correcto (rangos de menor a mayor) ──')
if (measured < 361) {
  console.log(`${measured} V — BAJA`)
} else if (measured <= 399) {
  console.log(`${measured} V — NORMAL`)
} else {
  console.log(`${measured} V — ALTA`)
}

// Lo peligroso: el programa de arriba NO falla. No hay error ni aviso.
// Clasifica mal siempre, y te enterás cuando alguien lee el informe.
