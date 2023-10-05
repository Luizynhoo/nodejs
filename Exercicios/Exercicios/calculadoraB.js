/**
 * Estudo das funções
 * Calculadora
 */

const read = require('readline-sync')
const color = require('colors')

console.clear()
// \n = quebra de linha 
console.log("Calculadora\n".red)

console.log("1. Somar".gray)
console.log("2. Subtrair".gray)
console.log("3. Multiplicar".gray)
console.log("4. Dividir".gray)
console.log("5. Porcentagem".gray)

let opcao = Number(read.question("digite a opcao desejada:  ").replace(",", "."))
//melhorando a experiência do usúario (validação)
if (opcao < 1 || opcao > 5) {
    console.log("opcao invalida")
    process.exit([0]) //encerra o aplicativo no console
}
console.clear()
let num1 = Number(read.question("Digite o primeiro valor:  ".blue).replace(",", "."))
let num2 = Number(read.question("Digite o segundo valor:  ".blue).replace(",", "."))


switch (opcao) {
    case 1:
        // executar a função somar()
        somar(num1, num2)
        break
    case 2:
        // executar a função somar()
        subtrair(num1, num2)
        break
    case 3:
        // executar a função somar()
        multiplicar(num1, num2)
        break
    case 4:
        // executar a função somar()
        dividir(num1, num2)
        break
    case 5:
        // executar a função somar()
        porcentagem(num1, num2)
        break
}

// função somar
// Observação funções não atríbudas a variáveis podem ser declaradas no fim do código, funções atribuídas e arrow function precisam ser declaradas no início do código
function somar(num1, num2) {
    return console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`)
}
function subtrair(num1, num2) {
    return console.log(`A subtração de ${num1} - ${num2} = ${num1 - num2}`)
}
function multiplicar(num1, num2) {
    return console.log(`A multiplicacao de ${num1} * ${num2} = ${num1 * num2}`)
}
function dividir(num1, num2) {
    if ( num2 == 0) {
        return console.log("Nao e possível dividir por zero")
    }else {
        return console.log(`A divisao de ${num1} / ${num2} = ${num1 / num2}`)
    }

}
function porcentagem(num1, num2) {
    return console.log(`A porcetagem de ${num1} % ${num2} = ${num1 * num2/100}`)
}