/**
 * Estruturas de dados 
 * Objetos
 */

const funcionario1 = {}
console.log(typeof(funcionario1))

//adicionar dados a estrutura
funcionario1.nome = "Jose"
funcionario1.cargo = "professor"
funcionario1.email = "josedeassis@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.assis"

console.log(funcionario1)
console.log(funcionario1.cargo)

//excluir dados de uma estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO",
    email: "batman@email.com",
    salario: 40000000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@email.com",
    salario: 200000,
    ...endereco1 //(...) spread  operator para adicionar todos os atributos do objeto endereço em cima da chave de funcionário
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@email.com",
    salario: 10000,
    ...endereco1 //(...) spread  operator para adicionar todos os atributos do objeto endereço em cima da chave de funcionário
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Homem de Ferro",
    email: "ironmen@email.com",
    salario: 3750000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUP: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.armadura.versao)
funcionario5.suitUP()