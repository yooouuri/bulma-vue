import { Plugin } from 'vue'
import { Component as Tabs } from './tabs'
import { Component as Tab } from './tab'

const plugin: Plugin = {
  install(app) {
    app.component(Tabs.name, Tabs)
    app.component(Tab.name, Tab)
  }
}

export {
  plugin,
  Tabs as BTabs,
  Tab as BTabItem
}
