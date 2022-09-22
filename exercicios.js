// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


//Exercícios vídeos de REVISÃO

//1º - VARIÁVEIS

// const nomeDoProduto = prompt ("Insira o nome do produto");
// let precoDoProduto = +prompt ("Insira o preço do produto");
// precoDoProduto = precoDoProduto - 1

// console.log(`O produto ${nomeDoProduto} custa: R$ ${precoDoProduto}.`);

//2º OPERADORES ARITIMÉTICOS (+ - * /)

// const numUsuario1 = +prompt("Insira um número aqui:")
// const numUsuario2 = Number(prompt("Insira um segundo número aqui:"))

// console.log(`Os números inseridos foram: ${numUsuario1} e ${numUsuario2}.`)

// console.log(`A soma do número ${numUsuario1} e ${numUsuario2} é = ${numUsuario1+numUsuario2}`)

// console.log(`A subtração do número ${numUsuario1} e ${numUsuario2} é = ${numUsuario1-numUsuario2}`)

// console.log(`A multiplicação do número ${numUsuario1} e ${numUsuario2} é = ${numUsuario1*numUsuario2}`)

// console.log(`A divisão do número ${numUsuario1} e ${numUsuario2} é = ${numUsuario1/numUsuario2}`)

// console.log(`O resto da divisão entre o número ${numUsuario1} e ${numUsuario2} é = ${numUsuario1%numUsuario2}`)


//3º COMPARADORES (=== < >)

// const numSorteado = 4 
//OU
// const numSorteado = Math.floor(Math.random()*10) +1 //PEDIR EXPLICAÇÃO EM AULA
// const numRecebido = +prompt("Insira um número de 1 a 10.")

// console.log(`O número sorteado foi: ${numSorteado}`)
// if (numRecebido === numSorteado){
//     console.log("Você venceu")
// } else if (numRecebido > numSorteado) {
//     alert("Que pena, não foi dessa vez, seu número é maior que o número sorteado. Tente novamente!")
// } else {
//     alert("Que pena, não foi dessa vez, seu número é menor que o número sorteado. Tente novamente!")
// }

//4º OPERADORES LÓGICOS (&& || !)-- comparam booleanos 

// const idadeUsuario = +prompt("Insira sua idade:")
// const alturaUsuario = +prompt("Insira sua altura em centímetros: \nExempo: 170")
// const saudeUsuario = prompt("Possui alguma condição cardíaca? \nS \nN")

// console.log(`O(A) usuário(a) tem ${idadeUsuario} anos, ${alturaUsuario}cm de altura e ${saudeUsuario.toUpperCase()} possui condição cardíaca.`) //PQ O TUUPPERCASE NÃO FUNFA?

// if (idadeUsuario >= 18 && alturaUsuario >= 160 && saudeUsuario === "N"){
//     console.log("Uhuul, pode entrar e se divertir")
// } else {
//     alert("Sinto muito, esse brinquedo pode prejudicar a sua saúde, escolha outra atração e divirta-se!")
// }


//5º STRINGS (toUpperCase() toLowerCase() trim() replaceAll())

const frase = " Hoje vou comer cenoura, ebaaa "

// console.log(`A quantidade de caractéres da frase "${frase}" é: ${frase.length}.`)

// console.log(`Usandro TRIM na frase "${frase}" ela fica assim: "${frase.trim()}". Sua quantidade agora é: ${frase.length}.`)

// console.log(`Usandro toUpperCase na frase "${frase}" ela fica assim: "${frase.toUpperCase()}".`)

// console.log(`Usandro toLowerCase na frase "${frase}" ela fica assim: "${frase.toLowerCase()}".`)

// console.log(`Na frase "${frase}" tem a palavra "comer"? "${frase.includes("comer")}".`)

// console.log(`Na frase "${frase}" tem a palavra "batata"? "${frase.includes("batata")}".`)

// // console.log(`Na frase "${frase}" substitua a palavra "cenoura" por "batata": "${frase.replace("cenoura", "batata")}".`) // Se eu SUBSTITUIR APENAS no console, NÃO salva a resposta. É NECESSÁRIO criar nova VARIÁVEL

// const novaFrase = frase.replace("cenoura", "batata")

// console.log(`Na frase "${novaFrase}" tem a palavra "comer"? "${novaFrase.includes("comer")}".`)

// console.log(`Na frase "${novaFrase}" tem a palavra "batata"? "${novaFrase.includes("batata")}".`)


//6º ARRAYS

// const listaDeCompras = ["batata", "cenoura", "beterraba"]

// console.log(`Lista de compras = ${listaDeCompras[1]}`)

// console.log(`O tamanho da lista de compras é = ${listaDeCompras.length}`)

// listaDeCompras.push("mandioca")

// console.log(listaDeCompras)

// console.log("Na lista de compras tem cenoura?", listaDeCompras.includes("cenoura"))

// listaDeCompras.splice(1,1)

// console.log(listaDeCompras)


//7º FUNÇÕES (Declarar função, parâmetros e argumentos)

/*Exemplo:

function calculaArea (altura, largura){
    const area = altura * largura)
    console.log(area)
}

calculaArea(2,3) 

// RETURN

function calculaArea (altura, largura){
    const area = altura * largura)
    return area // RETORNO DA FUNÇÃO
}

//ATRIBUI RETORNO À UMA VARIÁVEL
const areaCalculada = calculaArea(2,3)

//IMPRIME RETORNO NO CONSOLE
console.log(calculaArea(2,3))*/

// const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function divideDois1(arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const segundo = arrayDeNumeros[arrayNum.length - 1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length - 1] = segundo

//     return arrayDeNumeros
// }

// console.log(divideDois1(arrayNum)) //COMO IMPRIMIR APENAS OS NÚMEROS SELECIONADOS?


// let divideDois2 = function (arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const segundo = arrayDeNumeros[arrayNum.length - 1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length - 1] = segundo

//     return arrayDeNumeros
// }

// console.log(divideDois2(arrayNum))


// let divideDois3 = (arrayDeNumeros) => {
//     const primeiro = arrayDeNumeros[0] / 2
//     const segundo = arrayDeNumeros[arrayNum.length - 1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros[arrayDeNumeros.length - 1] = segundo

//     return arrayDeNumeros
// }

// console.log(divideDois3(arrayNum))


//8º - OBJETOS

/*EXEMPLO
const instrutora = {
    nome: "Amanda Rangel",
    idade: 27,
    email: "mandinha_rock@gmail.com"
}

    const nomeDaInstrutora = instrutora.nome
    console.log(nomeDaInstrutora)*/


// const perfil = {
//     nome: "Chayenne",
//     idade: 33,
//     generoMusical: "R&B"
// }

// console.log(`O nome da pessoa é ${perfil.nome}, ela tem ${perfil.idade} anos e gosta muito de ${perfil.generoMusical}.`)

// const novoPerfil = {
//     ... perfil,
//     nome: "Mayara"
// }

// console.log(`O nome da pessoa é ${novoPerfil.nome}, ela tem ${novoPerfil.idade} anos e gosta muito de ${novoPerfil.generoMusical}.`)


//9º - CONDICIONAIS ( IF / ELSE )

// SWITCH CASE É PARA IGUALDADE

// const numeroUsuario = +prompt("Insira aqui um número:")

// if (numeroUsuario % 2 === 0) {
//     console.log("O numero inserido é par.")
// }else{
//     console.log("O número inserido é ímpar.")
// }


// const especiePet = prompt("Que tipo de pet você tem?")
// const nomeDoPet = prompt("Insira aqui o nome do seu pet")

// if (especiePet === "cachorro") {
//     console.log("Au au")
// } else if (especiePet === "gato"){
//     console.log("Miau")
// }else if (especiePet === "vaca"){
//     console.log("Muuuu")
// } else {
//     console.log("Animal não encontrado.")
// }

// switch(especiePet){
//     case "cachorro":
//         console.log("Au au")
//         break;
//     case "gato":
//         console.log("Miau")
//         break;
//     case "vaca":
//             console.log("Muuu")
//             break;
//     default:
//         console.log("Barulho não encontrado")
//         break;
// }


//10º Laços (While For ForOf(For Of é SÓ para ARAYS))

const arrayDeNumeros = [11, 15, 18, 14, 12, 13, 59]


let maior = -Infinity

// let i = 0
// while (i < arrayDeNumeros.length){
//     if(arrayDeNumeros[i] > maior){
//         maior = arrayDeNumeros[i]
//     }
//     i++
// }

// console.log(`O maior número é: ${maior}`)

// for (let i=0; i<arrayDeNumeros.length; i++) {
//     if(arrayDeNumeros[i] > maior){
//         maior = arrayDeNumeros[i]
//     }
//     i++
// }

// console.log(`O maior número é: ${maior}`)

// for (let numero of arrayDeNumeros) {
//     if (numero > maior) {
//         maior = numero
//     }
// }

// console.log(`O maior número é: ${maior}`)


//Exercício 12

const prof = {
    nome: "Letícia Choji",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow knight"],
    contaPiada: () => console.log("É pavê ou é pá cumê?"),
    pet: {
        nome: "Polly",
        especie: "cachorrinha",
        raca: "Lhasa Apso",
        snacksFavoritos: ["biscoito", "maçã", "frango"]
    }
}


const verificaAula = (aula) => {
    if(aula){
        return "Dou"
    }else{
        return "Não dou"
    }
}

let aulasBack = verificaAula (prof.aulasBack)
let aulasFront = verificaAula (prof.aulasFront)

const jogos = []

for (let i = 1; i <= prof.jogosFavoritos.length; i++){
    jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
}
console.log(jogos)

const fraseProf = `Oi! me chamo ${prof.nome} e tenho ${prof.idade} anos. ${aulasFront} aula de front e ${aulasBack} aula de back.\nMeus jogos favoritos são: \n${jogos[0]} \n${jogos[1]} \n${jogos[2]} \nTenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}`

console.log(fraseProf)
prof.contaPiada()


//13º - MAP & FILTER (USADOS EM ARRAY)

const pokemons = [
    {nome: "Bulbasaur", tipo: "grama"},
    {nome: "Bellsprout", tipo: "grama"},
    {nome: "Charmander", tipo: "fogo"},
    {nome: "Vulpix", tipo: "fogo"},
    {nome: "Squirtle", tipo: "água"},
    {nome: "Psyduck", tipo: "água"}
]


//Exemplo:
// const nomeDosPokemons = pokemons.map ((pokemon, indice, array) => {
//     return pokemons.nome
// })
// console.log(nomeDosPokemons)

// const nomeDosPokemons2 = pokemons.filter ((pokemon, indice, array) => {
//     return pokemons.tipo === "fogo"
// })
// console.log(nomeDosPokemons2)


const listaProdutos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]

const produtosComDesconto = listaProdutos.map((prod) => {
    return{...prod, preco: (prod.preco*0.9).toFixed(2)}
})
console.log(produtosComDesconto)

const hortifruti = listaProdutos.filter((prod)=>{
    return prod.categoria === "Hortifruti"
})

console.log(hortifruti)

const hortifrutiComDesconto = listaProdutos.filter((prod)=>{
    return prod.categoria === "Hortifruti"
}).map((prod) => {
    return{...prod, preco: (prod.preco*0.9).toFixed(2)}
})

console.log(hortifrutiComDesconto)




// EXERCÍCIO 01
function retornaTamanhoArray(array) {

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}