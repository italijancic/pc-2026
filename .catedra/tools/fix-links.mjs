/**
 * Rutea los links del material al PDF cuando el PDF existe.
 *
 * Regla de la cátedra: **si hay PDF, el link va al PDF**. El alumno quiere
 * abrir el documento, no la fuente en Markdown.
 *
 * Reescribe, en todos los `.md` de `unidades/`:
 *   ./presentacion.md                    → ./presentacion.pdf
 *   <URL absoluta>/unidades/NN/tp.md     → <URL absoluta>/unidades/NN/tp.pdf
 *
 * Sólo toca los documentos que **ya tienen** su PDF generado, así que conviene
 * correrlo DESPUÉS de `npm run all`.
 *
 * Uso — desde .catedra/:
 *   npm run links           # aplica los cambios
 *   npm run links -- --check   # sólo reporta, no escribe (para verificar)
 */

import { readdir, readFile, writeFile, access } from 'node:fs/promises'
import path from 'node:path'

const TOOLS = import.meta.dirname
const REPO = path.dirname(path.dirname(TOOLS))
const BASE = path.join(REPO, 'unidades')
const URL_BASE = 'https://github.com/italijancic/pc-2026/blob/main'

const DOCS = ['presentacion', 'apunte', 'tp']
const soloCheck = process.argv.includes('--check')

const existe = async (f) => {
  try { await access(f); return true } catch { return false }
}

const unidades = (await readdir(BASE, { withFileTypes: true }))
  .filter((d) => d.isDirectory() && /^\d\d-/.test(d.name))
  .map((d) => d.name)
  .sort()

let cambios = 0

for (const slug of unidades) {
  const dir = path.join(BASE, slug)
  const archivos = (await readdir(dir)).filter((f) => f.endsWith('.md'))

  for (const archivo of archivos) {
    const ruta = path.join(dir, archivo)
    const original = await readFile(ruta, 'utf8')
    let texto = original

    for (const doc of DOCS) {
      if (!await existe(path.join(dir, `${doc}.pdf`))) continue
      texto = texto
        .replaceAll(`](./${doc}.md)`, `](./${doc}.pdf)`)
        .replaceAll(`${URL_BASE}/unidades/${slug}/${doc}.md`,
          `${URL_BASE}/unidades/${slug}/${doc}.pdf`)
    }

    if (texto !== original) {
      cambios++
      console.log(`  ${soloCheck ? '✗' : '✓'} ${path.relative(REPO, ruta)}`)
      if (!soloCheck) await writeFile(ruta, texto, 'utf8')
    }
  }
}

if (!cambios) {
  console.log('Todos los links ya apuntan al PDF donde corresponde.')
  process.exit(0)
}

if (soloCheck) {
  console.log(`\n${cambios} archivo(s) con links al .md teniendo PDF disponible.`)
  console.log('Corregilo con: npm run links')
  process.exit(1)
}

console.log(`\n${cambios} archivo(s) actualizado(s).`)
