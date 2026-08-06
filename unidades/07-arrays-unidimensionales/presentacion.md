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
<li><span>Los <strong>cinco algoritmos</strong> fundamentales</span></li>
<li><span><code>.slice()</code>: la trampa de las <strong>referencias</strong></span></li>
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

<div class="file" data-name="app.js">

```js
let medicion1 = 219.4
let medicion2 = 221.8
let medicion3 = 218.2
```

</div>

<p class="lead">Funciona perfecto. Tres valores, tres variables.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>El problema</p>

## Ahora las de todo el mes

<div class="body">

<div class="file" data-name="app.js">

```js
let medicion1 = 219.4
let medicion2 = 221.8
let medicion3 = 218.2
// ... 27 líneas más ...
let medicion31 = 220.1
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

<div class="file" data-name="app.js">

```js
let mediciones = [219.4, 221.8, 218.2]
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
let v = []
```

<p class="note-p">Cuando no sabés la dimensión todavía.</p>
</div>

<div>
<h3>Con valores</h3>

```js
let v = [1, 2, 3]
```

<p class="note-p">Cuando los datos son conocidos.</p>
</div>

<div>
<h3>Con dimensión</h3>

```js
let v = new Array(5)
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

<div class="file" data-name="app.js">

```js
let nombres = ['Juan', 'Ana', 'Luis']

console.log(nombres[0])
console.log(nombres[2])

nombres[1] = 'María'
console.log(nombres)
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

<div class="file" data-name="app.js">

```js
let v = ['Juan', 'Ana', 'Luis']
console.log(v.length)   // 3
```

</div>

<table>
<thead><tr><th>Concepto</th><th>Valor</th></tr></thead>
<tbody>
<tr><td>Cantidad de elementos</td><td><code>v.length</code></td></tr>
<tr><td>Índice del primero</td><td><code>0</code></td></tr>
<tr><td><strong>Índice del último</strong></td><td><code>v.length - 1</code></td></tr>
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

## ¿Qué imprime <code>nombres[3]</code>?

```js
let nombres = ['Juan', 'Ana', 'Luis']
console.log(nombres[3])
```

<!-- Respuesta: undefined. NO tira error, y eso es lo peligroso.
     Repreguntar: "¿y si después hago una cuenta con eso?" → NaN. -->

---

<p class="eyebrow"><b>07</b><span>/</span>Acceder</p>

## <code>undefined</code>, y sin avisar

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="app.js">

```js
let nombres = ['Juan', 'Ana', 'Luis']

console.log(nombres[3])
console.log(nombres[3] + 1)
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

<div class="file" data-name="app.js">

```js
const imprimir = (v) => {
  for (let i = 0; i < v.length; i++) {
    console.log(`${i}: ${v[i]}`)
  }
}

imprimir([10, 20, 30])
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
<tr><td><code>i &lt; v.length</code></td><td>4</td><td>índices 0, 1, 2, 3, 4</td><td>✅</td></tr>
<tr><td><code>i &lt;= v.length</code></td><td>5</td><td><code>v[5]</code> → <code>undefined</code></td><td>❌</td></tr>
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

<div class="file" data-name="app.js">

```js
let i = 0

while (i < v.length) {
  console.log(v[i])
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

## Los cinco algoritmos

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 1 de 5</p>

## Acumular

<div class="body">

<div class="cols cols-2-1">

<div class="file" data-name="app.js">

```js
const sumar = (v) => {
  let suma = 0

  for (let i = 0; i < v.length; i++) {
    suma += v[i]
  }

  return suma
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

<div class="file" data-name="app.js">

```js
const contarPares = (v) => {
  let cantidad = 0

  for (let i = 0; i < v.length; i++) {
    if (v[i] % 2 === 0) {
      cantidad++
    }
  }

  return cantidad
}
```

</div>

<p class="lead">Igual que acumular, pero el contador sube <strong>de a uno</strong> y sólo cuando se cumple el <code>if</code>.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 3 de 5</p>

## Máximo y su posición

<div class="body">

<div class="file" data-name="app.js">

```js
const buscarMaximo = (v) => {
  let maximo = v[0]                        // el PRIMERO, no 0
  let posicion = 0

  for (let i = 1; i < v.length; i++) {     // arranca en 1
    if (v[i] > maximo) {
      maximo = v[i]
      posicion = i
    }
  }

  return [maximo, posicion]                // dos datos → un vector
}
```

</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Por qué no <code>let maximo = 0</code>?

```js
buscarMaximo([-5, -12, -3, -40])
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
<tr><td><code>let maximo = 0</code></td><td><strong>0</strong> — un valor que no está en el vector ❌</td></tr>
<tr><td><code>let maximo = v[0]</code></td><td><strong>-3</strong> ✅</td></tr>
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

<div class="file" data-name="app.js">

```js
const buscarPosicion = (v, buscado) => {
  let posicion = -1
  let i = 0

  while (i < v.length && posicion === -1) {   // corta al encontrarlo
    if (v[i] === buscado) posicion = i
    i++
  }

  return posicion                             // -1 si no está
}
```

</div>

<p class="tip"><code>-1</code> es un índice <strong>imposible</strong>: así distinguís «no está» de «está en la posición 0».</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Algoritmo 5 de 5</p>

## Vector aleatorio

<div class="body">

<div class="file" data-name="app.js">

```js
const rndInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generarVector = (dim, min, max) => {
  const v = new Array(dim)

  for (let i = 0; i < dim; i++) {
    v[i] = rndInt(min, max)
  }

  return v.slice()
}
```

</div>

<p class="note-p"><code>rndInt()</code> ya la escribimos en la unidad 06. Se reusa de acá en adelante.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## La trampa de <code>.slice()</code>

---

<p class="eyebrow"><b>07</b><span>/</span>Referencias</p>

## Un número se pasa por copia

<div class="body">

<div class="cols cols-2">

<div class="file" data-name="app.js">

```js
const duplicar = (n) => {
  n = n * 2
  return n
}

let x = 5
const y = duplicar(x)
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

<div class="file" data-name="app.js">

```js
const duplicarMal = (v) => {
  for (let i = 0; i < v.length; i++) {
    v[i] = v[i] * 2
  }
  return v
}

const original = [1, 2, 3]
const duplicado = duplicarMal(original)
```

</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cuánto vale <code>original</code> ahora?

```js
const original = [1, 2, 3]
const duplicado = duplicarMal(original)

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
const dup = (v) => {
  for (...) {
    v[i] = v[i] * 2
  }
  return v
}
```

</div>

<div>
<span class="good">Así sí</span>

```js
const dup = (v) => {
  const r = v.slice()
  for (...) {
    r[i] = r[i] * 2
  }
  return r
}
```

</div>

</div>

<p class="tip">Usá <code>.slice()</code> cuando una función <strong>recibe</strong> un vector que no debe modificar, y cuando <strong>retorna</strong> uno.</p>

</div>

---

<p class="eyebrow"><b>07</b><span>/</span>Cierre</p>

## Los errores que vamos a cometer

<div class="body">

<table>
<thead><tr><th>Error</th><th>Síntoma</th></tr></thead>
<tbody>
<tr><td><code>i &lt;= v.length</code></td><td><code>undefined</code> o <code>NaN</code> al final</td></tr>
<tr><td>Acumulador dentro del bucle</td><td>Sólo queda el último elemento</td></tr>
<tr><td><code>let maximo = 0</code></td><td>Falla con valores negativos</td></tr>
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
