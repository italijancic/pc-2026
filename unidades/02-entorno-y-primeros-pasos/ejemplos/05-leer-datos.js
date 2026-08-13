/**
 * Unidad 02 — Ejemplo 05
 * Leer datos del teclado.
 *
 * ATENCIÓN: usa prompt(), así que necesita el template del curso.
 * Copiá el contenido a src/app.js de tu proyecto y ejecutalo con: npm run dev
 * (no funciona con `node 05-leer-datos.js` desde esta carpeta, porque necesita
 *  el módulo prompt.js y la dependencia readline-sync)
 */

import { prompt } from './prompt.js'

const nombre = prompt('¿Cómo te llamás? ')
const legajo = prompt('Tu número de legajo: ')

console.log(`Hola ${nombre}, legajo ${legajo}. Bienvenido al curso.`)
