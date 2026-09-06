/**
 * Unidad 06 — Ejemplo 03
 * return: devuelve un valor Y termina la función.
 *
 * Ejecutalo con:  node 03-return.js
 */

/**
 * Clasifica una medición de tensión según los límites de la norma.
 * @param {number} measured - Tensión medida, en volt
 * @returns {string} 'BAJA', 'NORMAL' o 'ALTA'
 */
const classify = (measured) => {
  if (measured < 361) {
    return 'BAJA'
  }
  // No hace falta el else: si llegamos acá, la primera dio false
  if (measured <= 399) {
    return 'NORMAL'
  }
  return 'ALTA'
}

console.log(`300 V → ${classify(300)}`)
console.log(`380 V → ${classify(380)}`)
console.log(`405 V → ${classify(405)}`)

console.log()

// El return CORTA: lo que viene después no se ejecuta nunca
/**
 * Devuelve siempre 1. Sirve para ver que el return corta la función.
 * @returns {number} Siempre 1
 */
const cortaAca = () => {
  return 1
  console.log('esto no se imprime jamás')
}

console.log(`cortaAca() = ${cortaAca()}`)

console.log()

// Lo que devuelve, hay que usarlo
classify(300)                              // se calcula y se tira
const result = classify(300)               // se guarda
console.log(`guardado: ${result}`)
