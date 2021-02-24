/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"  na quantidade especificada no parâmetro.
* Exemplos:
* simboloMais(2) // retornará "++" simboloMais(4) // retornará "++++" */

function simboloMais( num ) {
    let resultado = '' 
 
    for(let i = 0; i < num; i++) {
        resultado += '+' 
    }
   
    console.log(resultado )

    console.log(Array(num).fill('+').join(''))
}

console.log(simboloMais(3))