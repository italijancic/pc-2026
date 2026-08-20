# 📚 Unidad 03 — Variables, convenciones y operadores

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

La clase pasada usamos variables sin explicarlas. Hoy vemos **por qué** se escriben así y qué
se puede hacer con ellas.

- **`let` y `const`** — y por qué en la cátedra **no se usa `var`**
- **Ámbito de bloque:** una variable vive entre las llaves donde nació
- **Convenciones de nombres:** `camelCase`, `PascalCase`, `UPPER_SNAKE_CASE`
- **Tipos de datos** y `typeof`, la herramienta de diagnóstico
- **Operadores aritméticos**, incluido el **resto** (`%`) y para qué sirve de verdad
- **Operadores de asignación:** `+=`, `++`
- **Operadores relacionales:** `===` contra `==`, la trampa que más se cobra
- **Operadores lógicos:** `&&`, `||`, `!`
- **Coerción de tipos:** por qué `'20' + 5` da `'205'` pero `'20' - 5` da `15`

> 🔑 Los operadores relacionales y lógicos son la **materia prima de los condicionales** de la
> unidad 04. Hoy sólo los imprimimos; la clase que viene deciden qué hace el programa.

---

## 📎 Material

|  | Descargar | Leer online |
|--|-----------|-------------|
| 📘 **Apunte de teoría** | [`apunte.pdf`](./apunte.pdf) | [`apunte.md`](./apunte.md) |
| 🖥️ **Presentación de clase** | [`presentacion.pdf`](./presentacion.pdf) | [`presentacion.md`](./presentacion.md) |
| 📝 **Trabajo Práctico** | [`tp.pdf`](./tp.pdf) | [`tp.md`](./tp.md) |

---

## 💻 Ejemplos de la clase

| Archivo | Qué muestra |
|---------|-------------|
| [`01-let-const-var.js`](./ejemplos/01-let-const-var.js) | `const`, `let`, ámbito de bloque y por qué `var` no avisa |
| [`02-tipos-y-typeof.js`](./ejemplos/02-tipos-y-typeof.js) | Los cinco tipos y `typeof` como diagnóstico |
| [`03-aritmeticos.js`](./ejemplos/03-aritmeticos.js) | Los seis operadores y la precedencia |
| [`04-resto.js`](./ejemplos/04-resto.js) | El `%`: paridad y reparto en grupos |
| [`05-relacionales.js`](./ejemplos/05-relacionales.js) | Comparaciones, y `===` contra `==` |
| [`06-logicos.js`](./ejemplos/06-logicos.js) | `&&`, `\|\|` y `!` sobre casos de tablero |
| [`07-coercion.js`](./ejemplos/07-coercion.js) | Por qué el `+` es el operador raro, y qué es `NaN` |
| [`08-verificar-tension.js`](./ejemplos/08-verificar-tension.js) | Integrador: leer, calcular y verificar tolerancia |

**Cómo correrlos:**

- Los ejemplos **01 al 07** funcionan solos: `node 01-let-const-var.js`
- El ejemplo **08** usa `prompt()`, así que necesita el [template](../../template): copiá el
  contenido a `src/app.js` y corré `npm run dev`

---

## ⚠️ Antes de la próxima clase

- Hacé el [Trabajo Práctico](./tp.pdf) — 6 problemas, con verificaciones de tablero
- Tené clarísimo **`===` contra `==`**: es lo que más se cobra en el parcial
- Repasá el `%`: en la unidad 05 aparece en cada bucle

---

## ✅ Requisitos previos

[Unidad 02](../02-entorno-y-primeros-pasos): el template funcionando, `console.log()`, template
literals, `prompt()`, `parseInt`/`parseFloat` y `.toFixed()`.

---

⬅️ [Unidad 02 — Entorno y primeros pasos](../02-entorno-y-primeros-pasos) · [Índice del curso](../../README.md) · [Unidad 04 — Condicionales](../04-condicionales) ➡️
