# Swap text [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/swap-text/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/swap-text)

Swap characters in a string.

[![NPM Badge](https://nodei.co/npm/swap-text.png)](https://npmjs.com/package/swap-text)

## Install

```sh
npm install swap-text
```

## Usage

```js
const swapText = require("swap-text");

swapText("abcdef", "ab", "cd")
//=> 'cdabef'
```

## API

### swapText(string, a, b)

#### string

Type: `string`

The text to transform.

#### a

Type: `string`

The first group of characters to swap with the second.

#### b

Type: `string`

The second group of characters to swap with the first.
