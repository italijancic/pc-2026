---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 03</p>

# Variables y operadores

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Hoy</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span><code>let</code> y <code>const</code> — y por qué <strong>no</strong> usamos <code>var</code></span></li>
<li><span><strong>Convenciones</strong> de nombres</span></li>
<li><span><strong>Tipos</strong> de datos y <code>typeof</code></span></li>
<li><span>Operadores: <strong>aritméticos</strong> y de asignación</span></li>
<li><span>Operadores <strong>relacionales</strong> y <strong>lógicos</strong></span></li>
<li><span>Por qué <code>'20' + 5</code> da <code>'205'</code></span></li>
</ol>

<p class="tip">La clase pasada usamos variables sin explicarlas. Hoy vemos <strong>por qué</strong> se escriben así.</p>

</div>

<!-- 90 min. Ejemplos en vivo: unidades/03-variables-y-operadores/ejemplos/
     Lo que más importa que se lleven: === contra ==, y que && y || dan
     true/false (materia prima de la clase que viene). -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## Declarar variables

---

<p class="eyebrow"><b>03</b><span>/</span>Variables</p>

## <code>const</code>: el valor no se reasigna

<div class="body">

<div class="file" data-name="src/app.js">

```js
const nominalVoltage = 380

nominalVoltage = 220
```

</div>

<div class="out">

```bash
TypeError: Assignment to constant variable.
```

</div>

<p class="lead">El programa <strong>falla</strong>. Y eso es exactamente lo que queremos.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Variables</p>

## <code>let</code>: el valor puede cambiar

<div class="body">

<div class="file" data-name="src/app.js">

```js
let counter = 0
counter = counter + 1
counter += 1
counter++

console.log(counter)
```

</div>

<div class="out">

```bash
3
```

</div>

<p class="note-p">Las tres formas hacen lo mismo. <code>+=</code> y <code>++</code> son atajos.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Variables</p>

## La regla de la cátedra

<div class="body">

<p class="statement"><code>const</code> por defecto. <code>let</code> sólo si cambia.</p>

<div class="callout">
Cuando leés <code>const</code>, ya sabés que ese valor <strong>no se toca en todo el programa</strong>.
<small>Es una garantía del lenguaje: te ahorra rastrear el código para ver si alguien lo modificó.</small>
</div>

<p class="lead">En la práctica casi todo es <code>const</code>. <code>let</code> aparece en contadores y acumuladores — la unidad 05.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Qué imprime esto?

<p class="lead"><code>console.log(nombre)</code><br><code>var nombre = 'Ana'</code></p>

<!-- Casi todos dicen "error". Da undefined, y no avisa. Ahí está el problema
     de var: el undefined se propaga y el error aparece 20 líneas después. -->

---

<p class="eyebrow"><b>03</b><span>/</span>Variables</p>

## <code>var</code> no avisa

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">con var</span></p>

```js
console.log(nombre)
var nombre = 'Ana'
```

```bash
undefined
```

<p class="note-p">Sigue andando. El error aparece 20 líneas más abajo.</p>
</div>

<div>
<p><span class="good">con const</span></p>

```js
console.log(nombre)
const nombre = 'Ana'
```

```bash
ReferenceError: Cannot
access 'nombre' before
initialization
```

<p class="note-p">Falla acá, y te dice por qué.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Variables</p>

## Y se escapa de los bloques

<div class="body">

<div class="file" data-name="src/app.js">

```js
{
  const insideBlock = 'existo sólo acá adentro'
  console.log(insideBlock)
}

console.log(insideBlock)
```

</div>

<div class="out">

```bash
existo sólo acá adentro
ReferenceError: insideBlock is not defined
```

</div>

<p class="note-p">Con <code>const</code> y <code>let</code> la variable vive sólo entre las llaves donde nació. <code>var</code> se escapa y produce colisiones de nombres.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Variables</p>

## Las tres, comparadas

<div class="body">

| | `const` | `let` | `var` |
|--|:---:|:---:|:---:|
| ¿Se reasigna? | ❌ | ✅ | ✅ |
| ¿Respeta `{ }`? | ✅ | ✅ | ❌ |
| ¿Avisa si la usás antes? | ✅ | ✅ | ❌ |
| **¿La usamos?** | **por defecto** | **si cambia** | **no** |

<p class="note-p"><code>var</code> no está prohibido por el lenguaje: está prohibido <strong>en esta cátedra</strong>. Vas a verlo en tutoriales viejos; ahora sabés por qué no lo copiás.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## Cómo se nombran

---

<p class="eyebrow"><b>03</b><span>/</span>Convenciones</p>

## Tres convenciones

<div class="body">

<div class="cols cols-3">

<div class="card">
<h3>camelCase</h3>
<p>Variables y funciones</p>
<p><code>nominalVoltage</code></p>
<p><code>dailyHours</code></p>
</div>

<div class="card">
<h3>PascalCase</h3>
<p>Clases</p>
<p><code>ElectricMotor</code></p>
<p class="quiet">no las usamos en el curso</p>
</div>

<div class="card">
<h3>UPPER_SNAKE</h3>
<p>Constantes del problema</p>
<p><code>NOMINAL_VOLTAGE</code></p>
<p><code>TOLERANCE</code></p>
</div>

</div>

<p class="callout">Los <strong>identificadores en inglés</strong>; los textos que ve el usuario, <strong>en español</strong>.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Convenciones</p>

## El nombre es documentación

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Así no</span></p>

```js
const x = 380
const y = 4.2

console.log(x * y)
```

<p class="note-p">¿Qué es <code>x</code>? Hay que leer todo el programa.</p>
</div>

<div>
<p><span class="good">Así sí</span></p>

```js
const voltage = 380
const current = 4.2

console.log(voltage * current)
```

<p class="note-p">Se explica solo.</p>
</div>

</div>

<p class="lead">La prueba: si alguien lee <strong>una sola línea</strong>, ¿entiende qué es ese valor?</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Tipos de datos

---

<p class="eyebrow"><b>03</b><span>/</span>Tipos</p>

## Cinco tipos

<div class="body">

| Tipo | Qué guarda | Ejemplo |
|------|-----------|---------|
| `number` | Números, con o sin decimales | `220` · `4.2` |
| `string` | Texto | `'M-14'` |
| `boolean` | Verdadero o falso | `true` · `false` |
| `undefined` | Declarada, sin valor asignado | |
| `null` | Vacío **a propósito** | |

<p class="note-p"><code>220</code> y <code>4.2</code> son los dos <code>number</code>: <strong>no hay un tipo entero y otro decimal</strong>.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Tipos</p>

## <code>typeof</code>: tu herramienta de diagnóstico

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log(typeof 380)
console.log(typeof 'M-14')
console.log(typeof true)
console.log(typeof parseFloat('380'))
```

</div>

<div class="out">

```bash
number
string
boolean
number
```

</div>

<div class="tip">
<p>Cuando una cuenta da un resultado imposible, imprimí el <code>typeof</code> de lo que estás sumando. <strong>Nueve de cada diez veces, algo que creías número es texto.</strong></p>
</div>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Tipos</p>

## <code>undefined</code> no es <code>null</code>

<div class="body">

<div class="cols cols-2">

<div>
<p class="tag">undefined</p>
<p><strong>Nadie le asignó nada.</strong> Declaraste y no inicializaste.</p>

```js
let temperature
```
</div>

<div>
<p class="tag">null</p>
<p><strong>Vacío a propósito.</strong> Vos decidiste que acá no hay dato.</p>

```js
const noSensor = null
```
</div>

</div>

<div class="pitfall">
<p><code>typeof null</code> devuelve <code>'object'</code>, no <code>'null'</code>. Es un error del diseño original de JavaScript, de 1995, que nunca se corrigió para no romper la web entera. No hay nada que entender.</p>
</div>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## Operadores aritméticos

---

<p class="eyebrow"><b>03</b><span>/</span>Aritméticos</p>

## Seis operadores

<div class="body">

| Operador | Qué hace | `10` y `3` |
|:---:|---|:---:|
| `+` | Suma | `13` |
| `-` | Resta | `7` |
| `*` | Multiplicación | `30` |
| `/` | División | `3.333…` |
| `%` | **Resto** de la división | `1` |
| `**` | Potencia | `1000` |

<p class="note-p">Precedencia: primero <code>* / %</code>, después <code>+ -</code>. Como en matemática, y <strong>los paréntesis mandan</strong>.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Para qué sirve el resto de una división?

<p class="lead"><code>10 % 3</code> es <code>1</code>. ¿Y con eso qué hago?</p>

<!-- Parece académico. Resuelve dos cosas que van a usar todo el curso:
     paridad y agrupamientos. Y en la unidad 05 aparece en cada bucle. -->

---

<p class="eyebrow"><b>03</b><span>/</span>Aritméticos</p>

## El resto sirve para dos cosas

<div class="body">

<div class="file" data-name="src/app.js">

```js
const measurements = 30

console.log(measurements % 2 === 0)   // ¿es par?

const sensors = 17
console.log(sensors % 5)              // de 5 en 5, ¿cuántos sobran?
```

</div>

<div class="out">

```bash
true
2
```

</div>

<p class="lead">Un número es <strong>par</strong> si al dividirlo por 2 no sobra nada.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Comparar

---

<p class="eyebrow"><b>03</b><span>/</span>Relacionales</p>

## Siempre devuelven <code>true</code> o <code>false</code>

<div class="body">

<div class="file" data-name="src/app.js">

```js
const measured = 219.4
const nominal = 220

console.log(measured < nominal)
console.log(measured === nominal)
```

</div>

<div class="out">

```bash
true
false
```

</div>

<p class="callout">Un operador relacional <strong>no decide nada</strong>: sólo responde una pregunta. <small>Quien decide es el <code>if</code> de la clase que viene.</small></p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Es <code>'5'</code> igual a <code>5</code>?

<p class="lead">El texto <code>'5'</code> contra el número <code>5</code>.</p>

<!-- Depende del operador que uses, y ahí está el problema.
     === dice false. == dice true. Dejarlos discutir. -->

---

<p class="eyebrow"><b>03</b><span>/</span>Relacionales</p>

## Depende de cuál uses

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('5' === 5)
console.log('5' == 5)
```

</div>

<div class="out">

```bash
false
true
```

</div>

<div class="pitfall">
<p><code>==</code> <strong>convierte los tipos por su cuenta</strong> antes de comparar. Cómodo hasta que comparás algo que vino de un <code>prompt()</code> — que es texto — con un número, y el bug aparece tres líneas más abajo cuando intentás sumarlos.</p>
</div>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Relacionales</p>

## Regla de la cátedra

<div class="body">

<p class="statement">Siempre <code>===</code> y <code>!==</code></p>

<p class="lead">Comparan <strong>valor y tipo</strong>, sin conversiones a tus espaldas.</p>

<div class="pitfall">
<p>Usar <code>==</code> <strong>se corrige como error grave</strong>. Es lo que más se cobra en el parcial.</p>
</div>

</div>

<!-- Insistir. Es el error que más vuelve, año tras año. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 6</p>

## Combinar condiciones

---

<p class="eyebrow"><b>03</b><span>/</span>Lógicos</p>

## Tres operadores

<div class="body">

| Operador | Nombre | Da `true` cuando… |
|:---:|---|---|
| `&&` | Y | **las dos** son verdaderas |
| `\|\|` | O | **al menos una** es verdadera |
| `!` | No | invierte: `!true` es `false` |

<p class="note-p">Precedencia: <code>!</code> primero, después <code>&&</code>, después <code>\|\|</code>. 👉 <strong>Poné paréntesis.</strong></p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Lógicos</p>

## <code>&&</code> — un caso real

<div class="body">

<div class="file" data-name="src/app.js">

```js
const NOMINAL_VOLTAGE = 380
const TOLERANCE = 0.05
const measured = 372.5

const lowerLimit = NOMINAL_VOLTAGE * (1 - TOLERANCE)
const upperLimit = NOMINAL_VOLTAGE * (1 + TOLERANCE)

console.log(measured >= lowerLimit && measured <= upperLimit)
```

</div>

<div class="out">

```bash
true
```

</div>

<p class="note-p">380 V con ±5 %. Las <strong>dos</strong> condiciones tienen que cumplirse → <code>&&</code>.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Lógicos</p>

## <code>||</code> — alcanza con una

<div class="body">

<div class="file" data-name="src/app.js">

```js
const hours = 4200
const temperature = 91

// A revisión si supera 10.000 h O si pasó los 85 °C
console.log(hours > 10000 || temperature > 85)
```

</div>

<div class="out">

```bash
true
```

</div>

<p class="lead">Las horas no llegan, pero la temperatura sí. Con una alcanza.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 7</p>

## La trampa de los tipos

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## <code>'20' + 5</code> da <code>'205'</code>. ¿Y <code>'20' - 5</code>?

<p class="lead">Lo vimos la clase pasada con <code>prompt()</code>.</p>

<!-- Casi todos dicen que también falla o que da error. Da 15.
     Ahí está la clave: el + es el operador raro. -->

---

<p class="eyebrow"><b>03</b><span>/</span>Coerción</p>

## El <code>+</code> es el raro

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('20' + 5)
console.log('20' - 5)
console.log('20' * 5)
```

</div>

<div class="out">

```bash
205
15
100
```

</div>

<p class="lead">El <code>+</code> sirve para <strong>dos cosas</strong>: sumar números y pegar textos. Si un lado es texto, gana el pegado.</p>

<p class="note-p">Los demás no tienen ese doble uso: convierten y calculan.</p>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Coerción</p>

## De ahí sale la regla de la clase pasada

<div class="body">

<p class="statement">Si el dato es un número, convertilo</p>

<div class="file" data-name="src/app.js">

```js
const measured = parseFloat(prompt('Tensión [V]: '))
```

</div>

<p class="lead"><code>prompt()</code> no está roto: devuelve <code>string</code>, y con <code>+</code> el texto gana.</p>

<div class="pitfall">
<p><code>parseFloat('cuatro')</code> devuelve <code>NaN</code> — <em>Not a Number</em>. Es de tipo <code>number</code>, y <strong>contagia toda la cuenta</strong>. Si un resultado sale <code>NaN</code>, buscá el <code>parseFloat</code> que recibió texto.</p>
</div>

</div>

---

<p class="eyebrow"><b>03</b><span>/</span>Integrador</p>

## Todo junto

<div class="body">

<div class="file" data-name="src/app.js">

```js
const NOMINAL_VOLTAGE = 380
const TOLERANCE = 0.05

const measured = parseFloat(prompt('Tensión medida [V]: '))
const lowerLimit = NOMINAL_VOLTAGE * (1 - TOLERANCE)
const upperLimit = NOMINAL_VOLTAGE * (1 + TOLERANCE)

console.log(`En rango: ${measured >= lowerLimit && measured <= upperLimit}`)
```

</div>

<div class="out">

```bash
Tensión medida [V]: 372.5
En rango: true
```

</div>

</div>

<!-- El ejemplo 08 agrega la desviación en %. Correrlo en vivo con 372.5 y
     con 405, para que vean el true y el false. -->

---

<p class="eyebrow"><b>03</b><span>/</span>Cierre</p>

## Lo que hay que llevarse

<div class="body">

<ol class="enum">
<li><span><code>const</code> por defecto, <code>let</code> si cambia, <code>var</code> <strong>nunca</strong>.</span></li>
<li><span><code>camelCase</code> en <strong>inglés</strong> para variables; <code>UPPER_SNAKE_CASE</code> para constantes.</span></li>
<li><span><code>typeof</code> es la herramienta cuando algo no cierra.</span></li>
<li><span><strong>Siempre <code>===</code></strong>. Nunca <code>==</code>.</span></li>
<li><span><code>&&</code> y <code>\|\|</code> devuelven <code>true</code>/<code>false</code>: son la materia prima de la clase que viene.</span></li>
</ol>

</div>

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Próxima clase · Unidad 04</p>

# Condicionales

<div class="cover-meta">
<span><code>if</code> · <code>else if</code> · <code>else</code></span><span class="sep">·</span>
<span><code>switch-case</code></span>
</div>

<div class="cover-meta">
<span>Hoy imprimimos <code>true</code> y <code>false</code>. La próxima, deciden.</span>
</div>
