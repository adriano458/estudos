/* 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o
* primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união
* concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão
* aparecer no console. */

let vetorInteiro = [1, 3, 4, 5]
let vetorString = ["Adriano", "Susana", "Benjamin"]
let vetorDouble = [1.3, 3.4, 2.5]

function concatenar ( vetor1, vetor2, vetor3 ){
    let uniao = vetorInteiro.concat(vetorString, vetorDouble)

    return console.log(uniao)
}

concatenar(vetorInteiro, vetorString, vetorDouble)