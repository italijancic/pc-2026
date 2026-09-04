/**
 * Unidad 04 — Cierre · segunda revisión
 *
 * Otro compañero te pasa este programa para que lo mires antes de entregarlo.
 * Autoriza —o no— la puesta en marcha de un compresor de aire, según la
 * presión de trabajo, la temperatura del aceite, las horas desde el último
 * service, las protecciones y el turno.
 *
 * ¿Lo aprobás?
 *
 * Al revisar cualquier código se miran tres cosas:
 *
 *    · declaraciones y nombres
 *    · buenas prácticas
 *    · decisiones
 *
 * ⚠️ Este es MÁS DIFÍCIL que el del tablero. Varios de los problemas no se ven
 *    leyendo línea por línea: hay que pensar qué pasa con cada rango de valores.
 *    Preguntas útiles mientras lo mirás:
 *
 *       ¿esta condición puede ser falsa alguna vez?
 *       ¿se puede llegar a esta rama?
 *       ¿qué pasa justo en el valor del límite?
 *
 * 🧪 ANTES DE LEERLO, CORRELO con estos valores:
 *
 *       Presión 3   ·   Horas 1800   ·   Aceite 90   ·   si   ·   turno M
 *
 *    La presión mínima de trabajo son 6 bar. ¿La salida tiene sentido?
 *
 * ATENCIÓN: usa prompt(). Copiá el contenido a src/app.js del template y
 * ejecutalo con: npm run dev
 */

import { prompt } from './prompt.js'

var PRESION_MAXIMA = 10
let presion_minima = 6
const HORAS_SERVICE = 2000
const TEMP_ACEITE_MAX = 90

const p = parseFloat(prompt('Presión de trabajo [bar]: '))
const horas = prompt('Horas desde el último service: ')
const aceite = parseFloat(prompt('Temperatura de aceite [°C]: '))
const protecciones = prompt('¿Protecciones colocadas? (si/no): ')
const turno = prompt('Turno (M/T/N): ')

console.log('Horas al terminar el turno: ' + (horas + 8))

if (p <= PRESION_MAXIMA) {
  console.log('Presión NORMAL')
} else if (p < presion_minima) {
  console.log('Presión BAJA')
} else if (p > PRESION_MAXIMA) {
  console.log('Presión ALTA')
}

if (aceite > TEMP_ACEITE_MAX) {
  console.log('Aceite CALIENTE')
} else {
  console.log('Aceite normal')
}

switch (turno) {
  case 'M':
    console.log('Turno mañana')
  case 'T':
    console.log('Turno tarde')
    break
  case 'N':
    console.log('Turno noche')
    break
}

const proteccionesOk = protecciones == 'si'
const presionOk = p >= presion_minima || p <= PRESION_MAXIMA
const aceiteOk = aceite < TEMP_ACEITE_MAX
const serviceOk = horas < HORAS_SERVICE

if (proteccionesOk && presionOk || aceiteOk && serviceOk) console.log('PUESTA EN MARCHA AUTORIZADA')
  console.log('--- fin del control ---')
