import { defineComponent, h } from 'vue'

const validSeparators = [
  'has-arrow-separator',
  'has-bullet-separator',
  'has-dot-separator',
  'has-succeeds-separator'
]

const validAlignment = [
  'is-left',
  'is-centered',
  'is-right'
]

const validSizes = [
  'is-small',
  'is-medium',
  'is-large'
]

export const Component = defineComponent({
  name: 'b-breadcrumb',
  props: {
    align: {
      type: String,
      validator: (value: string) => validAlignment.includes(value),
      default: 'is-right'
    },
    separator: {
      type: String,
      validator: (value: string) => validSeparators.includes(value)
    },
    size: {
      type: String,
      validator: (value: string) => validSizes.includes(value),
      default: 'is-medium'
    }
  },
  setup(props, { slots }) {
    return function () {
      if (slots.default === undefined) {
        return console.warn('[b-breadcrumb] no default slot')
      }

      const items = slots.default()

      const items$ = items.map(item => h(item))

      return h(
        'nav',
        {
          class: [
            'breadcrumb',
            props.size
          ]
        },
        h(
          'ul',
          items$
        )
      )
    }
  }
})
