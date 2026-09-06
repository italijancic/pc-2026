# 📚 Unidad 05 — Bucles

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

Todos tus programas hasta ahora procesan **una** medición. Hoy aprendés a decirle a la
computadora *"hacé esto treinta veces"*.

- **`for`** — cuando sabés cuántas veces, y las tres partes de su cabecera
- **`while`** y **`do-while`** — y cuándo conviene cada uno
- **La traza** — la herramienta para depurar un bucle: una columna por variable, una fila por vuelta
- **Los tres patrones:** acumulador, contador y máximo/mínimo
- **Bucles anidados** — presentación breve; se usan en serio en la unidad 08
- **Bucles infinitos** — las tres causas, y cómo salir con `Ctrl + C`

> 🔑 **Lo de hoy es la base de la unidad 07.** Cuando aparezcan los vectores, se recorren con
> estos mismos bucles y estos mismos patrones. Si hoy queda flojo, ahí se nota.

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
| [`01-for.js`](./ejemplos/01-for.js) | Las tres partes, y que el paso no tiene que ser de a uno |
| [`02-la-traza.js`](./ejemplos/02-la-traza.js) | El bucle imprime su propia traza, paso a paso |
| [`03-while.js`](./ejemplos/03-while.js) | Las mismas tres piezas, repartidas |
| [`04-do-while.js`](./ejemplos/04-do-while.js) | El caso límite: condición falsa de entrada |
| [`05-acumulador.js`](./ejemplos/05-acumulador.js) | El patrón central, y qué pasa si se declara adentro |
| [`06-contador.js`](./ejemplos/06-contador.js) | Bucle + condicional |
| [`07-maximo-y-minimo.js`](./ejemplos/07-maximo-y-minimo.js) | ⚠️ La trampa de inicializar en cero |
| [`08-anidados.js`](./ejemplos/08-anidados.js) | Un bucle adentro de otro |
| [`09-cargar-mediciones.js`](./ejemplos/09-cargar-mediciones.js) | Leer N datos y promediar |
| [`10-centinela.js`](./ejemplos/10-centinela.js) | `do-while` hasta que el usuario diga basta |
| [`11-corregir-la-bomba.js`](./ejemplos/11-corregir-la-bomba.js) | 🔍 **Revisión de código:** la bomba |
| [`12-corregir-el-horno.js`](./ejemplos/12-corregir-el-horno.js) | 🔍🔍 **Revisión de código:** el horno — **más difícil** |

**Cómo correrlos:**

- Los ejemplos **01 al 08** funcionan solos: `node 01-for.js`
- Los ejemplos **09 al 12** usan `prompt()`: copiá el contenido a `src/app.js` del
  [template](../../template) y corré `npm run dev`

> 💡 El **07** es el más importante de la unidad. Corrélo: muestra el mismo patrón dando bien
> con tensiones y mal con temperaturas bajo cero.

### 🔍 Las dos revisiones de código

Dos programas **para revisar como si te los pasara un compañero antes de entregarlos**. La
consigna es la misma en los dos: *¿lo aprobás?*

| Archivo | Tema | Nivel |
|---|---|:-:|
| [`11-corregir-la-bomba.js`](./ejemplos/11-corregir-la-bomba.js) | Caudal de una bomba | 🔍 |
| [`12-corregir-el-horno.js`](./ejemplos/12-corregir-el-horno.js) | Temperatura de un horno | 🔍🔍 |

**El 12 es bastante más difícil.** En el de la bomba los problemas se ven en la primera corrida;
en el del horno casi todos aparecen **sólo en los casos borde**. Con una jornada normal el
programa parece medio andar — hay que probarlo con temperaturas bajo cero y con cero mediciones
para que se caiga entero.

> 🧪 **No los leas buscando errores. Corrélos primero.**
>
> - El **11**, con 4 mediciones: `45 · 52 · 68 · 38` (el rango de trabajo es 40 a 60)
> - El **12**, con los tres casos que dice su enunciado — incluido cortar sin cargar nada
>
> ¿La salida tiene sentido?

> 🛑 **Uno de los errores del 12 hace que el programa no termine.** Si se te cuelga imprimiendo
> sin parar, `Ctrl + C`. No es un problema de tu máquina: es el hallazgo.

---

## 🧠 Los tres patrones

Los que hay que saber **de memoria**, porque vuelven en cada unidad de acá en adelante:

```js
let total = 0                        // ACUMULADOR — sumar, promediar
for (...) { total = total + valor }

let cuantos = 0                      // CONTADOR — cuántos cumplen algo
for (...) { if (cond) { cuantos++ } }

let maximo = primerValor             // MÁXIMO — el campeón
for (...) { if (v > maximo) { maximo = v } }
```

Los tres tienen la misma forma: **declarar antes · actualizar adentro · usar después.**

---

## ⚠️ Antes de la próxima clase

- Hacé el [Trabajo Práctico](./tp.pdf) — 7 problemas, el último integra todo
- Practicá la **traza en papel**: es lo que más rinde para depurar en el parcial
- Probá cada programa con **cero** y con **una sola** medición, no sólo con el caso lindo

> 🛑 Si un programa queda colgado imprimiendo sin parar: **`Ctrl + C`** y revisá el incremento.

---

## ✅ Requisitos previos

[Unidad 04](../04-condicionales): `if` / `else if` / `else`, operadores relacionales y lógicos,
y `parseInt` / `parseFloat`.

---

⬅️ [Unidad 04 — Condicionales](../04-condicionales) · [Índice del curso](../../README.md) · [Unidad 06 — Funciones](../06-funciones) ➡️
