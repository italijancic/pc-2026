# 📝 Trabajo Práctico — Unidad 05

## Jornada de mediciones

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Objetivos

Al terminar este trabajo práctico vas a poder:

- 🔁 Escribir bucles `for`, `while` y `do-while`, y elegir el que corresponde
- ➕ Aplicar el patrón **acumulador** para sumar y promediar
- 🔢 Aplicar el patrón **contador** combinando bucle y condicional
- 📉 Encontrar el **máximo** y el **mínimo** de una serie, sin la trampa del cero
- 📥 Cargar por consola una cantidad de datos que no se sabe de antemano
- 🧾 Depurar un bucle con una **traza** en papel

---

## 🧩 Consignas generales

1. **Todo se resuelve dentro del template de la cátedra.** Escribí en `src/app.js` y ejecutá
   con `npm run dev`.
2. **Un problema, un archivo.**
3. **Los acumuladores y contadores se declaran ANTES del bucle**, nunca adentro.
4. **Los límites del problema van en `UPPER_SNAKE_CASE`** arriba del archivo.
5. **Identificadores en inglés**; los textos que ve el usuario, en español.
6. `parseInt()` para cantidades enteras, `parseFloat()` para mediciones.
7. **Probá cada programa con varios valores.** Un bucle probado con un solo caso es un bucle
   sin probar — en particular, probá con **cero** y con **una sola** medición.

> 🛑 **Si un programa queda colgado imprimiendo sin parar:** `Ctrl + C`, y revisá el
> incremento. Es un bucle infinito, no un problema de tu máquina.

---

## Problemas

### Problema 1 — Cuenta regresiva de arranque

Un motor arranca después de una cuenta regresiva. Pedí por consola desde qué número arrancar y
mostrá la cuenta hasta 1, y después el aviso de marcha.

**Ejemplo de ejecución:**

```bash
Segundos de espera: 5

5
4
3
2
1
¡En marcha!
```

> 💡 Un `for` que va para abajo: `i--`.

---

### Problema 2 — Tabla de conversión

Generá una tabla de conversión de temperaturas de **0 a 100 °C, de 10 en 10**, mostrando cada
valor en Celsius y en Fahrenheit.

$$°F = °C \times \frac{9}{5} + 32$$

**Salida esperada:**

```bash
 °C  |   °F
-----|-------
   0 |  32.0
  10 |  50.0
  20 |  68.0
  30 |  86.0
  40 | 104.0
  50 | 122.0
  60 | 140.0
  70 | 158.0
  80 | 176.0
  90 | 194.0
 100 | 212.0
```

> 💡 El incremento es `i += 10`. Para alinear las columnas podés usar `.toFixed(1)`; que quede
> prolijo no es obligatorio, pero se agradece.

---

### Problema 3 — Promedio de la jornada

Pedí por consola **cuántas mediciones** de tensión se tomaron y después cada una. Al terminar,
mostrá la suma y el promedio con dos decimales.

**Ejemplo de ejecución:**

```bash
¿Cuántas mediciones? 3
Medición 1 [V]: 380
Medición 2 [V]: 372.5
Medición 3 [V]: 391

Suma:     1143.50 V
Promedio: 381.17 V
```

> ⚠️ El acumulador se declara **antes** del bucle y la división va **después**. Si dividís
> adentro, estás promediando con datos incompletos.

---

### Problema 4 — Cuántas fuera de tolerancia

Sobre el programa anterior, agregá el conteo. La norma admite **380 V con ±5 %**. Pedí las
mediciones y mostrá cuántas quedaron fuera de rango, y qué porcentaje del total representan.

**Ejemplo de ejecución:**

```bash
¿Cuántas mediciones? 5
Medición 1 [V]: 365
Medición 2 [V]: 380
Medición 3 [V]: 395
Medición 4 [V]: 410
Medición 5 [V]: 425

Límites: 361.00 V a 399.00 V
Fuera de rango: 2 de 5 (40.0 %)
```

> 💡 Dos patrones a la vez: un **contador** para las que se van, y el bucle que ya tenías.
>
> ⚠️ Acordate de la unidad 04: los rangos y el `||`.

---

### Problema 5 — Carga hasta el centinela

Ahora **no se sabe cuántas mediciones son**. Pedí temperaturas de rodamiento una tras otra
hasta que el usuario ingrese `0`, y al terminar mostrá cuántas se cargaron y el promedio.

**Ejemplo de ejecución:**

```bash
Temperatura [°C] (0 para terminar): 62.5
Temperatura [°C] (0 para terminar): 71
Temperatura [°C] (0 para terminar): 68.5
Temperatura [°C] (0 para terminar): 0

Se cargaron 3 mediciones
Promedio: 67.33 °C
```

**Si no se carga ninguna:**

```bash
Temperatura [°C] (0 para terminar): 0

No se cargó ninguna medición
```

> 💡 Es el caso del `do-while`: primero pedís el dato, después ves si es el centinela.
>
> ⚠️ **El `0` no se acumula ni se cuenta**: es la señal de corte, no una medición.
>
> ⚠️ Sin el caso «ninguna medición», el programa divide por cero y muestra `NaN`.

---

### Problema 6 — Máxima y mínima

Pedí cuántas mediciones de temperatura son y después cada una, y mostrá la **máxima**, la
**mínima** y el **rango** (la diferencia entre las dos).

**Ejemplo de ejecución:**

```bash
¿Cuántas mediciones? 4
Medición 1 [°C]: -5
Medición 2 [°C]: -12
Medición 3 [°C]: -3
Medición 4 [°C]: -8

Máxima: -3.00 °C
Mínima: -12.00 °C
Rango:  9.00 °C
```

> ⚠️ **Fijate en los valores del ejemplo: son todos negativos.** Si inicializás el máximo en
> `0`, tu programa va a contestar `0`, que no es ninguna de las mediciones.
>
> 💡 **La forma correcta:** leé la primera medición **antes** del bucle y usala como máximo y
> mínimo inicial. Después recorré **desde la segunda**.
>
> 🔑 En la unidad 07 esto se escribe `maximo = vector[0]`. Es el mismo razonamiento, y se
> corrige como error grave.

---

### Problema 7 — Informe de la jornada

**Integra todo lo anterior.**

Un técnico releva un tablero durante la jornada. Pedí por consola cuántas mediciones de tensión
se tomaron y después cada una, y emití un informe con:

- La **cantidad** de mediciones
- El **promedio**
- La **máxima** y la **mínima**
- Cuántas quedaron **fuera de tolerancia** (380 V ±5 %) y el **porcentaje**
- Un **veredicto**: la jornada es `CONFORME` si ninguna medición quedó fuera de tolerancia

Además, mientras las va leyendo, marcá con `←` las que se van de rango.

**Ejemplo de ejecución:**

```bash
¿Cuántas mediciones? 5
Medición 1 [V]: 365
Medición 2 [V]: 380
Medición 3 [V]: 395
Medición 4 [V]: 410  ←
Medición 5 [V]: 425  ←

─── Informe de la jornada ───
Mediciones:      5
Promedio:        395.00 V
Máxima:          425.00 V
Mínima:          365.00 V
Tolerancia:      361.00 V a 399.00 V
Fuera de rango:  2 (40.0 %)
─────────────────────────────
Veredicto:       NO CONFORME
```

**Con una jornada sin problemas:**

```bash
¿Cuántas mediciones? 3
Medición 1 [V]: 378
Medición 2 [V]: 381
Medición 3 [V]: 379

─── Informe de la jornada ───
Mediciones:      3
Promedio:        379.33 V
Máxima:          381.00 V
Mínima:          378.00 V
Tolerancia:      361.00 V a 399.00 V
Fuera de rango:  0 (0.0 %)
─────────────────────────────
Veredicto:       CONFORME
```

> 💡 **Cómo encararlo:** son cuatro variables que se actualizan en el mismo bucle — un
> acumulador, un contador y dos campeones. Declaralas todas antes, actualizá todas adentro, y
> mostrá todo después.
>
> 💡 Empezá por el problema 3 y agregale una cosa por vez, verificando cada agregado. No
> escribas las cuatro juntas.

---

## ⛔ Restricciones

- ❌ **Sin vectores ni arrays.** Se ven en la **unidad 07**. Las mediciones se procesan **a
  medida que se leen**: no hay dónde guardarlas.
- ❌ **Sin funciones propias.** Unidad **06**.
- ❌ **Sin `var`**, sin `==`, sin punto y coma, sin condicionales de una línea sin llaves.
- ✅ Lo de esta unidad y las anteriores: `for`, `while`, `do-while`, `if`/`else if`/`else`,
  `switch-case`, operadores, `prompt`, `parseInt`, `parseFloat`, `.toFixed()`.

> 🤔 **Lo que vas a sentir en el problema 7:** que el bucle se llenó de variables y que el
> programa se hizo largo. Y que si te pidieran mostrar las mediciones **ordenadas**, no
> sabrías por dónde empezar — porque una vez que leíste la siguiente, la anterior se perdió.
>
> Eso es exactamente lo que resuelven los **vectores** de la unidad 07: un lugar donde
> guardarlas todas. Guardate la solución: vamos a volver a este problema.

---

## 📎 Material de consulta

- [Apunte de la unidad](https://github.com/italijancic/pc-2026/blob/main/unidades/05-bucles/apunte.pdf)
- [Presentación de clase](https://github.com/italijancic/pc-2026/blob/main/unidades/05-bucles/presentacion.pdf)
- [Ejemplos de la clase](https://github.com/italijancic/pc-2026/tree/main/unidades/05-bucles/ejemplos)
- [Template del curso](https://github.com/italijancic/pc-2026/tree/main/template)
