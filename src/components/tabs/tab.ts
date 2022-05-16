import { defineComponent, h } from 'vue'

export const Component = defineComponent({
  name: 'b-tab-item',
  props: {
    label: String,
    disabled: Boolean,
    headerClass: String
  },
  setup(props, { slots }) {
    return function () {
      if (slots.default === undefined) {
        return console.warn('[b-tab] no default slot')
      }

      return slots.default()
    }
  }
})
