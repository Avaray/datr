# 🕘 DATR

This package will help you generate a date in a programmer-friendly format.  
It might be useful for console logging, generating IDs, naming files, etc.

## The Idea

Let's treat the **Date** as a **number**. It's all about increasing that **number**.  
[Unix time](https://en.wikipedia.org/wiki/Unix_time) does that, but it's not human-readable.  
The solution is to start with [YMD](https://en.wikipedia.org/wiki/Date_format_by_country#/media/File:Date_format_by_country_3.svg), add hours to it, and include milliseconds as the smallest unit.  
The end result is the format **YYYYMMDDHHMMSSms**.  
Many people use such a format. However, it has never been standardized.

## [Module](https://nodejs.org/api/esm.html#introduction) Installation

[NPM](https://docs.npmjs.com/cli-documentation/install)

```bash
npm i datr
```

[PNPM](https://pnpm.io/cli/add)

```bash
pnpm add datr
```

[BUN](https://bun.sh/docs/cli/add)

```bash
bun i datr
```

[DENO](https://docs.deno.com/runtime/reference/cli/add/)

```bash
deno add npm:datr
```

## [Module](https://nodejs.org/api/esm.html#introduction) Usage

```js
import datr from 'datr';

console.log(datr());
// 20240615

console.log(datr({ precision: 'seconds' }));
// 20240615183500

console.log(datr({ precision: 'ms', separator: '-' }));
// 20240615-183500-001

console.log(datr({ date: '2024-06-15', precision: 'seconds' }));
// 20240615000000
```

### Options

The `datr` function accepts an optional options object:

| Option | Type | Default | Description |
|---|---|---|---|
| `precision` | `'day' \| 'seconds' \| 'ms'` | `'day'` | Smallest unit in the output. |
| `separator` | `string` | `''` | String inserted between blocks. |
| `date` | `Date \| string \| number` | `new Date()` | Date to format (Date object, ISO string, or timestamp). |

*Note: If an unknown precision value is passed, it falls back to `'day'`.*

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) installation

[NPM](https://docs.npmjs.com/cli/v10/commands/npm-install#global)

```bash
npm i -g datr
```

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage

```bash
datr
# 20240615

datr --precision seconds
# 20240615183500

datr --precision ms --separator -
# 20240615-183500-001

datr --date 2024-06-15 --precision seconds
# 20240615000000
```

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage without installation

[NPM](https://docs.npmjs.com/cli/v10/commands/npx)

```bash
npx datr
```

[PNPM](https://pnpm.io/cli/dlx)

```bash
pnpm dlx datr
```

[BUN](https://bun.sh/docs/cli/bunx)

```bash
bunx datr
```

[DENO](https://docs.deno.com/runtime/reference/cli/run/)

```bash
deno run npm:datr
```

## Migrating from v3

The API has changed from positional arguments to a single options object.

| v3 (Positional) | v4 (Object) |
|---|---|
| `datr()` | `datr()` |
| `datr(1)` | `datr({ precision: 'seconds' })` |
| `datr(2)` | `datr({ precision: 'ms' })` |
| `datr(2, '-')` | `datr({ precision: 'ms', separator: '-' })` |