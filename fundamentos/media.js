/**
 * App para calcular a média de 2 notas
 */

//importação do pacote readline-sync
const read = require('readline-sync')

//variáveis
let nome, disciplina
let prova1, prova2, trabalho, redacao, media 

console.clear()
console.log("'########:::'#######::'##:::::::'########:'########:'####:'##::::'##:")
console.log("##.... ##:'##.... ##: ##::::::: ##.....::... ##..::. ##:: ###::'###:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ####'####:")
console.log("########:: ##:::: ##: ##::::::: ######:::::: ##::::: ##:: ## ### ##:")
console.log("##.... ##: ##:::: ##: ##::::::: ##...::::::: ##::::: ##:: ##. #: ##:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ##:.:: ##:")
console.log("########::. #######:: ########: ########:::: ##::::'####: ##:::: ##:")
console.log("........::::.......:::........::........:::::..:::::....::..:::::..::")

//entrada
nome = read.question("digite o seu nome:  ")
disciplina = read.question("digite a disciplina: ")
prova1 = Number(read.question("digite a nota da prova1:  "))
prova2 = Number(read.question("digite a nota da prova2:  "))
trabalho = Number(read.question("digite a nota do trabalho:  "))
redacao = Number(read.question("digite a nota da redacao:  "))

//processamento
media = (prova1 + prova2 + trabalho + redacao) / 4

//saída
console.clear()
console.log("----------------------------------------")
console.log("Ficha do Aluno")
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`prova 1: ${prova1}`)
console.log(`prova 2: ${prova2}`)
console.log(`trabalho: ${trabalho}`)
console.log(`redacao: ${redacao}`)
console.log(`média final: ${media}`)
console.log("----------------------------------------")