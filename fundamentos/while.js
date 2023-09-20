/**
 * Estudo das estruturas de controle 
 *           While | do While
 */

const read = require('readline-sync')

let x = 1
let y = 1

while (x < 11) {
    console.log("teste da estrutura while")
    x++
}
read.question("clique [ENTER] para continuar")
do {
    console.log("teste da estrutura do-while")
    y++
} while (y < 11) 

