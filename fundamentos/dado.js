/**
 * Jogo do dado
 */

const read = require ('readline-sync')
const colors = require ('colors')

let face

console.clear()
console.log("===============================================".cyan)
console.log("=================JOGO DO DADO==================".cyan)
console.log("===============================================".cyan)
read.question("Pressione a tecla [ENTER] para lancar o dado:   ")
face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5 
switch (face) {
    case 1:
        console.log(" _______")
        console.log("|       |")
        console.log("|   0   |")
        console.log("|_______|")
        break
    case 2:
        console.log(" _______")
        console.log("| 0     |")
        console.log("|       |")
        console.log("|_____0_|")
        break
    case 3:
        console.log(" _______")
        console.log("| 0     |")
        console.log("|   0   |")
        console.log("|_____0_|")
        break
    case 4:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("|       |")
        console.log("|_0___0_|")
        break
    case 5:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("|   0   |")
        console.log("|_0___0_|")
        break
    case 6:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("| 0   0 |")
        console.log("|_0___0_|")
        console.log()
console.log("|￣￣￣￣￣￣￣￣￣￣￣|")
console.log("|    GRANDE SORTE      |")
console.log("|______________________|")
console.log("     \\ (•◡•) /")
console.log("      \\      / ")
console.log("        ———")
console.log("       |    |")
console.log("       |_   |_")
        break
}
