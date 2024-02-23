# 🕘 DATR

This package will help you generate a date in a programmer-friendly format.  
It might be useful for console logging, generating IDs, naming files, etc.

## The Idea

Let's treat the **Date** as a **number**. It's all about increasing that **number**.  
[Unix time](https://en.wikipedia.org/wiki/Unix_time) does that, but it's not human-readable, and it doesn't include milliseconds.  
To avoid these problems, let's start with [YMD](https://en.wikipedia.org/wiki/Date_format_by_country#/media/File:Date_format_by_country_3.svg) date format and include the time, with milliseconds as the smallest unit. The end result is the format **YYYYMMDDHHMMSSms**.  
There are many users of such a format. However, the format itself has never been standardized.

## DATR takes two arguments

### First, optional argument is `precision`

Precision adds additional **blocks** to the format.

`0` - Year, Month, Day (default)  
`1` - Year, Month, Day, Hour, Minute, Second  
`2` - Year, Month, Day, Hour, Minute, Second, Millisecond

### Second, optional argument is `separator`

You can pass a string separator to separate **blocks** and make the output more readable.  
In examples below you can see dots and hyphens.

## [Module](https://nodejs.org/api/esm.html#introduction) Installation

By using [NPM](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)

```bash
npm i datr
```

By using [PNPM](https://pnpm.io/pnpm-cli)

```bash
pnpm add datr
```

By using [BUN](https://bun.sh/docs/cli/add)

```bash
bun add datr
```

## [Module](https://nodejs.org/api/esm.html#introduction) Usage

```js
import datr from 'datr';

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

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) installation

By using [NPM](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)

```bash
npm i -g datr
```

By using [PNPM](https://pnpm.io/pnpm-cli)

```bash
pnpm add -g datr
```

By using [BUN](https://bun.sh/docs/cli/add)

```bash
bun add -g datr
```

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage

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

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage without installation

By using [NPM](https://docs.npmjs.com/packages-and-modules/getting-packages-from-the-registry)

```bash
npx datr
```

By using [PNPM](https://pnpm.io/pnpm-cli)

```bash
pnpm dlx datr
```

By using [BUN](https://bun.sh/docs/cli/add)

```bash
bunx datr
```
