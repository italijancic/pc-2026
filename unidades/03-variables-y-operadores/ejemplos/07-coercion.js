/**
 * Unidad 03 — Ejemplo 07
 * Por qué '20' + 5 da '205' pero '20' - 5 da 15.
 *
 * Ejecutalo con:  node 07-coercion.js
 */

// El + sirve para dos cosas: sumar números y PEGAR textos.
// Si uno de los lados es texto, gana el pegado.
console.log(`'20' + 5 = ${'20' + 5}   ← pegó`)

// Los demás operadores no tienen ese doble uso: convierten y calculan.
console.log(`'20' - 5 = ${'20' - 5}    ← calculó`)
console.log(`'20' * 5 = ${'20' * 5}   ← calculó`)
console.log(`'20' / 5 = ${'20' / 5}     ← calculó`)

// De ahí la regla: si el dato es un número, convertilo antes de usarlo
console.log()
console.log(`typeof '20'             → ${typeof '20'}`)
console.log(`typeof parseFloat('20') → ${typeof parseFloat('20')}`)

// NaN: una conversión que falló. Es de tipo number, y contagia toda la cuenta.
console.log()
const failed = parseFloat('cuatro')
console.log(`parseFloat('cuatro') → ${failed}`)
console.log(`typeof               → ${typeof failed}`)
console.log(`${failed} + 10             → ${failed + 10}   ← contagió`)
