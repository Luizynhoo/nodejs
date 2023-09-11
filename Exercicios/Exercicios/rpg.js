/**
 * LISTA NEGRA - RPG
 */

const read = require('readline-sync')
const colors = require('colors')

let situacao , st2 , st3 , st4 , st5 , st6

console.clear()
console.log("BEM VINDOS ao RPG Lista Negra".italic.bgBlack)
console.log()
console.log("Seu nome é Elizabeth Keen, o criminoso mais procurado do mundo decide se entregar misteriosamente ao FBI oferecendo uma lista de importantes nomes da comunidade do crime, mas só se trabalhar com vc. ".magenta)

read.question("clique [ENTER] para continuar")

console.clear()
console.log("FBI concordou com as exigências do criminoso e agora vc faz parte de uma força tarefa. ".magenta)

read.question("clique [ENTER] para continuar")

console.clear()
console.log("Vc se senta na frente do criminoso Raymond Reddington e tem uma conversa e misteriosamente ele conta coisas que passaram na sua vida.".magenta) 

read.question("clique [ENTER] para continuar")

console.clear()
console.log("Raymond conta que em 1 hora Ranko Zamani [Número 15 da lista negra] irá sequestrar a filha do general Daniel Ryker ".magenta)
console.log("1. Confiar no que ele fala".italic)
console.log("2. Ignorar".italic)

situacao = Number(read.question("Escolha o que vc ira fazer:	".magenta))

console.clear()
if (situacao == 1) {
	console.log("Confiou ! Vc buscou a filha do general e está levando para um local seguro ".magenta)
	console.log()
} else {
	console.log("Vc ignorou a filha do general foi levada e Ranko Zamani fugiu ".magenta)
	console.log("REINICIE A HISTORIA".red)
	console.log("---------------------------------------------------------------")
}
 
console.log ("Vcs tiveram que parar em uma ponte, pois ouve um derramamento químico na pista. ".magenta)
console.log("Esperando.....".italic.gray)
console.log("....".gray)
console.log("..".gray)
console.log("Um caminhão com muita velocidade bate no seu carro e começa um tiroteio".magenta)
console.log("Seu carro capotou e os bandidos estão indo em sua direção o que fazer ?".magenta)
console.log()
console.log("1. Pegar a arma e defender vc e a filha".italic)
console.log("2. Fugir sozinha".italic) 
console.log("3. Entregar a filha ".italic)

st2 = Number(read.question("Escolha o que vc ira fazer:	".magenta))

console.clear()
if (st2 == 1) {
	console.log("vc e a filha morreram o carro explodiu ".magenta)
	console.log("REINICIE A HISTORIA".red)
} if (st2 == 2) {
	console.log("vc deixou a filha e ela morreu inalando a fumaça do carro [nao cumpriu com o objetivo] ".magenta)
	console.log("REINICIE A HISTORIA".red)
	console.log("---------------------------------------------------------------")
} else {
	console.log("vc entregou a filha e conseguiu se salvar agora vc tem uma nova chance de encontra-la ".magenta)
	console.log("continue".green)
	console.log("---------------------------------------------------------------")
}

console.log("Vc e os Agentes voltam para a base e com ajuda de Raymond encontram uma nova pista, descobrem que Zamani só quer se vingar do general que matou a família dele.".magenta)
read.question("clique [ENTER] para continuar")

console.clear()
console.log("Vc voltou para casa para descansar e lá encontra seu marido amarrado, Zamani estava apontando a arma para o seu marido. Ele pergunta o que vc sabe do plano dele. ".magenta)
console.log("1. entregar tudo que vc sabe".italic) 
console.log("2. deixar seu marido morrer".italic)

st3 = Number(read.question("Escolha o que vc ira fazer:	".magenta))

console.clear()
if (st3 == 1) {
	console.log("vc contou sobre a bomba e Zamani foge da sua casa, mas seu marido esta muuito ferido, o que fazer ? ".magenta)
	console.log("1. levar o seu marido para o medico".italic)
	console.log("2. Correr atras de Zamani".italic)
	st4 = Number(read.question("Escolha o que vc ira fazer:	".magenta))
if (st4 == 1) {
	console.log ("deu tudo certo".green)
} else {
	console.log("seu marido morreu e vc ficou com uma depressao profunda e não trabalhou mais".red)
	console.log("REINICIE A HISTORIA".red)
	console.log("---------------------------------------------------------------")
}
} else {
	console.log("seu marido morreu e vc ficou com uma depressao profunda e não trabalhou mais".red)
	console.log("REINICIE A HISTORIA".red)
	console.log("---------------------------------------------------------------")
}

console.log("Em outro dia com muita raiva vc vai cobrar Raymond mas quando vc entra na sala dele percebe que ele fugiu, vc tenta encontrar ele mas não consegue. ".magenta)
console.clear()
console.log("Número desconhecido está te ligando".magenta)
read.question("clique [ENTER] para atender") 

console.clear()
console.log("Raymond: Tenho uma pista de onde está a filha e Zamani.".gray)
console.log("A filha está em um parque com uma bomba em seu corpo e Zamani no terraço de um prédio ".magenta)
console.log("1. Ir até Zamani".italic)
console.log("2. Salvar a filha".italic)
st5 = Number(read.question("Pra onde vc vai ?".magenta))

console.clear()
if (st5 == 1) {
	console.log("Vc foi até Zamani e matou ele porém a filha do general morreu e matou muitos civis por conta da bomba".red)
	console.log("REINICIE A HISTORIA".red)
} else {
	console.log("Prenderam Zamani e agora vc está com a filha a bomba irá explodir em 5 segundos, tem 3 fios ".magenta)
	console.log("1. fio verde".green)
	console.log("2. fio amarelo".yellow)
	console.log("3. fio vermelho".red)
	st6 = Number(read.question("QUAL FIO CORTAR ????".magenta))
	console.log("---------------------------------------------------------------")
}
console.clear()
if (st6 == 1 && st6 == 3) {
	console.log("BUUUUUMMMMMMMMMMMMMM!!!!!!!".red)
	console.log("Explodiu, volte desde o comeco".red)
} else {
	console.log("Vc conseguiu salvou todoos".green)
	console.log("PARABENS VC COMPLETOU A HISTORIA !!!!!".green)
}
