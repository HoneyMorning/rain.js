# rain.js

rain.js is a library base canvas.

![Rain.js](docs/rain-readme.gif)

## Installation

```bash
npm i -S rain.js
```

## Usage

```html
<link href="dist/rain.css" rel="stylesheet">

<div id="rain-container"></div>
```

```js
import { rain } from 'rain.js';

const option = {
  width: 1000, // default is #rain-container width
  height: 800, // default is screen clientHeight
  extent: 'small' // or 'middle', 'large'
};
new rain('#rain-container', option);
```

## Use in the browser

```html
<link href="dist/rain.css" rel="stylesheet">

<div id="rain-container"></div>

<script src="path/to/dist/rain.js"></script>
<script>
new Rain.rain('#rain-container', option);
</script>
```

## Plan

- Add sound
- Add zoom control
- Add change extent button
