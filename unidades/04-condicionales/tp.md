# 📝 Trabajo Práctico — Unidad 04

## Diagnóstico de un tablero eléctrico

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván

---

## 🎯 Objetivos

Al terminar este trabajo práctico vas a poder:

- 🔀 Ejecutar código sólo si se cumple una condición, con `if` y con `if` / `else`
- 🪜 Clasificar en varios rangos con `else if`, **escribiéndolos en el orden correcto**
- 🎛️ Resolver una opción cerrada con `switch-case`, sin olvidarte los `break`
- 🧭 Elegir con criterio entre `if` y `switch`
- 📥 Comparar correctamente valores que vienen de `prompt()`

---

## 🧩 Consignas generales

1. **Todo se resuelve dentro del template de la cátedra.** Escribí en `src/app.js` y ejecutá
   con `npm run dev`.
2. **Un problema, un archivo.**
3. **Llaves siempre**, aunque el bloque tenga una sola línea.
4. **Los límites del problema van en `UPPER_SNAKE_CASE`** arriba del archivo, no repetidos
   como números sueltos.
5. **`parseFloat()` / `parseInt()` antes de comparar** cualquier número que venga de `prompt()`.
6. **Identificadores en inglés**; los textos que ve el usuario, en español.
7. **Siempre `===` y `!==`.** Nunca `==`.
8. **Probá cada programa con varios valores**, uno por cada rama. Un condicional que sólo
   probaste con un caso es un condicional sin probar.

---

## Problemas

### Problema 1 — Temperatura de un rodamiento

Pedí por consola la temperatura de un rodamiento. Si supera los **85 °C**, avisá que está
fuera de rango; en caso contrario, avisá que está normal.

**Ejemplo de ejecución 1:**

```bash
Temperatura del rodamiento [°C]: 91

91.0 °C — FUERA DE RANGO
```

**Ejemplo de ejecución 2:**

```bash
Temperatura del rodamiento [°C]: 70

70.0 °C — Normal
```

> 💡 Son dos caminos y siempre se toma uno → `if` / `else`.

---

### Problema 2 — Clasificación de una medición de tensión

La norma admite **380 V con ±5 %**. Pedí la tensión medida y clasificála en **BAJA**,
**NORMAL** o **ALTA**, mostrando también la desviación porcentual respecto del nominal.

**Ejemplo de ejecución 1:**

```bash
Tensión medida [V]: 372.5

Desviación: -1.97 %
Estado:     NORMAL
```

**Ejemplo de ejecución 2:**

```bash
Tensión medida [V]: 300

Desviación: -21.05 %
Estado:     BAJA
```

**Ejemplo de ejecución 3:**

```bash
Tensión medida [V]: 405

Desviación: 6.58 %
Estado:     ALTA
```

> ⚠️ **Escribí los rangos de menor a mayor.** Si ponés el caso más general primero, el programa
> clasifica mal **sin fallar**.

---

### Problema 3 — Categoría de un motor

Los motores se agrupan por potencia nominal según esta tabla:

| Potencia | Categoría |
|----------|-----------|
| Menos de 750 W | Fraccionario |
| De 750 W a menos de 7.500 W | Pequeña potencia |
| De 7.500 W a menos de 75.000 W | Mediana potencia |
| 75.000 W o más | Gran potencia |

Pedí la potencia por consola y mostrá la categoría.

**Ejemplo de ejecución 1:**

```bash
Potencia nominal [W]: 5500

5500 W — Pequeña potencia
```

**Ejemplo de ejecución 2:**

```bash
Potencia nominal [W]: 450

450 W — Fraccionario
```

**Ejemplo de ejecución 3:**

```bash
Potencia nominal [W]: 90000

90000 W — Gran potencia
```

> 💡 Cuatro rangos, cuatro ramas. Como las condiciones se evalúan en orden, **no hace falta**
> escribir `power >= 750 && power < 7500`: si llegaste a esa rama, ya sabés que no es menor a
> 750.
>
> 🧪 **Probalo con los cuatro casos.** Es el problema donde más fácil se cuela un rango mal
> ordenado.

---

### Problema 4 — Tipo de mantenimiento

Pedí por consola un código de mantenimiento de una letra y mostrá a qué corresponde:

| Código | Tipo |
|--------|------|
| `P` | Preventivo |
| `C` | Correctivo |
| `D` | Predictivo |
| cualquier otro | Código desconocido |

**Ejemplo de ejecución 1:**

```bash
Código de mantenimiento: C

Mantenimiento CORRECTIVO
```

**Ejemplo de ejecución 2:**

```bash
Código de mantenimiento: x

Código desconocido: «x»
```

> 💡 Una variable, valores exactos, lista cerrada → **`switch-case`**.
>
> ⚠️ Que funcione tanto con `C` como con `c`: normalizá con `.toLowerCase()` antes del
> `switch`, y escribí los `case` en minúscula.
>
> 🛑 **Un `break` por cada `case`.** Sin ellos, el programa imprime varios tipos a la vez.

---

### Problema 5 — Calculadora de magnitudes eléctricas

Mostrá un menú, pedí la opción y los dos valores, y calculá la magnitud pedida con
`switch-case`.

| Opción | Calcula | Fórmula |
|--------|---------|---------|
| `P` | Potencia [W] | $P = V \times I$ |
| `R` | Resistencia [Ω] | $R = V / I$ |
| `I` | Corriente [A] | $I = V / R$ |

**Ejemplo de ejecución:**

```bash
Cálculos eléctricos
  P  potencia
  R  resistencia
  I  corriente

Opción: P
Tensión [V]: 380
Corriente [A] o resistencia [Ω]: 4.2

Potencia: 1596.00 W
```

> 💡 Si el usuario escribe una opción que no está, el `default` tiene que avisarle.

---

### Problema 6 — Diagnóstico completo del tablero

**Integra todo lo anterior.**

Pedí por consola:

| Dato | Unidad | Ejemplo |
|------|--------|---------|
| Identificación del tablero | — | `TAB-3` |
| Tensión medida | V | `372.5` |
| Temperatura de gabinete | °C | `91` |
| Código de servicio | — | `C` |

**Constantes del problema:**

- Tensión nominal: **380 V**, tolerancia **±5 %**
- Temperatura máxima de gabinete: **85 °C**

**El informe tiene que mostrar:**

1. La **clasificación de la tensión** (BAJA / NORMAL / ALTA) — con `else if`
2. El **estado térmico** (NORMAL / SOBRETEMPERATURA) — con `if` / `else`
3. La **acción** según el código de servicio — con `switch-case`:
   - `P` → *Continuar con el plan preventivo*
   - `C` → *Reparar y volver a medir*
   - `D` → *Programar análisis predictivo*
   - otro → *Código no reconocido*
4. El **veredicto final**: el tablero está **APTO** sólo si la tensión es NORMAL **y** la
   temperatura está dentro del máximo

**Ejemplo de ejecución 1:**

```bash
Identificación del tablero: TAB-3
Tensión medida [V]: 372.5
Temperatura de gabinete [°C]: 91
Código de servicio: C

─── Diagnóstico TAB-3 ───
Tensión:     372.5 V — NORMAL
Temperatura: 91.0 °C — SOBRETEMPERATURA
Acción:      Reparar y volver a medir
─────────────────────────────
Veredicto:   NO APTO
```

**Ejemplo de ejecución 2:**

```bash
Identificación del tablero: TAB-1
Tensión medida [V]: 379
Temperatura de gabinete [°C]: 62
Código de servicio: P

─── Diagnóstico TAB-1 ───
Tensión:     379.0 V — NORMAL
Temperatura: 62.0 °C — NORMAL
Acción:      Continuar con el plan preventivo
─────────────────────────────
Veredicto:   APTO
```

> 💡 **Cómo encararlo:** resolvé las tres partes por separado, en el orden en que aparecen.
> Cada una ya la hiciste en un problema anterior.
>
> 💡 Para el veredicto final, guardá cada resultado en su propia variable booleana
> (`isVoltageNormal`, `isTemperatureOk`). Después el `if` final se escribe combinándolas con
> `&&` y se lee como una oración.

---

## ⛔ Restricciones

- ❌ **Sin bucles** (`for`, `while`, `do-while`). Se ven en la **unidad 05**.
- ❌ **Sin funciones propias.** Unidad **06**.
- ❌ **Sin `var`**, sin `==`, sin punto y coma.
- ❌ **Sin condicionales de una línea sin llaves.**
- ✅ Lo de esta unidad y las anteriores: `if` / `else if` / `else`, `switch-case`,
  `.toLowerCase()`, operadores, `prompt`, `parseInt` / `parseFloat`, `.toFixed()`.

> 🤔 **Lo que vas a sentir en el problema 6:** que copiaste y pegaste tres bloques parecidos y
> que el archivo se hizo largo. Es correcto que lo sientas — y va a ser peor cuando en la
> unidad 05 haya que hacer esto para **treinta** tableros. Ahí aparecen los bucles, y en la 06
> las funciones.

---

## 📎 Material de consulta

- [Apunte de la unidad](https://github.com/italijancic/pc-2026/blob/main/unidades/04-condicionales/apunte.pdf)
- [Presentación de clase](https://github.com/italijancic/pc-2026/blob/main/unidades/04-condicionales/presentacion.pdf)
- [Ejemplos de la clase](https://github.com/italijancic/pc-2026/tree/main/unidades/04-condicionales/ejemplos)
- [Template del curso](https://github.com/italijancic/pc-2026/tree/main/template)
