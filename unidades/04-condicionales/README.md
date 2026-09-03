# 📚 Unidad 04 — Condicionales

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

Hasta ahora tus programas hacían siempre lo mismo. La clase pasada aprendiste a **preguntar**;
hoy la respuesta **decide** qué líneas se ejecutan.

- **`if`** — ejecutar un bloque sólo si se cumple una condición
- **`if` / `else`** — dos caminos, y siempre se toma uno
- **`if` / `else if` / `else`** — varios casos, y por qué **sólo se ejecuta una rama**
- **⚠️ El orden de los rangos** — el error que clasifica mal **sin fallar**
- **`switch-case`**, el `break` que falta, y el `default`
- **Cuándo `if` y cuándo `switch`**
- Comparar texto de `prompt()`: `.toLowerCase()` y por qué `'100' > '85'` da `false`

> 🔑 Nada de esto es nuevo del todo: las condiciones son las mismas de la unidad 03.

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
| [`01-if.js`](./ejemplos/01-if.js) | La forma mínima: ejecutar sólo si |
| [`02-if-else.js`](./ejemplos/02-if-else.js) | Dos caminos, y guardar la condición en una variable |
| [`03-else-if.js`](./ejemplos/03-else-if.js) | Varios casos: sólo se ejecuta el primero que da `true` |
| [`04-el-orden-importa.js`](./ejemplos/04-el-orden-importa.js) | ⚠️ Los mismos rangos, bien y mal ordenados |
| [`05-switch.js`](./ejemplos/05-switch.js) | `switch-case` sobre un código de mantenimiento |
| [`06-break-olvidado.js`](./ejemplos/06-break-olvidado.js) | Qué pasa exactamente cuando falta un `break` |
| [`07-clasificar-medicion.js`](./ejemplos/07-clasificar-medicion.js) | Integrador: leer, calcular y clasificar |
| [`08-menu-operaciones.js`](./ejemplos/08-menu-operaciones.js) | `switch` sobre una opción tipeada por el usuario |
| [`09-corregir-el-codigo.js`](./ejemplos/09-corregir-el-codigo.js) | 🔍 **Integrador de cierre:** un programa mal escrito, para corregir |

**Cómo correrlos:**

- Los ejemplos **01 al 06** funcionan solos: `node 01-if.js`
- Los ejemplos **07, 08 y 09** usan `prompt()`: copiá el contenido a `src/app.js` del
  [template](../../template) y corré `npm run dev`

> 💡 El ejemplo **04** es el más importante de la unidad. Corrélo y leé las dos salidas.

### 🔍 El integrador de cierre

El [`09-corregir-el-codigo.js`](./ejemplos/09-corregir-el-codigo.js) es un programa **mal
escrito** que repasa todo lo visto desde la unidad 01. Tiene errores de tres tipos:

| De qué tipo | Unidad |
|---|---|
| Declaraciones y nombres — `var`/`let`/`const`, idioma, formato | 03 |
| Buenas prácticas — conversiones, comparaciones, texto | 02–03 |
| Condicionales — orden de las ramas, `break`, llaves, `===` | 04 |

Ninguno es un error de sintaxis: **el programa arranca y da resultados**. El problema es que
los resultados están mal.

> 🧪 **No lo leas buscando errores.** Primero **corrélo** con una tensión de `300` y el código
> `P`, y fijate si la salida tiene sentido. Un tablero a 300 V sobre una nominal de 380 no
> puede estar NORMAL.

---

## ⚠️ Antes de la próxima clase

- Hacé el [Trabajo Práctico](./tp.pdf) — 6 problemas, sobre todo el **3** y el **6**
- **Probá cada programa con un valor por cada rama.** Un condicional probado con un solo caso
  es un condicional sin probar
- Repasá el `%` de la unidad 03: en la unidad 05 aparece en cada bucle

---

## ✅ Requisitos previos

[Unidad 03](../03-variables-y-operadores): `const`/`let`, operadores relacionales y lógicos,
`===`, y `parseInt`/`parseFloat`.

---

⬅️ [Unidad 03 — Variables y operadores](../03-variables-y-operadores) · [Índice del curso](../../README.md) · [Unidad 05 — Bucles](../05-bucles) ➡️
