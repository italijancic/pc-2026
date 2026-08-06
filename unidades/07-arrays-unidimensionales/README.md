# 📚 Unidad 07 — Arrays Unidimensionales (Vectores)

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

Cómo guardar **muchos valores bajo un mismo nombre** y operar sobre ellos: la estructura de
datos más importante del curso. Todo lo que viene después (matrices, problemas de ingeniería,
los dos parciales) se apoya en esto.

- El problema que resuelven los vectores
- Declarar, inicializar y acceder por **índice**
- Recorrer con `for` y con `while`
- Los **5 algoritmos fundamentales**: acumular, contar, máximo/mínimo, búsqueda lineal,
  generación aleatoria
- `.slice()` y la trampa de las **referencias**
- Cargar un vector **desde la consola**

---

## 📎 Material

| Archivo | Qué es |
|---------|--------|
| [`apunte.md`](./apunte.pdf) | 📘 Apunte completo de teoría. Para estudiar y consultar. |
| [`presentacion.md`](./presentacion.pdf) | 🖥️ Presentación vista en clase. |
| [`tp.md`](./tp.pdf) | 📝 Trabajo Práctico: análisis de mediciones de tensión de línea. |
| [`ejemplos/`](./ejemplos) | 💻 Programas desarrollados en clase. |

---

## 💻 Ejemplos de clase

| Archivo | Qué muestra |
|---------|-------------|
| [`01-declarar-y-acceder.js`](./ejemplos/01-declarar-y-acceder.js) | Las tres formas de declarar, acceso y modificación por índice, `.length`, y qué pasa cuando te vas de rango. |
| [`02-recorrer.js`](./ejemplos/02-recorrer.js) | Recorrido con `for` y con `while`, el error clásico de `i <= length`, y recorrido al revés. |
| [`03-algoritmos.js`](./ejemplos/03-algoritmos.js) | Los 5 algoritmos fundamentales, incluido **por qué no hay que inicializar el máximo en `0`**. |
| [`04-slice-referencias.js`](./ejemplos/04-slice-referencias.js) | ⭐ **El más importante.** Números por copia vs. vectores por referencia, y cómo `.slice()` lo resuelve. |
| [`05-cargar-por-consola.js`](./ejemplos/05-cargar-por-consola.js) | Carga interactiva con `prompt()` y `console.table()`. |

### Cómo correrlos

Los ejemplos **01 a 04** son autocontenidos:

```bash
node 01-declarar-y-acceder.js
```

El ejemplo **05** usa `prompt()`, así que necesita el template del curso. Copialo a la carpeta
`src/` de tu proyecto y ejecutalo con `npm run dev`.

---

## ✅ Requisitos previos

- **Unidad 05 — Bucles:** `for`, `while`, `do-while`
- **Unidad 06 — Funciones:** parámetros, valor de retorno y `rndInt()`

Todos los algoritmos de esta unidad se escriben **dentro de funciones**. Si venís flojo con
alguna de las dos unidades anteriores, repasalas antes de arrancar el TP.

---

## ⛔ Reglas de la cátedra

**Permitido:** `for`, `while`, `do-while`, `if`/`else`, `switch-case`, acceso por índice,
`.length`, `.slice()`

**No permitido:** `map`, `filter`, `reduce`, `forEach`, `find`, `sort`, `flat`, `indexOf`,
`splice`, `fill()`, `push()`, retornar objetos/JSON

---

⬅️ [Unidad 06 — Funciones](../06-funciones) · [Unidad 08 — Matrices](../08-matrices) ➡️
