/**
 * Estudo  das funções
 * Funções simples sem parâmetros ou retorno
 */

// Sintaxe comum
function somar(num1, num2) {
    return (console.log(num1 + num2))
}

// Para executar a função devemos passar dois valores
somar(2, 5)

// Função atribuída
let somarA = function somar(num1, num2) {
    return (console.log(num1 + num2))
}

somarA(5, 5)

// Arrow fuction
let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(18, 7)