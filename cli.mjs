#! /usr/bin/env node

import datr from './module.mjs';

const args = process.argv.slice(2);

console.log(datr(args[0], args[1]));
