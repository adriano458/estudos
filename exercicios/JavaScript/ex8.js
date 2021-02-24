/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles.
* Porém, não utilize o operador de mutiplicação. Exemplo:
* multiplicar(5, 5) // retornará 25 multiplicar(0, 7) // retornará 0 */

function multiplicar ( num1, num2 ) {
    let contador = 0
    if( num1 >= 0 && num2 >= 0 ){
        for ( let i = 0; i < num2; i++ ){
           contador += num1
        }
    }
    return contador
}

console.log(multiplicar( 2, 2))