/**
 * Conversor de Velocidade
 * Milhas para Km/h
 */

//importante do módulo (readline-sync)
const read = require('readline-sync')

//variáveis
let milhas,km

console.clear
console.log("Bem vindo ao conversor de Velocidade")
console.log("===========MILHAS PARA KM===========")

//processamento
milhas = (read.question("Digite o valor em milhas:  ")).replace(",",".")
km = (milhas*1.60934)

//saida 
console.log
console.clear()
console.log("_________________________________")
console.log("Velocidade convertida para km")
console.log(`Velocidade em km: ${km.toFixed(2)}`)
console.log("_________________________________")
