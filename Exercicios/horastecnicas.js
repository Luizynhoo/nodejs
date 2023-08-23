const read = require('readline-sync')
console.clear()

let reserva, remuneracao, custo, investimento, horasTec

console.clear()
console.log("---------------------------")
console.log("Bem Vindo ao Calculador da sua hora de servico")
console.log("=====Trabalha e Trabalha=====")
console.log("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░░▒▒▒▒░░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒░▒▒▒▒▒▒░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒░░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░░░░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░░░▓▓")
console.log("▓▓░░░░░░░░HORAS PAGAS░░░░░░░░░░░░░░░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░▒▒▒░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░░░░▓▓")
console.log("▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒░░░░░░▓▓")
console.log("▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓")
console.log("_______▒__________▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
console.log("______▒_______________▒▒▒▒▒▒▒▒")
console.log("_____▒________________▒▒▒▒▒▒▒▒")
console.log("____▒___________▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒")
console.log("___▒")
console.log("__▒______▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓")
console.log("_▒______▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓")
console.log("▒▒▒▒___▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓")
console.log("▒▒▒▒__▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓▒▓")
console.log("▒▒▒__▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓")


//
reserva = Number(read.question("Digite o valor da reserva: ").replace(",","."))

remuneracao = Number(read.question("Digite a remuneracao mensal pretendida: ").replace(",","."))

custo = Number(read.question("Digite o custo operacional: ").replace(",","."))

investimento = Number(read.question("Digite o Investimento: ").replace(",","."))

horasTec = Number(read.question("Digite a horas trabalhadas por mes: "))

horasTec = (remuneracao+(remuneracao*reserva)/100+custo+(investimento*remuneracao)/100)/horasTec

console.log
console.clear()
console.log("_________________________________")
console.log("======Horas tecnicas======")
console.log(horasTec)
console.log("_________________________________")
