# Field
Fields are used to add functionality to controls and to attach/group components and elements together

These components should be used as a direct child of Field:

* Autocomplete
* Checkbox Button
* Datepicker
* Input
* Radio Button
* Select
* Taginput
* Timepicker
* Upload
.control elements (html class)

```html
<b-field label="Name">
  <b-input value="Kevin Garvey"></b-input>
</b-field>

<b-field label="Email"
  type="is-danger"
  message="This email is invalid">
  <b-input type="email"
      value="john@"
      maxlength="30" />
</b-field>

<b-field label="Username"
  type="is-success"
  message="This username is available">
  <b-input value="johnsilver" maxlength="30" />
</b-field>

<b-field label="Password"
  type="is-warning"
  :message="['Password is too short', 'Password must have at least 8 characters']">
  <b-input value="123" type="password" maxlength="30" />
</b-field>

<b-field label="Subject">
  <b-select placeholder="Select a subject">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
  </b-select>
</b-field>
```

## Label slot

```html
<b-field>
  <template #label>
    Label with custom <span class="has-text-primary is-italic">style</span>
  </template>
</b-field>
```

## Message slot

```html
<b-field>
  <template #message>
    <div>Password is too short</div>
    <div>Password must have at least 8 characters</div>
  </template>
</b-field>
```

## API

### Props

| Name | Description | Type | Values | Default |
|--|--|--|--|--|
| type | 	Type (color) of the field and help message, also adds a matching icon, optional. Used by Input, Select and Autocomplete | String | - | 	is-white, is-black, is-light, is-dark, is-primary, is-info, is-success, is-warning, is-danger, and any other colors you've set in the $colors list on Sass |
| label | Field label | String | - | - |
| label-for | Same as native for set on the label | String | - | - |
| message | Help message text | String | - | - |
| grouped | Direct child components/elements of Field will be grouped horizontally (see which ones at the top of the page) | Boolean | - | false |
| custom-class | CSS classes to be applied on field label | String | - | - |

### Slots

| Name | Description | Props |
|--|--|--|
| label | Custom label | - |
| message | Custom label | - |
