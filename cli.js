#! /usr/bin/env node

var datr = require('datr');

let args = process.argv.slice(2)
console.log(datr(args[0], args[1]))
