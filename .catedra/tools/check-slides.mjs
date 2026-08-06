/**
 * Detector de desborde de diapositivas.
 *
 * El tema recorta con `overflow: hidden`, así que una diapositiva con exceso de
 * contenido no se rompe visiblemente: simplemente pierde lo de abajo. Este script
 * mide, para cada diapositiva, el borde inferior y derecho del elemento que llega
 * más lejos, y avisa cuando invade la zona del pie o el margen derecho.
 *
 * Correrlo SIEMPRE antes de dar una unidad por terminada.
 *
 * Uso — SIEMPRE desde .catedra/, que es donde vive el package.json:
 *   cd .catedra
 *   npm run check                                              # todas las unidades
 *   npm run check -- ../unidades/07-.../presentacion.md        # una sola
 */

import { spawn } from 'node:child_process'
import { mkdtemp, readdir, rm, access } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import puppeteer from 'puppeteer-core'

// tools/ vive en <repo>/.catedra/tools
const TOOLS = import.meta.dirname
const CATEDRA = path.dirname(TOOLS)
const REPO = path.dirname(CATEDRA)

const MARP = path.join(CATEDRA, 'node_modules/.bin/marp')

const CHROME = process.env.CHROME_PATH
  || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// Geometría del tema pc (ver themes/pc.css).
const H = 720, W = 1280
const LIMIT_BOTTOM = H - 62   // el filete del pie está a 62 px del borde inferior
const LIMIT_RIGHT = W - 78    // padding lateral
const TOL = 2                 // tolerancia de subpíxel

// marp-cli lee el markdown de stdin cuando stdin no es una TTY, así que hay que
// ignorarlo explícitamente o el proceso se queda esperando para siempre.
const marp = (args) =>
  new Promise((resolve, reject) => {
    const p = spawn(MARP, args, { stdio: ['ignore', 'ignore', 'inherit'] })
    p.on('error', reject)
    p.on('close', (code) =>
      code === 0 ? resolve() : reject(new Error(`marp salió con código ${code}`)))
  })

async function targets() {
  if (process.argv.length > 2) return process.argv.slice(2)

  const base = path.join(REPO, 'unidades')
  const dirs = (await readdir(base, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && /^\d\d-/.test(d.name))
    .map((d) => d.name)
    .sort()

  const found = []
  for (const d of dirs) {
    const file = path.join(base, d, 'presentacion.md')
    try {
      await access(file)
      found.push(file)
    } catch {
      // la unidad todavía no tiene presentación
    }
  }
  return found
}

const measure = () =>
  [...document.querySelectorAll('section')].map((s, i) => {
    const sr = s.getBoundingClientRect()
    const scale = sr.height / 720 || 1
    let bottom = 0, right = 0, culprit = ''
    for (const el of s.querySelectorAll('*')) {
      if (el.tagName === 'FOOTER' || el.closest('footer')) continue
      const r = el.getBoundingClientRect()
      if (!r.width && !r.height) continue
      const b = (r.bottom - sr.top) / scale
      const x = (r.right - sr.left) / scale
      if (b > bottom) {
        bottom = b
        culprit = el.tagName.toLowerCase() +
          (typeof el.className === 'string' && el.className
            ? '.' + el.className.trim().split(/\s+/).join('.')
            : '')
      }
      if (x > right) right = x
    }
    const h = s.querySelector('h1, h2')
    return {
      n: i + 1,
      bottom: Math.round(bottom),
      right: Math.round(right),
      culprit,
      title: h ? h.textContent.replace(/\s+/g, ' ').trim().slice(0, 46) : '(sin título)',
    }
  })

const files = await targets()
if (!files.length) {
  console.error('No se encontró ninguna presentacion.md en unidades/')
  process.exit(1)
}

const tmp = await mkdtemp(path.join(tmpdir(), 'pc-check-'))
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-gpu', '--allow-file-access-from-files'],
  protocolTimeout: 60000,
})
let problems = 0

try {
  for (const file of files) {
    const html = path.join(tmp, path.basename(path.dirname(file)) + '.html')
    // Tema explicito con ruta absoluta: marp busca .marprc.yml en el cwd, asi
    // que sin esto el check mediria las diapositivas con el tema por defecto y
    // los limites de desborde no corresponderian al tema real.
    await marp([
      '--template', 'bare',
      '--allow-local-files',
      '--html',
      '--theme-set', path.join(CATEDRA, 'themes'),
      '-o', html, file,
    ])

    const page = await browser.newPage()
    await page.setViewport({ width: W, height: H })
    await page.goto('file://' + html, { waitUntil: 'load', timeout: 60000 })
    const slides = await page.evaluate(measure)
    await page.close()

    const bad = slides.filter((s) => s.bottom > LIMIT_BOTTOM + TOL || s.right > LIMIT_RIGHT + TOL)
    problems += bad.length

    console.log(`\n${path.relative(REPO, file)}  —  ${slides.length} diapositivas`)
    if (!bad.length) {
      console.log('  ✓ ninguna desborda')
      continue
    }
    for (const s of bad) {
      const marks = []
      if (s.bottom > LIMIT_BOTTOM + TOL) {
        marks.push(`abajo +${s.bottom - LIMIT_BOTTOM}px (${s.bottom} > ${LIMIT_BOTTOM})`)
      }
      if (s.right > LIMIT_RIGHT + TOL) marks.push(`derecha +${s.right - LIMIT_RIGHT}px`)
      console.log(`  ✗ ${String(s.n).padStart(2, '0')}  ${s.title}`)
      console.log(`       ${marks.join(' · ')}`)
      console.log(`       elemento más bajo: ${s.culprit}`)
    }
  }
} finally {
  await browser.close()
  await rm(tmp, { recursive: true, force: true })
}

console.log(problems ? `\n${problems} diapositiva(s) con desborde.` : '\nTodo entra.')
process.exit(problems ? 1 : 0)
