# 📝 Trabajo Práctico — Unidad 01

## Reconocimiento del Equipo y Preparación del Entorno

**Cátedra:** Programación en Computación — UTN FRRQ
**Docentes:** Longhi Pablo, Talijancic Iván
**Tema:** Introducción a la informática

---

## 🎯 Objetivos

- Identificar los componentes de hardware de una computadora real y su función.
- Distinguir **memoria volátil** de **almacenamiento persistente** en situaciones concretas.
- Clasificar software según su capa: sistema operativo, driver o aplicación.
- Distinguir lenguajes **compilados** de **interpretados**, y saber por qué JavaScript necesita Node.
- Convertir números entre **decimal y binario**, y manejar las unidades de información.
- **Dejar el entorno de desarrollo instalado y verificado** antes de la próxima clase.

---

## 🧩 Consignas generales

- Este TP es **conceptual**: todavía no programamos. El entorno se instala en el Problema 7.
- Entregá un documento (texto, PDF o markdown) con las respuestas numeradas.
- Las respuestas se justifican. "Porque sí" no cuenta; "porque la RAM es volátil" sí.
- El **Problema 7 es obligatorio y el más importante**: sin el entorno instalado no vas a poder
  seguir la clase de la unidad 02.

---

## Problemas

### Problema 1 — Relevamiento de tu equipo

Averiguá y anotá las características de **la computadora que vas a usar en la cursada**.

| Dato | Cómo averiguarlo |
|------|------------------|
| Modelo de CPU y velocidad | Windows: `Ctrl+Shift+Esc` → pestaña *Rendimiento* → *CPU*<br>macOS: menú  → *Acerca de esta Mac* |
| Cantidad de RAM | Mismo lugar, sección *Memoria* |
| Tipo y capacidad de almacenamiento | ¿Es SSD o HDD? ¿Cuántos GB libres tenés? |
| Sistema operativo y versión | Nombre y número de versión |

**Se pide, además:** mirá el uso de CPU y de memoria mientras la computadora está *sin hacer
nada*. ¿Está en 0 %? Explicá por qué.

---

### Problema 2 — Volátil o persistente

Para cada situación, indicá **dónde está el dato** (RAM o almacenamiento) y **si sobrevive** al
evento descripto. Justificá cada una en una línea.

| # | Situación |
|---|-----------|
| a | Escribís tres párrafos en un documento y **todavía no guardaste**. Se corta la luz. |
| b | Guardaste el documento y después se corta la luz. |
| c | Un programa carga 31 mediciones en variables y **termina normalmente**. |
| d | Tenés 20 pestañas abiertas en el navegador y reiniciás la máquina. |
| e | Descargaste un archivo a la carpeta *Descargas* y apagás la computadora. |

---

### Problema 3 — Clasificación de software

Clasificá cada elemento como **sistema operativo**, **driver** o **software de aplicación**, y
justificá en una línea.

1. Windows 11
2. El programa que permite que tu notebook use una impresora HP
3. Google Chrome
4. AutoCAD
5. Visual Studio Code
6. Android
7. El software que hace funcionar la placa de video
8. Node.js

> 💡 El caso **8** es el más interesante y el que conviene pensar más. ¿Node.js es una
> aplicación? ¿Es algo intermedio? Justificá tu postura: no hay una única respuesta trivial.

---

### Problema 4 — Compilados e interpretados

1. Explicá con tus palabras la diferencia entre un lenguaje **compilado** y uno
   **interpretado**. Una línea para cada uno.
2. Clasificá: **C**, **Python**, **JavaScript**, **Rust**, **PHP**, **Go**.
3. Un programa tiene un error de tipeo en la línea 50, y esa línea **sólo se ejecuta si el
   usuario elige una opción del menú que casi nadie usa**. ¿En cuál de los dos tipos de
   lenguaje se detecta el error antes de que el programa llegue al usuario? Justificá.
4. Tenés que programar el control de un brazo robótico que debe reaccionar en menos de un
   milisegundo. ¿Elegirías un lenguaje compilado o interpretado? ¿Por qué?
5. Escribiste un `app.js` en tu notebook con Windows y se lo pasás a un compañero que usa
   macOS. ¿Necesita algo para poder ejecutarlo? ¿Le sirve el mismo archivo o hay que
   modificarlo?

---

### Problema 5 — Sistema binario

Resolvé y **mostrá el procedimiento**, no sólo el resultado.

**a) De binario a decimal.** Convertí a decimal, mostrando la suma de potencias:

| | Binario |
|---|---------|
| 1 | `101` |
| 2 | `1110` |
| 3 | `10010` |
| 4 | `11111111` |

**b) De decimal a binario.** Convertí usando divisiones sucesivas por 2, mostrando la tabla de
restos:

| | Decimal |
|---|---------|
| 1 | 7 |
| 2 | 20 |
| 3 | 45 |
| 4 | 128 |

**c) Verificación.** Tomá tus dos últimos resultados del punto **b** y convertilos de vuelta a
decimal. Tienen que darte el número original.

> 💡 El caso `11111111` del punto **a** no es casual: es el valor más grande que entra en un
> byte. Fijate qué número te da y relacionalo con el problema 6.

---

### Problema 6 — Unidades de información

Resolvé y **mostrá el cálculo**, no sólo el resultado.

1. ¿Cuántos bits hay en 1 KB?
2. Un archivo de texto plano guarda 1 byte por carácter. ¿Cuántos caracteres entran, aproximadamente,
   en 2 MB?
3. Un sensor toma una medición de temperatura cada segundo y la guarda en **4 bytes**.
   ¿Cuánto espacio ocupa el registro de **un día completo**? Expresalo en la unidad más adecuada.
4. Un byte tiene 256 combinaciones posibles. ¿De dónde sale ese número?
5. Si en lugar de 8 bits tuviéramos **10 bits**, ¿cuántos valores distintos se podrían
   representar?
6. Una memoria USB dice "16 GB" en el envase, pero la computadora informa 14,9 GB.
   Explicá la diferencia.

---

### Problema 7 — Preparación del entorno ⚠️ Obligatorio

Dejá tu computadora lista para programar. **Esto se hace antes de la próxima clase.**

**1. Instalá Node.js**

Descargalo de <https://nodejs.org/en/download> y elegí la versión **LTS**
(*Long Term Support*), no la "Current".

> ⚠️ Elegí **LTS**. Es la versión estable con soporte a largo plazo, y es la que vamos a usar
> toda la cursada. La "Current" trae cambios recientes que pueden generar diferencias entre tu
> máquina y la del resto.

**2. Instalá Visual Studio Code**

Descargalo de <https://code.visualstudio.com/>.

**3. Verificá que Node quedó instalado**

Abrí una terminal:

- **Windows:** menú Inicio → escribí `cmd` → *Símbolo del sistema*
- **macOS:** `Cmd + Espacio` → escribí `Terminal`

Y ejecutá:

```bash
node -v
```

**Salida esperada** (el número puede variar, pero debe empezar con `v`):

```bash
v24.19.0
```

**4. Verificá también npm**

```bash
npm -v
```

```bash
11.6.2
```

**5. Anotá lo que te dio**

Entregá las dos versiones que te informó tu máquina.

> 🆘 **Si algo falla, no te quedes trabado.** Anotá el mensaje de error completo o sacale una
> foto a la pantalla, y lo resolvemos al principio de la próxima clase. Es normal que la
> instalación tenga vueltas, sobre todo en Windows: no es que hiciste algo mal.

---

## 🏁 Qué entregar

1. Respuestas a los problemas 1 a 6, numeradas y justificadas.
2. Las versiones de `node -v` y `npm -v` de tu máquina.
3. Si algo de la instalación falló: el mensaje de error.

---

## 📊 Criterios de corrección

| Aspecto | Peso |
|---------|------|
| Entorno instalado y verificado (Problema 7) | 25 % |
| Conversiones binarias con procedimiento (Problema 5) | 20 % |
| Distingue volátil de persistente (Problema 2) | 15 % |
| Compilados vs. interpretados, con justificación (Problema 4) | 15 % |
| Clasificación de software con justificación (Problema 3) | 10 % |
| Cálculos de unidades correctos y mostrados (Problema 6) | 10 % |
| Relevamiento del equipo completo (Problema 1) | 5 % |

---

## 📎 Material de consulta

- [Apunte de la unidad](https://github.com/italijancic/pc-2026/blob/main/unidades/01-intro-informatica/apunte.pdf)
- [Presentación de clase](https://github.com/italijancic/pc-2026/blob/main/unidades/01-intro-informatica/presentacion.pdf)
