import { Plugin } from 'vue'
import { Component } from './select'

const plugin: Plugin = {
  install(app) {
    app.component(Component.name, Component)
  }
}

export default Component
export {
  plugin
}
