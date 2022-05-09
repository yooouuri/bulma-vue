<script setup>
import { props } from '../../src/components/button/button.ts'

const mappedProps = Object.entries(props)
  .map(prop => {
    const [ key, val ] = prop

    let type

    if (val.type === undefined) {
      type = val.name
    } else {
      type = val.type.name
    }

    return {
      name: key,
      type,
      default: val.default ?? '-'
    }
  })
  // .map(prop => `| ${prop.name} | ??? | ${prop.type} | ??? | ${prop.default} |`)
</script>

# Button

The classic button, in different colors, sizes, and states

```html
<template>
  <b-button @click="clickMe">Click Me</b-button>
</template>
```

## Types and states

```html
<template>
  <b-button type="is-primary">Primary</b-button>
  <b-button type="is-primary is-light">Primary Light</b-button>

  <b-button type="is-success">Success</b-button>
  <b-button type="is-success is-light">Success Light</b-button>

  <b-button type="is-danger">Danger</b-button>
  <b-button type="is-danger is-light">Danger Light</b-button>

  <b-button type="is-warning">Warning</b-button>
  <b-button type="is-warning is-light">Warning Light</b-button>

  <b-button type="is-info">Info</b-button>
  <b-button type="is-info is-light">Info Light</b-button>

  <b-button type="is-link">Link</b-button>
  <b-button type="is-link is-light">Link Light</b-button><br />

  <b-button type="is-light">Light</b-button>
  <b-button type="is-dark">Dark</b-button>
  <b-button type="is-text">Text</b-button>
  <b-button type="is-ghost">Ghost</b-button>
</template>
```

## Sizes

```html
<template>
  <b-button size="is-small">Small</b-button>
  <b-button>Default</b-button>
  <b-button size="is-medium">Medium</b-button>
  <b-button size="is-large">Large</b-button>
</template>
```

## API

### Props

<table>
<thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead>
<tbody>
<tr v-for="prop in mappedProps">
  <td>{{ prop.name }}</td>
  <td>???</td>
  <td>{{ prop.type }}</td>
  <td>???</td>
  <td>{{ prop.default }}</td>
</tr>
</tbody>
</table>

### Events

| Name | Description | Parameter |
|--|--|--|
| click | Fired when clicked on the button | Event |

### Slots

| Name | Description | Props |
|--|--|--|
| default | - | - |

