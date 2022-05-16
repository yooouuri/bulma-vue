import {
  defineComponent,
  h,
  provide,
  ref,
  Teleport,
  toRefs,
  watch
} from 'vue'
import type { PropType, Component } from 'vue'

export const modal = defineComponent({
  name: 'b-modal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 960,
      required: false
    },
    component: {
      type: Object as PropType<Component>,
      required: false
    },
    fullScreen: Boolean,
    hasModalCard: Boolean
  },
  emits: [ 'update:modelValue', 'close' ],
  setup(props, { slots, emit }) {
    const {
      modelValue,
      width,
      component,
      fullScreen,
      hasModalCard
    } = toRefs(props)
    const modalRef = ref<HTMLElement | null>(null)

    function closeModal(event?: Event) {
      emit('close', event)

      if (event !== undefined) {
        if (event.defaultPrevented) {
          return
        }
      }

      emit('update:modelValue', !modelValue.value)
    }

    provide('modal', {
      close: closeModal
    })

    // todo fix nested modals
    function escEventListener(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        emit('close')
        emit('update:modelValue', !modelValue.value)
      }
    }

    function backdropClickEventListener(event: Event) {
      if ((event.target as Element).className === 'modal-background') {
        emit('close')
        emit('update:modelValue', !modelValue.value)
      }
    }

    watch(modelValue, val => {
      if (val) {
        document.addEventListener('keydown', escEventListener)
        modalRef.value?.addEventListener('click', backdropClickEventListener)
      } else {
        document.removeEventListener('keydown', escEventListener)
        modalRef.value?.removeEventListener('click', backdropClickEventListener)
      }
    })

    return function () {
      let defaultSlot = null

      if (slots.default !== undefined) {
        defaultSlot = slots.default({ close: closeModal })
      }

      if (component.value !== undefined) {
        defaultSlot = h(component.value)
      }

      if (defaultSlot === null) {
        return console.warn('[b-modal] no default slot or component provided')
      }

      const modalContent = h(
        'div',
        {
          class: [ 'modal-content' ],
          style: {
            'max-width': `${width.value}px`
          }
        },
        defaultSlot
      )

      const modalCard = h(
        'div',
        {
          class: 'modal-card',
          style: {
            'width': 'auto'
          }
        },
        defaultSlot
      )

      // todo transition, keep-alive?, remove it from the dom?
      return h(
        Teleport,
        {
          to: 'body'
        },
        h(
          'div',
          {
            class: [
              'modal',
              { 'is-active': modelValue.value },
              { 'is-full-screen': fullScreen.value }
            ],
            ref: modalRef
          },
          [
            h('div', { class: 'modal-background' }),
            hasModalCard.value ? modalCard : modalContent,
            ...(!hasModalCard.value ? [ h('button', { class: [ 'modal-close', 'is-large' ], ariaLabel: 'close', onClick: (e: Event) => closeModal(e) }) ] : []),
          ]
        )
      )
    }
  }
})
