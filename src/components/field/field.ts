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
      const slotsWithoutComments = slots.default().filter(s => s.type !== Comment)

      // we need to provide fieldType prop to the slots
      const customSlots = slotsWithoutComments.map(slot =>
        [ 'b-select' ].includes(slot.type.name) ? h(slot, { fieldType: type.value }) : h(slot)
      )

      const slot = (customSlots.length > 1 || grouped.value) ?
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
            customSlots
          )
        ) : customSlots

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
