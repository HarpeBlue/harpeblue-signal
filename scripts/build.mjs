import { mkdir, readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"

const root = resolve(import.meta.dirname, "..")
const entry = resolve(root, "src/harpeblue-signal.css")
const out = resolve(root, "dist/harpeblue-signal.css")

const seen = new Set()

async function bundle(file) {
  const absolute = resolve(file)
  if (seen.has(absolute)) return ""
  seen.add(absolute)

  const css = await readFile(absolute, "utf8")
  const lines = await Promise.all(css.split("\n").map(async (line) => {
    const match = line.match(/^@import\s+["'](.+)["'];?$/)
    if (!match) return line
    return bundle(resolve(dirname(absolute), match[1]))
  }))

  return lines.join("\n")
}

await mkdir(dirname(out), { recursive: true })
await writeFile(out, `${await bundle(entry)}\n`)
