import {
  computed,
  defineComponent,
  h,
  ref,
  toRefs
} from 'vue'

export const Component = defineComponent({
  name: 'b-tabs',
  props: {
    modelValue: Number,
    type: String,
    expanded: Boolean,
    size: String,
    position: String
    // vertical
    // multiline
    // animated
    // animateInitially
    // animation
  },
  emits: [ 'update:modelValue' ],
  setup(props, { emit, slots }) {
    const {
      modelValue,
      type,
      expanded,
      size,
      position
    } = toRefs(props)

    const tabIndex = ref(modelValue.value ?? 0)

    function changeTab(index: number): void {
      // only update v-model when provided
      if (modelValue.value !== undefined) {
        emit('update:modelValue', index)
      } else {
        tabIndex.value = index
      }
    }

    return function () {
      if (slots.default === undefined) {
        return console.warn('[b-tabs] no default slot')
      }

      const tabs = slots.default()

      const tab$ = computed(() => tabs[tabIndex.value]).value

      const tabs$ = tabs.map((t, index) => {
        const tabProps = t.props

        let label = tabProps?.label ?? ''

        // @ts-ignore
        if (t.children?.header !== undefined) {
          // @ts-ignore
          label = h(t.children?.header)
        }

        const headerClass = tabProps?.headerClass

        return h(
          'li',
          {
            class: {
              'is-active': tabIndex.value === index,
              'is-disabled': tabProps?.disabled === '' ?? false,
              headerClass
            },
          },
          h(
            'a',
            {
              onClick: () => changeTab(index)
            },
            label
          )
        )
      })

      return h(
        'div',
        {
          class: 'b-tabs'
        },
        [
          h(
            'div',
            {
              class: [
                'tabs',
                type.value,
                { 'is-toggle': type.value === 'is-toggle-rounded' || expanded.value },
                { 'is-fullwidth': expanded.value },
                size.value,
                position.value
              ]
            },
            [
              h(
                'ul',
                tabs$
              )
            ]
          ),
          h(
            'div',
            {
              class: 'tab-content'
            },
            h(
              'div',
              {
                class: 'tab-item'
              },
              h(tab$)
            )
          )
        ]
      )
    }
  }
})
