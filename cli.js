#! /usr/bin/env node

var datr = require('./module');

let args = process.argv.slice(2)
console.log(datr(args[0], args[1]))
