# react-anim-text

> Package for animating text

[![NPM](https://img.shields.io/npm/v/react-anim-text.svg)](https://www.npmjs.com/package/react-anim-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-anim-text
```
![Text Animation](https://github.com/aswinigh/react-anim-text/blob/main/Images/GrowTextExample.gif)

## Usage

```jsx
import React, { Component } from 'react'

import GrowText from 'react-anim-text'
import 'react-anim-text/dist/index.css'

const TextList = ["Animated","text","here"];
class Example extends Component {
  render() {
    return <GrowText textList={TextList} duration={3000} />
  }
}
```

## License

MIT © [aswinigh](https://github.com/aswinigh)
