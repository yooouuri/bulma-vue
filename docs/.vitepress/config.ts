import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'bulma-vue',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/yooouuri/bulma-vue' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Start',
          children: [
            { text: 'Installation', link: '/start' }
          ]
        },
        {
          text: 'Components',
          children: [
            { text: 'Modal', link: '/components/modal' },
            {
              text: 'Field',
              link: '/components/form-controls/field'
            },
            {
              text: 'Input',
              link: '/components/form-controls/input'
            },
            { text: 'Button', link: '/components/button' },
          ]
        }
      ],
    }
  }
})
