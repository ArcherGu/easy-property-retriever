# Easy Property Retriever

<p align="left">
    <a href="https://npmjs.com/package/easy-property-retriever">
        <img src="https://img.shields.io/npm/v/easy-property-retriever.svg?style=flat-square" alt="npm package">
    </a>
    <a href="https://github.com/ArcherGu/easy-property-retriever">
        <img src="https://img.shields.io/github/checks-status/archergu/easy-property-retriever/main?style=flat-square" alt="checks">
    </a>
    <a href="https://github.com/ArcherGu/easy-property-retriever/blob/main/LICENSE">
        <img src="https://img.shields.io/github/license/archergu/easy-property-retriever?style=flat-square" alt="license">
    </a>
</p>

easy-property-retriever is a little tool used to get object properties. this lib is taken from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#obtaining_properties_by_enumerabilityownership).

## Quick start

### Install

#### Install with NPM or Yarn

```bash
# npm
npm install --save easy-property-retriever
# yarn
yarn add --save easy-property-retriever
```

#### Or link to the source code directly

```html
<script src="dist/easy-property-retriever.min.js"></script>
```

Name `EasyPropertyRetriever` is ready to use and no need to import.

#### Or CDN

```html
<script src="https://unpkg.com/easy-property-retriever/dist/easy-property-retriever.min.js"></script>
```

Name `EasyPropertyRetriever` is ready to use and no need to import.

## How to use

```js
import EasyPropertyRetriever from 'easy-property-retriever';

function Person() {
  this.propA = 1;
  this.propB = 2;
}

const props = EasyPropertyRetriever.getOwnEnumerables(new Person());

console.log(props);

// Output:
// > ['propA', 'propB']
```

## Documentation

[Documentation](https://archergu.github.io/easy-property-retriever/index.html)

## Run the unit tests

```bash
yarn test
```

## License

The code in this project is licensed under [MIT license](https://github.com/ArcherGu/easy-property-retriever/blob/main/LICENSE).
