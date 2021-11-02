# Save As JSON

Save a JavaScript object, value, or JSON string to a file in browser environment.

## Installation

```js
npm install save-as-json
```

## Usage

### Example

```js
import saveAsJSON from 'save-as-json';

const data = { key: 'value' };

// Default options
const options = {
  filename: '%timestamp',
  isJSON: false,
  replacer: null,
  space: 0,
};

saveAsJSON(data, options);
```

### Options

#### filename

A string or number value.

- %timestamp - `Date.now()`
- %title - `document.title`
- %date - yyyymmdd
- %time - hhmmss

#### isJSON

Set to `true` if `data` is already a JSON string.

#### replacer and space

`JSON.stringify()` parameters.
