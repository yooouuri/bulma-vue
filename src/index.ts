import { Plugin } from 'vue'
import * as components from './components'

const plugin: Plugin = {
  install(app) {
    for (let componentKey in components) {
      app.component(components[componentKey].name, components[componentKey])
    }
  }
}

export default plugin
