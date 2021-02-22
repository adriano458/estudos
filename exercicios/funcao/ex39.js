/* 39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a
* ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar. */

function troca ( vetorA, vetorB ){
    if ( vetorA.length == vetorB.length){
        for ( let i = 0; i < vetorA.length; i++ ){
            vetorA[i] = vetorA[i] + vetorB[i]      //12 = 10 + 2
            vetorB[i] = vetorA[i] - vetorB[i]      //10 = 12 - 2
            vetorA[i] = vetorA[i] - vetorB[i]      //2 = 12 - 10
        } 
    } else { 
        return console.log('Vetores não tem a mesma quantidade!')
    }

    console.log(`Vetor de A: ${vetorA}`)
    console.log(`vetor de B: ${vetorB}`)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

troca(vetorA, vetorB)