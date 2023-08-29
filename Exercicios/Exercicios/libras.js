/**
 * conversor de temperatura 
 * fahrenheit para celsius
 */

//importante do módulo (readline-sync)
const read = require("readline-sync")
//variáveis
let libras , kilos

console.clear()
console.log("---------------------------")
console.log("Bem Vindo ao Conversor de Peso")
console.log("=====libras para kilos=====")

//entrada
libras = Number(read.question("Digite o peso em libras que voce deseja converter:    "))
//processamento
kilos = (libras / 2.2046 ) 
console.log
//saida 
console.log
console.clear()
console.log("_________________________________")
console.log("Libra convertido para Kilos")
console.log(`Peso em kilos: ${kilos.toFixed(2)}`)
console.log("_________________________________")

