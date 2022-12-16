# easy-form-component
An easy wrapper for forms that gives you an object of its values.

## Instructions

Clone the Git repo into your project. 

Import the code like:

```js

import './easy-form-component/index.js';

```

or

```html
  <script type="module" src="./easy-form-component/index.js"></script>
```

Then use the component like: 

```html
<easy-form>
  <input type="text" name="cool_name" />
  <textarea name="text_area">Text area content</textarea>
  <input type="submit" />
</easy-form>

```

Note that the name attribute is required for every input, except for submit. 

You can then tie an event to the "submit" event:

```js
document.querySelector('easy-form').addEventListener('submit', (e) => {
  console.log(e.detail);
})

```

You can also execute the getFormValues function directly:

```js
const values = document.querySelector('easy-form').getFormValues()

```