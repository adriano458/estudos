/* 12)​ Faça um algoritmo que calcule o fatorial de um número. 
* ex: 3! = 3 * 2 * 1 = 6 */

function ex12 ( fatorial ) {
    let resultado = 1
    let count = 1

    while ( count <= fatorial){
        resultado *= count
        count++
    }

    return resultado
}

console.log(ex12(4))