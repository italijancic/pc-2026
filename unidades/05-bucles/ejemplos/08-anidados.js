/**
 * Unidad 05 — Ejemplo 08
 * Bucles anidados: el de adentro completa todas sus vueltas por cada vuelta
 * del de afuera.
 *
 * Ejecutalo con:  node 08-anidados.js
 */

for (let fila = 1; fila <= 2; fila++) {
  for (let columna = 1; columna <= 3; columna++) {
    console.log(`fila ${fila}, columna ${columna}`)
  }
}

// Dos vueltas por tres vueltas = SEIS líneas.
//
// Ojo con los nombres: si las dos variables de control se llamaran `i`, la de
// adentro pisaría a la de afuera y el resultado sería un desastre.
//
// Por ahora alcanza con reconocerlos. En la unidad 08, con matrices, van a ser
// el pan de cada día.
