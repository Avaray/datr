#!/usr/bin/env node
':' //; command -v node >/dev/null 2>&1 && exec node "$0" "$@"; command -v bun >/dev/null 2>&1 && exec bun "$0" "$@"; command -v deno >/dev/null 2>&1 && exec deno run "$0" "$@"; echo "Error: Please install node, bun, or deno" >&2; exit 1

import datr from './module.mjs';

const version = '4.0.0';

const args = typeof Deno !== 'undefined' ? Deno.args : process.argv.slice(2);

const printHelp = () => {
  console.log(`Usage: datr [options]

Options:
  -p, --precision  day | seconds | ms   (default: day)
  -s, --separator  <string>             (default: none)
  -d, --date       ISO string | timestamp
  -v, --version    Show version
  -h, --help       Show help

Examples:
  datr
  datr -p seconds
  datr -p ms -s -
  datr --date 2024-06-15 -precision seconds`);
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
  const arg = args[i];
  if (arg === '--precision' || arg === '-p') options.precision = args[++i];
  else if (arg === '--separator' || arg === '-s') options.separator = args[++i];
  else if (arg === '--date' || arg === '-d') options.date = args[++i];
}


try {

  console.log(datr(options));
} catch (err) {
  console.error(err.message);
  typeof process !== 'undefined' ? process.exit(1) : Deno.exit(1);
}

