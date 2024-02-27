/**
 * Estrutura de dados
 * Array
 */

let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"]
console.log(typeof alunosEM1)

//Exibindo dados tem na array
console.log(alunosEM1.length) 
console.log(alunosEM1)
console.table(alunosEM1)  

//Adicionando dados no array
alunosEM1.push("jorge")  //adiciona o jorge ao final
console.table(alunosEM1)  
alunosEM1.unshift("Luiza") //adicona Luiza no começo
console.table(alunosEM1)  
alunosEM1.splice(4, 0, "Matheus", "Julia") //indice, 0 -> adiciona
console.table(alunosEM1) 
alunosEM1[12] = "Leandro"
console.table(alunosEM1) 

//Modificando os dados de um array
alunosEM1[1] = "Victor"
console.table(alunosEM1) 

//Excluindo dados de um array 
alunosEM1.pop() //Excluir o ultimo
console.table(alunosEM1) 
alunosEM1.shift() //Excluir o primeiro
console.table(alunosEM1) 
alunosEM1.splice(5, 1) //Indice, número de registros excluidos
console.table(alunosEM1) 
alunosEM1.splice(5, 2) //Indice, número de registros excluidos
console.table(alunosEM1) 
delete alunosEM1[3]
console.table(alunosEM1) 
"┌─────────┬──────────┐"
"│ (index) │  Values  │"
"├─────────┼──────────┤"
"│    0    │ 'Victor' │"
"│    1    │ 'Tania'  │"
"│    2    │ 'Pedro'  │"
"│    4    │ 'Julia'  │"
"│    5    │ 'jorge'  │"
"└─────────┴──────────┘"


//Percorrendo uma array
let notas = [3, 8, 5, 6, 9, 2]
console.log (notas)

//laço for
for (let i = 0; i < notas.length; i++){ //Do 0 ao Indice 5
    console.log(notas [i])
} 

//forEach
notas.forEach((n) => {
    console.log(n)
})

//map() percorrer o array e gerar outro array modificado
//Exemplo 1: somar 1 ponto nas notas
let notasAtualizadas = notas.map((na)=>{
    return na + 1 
})

console.log (notas)
console.log (notasAtualizadas)

//Exemplo 2: converter sistema de pontos para letras
// A = (nota > 8) PA (nota entre 5 e 8) NA (nota < 5)
let notasConvertidas = notas.map((nc)=>{
    if (nc < 5){
        return "NA"
    } else if (nc > 8){
        return "A"
    } else {
        return "PA"
    }
})

console.log(notasConvertidas)

//[ 3, 8, 5, 6, 9, 2 ]
//[ 4, 9, 6, 7, 10, 3 ]
//[ 'NA', 'PA', 'PA', 'PA', 'A', 'NA' ]

//Uma array também pode ser criado com um objeto
let alunosEM2 = new Array ("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome:"Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade:23,
        bolsista:true
    }
]

console.log(alunosEM3)
console.table(alunosEM3)

//Uso de filtro
//Exemplo 1: alunos bolsistas

console.table(alunosEM3.filter((b) => {
    return b.bolsista === true
}))

//Exemplo 2: alunos com mais de 40 anos
console.table(alunosEM3.filter((i) =>{
    return i.idade > 40
}))


//Exemplo 3: Calcular a média de idade 
let somaIdades = alunosEM3.reduce((si, aluno)=>{
    return si + aluno.idade
},0) 

console.log(somaIdades)

let mediaIdades =  somaIdades / alunosEM3.length
console.table(mediaIdades)

