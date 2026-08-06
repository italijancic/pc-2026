# Programación en Computación — 2026

**Cátedra:** Programación en Computación
**Carrera:** Ingeniería Electromecánica — 2º año
**Facultad:** UTN — Facultad Regional Reconquista (FRRQ)
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 📚 Cómo usar este repositorio

Este repositorio se va **actualizando clase a clase**. El contenido se publica de forma
progresiva: cada vez que damos una unidad nueva, aparece acá.

### La primera vez

Cloná el repositorio en tu computadora:

```bash
git clone https://github.com/italijancic/pc-2026.git
cd pc-2026
```

### Antes de cada clase

Para traer el material nuevo, **desde la carpeta del repositorio**, ejecutá:

```bash
git pull
```

Eso es todo. No hace falta volver a clonar ni descargar ZIPs.

> 💡 Si `git pull` te da un error porque modificaste archivos del repo, es porque
> escribiste tus ejercicios adentro de las carpetas del repositorio. Para evitarlo,
> resolvé tus ejercicios en **tu propia copia del template** (ver abajo), fuera de `unidades/`.

---

## 🚀 Cómo armar tu proyecto de trabajo

En la carpeta [`template/`](./template) está el proyecto base con todo lo necesario para
escribir y ejecutar programas de JavaScript con Node.js.

**Copialo una sola vez** a la carpeta donde vas a trabajar (fuera de este repositorio) y
usá siempre esa copia:

```bash
cp -r template ~/mis-programas-pc
cd ~/mis-programas-pc
npm install
npm run dev
```

En Windows, copiá la carpeta `template` con el explorador de archivos, pegala donde quieras
trabajar y abrila con VSCode.

Después escribís tu código en `src/app.js` y lo corrés con `npm run dev`.

> Si `npm install` te falla en PowerShell, mirá la sección de Troubleshooting del
> [README del template](./template/README.md).

---

## 🗂️ Qué hay en este repositorio

| Carpeta | ¿La usás? |
|---------|-----------|
| [`unidades/`](./unidades) | ✅ **Sí.** El material de cada clase: apunte, presentación, TP y ejemplos |
| [`template/`](./template) | ✅ **Sí.** El proyecto base que copiás para trabajar |
| `CRONOGRAMA.md` | ✅ **Sí.** Las fechas de cada unidad |
| `.catedra/` · `.vscode/` · `CLAUDE.md` | ❌ **No.** Es la maquinaria con la que la cátedra genera los PDF de las clases. Podés ignorarla por completo |

> ⚠️ **No ejecutes `npm install` en la raíz de este repositorio.** Las dependencias que se
> instalan acá son las de la cátedra, no las tuyas. Vos trabajás en **tu copia de
> `template/`**, como se explica más abajo.

---

## 🗂️ Contenido

| # | Unidad | Tema |
|---|--------|------|
| 01 | [Introducción a la informática](./unidades/01-intro-informatica) | Hardware, software, sistema operativo, drivers |
| 02 | [Entorno y primeros pasos](./unidades/02-entorno-y-primeros-pasos) | Node.js, VSCode, línea de comandos, primer script |
| 03 | [Variables y operadores](./unidades/03-variables-y-operadores) | `var`/`let`/`const`, tipos de datos, convenciones de nombres, operadores |
| 04 | [Condicionales](./unidades/04-condicionales) | `if` / `else if` / `else`, `switch-case`, lectura por consola |
| 05 | [Bucles](./unidades/05-bucles) | `for`, `while`, `do-while` |
| 06 | [Funciones](./unidades/06-funciones) | Declaración, arrow functions, parámetros y retorno, `Math.random()` |
| 07 | [Arrays unidimensionales](./unidades/07-arrays-unidimensionales) | Vectores: carga, recorrido, algoritmos y `.slice()` |
| 08 | [Matrices](./unidades/08-matrices) | Arrays bidimensionales: declaración, recorrido, inicialización |
| 09 | [Operaciones matriciales](./unidades/09-operaciones-matriciales) | Transpuesta, simetría, producto matricial |
| 10 | [Integrador de ingeniería](./unidades/10-integrador-ingenieria) | Problemas aplicados con vectores y matrices |

Las fechas en que se dicta cada unidad están en [CRONOGRAMA.md](./CRONOGRAMA.md).

### Qué hay en cada unidad

```
unidades/NN-tema/
├── README.md         # Índice de la unidad
├── apunte.md         # Extracto de teoría (para estudiar y consultar)
├── presentacion.md   # Presentación teórica vista en clase
├── tp.md             # Trabajo práctico de la unidad
└── ejemplos/         # Programas .js desarrollados en clase
```

---

## ✅ Reglas de código de la cátedra

Todos los trabajos prácticos y exámenes se resuelven respetando estas reglas. No son
capricho: el objetivo es que demuestres que entendés la **lógica de recorrido y
manipulación de datos**, sin delegarla en métodos que la resuelven por vos.

**Permitido**

- Bucles tradicionales: `for`, `while`, `do-while`
- Estructuras de control: `if` / `else if` / `else`, `switch-case`
- Acceso por índice: `vector[i]`, `matriz[i][j]`
- `.length` y `.slice()`

**No permitido**

- Métodos de array de orden superior: `map`, `filter`, `reduce`, `forEach`, `find`, `sort`, `flat`, `indexOf`, `splice`
- Retornar objetos / JSON desde una función (sólo primitivos, vectores y matrices)
- `fill()` y `push()` para inicializar: las estructuras se inicializan con bucles

**Se espera**

- Nombres descriptivos: `studentAge`, no `x`
- `camelCase` para variables y funciones, `PascalCase` para clases
- Código modular: funciones cortas, con parámetros y valor de retorno
- Comentario de cabecera en cada función, estilo JSDoc:

```js
/**
 * Calcula la suma de todos los elementos de un vector.
 * @param {number[]} vector - Vector de números enteros
 * @returns {number} Suma total de los elementos
 */
```

---

## 📋 Material docente

Las soluciones de los trabajos prácticos, los exámenes y las notas **no están en este
repositorio**. Se publican o entregan por los canales de la cátedra según corresponda.
