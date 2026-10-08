---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 07</p>

# Arrays unidimensionales

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Vectores</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span><strong>El problema</strong> que resuelven los vectores</span></li>
<li><span>Declarar, inicializar y acceder por <strong>índice</strong></span></li>
<li><span><strong>Recorrer</strong> con <code>for</code> y con <code>while</code></span></li>
<li><span><code>.slice()</code>: la trampa de las <strong>referencias</strong></span></li>
<li><span>Los <strong>cinco algoritmos</strong> fundamentales</span></li>
<li><span>Probar y depurar en la <strong>consola</strong> de Node</span></li>
<li><span><strong>Taller</strong>: ahora ustedes</span></li>
</ol>

<p class="tip"><strong>Requisitos:</strong> unidad 05 (bucles) y unidad 06 (funciones). Todo lo de hoy se escribe dentro de funciones.</p>

</div>

<!-- 90 min de teoría + 90 de práctica guiada.
     Ejemplos en vivo: unidades/07-arrays-unidimensionales/ejemplos/ -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## El problema

---

<p class="eyebrow"><b>07</b><span>/</span>El problema</p>

## Tres mediciones de tensión

<div class="body">

<div class="file" data-name="src/app.js">

```js
let measurement1 = 219.4
let measurement2 = 221.8
let measurement3 = 218.2
```

</div>

<p class="lead">Funciona perfecto. Tres valores, tres variables.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>El problema</p>

## Ahora las de todo el mes

<div class="body">

<div class="file" data-name="src/app.js">

```js
let measurement1 = 219.4
let measurement2 = 221.8
let measurement3 = 218.2
// ... 27 líneas más ...
let measurement31 = 220.1
```

</div>

<p class="lead">Inviable. Y el problema real todavía no apareció.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Y si el usuario decide cuántas mediciones son?

<p class="lead">No podés declarar variables que todavía no sabés cuántas son.</p>

<!-- Dejarlos pensar. La respuesta es que NO hay forma con variables sueltas:
     la cantidad se conoce en tiempo de ejecución, no al escribir el código. -->

---

<p class="eyebrow"><b>07</b><span>/</span>El problema</p>

## Un nombre, muchos valores

<div class="body">

<div class="file" data-name="src/app.js">

```js
let measurements = [219.4, 221.8, 218.2]
```

</div>

<p class="mem-label">mediciones</p>

<div class="mem">
<div><b>219.4</b><i>0</i></div>
<div><b>221.8</b><i>1</i></div>
<div><b>218.2</b><i>2</i></div>
</div>

<p class="note-p">Todos los elementos comparten el <strong>nombre</strong>. Los distingue el <strong>índice</strong>.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## Declarar y acceder

---

<p class="eyebrow"><b>07</b><span>/</span>Declarar</p>

## Tres formas de declarar

<div class="body">

<div class="cols cols-3">

<div>
<h3>Vacío</h3>

```js
let vector = []
```

<p class="note-p">Cuando no sabés la dimensión todavía.</p>
</div>

<div>
<h3>Con valores</h3>

```js
let vector = [1, 2, 3]
```

<p class="note-p">Cuando los datos son conocidos.</p>
</div>

<div>
<h3>Con dimensión</h3>

```js
let vector = new Array(5)
```

<p class="note-p">5 posiciones, todas sin inicializar.</p>
</div>

</div>

<p class="tip">En esta cátedra los vectores se inicializan <strong>siempre con un bucle</strong>. No usamos <code>fill()</code> ni <code>push()</code>.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Acceder</p>

## Leer y modificar

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
let names = ['Juan', 'Ana', 'Luis']

console.log(names[0])
console.log(names[2])

names[1] = 'María'
console.log(names)
```

</div>

<div class="out">

```bash
Juan
Luis
[ 'Juan', 'María', 'Luis' ]
```

</div>

</div>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Acceder</p>

## <code>.length</code>: cuántos elementos tiene

<div class="body">

<div class="cols cols-1-2">

<div class="file" data-name="src/app.js">

```js
let vector = ['Juan', 'Ana', 'Luis']
console.log(vector.length)   // 3
```

</div>

<table>
<thead><tr><th>Concepto</th><th>Valor</th></tr></thead>
<tbody>
<tr><td>Cantidad de elementos</td><td><code>vector.length</code></td></tr>
<tr><td>Índice del primero</td><td><code>0</code></td></tr>
<tr><td><strong>Índice del último</strong></td><td><code>vector.length - 1</code></td></tr>
</tbody>
</table>

</div>

<p class="mem-label">3 elementos · último índice 2</p>

<div class="mem">
<div><b>'Juan'</b><i>0</i></div>
<div><b>'Ana'</b><i>1</i></div>
<div class="is-mark"><b>'Luis'</b><i>2</i></div>
</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Qué imprime <code>names[3]</code>?

```js
let names = ['Juan', 'Ana', 'Luis']
console.log(names[3])
```

<!-- Respuesta: undefined. NO tira error, y eso es lo peligroso.
     Repreguntar: "¿y si después hago una cuenta con eso?" → NaN. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Acceder</p>

## <code>undefined</code>, y sin avisar

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
let names = ['Juan', 'Ana', 'Luis']

console.log(names[3])
console.log(names[3] + 1)
```

</div>

<div class="out">

```bash
undefined
NaN
```

</div>

</div>

<div class="pitfall">
<p>JavaScript <strong>no tira error</strong> al salirse de rango. El programa sigue con basura adentro y el error explota mucho más adelante, lejos de donde lo causaste. <strong>El control del rango es tu responsabilidad.</strong></p>
</div>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Recorrer el vector

---

<p class="eyebrow"><b>07</b><span>/</span>Recorrer</p>

## Con <code>for</code>

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
const printVector = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    console.log(`${i}: ${vector[i]}`)
  }
}

printVector([10, 20, 30])
```

</div>

<div class="out">

```bash
0: 10
1: 20
2: 30
```

</div>

</div>

<p class="tip">Es la forma más común: sabés exactamente cuántas iteraciones necesitás, tantas como elementos tenga el vector.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Recorrer</p>

## <code>&lt;</code> o <code>&lt;=</code>

<div class="body">

<p class="lead">Para un vector de <strong>5 elementos</strong>:</p>

<table class="trace">
<thead><tr><th>Condición</th><th>Último i</th><th>Accede a</th><th></th></tr></thead>
<tbody>
<tr><td><code>i &lt; vector.length</code></td><td>4</td><td>índices 0, 1, 2, 3, 4</td><td>✅</td></tr>
<tr><td><code>i &lt;= vector.length</code></td><td>5</td><td><code>vector[5]</code> → <code>undefined</code></td><td>❌</td></tr>
</tbody>
</table>

<div class="pitfall">
<p>Cinco elementos, <strong>último índice 4</strong>. Es el error número uno al empezar con vectores.</p>
</div>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Recorrer</p>

## Con <code>while</code>

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
let i = 0

while (i < vector.length) {
  console.log(vector[i])
  i++
}
```

</div>

<ol class="enum">
<li><span><strong>Inicializar</strong> el contador antes del bucle</span></li>
<li><span><strong>Condición</strong> de corte</span></li>
<li><span><strong>Incrementar</strong> dentro del bucle</span></li>
</ol>

</div>

<div class="pitfall">
<p>Si te olvidás el <code>i++</code>, la condición nunca se hace falsa: <strong>bucle infinito</strong>. Se corta con <code>Ctrl + C</code> en la terminal.</p>
</div>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Recorrer</p>

## ¿Cuál uso?

<div class="body center">

<div class="cols cols-2">

<div class="card">
<h3><code>for</code></h3>
<p>Recorrer el vector completo.</p>
<p>Sabés cuántas iteraciones son.</p>
</div>

<div class="card">
<h3><code>while</code></h3>
<p>Cortar antes de llegar al final.</p>
<p>La cantidad depende de una condición.</p>
</div>

</div>

<p class="callout"><code>for</code> por defecto. <code>while</code> cuando necesitás cortar.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## La trampa de <code>.slice()</code>

---

<p class="eyebrow"><b>07</b><span>/</span>Referencias</p>

## Un número se pasa por copia

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="src/app.js">

```js
const doubleAll = (n) => {
  n = n * 2
  return n
}

let x = 5
const y = doubleAll(x)
```

</div>

<div class="out">

```bash
x = 5     ← intacto
y = 10
```

</div>

</div>

<p class="lead">La función recibe una <strong>copia</strong> del valor. El original no se toca.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Referencias</p>

## Un vector, no

<div class="body">

<div class="file" data-name="src/app.js">

```js
const doubleAllBad = (vector) => {
  for (let i = 0; i < vector.length; i++) {
    vector[i] = vector[i] * 2
  }
  return vector
}

const original = [1, 2, 3]
const doubled = doubleAllBad(original)
```

</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cuánto vale <code>original</code> ahora?

```js
const original = [1, 2, 3]
const doubled = doubleAllBad(original)

console.log(original)
```

<!-- Respuesta: [2, 4, 6]. La función "que sólo calculaba" destruyó los datos
     de entrada. Este es EL momento clave de la clase.
     Correr en vivo: ejemplos/04-slice-referencias.js -->

---

<p class="eyebrow"><b>07</b><span>/</span>Referencias</p>

## Se arruinó el original

<div class="body">

<div class="out">

```bash
Original:  [ 2, 4, 6 ]     ← se arruinó
Duplicado: [ 2, 4, 6 ]
```

</div>

<div class="cols cols-2">

<div class="card">
<h3>Número</h3>
<p>Se pasa por <strong>copia</strong>. La función trabaja sobre un valor propio.</p>
</div>

<div class="card">
<h3>Vector</h3>
<p>Se pasa por <strong>referencia</strong>. Apunta al mismo lugar en memoria.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Referencias</p>

## La solución

<div class="body">

<div class="cols cols-2 compare">

<div>
<span class="bad">Así no</span>

```js
const doubleAll = (vector) => {
  for (...) {
    vector[i] = vector[i] * 2
  }
  return vector
}
```

</div>

<div>
<span class="good">Así sí</span>

```js
const doubleAll = (vector) => {
  const result = vector.slice()
  for (...) {
    result[i] = result[i] * 2
  }
  return result
}
```

</div>

</div>

<p class="tip">Usá <code>.slice()</code> cuando una función <strong>recibe</strong> un vector que no debe modificar, y cuando <strong>retorna</strong> uno.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Los cinco algoritmos

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 1 de 5</p>

## Acumular

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="src/app.js">

```js
const sumAll = (vector) => {
  let total = 0

  for (let i = 0; i < vector.length; i++) {
    total += vector[i]
  }

  return total
}
```

</div>

<div>
<p class="mem-label">Traza con [5, 10, 15]</p>
<table class="trace">
<thead><tr><th>i</th><th>v[i]</th><th>suma</th></tr></thead>
<tbody>
<tr><td>—</td><td>—</td><td>0</td></tr>
<tr><td>0</td><td>5</td><td>5</td></tr>
<tr><td>1</td><td>10</td><td>15</td></tr>
<tr><td>2</td><td>15</td><td class="is-mark">30</td></tr>
</tbody>
</table>
</div>

</div>

<p class="tip">El acumulador arranca en <code>0</code> y se declara <strong>fuera</strong> del bucle. Adentro, se reinicia en cada vuelta.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 2 de 5</p>

## Contar según una condición

<div class="body">

<div class="file" data-name="src/app.js">

```js
const countEven = (vector) => {
  let count = 0

  for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 === 0) {
      count++
    }
  }

  return count
}
```

</div>

<p class="lead">Igual que acumular, pero el contador sube <strong>de a uno</strong> y sólo cuando se cumple el <code>if</code>.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 3 de 5</p>

## Máximo y su posición

<div class="body">

<div class="file" data-name="src/app.js">

```js
const findMax = (vector) => {
  let max = vector[0]                        // el PRIMERO, no 0
  let position = 0

  for (let i = 1; i < vector.length; i++) {     // arranca en 1
    if (vector[i] > max) {
      max = vector[i]
      position = i
    }
  }

  return [max, position].slice()                // dos datos → un vector
}
```

</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Por qué no <code>let max = 0</code>?

```js
findMax([-5, -12, -3, -40])
```

<!-- Respuesta: devolvería 0, un valor que NO ESTÁ en el vector.
     Que lo piensen 30 segundos. En los parciales se corrige como error GRAVE. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 3 de 5</p>

## Con temperaturas bajo cero

<div class="body">

<p class="mem-label">Vector de trabajo</p>

<div class="mem">
<div><b>-5</b><i>0</i></div>
<div><b>-12</b><i>1</i></div>
<div class="is-mark"><b>-3</b><i>2</i></div>
<div><b>-40</b><i>3</i></div>
</div>

<table>
<thead><tr><th>Inicializando en</th><th>Resultado</th></tr></thead>
<tbody>
<tr><td><code>let max = 0</code></td><td><strong>0</strong> — un valor que no está en el vector ❌</td></tr>
<tr><td><code>let max = vector[0]</code></td><td><strong>-3</strong> ✅</td></tr>
</tbody>
</table>

<div class="pitfall">
<p>En los parciales esto se corrige como <strong>error grave</strong>: denota no entender qué representa el acumulador.</p>
</div>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 4 de 5</p>

## Búsqueda lineal

<div class="body">

<div class="file" data-name="src/app.js">

```js
const linearSearch = (vector, wanted) => {
  let position = -1
  let i = 0

  while (i < vector.length && position === -1) {   // corta al encontrarlo
    if (vector[i] === wanted) { position = i }
    i++
  }

  return position                             // -1 si no está
}
```

</div>

<p class="tip"><code>-1</code> es un índice <strong>imposible</strong>: así distinguís «no está» de «está en la posición 0».</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 5 de 5</p>

## Vector aleatorio

<div class="body">

<div class="file" data-name="src/app.js">

```js
const rndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getRandomVector = (size, min, max) => {
  const vector = new Array(size)

  for (let i = 0; i < size; i++) {
    vector[i] = rndInt(min, max)
  }

  return vector.slice()
}
```

</div>

<p class="note-p"><code>rndInt()</code> ya la escribimos en la unidad 06. Se reusa de acá en adelante.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 6</p>

## Probar en la consola

---

<p class="eyebrow"><b>07</b><span>/</span>Consola</p>

## Probar sin crear un archivo

<div class="body">

<div class="cols cols-2">

<div>

<div class="file" data-name="terminal">

```bash
$ node
> const temps = [62, 68, 71, 83]
undefined
> temps.length
4
> temps[temps.length - 1]
83
> temps[4]
undefined
```

</div>

</div>

<div>

<p class="lead">Escribís <code>node</code> en la terminal, sin archivo, y cada línea se ejecuta <strong>en el momento</strong>.</p>

<div class="tip">
<p>El <code>undefined</code> después de un <code>const</code> <strong>no es un error</strong>: es lo que devuelve una declaración. El de <code>temps[4]</code> sí te está avisando algo.</p>
</div>

<p class="note-p">Para salir: <code>.exit</code> o <code>Ctrl + D</code> dos veces.</p>

</div>

</div>

</div>

<!-- Es el REPL de Node: lo mismo que irb en Ruby o la consola de Python. Vale la
     pena abrirlo en vivo y tipear. El temps[4] es el error de la Parte 2: el
     indice 4 no existe y JavaScript no protesta. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Consola</p>

## Depurar una función

<div class="body">

<div class="cols cols-2">

<div>

<div class="file" data-name="terminal">

```bash
> const findMax = (vector) => {
|   let max = 0
|   for (let i = 0; i < vector.length; i++) {
|     if (vector[i] > max) { max = vector[i] }
|   }
|   return max
| }
undefined
> findMax([62, 68, 91, 74])
91
> findMax([-5, -12, -3])
0
```

</div>

</div>

<div>

<p class="lead">Pegás la función y la llamás con los casos <strong>difíciles</strong>. Sin <code>npm run dev</code>, sin cargar datos.</p>

<div class="pitfall">
<p><code>0</code> no está en el vector. Con todos negativos, el error de <code>let max = 0</code> aparece en el segundo intento.</p>
</div>

</div>

</div>

</div>

<!-- Este es el uso que importa: un depurador de bolsillo. Que prueben siempre
     tres casos: el normal, todos negativos, y el maximo en la posicion 0.
     Si la funcion usa otra (rndInt, isWithinRange), hay que pegar las dos. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Consola</p>

## Lo que conviene saber

<div class="body">

<table>
<thead><tr><th>Tecla o comando</th><th>Qué hace</th></tr></thead>
<tbody>
<tr><td><code>↑</code> / <code>↓</code></td><td>Recorre lo que ya escribiste: corregís una línea sin volver a tipearla</td></tr>
<tr><td><code>Tab</code></td><td>Autocompleta: <code>Math.</code> + <code>Tab</code> lista <code>floor</code>, <code>random</code>, <code>round</code>…</td></tr>
<tr><td><code>_</code></td><td>El último resultado</td></tr>
<tr><td><code>Ctrl + C</code></td><td>Cancela la línea que estás escribiendo</td></tr>
<tr><td><code>.save prueba.js</code></td><td>Guarda en un archivo todo lo que probaste</td></tr>
<tr><td><code>.help</code></td><td>Lista todos los comandos</td></tr>
</tbody>
</table>

<p class="note-p">En el taller que sigue: escribí la función en <code>src/app.js</code>, y <strong>antes de usarla en el programa</strong>, probala acá.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 7</p>

## Ahora ustedes

---

<p class="eyebrow"><b>07</b><span>/</span>Taller</p>

## Los datos del taller

<div class="body">

<p class="lead">Un motor tiene un sensor en el rodamiento. Se registra la temperatura <strong>una vez por hora</strong>. Por encima de <code>80 °C</code> el rodamiento entra en alarma.</p>

<div class="mem">
<div><b>62</b><i>0</i></div>
<div><b>68</b><i>1</i></div>
<div><b>71</b><i>2</i></div>
<div><b>83</b><i>3</i></div>
<div><b>79</b><i>4</i></div>
<div><b>85</b><i>5</i></div>
<div><b>74</b><i>6</i></div>
<div><b>91</b><i>7</i></div>
</div>

<div class="file" data-name="src/app.js">

```js
const ALARM_LIMIT = 80
const temperatures = [62, 68, 71, 83, 79, 85, 74, 91]
```

</div>

</div>

<!-- Copiar esas dos lineas en el pizarron o dictarlas. Todas las consignas
     trabajan sobre este vector.
     Cuatro consignas: A1 y A2 son de calentamiento, B1 repasa el centinela,
     B2 es la dificil y la que paga la clase.
     Sugerido: 10 min para A, 25 min para B. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Taller A</p>

## A1 · Pasar toda la serie a Fahrenheit

<div class="body">

<p class="lead">Devolvé un <strong>vector nuevo</strong> con las temperaturas en °F. El vector original <strong>no se toca</strong>.</p>

<div class="file" data-name="src/app.js">

```js
const celsiusToFahrenheit = (vector) => // ...

console.log(celsiusToFahrenheit(temperatures))
console.log(temperatures)
```

</div>

<div class="out">

```bash
[ 143.6, 154.4, 159.8, 181.4, 174.2, 185, 165.2, 195.8 ]
[ 62, 68, 71, 83, 79, 85, 74, 91 ]
```

</div>

<p class="note-p">La fórmula es la del TP de la unidad 05: <code>°C * 9 / 5 + 32</code>.</p>

</div>

<!-- El vector nuevo se crea con new Array(vector.length) y se llena con un
     bucle. Nada de push ni fill.
     La segunda linea de la salida es la consigna real: si el original salio
     cambiado, la funcion escribio sobre el vector que recibio. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Taller A</p>

## A2 · Cuántas en alarma

<div class="body">

<p class="lead"><code>countAbove(vector, limit)</code> devuelve <strong>cuántos</strong> elementos superan el límite.</p>

<div class="file" data-name="src/app.js">

```js
const countAbove = (vector, limit) => // ...

console.log(countAbove(temperatures, ALARM_LIMIT))
```

</div>

<div class="out">

```bash
3
```

</div>

<p class="note-p">Contador de la unidad 05, ahora <strong>adentro de una función</strong> y sobre un vector.</p>

</div>

<!-- Sale en dos minutos y esa es la idea: que todos lleguen a B con algo
     funcionando. Guardarla, que B2 la va a usar. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Taller B</p>

## B1 · La primera en alarma

<div class="body">

<p class="lead"><code>firstAbove(vector, limit)</code> devuelve el <strong>índice</strong> del primer elemento que supera el límite, o <code>-1</code> si no hay ninguno.</p>

<div class="file" data-name="src/app.js">

```js
const firstAbove = (vector, limit) => // ...

console.log(firstAbove(temperatures, ALARM_LIMIT))
console.log(firstAbove([62, 68, 71], ALARM_LIMIT))
```

</div>

<div class="out">

```bash
3
-1
```

</div>

<div class="tip">
<p>Acordate de <code>isPrime</code>: en cuanto lo encontrás, <code>return i</code> — y el bucle <strong>se corta solo</strong>.</p>
</div>

</div>

<!-- La version con while y centinela tambien vale, es la que esta en la
     teoria. Mostrar las dos y comparar cual se lee mejor.
     El -1 no es un capricho: es un indice imposible, y por eso sirve para
     decir «no esta» sin confundirlo con la posicion 0. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Taller B</p>

## B2 · ⭐ Sólo las que están en alarma

<div class="body">

<p class="lead"><code>aboveLimit(vector, limit)</code> devuelve un <strong>vector nuevo</strong> con los elementos que superan el límite. Nada más.</p>

<div class="file" data-name="src/app.js">

```js
const aboveLimit = (vector, limit) => // ...

console.log(aboveLimit(temperatures, ALARM_LIMIT))
```

</div>

<div class="out">

```bash
[ 83, 85, 91 ]
```

</div>

<div class="pitfall">
<p><code>new Array(...)</code> necesita saber <strong>el tamaño</strong>. ¿Y cuántos elementos va a tener este vector? <small>No lo sabés hasta recorrerlo. Y <code>push()</code> no se usa.</small></p>
</div>

</div>

<!-- ESTA ES LA CONSIGNA DEL DIA. Dejarlos pelearse un rato antes de dar la
     pista.
     La salida es DOS recorridos: el primero cuenta (y eso ya lo tienen hecho,
     es countAbove), el segundo copia. Entre los dos, el new Array(cantidad).
     Hace falta un indice PROPIO para el vector nuevo: i recorre el original,
     position escribe en el resultado, y no avanzan juntos. Ese desfasaje es
     lo que cuesta.
     Si nadie llega: dibujar los dos vectores en el pizarron con sus indices y
     preguntar «cuando copio el 85, en que posicion del vector nuevo va». -->

---

<p class="eyebrow"><b>07</b><span>/</span>Taller</p>

## Lo que acaban de construir

<div class="body">

<ol class="enum">
<li><span><code>aboveLimit</code> usa <code>countAbove</code> <strong>para saber de qué tamaño crear el vector</strong></span></li>
<li><span>Dos funciones devuelven un <strong>vector nuevo</strong>, y ninguna toca el que recibió</span></li>
<li><span><code>firstAbove</code> devuelve <code>-1</code>: un índice imposible que significa «no está»</span></li>
</ol>

<p class="callout">Un vector no se filtra de una pasada: <strong>primero se cuenta, después se copia.</strong> <small>Hasta que en otra materia les den las herramientas que lo hacen solas.</small></p>

</div>

<!-- El cierre es la idea de B2: contar y despues copiar. Es el patron que
     van a repetir toda la unidad 08 con matrices.
     Y el de A1: una funcion que recibe un vector no lo modifica; devuelve
     uno nuevo. Eso es lo que se corrige como error grave. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Cierre</p>

## Los errores que vamos a cometer

<div class="body">

<table>
<thead><tr><th>Error</th><th>Síntoma</th></tr></thead>
<tbody>
<tr><td><code>i &lt;= vector.length</code></td><td><code>undefined</code> o <code>NaN</code> al final</td></tr>
<tr><td>Acumulador dentro del bucle</td><td>Sólo queda el último elemento</td></tr>
<tr><td><code>let max = 0</code></td><td>Falla con valores negativos</td></tr>
<tr><td>Olvidar <code>i++</code> en un <code>while</code></td><td>El programa se cuelga</td></tr>
<tr><td>Olvidar <code>parseInt()</code></td><td>La suma concatena: <code>'53'</code></td></tr>
<tr><td>Modificar el vector recibido</td><td>Se corrompen los datos de entrada</td></tr>
</tbody>
</table>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Cierre</p>

## Reglas de la cátedra

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Podés usar</h3>
<p><code>for</code> · <code>while</code> · <code>do-while</code> · <code>if</code> · <code>switch</code> · acceso por índice · <code>.length</code> · <code>.slice()</code></p>
</div>

<div class="card">
<h3>No podés usar</h3>
<p><code>map</code> · <code>filter</code> · <code>reduce</code> · <code>forEach</code> · <code>find</code> · <code>sort</code> · <code>flat</code> · <code>indexOf</code> · <code>splice</code> · <code>fill()</code> · <code>push()</code> · retornar objetos</p>
</div>

</div>

<p class="callout">Primero dominás la lógica del recorrido.<small>Las herramientas que la resuelven por vos vienen después</small></p>

</div>

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Trabajo práctico</p>

# Análisis de mediciones de tensión de línea

<div class="cover-meta">
<span><strong>7 problemas</strong></span><span class="sep">·</span>
<span>todo modularizado en funciones</span><span class="sep">·</span>
<span><code>tp.md</code></span>
</div>

<div class="cover-meta">
<span>Apunte completo de la unidad: <code>apunte.md</code></span>
</div>
