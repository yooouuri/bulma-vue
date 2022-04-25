import {
  defineComponent,
  getCurrentInstance,
  h,
  toRefs,
  computed
} from 'vue'

const buttonProps = {
  type: String,
  size: String,
  label: String,
  loading: Boolean,
  disabled: Boolean,
  rounded: Boolean,
  focused: Boolean,
  hovered: Boolean,
  selected: Boolean,
  active: Boolean,
  outlined: Boolean,
  expanded: Boolean,
  inverted: Boolean,
  tag: {
    type: String,
    default: 'button'
  },
  to: String
}

export const Component = defineComponent({
  name: 'b-button',
  props: {
    ...buttonProps
  },
  emits: [ 'click' ],
  setup(props, { emit, slots }) {
    const {
      tag,
      type,
      size,
      disabled,
      loading,
      rounded,
      focused,
      hovered,
      selected,
      active,
      outlined,
      expanded,
      inverted,
      to
    } = toRefs(props);
    const instance = getCurrentInstance();

    const htmlTag = computed(() => tag.value === 'router-link' ? 'button' : tag.value)

    function handleClick(event: Event) {
      if (tag.value === 'router-link' && to.value !== undefined) {
        const router = instance.appContext.app.config.globalProperties.$router

        if (router !== undefined) {
          router.push({ name: to.value })
        }
      } else {
        emit('click', event)
      }
    }

    return function() {
      if (tag.value === 'router-link' && to.value === undefined) {
        return console.warn('[b-button]: no route location provided')
      }

      return h(
        htmlTag.value,
        {
          class: [
            'button',
            type.value,
            size.value,
            ...loading.value ? [ 'is-loading' ] : [],
            ...rounded.value ? [ 'is-rounded' ] : [],
            ...focused.value ? [ 'is-focused' ] : [],
            ...hovered.value ? [ 'is-hovered' ] : [],
            ...selected.value ? [ 'is-selected' ] : [],
            ...active.value ? [ 'is-active' ] : [],
            ...outlined.value ? [ 'is-outlined' ] : [],
            ...expanded.value ? [ 'is-fullwidth' ] : [],
            ...inverted.value ? [ 'is-inverted' ] : []
          ],
          disabled: disabled.value,
          onClick: handleClick
        },
        slots.default === undefined ? props.label : slots.default()
      )
    }
  }
})
