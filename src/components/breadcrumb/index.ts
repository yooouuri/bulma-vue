import { Plugin } from 'vue'
import { Component as Breadcrumb } from './breadcrumb'
import { Component as BreadcrumbItem } from './breadcrumb-item'

const plugin: Plugin = {
  install(app) {
    app.component(Breadcrumb.name, Breadcrumb)
    app.component(BreadcrumbItem.name, BreadcrumbItem)
  }
}

export {
  plugin,
  Breadcrumb as BBreadcrumb,
  BreadcrumbItem as BBreadcrumbItem
}
