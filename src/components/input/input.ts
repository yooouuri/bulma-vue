import { defineComponent, h, toRefs } from 'vue'

export const Component = defineComponent({
  name: 'b-input',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    size: String,
    expanded: Boolean,
    rounded: Boolean,
    disabled: Boolean,
    loading: Boolean,
    customClass: String
  },
  emits: [ 'update:modelValue', 'blur', 'focus' ],
  setup(props, { emit }) {
    const {
      modelValue,
      type,
      size,
      expanded,
      rounded,
      disabled,
      loading,
      customClass
    } = toRefs(props)

    return function() {
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
          'input',
          {
            type: type.value,
            class: [
              'input',
              size.value,
              customClass.value
            ],
            ...(disabled.value && { disabled: 'disabled' }),
            value: modelValue.value,
            onInput: (event: InputEvent) => emit('update:modelValue', event.target.value),
            onBlur: () => emit('blur'),
            onFocus: () => emit('focus')
          }
        )
      )
    }
  }
})
