import { Plugin } from 'vue'
import { Component } from './button'

const plugin: Plugin = {
  install(app) {
    app.component(Component.name, Component)
  }
}

export default Component

export {
  plugin
}
