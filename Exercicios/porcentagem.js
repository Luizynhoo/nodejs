const read = require('readline-sync')
let x,y,valor

console.clear
console.log ("Bem Vindo ao calculo de porcetagem")

//entrada
x = Number(read.question("digite o valor inicial:   "))
y = Number(read.question("digite o valor da porcetagem: "))

//processamento
valor = (x*y)/100


//saída
console.clear
console.log("----------------------------------------")
console.log(`      Valor Final de ${y}% de ${x}      `)
console.log(`               é ${valor}               `)
console.log("-----------------------------------------")