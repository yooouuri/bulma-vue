import {
  Comment,
  defineComponent,
  h,
  toRefs
} from 'vue'

export const Component = defineComponent({
  props: {
    type: String,
    label: String,
    labelFor: String,
    customClass: String,
    message: String,
    grouped: Boolean
  },
  setup(props, { slots }) {
    const {
      type,
      label,
      customClass,
      message,
      grouped
    } = toRefs(props)

    return function() {
      const slot = (slots.default().filter(s => s.type !== Comment).length > 1 || grouped.value) ?
        h(
          'div',
          { 
            class: 'field-body'
          },
          h(
            'div',
            {
              class: [
                'field',
                ...grouped.value ? [ 'is-grouped' ] : [],
                ...slots.default().length > 1 && !grouped.value ? [ 'has-addons' ] : [],
              ]
            },
            slots.default()
          )
        ) : slots.default()

      const defaultSlots = [ slot ];

      if (label.value !== undefined || slots.label !== undefined) {
        defaultSlots.unshift(h(
          'label',
          {
            class: [
              'label',
              customClass.value
            ]
          },
          label.value ?? slots.label()
        ))
      }

      if (message.value !== undefined || slots.message !== undefined) {
        defaultSlots.push(h(
          'p',
          {
            class: [
              'help',
              type.value
            ]
          },
          message.value ?? slots.message()
        ))
      }

      return h(
        'div',
        {
          class: 'field'
        },
        defaultSlots
      )
    }
  }
})
