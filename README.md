# 🕘 DATR

I created this package for my personal usage because I like to use this format of date.  
Maybe someone of you will find this package useful.

`npm i datr`

````js
const datr = require('datr')

console.log(datr())  
// 20181230

console.log(datr(1))  
// 20181230.183500

console.log(datr(2))  
// 20181230.183500.001
````