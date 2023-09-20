/**
 * Exemplo do uso do WHILE (TABUADA)
 */

const read = require('readline-sync')
const color = require('colors')

let valor = 7
let i = 1

console.clear()
console.log("_________________________________")
console.log("=============TABUADA=============")
console.log("_________________________________")

while (i < 11) {
    console.log(`${valor} x ${i} = ${i * valor}`)
    i++
}

