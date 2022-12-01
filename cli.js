#! /usr/bin/env node

var datr = require('./module.js');

try {
    let args = process.argv.slice(2)
    console.log(console.log(datr(args[0], args[1])))
} catch {
    return null
}
