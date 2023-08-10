/**
 * App para calcular a média de 2 notas
 */

//variáveis
let nome, disciplina
let prova1, prova2, trabalho, redacao, media 

console.clear
console.log("'########:::'#######::'##:::::::'########:'########:'####:'##::::'##:")
console.log("##.... ##:'##.... ##: ##::::::: ##.....::... ##..::. ##:: ###::'###:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ####'####:")
console.log("########:: ##:::: ##: ##::::::: ######:::::: ##::::: ##:: ## ### ##:")
console.log("##.... ##: ##:::: ##: ##::::::: ##...::::::: ##::::: ##:: ##. #: ##:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ##:.:: ##:")
console.log("########::. #######:: ########: ########:::: ##::::'####: ##:::: ##:")
console.log("........::::.......:::........::........:::::..:::::....::..:::::..::")

//entrada
nome = "Luiz Henrique"
disciplina = "Português"
prova1 = 7
prova2 = 5
trabalho = 7
redacao = 9

//processamento
media = (prova1 + prova2 + trabalho + redacao) / 4

//saída
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`prova 1: ${prova1}`)
console.log(`prova 2: ${prova2}`)
console.log(`trabalho: ${trabalho}`)
console.log(`redacao: ${redacao}`)
console.log(`média final: ${media}`)
