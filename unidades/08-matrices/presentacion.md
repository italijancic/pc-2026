---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 08</p>

# Matrices

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Matrices</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span><strong>El problema</strong>: de un vector a una tabla</span></li>
<li><span>Declarar, crear y acceder por <strong>[fila][columna]</strong></span></li>
<li><span><strong>Recorrer</strong> con dos bucles: por filas y por columnas</span></li>
<li><span><code>.slice()</code> en una matriz: <strong>no alcanza</strong></span></li>
<li><span>Los <strong>algoritmos</strong> de la 07, en dos dimensiones</span></li>
<li><span>Probar en la <strong>consola</strong> de Node</span></li>
<li><span><strong>Taller</strong>: ahora ustedes</span></li>
</ol>

<p class="tip"><strong>Requisitos:</strong> unidad 06 (funciones) y unidad 07 (vectores). Una matriz es un vector de vectores: todo lo de la 07 se aplica dos veces.</p>

</div>

<!-- 90 min de teoria + 90 de taller y revision de codigo.
     Ejemplos en vivo: unidades/08-matrices/ejemplos/
     Las dos diapositivas que siguen (el parcial) son OPCIONALES: 5 minutos. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Antes de arrancar</p>

## Lo que vimos en el parcial

<div class="body">

<table>
<thead><tr><th>Error</th><th>Por qué importa</th></tr></thead>
<tbody>
<tr><td>No imprimir los datos generados</td><td>Ningún resultado se puede verificar</td></tr>
<tr><td><code>const</code> adentro de un bucle</td><td>Choca con «<code>const</code> no se reasigna»</td></tr>
<tr><td>Funciones sin JSDoc</td><td>Se corrige siempre</td></tr>
<tr><td>Un <code>import</code> sin usar</td><td><code>npm run lint</code> no pasa</td></tr>
<tr><td>Centinela <code>[0, 1]</code> en vez de <code>[0, -1]</code></td><td>«No encontrado» parece un resultado</td></tr>
<tr><td>Índices desde 1 mezclados con desde 0</td><td>El mismo dato, con dos números</td></tr>
</tbody>
</table>

<p class="note-p">Los vamos a volver a cruzar hoy. Con matrices, varios se vuelven <strong>más</strong> fáciles de cometer.</p>

</div>

<!-- Sin nombres, sin mostrar entregas. Es para que reconozcan el error,
     no para señalar a nadie. Si el tiempo aprieta, saltear esta y la siguiente. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Antes de arrancar</p>

## La variable del bucle, antes del bucle

<div class="body">

<div class="cols cols-2 compare">

<div>
<span class="bad">Así no</span>

```js
for (let i = 0; i < 5; i++) {
  const measured = 350 + i * 15
  if (measured > UPPER_LIMIT) {
    outOfRange++
  }
}
```

</div>

<div>
<span class="good">Así sí</span>

```js
let measured

for (let i = 0; i < 5; i++) {
  measured = 350 + i * 15
  if (measured > UPPER_LIMIT) {
    outOfRange++
  }
}
```

</div>

</div>

<p class="callout">Declarar antes · actualizar adentro · usar después.<small>El mantra de la unidad 05</small></p>

</div>

<!-- "Funciona igual" es cierto: const adentro crea una variable nueva en cada
     vuelta. Pero el que lee ve un const que cambia de valor, y eso contradice
     lo de la unidad 03. Con matrices va a haber DOS bucles: mas razon para
     tener ordenado donde vive cada variable. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## El problema

---

<p class="eyebrow"><b>08</b><span>/</span>El problema</p>

## Tres motores, tres vectores

<div class="body">

<div class="file" data-name="src/app.js">

```js
let motor0 = [62, 68, 71, 74]
let motor1 = [58, 61, 83, 85]
let motor2 = [65, 70, 76, 78]
```

</div>

<p class="lead">La temperatura del rodamiento de cada motor, una vez por hora. Funciona… con tres.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cómo escribís una función que busque el motor más caliente de los veinte?

<p class="lead">Con veinte vectores sueltos, no hay índice para recorrerlos.</p>

<!-- Es exactamente el problema de las variables sueltas de la unidad 07,
     un nivel mas arriba. Que lo digan ellos: "necesito un vector de vectores". -->

---

<p class="eyebrow"><b>08</b><span>/</span>El problema</p>

## Lo que tenemos es una tabla

<div class="body">

<table>
<thead><tr><th></th><th>hora 0</th><th>hora 1</th><th>hora 2</th><th>hora 3</th></tr></thead>
<tbody>
<tr><td><strong>motor 0</strong></td><td>62</td><td>68</td><td>71</td><td>74</td></tr>
<tr><td><strong>motor 1</strong></td><td>58</td><td>61</td><td>83</td><td>85</td></tr>
<tr><td><strong>motor 2</strong></td><td>65</td><td>70</td><td>76</td><td>78</td></tr>
</tbody>
</table>

<p class="lead">Cada <strong>fila</strong> es un motor. Cada <strong>columna</strong> es una hora. Un dato se ubica con <strong>dos</strong> números.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>El problema</p>

## Un vector de vectores

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
let temperatures = [
  [62, 68, 71, 74],
  [58, 61, 83, 85],
  [65, 70, 76, 78]
]

temperatures[1]      // la fila 1
temperatures[1][2]   // 83
```

</div>

<div>
<p class="mem-label">temperatures</p>
<div class="mem">
<div><b>62</b><i>[0][0]</i></div>
<div><b>68</b><i>[0][1]</i></div>
<div><b>71</b><i>[0][2]</i></div>
<div><b>74</b><i>[0][3]</i></div>
</div>
<div class="mem">
<div><b>58</b><i>[1][0]</i></div>
<div><b>61</b><i>[1][1]</i></div>
<div class="is-mark"><b>83</b><i>[1][2]</i></div>
<div><b>85</b><i>[1][3]</i></div>
</div>
<div class="mem">
<div><b>65</b><i>[2][0]</i></div>
<div><b>70</b><i>[2][1]</i></div>
<div><b>76</b><i>[2][2]</i></div>
<div><b>78</b><i>[2][3]</i></div>
</div>
</div>

</div>

<p class="note-p">Cada elemento del vector de afuera es una <strong>fila</strong>: un vector. Primero la fila, después la columna.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Álgebra</p>

## Es la matriz de Álgebra

<div class="body">

<div class="cols cols-2">

<div>

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

</div>

<div>

| | Álgebra | JavaScript |
|---|---|---|
| Elemento | $a_{ij}$ | `A[i][j]` |
| Primero | $a_{11}$ | `A[0][0]` |
| Último | $a_{mn}$ | `A[m-1][n-1]` |
| Filas | $m$ | `A.length` |
| Columnas | $n$ | `A[0].length` |

</div>

</div>

<p class="tip">Mismo orden —fila, columna—, <strong>distinta numeración</strong>: Álgebra cuenta desde 1, el código desde 0.</p>

</div>

<!-- Conectar con lo que estan viendo en Algebra. La matriz m x n es la misma;
     lo unico que cambia es el origen de los indices. Y ese cambio de base es
     el error del parcial: mezclar las dos numeraciones. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Álgebra</p>

## Una matriz definida por una regla

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
const multiplicationTable = (size) => {
  const table = new Array(size)
  for (let i = 0; i < size; i++) {
    table[i] = new Array(size)
    for (let j = 0; j < size; j++) {
      table[i][j] = (i + 1) * (j + 1)
    }
  }
  return table
}

console.table(multiplicationTable(4))
```

</div>

<div class="out">

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

</div>

</div>

<p class="lead">La regla <code>a(i, j) = i · j</code> es la línea de adentro del bucle. El <code>+ 1</code> es el cambio de base.</p>

</div>

<!-- Igual que f(x) en la unidad 06: la funcion de programacion ES la regla
     matematica. Todavia no expliquen el new Array: viene en la Parte 2.
     Que lo lean como "crear la tabla". -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## Declarar y acceder

---

<p class="eyebrow"><b>08</b><span>/</span>Declarar</p>

## Filas y columnas

<div class="body">

<div class="cols cols-1-2">

<div class="file" data-name="src/app.js">

```js
const rows = temperatures.length
const cols = temperatures[0].length

console.log(`${rows} x ${cols}`)
// 3 x 4
```

</div>

<table>
<thead><tr><th>Quiero</th><th>Cómo</th></tr></thead>
<tbody>
<tr><td>Cantidad de filas</td><td><code>matrix.length</code></td></tr>
<tr><td>Cantidad de columnas</td><td><code>matrix[0].length</code></td></tr>
<tr><td>Cantidad de elementos</td><td><code>rows * cols</code></td></tr>
<tr><td><strong>Último elemento</strong></td><td><code>matrix[rows - 1][cols - 1]</code></td></tr>
</tbody>
</table>

</div>

<p class="tip">Las columnas se le preguntan <strong>a una fila</strong>. Todas las matrices del curso son regulares: cualquier fila sirve, se usa la 0.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Acceder</p>

## Leer y modificar

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
console.log(temperatures[1][2])
console.log(temperatures[1])

temperatures[0][3] = 99
console.log(temperatures[0])
```

</div>

<div class="out">

```bash
83
[ 58, 61, 83, 85 ]
[ 62, 68, 71, 99 ]
```

</div>

</div>

<p class="lead">Con <strong>dos</strong> índices, un número. Con <strong>uno</strong>, la fila entera: un vector.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Crear</p>

## Una fila nueva por vuelta

<div class="body">

<div class="file" data-name="src/app.js">

```js
const createZeroMatrix = (rows, cols) => {
  const matrix = new Array(rows)            // 1. el vector de filas

  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(cols)             // 2. una fila NUEVA
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0                      // 3. sus valores
    }
  }

  return matrix
}
```

</div>

<p class="tip">Sin <code>fill()</code>, sin <code>push()</code>, sin <code>Array.from()</code>. Se crea como se recorre: <strong>dos bucles</strong>.</p>

</div>

<!-- El paso 2 es el que importa. Guardar la pregunta para la Parte 4:
     ¿que pasa si la fila se crea UNA vez, antes del bucle? -->

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Qué imprime cada línea?

```js
console.log(temperatures[0][7])
console.log(temperatures[5])
console.log(temperatures[5][0])
```

<!-- Las dos primeras: undefined, como en la 07. La tercera EXPLOTA.
     Preguntar por que antes de pasar: temperatures[5] es undefined, y
     pedirle el [0] a undefined es un error. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Acceder</p>

## Ahora sí explota

<div class="body">

<div class="out">

```bash
undefined
undefined
TypeError: Cannot read properties of undefined (reading '0')
```

</div>

<div class="cols cols-2">

<div class="card">
<h3>Columna que no existe</h3>
<p><code>undefined</code>, sin aviso. Igual que en un vector.</p>
</div>

<div class="card">
<h3>Fila que no existe</h3>
<p><code>temperatures[5]</code> es <code>undefined</code>, y pedirle el <code>[0]</code> <strong>corta el programa</strong>.</p>
</div>

</div>

<div class="pitfall">
<p>Si ves este <code>TypeError</code>, buscá un bucle de filas que se pasó de largo: <code>i &lt;= matrix.length</code>, o la cantidad de columnas donde iban las filas.</p>
</div>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Recorrer la matriz

---

<p class="eyebrow"><b>08</b><span>/</span>Recorrer</p>

## Por filas: dos bucles anidados

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="src/app.js">

```js
const printByRows = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(`[${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}

printByRows([
  [10, 20, 30],
  [40, 50, 60]
])
```

</div>

<div class="out">

```bash
[0][0] = 10
[0][1] = 20
[0][2] = 30
[1][0] = 40
[1][1] = 50
[1][2] = 60
```

</div>

</div>

<p class="note-p"><code>i</code> recorre las <strong>filas</strong>; <code>j</code>, las <strong>columnas de la fila i</strong>.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Recorrer</p>

## El de adentro da todas sus vueltas

<div class="body">

<div class="cols cols-2">

<table class="trace">
<thead><tr><th>vuelta</th><th>i</th><th>j</th><th>matrix[i][j]</th></tr></thead>
<tbody>
<tr><td>1</td><td>0</td><td>0</td><td>10</td></tr>
<tr><td>2</td><td>0</td><td>1</td><td>20</td></tr>
<tr><td>3</td><td>0</td><td class="is-mark">2</td><td>30</td></tr>
<tr><td>4</td><td class="is-mark">1</td><td class="is-mark">0</td><td>40</td></tr>
<tr><td>5</td><td>1</td><td>1</td><td>50</td></tr>
<tr><td>6</td><td>1</td><td>2</td><td>60</td></tr>
</tbody>
</table>

<div>
<p class="lead">Mientras <code>i</code> vale 0, <code>j</code> pasa por 0, 1 y 2. Recién después <code>i</code> pasa a 1… y <code>j</code> <strong>arranca de nuevo</strong> desde 0.</p>
</div>

</div>

<p class="callout">2 filas × 3 columnas = 6 vueltas del bucle de adentro.</p>

</div>

<!-- Es el reloj: j son los minutos, i las horas. Los minutos dan toda la
     vuelta antes de que la hora avance una. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Recorrer</p>

## Por columnas: se invierten los bucles

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="src/app.js">

```js
const printByColumns = (matrix) => {
  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(`[${i}][${j}] = ${matrix[i][j]}`)
    }
  }
}
```

</div>

<div class="out">

```bash
[0][0] = 10
[1][0] = 40
[0][1] = 20
[1][1] = 50
[0][2] = 30
[1][2] = 60
```

</div>

</div>

<p class="tip">El acceso sigue siendo <code>matrix[i][j]</code>: <strong>siempre fila primero</strong>. Lo que cambia es cuál índice se mueve más rápido.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Recorrer</p>

## Cada condición mide otra cosa

<div class="body">

<table class="trace">
<thead><tr><th>Condición</th><th>Mide</th><th>En una matriz de 4 × 6</th></tr></thead>
<tbody>
<tr><td><code>i &lt; matrix.length</code></td><td>filas</td><td>4</td></tr>
<tr><td><code>j &lt; matrix[i].length</code></td><td>columnas</td><td>6 ✅</td></tr>
<tr><td><code>j &lt; matrix.length</code></td><td>filas, otra vez</td><td>4 ❌ faltan 2 columnas</td></tr>
</tbody>
</table>

<div class="pitfall">
<p><code>j &lt; matrix.length</code> funciona perfecto <strong>en una matriz cuadrada</strong>. En una de 4 × 6 se saltea dos columnas sin ningún error. Probá siempre con una matriz que <strong>no sea cuadrada</strong>.</p>
</div>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Recorrer</p>

## Verla como tabla

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.table(temperatures)
```

</div>

<div class="out">

```bash
┌─────────┬────┬────┬────┬────┐
│ (index) │ 0  │ 1  │ 2  │ 3  │
├─────────┼────┼────┼────┼────┤
│ 0       │ 62 │ 68 │ 71 │ 74 │
│ 1       │ 58 │ 61 │ 83 │ 85 │
│ 2       │ 65 │ 70 │ 76 │ 78 │
└─────────┴────┴────┴────┴────┘
```

</div>

<p class="tip"><code>(index)</code> es la fila; el encabezado, la columna. Imprimí <strong>siempre</strong> los datos antes de calcular: es lo primero que se mira al corregir.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## <code>.slice()</code> no alcanza

---

<p class="eyebrow"><b>08</b><span>/</span>Referencias</p>

## Aprendimos la lección de la 07

<div class="body">

<div class="file" data-name="src/app.js">

```js
const doubleAllBad = (matrix) => {
  const result = matrix.slice()            // copiamos, como en la 07

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] = result[i][j] * 2
    }
  }

  return result
}
```

</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cuánto vale <code>original</code> ahora?

```js
const original = [
  [1, 2],
  [3, 4]
]
const doubled = doubleAllBad(original)

console.log(original)
```

<!-- La mayoria va a decir [[1, 2], [3, 4]]: "usamos .slice()".
     Respuesta: [[2, 4], [6, 8]]. Correr en vivo: ejemplos/04-slice-matrices.js -->

---

<p class="eyebrow"><b>08</b><span>/</span>Referencias</p>

## Se arruinó, con <code>.slice()</code> puesto

<div class="body">

<div class="out">

```bash
Original:  [ [ 2, 4 ], [ 6, 8 ] ]     ← se arruinó
Duplicada: [ [ 2, 4 ], [ 6, 8 ] ]
```

</div>

<p class="lead"><code>.slice()</code> copió el vector de afuera. Pero lo que hay adentro de ese vector son… <strong>filas</strong>. Y las filas son vectores: se copian <strong>por referencia</strong>.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Referencias</p>

## Copia superficial

<div class="body">

<div class="file" data-name="memoria">

```text
original ──► ┌───┐                        ┌───┐ ◄── result
             │ 0 │ ──► [ 1, 2 ] ◄─────────│ 0 │
             ├───┤                        ├───┤
             │ 1 │ ──► [ 3, 4 ] ◄─────────│ 1 │
             └───┘                        └───┘
```

</div>

<div class="out">

```bash
> result === original
false
> result[0] === original[0]
true
```

</div>

<p class="tip">Dos vectores de filas distintos, <strong>una sola copia de cada fila</strong>. Escribir en <code>result[0][0]</code> es escribir en <code>original[0][0]</code>.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Referencias</p>

## La solución: fila por fila

<div class="body">

<div class="cols cols-2 compare">

<div>
<span class="bad">Así no</span>

```js
const result = matrix.slice()
```

<p class="note-p">Un vector de filas nuevo, con las <strong>mismas</strong> filas adentro.</p>
</div>

<div>
<span class="good">Así sí</span>

```js
const copyMatrix = (matrix) => {
  const copy = new Array(matrix.length)

  for (let i = 0; i < matrix.length; i++) {
    copy[i] = matrix[i].slice()
  }

  return copy
}
```

</div>

</div>

<p class="tip">Cada fila <strong>es un vector</strong>, y un vector sí se copia bien con <code>.slice()</code>.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Referencias</p>

## La misma trampa al crear

<div class="body">

<div class="cols cols-2 compare">

<div>
<span class="bad">Una fila para todas</span>

```js
const row = new Array(3)
// ... row en cero ...

for (let i = 0; i < 2; i++) {
  grid[i] = row
}

grid[0][1] = 7
```

</div>

<div>
<span class="good">Una fila por vuelta</span>

```js
for (let i = 0; i < 2; i++) {
  grid[i] = new Array(3)
  for (let j = 0; j < 3; j++) {
    grid[i][j] = 0
  }
}

grid[0][1] = 7
```

</div>

</div>

<div class="cols cols-2">

<div class="out">

```bash
[ [ 0, 7, 0 ], [ 0, 7, 0 ] ]
```

</div>

<div class="out">

```bash
[ [ 0, 7, 0 ], [ 0, 0, 0 ] ]
```

</div>

</div>

</div>

<!-- Es el mismo concepto que la copia superficial: dos posiciones apuntando
     a UNA fila. Sintoma: todas las filas iguales. Lo van a ver en la revision
     de codigo. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Los algoritmos, en dos dimensiones

---

<p class="eyebrow"><b>08</b><span>/</span>Acumular</p>

## Suma total y promedio

<div class="body">

<div class="file" data-name="src/app.js">

```js
const sumAll = (matrix) => {
  let total = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      total += matrix[i][j]
    }
  }
  return total
}

const getAverage = (matrix) =>
  sumAll(matrix) / (matrix.length * matrix[0].length)
```

</div>

<p class="tip">El acumulador va afuera de <strong>los dos</strong> bucles. La cantidad de elementos es <strong>filas × columnas</strong>.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Contar</p>

## Contar los que cumplen

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="src/app.js">

```js
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
```

</div>

<div class="out">

```bash
> countAbove(temperatures, 80)
2
```

</div>

</div>

<p class="lead">El contador de la 07, con un bucle más. El <code>if</code> va en el bucle de <strong>adentro</strong>: ahí está cada elemento.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Máximo</p>

## Máximo y su posición

<div class="body">

<div class="file" data-name="src/app.js">

```js
const findMax = (matrix) => {
  let max = matrix[0][0]               // el PRIMERO, nunca 0
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
  return [max, maxRow, maxCol].slice()  // tres datos → un vector
}
```

</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## En la 07 el máximo recorría desde <code>i = 1</code>. ¿Por qué acá no?

<!-- Porque en un vector el elemento 0 ya estaba en max. En una matriz,
     arrancar i en 1 saltea la FILA 0 entera, y arrancar j en 1 saltea la
     COLUMNA 0 de cada fila. Dibujar la siguiente en el pizarron. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Máximo</p>

## Con <code>i = 1</code> y <code>j = 1</code>

<div class="body">

<div class="cols cols-2">

<div>
<p class="mem-label">Lo que mira el bucle</p>
<div class="mem">
<div class="is-bad"><b>62</b><i>[0][0]</i></div>
<div class="is-bad"><b>68</b><i>[0][1]</i></div>
<div class="is-bad"><b>71</b><i>[0][2]</i></div>
<div class="is-bad"><b>74</b><i>[0][3]</i></div>
</div>
<div class="mem">
<div class="is-bad"><b>58</b><i>[1][0]</i></div>
<div><b>61</b><i>[1][1]</i></div>
<div><b>83</b><i>[1][2]</i></div>
<div class="is-mark"><b>85</b><i>[1][3]</i></div>
</div>
<div class="mem">
<div class="is-bad"><b>65</b><i>[2][0]</i></div>
<div><b>70</b><i>[2][1]</i></div>
<div><b>76</b><i>[2][2]</i></div>
<div><b>78</b><i>[2][3]</i></div>
</div>
</div>

<div>
<p class="lead">En rojo, lo que <strong>nunca se mira</strong>: la fila 0 entera y la columna 0 de cada fila.</p>
<p class="note-p">Acá el máximo da bien de casualidad. Si el 90 estuviera en la fila 0, no.</p>
</div>

</div>

<p class="tip">En una matriz, recorré <strong>todo desde <code>[0][0]</code></strong>. Comparar el primero consigo mismo no cambia nada.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Por fila</p>

## Una matriz se reduce a un vector

<div class="body">

<div class="file" data-name="src/app.js">

```js
const rowSums = (matrix) => {
  const sums = new Array(matrix.length)   // un lugar por FILA
  let rowTotal

  for (let i = 0; i < matrix.length; i++) {
    rowTotal = 0                          // vuelve a cero en CADA fila
    for (let j = 0; j < matrix[i].length; j++) {
      rowTotal += matrix[i][j]
    }
    sums[i] = rowTotal                    // se guarda al TERMINAR la fila
  }

  return sums.slice()
}
```

</div>

</div>

<!-- Declarar antes, actualizar adentro, usar despues: en DOS niveles.
     rowTotal se declara antes de los dos bucles, se reinicia al empezar
     cada fila y se usa al terminar la fila. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Por fila</p>

## Traza de <code>rowSums</code>

<div class="body">

<table class="trace">
<thead><tr><th>i</th><th>elementos de la fila</th><th>rowTotal</th><th>sums</th></tr></thead>
<tbody>
<tr><td>0</td><td>62 + 68 + 71 + 74</td><td>275</td><td>[275, –, –]</td></tr>
<tr><td>1</td><td>58 + 61 + 83 + 85</td><td>287</td><td>[275, 287, –]</td></tr>
<tr><td>2</td><td>65 + 70 + 76 + 78</td><td>289</td><td class="is-mark">[275, 287, 289]</td></tr>
</tbody>
</table>

<div class="pitfall">
<p>Sin <code>rowTotal = 0</code> al empezar cada fila, cada una arrastra las anteriores: <code>[275, 562, 851]</code>. <strong>Un vector siempre creciente es la firma de este error.</strong></p>
</div>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Por columna</p>

## Suma por columna: bucles invertidos

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="src/app.js">

```js
const colSums = (matrix) => {
  const sums = new Array(matrix[0].length)
  let colTotal
  for (let j = 0; j < matrix[0].length; j++) {
    colTotal = 0
    for (let i = 0; i < matrix.length; i++) {
      colTotal += matrix[i][j]
    }
    sums[j] = colTotal
  }
  return sums.slice()
}
```

</div>

<div class="out">

```bash
> rowSums(temperatures)
[ 275, 287, 289 ]
> colSums(temperatures)
[ 185, 199, 230, 237 ]
> sumAll(temperatures)
851
```

</div>

</div>

<p class="tip"><strong>Verificación cruzada:</strong> las dos sumas tienen que dar el total. <code>275 + 287 + 289 = 185 + 199 + 230 + 237 = 851</code>.</p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Generar</p>

## Matriz aleatoria

<div class="body">

<div class="file" data-name="src/app.js">

```js
const rndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

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
```

</div>

<p class="note-p">Sin copia al devolver: la matriz se creó <strong>adentro</strong> y nadie más la tiene.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 6</p>

## Probar en la consola

---

<p class="eyebrow"><b>08</b><span>/</span>Consola</p>

## Una matriz chica, en la consola

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="terminal">

```bash
$ node
> const m = [[1, 2, 3], [4, 5, 6]]
undefined
> m.length
2
> m[0].length
3
> console.table(m)
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│ 0       │ 1 │ 2 │ 3 │
│ 1       │ 4 │ 5 │ 6 │
└─────────┴───┴───┴───┘
```

</div>

<div>
<p class="lead">Chica, para hacer la cuenta a mano.</p>
<p class="lead"><strong>No cuadrada</strong>, para que aparezcan los errores.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Consola</p>

## Depurar: pegás la función y la probás

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="terminal">

```bash
> .editor
const rowSums = (matrix) => {
  const sums = new Array(matrix.length)
  let rowTotal = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      rowTotal += matrix[i][j]
    }
    sums[i] = rowTotal
  }
  return sums
}
```

</div>

<div>

<div class="out">

```bash
> rowSums([[1, 2, 3], [4, 5, 6]])
[ 3, 12 ]
```

</div>

<p class="lead">Esperabas <code>[6, 15]</code>. ¿Cuáles son los <strong>dos</strong> errores?</p>

</div>

</div>

</div>

<!-- Uno: j < matrix.length (2 en vez de 3) → se saltea la columna 2.
     Dos: rowTotal no vuelve a cero → la fila 1 arrastra la 0.
     3 = 1 + 2. 12 = 3 + 4 + 5. Que lo hagan a mano con la traza.
     Recordar: si la corrigen y la vuelven a pegar, "already declared":
     .exit y entrar de nuevo. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 7</p>

## Ahora ustedes

---

<p class="eyebrow"><b>08</b><span>/</span>Taller</p>

## Los datos del taller

<div class="body">

<p class="lead">Tres motores, la temperatura del rodamiento cada hora durante seis horas. Por encima de <code>80 °C</code>, alarma.</p>

<div class="file" data-name="src/app.js">

```js
const ALARM_LIMIT = 80
const temperatures = [
  [62, 68, 71, 74, 79, 77],   // motor 0
  [58, 61, 83, 85, 80, 72],   // motor 1
  [65, 70, 76, 78, 91, 88]    // motor 2
]
```

</div>

<p class="note-p">Filas: motores. Columnas: horas. Todas las consignas trabajan sobre esta matriz.</p>

</div>

<!-- Dictar o copiar en el pizarron. Cuatro consignas: A1 y A2 de
     calentamiento, B1 repasa el centinela del parcial, B2 es la dificil.
     Sugerido: 10 min para A, 25 min para B. Solucion en el repo docente:
     soluciones/08-matrices/taller-solution.js -->

---

<p class="eyebrow"><b>08</b><span>/</span>Taller A</p>

## A1 · Cuántas lecturas en alarma

<div class="body">

<p class="lead"><code>countAbove(matrix, limit)</code> devuelve <strong>cuántos</strong> elementos de la matriz superan el límite.</p>

<div class="file" data-name="src/app.js">

```js
const countAbove = (matrix, limit) => // ...

console.log(countAbove(temperatures, ALARM_LIMIT))
```

</div>

<div class="out">

```bash
4
```

</div>

<p class="note-p">El <code>80</code> del motor 1 <strong>no</strong> cuenta: «supera» es <code>&gt;</code>, no <code>&gt;=</code>.</p>

</div>

<!-- Es la de la teoria. Si la copian de la diapositiva, que la escriban
     igual sin mirar: el objetivo es que salga de memoria. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Taller A</p>

## A2 · Una hora de todos los motores

<div class="body">

<p class="lead"><code>getColumn(matrix, col)</code> devuelve un <strong>vector nuevo</strong> con la columna pedida: las tres temperaturas de esa hora.</p>

<div class="file" data-name="src/app.js">

```js
const getColumn = (matrix, col) => // ...

console.log(getColumn(temperatures, 4))
```

</div>

<div class="out">

```bash
[ 79, 80, 91 ]
```

</div>

<p class="note-p">¿Cuántos bucles hacen falta para recorrer <strong>una</strong> columna?</p>

</div>

<!-- UNO solo: i varia, j queda fijo en col. El que escribe dos bucles con
     un if (j === col) recorre 18 elementos para leer 3. Funciona, pero
     mostrarlo y preguntar por que sobra un bucle. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Taller B</p>

## B1 · La primera alarma

<div class="body">

<p class="lead"><code>firstAbove(matrix, limit)</code> devuelve <code>[fila, columna]</code> del primer elemento que supera el límite, recorriendo por filas. Si no hay ninguno, <code>[-1, -1]</code>.</p>

<div class="file" data-name="src/app.js">

```js
const firstAbove = (matrix, limit) => // ...

console.log(firstAbove(temperatures, ALARM_LIMIT))
console.log(firstAbove([[62, 68], [71, 74]], ALARM_LIMIT))
```

</div>

<div class="out">

```bash
[ 1, 2 ]
[ -1, -1 ]
```

</div>

</div>

<!-- El centinela del parcial. [-1, -1]: las DOS partes imposibles.
     El que escribe [0, -1] y despues pregunta por result[0] === -1 nunca
     detecta el "no encontrado". La pista de la 07 sigue valiendo: en cuanto
     lo encontras, return — y los dos bucles se cortan. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Taller B</p>

## B2 · ⭐ Los motores que entraron en alarma

<div class="body">

<p class="lead"><code>hotMotors(matrix, limit)</code> devuelve un <strong>vector</strong> con los índices de los motores que tuvieron <strong>al menos una</strong> lectura por encima del límite.</p>

<div class="file" data-name="src/app.js">

```js
const hotMotors = (matrix, limit) => // ...

console.log(hotMotors(temperatures, ALARM_LIMIT))
```

</div>

<div class="out">

```bash
[ 1, 2 ]
```

</div>

<div class="tip">
<p>Es el <code>aboveLimit</code> de la 07: primero se cuenta, después se copia. Pero lo que se cuenta son <strong>filas</strong>, no elementos.</p>
</div>

</div>

<!-- ESTA ES LA CONSIGNA DEL DIA. Dejarlos pelearse un rato.
     La clave: una funcion auxiliar rowHasAbove(row, limit) que recibe UNA
     FILA —matrix[i], un vector— y devuelve true/false. Darse cuenta de que
     una fila se le puede pasar a una funcion de vectores es la mitad del
     ejercicio. Despues: contar filas que cumplen, new Array(cuenta), y un
     segundo recorrido con un indice propio para el vector nuevo.
     El motor 1 tiene DOS lecturas en alarma y tiene que aparecer UNA vez:
     el que cuenta elementos en vez de filas crea un vector de 4. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Taller</p>

## Lo que acaban de construir

<div class="body">

<ol class="enum">
<li><span><code>getColumn</code> recorre <strong>una</strong> dimensión: un bucle alcanza</span></li>
<li><span><code>firstAbove</code> devuelve <code>[-1, -1]</code>: un centinela con <strong>las dos</strong> partes imposibles</span></li>
<li><span><code>hotMotors</code> le pasa una <strong>fila</strong> a una función de vectores</span></li>
</ol>

<p class="callout">Una fila de una matriz es un vector.<small>Todo lo que escribiste en la 07 sirve para cada fila</small></p>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Revisión de código</p>

## Los transformadores

<div class="body">

<p class="lead">Un compañero registra la carga de cuatro transformadores, hora por hora, y te pide que revises su programa antes de entregarlo. <strong>¿Lo aprobás?</strong></p>

<div class="file" data-name="terminal">

```bash
node ejemplos/06-corregir-los-transformadores.js
```

</div>

<div class="tip">
<p><strong>No lo leas buscando errores: corrélo primero.</strong> Mirá las sumas por transformador, el <code>NaN</code>, la «hora -1» y la tabla original del final. Después pasale <code>npm run lint</code>.</p>
</div>

</div>

<!-- 25 min, de a dos. Correccion comentada en el repo docente:
     soluciones/08-matrices/06-corregir-los-transformadores-resuelto.js
     Sugerir que arreglen PRIMERO la fila compartida (todas las filas iguales)
     y corran de nuevo: hasta entonces los otros sintomas se mezclan. -->

---

<p class="eyebrow"><b>08</b><span>/</span>Cierre</p>

## Los errores que vamos a cometer

<div class="body">

<table>
<thead><tr><th>Error</th><th>Síntoma</th></tr></thead>
<tbody>
<tr><td>Crear la fila antes del bucle de filas</td><td>Todas las filas iguales</td></tr>
<tr><td><code>j &lt; matrix.length</code></td><td>Faltan columnas si no es cuadrada</td></tr>
<tr><td>No reiniciar el acumulador de la fila</td><td>Sumas siempre crecientes</td></tr>
<tr><td>Acumular en un <code>new Array</code> sin inicializar</td><td><code>NaN</code> en todo el vector</td></tr>
<tr><td>Máximo con bucles desde 1</td><td>Se saltea la fila 0 y la columna 0</td></tr>
<tr><td><code>matrix.slice()</code> para copiar</td><td>Se arruina la matriz original</td></tr>
</tbody>
</table>

</div>

---

<p class="eyebrow"><b>08</b><span>/</span>Cierre</p>

## Reglas de la cátedra

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Podés usar</h3>
<p><code>for</code> · <code>while</code> · <code>do-while</code> · <code>if</code> · <code>switch</code> · <code>matrix[i][j]</code> · <code>.length</code> · <code>.slice()</code> · <code>console.table()</code></p>
</div>

<div class="card">
<h3>No podés usar</h3>
<p><code>map</code> · <code>filter</code> · <code>reduce</code> · <code>forEach</code> · <code>find</code> · <code>sort</code> · <code>flat</code> · <code>indexOf</code> · <code>splice</code> · <code>fill()</code> · <code>push()</code> · <code>Array.from()</code> · retornar objetos</p>
</div>

</div>

<p class="callout">La próxima: transpuesta, diagonal, simetría y producto.<small>Operar con matrices como en Álgebra · unidad 09</small></p>

</div>

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Trabajo práctico</p>

# Consumo de energía de un taller de mecanizado

<div class="cover-meta">
<span><strong>7 problemas</strong></span><span class="sep">·</span>
<span>todo modularizado en funciones</span><span class="sep">·</span>
<span><code>tp.md</code></span>
</div>

<div class="cover-meta">
<span>Apunte completo de la unidad: <code>apunte.md</code></span>
</div>
