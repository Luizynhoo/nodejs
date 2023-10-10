/**
 * POO - Estudo do encapsulamento
 */

//classe modelo
class pessoa {
    //atributos
    constructor(nome, idade) {
        this.nome = nome //variável pública
        let _idade = idade //encapsular a variável (métodos get e set para acessar variável a seguir)
        
        this.getIdade = () => {  //function ou =>
            return _idade
        }
        this.setIdade = function(novaIdade){
            _idade= novaIdade
    }
}
        //ações
        apresentar() {
            console.log(`Meu nome é ${this.nome} e tenho ${this.getIdade()} anos.`)
        }
}
//criação
console.clear()
const pessoa1 = new pessoa("Luiz", 18);
pessoa1.apresentar()
pessoa1.setIdade(20)
pessoa1.apresentar()