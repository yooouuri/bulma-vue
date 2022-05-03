import { defineComponent, h, toRefs } from 'vue'

export const Component = defineComponent({
  name: 'b-select',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    fieldType: String, // internal
    size: String,
    expanded: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    loading: Boolean,
    placeholder: String
  },
  emits: [ 'update:modelValue', 'change', 'blur', 'focus' ],
  setup(props, { emit, slots }) {
    const {
      modelValue,
      size,
      expanded,
      rounded,
      disabled,
      loading,
      placeholder,
      fieldType
    } = toRefs(props)

    return function() {
      if (slots.default === undefined) {
        return console.warn('[b-select]: no default slot given')
      }

      const defaultSlot = [ slots.default() ]

      if (placeholder.value !== undefined) {
        defaultSlot.unshift(h(
          'option',
          {
            disabled: 'disabled',
            value: ''
          },
          placeholder.value
        ))
      }

      return h(
        'div',
        {
          class: [
            'control',
            size.value,
            ...loading.value ? [ 'is-loading' ] : [],
            ...rounded.value ? [ 'is-rounded' ] : [],
            ...expanded.value ? [ 'is-expanded' ] : []
          ]
        },
        h(
          'span',
          {
            class: [ 'select', fieldType.value, { 'is-empty': modelValue.value !== '' } ]
          },
          h(
            'select',
            {
              value: modelValue.value,
              ...(disabled.value && { disabled: 'disabled' }),
              onChange: (event: InputEvent) => {
                emit('change', event)
                emit('update:modelValue', event.target.value)
              },
              onBlur: () => emit('blur'),
              onFocus: () => emit('focus')
            },
            defaultSlot
          )
        )
      )
    }
  }
})
