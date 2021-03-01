/* Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15 */

function menorNumero( dados ) {
    let menor = dados[0]

    for( let i = 0; i < dados.length; i++){

        if( dados[i] < menor ){
            menor = dados[i]
        }
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))

//Outra aternativa

function menor( dados ){
    return Math.min(...dados)
}

console.log(menor([5, -15, 50, 3]))

//Alternativa com reduce()

function menor2 ( dados ){
    return dados.reduce((anterior, atual) => anterior < atual ? anterior : atual)
}

console.log(menor2([5, -15, 50, 3]))