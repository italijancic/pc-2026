# 📚 Unidad 02 — Entorno de desarrollo y primeros pasos

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

La clase pasada vimos **qué pasa** cuando corrés un programa. En ésta lo hacés vos.

- **Las tres herramientas:** Node.js, VSCode y la terminal — y por qué son cosas distintas
- **La terminal:** moverte por las carpetas sin el explorador de archivos
- **Si la instalación falló:** `node` no se reconoce, PowerShell bloquea `npm`
- **El proyecto de la cátedra:** qué hay adentro, `npm install` y `npm run dev`
- **Tu primer programa:** `console.log()`, template literals y comentarios
- **Pedirle datos al usuario:** `prompt()`, y por qué `20 + 5` puede dar `205`
- **`.toFixed()`:** de dónde salen los decimales que no pediste
- **Leer un mensaje de error** y entender qué te está diciendo

> 🖥️ **Es una clase con la máquina abierta.** Traé la computadora con Node y VSCode ya
> instalados.

---

## 📎 Material

|  | Descargar | Leer online |
|--|-----------|-------------|
| 📘 **Apunte de teoría** | [`apunte.pdf`](./apunte.pdf) | [`apunte.md`](./apunte.md) |
| 🖥️ **Presentación de clase** | [`presentacion.pdf`](./presentacion.pdf) | [`presentacion.md`](./presentacion.md) |
| 📝 **Trabajo Práctico** | [`tp.pdf`](./tp.pdf) | [`tp.md`](./tp.md) |

---

## 💻 Ejemplos de la clase

Los programas que desarrollamos en vivo. Están en [`ejemplos/`](./ejemplos).

| Archivo | Qué muestra |
|---------|-------------|
| [`01-hola-mundo.js`](./ejemplos/01-hola-mundo.js) | El programa más chico que se puede escribir |
| [`02-console-log.js`](./ejemplos/02-console-log.js) | Las tres formas de mostrar información |
| [`03-variables.js`](./ejemplos/03-variables.js) | Guardar datos con un nombre y calcular con ellos |
| [`04-decimales.js`](./ejemplos/04-decimales.js) | Por qué aparece `294.84999999999997` y cómo se arregla |
| [`05-leer-datos.js`](./ejemplos/05-leer-datos.js) | Leer del teclado con `prompt()` |
| [`06-la-trampa-del-texto.js`](./ejemplos/06-la-trampa-del-texto.js) | Por qué `20 + 5` da `205` |
| [`07-ficha-motor.js`](./ejemplos/07-ficha-motor.js) | Integrador: leer, convertir, calcular y mostrar |

**Cómo correrlos:**

- Los ejemplos **01 al 04** funcionan solos: `node 01-hola-mundo.js`
- Los ejemplos **05 al 07** usan `prompt()`, así que necesitan el
  [template](../../template): copiá el contenido a `src/app.js` y corré `npm run dev`

---

## ⚠️ Antes de la próxima clase

- Dejá el template funcionando: `npm run dev` tiene que correr sin errores
- Hacé el [Trabajo Práctico](./tp.pdf) — son 6 problemas y es la práctica que necesitás para
  que la unidad 03 no se te haga cuesta arriba
- Si algo no te anduvo, **traelo anotado**

---

## ✅ Requisitos previos

[Unidad 01](../01-intro-informatica), y su **Problema 7**: Node.js (versión **LTS**) y Visual
Studio Code instalados y verificados con `node -v`.

---

⬅️ [Unidad 01 — Introducción a la Informática](../01-intro-informatica) · [Índice del curso](../../README.md) · [Unidad 03 — Variables y operadores](../03-variables-y-operadores) ➡️
