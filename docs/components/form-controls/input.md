# Input
Get user Input. Use with Field to access all functionalities

```html
<b-field label="Password">
  <b-input v-model="state.password"
         type="password"
         :loading="false"
         custom-class="purple-input" />
</b-field>
```

## API

### Props

| Name | Description | Type | Values | Default |
|--|--|--|--|--|
| v-model | Binding value | String | - | - |
| type | Input type | String | - | text |
| size | Vertical size of input, optional | String | is-small, is-medium, is-large | - |
| expanded | Makes input full width when inside a grouped or addon field | Boolean | - | false |
| rounded | xxxxxxx | Boolean | - | false |
| disabled | Disable the input | Boolean | - | false |
| loading | Add the loading state to the input | Boolean | - | false |
| custom-class | 	CSS classes to be applied on input | String | - | - |

### Events

| Name | Description | Parameter |
|--|--|--|
| update:modelValue | Triggers when value is changed | String |
| change | Triggers when input has received blur | Event |
| focus | Triggers when input has received focus | Event |
| focus | Triggers when input has received blur | Event |
