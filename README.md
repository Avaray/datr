# 🕘 DATR

This package will help you generate a date in a programmer-friendly format.  
It might be useful for console logging, generating IDs, naming files, etc.

## The Idea

Let's treat the **Date** as a **number**. It's all about increasing that **number**.  
[Unix time](https://en.wikipedia.org/wiki/Unix_time) does that, but it's not human-readable.  
The solution is to start with [YMD](https://en.wikipedia.org/wiki/Date_format_by_country#/media/File:Date_format_by_country_3.svg), add hours to it, and include milliseconds as the smallest unit.  
The end result is the format **YYYYMMDDHHMMSSms**.  
Many people use such a format. However, it has never been standardized.

## DATR takes two arguments

### First, optional argument is `precision`

The argument sets the precision we want to see in output.

`0` - Year, Month, Day (default)  
`1` - Year, Month, Day, Hour, Minute, Second  
`2` - Year, Month, Day, Hour, Minute, Second, Millisecond

### Second, optional argument is `separator`

You can pass a string separator to separate **blocks** and make the output more readable.  
In examples below you can see dots and hyphens.

## [Module](https://nodejs.org/api/esm.html#introduction) Installation

By using [NPM](https://docs.npmjs.com/cli-documentation/install)

```bash
npm i datr
```

By using [PNPM](https://pnpm.io/cli/add)

```bash
pnpm add datr
```

By using [BUN](https://bun.sh/docs/cli/add)

```bash
bun i datr
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

By using [NPM](https://docs.npmjs.com/cli/v10/commands/npm-install#global)

```bash
npm i -g datr
```

By using [PNPM](https://pnpm.io/cli/add#--global--g)

```bash
pnpm add -g datr
```

By using [BUN](https://bun.sh/docs/cli/add#global)

```bash
bun i -g datr
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

By using [NPM](https://docs.npmjs.com/cli/v10/commands/npx)

```bash
npx datr
```

By using [PNPM](https://pnpm.io/cli/dlx)

```bash
pnpm dlx datr
```

By using [BUN](https://bun.sh/docs/cli/bunx)

```bash
bunx datr
```
