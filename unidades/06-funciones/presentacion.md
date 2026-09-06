---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 06</p>

# Funciones

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Hoy</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span>Empaquetar código con un <strong>nombre</strong></span></li>
<li><span><strong>Parámetros</strong> y <code>return</code></span></li>
<li><span>Por qué las variables de adentro <strong>no se ven</strong> afuera</span></li>
<li><span><strong>JSDoc</strong>: documentar como se pide en el curso</span></li>
<li><span><code>Math.random()</code> y <code>rndInt(min, max)</code></span></li>
</ol>

<p class="tip">La clase pasada te quedaron programas largos y repetitivos. <strong>Hoy se paga esa promesa.</strong></p>

</div>

<!-- 90 min. Ejemplos: unidades/06-funciones/ejemplos/
     Lo que más importa: rndInt() de memoria, y que una función trabaja con
     SUS parámetros. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## El problema

---

<p class="eyebrow"><b>06</b><span>/</span>El problema</p>

## La misma cuenta, tres veces

<div class="body">

<div class="file" data-name="src/app.js">

```js
const deviation1 = (measured1 - 380) / 380 * 100
console.log(`Tablero 1: ${deviation1.toFixed(2)} %`)

const deviation2 = (measured2 - 380) / 380 * 100
console.log(`Tablero 2: ${deviation2.toFixed(2)} %`)

const deviation3 = (measured3 - 380) / 380 * 100
console.log(`Tablero 3: ${deviation3.toFixed(2)} %`)
```

</div>

<p class="note-p">El <code>380</code> está escrito tres veces. La fórmula también.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Si mañana cambia la fórmula, ¿cuántos lugares tocás?

<p class="lead">¿Y cuántas probabilidades hay de que te olvides de uno?</p>

<!-- Copiar y pegar es exactamente cómo aparecieron los errores de las
     revisiones de código: alguien copia la línea y no cambia un número. -->

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Esto ya lo conocen: <code>f(x) = 2x + 1</code>

<p class="lead">¿Qué es una función, en matemática?</p>

<!-- Dejarlos contestar. Van a decir «una regla que relaciona dos conjuntos»,
     o algo cercano. Sacarles las palabras: dominio, imagen, regla de
     asignación. Todo lo de hoy ya lo tienen, en otro campo. -->

---

<p class="eyebrow"><b>06</b><span>/</span>El puente</p>

## La misma idea, otra notación

<div class="body">

<div class="cols cols-2">

<div>
<p class="tag">Análisis</p>

$$f(x) = 2x + 1$$

<p class="note-p">Una <strong>regla</strong> que a cada valor del <strong>dominio</strong> le asigna uno de la <strong>imagen</strong>.</p>
</div>

<div>
<p class="tag">JavaScript</p>

```js
const f = (x) => 2 * x + 1
```

<p class="note-p">El mismo concepto, con paréntesis y una flecha.</p>
</div>

</div>

<p class="lead">No estamos aprendiendo algo nuevo: estamos <strong>escribiéndolo distinto</strong>.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>El puente</p>

## Pieza por pieza

<div class="body">

| En matemática | En programación |
|---|---|
| $f$ , el nombre | el nombre de la función |
| $x$ , la variable independiente | el **parámetro** |
| la regla $2x + 1$ | el **cuerpo** |
| **evaluar** $f(3)$ | **llamar** `f(3)` |
| el valor $f(3) = 7$ | lo que entrega el `return` |
| el **dominio** | los valores que tiene sentido pasarle |

<p class="note-p">Y las de varias variables también: <code>P(V, I) = V · I</code> es <code>power(voltage, current)</code>.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>El puente</p>

## Definir no es evaluar

<div class="body">

<p class="statement">Escribir <code>f(x) = 2x + 1</code> en el pizarrón<br>no calcula nada</p>

<p class="lead">Es una <strong>definición</strong>. Recién cuando escribís <code>f(3)</code> se hace la cuenta.</p>

<div class="callout">
En programación es <strong>idéntico</strong>: declarar una función no la ejecuta. Recién al <strong>llamarla</strong> corre el cuerpo.
</div>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>El puente</p>

## Dónde se rompe la analogía

<div class="body">

<ol class="enum">
<li><span>Puede <strong>no devolver nada</strong> — <code>printHeader()</code> sólo imprime.</span></li>
<li><span>Puede <strong>tener efectos</strong> — <code>console.log</code> cambia la pantalla.</span></li>
<li><span>Puede devolver algo <strong>distinto cada vez</strong>.</span></li>
</ol>

<div class="pitfall">
<p>Hoy vas a escribir <code>rndInt(1, 6)</code>, que con los mismos argumentos devuelve valores distintos. <strong>Eso no es una función matemática:</strong> la definición exige un solo valor por cada elemento del dominio.</p>
</div>

</div>

<!-- Volver acá cuando aparezca rndInt, al final de la clase. Cierra el arco. -->

---

<p class="eyebrow"><b>06</b><span>/</span>El puente</p>

## Funciones puras

<div class="body">

<p class="lead">Las que <strong>sí</strong> cumplen: mismos argumentos, mismo resultado, sin efectos.</p>

<div class="file" data-name="src/app.js">

```js
power(380, 4.2)   // 1596, siempre
```

</div>

<p class="callout">Son las más fáciles de probar y de reutilizar.<br><strong>Cuando puedas elegir, escribí funciones puras:</strong> <small>dejá el <code>console.log</code> y el azar en el programa principal.</small></p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## Declarar una función

---

<p class="eyebrow"><b>06</b><span>/</span>Declarar</p>

## Una sola vez

<div class="body">

<div class="file" data-name="src/app.js">

```js
const deviation = (measured, nominal) => {
  return (measured - nominal) / nominal * 100
}

console.log(deviation(372.5, 380).toFixed(2))
```

</div>

<div class="out">

```bash
-1.97
```

</div>

<p class="note-p">Declararla <strong>no ejecuta nada</strong>. Es escribir la receta. Recién al <strong>llamarla</strong> se ejecuta el cuerpo.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Declarar</p>

## Cómo se lee

<div class="body">

<div class="file" data-name="src/app.js">

```js
const deviation = (measured, nominal) => {
//    ↑              ↑                  ↑
//    |              |                  └─ el cuerpo, entre llaves
//    |              └─ parámetros: los datos que necesita
//    └─ el nombre con el que la vas a llamar
}
```

</div>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Declarar</p>

## La forma corta

<div class="body">

<p class="lead">Si el cuerpo es <strong>una sola expresión que se devuelve</strong>, se omiten las llaves y el <code>return</code>.</p>

<div class="file" data-name="src/app.js">

```js
const isEven = (n) => n % 2 === 0
const toFahrenheit = (celsius) => celsius * 9 / 5 + 32
```

</div>

<p class="note-p">Si entra cómoda en una línea, la forma corta. Si hay más de una instrucción, llaves y <code>return</code>. <strong>La legibilidad manda.</strong></p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Declarar</p>

## Y la forma que NO usamos

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">tradicional</span></p>

```js
function deviation (m, n) {
  return (m - n) / n * 100
}
```

<p class="note-p">La vas a ver en tutoriales y en código viejo.</p>
</div>

<div>
<p><span class="good">arrow</span></p>

```js
const deviation = (m, n) => {
  return (m - n) / n * 100
}
```

<p class="note-p">Es la de la cátedra.</p>
</div>

</div>

<p class="lead">Hacen exactamente lo mismo. La tradicional la ves para <strong>reconocerla</strong>, no para usarla.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Parámetros y <code>return</code>

---

<p class="eyebrow"><b>06</b><span>/</span>Parámetros</p>

## Dos palabras parecidas

<div class="body">

<div class="cols cols-2">

<div>
<p class="tag">Parámetro</p>
<p>El nombre en la <strong>declaración</strong>. Un hueco a llenar.</p>

```js
const power =
  (voltage, current) => ...
```
</div>

<div>
<p class="tag">Argumento</p>
<p>El <strong>valor concreto</strong> que pasás al llamarla.</p>

```js
power(380, 4.2)
```
</div>

</div>

<div class="pitfall">
<p><strong>El orden importa.</strong> <code>deviation(380, 372.5)</code> no es lo mismo que <code>deviation(372.5, 380)</code>: da <code>2.01 %</code> en vez de <code>-1.97 %</code>, sin ningún error.</p>
</div>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>return</p>

## Devuelve <strong>y</strong> termina

<div class="body">

<div class="file" data-name="src/app.js">

```js
const classify = (measured) => {
  if (measured < 361) {
    return 'BAJA'
  }
  if (measured <= 399) {
    return 'NORMAL'
  }
  return 'ALTA'
}
```

</div>

<p class="lead">No hacen falta los <code>else</code>: como el <code>return</code> <strong>corta</strong>, si llegaste a la segunda pregunta es porque la primera dio <code>false</code>.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>return</p>

## Lo que devuelve, hay que usarlo

<div class="body">

<div class="file" data-name="src/app.js">

```js
deviation(372.5, 380)                    // se calcula y se tira

const result = deviation(372.5, 380)     // se guarda

console.log(deviation(372.5, 380))       // se usa directo
```

</div>

<p class="note-p">La primera línea no da error. Simplemente hace la cuenta y la descarta.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Qué devuelve una función que no tiene <code>return</code>?

<p class="lead"><code>const x = printHeader('TAB-3')</code></p>

<!-- undefined. Está perfecto que una función sólo IMPRIMA y no devuelva nada
     — pero entonces no intentes usar su resultado. -->

---

<p class="eyebrow"><b>06</b><span>/</span>return</p>

## Funciones que sólo hacen

<div class="body">

<div class="file" data-name="src/app.js">

```js
const printHeader = (panelId) => {
  console.log('─────────────────')
  console.log(`Tablero ${panelId}`)
  console.log('─────────────────')
}
```

</div>

<p class="lead">Está perfecto que no devuelvan nada. Pero su resultado es <code>undefined</code>: no intentes usarlo.</p>

<div class="pitfall">
<p><strong>Qué se puede devolver:</strong> un valor primitivo — número, texto, booleano — y desde la unidad 07, un vector. <strong>Objetos y JSON no.</strong> Si necesitás devolver tres cosas, son tres funciones.</p>
</div>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Ámbito</p>

## Lo de adentro no se ve

<div class="body">

<div class="file" data-name="src/app.js">

```js
const power = (voltage, current) => {
  const result = voltage * current
  return result
}

console.log(result)
```

</div>

<div class="out">

```bash
ReferenceError: result is not defined
```

</div>

<p class="callout">Y eso es <strong>bueno</strong>: podés usar <code>result</code>, <code>i</code> o <code>total</code> adentro sin miedo a pisar nada de afuera.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Ámbito</p>

## La regla

<div class="body">

<p class="statement">Una función trabaja con<br><strong>sus parámetros</strong></p>

<p class="lead">Si necesita un dato, <strong>se lo pasás</strong>. No lo lee de afuera.</p>

<p class="note-p">Una función que lee variables del programa principal deja de ser reutilizable: sólo sirve en ese programa, con esos nombres.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## JSDoc

---

<p class="eyebrow"><b>06</b><span>/</span>JSDoc</p>

## Toda función lleva uno

<div class="body">

<div class="file" data-name="src/app.js">

```js
/**
 * Calcula la desviación porcentual respecto del valor nominal.
 * @param {number} measured - Valor medido
 * @param {number} nominal - Valor nominal de referencia
 * @returns {number} Desviación en porcentaje
 */
const deviation = (measured, nominal) => (measured - nominal) / nominal * 100
```

</div>

<p class="note-p">Primera línea: <strong>qué hace</strong>. Un <code>@param</code> por parámetro. Un <code>@returns</code>. <strong>Se corrige.</strong></p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>JSDoc</p>

## Y se paga solo

<div class="body">

<p class="lead">En VSCode, cuando escribís <code>deviation(</code> te muestra la descripción y los parámetros en un cartelito.</p>

<div class="cols cols-2">

<div>
<p class="tag">Nombres</p>
<p><code>isEven</code>, <code>hasAlarm</code> para las que devuelven <strong>booleano</strong>.</p>
</div>

<div>
<p class="tag">Verbos</p>
<p><code>calculateAverage</code>, <code>convertTemperature</code> para las que <strong>calculan</strong>.</p>
</div>

</div>

<p class="note-p">Si el nombre de una función necesita un <strong>«y»</strong>, son dos funciones.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Números aleatorios

---

<p class="eyebrow"><b>06</b><span>/</span>random</p>

## <code>Math.random()</code>

<div class="body">

<div class="out">

```bash
0.7339461987959066
0.0704937964111689
0.8267381760766475
```

</div>

<p class="lead">Decimales entre <strong>0 y 1</strong>. Incluye el 0, <strong>nunca llega al 1</strong>.</p>

<p class="note-p">Así solo no sirve de mucho: nadie mide tensiones entre 0 y 1. Hay que <strong>estirarlo</strong>.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cómo saco un número entero del 1 al 6?

<p class="lead">Tenés <code>Math.random()</code>, que da decimales entre 0 y 1.</p>

<!-- Tres pasos: estirar, recortar, correr. Que lo intenten antes.
     El paso que nadie adivina es el + 1 del rango. -->

---

<p class="eyebrow"><b>06</b><span>/</span>rndInt</p>

## Tres pasos

<div class="body">

<ol class="enum">
<li><span><strong>Estirar</strong> — <code>Math.random() * (max - min + 1)</code> → decimal de 0 a 6</span></li>
<li><span><strong>Recortar</strong> — <code>Math.floor(...)</code> → entero de 0 a 5</span></li>
<li><span><strong>Correr</strong> — <code>+ min</code> → entero de 1 a 6</span></li>
</ol>

<div class="tip">
<p><strong>¿Por qué el <code>+ 1</code>?</strong> Porque los extremos cuentan los dos. Del 1 al 6 hay <strong>seis</strong> números, no cinco: <code>6 - 1 = 5</code>, y le sumás uno.</p>
</div>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>rndInt</p>

## La función del curso

<div class="body">

<div class="file" data-name="src/app.js">

```js
/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
```

</div>

<p class="callout">Copiala <strong>tal cual</strong>. La vas a usar en todos los TP y en los parciales, siempre con este nombre y esta firma.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>rndInt</p>

## Sin el <code>+ 1</code>, el máximo no sale nunca

<div class="body">

<div class="out">

```bash
En 1000 tiradas de rndInt(1, 6), ¿cuántos 6 salieron?

  con el + 1:  177
  sin el + 1:    0
```

</div>

<div class="pitfall">
<p>El programa <strong>anda</strong>, los números parecen razonables, y falta uno solo de todos los posibles. Es de los errores más difíciles de notar.</p>
</div>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 6</p>

## El pago de la promesa

---

<p class="eyebrow"><b>06</b><span>/</span>Integrador</p>

## Las piezas

<div class="body">

<div class="file" data-name="src/app.js">

```js
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const simulateMeasurement = () => rndInt(355, 405)

const deviation = (measured) =>
  (measured - NOMINAL_VOLTAGE) / NOMINAL_VOLTAGE * 100

const isWithinRange = (measured) =>
  measured >= NOMINAL_VOLTAGE * (1 - TOLERANCE) &&
  measured <= NOMINAL_VOLTAGE * (1 + TOLERANCE)
```

</div>

<p class="note-p">Cada una hace <strong>una sola cosa</strong>. <small>El JSDoc va en el archivo; acá se omite por espacio.</small></p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Integrador</p>

## Y el programa principal

<div class="body">

<div class="file" data-name="src/app.js">

```js
for (let i = 1; i <= 8; i++) {
  printLine(i, simulateMeasurement())
}
```

</div>

<p class="statement">Dos líneas</p>

<p class="lead">Cada función cuenta <strong>cómo</strong>. El programa principal cuenta <strong>qué</strong>.</p>

<p class="note-p">Y si mañana cambia la tolerancia, hay <strong>un solo lugar</strong> donde tocar.</p>

</div>

---

<p class="eyebrow"><b>06</b><span>/</span>Cierre</p>

## Lo que hay que llevarse

<div class="body">

<ol class="enum">
<li><span>Una función = <strong>un nombre</strong> + <strong>una tarea</strong>.</span></li>
<li><span>Trabaja con <strong>sus parámetros</strong>. No lee de afuera.</span></li>
<li><span><code>return</code> devuelve <strong>y corta</strong>.</span></li>
<li><span><strong>JSDoc siempre.</strong> Se corrige.</span></li>
<li><span><code>rndInt(min, max)</code> de memoria — y el <code>+ 1</code>.</span></li>
</ol>

</div>

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Próxima clase · Unidad 07</p>

# Vectores

<div class="cover-meta">
<span>Por fin un lugar donde <strong>guardar</strong> las mediciones</span>
</div>

<div class="cover-meta">
<span>Se generan con <code>rndInt()</code></span><span class="sep">·</span>
<span>se recorren con los bucles de la 05</span><span class="sep">·</span>
<span>y cada cálculo es una función</span>
</div>
