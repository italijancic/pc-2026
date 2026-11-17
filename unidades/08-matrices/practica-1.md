# 🧪 Práctica integradora de matrices

## Mantenimiento predictivo: vibración de motores

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

> 🎯 **Esta práctica tiene el formato del 2do parcial:** un caso de ingeniería, cinco incisos, y
> el primero genera los datos. Resolvela como si fuera el examen: todo en funciones, con
> parámetros y valor de retorno.
>
> Dos cosas nuevas respecto del 1er parcial, y las dos van a estar en el 2do:
>
> - **Las firmas de las funciones se dan sólo en los incisos 1 y 2.** Del 3 en adelante, cómo
>   dividir el problema en funciones lo decidís vos.
> - **Leé cada regla con atención.** Alguna no es la de siempre: por ejemplo, ante un empate no
>   siempre gana el primero.
>
> **No hace falta saber de vibraciones.** Todo lo que hay que calcular está definido con su
> fórmula.

---

## 📘 Contexto

En una planta, el área de mantenimiento mide una vez por día la **vibración** (en mm/s) de
**6 motores** durante una semana, para detectar fallas antes de que ocurran. Los datos se guardan
en una **matriz VIB[6][7]**: la fila `i` es el motor y la columna `j`, el día.

Cada motor tiene un **límite de vibración** según su tamaño. Los datos fijos son:

| Índice | 0 | 1 | 2 | 3 | 4 | 5 |
|--------|---|---|---|---|---|---|
| Motor | M-01 | M-02 | M-03 | M-04 | M-05 | M-06 |
| Límite (mm/s) | 4.5 | 4.5 | 4.5 | 7.1 | 7.1 | 7.1 |

```js
const MOTORS = ['M-01', 'M-02', 'M-03', 'M-04', 'M-05', 'M-06']
const LIMIT = [4.5, 4.5, 4.5, 7.1, 7.1, 7.1]   // mm/s
const DAYS = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
```

---

## Se pide

### 1. Generación de datos

Generá la matriz **VIB** con la vibración de cada motor en cada día. Los valores tienen **1
decimal** y el máximo **depende del límite de cada motor**:

```
VIB[i][j] = rndInt(5, Math.round(16 * LIMIT[i])) / 10        (mm/s)
```

Es decir, entre 0.5 mm/s y 1.6 veces el límite del motor `i`. Por ejemplo, para un motor de
4.5 mm/s, entre 0.5 y 7.2. Mostrá la matriz con `console.table()`.

```js
const createVibrationMatrix = (limits, days) => { ... }
```

Para comparar con los ejemplos, mientras desarrollás usá esta matriz fija:

```js
const VIB = [
  [2.1, 2.4, 3.6, 4.5, 4.9, 5.3, 2.2],
  [1.8, 1.9, 2.0, 2.2, 2.1, 1.9, 2.0],
  [3.0, 4.7, 3.1, 2.9, 3.2, 3.0, 3.3],
  [5.2, 5.5, 5.9, 6.3, 7.1, 7.6, 8.4],
  [9.1, 4.0, 3.8, 4.2, 4.1, 3.9, 4.0],
  [6.0, 6.2, 5.8, 9.1, 6.1, 5.9, 6.0]
]
```

### 2. Promedios

**a)** Calculá el **promedio de cada motor** (de cada fila) en la semana.

**b)** Calculá el **promedio de cada día** (de cada columna) entre todos los motores.

```
promedio del motor i = (VIB[i][0] + VIB[i][1] + ... + VIB[i][6]) / 7        (1 decimal)
promedio del día j   = (VIB[0][j] + VIB[1][j] + ... + VIB[5][j]) / 6        (1 decimal)
```

```js
const rowAverages = (matrix) => { ... }
const colAverages = (matrix) => { ... }
```

**Ejemplo de salida:**

```bash
Promedio por motor (mm/s):
  M-01: 3.6  (límite 4.5)
  M-02: 2.0  (límite 4.5)
  M-03: 3.3  (límite 4.5)
  M-04: 6.6  (límite 7.1)
  M-05: 4.7  (límite 7.1)
  M-06: 6.4  (límite 7.1)
Promedio por día (mm/s):
  Lun: 4.5
  Mar: 4.1
  Mie: 4.0
  Jue: 4.9
  Vie: 4.6
  Sab: 4.6
  Dom: 4.3
```

### 3. Estado de cada medición

Generá la **matriz STATE**, del mismo tamaño que VIB, con el estado de cada medición. El
estado se decide con el **límite del motor de esa fila**:

```
si VIB[i][j] < 0.8 * LIMIT[i]:                    "OK"
si 0.8 * LIMIT[i] <= VIB[i][j] <= LIMIT[i]:       "ALERTA"
si VIB[i][j] > LIMIT[i]:                          "ALARMA"
```

Después contá cuántas **ALARMA** tuvo cada motor y cuántas hubo en toda la semana.

> ✍️ **Desde acá, las funciones las diseñás vos:** nombre, parámetros y qué devuelven.

**Ejemplo de salida:**

```bash
Estado de cada medición:
┌─────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ (index) │ 0        │ 1        │ 2        │ 3        │ 4        │ 5        │ 6        │
├─────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ 0       │ 'OK'     │ 'OK'     │ 'ALERTA' │ 'ALERTA' │ 'ALARMA' │ 'ALARMA' │ 'OK'     │
│ 1       │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │
│ 2       │ 'OK'     │ 'ALARMA' │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │
│ 3       │ 'OK'     │ 'OK'     │ 'ALERTA' │ 'ALERTA' │ 'ALERTA' │ 'ALARMA' │ 'ALARMA' │
│ 4       │ 'ALARMA' │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │ 'OK'     │
│ 5       │ 'ALERTA' │ 'ALERTA' │ 'ALERTA' │ 'ALARMA' │ 'ALERTA' │ 'ALERTA' │ 'ALERTA' │
└─────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
Alarmas por motor:
  M-01: 2
  M-02: 0
  M-03: 1
  M-04: 2
  M-05: 1
  M-06: 1
Total de alarmas en la semana: 7
```

> ⚠️ Mirá el Mié del M-01: 3.6 es justo el 80 % de 4.5, así que es **ALERTA**, no OK. Y el Vie
> del M-04 vale 7.1, igual al límite: también es **ALERTA**.

### 4. Mayor vibración relativa

Dos motores con límites distintos no se comparan por su vibración, sino por **qué tan cerca (o
por encima) de su límite** están. Encontrá la medición con el mayor valor **relativo**, y su
posición:

```
relativo[i][j] = VIB[i][j] / LIMIT[i] * 100        (% del límite, 1 decimal)
```

**Si hay un empate, se informa la ÚLTIMA medición** en recorrer la matriz por filas (de la fila
0 a la 5, y en cada fila de la columna 0 a la 6).

**Ejemplo de salida:**

```bash
Mayor vibración relativa: M-06 el Jue, 9.1 mm/s (128.2 % de su límite)
```

### 5. Reporte de mantenimiento

Mostrá:

- Los **motores a intervenir**: los que tuvieron **2 o más ALARMA** en la semana, con su cantidad
  de alarmas y su promedio. Si no hay ninguno, un mensaje que lo diga.
- El **día más crítico**: el que tuvo más ALARMA entre todos los motores. Si hay un empate, el
  primero de la semana.

**Ejemplo de salida:**

```bash
─── Reporte de mantenimiento ───
Motores a intervenir (2 o más alarmas):
  M-01: 2 alarmas, promedio 3.6 mm/s
  M-04: 2 alarmas, promedio 6.6 mm/s
Día más crítico: Sab (2 alarmas)
```

---

## ⛔ Restricciones

- ❌ **Sin** `map`, `filter`, `reduce`, `forEach`, `find`, `sort`, `indexOf`, `includes`, `push`,
  `fill`.
- ❌ **Sin** retornar objetos: sólo números, textos, booleanos, vectores y matrices. Para
  devolver un valor y su posición, devolvé un vector: `[valor, fila, columna]`.
- ✅ Todo en **funciones** con parámetros y valor de retorno, con su **JSDoc**. Primero todas las
  funciones y, al final, junto, el programa principal.
- ✅ Los vectores y las matrices se crean con `new Array(n)` y se llenan con bucles: **una fila
  nueva en cada vuelta**.
- ✅ Ninguna función modifica la matriz que recibe.
- ✅ Imprimí los datos generados **antes** de calcular nada.

---

## 📎 Material de consulta

- [Presentación de la unidad 08](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/presentacion.pdf)
- [Apunte de la unidad 08](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/apunte.pdf)
- [TP de la unidad 08 y su resolución](https://github.com/italijancic/pc-2026/blob/main/unidades/08-matrices/tp.pdf)
