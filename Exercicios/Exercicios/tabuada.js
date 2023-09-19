/**
 * Exemplo do uso do laço FOR (TABUADA)
 */

const read = require('readline-sync')
const color = require('colors')

let valor 

console.clear()
console.log("_________________________________")
console.log("=============TABUADA=============")
console.log("_________________________________")

valor = Number(read.question("Digite a tabuada que vc quer:   ".blue))

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor*i}`)
}