/**
 * Conversor de Temperatura
 * Fahrenheit para Celsius
 */

const read = require('readline-sync')

let Celsius, Fahrenheit
let i

console.clear
console.log("Bem vindo ao conversor de temperatura")
i = (read.question("Escolha a opcao de conversao:   "))
if (i==="f") {
Fahrenheit = (read.question("Digite o valor em Fahrenheit:   "))
Celsius = (Fahrenheit - 32)/1.8
console.log
console.clear
console.log("_________________________________")
console.log("Temperatura Convertida")
console.log(`Temperatura em Celsius: ${Celsius.toFixed(2)}ºC`)
console.log("_________________________________")

} else {
Celsius = (read.question("Digite o valor em Celsius:    "))
Fahrenheit = (Celsius * 1.8 + 32)
console.log
console.clear
console.log("_________________________________")
console.log("Temperatura Convertida")
console.log(`Temperatura em Fahrenheit: ${Fahrenheit.toFixed(2)}ºC`)
console.log("_________________________________")

    
}


