/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de
* vezes que haverá repetição. Um array será retornado. Exemplos:
* repetir("código", 2) // retornará ["código", "código"] repetir(7, 3) // retornará [7, 7, 7] */

function repeticao ( dados1, dados2 ) {
    let coletor = []
    
    /*for ( let i = 0; i < dados2; i++ ) {
        coletor[i] = dados1
    }*/
    for( let i = 0; i < dados2; i++ ){
        coletor.push(dados1)
    }
    return coletor
}

console.log(repeticao('Adriano', 3))
console.log(repeticao(2, 4))
