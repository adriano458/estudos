/* 29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no
* intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo,
* escrevendo estas informações. */

let numeros = [5, 6, 9, 10, 12, 15, 18, 19, 20, 25, 28, 39, 30]

function analise ( vetor ) {
    let dentro = 0
    let fora = 0

    for ( let i = 0; i < vetor.length; i++ ){
        if ( vetor[i] >= 10 && vetor[i] <= 20 ){
            dentro++
        } else {
            fora++
        }
    }

    return console.log(`Entre 10 e 20: ${dentro} e não: ${fora}`)

}

analise(numeros)