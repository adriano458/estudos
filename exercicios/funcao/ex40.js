/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja
* atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

function conceitos ( vetor ){
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 0 && vetor[i] <= 4.9){
            return console.log(`${vetor[i]} - D`)
        }else if ( vetor[i] >= 5 && vetor[i] <= 6.9){
            return console.log(`${vetor[i]} - C`)
        }else if ( vetor[i] >= 7 && vetor[i] <= 8.9){
            return console.log(`${vetor[i]} - B`)
        }else if ( vetor[i] >= 9 && vetor[i] <= 10 ){
            return console.log(`${vetor[i]} - A`)
        }else{
            return console.log(`${vetor[i]} - Número inválido!`)
        }
    }
}

let vetor = [9, 5.8, 8.8, 10, 15]

conceitos(vetor)