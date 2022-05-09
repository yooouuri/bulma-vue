<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<b-modal v-model="showModal">Joejoe</b-modal>

<b-button @click="showModal = !showModal">Show</b-button>

# Modal
Classic modal overlay to include any content you may need

## Component
> Use the `useModal` composable to close the modal from an injected component

```html
<script setup>
import Abc from './abc.vue'

const showModal = ref(false)
</script>

<b-modal v-model="showModal" :component="Abc" />
```

Abc.vue
```html
<script setup>
import { useModal } from 'bulma-vue/components/modal'

const { close } = useModal()
</script>

<template>
  <button class="button" @click="close">Cancel</button>
</template>
```

## Image modal

```html
<b-modal v-model="showModal">
  <p class="image is-4by3">
    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
  </p>
</b-modal>
```

## Modal card

```html
<b-modal v-model="showModal" has-modal-card>
  <template #default="{ close }">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close" @click="showModal = false"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </template>
</b-modal>
```

## API

### Props

| Name | Description | Type | Values | Default |
|--|--|--|--|--|
| v-model | Visibility of the modal | Boolean | - | - |
| width | Width of the Modal | Number | - | 960 |
| component | Component to inject | Component | - | - |
| full-screen | Display modal as full screen | Boolean | - | false |
| has-modal-card | If your modal content has a .modal-card as root, add this prop or the card might break on mobile | Boolean | - | false |

### Events

| Name | Description | Parameter |
|--|--|--|
| update:modelValue | Visibility of the modal | Boolean |
| close | Fired when modal is closed | Event |

### Slots

| Name | Description | Props |
|--|--|--|
| default | - | `close()` |
