/**
 * Unidad 03 — Ejemplo 01
 * let, const y por qué no usamos var.
 *
 * Ejecutalo con:  node 01-let-const-var.js
 */

// const: el valor NO se reasigna. Es lo que usamos por defecto.
const nominalVoltage = 380
console.log(`Tensión nominal: ${nominalVoltage} V`)

// Descomentá la línea siguiente para ver el error:
//   TypeError: Assignment to constant variable.
// nominalVoltage = 220

// let: para lo que sí tiene que cambiar
let counter = 0
counter = counter + 1
counter += 1
counter++
console.log(`Contador: ${counter}`)

// Ámbito de bloque: la variable existe sólo entre las llaves donde nació
{
  const insideBlock = 'existo sólo acá adentro'
  console.log(insideBlock)
}
// Descomentá para ver el error:  ReferenceError: insideBlock is not defined
// console.log(insideBlock)

// var se puede usar ANTES de declararla y no avisa: imprime undefined.
// Con const o let, el mismo código falla y te dice qué pasó. Un error que
// avisa es mejor que un undefined silencioso.
console.log(oldStyle)
var oldStyle = 'esto no debería haber funcionado'
console.log(oldStyle)
