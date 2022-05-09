import { Plugin } from 'vue'
import { modal } from './modal'
import { useModal } from './useModal'

const plugin: Plugin = {
  install(app) {
    app.component(modal.name, modal)
  }
}

// todo programmaticly open modal

export default modal
export {
  plugin,
  useModal
}
