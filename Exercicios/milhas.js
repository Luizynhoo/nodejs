/**
 * Conversor de Velocidade
 * Milhas para Km/h
 */

const read = require('readline-sync')

let milhas,km

console.clear
console.log("Bem vindo ao conversor de Velocidade")

milhas = (read.question("Digite o valor em milhas:  ")).replace(",",".")
km = (milhas*1.60934)

console.log
console.clear()
console.log("_________________________________")
console.log("Velocidade convertida")
console.log(`Velocidade em km: ${km.toFixed(2)}`)
console.log("_________________________________")
