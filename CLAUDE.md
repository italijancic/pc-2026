# Programación en Computación 2026 — Contexto para Claude

## Qué es este repositorio

Repositorio **público, cara al alumno**, de la cátedra **Programación en Computación**
(2º año de Ingeniería Electromecánica, UTN — Facultad Regional Reconquista).

**Docentes:** Longhi Pablo, Talijancic Iván

El material se entrega de forma **progresiva**: cada unidad se publica (commit + push)
recién cuando se dicta la clase. El alumno actualiza con `git pull`.

## Flujo de trabajo

### Repos en GitHub

| Repo | Visibilidad | Contiene |
|------|-------------|----------|
| `italijancic/pc-2026` | **público** | Este repo. Unidades, template, cronograma. Lo que ve el alumno. |
| `italijancic/pc-2026-docente` | **privado** | Soluciones de TP, parciales, finales, entregas de alumnos, notas. |
| `italijancic/utn-pc-template` | público | Template original. Ya está copiado en `template/`; sólo lo usa `/pc:new-final-exam` para armar exámenes. |

### En la máquina del docente

```
~/utn-pc/
├── pc-2026/            ← clon del repo PÚBLICO. Acá se preparan las clases.
├── pc-2026-docente/    ← clon del repo PRIVADO. Soluciones y exámenes.
├── pc-2025/            ← dictado anterior. Referencia, no se modifica.
└── exams-templates/    ← banco de enunciados de examen ya usados.
```

### Dónde se prepara una clase

**En `~/utn-pc/pc-2026/`, directamente.** No hay carpeta de borradores: **git es el borrador**.
Mientras no hagas `push`, el alumno no ve nada.

Para preparar una unidad con anticipación, usá una rama por unidad. Así no existe el riesgo de
publicar sin querer con un `git push` reflejo:

```bash
git switch -c clase/01          # preparar la unidad 01
# … generar material, renderizar, revisar …
git add unidades/01-intro-informatica
git commit -m "Unidad 01: introduccion a la informatica"
```

Y **el día de la clase**, publicar:

```bash
git switch main
git merge clase/01
git push
```

El alumno hace `git pull` y le aparece la unidad.

### Mensajes de commit

**[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).** Asunto en una línea,
imperativo, minúscula, sin punto final, **máximo 72 caracteres**. Cuerpo sólo si aporta algo que
el diff no dice.

```
<tipo>(<alcance>): <descripción>
```

| Tipo | Cuándo |
|------|--------|
| `feat` | Material nuevo: una unidad, un TP, un ejemplo |
| `fix` | Corregir un error en el material o en el código |
| `docs` | README, CRONOGRAMA, CLAUDE.md |
| `style` | Tema Marp, hojas de estilo, formato |
| `refactor` | Reorganizar sin cambiar el contenido |
| `build` | Dependencias, template, `package.json` |
| `chore` | Tareas de mantenimiento |

**Alcance:** `uNN` para una unidad (`u01`, `u07`), o el área (`template`, `tema`, `tools`,
`cronograma`).

```
feat(u07): apunte, presentacion y tp de vectores
fix(template): eliminar eslint.config.js que pisaba al .mjs
docs(cronograma): marcar unidad 01 como dictada
style(tema): desactivar ligaduras en los bloques de codigo
refactor: agrupar herramientas de render en .catedra
build(template): actualizar a eslint 10
```

**Nada de mensajes de veinte líneas explicando lo obvio.** El asunto tiene que alcanzar para
entender el commit en un `git log --oneline`.

### Qué se commitea al repo del alumno

**Sí:**

| Archivo | Por qué |
|---------|---------|
| `apunte.md`, `presentacion.md`, `tp.md` | Las fuentes. Se leen en GitHub y se diffean. |
| `apunte.pdf`, `presentacion.pdf`, `tp.pdf` | El entregable. El alumno los baja de GitHub sin instalar nada. |
| `ejemplos/*.js` | Los programas de la clase. |
| `README.md` de la unidad | Índice de la unidad. |
| `CRONOGRAMA.md` | Marcar la unidad como ✅ dictada. |
| `README.md` raíz, `template/` | Sólo cuando cambian. |

**No:**

`presentacion.html` · `presentacion.pptx` · `node_modules/` · soluciones de TP · exámenes ·
notas. Los tres primeros están en `.gitignore`; los otros no deben existir en este repo.

### Links dentro del material

Dos reglas, las dos automatizables con `npm run links`:

**1. Si existe el PDF, el link va al PDF.** El alumno quiere abrir el documento, no la fuente
en Markdown. Aplica a `presentacion`, `apunte` y `tp`.

**2. En `apunte.md` y `tp.md`, URLs absolutas de GitHub**
(`https://github.com/italijancic/pc-2026/blob/main/unidades/...`). Esos archivos se convierten
a PDF, y en un PDF un link relativo **está muerto**: apunta a un archivo que el alumno no
tiene. En los `README.md` van relativos, que sirven para navegar el repo.

`npm run all` ya corre `fix-links.mjs` al terminar. Para verificar sin escribir:
`npm run links -- --check` (sale con código 1 si falta corregir alguno). Los dos se corren
desde `.catedra/`.

## Regla crítica: qué NO va en este repo

Este repositorio es público. **Nunca** escribir acá:

- Soluciones de trabajos prácticos (`*-solution.js`, `solucion.js`, `solvedClassNotes.md`)
- Enunciados o resoluciones de parciales y finales
- Entregas de alumnos
- Notas / calificaciones

Todo eso vive en `~/utn-pc/pc-2026-docente/` (repo privado). Si una tarea requiere generar
una solución de referencia, escribila ahí, no acá.

## Estructura

La raíz tiene **sólo lo que usa el alumno**. Toda la maquinaria del docente vive en
`.catedra/`.

```
pc-2026/
├── README.md                    # Guía para el alumno + índice de unidades
├── CRONOGRAMA.md                # Fecha → unidad. Único archivo con fechas.
├── CLAUDE.md                    # Este archivo
├── template/                    # Proyecto base Node.js (UNA copia para todo el año)
├── unidades/
│   └── NN-tema/
│       ├── README.md            # Índice de la unidad
│       ├── apunte.md            # → apunte.pdf
│       ├── presentacion.md      # Presentación Marp → presentacion.pdf
│       ├── tp.md                # → tp.pdf
│       └── ejemplos/            # Programas .js desarrollados en clase
├── .vscode/                     # settings.json (tema Marp) + extensions.json
└── .catedra/                    # ⚙️ Maquinaria del docente. El alumno la ignora.
    ├── package.json             # Scripts de render. NO hay package.json en la raíz.
    ├── .tool-versions           # nodejs 24.19.0 (asdf). Ver abajo por qué acá y no en la raíz.
    ├── .marprc.yml              # Config de Marp
    ├── themes/pc.css            # Tema Marp. UN archivo para las 10 unidades.
    ├── tools/
    │   ├── render.mjs           # Presentaciones → PDF/HTML/PPTX · apunte y tp → PDF
    │   ├── check-slides.mjs     # Detector de desborde de diapositivas
    │   ├── fix-links.mjs        # Rutea los links al PDF cuando el PDF existe
    │   └── apunte-print.css     # Hoja de impresión de los documentos (no es tema Marp)
    └── node_modules/            # ignorado por git
```

**Los generados van junto a su fuente**, no en un `build/` aparte: al preparar la clase abrís
la carpeta de la unidad y tenés fuente y entregables juntos. Es la misma convención que la
cátedra de TSyCA. Los **PDF se versionan** (el alumno los descarga de GitHub sin instalar
nada); el HTML y el PPTX están en `.gitignore` por voluminosos y regenerables.

**Por qué la raíz no tiene `package.json`:** para que un alumno no ejecute `npm install` ahí y
se baje 126 MB de dependencias de la cátedra (marp, puppeteer) que no usa, creyendo que la raíz
del repo es donde tiene que trabajar. Consecuencia: **los `npm run …` se corren desde
`.catedra/`**.

⚠️ **`.catedra/tools/apunte-print.css` no puede vivir en `.catedra/themes/`**: `themeSet` intenta
registrar todo lo que hay ahí como tema Marp y falla con `requires @theme meta`.

⚠️ **El tema se pasa explícito a marp con ruta absoluta** (`--theme-set`), no se deja sólo en
`.marprc.yml`: marp busca esa config en el **cwd**, así que invocado desde otra carpeta no la
encuentra, cae al tema por defecto y genera el material **sin formato, en silencio**.
`render.mjs` además verifica que el tema quedó aplicado y falla si no.

⚠️ **No encadenar comandos con `&&` en los scripts de npm**: npm pega los argumentos al
**último** comando de la cadena, así que `npm run all -- 07` le pasaba el filtro al comando
equivocado y se procesaban todas las unidades sin avisar. Si un script necesita varios pasos,
que los orqueste el `.mjs`.

**Las carpetas se nombran por unidad, no por fecha.** Numeración de dos dígitos + slug en
kebab-case (`06-arrays-unidimensionales`). Esto hace que ordenen cronológicamente y que el
contenido sea reutilizable el año siguiente cambiando sólo `CRONOGRAMA.md`.

**Los ejemplos son `.js` sueltos**, sin `package.json` ni `eslint.config` propios. Existe
un único `template/` en la raíz. No duplicar el template por unidad (en 2025 eso generó
tres configuraciones de ESLint distintas conviviendo en el mismo repo).

## Convenciones de código de la cátedra

Estas reglas aplican a **todo** el código que se escriba: ejemplos de clase, enunciados de
TP, soluciones de referencia y exámenes. Son las mismas con las que se corrige.

### Permitido

- Bucles tradicionales: `for`, `while`, `do-while`
- Estructuras de control: `if` / `else if` / `else`, `switch-case`
- Acceso por índice: `vector[i]`, `matriz[i][j]`
- `.length` y `.slice()`

### Prohibido

- Métodos de array de orden superior: `map`, `filter`, `reduce`, `forEach`, `find`, `sort`,
  `flat`, `indexOf`, `splice`
- Retornar objetos / JSON desde una función — sólo primitivos, vectores y matrices
- `fill()` y `push()` para inicializar estructuras: se inicializan con bucles
- Cualquier técnica o patrón que exceda el nivel del curso

> Las prohibiciones son **pedagógicas**: el alumno debe demostrar que entiende la lógica de
> recorrido y manipulación de arrays sin delegarla en métodos que la resuelven por él.

### Estilo

- **Sin punto y coma** al final de las sentencias (regla `semi: never` en `eslint.config.mjs`)
- ES Modules (`import` / `export`), no CommonJS
- `camelCase` para variables y funciones, `PascalCase` para clases, `UPPER_SNAKE_CASE` para constantes
- Nombres descriptivos: `studentAge`, nunca `x`
- Código modular: funciones cortas, con parámetros y valor de retorno. No todo en el main.
- Devolver `.slice()` al retornar un vector desde una función (desacoplamiento por referencia)
- Comentario de cabecera JSDoc en cada función:

```js
/**
 * Calcula la suma de todos los elementos de un vector.
 * @param {number[]} vector - Vector de números enteros
 * @returns {number} Suma total de los elementos
 */
```

### Utilidades canónicas

Se reusan tal cual a lo largo de todo el curso:

```js
import { prompt } from './prompt.js'

/**
 * Genera un número entero aleatorio en el rango [min, max].
 * @param {number} min - Valor mínimo del rango (inclusive)
 * @param {number} max - Valor máximo del rango (inclusive)
 * @returns {number} Entero aleatorio entre min y max
 */
const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
```

Entrada por consola: siempre vía `prompt()` de `src/prompt.js`, con `parseInt()` /
`parseFloat()` según el tipo.

## Cómo escribir material

### Idioma

Todo el material del alumno va en **español**. Los identificadores del código (nombres de
variables y funciones) van en **inglés** — es lo que se hizo en 2025 y lo que se espera en
los exámenes (`getRandomVector`, `sumAll`, `rowSums`, `isSymmetric`).

### Apunte (`apunte.md`)

Extracto de teoría para estudiar y consultar. Denso pero acotado. Estructura:
concepto → sintaxis → ejemplo mínimo ejecutable → errores comunes. Cada bloque de código
debe poder copiarse y correr sin modificaciones.

### Presentación (`presentacion.md`)

**Presentaciones en Marp** (https://marp.app), tema propio en `.catedra/themes/pc.css`. El Markdown es
la fuente de verdad: legible en GitHub y editable en VSCode.

Frontmatter obligatorio:

```yaml
---
marp: true
theme: pc
paginate: true
footer: 'Programación en Computación · UTN FRRQ · 2026'
---
```

**El tema no estila Markdown crudo: estila componentes.** Se escribe HTML con clases, igual
que en la cátedra de TSyCA. Por eso `.marprc.yml` tiene `html: true`.

#### Anatomía de una diapositiva

```markdown
<p class="eyebrow"><b>07</b><span>/</span>Recorrer</p>

## Título de la diapositiva

<div class="body">

  … contenido …

</div>
```

`.eyebrow` y el `h2` quedan anclados arriba; `.body` ocupa el alto restante y **centra su
contenido verticalmente**. Para alinearlo arriba: `<div class="body top">`.

#### Catálogo de componentes

| Clase | Para qué |
|-------|----------|
| `_class: cover` | Portada y cierre. Usa `.rule`, `.kicker`, `h1`, `.cover-meta` |
| `_class: chapter` | Separador de bloque temático, fondo oscuro |
| `_class: ask` | Pregunta abierta al curso, una sola idea centrada |
| `.body` / `.body.top` | Contenedor del contenido (centrado / arriba) |
| `.cols .cols-2` `.cols-3` `.cols-2-1` `.cols-1-2` | Columnas. **Cada columna debe ser un `<div>`** |
| `.file` con `data-name="app.js"` | Panel de código con chip de nombre de archivo |
| `.out` | Bloque de salida de consola (etiqueta SALIDA + borde de acento) |
| `.compare` sobre `.cols-2`, con `<span class="bad">` / `<span class="good">` | Así no / así sí |
| `.mem` con `<div><b>valor</b><i>índice</i></div>` | Diagrama de vector en memoria. `.is-mark` resalta, `.is-bad` marca error |
| `.trace` sobre una `<table>` | Traza de ejecución: variables iteración por iteración |
| `.pitfall` | Error frecuente (los que se corrigen como graves) |
| `.tip` | Nota al margen con barra de acento |
| `.callout` | Idea a destacar, centrada. Admite `<small>` |
| `.lead` `.note-p` `.statement` `.tag` `.card` `.bullets` `.enum` `.pillars` | Texto y listas |

Componentes propios de esta materia y muy útiles: **`.mem`** para mostrar índices y valores
sin dibujar SVG, y **`.trace`** para seguir un acumulador iteración por iteración — es la
mejor herramienta que hay para enseñar bucles.

#### Reglas

- Una idea por diapositiva, poco texto, mucho código
- Notas del docente como comentarios HTML (`<!-- … -->`): invisibles en la diapositiva, viajan
  en el PDF vía `--pdf-notes`
- **No poner CSS dentro de una presentación.** El tema vive en un solo archivo y cambia las
  10 unidades a la vez
- **Un `---` dentro de un bloque de código parte la diapositiva.** Indentalo o usá otro carácter
- Dejar una línea en blanco antes y después de un bloque de código dentro de un `<div>`, o
  Marp no lo procesa
- **Correr `npm run check` (desde `.catedra/`) antes de dar la unidad por terminada.** El tema recorta con
  `overflow: hidden`, así que el exceso de contenido no se rompe: desaparece
- No es el apunte con saltos de página: es el guion visual de la clase

### Fórmulas

Se escriben en LaTeX y las renderiza **KaTeX** en el pipeline de `render.mjs`: `$…$` en línea
y `$$…$$` en bloque. Sin eso, `marked` deja el LaTeX crudo y el alumno lee `$$\frac{V}{I}$$`
en el PDF.

⚠️ **El `$` de cierre necesita un espacio o una coma después.** Si le sigue un guion largo o
un paréntesis (`$10^{-14}$—`, `$P$)`), la fórmula **no se renderiza y no avisa**: sale el
LaTeX crudo. Es el modo estricto, elegido a propósito — el permisivo (`nonStandard`) arregla
eso pero puede aparear dos `$` de importes en pesos y convertir medio párrafo en fórmula.

### Trabajo práctico (`tp.md`)

Estructura que se usa en la cátedra (verificada contra los TPs y parciales de 2025):

> ⛔ **Los TP no se entregan, no llevan nota y no condicionan la aprobación.** Son práctica
> complementaria para que el alumno fije lo visto en clase. Por lo tanto, **un `tp.md` nunca
> lleva sección "Qué entregar" ni "Criterios de corrección"**: la rúbrica es información
> interna del docente.

1. **Título y autor**
2. **Objetivos** — qué conceptos consolida
3. **Consignas generales** — restricciones de métodos, JSDoc obligatorio, retorno único
4. **Problemas numerados y progresivos** — cada uno con:
   - Descripción del problema
   - Firma de función esperada, cuando aplica (` const createRandomMatrix = (rows, cols) => { ... }`)
   - **Ejemplo de entrada y salida de consola** — no negociable: el alumno necesita ver el
     formato exacto esperado
5. **Restricciones** — lista explícita de métodos prohibidos

**Orden de las unidades: funciones (06) antes que vectores (07).** Cambio deliberado respecto
de 2025, donde los vectores se dieron el `03-09` y las funciones el `10-09`. Consecuencias al
generar material:

- Un TP de la unidad 06 **no puede** usar vectores todavía: las funciones se enseñan sobre
  escalares (`esPar(n)`, `rndInt(min, max)`, `calcularPromedio(a, b, c)`).
- Todo TP de la unidad 07 en adelante **sí debe exigir** modularización en funciones con
  parámetros y valor de retorno.
- `rndInt()` se introduce en 06 y se reusa de ahí en adelante.
- `.slice()` se enseña en 07, no en 06: recién tiene sentido cuando existen vectores y se
  puede hablar de copia por referencia.

**Regla general:** antes de escribir un TP o un ejemplo, verificá en `CRONOGRAMA.md` qué
unidades lo preceden. **Nunca pidas un concepto que todavía no se dictó.**

**Calibración de dificultad.** El nivel de referencia son los TPs y parciales de 2025
(disponibles en `~/utn-pc/pc-2025/lessons/` y `~/utn-pc/exams-templates/`). Anclas:

- **TP de unidad temática:** 4 a 7 problemas, progresivos, el último integra los anteriores.
  Nivel del `2d-arrays-tp.md` o del `2nd-tp.md` de 2025.
- **Problema integrador / parcial:** un caso de ingeniería (paneles solares, sensores
  industriales, ascensor, mantenimiento preventivo) descompuesto en 5 incisos, donde el
  inciso 1 genera datos aleatorios y los siguientes calculan métricas sobre ellos.
- Los enunciados de ingeniería son mejores que los abstractos: la carrera es electromecánica.

## Comandos disponibles

| Comando | Para qué |
|---------|----------|
| `/pc:nueva-unidad` | Scaffolding + contenido de una unidad nueva (apunte, presentación, TP, ejemplos) |
| `/pc:nuevo-tp` | Un TP suelto, calibrado al nivel de la cátedra |
| `/pc:render` | Renderiza con Marp: presentación a HTML/PDF/PPTX y apunte a PDF |
| `/pc:new-final-exam` | Inicializa un examen final nuevo (trabaja en el repo docente) |
| `/pc:corregir` | Corrige entregas de alumnos de un examen |

## Stack

Política de versiones: **última estable de cada herramienta**, con una excepción deliberada
en Node (ver abajo). Verificado el 03-08-2026.

| Herramienta | Versión | Nota |
|-------------|---------|------|
| Node.js | **24.19.0 LTS** (Krypton) | Existe 26.7.0, pero **no es LTS** hasta oct-2026. Con 30 alumnos instalando, LTS evita problemas irreproducibles. Soporte hasta 2028. |
| ESLint | **10.8.0** | Flat config en `eslint.config.mjs`, `semi: never`. Verificado: pasa limpio sobre el template. |
| `@eslint/js` | 10.0.1 | |
| `globals` | 17.9.0 | |
| `readline-sync` | 1.4.10 | Sin cambios upstream; es la última. |
| Marp CLI | **4.5.0** | Dependencia de desarrollo del repo raíz (`npm install`). |
| `marked` | 16.4.0 | Markdown → HTML para el PDF de los apuntes. |
| `katex` | 0.17.0 | Fórmulas del material, renderizadas del lado del servidor. |
| `marked-katex-extension` | 5.1.10 | Engancha KaTeX a marked. |
| `puppeteer-core` | 24.9.0 | Usado por `check-slides.mjs` con el Chrome del sistema. |

**Tipografía:** la display face es **JetBrains Mono NL** — monoespaciada, sin serifa, y la
variante **NL (No Ligatures) es deliberada**: con ligaduras, `===` se dibuja como `═══` y `++`
como `⁺⁺`, y el alumno tiene que ver exactamente los caracteres que va a tipear.

- **Módulos:** ES Modules (`"type": "module"`)
- **Chrome** es requisito sólo para exportar PDF/PPTX con Marp, no para el curso

### La versión de Node se fija en `.catedra/`, no en la raíz

`.catedra/.tool-versions` fija **nodejs 24.19.0** para asdf, así el render no depende de qué
intérprete gane en el `PATH`.

**Va ahí y no en la raíz a propósito.** Un `.tool-versions` en la raíz aplicaría también al
alumno, y el alumno **no usa asdf**: instala Node con el instalador de nodejs.org. Si tuviera
asdf, un pin en la raíz le fallaría con «version not installed» por una versión que no tiene
motivo para tener. La raíz es del alumno; el pin es del docente.

`template/` tampoco lleva `.tool-versions`: el `engines` de su `package.json` dice
`>=24.0.0`, que es un **piso, no un pin**. Subirlo a `>=24.19.0` sólo lograría que a quien
instaló 24.18 le falle `npm install`, sin ningún beneficio.

### ⚠️ Dónde se corren los comandos

Hay **dos `package.json` distintos** y se corren desde lugares distintos:

| Qué | Dónde | Comandos |
|-----|-------|----------|
| **Render del material** (docente) | `~/utn-pc/pc-2026/.catedra` | `npm run all` · `npm run build` · `npm run docs` · `npm run check` · `npm run links` · `npm run watch` · `npm run html` |
| **Programas del curso** (alumno) | su copia de `template/` | `npm run dev` · `npm run lint` |

**La raíz del repo no tiene `package.json` a propósito**, para que un alumno no ejecute
`npm install` ahí y se baje 126 MB de dependencias que no usa. Consecuencia: `npm run …` desde
la raíz falla con `Could not read package.json`. Siempre `cd .catedra` primero.

Para una unidad puntual, el filtro va después de `--`:

```bash
cd ~/utn-pc/pc-2026/.catedra
npm run all -- 01
npm run check
```

Invocando el script directo, la ruta al `.mjs` es relativa al **cwd** (las rutas internas del
script sí se resuelven desde su propia ubicación, así que la lógica anda desde cualquier lado):

```bash
node .catedra/tools/render.mjs --pdf 01          # desde la raíz del repo
node ../../.catedra/tools/render.mjs --pdf 01    # desde unidades/01-…/
```

> ⚠️ **Los ejemplos que usan `prompt()` no se pueden verificar automáticamente en un entorno
> sin TTY:** `readline-sync` requiere `/dev/tty` y falla con la entrada por pipe. Para
> verificar la lógica de un ejemplo interactivo, reemplazá temporalmente las llamadas a
> `prompt()` por valores fijos y ejecutalo así. No lo reportes como bug del template.

> El template tiene un solo `eslint.config.mjs`. Si aparece también un `eslint.config.js`,
> **borrarlo**: ESLint lo resuelve con prioridad y el que está upstream declara
> `globals.browser` (incorrecto para Node) y no aplica `semi: never`.
