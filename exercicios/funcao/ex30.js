/* 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

let numeros = [1, 3, 4, 10]

function menorEMaior ( vetor ) {
    let menor
    let maior

    for ( let i = 0; i <= vetor.length; i++ ) {
        if ( menor === undefined && maior === undefined){
            menor = vetor[i]
            maior = vetor[i]
        } else {
            if ( menor < vetor[i] ){
                menor = vetor[i]
            } if( maior > vetor[i] ){
                maior = vetor[i]
                }
            }
    }

    return console.log(`Menor n°: ${menor} e o maior n° ${maior}`)
}

menorEMaior(numeros)