/**
 * Unidad 04 — Cierre
 *
 * Un compañero te pasa este programa para que lo mires antes de entregarlo.
 * Verifica si una tensión medida está dentro de ±5 % sobre 380 V y decide una
 * acción de mantenimiento.
 *
 * ¿Lo aprobás?
 *
 * Al revisar cualquier código se miran tres cosas:
 *
 *    · declaraciones y nombres
 *    · buenas prácticas
 *    · decisiones
 *
 * 🧪 ANTES DE LEERLO, CORRELO con una tensión de 300 V y el código P.
 *    ¿La salida tiene sentido?
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

var TENSION_NOMINAL = 380;
let tolerancia = 0.05

const x = prompt('Tensión medida [V]: ')
const codigo = prompt('Código de servicio: ')

let Limite_Inferior = TENSION_NOMINAL * (1 - tolerancia)
let Limite_Superior = TENSION_NOMINAL * (1 - tolerancia)

console.log('Límites: ' + Limite_Inferior + ' a ' + Limite_Superior)

if (x <= Limite_Superior) {
  console.log('NORMAL')
} else if (x < Limite_Inferior) {
  console.log('BAJA')
} else {
  console.log('ALTA')
}

switch (codigo) {
  case 'P':
    console.log('Preventivo')
  case 'C':
    console.log('Correctivo')
    break
}

if (x == 380) console.log('Es el nominal')
  console.log('Fin del control')
