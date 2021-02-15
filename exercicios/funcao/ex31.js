/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a
* quantidade no console. */

let numeros = [1, 3, -4, 6, -20, 50, -30]

function analise ( vetor ) {
    let contador = 0

    for ( let i = 0; i < vetor.length; i++ ){
        if ( vetor[i] < 0 ){
            contador++
        }
    }
    return console.log(`Qtd de negativos dentro do vetor: ${contador}.`)
}

analise(numeros)