/**
 * ELEITOR - obrigatoriedade de votar
 */

const colors = require('colors')
const read = require('readline-sync')

let idade, nome

console.clear()
console.log("BEM VINDOS A ELEICAO".blue)
console.log("")


nome = (read.question("Digite seu nome: ".blue))
idade = Number(read.question("digite a sua idade:   ".blue))

if (idade < 16) {
    console.log("Voce nao pode votar".red)
} else if (idade === 16 || idade === 17 | idade > 70) {
    console.log("Voto facultativo |SEM OBRIGACAO|".yellow)
} else {
    console.log("OBRIGATORIO A VOTAR".green)
}


