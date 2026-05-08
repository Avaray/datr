#!/usr/bin/env node
':' //; command -v node >/dev/null 2>&1 && exec node "$0" "$@"; command -v bun >/dev/null 2>&1 && exec bun "$0" "$@"; command -v deno >/dev/null 2>&1 && exec deno run "$0" "$@"; echo "Error: Please install node, bun, or deno" >&2; exit 1

import datr from './module.mjs';

const version = '4.0.0';


const args = typeof Deno !== 'undefined' ? Deno.args : process.argv.slice(2);

const printHelp = () => {
  console.log(`Usage: datr [options]

Options:
  --precision  day | seconds | ms   (default: day)
  --separator  <string>             (default: none)
  --date       ISO string | timestamp
  --version    Show version
  --help       Show help

Examples:
  datr
  datr --precision seconds
  datr --precision ms --separator -
  datr --date 2024-06-15 --precision seconds
  datr --version
  datr --help`);
};

if (args.includes('--help') || args.includes('-h')) {
  printHelp();
  typeof process !== 'undefined' ? process.exit(0) : Deno.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
  console.log(version);
  typeof process !== 'undefined' ? process.exit(0) : Deno.exit(0);
}

const options = {};
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--precision') options.precision = args[++i];
  else if (args[i] === '--separator') options.separator = args[++i];
  else if (args[i] === '--date') options.date = args[++i];
}

try {

  console.log(datr(options));
} catch (err) {
  console.error(err.message);
  typeof process !== 'undefined' ? process.exit(1) : Deno.exit(1);
}

