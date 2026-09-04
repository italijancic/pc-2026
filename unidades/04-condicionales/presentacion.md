---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 04</p>

# Condicionales

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>04</b><span>/</span>Hoy</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span><code>if</code> — ejecutar <strong>sólo si</strong></span></li>
<li><span><code>if</code> / <code>else</code> — dos caminos</span></li>
<li><span><code>else if</code> — varios casos, y por qué <strong>el orden importa</strong></span></li>
<li><span><code>switch-case</code> y el <code>break</code> que falta</span></li>
<li><span>Cuál de los dos conviene en cada situación</span></li>
</ol>

<p class="tip"><strong>Nada de hoy es nuevo del todo.</strong> Las condiciones son las de la clase pasada. Lo que cambia es que ahora <strong>deciden</strong>.</p>

</div>

<!-- 90 min. Ejemplos: unidades/04-condicionales/ejemplos/
     Lo que más importa: el orden de los else if. Es el error que clasifica
     mal SIN fallar, y el que más se cobra. -->

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## La clase pasada calculamos esto. ¿Y después qué?

<p class="lead"><code>measured &gt;= lowerLimit && measured &lt;= upperLimit</code></p>

<!-- Respuesta: nada. Lo imprimíamos y listo. Hoy esa respuesta gobierna
     qué líneas se ejecutan. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## Ejecutar sólo si

---

<p class="eyebrow"><b>04</b><span>/</span>if</p>

## La forma mínima

<div class="body">

<div class="file" data-name="src/app.js">

```js
const temperature = 91

if (temperature > 85) {
  console.log('Temperatura FUERA DE RANGO')
}

console.log('Fin del control')
```

</div>

<div class="out">

```bash
Temperatura FUERA DE RANGO
Fin del control
```

</div>

<p class="note-p">Con 70 °C la primera línea <strong>no se imprime</strong>: el programa salta directo al final.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>if</p>

## Que se lea como una oración

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Cuesta leerlo</span></p>

```js
if (measured >= lower &&
    measured <= upper) {
  console.log('OK')
}
```
</div>

<div>
<p><span class="good">Se lee solo</span></p>

```js
const isWithinRange =
  measured >= lower &&
  measured <= upper

if (isWithinRange) {
  console.log('OK')
}
```
</div>

</div>

<p class="lead">Guardá la condición en una variable con nombre. El <code>if</code> queda de una línea.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>if</p>

## Las llaves van siempre

<div class="body">

<div class="file" data-name="src/app.js">

```js
if (temperature > 85) console.log('Alarma')
  console.log('Se registró el evento')
```

</div>

<div class="pitfall">
<p>La segunda línea está <strong>fuera</strong> del <code>if</code>, por más que la indentación diga lo contrario. Se imprime <strong>siempre</strong>, aunque la temperatura esté bien.</p>
</div>

<p class="lead">JavaScript te deja omitirlas. <strong>En la cátedra no.</strong> Con llaves, el error no puede ocurrir.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## Dos caminos

---

<p class="eyebrow"><b>04</b><span>/</span>if / else</p>

## Uno u otro, siempre

<div class="body">

<div class="file" data-name="src/app.js">

```js
if (measured > UPPER_LIMIT) {
  console.log('Tensión ALTA')
} else {
  console.log('Dentro del límite')
}
```

</div>

<p class="lead">El <code>else</code> <strong>no lleva condición</strong>: es «en cualquier otro caso».</p>

<div class="callout">
Con <code>if</code> / <code>else</code> es <strong>imposible</strong> que no se imprima nada. Uno de los dos se ejecuta sí o sí.
</div>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Varios casos

---

<p class="eyebrow"><b>04</b><span>/</span>else if</p>

## Clasificar una medición

<div class="body">

<div class="file" data-name="src/app.js">

```js
const measured = 372.5

if (measured < 361) {
  console.log('BAJA')
} else if (measured <= 399) {
  console.log('NORMAL')
} else {
  console.log('ALTA')
}
```

</div>

<div class="out">

```bash
NORMAL
```

</div>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>else if</p>

## Sólo se ejecuta UNA rama

<div class="body">

<p class="statement">Se evalúan de arriba hacia abajo.<br>Apenas una da <code>true</code>, se ejecuta y <strong>se sale</strong>.</p>

<p class="lead">Por eso la segunda condición es <code>measured &lt;= 399</code> y no <code>measured &gt;= 361 && measured &lt;= 399</code>.</p>

<div class="callout">
Si el programa llegó a la segunda rama, <strong>ya sabemos</strong> que no es menor a 361: la primera dio <code>false</code>. <small>Repetir esa mitad es ruido.</small>
</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Mismos rangos, orden invertido. ¿Qué imprime con 300 V?

<p class="lead"><code>if (measured &lt;= 399)</code> … <code>else if (measured &lt; 361)</code> …</p>

<!-- Casi todos dicen BAJA, que es lo correcto conceptualmente.
     Imprime NORMAL. Dejarlos ver por qué antes de explicar. -->

---

<p class="eyebrow"><b>04</b><span>/</span>else if</p>

## El orden importa muchísimo

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Así no</span></p>

```js
if (measured <= 399) {
  console.log('NORMAL')
} else if (measured < 361) {
  console.log('BAJA')
}
```

<p class="note-p"><code>300 &lt;= 399</code> da <code>true</code>: entra acá. La segunda <strong>nunca se evalúa</strong>.</p>
</div>

<div>
<p><span class="good">Así sí</span></p>

```js
if (measured < 361) {
  console.log('BAJA')
} else if (measured <= 399) {
  console.log('NORMAL')
}
```

<p class="note-p">Rangos <strong>de menor a mayor</strong>, sin saltear.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>else if</p>

## Y lo peor es que no falla

<div class="body">

<p class="statement">No hay error. No hay aviso.</p>

<p class="lead">El programa clasifica mal <strong>siempre</strong>, y te enterás cuando alguien lee el informe.</p>

<div class="pitfall">
<p><strong>La regla:</strong> de lo más específico a lo más general. Con rangos numéricos, <strong>ordenados</strong> de menor a mayor. Si los escribís en orden, el problema no puede aparecer.</p>
</div>

</div>

<!-- Este es EL error de la unidad. Insistir. En el parcial vuelve siempre. -->

---

<p class="eyebrow"><b>04</b><span>/</span>else if</p>

## Poné el <code>else</code> final

<div class="body">

<div class="file" data-name="src/app.js">

```js
if (temperature > 85) {
  console.log('ALARMA')
} else if (temperature > 70) {
  console.log('ATENCIÓN')
}
```

</div>

<p class="lead">Con 50 °C, este programa <strong>no imprime nada</strong>.</p>

<p class="note-p">A veces es lo que querés. Casi siempre es un olvido. El <code>else</code> te obliga a pensar qué pasa con los casos que no contemplaste.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>Anidar</p>

## Un <code>if</code> adentro de otro

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Anidado</span></p>

```js
if (isEnergized) {
  if (temperature > 85) {
    console.log('Alarma')
  }
}
```
</div>

<div>
<p><span class="good">Combinado</span></p>

```js
if (isEnergized &&
    temperature > 85) {
  console.log('Alarma')
}
```
</div>

</div>

<p class="callout">Si un <code>if</code> anidado <strong>no tiene <code>else</code></strong>, se puede reemplazar por <code>&&</code>.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## <code>switch-case</code>

---

<p class="eyebrow"><b>04</b><span>/</span>switch</p>

## Cuando la cadena se vuelve repetitiva

<div class="body">

<div class="cols cols-2">

<div>

```js
if (code === 'P') {
  console.log('Preventivo')
} else if (code === 'C') {
  console.log('Correctivo')
} else if (code === 'D') {
  console.log('Predictivo')
}
```

</div>

<div>

```js
switch (code) {
  case 'P':
    console.log('Preventivo')
    break
  case 'C':
    console.log('Correctivo')
    break
}
```

</div>

</div>

<p class="lead">Misma variable, valores exactos, muchos casos. Ahí <code>switch</code> se lee mejor.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>switch</p>

## Las piezas

<div class="body">

| Pieza | Qué hace |
|-------|----------|
| `switch (variable)` | El valor que se va a comparar |
| `case valor:` | Si coincide, se ejecuta **desde acá** |
| `break` | **Corta** y sale del `switch` |
| `default:` | Si no coincidió ningún `case` |

<p class="note-p">El <code>default</code> es el equivalente del <code>else</code>: el caso que no contemplaste.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Si le sacamos los <code>break</code>, ¿qué imprime?

<p class="lead">El código entra por <code>case 'P'</code>. ¿Y después?</p>

<!-- Casi todos dicen "sólo Preventivo". Imprime los tres.
     Es el fall-through: sigue de largo SIN volver a comparar. -->

---

<p class="eyebrow"><b>04</b><span>/</span>switch</p>

## Sigue de largo

<div class="body">

<div class="file" data-name="src/app.js">

```js
switch (code) {          // code vale 'P'
  case 'P':
    console.log('Preventivo')
  case 'C':
    console.log('Correctivo')
  default:
    console.log('Desconocido')
}
```

</div>

<div class="out">

```bash
Preventivo
Correctivo
Desconocido
```

</div>

<p class="note-p">Entró por <code>'P'</code> y, sin <code>break</code>, siguió <strong>sin volver a comparar</strong>.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>switch</p>

## <code>switch</code> compara con <code>===</code>

<div class="body">

<div class="file" data-name="src/app.js">

```js
const option = prompt('Opción: ')   // devuelve '2', no 2

switch (option) {
  case 2:      // nunca coincide: '2' no es 2
  case '2':    // así sí
}
```

</div>

<div class="pitfall">
<p><strong>Y por eso no sirve para rangos.</strong> <code>case &gt; 85:</code> no existe. Para rangos, <code>else if</code>. Siempre.</p>
</div>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>Cuál uso</p>

## <code>if</code> o <code>switch</code>

<div class="body">

| `if` / `else if` | `switch` |
|---|---|
| Comparás **rangos** | Comparás **valores exactos** |
| Cada rama pregunta otra cosa | Todas miran **la misma** variable |
| Combinás con `&&` o `\|\|` | Lista de opciones cerrada |
| Dos o tres casos | Cuatro o más |

<p class="callout">En la duda, <code>if</code>. <small>Todo lo que hace <code>switch</code> se puede escribir con <code>else if</code>; al revés, no.</small></p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Comparar lo que se tipea

---

<p class="eyebrow"><b>04</b><span>/</span>prompt</p>

## <code>Si</code> no es <code>si</code>

<div class="body">

<div class="file" data-name="src/app.js">

```js
const answer = prompt('¿Pasó? (si/no): ').toLowerCase()

if (answer === 'si') {
  console.log('Aprobada')
} else {
  console.log('Rechazada')
}
```

</div>

<p class="lead">Sin <code>.toLowerCase()</code>, quien escriba <code>Si</code> o <code>SI</code> entra por el <code>else</code>.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Leo 100 y 85 con <code>prompt</code>. ¿Cuál es mayor?

<p class="lead"><code>if (first &gt; second)</code></p>

<!-- Dice que 85 es mayor que 100. Los dos son TEXTO, así que compara
     letra por letra: '1' va antes que '8' en el diccionario. -->

---

<p class="eyebrow"><b>04</b><span>/</span>prompt</p>

## Dos textos se comparan como el diccionario

<div class="body">

<div class="file" data-name="src/app.js">

```js
const first = prompt('Primera: ')     // '100'
const second = prompt('Segunda: ')    // '85'

console.log(first > second)
```

</div>

<div class="out">

```bash
false
```

</div>

<div class="pitfall">
<p>Compara <code>'1'</code> contra <code>'8'</code>, letra por letra. <strong>Con <code>parseFloat</code> en los dos, da lo correcto.</strong> Y ojo: <code>'9' &gt; '85'</code> da <code>true</code> — el resultado correcto, por casualidad. Por eso es tan difícil de encontrar.</p>
</div>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>Integrador</p>

## Todo junto

<div class="body">

<div class="file" data-name="src/app.js">

```js
const measured = parseFloat(prompt('Tensión medida [V]: '))
const lowerLimit = NOMINAL_VOLTAGE * (1 - TOLERANCE)
const upperLimit = NOMINAL_VOLTAGE * (1 + TOLERANCE)

if (measured < lowerLimit) {
  console.log('BAJA — revisar la acometida')
} else if (measured <= upperLimit) {
  console.log('NORMAL')
} else {
  console.log('ALTA — riesgo para los equipos')
}
```

</div>

<p class="note-p">Es el ejemplo 07. Correrlo con 300, 372.5 y 405 para ver las tres ramas.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>Cierre</p>

## Las tres reglas que más te van a salvar

<div class="body">

<ol class="enum">
<li><span>🪜 <strong>Los rangos, en orden.</strong> De menor a mayor, sin saltear.</span></li>
<li><span>🛑 <strong>Un <code>break</code> por <code>case</code>.</strong></span></li>
<li><span>🔒 <strong>Llaves siempre</strong>, aunque sea una sola línea.</span></li>
</ol>

<p class="callout">Y la de siempre: <strong><code>parseFloat</code></strong> antes de comparar números.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Cierre</p>

## Corregir código ajeno

<!-- INTEGRADOR DE LAS 4 UNIDADES. 20 min, de a dos.
     Está en ejemplos/09-corregir-el-codigo.js — que lo abran y lo CORRAN
     antes de leerlo.
     Al revelar, pedir manos por cada error: "¿quién encontró el 11?".
     Ese conteo es el diagnóstico: los que junten pocas manos son los temas
     a reforzar antes del parcial. Anotalos. -->

---

<p class="eyebrow"><b>04</b><span>/</span>Cierre</p>

## La consigna

<div class="body">

<p class="lead">Un compañero te pasa este programa para que lo mires antes de entregarlo. Verifica si una tensión está dentro de <strong>±5 % sobre 380 V</strong> y decide una acción de mantenimiento.</p>

<p class="statement">¿Lo aprobás?</p>

<div class="cols cols-3">

<div class="card">
<h3>Declaraciones<br>y nombres</h3>
</div>

<div class="card">
<h3>Buenas<br>prácticas</h3>
</div>

<div class="card">
<h3>Decisiones</h3>
</div>

</div>

<p class="note-p">Las tres cosas que se miran al revisar cualquier código.</p>

</div>

<!-- NO decirles que está mal escrito ni cuántos errores hay: eso lo tienen
     que determinar ELLOS. Es la diferencia entre «encontrá los 15 errores»
     y una revisión de verdad, donde nadie te avisa que hay problemas.
     Está en ejemplos/09-corregir-el-codigo.js -->

---

<p class="eyebrow"><b>04</b><span>/</span>Cierre</p>

## El programa

<div class="body">

<div class="file" data-name="ejemplos/09-corregir-el-codigo.js">

```bash
git pull
```

</div>

<p class="lead">Son 32 líneas. Abrilo <strong>entero</strong> en VSCode: para revisar código hay que verlo completo, no de a pedazos.</p>

<p class="note-p">Copiá el contenido a <code>src/app.js</code> de tu proyecto y corré <code>npm run dev</code>.</p>

</div>

---

<p class="eyebrow"><b>04</b><span>/</span>Cierre</p>

## Antes de leerlo, corrélo

<div class="body">

<div class="out">

```bash
Tensión medida [V]: 300
Código de servicio: P
```

</div>

<p class="statement">¿La salida tiene sentido?</p>

<p class="note-p">Revisar código no es sólo leerlo. Un programa puede estar impecable a la vista y devolver cualquier cosa.</p>

</div>

<!-- NO mostrar la salida: que la vean ellos al ejecutar.
     Si alguno no puede correrlo, recién ahí proyectarlo en vivo — pero
     después de que lo hayan intentado.
     Con 300 y P sale: límites 361 a 361, NORMAL, y Preventivo + Correctivo
     juntos. El absurdo es el gancho. -->

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Próxima clase · Unidad 05</p>

# Bucles

<div class="cover-meta">
<span><code>for</code></span><span class="sep">·</span>
<span><code>while</code></span><span class="sep">·</span>
<span><code>do-while</code></span>
</div>

<div class="cover-meta">
<span>Hoy procesás una medición. La próxima, treinta.</span>
</div>
