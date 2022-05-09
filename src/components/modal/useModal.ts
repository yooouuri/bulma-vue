import { inject } from 'vue'

export const useModal = function() {
  const modal = inject<{ close: () => void }>('modal')

  if (modal === undefined) {
    return console.warn('[b-modal] there is no provided modal')
  }

  return {
    close: modal.close
  }
}
