# bulma-vue

> Same API as [Buefy](https://github.com/buefy/buefy), no external dependencies

## Quick start

You need [Vue.js](https://vuejs.org/) **version 3.0+**.

### 1 Install via yarn

```bash
yarn add bulma-vue bulma
```

### 2 Import and use bulma-vue

Bundle
```typescript
import { createApp } from 'vue'
import BulmaVue from 'bulma-vue'
import 'bulma/css/bulma.css'

const app = createApp(App)
app.use(BulmaVue)
```

Register individual components globally
```typescript
import { createApp } from 'vue'
import { plugin as buttonPlugin } from 'bulma-vue/components/button'
import 'bulma/css/bulma.css'

const app = createApp(App)
app.use(buttonPlugin)
```

Or as individual component

```typescript
import { createApp } from 'vue'
import 'bulma/css/bulma.css'

createApp(App)
```

```html
<script setup lang="ts">
import BButton from 'bulma-vue/components/button'
</script>

<template>
  <b-button>Click me!</b-button>
</template>
```

## Browser support

Recent versions of Firefox, Chrome, Edge, Opera and Safari.
