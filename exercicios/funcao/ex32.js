/* 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

let numeros = [2, 4, 5, 8, 10, 24, 50]

function media ( vetor ) {
    let soma = 0

    for ( let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }

    let media = soma / vetor.length

    console.log(`Media do vetor: ${media.toFixed(2)}`)
}

media(numeros)