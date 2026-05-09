# 🕘 DATR

Dates should be sortable and human-readable at the same time.
[Unix timestamps](https://en.wikipedia.org/wiki/Unix_time) are sortable but unreadable.
Most [date strings](https://en.wikipedia.org/wiki/Date_format_by_country) are readable but not sortable. **YYYYMMDDHHMMSSms** is both - common among developers, yet never formally standardized.

Useful for console logging, generating IDs, naming files, and more.

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

typeof datr();
// string

datr();
// 20260508

datr({ precision: 'seconds' });
// 20260508104700

datr({ precision: 'ms', separator: '-' });
// 20260508-104700-001

datr({ date: '2026-05-08', precision: 'seconds' });
// 20260508000000
```

### Options

The `datr` function accepts an optional options object:

| Option | Type | Default | Description |
|---|---|---|---|
| `precision` | `'day' \| 'seconds' \| 'ms'` | `'day'` | Smallest unit in the output. |
| `separator` | `string` | `''` | String inserted between blocks. |
| `date` | `Date \| string \| number` | `new Date()` | Date to format (Date object, ISO string, or timestamp). |

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) installation

[NPM](https://docs.npmjs.com/cli-v10/commands/npm-install#global)

```bash
npm i -g datr
```

[PNPM](https://pnpm.io/cli/add#--global--g)

```bash
pnpm add -g datr
```

[BUN](https://bun.sh/docs/cli/add#global)

```bash
bun i -g datr
```

[DENO](https://docs.deno.com/runtime/reference/cli/run/)

```bash
deno i -g datr
```


## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage

```bash
datr
# 20260508

datr --precision seconds
# 20260508104700

datr --precision ms --separator -
# 20260508-104700-001

datr --date 2026-05-08 --precision seconds
# 20260508000000

datr --version
# 4.0.0

datr --help
# Usage: datr [options] ...
```

All options also support short flags: `-p`, `-s`, `-d`, `-v`, and `-h`.

```bash
datr -d "$(date)" -p ms -s -
# 20260508-104700-222
```

## [CLI](https://en.wikipedia.org/wiki/Command-line_interface) usage without installation

[NPM](https://docs.npmjs.com/cli/v11/commands/npx)

```bash
npx datr
```

[PNPM](https://pnpm.io/cli/pnx)

```bash
pnx datr
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
