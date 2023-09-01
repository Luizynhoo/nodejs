/**
 * Calculadora que calcula Real para Dolar
 */

//Módulos 
const read = require('readline-sync')

//Variáveis
let cota
let dolar
let real

console.clear()
console.log("-----------------------------------")
console.log("Bem Vindo a sua Calculadora VIRTUAL")
console.log("-----------------------------------")
console.log("=====REAL para DOLAR=====")

//Entrada
cota = Number(read.question("Digite a cotacao do dolar: ").replace(",","."))
real = Number(read.question("Digite o valor do real que gostaria de converter:   ").replace(",","."))

//Processamento
dolar = (real * cota)

//Saída
console.log
console.clear()
console.log("_________________________________")
console.log("O seu valor foi convertido ")
console.log("Valor em Dolar:")
console.log(dolar)
console.log("_________________________________")
