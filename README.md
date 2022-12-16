# easy-form-component
An easier way to read forms


```js

import './easy-form-component/index.js';


```

Then use the component like: 

```html
<easy-form>
  <input type="text" name="cool_name" />
  <input type="submit" />
</easy-form>

```

Note that the name attribute is required. 

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