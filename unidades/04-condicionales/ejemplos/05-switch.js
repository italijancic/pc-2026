/**
 * Unidad 04 — Ejemplo 05
 * switch-case: comparar una variable contra varios valores exactos.
 *
 * Ejecutalo con:  node 05-switch.js
 */

const maintenanceCode = 'C'

switch (maintenanceCode) {
  case 'P':
    console.log('Mantenimiento PREVENTIVO')
    break
  case 'C':
    console.log('Mantenimiento CORRECTIVO')
    break
  case 'D':
    console.log('Mantenimiento PREDICTIVO')
    break
  default:
    console.log(`Código desconocido: ${maintenanceCode}`)
}
