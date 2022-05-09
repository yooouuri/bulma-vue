import DefaultTheme from 'vitepress/theme'
import Modal from '../../../src/components/modal'
import Button from '../../../src/components/button'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('b-modal', Modal)
    app.component('b-button', Button)
  }
}
