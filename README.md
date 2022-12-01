# 🕘 DATR

### **Date** is just a **number**. It's all about increasing that **number**.  

You might find this package useful in console logging, naming files, generating ID's, etc.

## First argument is `precision`
0 - Year, Month, Day  
1 - Year, Month, Day, Hour, Minute, Second  
2 - Year, Month, Day, Hour, Minute, Second, Millisecond  

## Second, optional argument is `separator`
You can pass string separator to split Day, Hour and Milliseconds.  
In examples below I'm using dots and hyphens.

# Installation
`npm i datr` or `pnpm add datr`

# Usage
````js
const datr = require('datr')

console.log(typeof datr());
// string

console.log(datr())  
// 20221230

console.log(datr(1))  
// 20221230183500

console.log(datr(2))  
// 20221230183500001

console.log(datr(2), '.')  
// 20221230.183500.001

console.log(datr(2), '-')  
// 20221230-183500-001
````

# CLI installation
`npm i -g datr` or `pnpm add -g datr`

# CLI usage
````bash
datr
# 20221230

datr 1
# 20221230183500

datr 2 
# 20221230183500001

datr 2 .
# 20221230.183500.001

datr 2 -
# 20221230-183500-001
````