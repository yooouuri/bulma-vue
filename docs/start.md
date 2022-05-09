# Installation

```bash
yarn add bulma-vue
```

## Usage

#### Full bundle

```typescript
import { createApp } from 'vue'
import BulmaVue from 'bulma-vue'
import 'bulma-vue/css/bulma-vue.css'

const app = createApp(App)
app.use(BulmaVue)
```

#### Register individual components globally

```typescript
import { createApp } from 'vue'
import { plugin as buttonPlugin } from 'bulma-vue/components/button'
import 'bulma-vue/css/bulma-vue.css'

const app = createApp(App)
app.use(buttonPlugin)
```

#### Or as individual component

```typescript
import { createApp } from 'vue'
import 'bulma-vue/css/bulma-vue.css'

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
