# 📘 Unidad 08 — Matrices (Arrays Bidimensionales)

**Cátedra:** Programación en Computación — UTN FRRQ
**Carrera:** Ingeniería Electromecánica — 2º año
**Docentes:** Longhi Pablo, Talijancic Iván

> **Requisitos previos:** unidades 06 (funciones) y 07 (vectores). Una matriz es un vector
> de vectores: todo lo que sabés de vectores —índices, `.length`, recorridos, `.slice()`—
> se aplica acá, **dos veces**.

---

## 1. 🤔 Qué problema resuelven las matrices

En la unidad 07 guardamos las temperaturas de **un** rodamiento, una por hora, en un vector.
¿Y si la planta tiene **tres motores**, cada uno con su sensor? Podrías usar tres vectores:

```js
let motor0 = [62, 68, 71, 74]
let motor1 = [58, 61, 83, 85]
let motor2 = [65, 70, 76, 78]
```

Es el mismo problema que tenían las variables sueltas antes de los vectores: con 20 motores
son 20 vectores, y una función que «busque el motor más caliente» no tiene forma de
recorrerlos. Lo que tenemos en realidad es una **tabla**: cada fila es un motor, cada columna
es una hora.

|             | hora 0 | hora 1 | hora 2 | hora 3 |
|-------------|:------:|:------:|:------:|:------:|
| **motor 0** |   62   |   68   |   71   |   74   |
| **motor 1** |   58   |   61   |   83   |   85   |
| **motor 2** |   65   |   70   |   76   |   78   |

Una **matriz** (o **array bidimensional**) guarda esa tabla bajo un mismo nombre, y accede a
cada elemento con **dos índices**: la fila y la columna.

```js
let temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]

console.log(temperatures[1][2])   // 83: motor 1, hora 2
```

### ✨ Una matriz es un vector de vectores

JavaScript no tiene un tipo «matriz»: una matriz es un **vector cuyos elementos son
vectores**. Cada elemento del vector de afuera es una **fila**.

```
temperatures ──► ┌───┐
                 │ 0 │ ──► [ 62, 68, 71, 74 ]
                 ├───┤
                 │ 1 │ ──► [ 58, 61, 83, 85 ]
                 ├───┤
                 │ 2 │ ──► [ 65, 70, 76, 78 ]
                 └───┘
```

De ahí sale todo lo demás:

- `temperatures[1]` es **la fila 1 entera**: un vector, `[58, 61, 83, 85]`.
- `temperatures[1][2]` es **el elemento 2 de la fila 1**: un número, `83`.
- Cada fila es un vector independiente, y se puede pasar a cualquier función de la
  unidad 07.

---

## 2. 📐 La matriz de álgebra y la de JavaScript

Es la misma matriz que ves en Álgebra. Una matriz $A$ de $m$ filas y $n$ columnas,
es decir de $m \times n$, se escribe:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

El elemento $a_{ij}$ está en la fila $i$, columna $j$. En el código es `A[i][j]`: **primero
la fila, después la columna**, en el mismo orden.

La única diferencia es dónde arranca la numeración:

| | Álgebra | JavaScript |
|---|---|---|
| Primer elemento | $a_{11}$ | `A[0][0]` |
| Elemento genérico | $a_{ij}$ | `A[i - 1][j - 1]` |
| Último elemento | $a_{mn}$ | `A[m - 1][n - 1]` |
| Filas | $m$ | `A.length` |
| Columnas | $n$ | `A[0].length` |

> ⚠️ **Elegí una numeración y sostenela en todo el programa.** Los índices del código van
> desde 0. Si en el informe querés mostrar «motor 1» para la fila 0, sumá 1 **en todos los
> mensajes**. Lo que nunca puede pasar es que el mismo motor aparezca como «motor 2» en una
> línea y como «motor 1» en otra.

### 🧮 Una matriz definida por una fórmula

En Álgebra muchas matrices se definen por una regla, por ejemplo $a_{ij} = i \cdot j$, y en el
código esa regla se convierte en la asignación dentro del bucle, ajustando la base:

```js
/**
 * Crea la tabla de multiplicar de size x size: a(i, j) = i * j, con i y j desde 1.
 * @param {number} size - Cantidad de filas y de columnas
 * @returns {number[][]} Matriz con la tabla de multiplicar
 */
const multiplicationTable = (size) => {
  const table = new Array(size)

  for (let i = 0; i < size; i++) {
    table[i] = new Array(size)
    for (let j = 0; j < size; j++) {
      table[i][j] = (i + 1) * (j + 1)     // a(i, j) con i y j desde 1
    }
  }

  return table
}

console.table(multiplicationTable(4))
```

**💻 Salida:**

```bash
┌─────────┬───┬───┬────┬────┐
│ (index) │ 0 │ 1 │ 2  │ 3  │
├─────────┼───┼───┼────┼────┤
│ 0       │ 1 │ 2 │ 3  │ 4  │
│ 1       │ 2 │ 4 │ 6  │ 8  │
│ 2       │ 3 │ 6 │ 9  │ 12 │
│ 3       │ 4 │ 8 │ 12 │ 16 │
└─────────┴───┴───┴────┴────┘
```

Es lo mismo que en la unidad 06 con $f(x)$: la función de programación es la regla
matemática escrita en código.

---

## 3. 🏗️ Declaración e inicialización

### 📥 Con valores conocidos

Una fila por línea, para que el código se lea como la tabla:

```js
let temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]
```

### 📏 Dimensiones: filas y columnas

```js
let temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]

const rows = temperatures.length       // 3: cuántas filas tiene el vector de afuera
const cols = temperatures[0].length    // 4: cuántos elementos tiene una fila

console.log(`${rows} x ${cols}`)       // 3 x 4
```

`temperatures.length` es la cantidad de **filas**. Para las **columnas** hay que preguntarle
a una fila: `temperatures[0].length`. En este curso todas las matrices son **regulares**
(todas las filas tienen el mismo largo), así que cualquier fila sirve; se usa la 0.

### 🧱 Con dimensión conocida: una fila nueva por vuelta

Cuando sabés cuántas filas y columnas vas a necesitar pero todavía no los valores, se crean
en dos niveles, igual que se recorren:

1. `new Array(rows)` crea el vector de filas, vacío.
2. En cada vuelta del bucle de filas, `new Array(cols)` crea **una fila nueva**.
3. El bucle de adentro carga los valores de esa fila.

```js
/**
 * Crea una matriz de las dimensiones indicadas, con todos sus elementos en cero.
 * @param {number} rows - Cantidad de filas
 * @param {number} cols - Cantidad de columnas
 * @returns {number[][]} Matriz de rows x cols inicializada en cero
 */
const createZeroMatrix = (rows, cols) => {
  const matrix = new Array(rows)

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)          // una fila NUEVA en cada vuelta
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0
    }
  }

  return matrix
}

console.log(createZeroMatrix(2, 3))   // [ [ 0, 0, 0 ], [ 0, 0, 0 ] ]
```

> 📌 En esta cátedra las matrices **siempre se inicializan con bucles**. No usamos `fill()`,
> `push()` ni `Array.from()`.

> ⚠️ **La fila tiene que crearse adentro del bucle de filas.** Si la creás una sola vez antes
> del bucle y la asignás en cada vuelta, todas las filas son **el mismo vector**. Lo vemos en
> detalle en la sección 7.

---

## 4. 🎯 Acceder y modificar elementos

```js
let temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]

console.log(temperatures[1][2])   // 83: fila 1, columna 2
console.log(temperatures[1])      // [ 58, 61, 83, 85 ]: la fila 1 entera

temperatures[0][3] = 99           // modificar un elemento
console.log(temperatures[0])      // [ 62, 68, 71, 99 ]

const rows = temperatures.length
const cols = temperatures[0].length
console.log(temperatures[rows - 1][cols - 1])   // 78: el último
```

### 💥 Qué pasa si te vas de rango

Con una matriz hay **dos** formas de salirse, y se comportan distinto:

```js
let temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]

console.log(temperatures[0][7])   // undefined: la fila 0 existe, la columna 7 no
console.log(temperatures[5])      // undefined: la fila 5 no existe
```

Hasta acá es lo mismo que con vectores: `undefined`, sin aviso. Pero si pedís un elemento de
una fila que no existe:

```js
console.log(temperatures[5][0])
```

```bash
TypeError: Cannot read properties of undefined (reading '0')
```

`temperatures[5]` es `undefined`, y pedirle el elemento `[0]` a `undefined` **sí es un
error**: el programa se corta. Si ves este mensaje, casi siempre es un bucle de filas que se
pasó de largo (`i <= matrix.length`) o que usa la cantidad de columnas donde iban las filas.

---

## 5. 🔁 Recorrer una matriz

Para visitar todos los elementos hacen falta **dos bucles anidados**: uno que recorre las
filas y, adentro, otro que recorre las columnas de esa fila.

### ➡️ Por filas

```js
/**
 * Imprime cada elemento de una matriz recorriéndola por filas.
 * @param {number[][]} matrix - Matriz a recorrer
 * @returns {void}
 */
const printByRows = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {          // filas
    for (let j = 0; j < matrix[i].length; j++) {     // columnas de la fila i
      console.log(`  [${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}

printByRows([
  [10, 20, 30],
  [40, 50, 60]
])
```

**💻 Salida:**

```bash
  [0][0] = 10
  [0][1] = 20
  [0][2] = 30
  [1][0] = 40
  [1][1] = 50
  [1][2] = 60
```

Fijate el orden: para cada valor de `i`, el bucle de adentro hace **todas** sus vueltas.
Mientras `i` vale 0, `j` pasa por 0, 1 y 2; recién después `i` pasa a 1 y `j` arranca de
nuevo desde 0.

| Condición | Qué mide |
|-----------|----------|
| `i < matrix.length` | Cantidad de **filas** |
| `j < matrix[i].length` | Cantidad de **columnas** (el largo de la fila `i`) |

> ⚠️ **No confundas las dos condiciones.** `j < matrix.length` compara las columnas con la
> cantidad de filas. En una matriz cuadrada no se nota; en una de 4 × 6 te salteás las
> últimas dos columnas **sin ningún error**. Probá siempre tus funciones con una matriz que
> **no sea cuadrada**.

### ⬇️ Por columnas

Para recorrer columna por columna se **invierten los bucles**: `j` afuera, `i` adentro.

```js
/**
 * Imprime cada elemento de una matriz recorriéndola por columnas.
 * @param {number[][]} matrix - Matriz a recorrer
 * @returns {void}
 */
const printByColumns = (matrix) => {
  for (let j = 0; j < matrix[0].length; j++) {       // columnas
    for (let i = 0; i < matrix.length; i++) {        // filas
      console.log(`  [${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}

printByColumns([
  [10, 20, 30],
  [40, 50, 60]
])
```

**💻 Salida:**

```bash
  [0][0] = 10
  [1][0] = 40
  [0][1] = 20
  [1][1] = 50
  [0][2] = 30
  [1][2] = 60
```

El acceso sigue siendo `matrix[i][j]` —**siempre fila primero**—; lo que cambia es cuál de
los dos índices se mueve más rápido.

### 🔄 Con `while`

Igual que con vectores, el `while` sirve cuando hay que **cortar antes** de terminar. Cada
bucle lleva sus tres partes, y el contador de columnas se reinicia en cada fila:

```js
let matrix = [
  [10, 20, 30],
  [40, 50, 60]
]
let i = 0
let j

while (i < matrix.length) {
  j = 0                          // ⚠️ se reinicia en CADA fila
  while (j < matrix[i].length) {
    console.log(`  [${i}][${j}] = ${matrix[i][j]}`)
    j++
  }
  i++
}
```

Si te olvidás de `j = 0`, la segunda fila arranca con `j` en 3 y no se imprime nunca.

### 📊 Verla como tabla: `console.table()`

`console.table()` muestra una matriz con las filas y las columnas numeradas. Usalo **siempre**
para ver los datos antes de calcular nada:

```js
console.table([
  [10, 20, 30],
  [40, 50, 60]
])
```

**💻 Salida:**

```bash
┌─────────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │
├─────────┼────┼────┼────┤
│ 0       │ 10 │ 20 │ 30 │
│ 1       │ 40 │ 50 │ 60 │
└─────────┴────┴────┴────┘
```

La columna `(index)` es el número de fila; el encabezado, el de columna.

---

## 6. 🧠 Algoritmos fundamentales sobre matrices

Son los mismos patrones de la unidad 07, con un bucle más. Todos usan esta matriz de ejemplo:

```js
const temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]
```

### 6.1 ➕ Acumular: suma total y promedio

```js
/**
 * Calcula la suma de todos los elementos de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number} Suma total de los elementos
 */
const sumAll = (matrix) => {
  let total = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      total += matrix[i][j]
    }
  }

  return total
}

/**
 * Calcula el promedio de todos los elementos de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number} Promedio de los elementos
 */
const getAverage = (matrix) => {
  const count = matrix.length * matrix[0].length
  return sumAll(matrix) / count
}

console.log(sumAll(temperatures))                 // 851
console.log(getAverage(temperatures).toFixed(2))  // 70.92
```

El acumulador se declara **fuera de los dos bucles**: tiene que sobrevivir a todas las filas.
La cantidad de elementos es **filas × columnas**.

### 6.2 🔢 Contar según una condición

```js
/**
 * Cuenta cuántos elementos de una matriz superan un límite.
 * @param {number[][]} matrix - Matriz de números
 * @param {number} limit - Valor límite (no se cuenta si es igual)
 * @returns {number} Cantidad de elementos mayores que el límite
 */
const countAbove = (matrix, limit) => {
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > limit) {
        count++
      }
    }
  }

  return count
}

console.log(countAbove(temperatures, 80))   // 2
```

### 6.3 🏆 Máximo y su posición

Un elemento de una matriz tiene **dos** coordenadas, así que la función devuelve un vector de
**tres** elementos: `[valor, fila, columna]`.

```js
/**
 * Busca el máximo de una matriz y la posición donde aparece por primera vez.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[]} Vector de tres elementos: [máximo, fila, columna]
 */
const findMax = (matrix) => {
  let max = matrix[0][0]       // el PRIMERO de la matriz, nunca 0
  let maxRow = 0
  let maxCol = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j]
        maxRow = i
        maxCol = j
      }
    }
  }

  return [max, maxRow, maxCol].slice()
}

const result = findMax(temperatures)
console.log(`Máximo: ${result[0]} en la fila ${result[1]}, columna ${result[2]}`)
// Máximo: 85 en la fila 1, columna 3
```

> 📌 **Inicializá con `matrix[0][0]`, nunca con `0`**: con valores negativos (una cámara de
> frío, por ejemplo) devolverías `0`, que no está en la matriz. Se corrige como **error
> grave**.

> ⚠️ **Recorré desde `[0][0]`.** En un vector, el máximo recorría desde `i = 1` porque el
> elemento 0 ya estaba en `max`. En una matriz, si arrancás el bucle de filas en 1 **te
> salteás la fila 0 entera**, y si arrancás el de columnas en 1 te salteás **la columna 0 de
> cada fila**. Comparar `[0][0]` consigo mismo no cambia nada y es más seguro.

Para el mínimo, la misma lógica con `<`.

### 6.4 ➡️ Reducir por fila: un vector con la suma de cada fila

El resultado tiene **un elemento por fila**: es un vector de `matrix.length` elementos.

```js
/**
 * Calcula la suma de cada fila de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[]} Vector con la suma de cada fila
 */
const rowSums = (matrix) => {
  const sums = new Array(matrix.length)
  let rowTotal

  for (let i = 0; i < matrix.length; i++) {
    rowTotal = 0                         // se reinicia en CADA fila
    for (let j = 0; j < matrix[i].length; j++) {
      rowTotal += matrix[i][j]
    }
    sums[i] = rowTotal                   // se guarda al TERMINAR la fila
  }

  return sums.slice()
}

console.log(rowSums(temperatures))   // [ 275, 287, 289 ]
```

**🔑 Clave:** el acumulador de la fila se **reinicia en cero** al empezar cada fila, y se
guarda en el vector **después** del bucle de columnas. Es el mantra de la unidad 05 en dos
niveles: declarar antes · actualizar adentro · usar después.

| Fila `i` | Elementos | `rowTotal` al terminar | `sums` |
|:-:|---|:-:|---|
| 0 | 62 + 68 + 71 + 74 | 275 | `[275, -, -]` |
| 1 | 58 + 61 + 83 + 85 | 287 | `[275, 287, -]` |
| 2 | 65 + 70 + 76 + 78 | 289 | `[275, 287, 289]` |

Si no reiniciás `rowTotal`, cada fila arrastra la suma de las anteriores y obtenés
`[275, 562, 851]`.

### 6.5 ⬇️ Reducir por columna: un vector con la suma de cada columna

Es el mismo algoritmo con los bucles **invertidos**: columnas afuera, filas adentro. El
resultado tiene un elemento por columna.

```js
/**
 * Calcula la suma de cada columna de una matriz.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[]} Vector con la suma de cada columna
 */
const colSums = (matrix) => {
  const sums = new Array(matrix[0].length)
  let colTotal

  for (let j = 0; j < matrix[0].length; j++) {      // columnas AFUERA
    colTotal = 0
    for (let i = 0; i < matrix.length; i++) {       // filas adentro
      colTotal += matrix[i][j]
    }
    sums[j] = colTotal
  }

  return sums.slice()
}

console.log(colSums(temperatures))   // [ 185, 199, 230, 237 ]
```

> 💡 **Verificación cruzada:** la suma de `rowSums()` y la de `colSums()` tienen que dar
> **las dos** lo mismo que `sumAll()`: 851. Es una forma barata de detectar un error.

### 6.6 🎲 Generar una matriz aleatoria

Reusamos `rndInt()` de la unidad 06:

```js
/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Genera una matriz de enteros aleatorios dentro de un rango dado.
 * @param {number} rows - Cantidad de filas
 * @param {number} cols - Cantidad de columnas
 * @param {number} min - Valor mínimo del rango
 * @param {number} max - Valor máximo del rango
 * @returns {number[][]} Matriz de rows x cols con enteros aleatorios
 */
const createRandomMatrix = (rows, cols, min, max) => {
  const matrix = new Array(rows)

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = rndInt(min, max)
    }
  }

  return matrix
}

console.table(createRandomMatrix(3, 5, 1, 9))
```

**💻 Salida (cambia en cada ejecución):**

```bash
┌─────────┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │
├─────────┼───┼───┼───┼───┼───┤
│ 0       │ 5 │ 4 │ 7 │ 8 │ 7 │
│ 1       │ 4 │ 8 │ 9 │ 2 │ 6 │
│ 2       │ 6 │ 4 │ 6 │ 4 │ 8 │
└─────────┴───┴───┴───┴───┴───┘
```

> 💡 ¿Por qué `createRandomMatrix` devuelve `matrix` y no `matrix.slice()`? La matriz se
> **creó adentro** de la función: nadie más tiene una referencia a ella, así que no hay nada
> que proteger. Y, como vas a ver en la sección siguiente, `.slice()` en una matriz no copia
> lo que creés.

---

## 7. 🧬 Copiar una matriz: `.slice()` no alcanza

En la unidad 07 vimos que una función que recibe un vector y lo modifica **arruina el
original**, y que la solución era trabajar sobre `vector.slice()`. Con una matriz,
`.slice()` **no alcanza**.

### 😱 El problema

```js
const doubleAllBad = (matrix) => {
  const result = matrix.slice()          // ⚠️ copia sólo el vector de filas

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = result[i][j] * 2
    }
  }

  return result
}

const original = [
  [1, 2],
  [3, 4]
]
const doubled = doubleAllBad(original)

console.log('Original: ', original)   // [ [ 2, 4 ], [ 6, 8 ] ]  ← ¡se arruinó!
console.log('Duplicada:', doubled)    // [ [ 2, 4 ], [ 6, 8 ] ]
```

### 🔍 Por qué pasa

`matrix.slice()` crea un vector de filas **nuevo**… pero lo que copia adentro son las
**referencias** a las filas. Las filas siguen siendo las mismas:

```
original ──► ┌───┐                         ┌───┐ ◄── result
             │ 0 │ ──► [ 1, 2 ] ◄──────────│ 0 │
             ├───┤                         ├───┤
             │ 1 │ ──► [ 3, 4 ] ◄──────────│ 1 │
             └───┘                         └───┘
          dos vectores de filas distintos, UNA sola copia de cada fila
```

Por eso `result[0][0] = 2` escribe en la misma fila que ve `original`. Se llama **copia
superficial**: copia el primer nivel y comparte el segundo. Podés comprobarlo:

```js
const values = [
  [10, 20],
  [30, 40]
]
const shallow = values.slice()

console.log(shallow === values)         // false: son vectores de filas distintos
console.log(shallow[0] === values[0])   // true: pero la fila 0 es LA MISMA
```

### ✅ La solución: copiar fila por fila

Cada fila **es un vector**, y un vector sí se copia bien con `.slice()`. Así que se crea un
vector de filas nuevo y se copia **cada fila**:

```js
/**
 * Crea una copia independiente de una matriz, fila por fila.
 * @param {number[][]} matrix - Matriz a copiar
 * @returns {number[][]} Copia de la matriz que no comparte filas con el original
 */
const copyMatrix = (matrix) => {
  const copy = new Array(matrix.length)

  for (let i = 0; i < matrix.length; i++) {
    copy[i] = matrix[i].slice()        // cada fila: un vector nuevo
  }

  return copy
}

/**
 * Duplica cada elemento de una matriz, sin modificar la matriz original.
 * @param {number[][]} matrix - Matriz de números
 * @returns {number[][]} Matriz nueva con cada elemento multiplicado por 2
 */
const doubleAll = (matrix) => {
  const result = copyMatrix(matrix)

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = result[i][j] * 2
    }
  }

  return result
}

const original = [
  [1, 2],
  [3, 4]
]
const doubled = doubleAll(original)

console.log('Original: ', original)   // [ [ 1, 2 ], [ 3, 4 ] ]  ← intacta ✅
console.log('Duplicada:', doubled)    // [ [ 2, 4 ], [ 6, 8 ] ]
```

La otra forma correcta es no copiar nada: crear una matriz **nueva** con `new Array` (como
en `createZeroMatrix`) y llenarla leyendo la original. Es lo que se hace cuando el resultado
se calcula a partir de los datos, como una matriz de costos.

### 🪤 La misma trampa al crear: la fila compartida

```js
const sharedRow = new Array(3)
const grid = new Array(2)

for (let j = 0; j < sharedRow.length; j++) {
  sharedRow[j] = 0
}
for (let i = 0; i < grid.length; i++) {
  grid[i] = sharedRow                 // ⚠️ la MISMA fila en todas las posiciones
}

grid[0][1] = 7
console.log(grid)   // [ [ 0, 7, 0 ], [ 0, 7, 0 ] ]  ← cambiaron las DOS filas
```

Una sola fila, referenciada desde dos posiciones. Por eso `new Array(cols)` va **adentro**
del bucle de filas: una fila nueva por vuelta.

### 🧭 Resumen de copias

| Quiero… | Cómo | ¿Independiente? |
|---------|------|:---------------:|
| Copiar un vector | `vector.slice()` | ✅ |
| Copiar una matriz | `matrix.slice()` | ❌ comparte las filas |
| Copiar una matriz | `copy[i] = matrix[i].slice()` para cada fila | ✅ |
| Devolver una matriz calculada | Crearla con `new Array` y llenarla | ✅ |

---

## 8. ⌨️ Cargar una matriz desde la consola

```js
import { prompt } from './prompt.js'

/**
 * Solicita al usuario las dimensiones y los valores de una matriz de enteros.
 * @returns {number[][]} Matriz cargada con los valores ingresados
 */
const readMatrix = () => {
  const rows = parseInt(prompt('Cantidad de filas: '))
  const cols = parseInt(prompt('Cantidad de columnas: '))
  const matrix = new Array(rows)

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = parseInt(prompt(`Valor de [${i}][${j}]: `))
    }
  }

  return matrix
}

const myMatrix = readMatrix()
console.log('\nLa matriz ingresada es:')
console.table(myMatrix)
```

**💻 Salida:**

```bash
Cantidad de filas: 2
Cantidad de columnas: 3
Valor de [0][0]: 1
Valor de [0][1]: 2
Valor de [0][2]: 3
Valor de [1][0]: 4
Valor de [1][1]: 5
Valor de [1][2]: 6

La matriz ingresada es:
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│ 0       │ 1 │ 2 │ 3 │
│ 1       │ 4 │ 5 │ 6 │
└─────────┴───┴───┴───┘
```

Como siempre con `prompt`: **`parseInt()`** a todo lo que leas, o las sumas concatenan.

---

## 9. 🐛 Errores comunes

| Error | Síntoma | Solución |
|-------|---------|----------|
| Crear la fila **antes** del bucle de filas | Todas las filas iguales | `matrix[i] = new Array(cols)` adentro del bucle |
| `j < matrix.length` en el bucle de columnas | Faltan columnas (o `undefined`) en matrices no cuadradas | `j < matrix[i].length` |
| `i <= matrix.length` | `TypeError: Cannot read properties of undefined` | `i < matrix.length` |
| No reiniciar el acumulador de cada fila | Sumas por fila siempre crecientes | `rowTotal = 0` al empezar cada fila |
| Acumular en un `new Array(n)` sin inicializar | `NaN` en todo el vector | Ponerlo en cero con un bucle antes, o usar un acumulador por fila |
| Inicializar el máximo en `0` | Con valores negativos devuelve `0` | `matrix[0][0]` |
| Arrancar los bucles en `1` para el máximo | Se saltea la fila 0 o la columna 0 | Recorrer desde `[0][0]` |
| Copiar una matriz con `matrix.slice()` | La función arruina la matriz original | Copiar fila por fila |
| Centinela `[0, -1]` en vez de `[-1, -1]` | «No encontrado» informa la fila 0 | Todas las partes del centinela imposibles |
| Mezclar índices desde 0 y desde 1 | El mismo elemento con dos números distintos | Una sola numeración en todo el informe |
| No imprimir los datos generados | Ningún resultado se puede verificar | `console.table()` antes de calcular |
| Devolver `{ max, row, col }` | No está permitido en la cátedra | Un vector: `[max, row, col]` |

---

## 10. 📋 Resumen

| Quiero… | Cómo |
|---------|------|
| Declarar con valores | `let m = [[1, 2], [3, 4]]` |
| Crear de `rows` × `cols` | `new Array(rows)` + `m[i] = new Array(cols)` en cada vuelta |
| Cantidad de filas | `m.length` |
| Cantidad de columnas | `m[0].length` |
| Leer el elemento de la fila `i`, columna `j` | `m[i][j]` |
| Leer la fila `i` entera | `m[i]` (es un vector) |
| Recorrer por filas | `for i` afuera, `for j` adentro |
| Recorrer por columnas | `for j` afuera, `for i` adentro |
| Sumar todo | Acumulador declarado fuera de **los dos** bucles |
| Suma de cada fila | Vector de `m.length`; acumulador reiniciado en cada fila |
| Suma de cada columna | Vector de `m[0].length`; bucles invertidos |
| Máximo y su posición | `max = m[0][0]`, recorrer todo, devolver `[max, fila, columna]` |
| Copiar una matriz | Fila por fila: `copy[i] = m[i].slice()` |
| Verla como tabla | `console.table(m)` |

---

## ⛔ Recordá las reglas de la cátedra

**Permitido:** `for`, `while`, `do-while`, `if`/`else`, `switch-case`, acceso por índice
(`vector[i]`, `matriz[i][j]`), `.length`, `.slice()`.

**No permitido:** `map`, `filter`, `reduce`, `forEach`, `find`, `sort`, `flat`, `indexOf`,
`splice`, `fill()`, `push()`, `Array.from()`, retornar objetos/JSON.

---

## 🔭 Lo que viene

En la unidad 09 vamos a operar con matrices **como en Álgebra**: la transpuesta, la diagonal,
la simetría, la suma y el producto de matrices. Todo se construye con lo de esta unidad: crear
una matriz nueva y recorrerla con dos bucles.

---

## 📎 Material de la unidad

- [Presentación de clase](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/presentacion.pdf)
- [Trabajo Práctico](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/tp.pdf)
- [Ejemplos de clase](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/ejemplos)
