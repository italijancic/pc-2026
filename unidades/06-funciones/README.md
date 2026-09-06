# 📚 Unidad 06 — Funciones

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

En el TP de la unidad 05 escribiste programas largos y repetitivos. Te dijimos que hoy iban a
entrar en la mitad de líneas. **Hoy se paga esa promesa.**

- **Declarar una función** con arrow function, y por qué no usamos `function`
- **Parámetros y argumentos** — y por qué el orden importa
- **`return`**: devuelve **y termina**. Funciones que no devuelven nada
- **Ámbito**: las variables de adentro no se ven desde afuera, y eso es bueno
- **JSDoc** — toda función lleva el suyo, y se corrige
- **`Math.random()`** y la construcción paso a paso de **`rndInt(min, max)`**
- El **pago**: el informe de la unidad 05, en la mitad de líneas

> 🔑 **`rndInt()` es la herramienta que más vas a usar de acá en adelante.** Con ella generás
> cien mediciones sin tipear ninguna, y en la unidad 07 vas a llenar vectores enteros.

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
| [`01-primera-funcion.js`](./ejemplos/01-primera-funcion.js) | El problema que resuelven: la misma cuenta tres veces |
| [`02-parametros.js`](./ejemplos/02-parametros.js) | Parámetros y argumentos, el orden, y qué pasa si faltan |
| [`03-return.js`](./ejemplos/03-return.js) | `return` devuelve **y corta** |
| [`04-sin-return.js`](./ejemplos/04-sin-return.js) | Funciones que sólo hacen, y su `undefined` |
| [`05-ambito.js`](./ejemplos/05-ambito.js) | Lo de adentro no se ve desde afuera |
| [`06-math-random.js`](./ejemplos/06-math-random.js) | Decimales entre 0 y 1 |
| [`07-rnd-int.js`](./ejemplos/07-rnd-int.js) | ⭐ `rndInt` paso a paso, y qué pasa sin el `+ 1` |
| [`08-simular-mediciones.js`](./ejemplos/08-simular-mediciones.js) | Generar datos en vez de tipearlos |
| [`09-informe-con-funciones.js`](./ejemplos/09-informe-con-funciones.js) | El informe de la unidad 05, con funciones |
| [`10-corregir-el-motor.js`](./ejemplos/10-corregir-el-motor.js) | 🔍 **Revisión de código:** el motor |

**Cómo correrlos:** todos funcionan solos con `node 01-primera-funcion.js`, salvo el **10**, que
usa `prompt()` — copiá el contenido a `src/app.js` del [template](../../template) y corré
`npm run dev`.

> ⚠️ Los ejemplos **06 al 09** usan números aleatorios: **cada ejecución da otro resultado**.
> Corrélos varias veces.
>
> 💡 El **07** es el más importante. En 1000 tiradas de un dado muestra 177 seises con el `+ 1`
> y **cero** sin él.

---

## 🔍 La revisión de código

El [`10-corregir-el-motor.js`](./ejemplos/10-corregir-el-motor.js) es un programa **para revisar
como si te lo pasara un compañero antes de entregarlo**. La consigna es: *¿lo aprobás?*

A diferencia de las revisiones anteriores, acá los errores son **de funciones**: no alcanza con
leer cada línea, hay que seguir qué recibe cada una, qué devuelve y cómo se la llama.

> 🧪 **No lo leas buscando errores. Corrélo primero**, con el motor `M-14` y `8` horas. Los
> datos del motor son 380 V · 4.2 A, y la energía está a $ 85,50 el kWh.
>
> ¿La salida tiene sentido?

---

## ⚠️ Antes de la próxima clase

- Hacé el [Trabajo Práctico](./tp.pdf) — 7 problemas, el último rehace el informe de la unidad 05
- Tené **`rndInt()` escrita de memoria**, con su JSDoc
- Repasá los tres patrones de la unidad 05: en la 07 se escriben **dentro de funciones**

---

## ✅ Requisitos previos

[Unidad 05](../05-bucles): `for`, `while`, `do-while` y los patrones acumulador, contador y
máximo/mínimo.

---

⬅️ [Unidad 05 — Bucles](../05-bucles) · [Índice del curso](../../README.md) · [Unidad 07 — Arrays unidimensionales](../07-arrays-unidimensionales) ➡️
