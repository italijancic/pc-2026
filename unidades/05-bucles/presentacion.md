---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 05</p>

# Bucles

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Hoy</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span><code>for</code> — cuando sabés cuántas veces</span></li>
<li><span><code>while</code> y <code>do-while</code></span></li>
<li><span>La <strong>traza</strong>: cómo se depura un bucle</span></li>
<li><span>Los tres <strong>patrones</strong>: acumulador, contador, máximo</span></li>
<li><span>Bucles <strong>infinitos</strong> y cómo salir</span></li>
</ol>

<p class="tip">Lo de hoy es la base de la unidad 07. Cuando aparezcan los vectores, se recorren con <strong>estos mismos bucles y estos mismos patrones</strong>.</p>

</div>

<!-- 90 min. Ejemplos: unidades/05-bucles/ejemplos/
     Lo que más importa que se lleven: los tres patrones, y que el acumulador
     va declarado AFUERA del bucle. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## El problema

---

<p class="eyebrow"><b>05</b><span>/</span>El problema</p>

## Tres mediciones se bancan

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('Medición 1')
console.log('Medición 2')
console.log('Medición 3')
```

</div>

<p class="lead">Funciona perfecto. Tres líneas, tres mediciones.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>El problema</p>

## Las de todo el mes, no

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('Medición 1')
console.log('Medición 2')
// ... 28 líneas más ...
console.log('Medición 31')
```

</div>

<p class="lead">Inviable. Y el problema de fondo todavía no apareció.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Y si el usuario decide cuántas mediciones son?

<p class="lead">No podés escribir a mano una cantidad de líneas que se conoce recién cuando el programa corre.</p>

<!-- Es la misma pregunta que abre la unidad 07 con los vectores. Dejarla
     picando: hoy resolvemos la repetición, allá el almacenamiento. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## <code>for</code>

---

<p class="eyebrow"><b>05</b><span>/</span>for</p>

## Tres líneas, treinta y una vueltas

<div class="body">

<div class="file" data-name="src/app.js">

```js
for (let i = 1; i <= 31; i++) {
  console.log(`Medición ${i}`)
}
```

</div>

<p class="lead">Cambiar el <code>31</code> por <code>365</code> no agrega una sola línea.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>for</p>

## Las tres partes

<div class="body">

<div class="file" data-name="src/app.js">

```js
for (let i = 1; i <= 3; i++) {
//       ↑         ↑      ↑
//       |         |      └─ incremento: al final de cada vuelta
//       |         └─ condición: mientras sea true, sigue
//       └─ inicialización: UNA vez, al principio
}
```

</div>

<p class="note-p">Ese <code>i</code> es la <strong>variable de control</strong>, por <em>índice</em>. Es la única variable del curso a la que se le permite un nombre de una letra.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>for</p>

## El orden exacto

<div class="body">

<ol class="enum">
<li><span><strong>Inicialización</strong> — una sola vez</span></li>
<li><span><strong>¿Condición?</strong> Si es <code>false</code>, el bucle termina</span></li>
<li><span><strong>Cuerpo</strong> — las líneas entre llaves</span></li>
<li><span><strong>Incremento</strong></span></li>
<li><span>Volver al paso <strong>2</strong></span></li>
</ol>

<p class="callout">La condición se evalúa <strong>antes</strong> de entrar. Si da <code>false</code> la primera vez, el cuerpo <strong>no se ejecuta nunca</strong>.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>La traza</p>

## Seguirlo paso a paso

<div class="body">

<div class="cols cols-2-1">

<div>
<table class="trace">
<thead><tr><th>Vuelta</th><th>i</th><th>i &lt;= 4</th><th>imprime</th><th>i++</th></tr></thead>
<tbody>
<tr><td>1</td><td>1</td><td>sí</td><td>1</td><td>2</td></tr>
<tr><td>2</td><td>2</td><td>sí</td><td>2</td><td>3</td></tr>
<tr><td>3</td><td>3</td><td>sí</td><td>3</td><td>4</td></tr>
<tr><td>4</td><td>4</td><td>sí</td><td>4</td><td>5</td></tr>
<tr><td>—</td><td class="is-mark">5</td><td class="is-mark">NO</td><td>—</td><td>corta</td></tr>
</tbody>
</table>
</div>

<div>

```js
for (let i = 1;
     i <= 4;
     i++) {
  console.log(i)
}
```

</div>

</div>

<p class="lead">Con <code>i = 5</code> la condición da <code>false</code> y el cuerpo <strong>no se ejecuta</strong>.</p>

</div>

<!-- Hacerla en el pizarrón con ellos, columna por columna. Es LA herramienta
     para depurar bucles y la que más rinde en el parcial. -->

---

<p class="eyebrow"><b>05</b><span>/</span>La traza</p>

## Hacela en papel

<div class="body">

<p class="statement">Dos minutos de tabla<br>te ahorran veinte de mirar la pantalla</p>

<p class="lead">Cuando un bucle no hace lo que esperás, <strong>no lo mires: trazalo</strong>. Una columna por variable, una fila por vuelta.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>for</p>

## De cuánto en cuánto

<div class="body">

<div class="cols cols-2">

<div>

```js
for (let i = 0; i <= 20; i += 5) {
  console.log(i)
}
```

<div class="out">

```bash
0 · 5 · 10 · 15 · 20
```

</div>
</div>

<div>

```js
for (let i = 5; i >= 1; i--) {
  console.log(i)
}
```

<div class="out">

```bash
5 · 4 · 3 · 2 · 1
```

</div>
</div>

</div>

<p class="note-p">El incremento no tiene que ser de a uno, ni tiene que ir para arriba.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## <code>while</code> y <code>do-while</code>

---

<p class="eyebrow"><b>05</b><span>/</span>while</p>

## Las mismas tres piezas, repartidas

<div class="body">

<div class="file" data-name="src/app.js">

```js
let i = 1              // 1. inicialización — ANTES

while (i <= 3) {       // 2. condición
  console.log(i)
  i++                  // 3. incremento — ADENTRO
}
```

</div>

<div class="pitfall">
<p>Ese <code>i++</code> es <strong>obligatorio</strong>. Sin él, <code>i</code> vale 1 para siempre, la condición nunca se hace falsa y el programa <strong>no termina nunca</strong>.</p>
</div>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>do-while</p>

## Al menos una vez

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">while</span></p>

```js
let x = 50

while (x > 100) {
  console.log('no entra')
}
```

<p class="note-p">Condición falsa de entrada: <strong>no imprime nada</strong>.</p>
</div>

<div>
<p><span class="good">do-while</span></p>

```js
let x = 50

do {
  console.log('entra una vez')
} while (x > 100)
```

<p class="note-p">La condición se evalúa <strong>al final</strong>.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>do-while</p>

## Para qué sirve: el centinela

<div class="body">

<div class="file" data-name="src/app.js">

```js
let temperature

do {
  temperature = parseFloat(prompt('Temperatura (0 para terminar): '))
} while (temperature !== 0)
```

</div>

<p class="lead">Primero tenés que <strong>pedir</strong> el dato; recién después podés saber si sirve.</p>

<p class="note-p">Ese <code>0</code> es el <strong>centinela</strong>: un valor acordado que significa «no hay más datos». Fijate que la variable se declara <strong>antes</strong> del <code>do</code>.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Cuál uso</p>

## Los tres, comparados

<div class="body">

| Situación | Bucle |
|---|---|
| Sé cuántas veces (10 mediciones, del 1 al 31) | **`for`** |
| Depende de algo que cambia (mientras la presión baje) | **`while`** |
| Hay que ejecutarlo al menos una vez (validar, centinela) | **`do-while`** |

<p class="callout">Los tres son <strong>intercambiables</strong>. La elección es de <strong>legibilidad</strong>, no de capacidad. <small>En la duda, <code>for</code>: el incremento está a la vista.</small></p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## Los tres patrones

---

<p class="eyebrow"><b>05</b><span>/</span>Acumulador</p>

## El más importante del curso

<div class="body">

<div class="file" data-name="src/app.js">

```js
let total = 0                 // 1. ANTES: arranca en cero

for (let i = 1; i <= 5; i++) {
  total = total + i           // 2. ADENTRO: se le suma algo
}

console.log(total)            // 3. DESPUÉS: el resultado
```

</div>

<div class="out">

```bash
15
```

</div>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Acumulador</p>

## Por qué funciona

<div class="body">

<table class="trace">
<thead><tr><th>Vuelta</th><th>i</th><th>total antes</th><th>total = total + i</th></tr></thead>
<tbody>
<tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>2</td><td>2</td><td>1</td><td>3</td></tr>
<tr><td>3</td><td>3</td><td>3</td><td>6</td></tr>
<tr><td>4</td><td>4</td><td>6</td><td>10</td></tr>
<tr><td>5</td><td>5</td><td>10</td><td class="is-mark">15</td></tr>
</tbody>
</table>

<p class="lead">Cada vuelta arranca del total de la anterior. <strong>Por eso tiene que sobrevivir entre vueltas.</strong></p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Y si declaro el acumulador adentro del bucle?

<p class="lead"><code>for (...) { let total = 0; total = total + i }</code></p>

<!-- Nace y muere en cada vuelta: arranca en 0 cinco veces. El resultado se
     pierde, y al salir del bucle la variable ni siquiera existe.
     Es el error que más cuesta ver. -->

---

<p class="eyebrow"><b>05</b><span>/</span>Acumulador</p>

## El acumulador va afuera

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Así no</span></p>

```js
for (let i = 1; i <= 5; i++) {
  let total = 0
  total = total + i
}
```

<p class="note-p">Nace y muere en cada vuelta. Arranca en 0 cinco veces.</p>
</div>

<div>
<p><span class="good">Así sí</span></p>

```js
let total = 0

for (let i = 1; i <= 5; i++) {
  total = total + i
}
```

<p class="note-p">Sobrevive entre vueltas, y existe al salir.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Contador</p>

## Bucle + condicional

<div class="body">

<div class="file" data-name="src/app.js">

```js
let outOfRange = 0

for (let i = 1; i <= 5; i++) {
  const measured = 350 + i * 15

  if (measured < 361 || measured > 399) {
    outOfRange++
  }
}
```

</div>

<div class="out">

```bash
365 · 380 · 395 · 410 · 425
Fuera de rango: 2
```

</div>

</div>

<!-- Mismo patrón que el acumulador, pero suma UNO y sólo si se cumple la
     condición. Decirlo, no ponerlo en la diapositiva: no entra. -->

---

<p class="eyebrow"><b>05</b><span>/</span>Máximo</p>

## Guardar el campeón

<div class="body">

<div class="file" data-name="src/app.js">

```js
let maximum = 0

for (let i = 1; i <= 5; i++) {
  const measured = 350 + i * 15
  if (measured > maximum) {
    maximum = measured
  }
}
```

</div>

<div class="out">

```bash
Máxima: 425
```

</div>

<p class="lead">Anda. ¿Siempre?</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Mediciones: −5, −12, −19. ¿Cuál es el máximo?

<p class="lead">Con <code>let maximum = 0</code>, ¿qué contesta el programa?</p>

<!-- Contesta 0, que NO es ninguna de las mediciones. Nunca hubo un -5 > 0.
     Es EL error del patrón, y en la unidad 07 se corrige como grave. -->

---

<p class="eyebrow"><b>05</b><span>/</span>Máximo</p>

## El cero que no era del conjunto

<div class="body">

<div class="out">

```bash
Máxima (arrancando en 0):  0 °C
Máxima (bien):            -5 °C
```

</div>

<div class="pitfall">
<p>Ese <code>0</code> <strong>no es ninguna de las mediciones</strong>. Nunca hubo un <code>-5 &gt; 0</code>, así que el campeón inicial nunca fue reemplazado.</p>
</div>

<p class="callout">Inicializá con el <strong>primer valor real</strong>, no con un número inventado.</p>

</div>

<!-- En la unidad 07 esto se escribe `maximo = vector[0]`. Mismo razonamiento.
     Adelantarlo acá hace que allá no sorprenda. -->

---

<p class="eyebrow"><b>05</b><span>/</span>Patrones</p>

## Los tres, de memoria

<div class="body">

<div class="file" data-name="los tres patrones">

```js
let total = 0                        // ACUMULADOR
for (...) { total = total + valor }

let cuantos = 0                      // CONTADOR
for (...) { if (cond) { cuantos++ } }

let maximo = primerValor             // MÁXIMO
for (...) { if (v > maximo) { maximo = v } }
```

</div>

<p class="callout">Los tres tienen la misma forma:<br><strong>declarar antes · actualizar adentro · usar después</strong></p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Cuando no termina

---

<p class="eyebrow"><b>05</b><span>/</span>Infinitos</p>

## El bucle que no termina

<div class="body">

<div class="file" data-name="src/app.js">

```js
let i = 1

while (i <= 5) {
  console.log(i)
  // falta el i++
}
```

</div>

<p class="lead">Imprime <code>1</code> para siempre.</p>

<p class="statement">Para salir: <code>Ctrl + C</code></p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Infinitos</p>

## Las tres causas

<div class="body">

<ol class="enum">
<li><span><strong>Falta el incremento</strong> — <code>while</code> sin <code>i++</code></span></li>
<li><span><strong>Va para el lado equivocado</strong> — <code>i--</code> con la condición <code>i &lt;= 10</code></span></li>
<li><span><strong>La condición no puede ser falsa</strong> — <code>while (i &gt; 0)</code> con <code>i</code> que sólo crece</span></li>
</ol>

<div class="tip">
<p>Si el programa imprime miles de líneas o queda colgado sin devolver el cursor: <strong><code>Ctrl + C</code> y revisá el incremento.</strong> No está roto Node, está roto el bucle.</p>
</div>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Integrador</p>

## Todo junto

<div class="body">

<div class="file" data-name="src/app.js">

```js
const howMany = parseInt(prompt('¿Cuántas mediciones? '))
let total = 0

for (let i = 1; i <= howMany; i++) {
  const measured = parseFloat(prompt(`Medición ${i} [V]: `))
  total = total + measured
}

console.log(`Promedio: ${(total / howMany).toFixed(2)} V`)
```

</div>

<p class="lead">El bucle <strong>no sabe</strong> de antemano cuántas vueltas va a dar. Eso es lo que no se podía hacer copiando y pegando.</p>

</div>

---

<p class="eyebrow"><b>05</b><span>/</span>Cierre</p>

## Lo que hay que llevarse

<div class="body">

<ol class="enum">
<li><span><code>for</code> si sabés cuántas · <code>while</code> si depende · <code>do-while</code> si va al menos una.</span></li>
<li><span>Cuando algo no cierra: <strong>hacé la traza</strong>.</span></li>
<li><span>Acumulador, contador y máximo: <strong>declarar antes, actualizar adentro, usar después</strong>.</span></li>
<li><span>El máximo arranca con el <strong>primer valor real</strong>, no en cero.</span></li>
<li><span>¿No termina? <code>Ctrl + C</code> y mirá el incremento.</span></li>
</ol>

</div>

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Próxima clase · Unidad 06</p>

# Funciones

<div class="cover-meta">
<span>Parámetros</span><span class="sep">·</span>
<span>Valor de retorno</span><span class="sep">·</span>
<span><code>Math.random()</code></span>
</div>

<div class="cover-meta">
<span>Los programas de hoy, en la mitad de líneas.</span>
</div>
