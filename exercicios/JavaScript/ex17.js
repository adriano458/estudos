/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60 */

function somarNumeros( dados ){
    let soma = 0
    dados.forEach(dados => soma += dados)

    return soma
}

console.log(somarNumeros([10, 10, 10]))