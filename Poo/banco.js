/**
 * Exercício de fixação - POO
 */
const read = require('readline-sync')
const color = require('colors')

//classe modelo
class Conta {
    //Atributos
    constructor (numero, titular, saldo) {
        this.titular = titular
        this.saldo = saldo
        this.numero = numero
    }
//ações
exibirSaldo() {
    console.log(`O saldo da conta do ${this.titular} é R$ ${this.saldo.toFixed(2)}.`)
}
exibirSaldoP1() {
    console.log(`O saldo da conta Poupanca do ${this.titular} é R$ ${this.saldo.toFixed(2)}.`)
}
depositar(valor) {
    this.saldo += valor
    console.log(`Crédito de R$ ${valor.toFixed(2)}`)
}
sacar(valor) {
    if (valor <= this.saldo){
        this.saldo -= valor
        console.log(`Débito de R$ ${valor.toFixed(2)}`)
    } else {
        console.log("Operação negada! Saldo insuficiente")
    }
    
}
}

/**cliente**/
console.clear()
console.log("██████   █████  ███    ██  ██████  ██████  ")
console.log("██   ██ ██   ██ ████   ██ ██      ██    ██ ")
console.log("██████  ███████ ██ ██  ██ ██      ██    ██ ")
console.log("██   ██ ██   ██ ██  ██ ██ ██      ██    ██ ")
console.log("██████  ██   ██ ██   ████  ██████  ██████  ")

//criação
let cc1 = new Conta(1, "Leandro Ramos", 2800)
console.log(`Cliente: ${cc1.titular} | conta: ${cc1.numero}`.green)
cc1.exibirSaldo()
cc1.depositar(2000)
cc1.exibirSaldo()
cc1.sacar(20)
cc1.exibirSaldo()
console.log()
let p1 = new Conta(10,"Leandro Ramos", 500000)
console.log(`Cliente: ${p1.titular} | conta: ${p1.numero}`.yellow)
p1.exibirSaldoP1()