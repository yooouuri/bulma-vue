import { defineConfig } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import fs from 'fs'
import path from 'path'

const components = fs
  .readdirSync('src/components')
  .filter(f =>
    fs.statSync(path.join('src/components', f)).isDirectory()
  )

const esbuildOptions = {
  minify: true
}

const external = [
  'vue',
  'vue-router'
]

const component = (name: string) => defineConfig({
  plugins: [
    esbuild(esbuildOptions)
  ],
  external,
  input: `src/components/${name}/index.ts`,
  output: {
    format: 'esm',
    file: `dist/components/${name}/index.js`,
  }
})

export default defineConfig([
  ...components.map(name => component(name)),
  ...[
    defineConfig({
      plugins: [
        esbuild(esbuildOptions)
      ],
      external,
      input: `src/index.ts`,
      output: {
        format: 'esm',
        file: `dist/bulma-vue.esm.js`,
      }
    })
  ]
])
