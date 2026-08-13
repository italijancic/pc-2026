---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 02</p>

# Entorno y primeros pasos

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Hoy</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span>Las <strong>tres herramientas</strong> y para qué sirve cada una</span></li>
<li><span>La <strong>terminal</strong>: moverte sin el explorador de archivos</span></li>
<li><span>El <strong>proyecto</strong> de la cátedra: <code>npm install</code> y <code>npm run dev</code></span></li>
<li><span>Tu <strong>primer programa</strong></span></li>
<li><span><strong>Pedirle datos</strong> al usuario</span></li>
</ol>

<p class="tip"><strong>La clase de hoy es con la máquina abierta.</strong> Todo lo que veamos lo escribís vos en el momento.</p>

</div>

<!-- Arrancar preguntando quién no pudo instalar. Resolver eso ANTES de avanzar:
     si no tienen Node, la clase no sirve. Los que ya lo tienen que ayuden al
     de al lado. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## Las herramientas

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cuál de las tres ejecuta tu programa?

<p class="lead">Node.js &nbsp;·&nbsp; Visual Studio Code &nbsp;·&nbsp; la terminal</p>

<!-- Casi todos dicen VSCode. Es el error #1 del curso.
     VSCode sólo abre una terminal y le pide a Node que corra el archivo.
     El que trabaja es Node. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Herramientas</p>

## Tres cosas distintas

<div class="body">

<div class="cols cols-3">

<div class="card">
<h3>Node.js</h3>
<p>El <strong>intérprete</strong>. Lee tu <code>.js</code> y lo ejecuta.</p>
<p class="quiet">El motor</p>
</div>

<div class="card">
<h3>VS Code</h3>
<p>El <strong>editor</strong>. Donde escribís el texto.</p>
<p class="quiet">El taller</p>
</div>

<div class="card">
<h3>La terminal</h3>
<p>Donde <strong>das órdenes</strong> escribiendo.</p>
<p class="quiet">El tablero</p>
</div>

</div>

<p class="callout">El único imprescindible es <strong>Node</strong>. Sin editor podés programar; sin intérprete, no.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Herramientas</p>

## JavaScript no es Node.js

<div class="body">

<div class="cols cols-2">

<div>
<p class="tag">JavaScript</p>
<p>El <strong>idioma</strong>. Las reglas de escritura.</p>
</div>

<div>
<p class="tag">Node.js</p>
<p>Alguien que <strong>habla</strong> ese idioma y ejecuta lo que le decís.</p>
</div>

</div>

<p class="lead">Un idioma no hace nada solo. Alguien tiene que hablarlo.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## La terminal

---

<p class="eyebrow"><b>02</b><span>/</span>Terminal</p>

## Siempre estás parado en una carpeta

<div class="body">

<div class="out">

```bash
C:\Users\ivan>
```

</div>

<p class="lead">Ese texto te dice <strong>dónde estás</strong>. Todo lo que escribas se ejecuta desde ahí.</p>

<div class="pitfall">
<p>Si le pedís que corra <code>app.js</code> y en <strong>esa</strong> carpeta no hay ningún <code>app.js</code>, no lo encuentra — aunque el archivo exista en otro lado del disco.</p>
</div>

</div>

<!-- Esto explica el 80 % de los "no me anda" de las primeras clases.
     Insistir. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Terminal</p>

## Cinco comandos

<div class="body">

| Qué querés | Windows | macOS / Linux |
|------------|---------|---------------|
| Dónde estoy | `cd` | `pwd` |
| Qué hay acá | `dir` | `ls` |
| Entrar a una carpeta | `cd carpeta` | `cd carpeta` |
| Volver atrás | `cd ..` | `cd ..` |
| Crear una carpeta | `mkdir carpeta` | `mkdir carpeta` |

<p class="note-p"><code>..</code> es <strong>“la carpeta de arriba”</strong>. Se encadena: <code>cd ../..</code> sube dos niveles.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Terminal</p>

## Armar la carpeta de la materia

<div class="body">

<div class="out">

```bash
cd Documents
mkdir programacion
cd programacion
```

</div>

<p class="lead">Tres comandos y ya estás adentro.</p>

<div class="tip">
<p><strong>La tecla <code>Tab</code> autocompleta.</strong> Escribí las primeras letras y apretá <code>Tab</code>. Es más rápido y — sobre todo — <strong>no te equivocás tipeando</strong>.</p>
<p>La flecha <strong>↑</strong> trae el comando anterior.</p>
</div>

</div>

<!-- Hacerlo en vivo y que lo hagan ellos. Que vean el prompt cambiar. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Si algo falló

---

<p class="eyebrow"><b>02</b><span>/</span>Instalación</p>

## Primero, verificá

<div class="body">

<div class="out">

```bash
node -v
v24.19.0

npm -v
11.6.2
```

</div>

<p class="lead">Si las dos responden, estás listo. Si no, seguí en la próxima.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Instalación</p>

## <code>node</code> no se reconoce

<div class="body top">

<div class="out">

```bash
'node' no se reconoce como un comando interno o externo
```

</div>

<ol class="enum">
<li><span><strong>Cerrá la terminal y abrila de nuevo.</strong> Resuelve la mayoría de los casos.</span></li>
<li><span>Si sigue: reinstalá Node dejando tildado <em>“Add to PATH”</em>.</span></li>
<li><span>Último recurso: reiniciá la máquina.</span></li>
</ol>

<p class="note-p">El <strong>PATH</strong> es la lista de carpetas donde el sistema busca los programas. Se lee <strong>al abrir</strong> la terminal: una que ya estaba abierta no ve lo que instalaste después.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Instalación</p>

## PowerShell bloquea <code>npm</code>

<div class="body">

<div class="out">

```bash
npm : No se puede cargar el archivo npm.ps1
porque la ejecución de scripts está deshabilitada
```

</div>

<div class="cols cols-2">

<div>
<p class="tag">Rápido</p>
<p>Usá <strong>Símbolo del sistema</strong> (<code>cmd</code>) en vez de PowerShell.</p>
</div>

<div>
<p class="tag">Definitivo</p>
<p>Está con capturas en el <strong>README del template</strong>.</p>
</div>

</div>

<p class="note-p">Le pasa a casi todos en Windows. No hiciste nada mal.</p>

</div>

<!-- github.com/italijancic/pc-2026/blob/main/template/README.md#-troubleshooting -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## El proyecto

---

<p class="eyebrow"><b>02</b><span>/</span>VS Code</p>

## Abrí la carpeta correcta

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Así no</span></p>

```text
src/          ← abriste esta
├── app.js
└── prompt.js
```

<p class="note-p">VSCode no ve el <code>package.json</code>. <code>npm run dev</code> falla.</p>
</div>

<div>
<p><span class="good">Así sí</span></p>

```text
mi-proyecto/  ← abrí esta
├── package.json
└── src/
```

<p class="note-p">La raíz: la carpeta que <strong>contiene</strong> el <code>package.json</code>.</p>
</div>

</div>

</div>

<!-- Segundo error más frecuente del curso, y el mensaje de npm no ayuda nada. -->

---

<p class="eyebrow"><b>02</b><span>/</span>VS Code</p>

## Usá la terminal integrada

<div class="body">

<p class="statement">Ver → Terminal &nbsp;·&nbsp; <code>Ctrl + ñ</code></p>

<p class="lead">Se abre <strong>ya parada en la carpeta del proyecto</strong>.</p>

<div class="callout">
Te ahorra el <code>cd</code> y te garantiza que estás en el lugar correcto. <small>Usala siempre.</small>
</div>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Proyecto</p>

## Qué hay adentro

<div class="body">

| Archivo | Qué es |
|---------|--------|
| `package.json` | La ficha técnica: dependencias y comandos |
| `src/app.js` | 👈 **Acá escribís vos** |
| `src/prompt.js` | Leer del teclado. **No lo toques** |
| `eslint.config.mjs` | Las reglas de estilo con las que se corrige |
| `node_modules/` | Las dependencias. **No se toca** |

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Proyecto</p>

## Dos comandos, y cuándo

<div class="body">

<div class="file" data-name="terminal">

```bash
npm install    # una sola vez, al empezar el proyecto
npm run dev    # cada vez que querés correr tu programa
```

</div>

<div class="cols cols-2">

<div>
<p class="tag">install</p>
<p>Descarga las dependencias a <code>node_modules/</code>. Necesita internet.</p>
<p class="quiet">¿No ves <code>node_modules</code>? Corrélo.</p>
</div>

<div>
<p class="tag">dev</p>
<p>Corre <code>src/app.js</code> y <strong>queda mirando</strong> el archivo: guardás y se re-ejecuta solo.</p>
<p class="quiet">Cortar: <code>Ctrl + C</code></p>
</div>

</div>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Tu primer programa

---

<p class="eyebrow"><b>02</b><span>/</span>Primer programa</p>

## Una sola línea

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('Hola mundo')
```

</div>

<div class="out">

```bash
Hola mundo
```

</div>

<p class="lead">Eso es un programa. Una instrucción, y la máquina la ejecutó.</p>

</div>

<!-- Que lo escriban, guarden con Ctrl+S y vean la salida. Recién ahí seguir. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Primer programa</p>

## Cómo se lee

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('Hola mundo')
//   ↑          ↑
//   |          └─ el argumento: qué mostrar
//   └─ la orden: "escribí esto en la consola"
```

</div>

<p class="note-p">Los <strong>paréntesis</strong> son obligatorios. Las <strong>comillas</strong> marcan dónde empieza y termina el texto.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Primer programa</p>

## Varios argumentos

<div class="body">

<div class="file" data-name="src/app.js">

```js
console.log('Tensión:', 220, 'V')
```

</div>

<div class="out">

```bash
Tensión: 220 V
```

</div>

<p class="lead">Separados por comas. Se imprimen en la misma línea.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Primer programa</p>

## Meter valores dentro del texto

<div class="body">

<div class="cols cols-2 compare">

<div>
<p><span class="bad">Con comas</span></p>

```js
console.log('Tensión:',
  tension, 'V')
```

<p class="note-p">Se corta el texto en pedazos.</p>
</div>

<div>
<p><span class="good">Con backticks</span></p>

```js
console.log(
  `Tensión: ${tension} V`)
```

<p class="note-p">Se lee de corrido.</p>
</div>

</div>

<div class="pitfall">
<p>El <strong>backtick</strong> <code>`</code> no es una comilla simple <code>'</code>. Está a la izquierda del <code>1</code>. Con comilla simple, el <code>${tension}</code> se imprime tal cual.</p>
</div>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Primer programa</p>

## Comentarios

<div class="body">

<div class="file" data-name="src/app.js">

```js
// Un comentario de una línea

/*
  Un comentario
  de varias líneas
*/

console.log('Esto sí se ejecuta')
```

</div>

<p class="lead">La computadora los ignora. Son para el humano que lea el código — casi siempre, vos dentro de tres semanas.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 6</p>

## Guardar y pedir datos

---

<p class="eyebrow"><b>02</b><span>/</span>Variables</p>

## Ponerle nombre a un dato

<div class="body">

<div class="file" data-name="src/app.js">

```js
const tension = 220
const corriente = 5

console.log(`Potencia: ${tension * corriente} W`)
```

</div>

<div class="out">

```bash
Potencia: 1100 W
```

</div>

<p class="note-p">Escribir <code>tension</code> es lo mismo que escribir <code>220</code>. En la <strong>unidad 03</strong> vemos <code>let</code>, <code>const</code> y <code>var</code> en detalle.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Y si quiero la potencia de otro motor?

<p class="lead">Con los valores escritos en el código, hay que editar el programa cada vez.</p>

<!-- Ahí aparece la necesidad de prompt(). No es un capricho: es la diferencia
     entre una calculadora de un solo uso y un programa. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Entrada</p>

## Pedirle datos al usuario

<div class="body">

<div class="file" data-name="src/app.js">

```js
import { prompt } from './prompt.js'

const nombre = prompt('¿Cómo te llamás? ')
console.log(`Hola ${nombre}, bienvenido al curso`)
```

</div>

<div class="out">

```bash
¿Cómo te llamás? Ana
Hola Ana, bienvenido al curso
```

</div>

<p class="note-p">El <code>import</code> va <strong>siempre al principio</strong> del archivo. El programa se detiene y espera el <code>Enter</code>.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Leo 20 y 5, los sumo. ¿Qué imprime?

<p class="lead"><code>console.log(a + b)</code></p>

<!-- Que arriesguen. Casi todos dicen 25. Mostrar que da 205 y dejar que
     lo procesen antes de explicar. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Entrada</p>

## No da 25

<div class="body">

<div class="file" data-name="src/app.js">

```js
const a = prompt('Primer número: ')
const b = prompt('Segundo número: ')

console.log(a + b)
```

</div>

<div class="out">

```bash
Primer número: 20
Segundo número: 5
205
```

</div>

<div class="pitfall">
<p><code>prompt()</code> devuelve <strong>siempre texto</strong>. Y para el texto, <code>+</code> no suma: <strong>pega</strong>.</p>
</div>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Entrada</p>

## Convertir a número

<div class="body">

<div class="file" data-name="src/app.js">

```js
const a = parseInt(prompt('Primer número: '))
const b = parseInt(prompt('Segundo número: '))

console.log(a + b)
```

</div>

<div class="out">

```bash
Primer número: 20
Segundo número: 5
25
```

</div>

<p class="callout">Si el dato es un número y lo vas a usar para calcular: <strong>envolvelo</strong>. Siempre.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Entrada</p>

## <code>parseInt</code> o <code>parseFloat</code>

<div class="body">

| Función | Convierte a | `'21.5'` da |
|---------|-------------|-------------|
| `parseInt()` | Entero | `21` |
| `parseFloat()` | Con decimales | `21.5` |

<div class="pitfall">
<p><code>parseInt('21.5')</code> te devuelve <code>21</code> y <strong>perdés el decimal sin ningún aviso</strong>. Una temperatura, una tensión o una longitud rara vez son enteras: ante la duda, <code>parseFloat</code>.</p>
</div>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## 21,7 °C a Kelvin es sumarle 273,15. ¿Qué imprime?

<p class="lead">Debería dar <strong>294,85</strong>.</p>

<!-- Que arriesguen. Nadie espera lo que sigue. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Decimales</p>

## Los decimales que no pediste

<div class="body">

<div class="file" data-name="src/app.js">

```js
const celsius = 21.7
console.log(`${celsius + 273.15} K`)
```

</div>

<div class="out">

```bash
294.84999999999997 K
```

</div>

<p class="lead">No es un error tuyo: es <code>0.1 + 0.2</code> de la unidad 01. Hay decimales que en binario <strong>no tienen representación exacta</strong>.</p>

</div>

<!-- Cerrar el círculo con la diapositiva de 0.1 + 0.2 de la clase pasada.
     Ahí lo vieron como curiosidad; acá les aparece en una cuenta de taller. -->

---

<p class="eyebrow"><b>02</b><span>/</span>Decimales</p>

## <code>.toFixed()</code>

<div class="body">

<div class="file" data-name="src/app.js">

```js
const celsius = 21.7
const kelvin = celsius + 273.15

console.log(`${kelvin.toFixed(2)} K`)
```

</div>

<div class="out">

```bash
294.85 K
```

</div>

<p class="callout">Calculá con los números completos. Redondeá <strong>sólo al mostrar</strong>.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Entrada</p>

## Todo junto

<div class="body">

<div class="file" data-name="src/app.js">

```js
import { prompt } from './prompt.js'

const motor = prompt('Identificación del motor: ')
const tension = parseFloat(prompt('Tensión [V]: '))
const corriente = parseFloat(prompt('Corriente [A]: '))

const potencia = tension * corriente
console.log(`Motor ${motor}: ${potencia.toFixed(2)} W`)
```

</div>

<div class="out">

```bash
Identificación del motor: M-14
Tensión [V]: 380
Corriente [A]: 4.2
Motor M-14: 1596.00 W
```

</div>

</div>

<!-- Este es el esqueleto de todo el TP: leer, convertir, calcular, mostrar. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 7</p>

## Cuando algo falla

---

<p class="eyebrow"><b>02</b><span>/</span>Errores</p>

## Un error no es un castigo

<div class="body">

<div class="out">

```bash
ReferenceError: tencion is not defined
    at file:///Users/ivan/mi-proyecto/src/app.js:4:13
```

</div>

<p class="lead">Te dice <strong>qué pasó</strong>, en <strong>qué archivo</strong> y en <strong>qué línea</strong>.</p>

<p class="note-p">Leé la <strong>primera línea</strong> y buscá el <strong>número de línea</strong>. El resto casi siempre es ruido interno de Node.</p>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Errores</p>

## Los cuatro que vas a ver hoy

<div class="body">

| Mensaje | Qué significa |
|---------|---------------|
| `SyntaxError` | Está **mal escrito**: falta un paréntesis, llave o comilla |
| `ReferenceError: x is not defined` | Nombraste algo que **no existe**. Revisá cómo lo escribiste |
| `Cannot find module` | Estás en la **carpeta equivocada** |
| `Cannot find package 'readline-sync'` | Falta `npm install` |

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Cierre</p>

## Lo que hay que llevarse

<div class="body">

<ol class="enum">
<li><span>El que <strong>ejecuta</strong> es Node. VSCode sólo te ayuda a escribir.</span></li>
<li><span>En la terminal <strong>siempre estás parado en una carpeta</strong>. Usá la integrada de VSCode.</span></li>
<li><span>Abrí <strong>la raíz</strong>: la carpeta que contiene el <code>package.json</code>.</span></li>
<li><span><code>npm install</code> una vez &nbsp;·&nbsp; <code>npm run dev</code> siempre.</span></li>
<li><span><code>prompt()</code> devuelve <strong>texto</strong>. Convertilo con <code>parseFloat()</code> y mostralo con <code>.toFixed(2)</code>.</span></li>
</ol>

</div>

---

<p class="eyebrow"><b>02</b><span>/</span>Tarea</p>

## Para la próxima

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Dejá el entorno andando</h3>
<p><code>npm run dev</code> tiene que correr sin errores.</p>
</div>

<div class="card">
<h3>Hacé el TP</h3>
<p>Seis problemas. Es <strong>la</strong> práctica que necesitás para que la unidad 03 no se te haga cuesta arriba.</p>
</div>

</div>

<p class="callout">Si algo no te anduvo, <strong>traelo anotado</strong>. No te quedes trabado una semana.</p>

</div>

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Próxima clase · Unidad 03</p>

# Variables y operadores

<div class="cover-meta">
<span><code>let</code>, <code>const</code> y <code>var</code></span><span class="sep">·</span>
<span>Tipos de datos</span><span class="sep">·</span>
<span>Operadores</span>
</div>
