#!/usr/bin/env sh
':' //; command -v node >/dev/null 2>&1 && exec node "$0" "$@"; command -v bun >/dev/null 2>&1 && exec bun "$0" "$@"; command -v deno >/dev/null 2>&1 && exec deno run "$0" "$@"; echo "Error: Please install node, bun, or deno" >&2; exit 1

import datr from './module.mjs';

// Cross-runtime argument resolution: Deno uses Deno.args, Node/Bun use process.argv
const args =
  typeof Deno !== 'undefined'
    ? Deno.args
    : process.argv.slice(2);

console.log(datr(args[0], args[1]));
