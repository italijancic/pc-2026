/**
 * Unidad 04 — Ejemplo 06
 * Qué pasa cuando falta un break.
 *
 * Ejecutalo con:  node 06-break-olvidado.js
 */

const maintenanceCode = 'P'

console.log('── Sin break: la ejecución sigue de largo ──')
switch (maintenanceCode) {
  case 'P':
    console.log('Mantenimiento PREVENTIVO')
  case 'C':
    console.log('Mantenimiento CORRECTIVO')
  default:
    console.log('Código desconocido')
}

console.log()
console.log('── Con break: corta y sale ──')
switch (maintenanceCode) {
  case 'P':
    console.log('Mantenimiento PREVENTIVO')
    break
  case 'C':
    console.log('Mantenimiento CORRECTIVO')
    break
  default:
    console.log('Código desconocido')
}

// Entró bien por 'P' en los dos casos. La diferencia es que el primero, al no
// encontrar break, siguió ejecutando todo lo de abajo SIN volver a comparar.
