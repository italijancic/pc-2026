/**
 * Unidad 04 — Integrador de cierre
 *
 * Este programa TIENE QUINCE ERRORES. Encontralos y corregilos.
 *
 * No son errores de sintaxis: el programa arranca y da resultados. El problema
 * es que los resultados están mal, y que casi nada respeta las convenciones de
 * la cátedra.
 *
 * Los errores son de tres tipos:
 *
 *    6  declaraciones y nombres   var/let/const, idioma, formato, claridad
 *    4  buenas prácticas          conversiones, comparaciones, texto
 *    5  condicionales             orden de las ramas, break, llaves, ===
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 *
 * 🧪 CÓMO EMPEZAR: no leas buscando errores. Primero CORRELO con una tensión
 *    de 300 V y el código P, y mirá si la salida tiene sentido. Un tablero a
 *    300 V sobre una nominal de 380 no puede estar NORMAL.
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
