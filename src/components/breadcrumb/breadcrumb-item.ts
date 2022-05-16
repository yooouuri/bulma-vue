import { defineComponent, h, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export const Component = defineComponent({
  name: 'b-breadcrumb-item',
  props: {
    tag: {
      type: String,
      validator: (value: string) => ['router-link', 'a'].includes(value),
      default: 'a'
    },
    to: String,
    href: String,
    active: Boolean
  },
  setup(props, { slots }) {
    const router = useRouter()
    const {
      tag,
      to,
      href,
      active
    } = toRefs(props)

    return function () {
      if (slots.default === undefined) {
        return console.warn('[b-breadcrumb-item] no default slot')
      }

      let anchorProps

      if (tag.value === 'router-link' && to.value !== undefined) {
        anchorProps = {
          onClick: () => router.push({ name: to.value })
        }
      } else {
        anchorProps = {
          href: href.value
        }
      }

      return h(
        'li',
        {
          class: [
            { 'is-active': active.value }
          ]
        },
        h(
          'a',
          anchorProps,
          slots.default()
        )
      )
    }
  }
})
