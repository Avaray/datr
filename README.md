# 🕘 DATR

**Date** is just a **number**. It's all about increasing that **number**.  
You might find this package useful in console logging, naming files, generating ID's, etc.

### First, optional argument is `precision`

0 - Year, Month, Day (default)  
1 - Year, Month, Day, Hour, Minute, Second  
2 - Year, Month, Day, Hour, Minute, Second, Millisecond

### Second, optional argument is `separator`

You can pass string separator to split Day, Hour and Milliseconds.  
In examples below I'm using dots and hyphens.

## Requirements

[NodeJS](https://nodejs.org/en/download) version **8.2.1** or higher because of [ES2017 padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart).

## [Module](https://nodejs.org/api/esm.html#introduction) Installation

By using [NPM](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)

```bash
npm i datr
```

By using [PNPM](https://pnpm.io/pnpm-cli)

```bash
pnpm add datr
```

## [Module](https://nodejs.org/api/esm.html#introduction) Usage

```js
const datr = require('datr');

console.log(typeof datr());
// string

console.log(datr());
// 20221230

console.log(datr(1));
// 20221230183500

console.log(datr(2));
// 20221230183500001

console.log(datr(2, '.'));
// 20221230.183500.001

console.log(datr(2, '-'));
// 20221230-183500-001
```

# [CLI](https://en.wikipedia.org/wiki/Command-line_interface) installation

By using [NPM](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)

```bash
npm i -g datr
```

By using [PNPM](https://pnpm.io/pnpm-cli)

```bash
pnpm add -g datr
```

# [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage

```bash
datr
# 20221230

datr 1
# 20221230183500

datr 2
# 20221230183500001

datr 2 .
# 20221230.183500.001

datr 2 -
# 20221230-183500-001
```
