---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="rule"></div>

<p class="kicker">Unidad 01</p>

# Introducción a la informática

<div class="cover-meta">
<span><strong>Programación en Computación</strong></span><span class="sep">·</span>
<span>Ingeniería Electromecánica — 2.º año</span><span class="sep">·</span>
<span>UTN FR Reconquista</span>
</div>

<div class="cover-meta">
<span>Longhi Pablo</span><span class="sep">·</span><span>Talijancic Iván</span>
</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Bienvenida</p>

## La materia en tres ideas

<div class="body">

<div class="pillars">
<div>
<b>Resolver</b>
<span>Traducir un problema de ingeniería a un algoritmo. Eso es lo difícil, no la sintaxis.</span>
</div>
<div>
<b>Escribir</b>
<span>JavaScript sobre Node.js. Un lenguaje real, con herramientas reales.</span>
</div>
<div>
<b>Verificar</b>
<span>Probar que el programa hace lo que dijiste. Un programa que no probaste, no funciona.</span>
</div>
</div>

<p class="lead">No vamos a memorizar comandos. Vamos a aprender a <strong>pensar problemas</strong> y a expresarlos de forma que una máquina los ejecute.</p>

</div>

<!-- Presentación de docentes y del curso.
     Mencionar: 1 clase semanal (jueves), 2 parciales, TP por unidad.
     El repo del cronograma está en CRONOGRAMA.md -->

---

<!-- _class: chapter -->

<p class="kicker">Antes de arrancar</p>

## Cómo está armada la materia

---

<p class="eyebrow"><b>01</b><span>/</span>El curso</p>

## Dos partes, dos parciales

<div class="body">

<div class="cols cols-2">

<div>
<span class="tag">Parte 1 · Vectores</span>

<ul class="units">
<li class="is-mark"><span class="n">01</span><span>Introducción a la informática <span class="note">estamos acá</span></span></li>
<li><span class="n">02</span><span>Entorno de desarrollo y primeros pasos</span></li>
<li><span class="n">03</span><span>Variables, convenciones y operadores</span></li>
<li><span class="n">04</span><span>Condicionales: <code>if</code>, <code>switch</code></span></li>
<li><span class="n">05</span><span>Bucles: <code>for</code>, <code>while</code>, <code>do-while</code></span></li>
<li><span class="n">06</span><span>Funciones</span></li>
<li><span class="n">07</span><span>Arrays unidimensionales (vectores)</span></li>
</ul>
</div>

<div>
<span class="tag">Parte 2 · Matrices</span>

<ul class="units">
<li><span class="n">08</span><span>Matrices (arrays bidimensionales)</span></li>
<li><span class="n">09</span><span>Operaciones matriciales <span class="note">transpuesta, simetría, producto</span></span></li>
<li><span class="n">10</span><span>Integrador: problemas de ingeniería</span></li>
</ul>

<p class="note-p">La parte 2 es más corta en unidades pero más densa: todo lo de la parte 1 se usa adentro de dos bucles anidados.</p>
</div>

</div>

</div>

<!-- Cada parte cierra con su parcial. Fechas tentativas en CRONOGRAMA.md:
     1er parcial 01-10, 2do parcial 05-11, recuperatorio 12-11. -->

---

<p class="eyebrow"><b>01</b><span>/</span>El curso</p>

## Todo se apoya en lo anterior

<div class="body center">

```
   Variables ──► Condicionales ──► Bucles ──► Funciones
                                                 │
                                                 ▼
                                            VECTORES ◄── 1er parcial
                                                 │
                                                 ▼
                                            MATRICES ◄── 2do parcial
                                                 │
                                                 ▼
                                      Problemas de ingeniería
```

<p class="lead">No hay temas independientes. Si te quedás con bucles, vas a arrastrar el problema hasta matrices.</p>

<p class="tip">Por eso hay un <strong>TP por unidad</strong>: el objetivo es detectar a tiempo lo que no quedó claro, no acumular deuda hasta el parcial.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Evaluación</p>

## Cómo se aprueba

<div class="body">

<table>
<thead><tr><th>Instancia</th><th>Cuándo</th><th>Qué evalúa</th></tr></thead>
<tbody>
<tr><td><strong>TP por unidad</strong></td><td>Cada clase</td><td>Que puedas resolver solo lo que vimos juntos</td></tr>
<tr><td><strong>1er parcial</strong></td><td>Al cerrar la parte 1</td><td>Vectores: unidades 01 a 07</td></tr>
<tr><td><strong>2do parcial</strong></td><td>Al cerrar la parte 2</td><td>Matrices: unidades 08 a 10</td></tr>
<tr><td><strong>Recuperatorio</strong></td><td>Al final de la cursada</td><td>El parcial que quedó pendiente</td></tr>
<tr><td><strong>Final</strong></td><td>En las mesas</td><td>Un problema integrador</td></tr>
</tbody>
</table>

<p class="callout">Nota mínima de aprobación: <strong>6 / 10</strong><small>equivale al 60 % del examen correcto</small></p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Evaluación</p>

## Cómo es un parcial

<div class="body">

<p class="lead">Un <strong>problema de ingeniería</strong> partido en 5 incisos progresivos. El inciso 1 genera los datos; los siguientes calculan métricas sobre ellos.</p>

<div class="cols cols-3">
<div class="card card--flat"><p><strong>Ascensor inteligente</strong><br>algoritmo del más cercano</p></div>
<div class="card card--flat"><p><strong>Paneles solares</strong><br>eficiencia por zona</p></div>
<div class="card card--flat"><p><strong>Sensores de planta</strong><br>alertas por fila</p></div>
</div>

<p class="note-p">Ejemplos reales de parciales tomados. Son problemas de la carrera, no ejercicios abstractos.</p>

<p class="tip">Se rinde <strong>escribiendo código en la computadora</strong>, no en papel. Si resolviste los TP de cada unidad, el parcial no trae sorpresas.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Evaluación</p>

## Las reglas de código

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Podés usar</h3>
<p><code>for</code> · <code>while</code> · <code>do-while</code> · <code>if</code> · <code>switch</code> · acceso por índice · <code>.length</code> · <code>.slice()</code></p>
</div>

<div class="card">
<h3>No podés usar</h3>
<p><code>map</code> · <code>filter</code> · <code>reduce</code> · <code>forEach</code> · <code>find</code> · <code>sort</code> · <code>flat</code> · <code>indexOf</code> · <code>splice</code> · retornar objetos</p>
</div>

</div>

<p class="lead">Existen y son útiles. Pero <strong>resuelven por vos justo lo que tenés que aprender</strong>: la lógica del recorrido.</p>

<p class="tip">Se corrige también el <strong>código</strong>, no sólo el resultado: funciones con parámetros y retorno, nombres descriptivos y comentarios de cabecera.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Hoy</p>

## Qué vamos a ver

<div class="body">

<ol class="enum">
<li><span><strong>Hardware</strong>: las partes físicas y qué hace cada una</span></li>
<li><span>La distinción <strong>RAM vs. almacenamiento</strong></span></li>
<li><span><strong>Software</strong>: sistema operativo, drivers y aplicaciones</span></li>
<li><span>Lenguajes <strong>compilados e interpretados</strong></span></li>
<li><span>Qué pasa cuando escribís <code>node app.js</code></span></li>
<li><span>Sistema <strong>binario</strong>: cómo representa la información</span></li>
</ol>

<p class="tip">Hoy no escribimos código. Esta clase es el <strong>mapa del terreno</strong>: sin esto, más adelante los errores parecen magia negra.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Para arrancar</p>

## ¿Por qué un programa "se cuelga"?

<p class="lead">Al final de la clase vas a poder contestar esto, y también por qué al cerrar un programa se pierden los datos.</p>

<!-- No dar la respuesta. Anotarla en el pizarrón y volver a ella en la slide del
     ciclo de instrucción. Enganche para toda la clase. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 1</p>

## Hardware

---

<p class="eyebrow"><b>01</b><span>/</span>Hardware</p>

## La CPU ejecuta las instrucciones

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Unidad de Control</h3>
<p>Decide qué instrucción se ejecuta y coordina al resto de los componentes.</p>
</div>

<div class="card">
<h3>Unidad Aritmético-Lógica</h3>
<p>Hace las cuentas y las comparaciones.</p>
</div>

</div>

<p class="lead">Cuando escribas <code>if (a > b)</code>, esa comparación la resuelve <strong>la ALU</strong>. Cuando escribas <code>suma = suma + v[i]</code>, esa suma también.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Hardware</p>

## Y no hace nada más que esto

<div class="body">

```
   BUSCAR         →   traer la próxima instrucción de la memoria
   DECODIFICAR    →   interpretar qué hay que hacer
   EJECUTAR       →   hacerlo
                      y volver a empezar
```

<p class="lead">Miles de millones de veces por segundo. Nada más sofisticado que eso.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Hardware</p>

## Por eso un programa se "cuelga"

<div class="body">

<div class="file" data-name="app.js">

```js
let i = 0

while (i < 10) {
  console.log(i)
  // falta el i++
}
```

</div>

<div class="pitfall">
<p>La CPU <strong>no está detenida</strong>: está ejecutando este bucle a toda velocidad, para siempre, porque <code>i</code> nunca cambia y la condición nunca se hace falsa. Lo vas a ver en la unidad 05.</p>
</div>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Hardware</p>

## La distinción más importante de hoy

<div class="body">

<table>
<thead><tr><th></th><th>RAM</th><th>Almacenamiento (SSD/HDD)</th></tr></thead>
<tbody>
<tr><td><strong>Volátil</strong></td><td><strong>Sí</strong>: se borra al apagar</td><td><strong>No</strong>: persiste</td></tr>
<tr><td>Velocidad</td><td>Muy rápida</td><td>Lenta en comparación</td></tr>
<tr><td>Capacidad</td><td>8 – 32 GB</td><td>256 GB – 2 TB</td></tr>
<tr><td>Qué guarda</td><td>Los programas <strong>mientras corren</strong> y sus datos</td><td>Archivos y programas instalados</td></tr>
</tbody>
</table>

<p class="callout">Tus variables viven en la RAM.<small>Cuando el programa termina, desaparecen</small></p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Cargás 31 mediciones y cerrás el programa. ¿Dónde quedaron?

<!-- Respuesta: en ningún lado. Estaban en la RAM.
     Si querés que sobrevivan hay que escribirlas a un archivo.
     Conectar con: "por eso existe el botón Guardar". -->

---

<p class="eyebrow"><b>01</b><span>/</span>Hardware</p>

## Más rápido = más chico y más caro

<div class="body">

```
   más rápida       Registros de la CPU        bytes
       ▲            Caché  (L1, L2, L3)        KB – MB
       │            RAM                        GB
       ▼            SSD / HDD                  GB – TB
   más lenta        Red / la nube              ilimitado
```

<p class="note-p">Es una regla que se repite en toda la computación. La memoria rápida es carísima, así que hay poca.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Hardware</p>

## El resto de las piezas

<div class="body">

<table>
<thead><tr><th>Componente</th><th>Qué hace</th></tr></thead>
<tbody>
<tr><td><strong>Motherboard</strong></td><td>Conecta todo. Los datos viajan por sus <em>buses</em></td></tr>
<tr><td><strong>GPU</strong></td><td>Muchas operaciones simples en paralelo (gráficos)</td></tr>
<tr><td><strong>Fuente</strong></td><td>Convierte la tensión de línea en las continuas que usan los componentes</td></tr>
<tr><td><strong>Entrada</strong></td><td>Teclado, mouse, <strong>sensores</strong>: le dan datos a la máquina</td></tr>
<tr><td><strong>Salida</strong></td><td>Monitor, impresora, <strong>actuadores</strong>: muestran o accionan</td></tr>
</tbody>
</table>

<p class="tip">Un <strong>PLC</strong> o un microcontrolador tiene esta misma estructura —CPU, memoria, entradas y salidas— en un encapsulado chico. Lo que aprendas acá se traslada directo a tu carrera.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 2</p>

## Software

---

<p class="eyebrow"><b>01</b><span>/</span>Software</p>

## Capas, y cada una se apoya en la de abajo

<div class="body">

```
   ┌───────────────────────────────────┐
   │  Software de aplicación           │  VSCode, Chrome, TU PROGRAMA
   ├───────────────────────────────────┤
   │  Sistema operativo                │  Windows, macOS, Linux
   ├───────────────────────────────────┤
   │  Drivers                          │  traducen para cada hardware
   ├───────────────────────────────────┤
   │  Hardware                         │  CPU, RAM, disco, periféricos
   └───────────────────────────────────┘
```

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Software</p>

## El sistema operativo administra

<div class="body">

<table>
<thead><tr><th>Función</th><th>Qué resuelve</th></tr></thead>
<tbody>
<tr><td><strong>Procesos</strong></td><td>Reparte el tiempo de CPU entre los programas abiertos</td></tr>
<tr><td><strong>Memoria</strong></td><td>Asigna RAM a cada programa y evita que se pisen</td></tr>
<tr><td><strong>Archivos</strong></td><td>Crear, leer, escribir, borrar. Carpetas y permisos</td></tr>
<tr><td><strong>Dispositivos</strong></td><td>Coordina la comunicación con los periféricos</td></tr>
</tbody>
</table>

<p class="tip">Cuando tu programa "no encuentra el archivo", casi siempre es porque le diste una <strong>ruta</strong> que el sistema operativo interpreta distinto de lo que imaginabas. Lo vemos en la unidad 02.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Software</p>

## Driver: el traductor

<div class="body center">

<p class="statement">El mismo Windows funciona con miles de impresoras.</p>

<p class="after">No las conoce a ellas: conoce a sus drivers.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Software</p>

## Programa ≠ proceso

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Programa</h3>
<p>El <strong>archivo</strong> con las instrucciones.</p>
<p>Vive en el <strong>disco</strong>.</p>
<p>Hay uno.</p>
</div>

<div class="card">
<h3>Proceso</h3>
<p>El programa <strong>en ejecución</strong>.</p>
<p>Vive en la <strong>RAM</strong>.</p>
<p>Puede haber varios del mismo programa a la vez.</p>
</div>

</div>

<p class="lead"><code>app.js</code> es un programa. <code>node app.js</code> crea un <strong>proceso</strong>.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 3</p>

## Del código a la máquina

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## Vos escribís texto. La CPU entiende ceros y unos. ¿Quién traduce?

<!-- Dejarlos pensar. La respuesta es: SIEMPRE hay un traductor.
     Lo que cambia entre lenguajes es CUÁNDO traduce. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## Tu código es texto

<div class="body">

<div class="file" data-name="app.js">

```js
console.log('Hola mundo')
```

</div>

<p class="lead">Para la CPU, eso no significa nada. Ella sólo ejecuta instrucciones en <strong>código máquina</strong>: números binarios.</p>

<p class="callout">Siempre hay un traductor.<small>Lo que cambia entre lenguajes es CUÁNDO traduce</small></p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## Lenguajes compilados

<div class="body">

<p class="lead">Se traduce <strong>todo el programa de una vez</strong>, antes de ejecutarlo. El resultado es un archivo ejecutable.</p>

```
   codigo.c  ──►  COMPILADOR  ──►  programa.exe  ──►  se ejecuta
                  (una vez)         (codigo maquina)
```

<p class="note-p"><strong>Ejemplos:</strong> C · C++ · Rust · Go · Pascal · Fortran</p>

</div>

<!-- El .exe ya es codigo maquina: la CPU lo ejecuta directo, sin intermediarios. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## Lenguajes interpretados

<div class="body">

<p class="lead">No se traduce antes. Un programa llamado <strong>intérprete</strong> lee el código y lo va ejecutando <strong>a medida que corre</strong>.</p>

```
   app.js  ──►  INTERPRETE  ──►  se ejecuta
                (cada vez que corre)
```

<p class="note-p"><strong>Ejemplos:</strong> JavaScript · Python · PHP · Ruby</p>

</div>

<!-- No hay .exe. El archivo fuente ES lo que se distribuye y se ejecuta. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## Las diferencias

<div class="body">

<table>
<thead><tr><th></th><th>Compilado</th><th>Interpretado</th></tr></thead>
<tbody>
<tr><td><strong>Cuándo traduce</strong></td><td>Una vez, antes de ejecutar</td><td>Cada vez que se ejecuta</td></tr>
<tr><td><strong>Velocidad</strong></td><td>Más rápido</td><td>Más lento</td></tr>
<tr><td><strong>Errores de sintaxis</strong></td><td>Aparecen al compilar</td><td>Aparecen al ejecutar esa línea</td></tr>
<tr><td><strong>Portabilidad</strong></td><td>Hay que recompilar por sistema</td><td>El mismo archivo corre en todos</td></tr>
<tr><td><strong>Para probar un cambio</strong></td><td>Recompilar y ejecutar</td><td>Guardar y ejecutar</td></tr>
<tr><td><strong>Qué se distribuye</strong></td><td>El ejecutable</td><td>El código fuente</td></tr>
</tbody>
</table>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## Cuándo conviene cada uno

<div class="body center">

<div class="cols cols-2">

<div class="card">
<h3>Compilado</h3>
<p>Cuando la <strong>velocidad</strong> manda: sistemas embebidos, control en tiempo real, drivers, motores de simulación.</p>
<p class="quiet">El PLC de una planta corre código compilado.</p>
</div>

<div class="card">
<h3>Interpretado</h3>
<p>Cuando manda la <strong>velocidad de desarrollo</strong>: automatizar cálculos, procesar datos, scripts de ingeniería, web.</p>
<p class="quiet">Un script que analiza mediciones no necesita microsegundos.</p>
</div>

</div>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## JavaScript es interpretado

<div class="body">

<p class="lead">Su intérprete es <strong>Node.js</strong>. Por eso lo instalaste: sin él, tu <code>.js</code> es sólo un archivo de texto.</p>

<div class="cols cols-2">

<div class="card card--flat">
<p><strong>Lo bueno</strong></p>
<p>El mismo <code>app.js</code> corre igual en Windows, macOS y Linux. Podés trabajar en la máquina que tengas.</p>
</div>

<div class="card card--flat">
<p><strong>Lo que hay que saber</strong></p>
<p>Los errores aparecen <strong>cuando se ejecuta esa línea</strong>, no antes. Un error en la línea 50 no se ve hasta llegar ahí.</p>
</div>

</div>

<div class="pitfall">
<p><strong>Java y JavaScript son lenguajes distintos</strong>, sin relación entre sí más allá del nombre. Java compila a un formato intermedio y lo ejecuta la JVM.</p>
</div>

</div>

<!-- La confusión Java / JavaScript aparece TODOS los años. Aclararla ahora.
     Si preguntan: el nombre fue una decisión de marketing de 1995. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Traducción</p>

## La realidad es más matizada

<div class="body center">

<p class="lead">Los motores modernos de JavaScript <strong>compilan sobre la marcha</strong> las partes del código que más se repiten, para acelerarlas. Se llama <em>compilación JIT</em>.</p>

<p class="note-p">La división compilado / interpretado sigue siendo útil para entender qué pasa, pero en la práctica los lenguajes combinan las dos estrategias.</p>

</div>

<!-- No profundizar. Es una nota al pie honesta: el modelo simple que dimos
     alcanza para la materia, pero no es toda la verdad. -->

---

<!-- _class: chapter -->

<p class="kicker">Parte 4</p>

## Qué pasa cuando corrés un programa

---

<p class="eyebrow"><b>01</b><span>/</span>Ejecución</p>

## Te vas a cansar de escribir esto

<div class="body center">

<div class="out">

```bash
node app.js
```

</div>

<p class="lead">Vale la pena saber qué ocurre entre que apretás Enter y aparece el resultado.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Ejecución</p>

## Paso por paso

<div class="body">

<ol class="enum">
<li><span>La <strong>terminal</strong> le pide al sistema operativo que ejecute <code>node</code></span></li>
<li><span>El <strong>sistema operativo</strong> lo carga del disco a la RAM y crea un <strong>proceso</strong></span></li>
<li><span><code>node</code> abre tu <code>app.js</code> y lo lee — tu código es un <strong>dato de entrada</strong> para él</span></li>
<li><span><code>node</code> <strong>traduce</strong> tu JavaScript a instrucciones que la CPU entiende</span></li>
<li><span>La <strong>CPU ejecuta</strong>: buscar → decodificar → ejecutar</span></li>
<li><span>Al terminar, el proceso muere y <strong>su memoria se libera</strong></span></li>
</ol>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Ejecución</p>

## Lo importante del paso 4

<div class="body center">

<p class="statement">La CPU no entiende JavaScript.</p>

<p class="after">Node.js hace de intérprete: traduce tu código para ella.</p>

<p class="tip">Por eso hay que <strong>instalar Node</strong> antes de correr un <code>.js</code>. Y por eso el mismo archivo funciona igual en Windows, macOS y Linux: lo que cambia es Node, no tu código. Podés trabajar en la máquina que tengas.</p>

</div>

---

<!-- _class: chapter -->

<p class="kicker">Parte 5</p>

## Cómo representa la información

---

<p class="eyebrow"><b>01</b><span>/</span>Representación</p>

## Sólo dos estados

<div class="body center">

<p class="statement">Hay tensión o no hay tensión.</p>

<p class="after">Eso es un <strong>bit</strong>: <code>0</code> o <code>1</code>. Todo lo demás se construye a partir de ahí.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Binario</p>

## Cómo funciona el decimal

<div class="body">

<p class="lead">Ya sabés esto, aunque no lo pienses así. En el número <strong>2026</strong>, cada posición vale una <strong>potencia de 10</strong>:</p>

<p class="mem-label">2026 en base 10</p>

<div class="mem">
<div><b>2</b><i>10³</i></div>
<div><b>0</b><i>10²</i></div>
<div><b>2</b><i>10¹</i></div>
<div><b>6</b><i>10⁰</i></div>
</div>

```
   2×1000  +  0×100  +  2×10  +  6×1  =  2026
```

<p class="note-p">Base <strong>10</strong>: diez dígitos disponibles, del <code>0</code> al <code>9</code>.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Binario</p>

## El binario es lo mismo, con dos dígitos

<div class="body">

<p class="lead">Base <strong>2</strong>: sólo <code>0</code> y <code>1</code>. Cada posición vale una <strong>potencia de 2</strong>.</p>

<p class="mem-label">1011 en base 2</p>

<div class="mem">
<div class="is-mark"><b>1</b><i>2³ = 8</i></div>
<div><b>0</b><i>2² = 4</i></div>
<div class="is-mark"><b>1</b><i>2¹ = 2</i></div>
<div class="is-mark"><b>1</b><i>2⁰ = 1</i></div>
</div>

```
   1×8  +  0×4  +  1×2  +  1×1  =  11
```

<p class="callout">1011 en binario es 11 en decimal.<small>Mismo número, dos formas de escribirlo</small></p>

</div>

<!-- Insistir: no es "otro número", es el MISMO número escrito distinto.
     Igual que 0.5 y 1/2. -->

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cuánto vale <code>110</code> en binario?

<!-- Respuesta: 1×4 + 1×2 + 0×1 = 6.
     Que lo resuelvan en el momento. Es la primera vez que lo hacen solos. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Binario</p>

## Al revés: de decimal a binario

<div class="body">

<p class="lead">Se divide por 2 repetidamente y se anotan los <strong>restos</strong>. Ejemplo con el <strong>13</strong>:</p>

<table class="trace">
<thead><tr><th>División</th><th>Cociente</th><th>Resto</th></tr></thead>
<tbody>
<tr><td>13 ÷ 2</td><td>6</td><td><strong>1</strong></td></tr>
<tr><td>6 ÷ 2</td><td>3</td><td><strong>0</strong></td></tr>
<tr><td>3 ÷ 2</td><td>1</td><td><strong>1</strong></td></tr>
<tr><td>1 ÷ 2</td><td>0</td><td><strong>1</strong></td></tr>
</tbody>
</table>

<p class="lead">Los restos se leen <strong>de abajo hacia arriba</strong>: <code>13</code> = <code>1101</code></p>

</div>

<!-- Verificar en el pizarron: 1×8 + 1×4 + 0×2 + 1×1 = 13. Cierra. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Binario</p>

## De ahí sale el 256

<div class="body">

<p class="lead">Un <strong>byte</strong> son 8 bits. Cada bit puede tomar 2 valores, y son independientes entre sí:</p>

```
   2 × 2 × 2 × 2 × 2 × 2 × 2 × 2  =  2⁸  =  256
```

<div class="mem">
<div><b>0</b><i>2⁷</i></div>
<div><b>0</b><i>2⁶</i></div>
<div><b>0</b><i>2⁵</i></div>
<div><b>0</b><i>2⁴</i></div>
<div><b>0</b><i>2³</i></div>
<div><b>0</b><i>2²</i></div>
<div><b>0</b><i>2¹</i></div>
<div><b>0</b><i>2⁰</i></div>
</div>

<p class="note-p">Con 8 bits se representan los valores de <strong>0 a 255</strong>: 256 combinaciones. Alcanza para todas las letras, los dígitos y los signos de puntuación.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Binario</p>

## Y de ahí sale el 1024

<div class="body">

<table>
<thead><tr><th>Unidad</th><th>Equivale a</th><th>Por qué</th></tr></thead>
<tbody>
<tr><td>1 <strong>bit</strong></td><td><code>0</code> o <code>1</code></td><td>—</td></tr>
<tr><td>1 <strong>byte</strong></td><td>8 bits</td><td>2⁸ = 256 valores</td></tr>
<tr><td>1 <strong>KB</strong></td><td>1024 bytes</td><td>2¹⁰</td></tr>
<tr><td>1 <strong>MB</strong></td><td>1024 KB</td><td>2²⁰ bytes</td></tr>
<tr><td>1 <strong>GB</strong></td><td>1024 MB</td><td>2³⁰ bytes</td></tr>
</tbody>
</table>

<p class="tip">No son 1000 sino <strong>1024</strong>: la informática cuenta en potencias de 2, no de 10. Por eso un pendrive de "16 GB" muestra menos capacidad en la computadora.</p>

</div>

---

<!-- _class: ask -->

<p class="kicker">Pregunta</p>

## ¿Cuánto da <code>0.1 + 0.2</code>?

<!-- Respuesta: 0.30000000000000004
     No es un bug: 0.1 no tiene representación exacta en binario, igual que 1/3
     no la tiene en decimal. Precisión finita. Se retoma en la unidad 03. -->

---

<p class="eyebrow"><b>01</b><span>/</span>Representación</p>

## Precisión finita

<div class="body">

<div class="out">

```bash
> 0.1 + 0.2
0.30000000000000004
```

</div>

<p class="lead">No es un bug del lenguaje. <code>0.1</code> <strong>no tiene representación exacta en binario</strong>, igual que <code>1/3</code> no la tiene en decimal.</p>

<p class="tip">Tiene consecuencias prácticas cuando comparás números con decimales. Lo retomamos en la unidad 03.</p>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Cierre</p>

## Lo que hay que llevarse

<div class="body">

<table>
<thead><tr><th>Concepto</th><th>En una línea</th></tr></thead>
<tbody>
<tr><td><strong>CPU</strong></td><td>Busca, decodifica y ejecuta. Sin parar</td></tr>
<tr><td><strong>RAM</strong></td><td>Rápida y <strong>volátil</strong>. Acá viven tus variables</td></tr>
<tr><td><strong>Disco</strong></td><td>Lento y <strong>persistente</strong>. Acá viven tus archivos</td></tr>
<tr><td><strong>Sistema operativo</strong></td><td>Administra procesos, memoria, archivos y dispositivos</td></tr>
<tr><td><strong>Proceso</strong></td><td>Un programa ejecutándose, en la RAM</td></tr>
<tr><td><strong>Node.js</strong></td><td>El intérprete que ejecuta tu JavaScript</td></tr>
</tbody>
</table>

</div>

---

<p class="eyebrow"><b>01</b><span>/</span>Tarea</p>

## Instalá el entorno

<div class="body">

<div class="cols cols-2">

<div class="card">
<h3>Node.js</h3>
<p>Elegí la versión <strong>LTS</strong>, no la "Current".</p>
<p><strong>nodejs.org/en/download</strong></p>
</div>

<div class="card">
<h3>Visual Studio Code</h3>
<p>El editor donde vas a escribir todo el año.</p>
<p><strong>code.visualstudio.com</strong></p>
</div>

</div>

<p class="mem-label">Verificá que quedó instalado</p>

<div class="out">

```bash
node -v
v24.19.0
```

</div>

<div class="pitfall">
<p>Si algo falla, <strong>no te quedes trabado</strong>: anotá el error o sacale una foto y lo resolvemos al principio de la próxima clase. Es normal que tenga vueltas, sobre todo en Windows.</p>
</div>

</div>

<!-- Insistir en LTS. La "Current" trae cambios que generan diferencias
     entre las máquinas del curso.
     Links completos:
       https://nodejs.org/en/download
       https://code.visualstudio.com/ -->

---

<!-- _class: cover -->

<div class="rule"></div>

<p class="kicker">Próxima clase · Unidad 02</p>

# Tu primer programa

<div class="cover-meta">
<span>Entorno de desarrollo</span><span class="sep">·</span>
<span>Línea de comandos</span><span class="sep">·</span>
<span><code>console.log()</code></span>
</div>

<div class="cover-meta">
<span><strong>Tarea:</strong> Node.js LTS + VSCode instalados, y el TP de la unidad 01</span>
</div>

<div class="cover-meta">
<span>Todo el material del curso: <code>github.com/italijancic/pc-2026</code></span>
</div>
