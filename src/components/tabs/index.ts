import { Plugin } from 'vue'
import { Component as Tabs } from './tabs'
import { Component as TabItem } from './tab-item'

const plugin: Plugin = {
  install(app) {
    app.component(Tabs.name, Tabs)
    app.component(TabItem.name, TabItem)
  }
}

export {
  plugin,
  Tabs as BTabs,
  TabItem as BTabItem
}
