import { access } from "node:fs/promises"
import { resolve } from "node:path"

const required = [
  "src/harpeblue-signal.css",
  "src/tokens/index.css",
  "src/themes/index.css",
  "src/components/index.css",
  "docs/index.html",
  "docs/playground.html"
]

for (const file of required) {
  await access(resolve(import.meta.dirname, "..", file))
}

console.log("HarpeBlue Signal structure is valid.")
