/**
 * Render del material de la cátedra.
 *
 * Presentaciones: Marp → PDF / HTML / PPTX.
 * Documentos:     apunte.md y tp.md → PDF, via marked + Chrome headless. Son
 *                 documentos de lectura corrida, no diapositivas.
 *
 * El HTML de las presentaciones NO esta en el pipeline por defecto: el PDF
 * proyecta igual y el alumno no lo usa. Queda disponible con `npm run html`.
 *
 * Los archivos generados quedan JUNTO A SU FUENTE, no en un build/ aparte:
 *   unidades/07-arrays-unidimensionales/presentacion.md  → presentacion.pdf
 *   unidades/07-arrays-unidimensionales/apunte.md        → apunte.pdf
 *   unidades/07-arrays-unidimensionales/tp.md            → tp.pdf
 *
 * Las rutas internas se resuelven desde la ubicación de este script, no desde el
 * cwd, así que la lógica funciona invocada desde cualquier directorio.
 *
 * Uso — SIEMPRE desde .catedra/, que es donde vive el package.json:
 *
 *   cd ~/utn-pc/pc-2026/.catedra
 *   npm run build            # PDF de todas las presentaciones
 *   npm run build -- 01      # PDF de una sola unidad
 *   npm run docs             # PDF de apuntes y TPs
 *   npm run all              # todo lo que se entrega: presentaciones + documentos
 *   npm run check            # verificar que ninguna diapositiva desborde
 */

import { spawn } from 'node:child_process'
import { readdir, access, readFile, writeFile, unlink, stat } from 'node:fs/promises'
import path from 'node:path'
import { marked } from 'marked'

// tools/ vive en <repo>/.catedra/tools
const TOOLS = import.meta.dirname
const CATEDRA = path.dirname(TOOLS)
const REPO = path.dirname(CATEDRA)

const MARP = path.join(CATEDRA, 'node_modules/.bin/marp')
const CHROME = process.env.CHROME_PATH
  || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const BASE = path.join(REPO, 'unidades')

const argv = process.argv.slice(2)
const flags = new Set(argv.filter((a) => a.startsWith('--')))
const filtros = argv.filter((a) => !a.startsWith('--'))

if (!flags.size) {
  console.error('Indicá al menos un formato: --pdf, --docs, --html o --pptx')
  process.exit(1)
}

const run = (cmd, args) =>
  new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: ['ignore', 'inherit', 'inherit'] })
    p.on('error', reject)
    p.on('close', (code) =>
      code === 0 ? resolve() : reject(new Error(`${path.basename(cmd)} salió con código ${code}`)))
  })

const existe = async (f) => {
  try { await access(f); return true } catch { return false }
}

/** Unidades a procesar, filtradas por los argumentos sueltos si hay. */
async function unidades () {
  const dirs = (await readdir(BASE, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && /^\d\d-/.test(d.name))
    .map((d) => d.name)
    .sort()

  if (!filtros.length) return dirs

  return dirs.filter((d) =>
    filtros.some((f) => {
      const limpio = f.replace(/^unidades\//, '').replace(/\/$/, '')
      return d === limpio || d.startsWith(limpio + '-') || d.slice(0, 2) === limpio
    }))
}

/** Presentación → PDF / HTML / PPTX vía Marp. */
async function renderPresentacion (dir, fmt) {
  const src = path.join(BASE, dir, 'presentacion.md')
  if (!await existe(src)) return null

  const out = path.join(BASE, dir, `presentacion.${fmt}`)

  // El tema y el html se pasan EXPLICITOS, con ruta absoluta.
  //
  // No alcanza con dejarlos en .marprc.yml: marp-cli busca ese archivo en el
  // cwd, asi que invocado desde otra carpeta no lo encuentra, cae al tema por
  // defecto y genera SIN FORMATO en silencio. Sin aviso, sin error.
  const args = [
    '--allow-local-files',
    '--html',
    '--theme-set', path.join(CATEDRA, 'themes'),
    `--${fmt}`, '-o', out, src,
  ]
  if (fmt === 'pdf') args.push('--pdf-notes')

  await run(MARP, args)

  // Verificar que el tema de la catedra quedo aplicado. Si no, algo se rompio y
  // es mejor fallar que entregar material sin estilo.
  if (fmt === 'html') {
    const generado = await readFile(out, 'utf8')
    if (!generado.includes('JetBrains Mono NL')) {
      throw new Error(`${out} se genero SIN el tema de la catedra`)
    }
  }

  return out
}

/**
 * Documento (apunte o TP) → PDF. No pasa por Marp: son documentos de lectura
 * corrida, no diapositivas. Se envuelve el HTML de marked con la hoja de
 * impresión de la cátedra y se imprime con Chrome headless.
 *
 * @param {string} dir - Carpeta de la unidad
 * @param {string} nombre - Nombre base del documento: 'apunte' o 'tp'
 * @returns {Promise<string|null>} Ruta del PDF generado, o null si no hay fuente
 */
async function renderDoc (dir, nombre) {
  const src = path.join(BASE, dir, `${nombre}.md`)
  if (!await existe(src)) return null

  const md = await readFile(src, 'utf8')
  const css = await readFile(path.join(TOOLS, 'apunte-print.css'), 'utf8')
  const out = path.join(BASE, dir, `${nombre}.pdf`)
  const tmp = path.join(BASE, dir, `.${nombre}-tmp.html`)

  const titulo = (md.match(/^#\s+(.+)$/m)?.[1] ?? dir).replace(/[📘📚🗂️]/gu, '').trim()

  await writeFile(tmp, `<!doctype html>
<html lang="es">
<head><meta charset="utf-8"><title>${titulo}</title>
<style>${css}</style></head>
<body>${marked.parse(md)}</body>
</html>`, 'utf8')

  try {
    await run(CHROME, [
      '--headless', '--disable-gpu', '--no-pdf-header-footer',
      `--print-to-pdf=${out}`, tmp,
    ])
  } finally {
    await unlink(tmp).catch(() => {})
  }
  return out
}

// ─────────────────────────────── main ───────────────────────────────

const dirs = await unidades()
if (!dirs.length) {
  console.error(filtros.length
    ? `Ninguna unidad coincide con: ${filtros.join(', ')}`
    : `No hay unidades en ${path.relative(REPO, BASE)}/`)
  process.exit(1)
}

const generados = []

for (const dir of dirs) {
  const hechos = []

  for (const fmt of ['pdf', 'html', 'pptx']) {
    if (!flags.has(`--${fmt}`)) continue
    const out = await renderPresentacion(dir, fmt)
    if (out) hechos.push(out)
  }

  if (flags.has('--docs') || flags.has('--apuntes')) {
    for (const nombre of ['apunte', 'tp']) {
      const out = await renderDoc(dir, nombre)
      if (out) hechos.push(out)
    }
  }

  if (hechos.length) {
    console.log(`\n${dir}`)
    for (const f of hechos) {
      const kb = Math.round((await stat(f)).size / 1024)
      console.log(`  ✓ ${path.basename(f).padEnd(20)} ${String(kb).padStart(5)} KB`)
      generados.push(f)
    }
  }
}

if (!generados.length) {
  console.log('\nNada para renderizar: las unidades seleccionadas no tienen material todavía.')
  process.exit(0)
}

console.log(`\n${generados.length} archivo(s) generado(s).`)

// Rutear los links al PDF recién generado. Va acá dentro y no encadenado con &&
// en el script de npm: npm pega los argumentos al ÚLTIMO comando de la cadena,
// así que `npm run all -- 07` le pasaba el filtro a fix-links y render.mjs
// terminaba procesando TODAS las unidades sin avisar.
await run(process.execPath, [path.join(TOOLS, 'fix-links.mjs')])

console.log('Recordá correr `npm run check` (desde .catedra/) para verificar que ninguna diapositiva desborde.')
