# 🗓️ Cronograma 2026

**Cátedra:** Programación en Computación — UTN FRRQ
**Cursada:** 2º cuatrimestre 2026 — **una clase semanal, los días jueves**
**Inicio de cursada:** jueves 06-08-2026

| Fecha | Unidad | Tema | Estado |
|-------|--------|------|--------|
| 06-08-2026 | [01](./unidades/01-intro-informatica) | Introducción a la informática | ✅ |
| 13-08-2026 | [02](./unidades/02-entorno-y-primeros-pasos) | Entorno de desarrollo y primeros pasos | ✅ |
| 20-08-2026 | [03](./unidades/03-variables-y-operadores) | Variables, convenciones y operadores | ⬜ |
| 27-08-2026 | [04](./unidades/04-condicionales) | Condicionales: `if`, `switch-case` | ⬜ |
| 03-09-2026 | [05](./unidades/05-bucles) | Bucles: `for`, `while`, `do-while` | ⬜ |
| 10-09-2026 | [06](./unidades/06-funciones) | Funciones: parámetros, retorno, `Math.random()` | ⬜ |
| 17-09-2026 | [07](./unidades/07-arrays-unidimensionales) | Arrays unidimensionales (vectores) | 🟡 |
| 24-09-2026 | — | Práctica integradora de vectores | ⬜ |
| 01-10-2026 | — | **1er Examen Parcial** | ⬜ |
| 08-10-2026 | [08](./unidades/08-matrices) | Matrices (arrays bidimensionales) | ⬜ |
| 15-10-2026 | [09](./unidades/09-operaciones-matriciales) | Operaciones matriciales | ⬜ |
| 22-10-2026 | [10](./unidades/10-integrador-ingenieria) | Integrador: problemas de ingeniería | ⬜ |
| 29-10-2026 | — | Práctica integradora de matrices | ⬜ |
| 05-11-2026 | — | **2do Examen Parcial** | ⬜ |
| 12-11-2026 | — | Recuperatorio | ⬜ |

**Referencia de estado:** ⬜ pendiente · 🟡 en preparación · ✅ dictada y publicada

> ⚠️ Las fechas de **parciales y recuperatorio** son tentativas: ajustar según calendario
> académico y feriados. Las fechas de clase son los jueves consecutivos desde el inicio de
> cursada.

---

## Correlación con el dictado 2025

Para referencia al preparar cada clase. El material 2025 está en `~/utn-pc/pc-2025/lessons/`.

| Unidad 2026 | Clase 2025 equivalente |
|-------------|------------------------|
| 01 | `06-08-2025` |
| 02 | `13-08-2025` |
| 03 | `20-08-2025` (var/let/const, convenciones, operadores) |
| 04 | `20-08-2025` (condicionales, switch, prompt) |
| 05 | `27-08-2025` |
| 06 | `10-09-2025` (funciones, `Math.random()`) |
| 07 | `03-09-2025` (vectores) + `.slice()` de `10-09-2025` |
| Práctica vectores | `17-09-2025`, `24-09-2025` |
| 08 | `15-10-2025` |
| 09 | `22-10-2025` |
| 10 | `05-11-2025` (paneles solares) |

---

## Cambios respecto del dictado 2025

**1. `20-08-2025` se separó en dos unidades (03 y 04).** Esa clase cubrió variables +
convenciones + operadores + condicionales + `switch` + `prompt` en una sola jornada. El
volumen justifica partirla, pero se pueden dictar juntas si el calendario aprieta.

**2. Funciones ahora se dictan ANTES de vectores** (unidad 06 antes que 07). En 2025 fue al
revés: vectores el `03-09` y funciones el `10-09`. El orden nuevo es mejor porque:

- Las funciones no necesitan arrays para enseñarse: alcanzan `sumar(a, b)`, `esPar(n)`,
  `rndInt(min, max)`.
- Los vectores sí se benefician de tener funciones: permite exigir código modular en el
  **primer** TP de vectores, en lugar de pedirlo recién dos clases después.
- `rndInt()` queda disponible antes de necesitarlo para generar vectores aleatorios.
- `.slice()` se enseña en la unidad de vectores (07), donde recién tiene sentido hablar de
  copias por referencia.

**3. Las clases pasaron de miércoles a jueves.**
