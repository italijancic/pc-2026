# 📚 Unidad 08 — Matrices (Arrays Bidimensionales)

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Qué vamos a ver

Cómo guardar una **tabla** de datos —filas y columnas— bajo un mismo nombre: la estructura
de todos los problemas de ingeniería que siguen y del 2do parcial. Una matriz es un vector de
vectores, así que todo lo de la unidad 07 se aplica acá **dos veces**.

- De un vector a una tabla: la matriz de Álgebra en el código (`a_ij` ↔ `A[i][j]`)
- Declarar, crear con **una fila nueva por vuelta** y acceder por `[fila][columna]`
- Recorrer con **dos bucles anidados**: por filas y por columnas
- `console.table()` para ver la matriz
- Los algoritmos de la 07 en dos dimensiones: suma total, promedio, contar, máximo con su
  posición, **suma por fila** y **suma por columna**, matriz aleatoria
- Por qué **`.slice()` no alcanza** para copiar una matriz

---

## 📎 Material

| Archivo | Qué es |
|---------|--------|
| [`apunte.md`](./apunte.pdf) | 📘 Apunte completo de teoría. Para estudiar y consultar. |
| [`presentacion.md`](./presentacion.pdf) | 🖥️ Presentación vista en clase. |
| [`tp.md`](./tp.pdf) | 📝 Trabajo Práctico: consumo de energía de un taller de mecanizado. |
| [`ejemplos/`](./ejemplos) | 💻 Programas desarrollados en clase. |

> 📋 **¿Querés copiar código de la presentación?** Desde el PDF se copia sin la sangría.
> Abrí [`presentacion.md`](./presentacion.md) acá en GitHub: cada bloque de código tiene su
> **botón de copiar** arriba a la derecha, y se copia tal cual.

---

## 💻 Ejemplos de clase

| Archivo | Qué muestra |
|---------|-------------|
| [`01-declarar-y-acceder.js`](./ejemplos/01-declarar-y-acceder.js) | Una matriz como vector de vectores: filas, columnas, acceso por `[i][j]`, crear con bucles y qué pasa al irse de rango. |
| [`02-recorrer.js`](./ejemplos/02-recorrer.js) | Recorrido por filas y por columnas con bucles anidados, y `console.table()`. |
| [`03-algoritmos.js`](./ejemplos/03-algoritmos.js) | Suma total, promedio, contar, máximo con su posición, suma por fila, suma por columna y matriz aleatoria. |
| [`04-slice-matrices.js`](./ejemplos/04-slice-matrices.js) | ⭐ **El más importante.** `.slice()` copia sólo el vector de filas: cómo se arruina la original y cómo copiar fila por fila. |
| [`05-cargar-por-consola.js`](./ejemplos/05-cargar-por-consola.js) | Carga interactiva de una matriz con `prompt()`. |
| [`06-corregir-los-transformadores.js`](./ejemplos/06-corregir-los-transformadores.js) | 🔍 **Revisión de código:** la subestación. |

### Cómo correrlos

Los ejemplos **01 a 04** y el **06** son autocontenidos:

```bash
node 01-declarar-y-acceder.js
```

El ejemplo **05** usa `prompt()`, así que necesita el template del curso. Copialo a la carpeta
`src/` de tu proyecto y ejecutalo con `npm run dev`.

---

## 🖥️ Probar en la consola de Node

La consola de Node (`node` en la terminal, sin archivo) sirve igual que en la unidad 07 para
probar funciones, y con matrices todavía más: armás una **chica y no cuadrada** y la mirás con
`console.table()`.

```bash
$ node
> const m = [[1, 2, 3], [4, 5, 6]]
> console.table(m)
> rowSums(m)                  // ¿da [6, 15]? Hacé la cuenta a mano
```

Que sea **no cuadrada** (2 × 3, por ejemplo) importa: confundir la cantidad de filas con la
de columnas no se nota en una matriz de 3 × 3. Todo lo demás está en la Parte 6 de la
[presentación](./presentacion.pdf).

---

## 🧪 El taller de la clase

Después de la teoría se trabaja sobre **cuatro consignas**, enunciadas en la
[presentación](./presentacion.pdf) (Parte 7). Todas operan sobre la misma matriz: la
temperatura del rodamiento de tres motores durante seis horas, con alarma por encima de
`80 °C`.

| | Consigna | Firma |
|--|----------|-------|
| **A1** | Cuántas lecturas superan el límite | `countAbove(matrix, limit)` |
| **A2** | Una columna (una hora de todos los motores) como vector | `getColumn(matrix, col)` |
| **B1** | Posición de la primera lectura en alarma, o `[-1, -1]` | `firstAbove(matrix, limit)` |
| **B2** | ⭐ Los índices de los motores con al menos una alarma | `hotMotors(matrix, limit)` |

> 🔑 **B2 es la consigna del día.** Es el «primero se cuenta, después se copia» de la
> unidad 07, pero lo que se cuenta son **filas**. Y una fila es un vector: se le puede pasar
> a una función que trabaje con vectores.

---

## 🔍 La revisión de código

El [`06-corregir-los-transformadores.js`](./ejemplos/06-corregir-los-transformadores.js) es un
programa **para revisar como si te lo pasara un compañero antes de entregarlo**. Registra la
carga de los transformadores de una subestación, hora por hora. La consigna es: *¿lo aprobás?*

> 🧪 **No lo leas buscando errores. Corrélo primero.**
>
> Mirá las sumas por transformador: ¿por qué son tan prolijas? Mirá las sumas por hora, la
> primera sobrecarga y la tabla original del final. Y después pasale `npm run lint`.

---

## ✅ Requisitos previos

- **Unidad 06 — Funciones:** parámetros, valor de retorno y `rndInt()`
- **Unidad 07 — Vectores:** índices, recorridos, los algoritmos fundamentales y `.slice()`

---

## ⛔ Reglas de la cátedra

**Permitido:** `for`, `while`, `do-while`, `if`/`else`, `switch-case`, acceso por índice
(`vector[i]`, `matriz[i][j]`), `.length`, `.slice()`

**No permitido:** `map`, `filter`, `reduce`, `forEach`, `find`, `sort`, `flat`, `indexOf`,
`splice`, `fill()`, `push()`, `Array.from()`, retornar objetos/JSON

---

⬅️ [Unidad 07 — Vectores](../07-arrays-unidimensionales) · [Unidad 09 — Operaciones matriciales](../09-operaciones-matriciales) ➡️
