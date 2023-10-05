/**
 * Estudo  das funções
 * Funções simples sem parâmetros ou retorno
 */

//função simples
function hello() {
    console.log("hello function")
}

//para executar uma função basta escrever o nome da função com parênteses 
hello()

//funções atribuídas
const hello2 = function() {
    console.log("hello function atribuida")

}

hello2()

//função atribuída simplificada (arrow function)
const hello3 = () => {
    console.log("hello arrow function")

}

hello3()

console.log (typeof(hello3))