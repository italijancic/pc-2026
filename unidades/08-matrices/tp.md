# 📝 Trabajo Práctico — Unidad 08

## Consumo de Energía de un Taller de Mecanizado

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván
**Tema:** Arrays bidimensionales (matrices)

---

## 🎯 Objetivos

- Crear e inicializar matrices con bucles anidados, **una fila nueva por vuelta**.
- Recorrer una matriz por filas y por columnas.
- Llevar los algoritmos de la unidad 07 (acumular, contar, máximo/mínimo) a dos dimensiones.
- Reducir una matriz a un vector: suma por fila y suma por columna.
- Devolver una matriz nueva **sin modificar** la matriz recibida.
- Componer funciones: reusar las de vectores sobre los resultados de las de matrices.

---

## 🧩 Consignas generales

1. **Todo el código debe estar modularizado en funciones**, con parámetros y `return`. Nada
   de resolver en el cuerpo principal del programa.
2. **Cada función lleva su comentario de cabecera JSDoc.** Una matriz se documenta como
   `number[][]`:

   ```js
   /**
    * Calcula la suma de todos los elementos de una matriz.
    * @param {number[][]} matrix - Matriz de números
    * @returns {number} Suma total de los elementos
    */
   ```

3. **Las funciones retornan un único valor:** un número, un booleano, un string, un vector o
   una matriz. **No se permite retornar objetos ni JSON.** Para devolver un valor y su
   posición, devolvé un vector: `return [max, row, col]`.
4. **Las matrices y los vectores se inicializan con bucles.** No uses `fill()` ni `push()`.
5. **Ninguna función modifica la matriz que recibe.** Y acordate de que en una matriz
   `.slice()` **no alcanza**: copia el vector de filas, pero las filas siguen siendo las mismas.
6. Las variables que se actualizan dentro de un bucle se declaran con `let` **antes** del
   bucle, no con `const` adentro.
7. Nombres de variables y funciones **descriptivos y en inglés**; los textos que se
   imprimen, en español.

---

## 📘 Contexto del problema

Un taller de mecanizado quiere saber cuánta energía consume cada una de sus máquinas. Durante
una semana, un medidor registra el **consumo diario de cada máquina, en kWh**. Los datos
forman una **matriz**:

- cada **fila** es una máquina,
- cada **columna** es un día de la semana, de lunes a sábado.

El elemento `consumption[i][j]` es lo que consumió la máquina `i` el día `j`.

Definí los nombres y los parámetros como **constantes** al principio del programa:

```js
const MACHINES = ['Torno', 'Fresadora', 'Compresor', 'Soldadora']
const DAYS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
const PEAK_LIMIT = 75        // kWh: por encima, el consumo del día es un pico
const ENERGY_PRICE = 140     // ARS por kWh
```

> 💡 `MACHINES` y `DAYS` hacen dos trabajos: dan las **dimensiones** de la matriz
> (`MACHINES.length` filas, `DAYS.length` columnas) y los **nombres** para el informe.
> `MACHINES[2]` es el nombre de la fila 2. Son vectores paralelos, como en la práctica 2.

---

## Problemas

### Problema 1 — Generación del registro

Escribí una función que genere una matriz de consumos con valores **enteros aleatorios**
dentro de un rango que se recibe por parámetro:

```js
const createRandomMatrix = (rows, cols, min, max) => { ... }
```

Reusá `rndInt()` de la unidad 06. Las dimensiones salen de las constantes:

```js
const consumption = createRandomMatrix(MACHINES.length, DAYS.length, min, max)
```

El programa debe pedir por consola el **consumo mínimo** y el **máximo** posibles, y mostrar
la matriz generada con `console.table()` **antes de calcular nada**: sin ver los datos, no hay
forma de verificar ningún resultado.

**Ejemplo de ejecución:**

```bash
Ingrese el consumo diario mínimo posible [kWh]: 20
Ingrese el consumo diario máximo posible [kWh]: 90

Consumo diario por máquina [kWh]:
┌─────────┬────┬────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │
├─────────┼────┼────┼────┼────┼────┼────┤
│ 0       │ 42 │ 55 │ 61 │ 48 │ 77 │ 30 │
│ 1       │ 68 │ 72 │ 80 │ 65 │ 59 │ 41 │
│ 2       │ 85 │ 79 │ 88 │ 90 │ 83 │ 52 │
│ 3       │ 25 │ 33 │ 47 │ 76 │ 38 │ 21 │
└─────────┴────┴────┴────┴────┴────┴────┘
```

> Los valores son aleatorios, así que tu salida va a mostrar otros números. **Para poder
> comparar tus resultados con los de este enunciado**, mientras desarrollás reemplazá la
> llamada a `createRandomMatrix()` por la matriz fija del ejemplo:
>
> ```js
> const consumption = [
>   [42, 55, 61, 48, 77, 30],
>   [68, 72, 80, 65, 59, 41],
>   [85, 79, 88, 90, 83, 52],
>   [25, 33, 47, 76, 38, 21]
> ]
> ```
>
> Todos los ejemplos de salida que siguen usan esa matriz.

> ⚠️ **Una fila nueva en cada vuelta.** Si creás la fila con `new Array(cols)` *antes* del
> bucle de filas y la asignás en cada vuelta, las cuatro filas son **el mismo vector**: vas a
> ver las cuatro máquinas con los mismos consumos.

---

### Problema 2 — Consumo total y promedio

Escribí las funciones que calculan el **consumo total** de la semana (la suma de todos los
elementos) y el **consumo promedio** por máquina y por día:

$$
\text{total} = \sum_{i=0}^{\text{filas}-1} \; \sum_{j=0}^{\text{columnas}-1} \text{consumo}[i][j]
\qquad
\text{promedio} = \frac{\text{total}}{\text{filas} \times \text{columnas}}
$$

```js
const sumAll = (matrix) => { ... }
const getAverage = (matrix) => { ... }
```

`getAverage()` tiene que **usar** a `sumAll()`, no volver a recorrer la matriz. Mostrá el
promedio con dos decimales (`.toFixed(2)`).

**Ejemplo de salida esperada:**

```bash
--- Problema 2: Total y promedio ---
Consumo total de la semana: 1415 kWh
Consumo promedio por máquina y por día: 58.96 kWh
```

---

### Problema 3 — Mayor y menor consumo

Escribí dos funciones que encuentren el **mayor** y el **menor** consumo diario registrado,
junto con **la máquina y el día** en que se produjeron (la primera vez que aparecen, si se
repiten):

```js
const findMax = (matrix) => { ... }   // retorna [valor, fila, columna]
const findMin = (matrix) => { ... }   // retorna [valor, fila, columna]
```

Usá la fila y la columna como índices de `MACHINES` y `DAYS` para mostrar los nombres.

**Ejemplo de salida esperada:**

```bash
--- Problema 3: Máximo y mínimo ---
Mayor consumo: 90 kWh (Compresor, Jue)
Menor consumo: 21 kWh (Soldadora, Sab)
```

> ⚠️ **Inicializá con `matrix[0][0]`, nunca con `0`**, y recorré la matriz **completa**
> desde `[0][0]`. Si arrancás los bucles en `1`, como en el máximo de un vector, te salteás
> la fila 0 entera y la columna 0 de cada fila.

---

### Problema 4 — Consumo por máquina y por día

Escribí dos funciones que reduzcan la matriz a un **vector**:

- `rowSums()` devuelve un vector con el consumo **semanal de cada máquina** (la suma de cada
  fila): tiene tantos elementos como filas.
- `colSums()` devuelve un vector con el consumo **diario de todo el taller** (la suma de cada
  columna): tiene tantos elementos como columnas.

$$
\text{porMáquina}[i] = \sum_{j=0}^{\text{columnas}-1} \text{consumo}[i][j]
\qquad
\text{porDía}[j] = \sum_{i=0}^{\text{filas}-1} \text{consumo}[i][j]
$$

```js
const rowSums = (matrix) => { ... }
const colSums = (matrix) => { ... }
```

**Ejemplo de salida esperada:**

```bash
--- Problema 4: Consumo por máquina y por día ---
Por máquina:
  Torno: 313 kWh
  Fresadora: 385 kWh
  Compresor: 477 kWh
  Soldadora: 240 kWh
Por día:
  Lun: 220 kWh
  Mar: 239 kWh
  Mie: 276 kWh
  Jue: 279 kWh
  Vie: 257 kWh
  Sab: 144 kWh
```

> 💡 **Verificación cruzada:** la suma del vector por máquina y la del vector por día tienen
> que dar **las dos** el total del problema 2 (1415 kWh). Si no coinciden, una de las dos
> funciones está mal.

> ⚠️ **El acumulador de cada fila vuelve a cero al empezar la fila.** Si no lo reiniciás,
> cada máquina arrastra el consumo de las anteriores y el vector sale siempre creciente.

---

### Problema 5 — Picos de consumo

Un día en que una máquina consume más de `PEAK_LIMIT` kWh es un **pico**. Escribí una función
que cuente cuántos picos hubo en la semana:

```js
const countAbove = (matrix, limit) => { ... }
```

Mostrá también el **porcentaje** respecto del total de lecturas:

```
porcentaje = picos / (filas * columnas) * 100
```

**Ejemplo de salida esperada:**

```bash
--- Problema 5: Picos de consumo ---
Lecturas por encima de 75 kWh: 8 de 24 (33.33%)
```

---

### Problema 6 — Costo de la energía

Escribí una función que devuelva una **matriz nueva**, de las mismas dimensiones, con el
**costo** de cada consumo:

```
costo[i][j] = consumo[i][j] * precio
```

```js
const getCostMatrix = (matrix, price) => { ... }
```

**La función no debe modificar la matriz de consumos.** Después de llamarla, imprimí la
matriz original para demostrar que quedó intacta.

**Ejemplo de salida esperada:**

```bash
--- Problema 6: Costo de la energía ---
Costo diario por máquina [ARS] (a 140 ARS/kWh):
┌─────────┬───────┬───────┬───────┬───────┬───────┬──────┐
│ (index) │ 0     │ 1     │ 2     │ 3     │ 4     │ 5    │
├─────────┼───────┼───────┼───────┼───────┼───────┼──────┤
│ 0       │ 5880  │ 7700  │ 8540  │ 6720  │ 10780 │ 4200 │
│ 1       │ 9520  │ 10080 │ 11200 │ 9100  │ 8260  │ 5740 │
│ 2       │ 11900 │ 11060 │ 12320 │ 12600 │ 11620 │ 7280 │
│ 3       │ 3500  │ 4620  │ 6580  │ 10640 │ 5320  │ 2940 │
└─────────┴───────┴───────┴───────┴───────┴───────┴──────┘
Matriz de consumos luego de calcular los costos:
┌─────────┬────┬────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │
├─────────┼────┼────┼────┼────┼────┼────┤
│ 0       │ 42 │ 55 │ 61 │ 48 │ 77 │ 30 │
│ 1       │ 68 │ 72 │ 80 │ 65 │ 59 │ 41 │
│ 2       │ 85 │ 79 │ 88 │ 90 │ 83 │ 52 │
│ 3       │ 25 │ 33 │ 47 │ 76 │ 38 │ 21 │
└─────────┴────┴────┴────┴────┴────┴────┘
(debe estar intacta)
```

> 🔬 **Experimento obligatorio.** Escribí una segunda versión que arranque con
> `const costs = matrix.slice()` y multiplique sobre `costs[i][j]`. Corré el programa e
> imprimí la matriz de consumos. Escribí en un comentario **por qué** cambió, si usaste
> `.slice()`. Este es el concepto más importante del TP.

---

### Problema 7 — Resumen semanal

Usando las funciones de los problemas anteriores, determiná:

- la **máquina de mayor consumo** de la semana,
- el **día de mayor consumo** de todo el taller,
- el **costo total** de la semana,

y el costo de cada uno a `ENERGY_PRICE` ARS/kWh.

**No vuelvas a recorrer la matriz.** La máquina de mayor consumo es el máximo del vector que
devuelve `rowSums()`, y el día de mayor consumo es el máximo del vector que devuelve
`colSums()`. Para eso ya tenés la función de la unidad 07, que busca el máximo de un
**vector**:

```js
const findVectorMax = (vector) => { ... }   // retorna [valor, posición]
```

**Ejemplo de salida esperada:**

```bash
--- Problema 7: Resumen semanal ---
Máquina de mayor consumo: Compresor (477 kWh, 66780 ARS)
Día de mayor consumo:     Jue (279 kWh, 39060 ARS)
Costo total de la semana: 198100 ARS
```

> 💡 El costo total sale de dos formas: `sumAll(costs)` o `sumAll(consumption) * ENERGY_PRICE`.
> Probá las dos: tienen que coincidir.

---

## 🏁 El informe completo

Al final, el programa debe imprimir un informe ordenado con todos los resultados: encabezados,
unidades (`kWh`, `ARS`, `%`) y los nombres de máquinas y días en lugar de los índices.

**Ejemplo de informe completo:**

```bash
===========================================================
   CONSUMO DE ENERGIA DEL TALLER — SEMANA
===========================================================

Consumo diario por máquina [kWh]:
┌─────────┬────┬────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │
├─────────┼────┼────┼────┼────┼────┼────┤
│ 0       │ 42 │ 55 │ 61 │ 48 │ 77 │ 30 │
│ 1       │ 68 │ 72 │ 80 │ 65 │ 59 │ 41 │
│ 2       │ 85 │ 79 │ 88 │ 90 │ 83 │ 52 │
│ 3       │ 25 │ 33 │ 47 │ 76 │ 38 │ 21 │
└─────────┴────┴────┴────┴────┴────┴────┘

Consumo total de la semana: 1415 kWh
Consumo promedio por máquina y por día: 58.96 kWh
Mayor consumo: 90 kWh (Compresor, Jue)
Menor consumo: 21 kWh (Soldadora, Sab)
Lecturas por encima de 75 kWh: 8 de 24 (33.33%)
Máquina de mayor consumo: Compresor (477 kWh, 66780 ARS)
Día de mayor consumo:     Jue (279 kWh, 39060 ARS)
Costo total de la semana: 198100 ARS

===========================================================
                    FIN DEL INFORME
===========================================================
```

---

## ⛔ Restricciones

**Permitido:**

- Bucles `for`, `while`, `do-while`
- `if` / `else if` / `else`, `switch-case`
- Acceso por índice: `vector[i]`, `matriz[i][j]`
- `.length` y `.slice()`
- `Math.random()`, `Math.floor()`, `.toFixed()`
- `console.log()` y `console.table()`

**No permitido:**

- Métodos de array: `map`, `filter`, `reduce`, `forEach`, `find`, `sort`, `flat`, `indexOf`,
  `splice`
- `fill()`, `push()` ni `Array.from()` para crear o inicializar vectores y matrices
- Retornar objetos o JSON desde una función
- Cualquier método o técnica no vista en clase

---

## 📎 Material de consulta

- [Apunte de la unidad](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/apunte.pdf)
- [Presentación de clase](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/presentacion.pdf)
- [Ejemplos desarrollados en clase](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/ejemplos)
- [Unidad 07 — Vectores](https://github.com/italijancic/pc-2026/blob/main/unidades/07-arrays-unidimensionales/apunte.pdf):
  `findVectorMax` y los algoritmos fundamentales
