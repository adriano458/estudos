/* 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o
* peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem
* "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja
* negativo. */

function escola ( cod, nota1, nota2, nota3 ){
    let notas = []
    notas.push(nota1) // metodo push é utilizado para acrescentar no array os valores/dados. Neste caso na variável notas estamos incluindo
    notas.push(nota2) //  o que foi passado pelo o paramentro pelo o usuário.
    notas.push(nota3)

    notas.sort ( (a, b) => a < b ? 1 : -1 ) // .sort () é uma função de ordenação.
    //"(a, b) =>" é a função abreviada conhecida como Arrow. 
    // "a < b ? 1 : - 1 -> e condição ? codição1 (se) : condição2 (else)" conhecida como if ternário.

    media = ( notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10

    return console.log(`Código do aluno: ${cod}. Suas notas: ${notas[0]}, ${notas[1]}, ${notas[2]}. Media: ${media}. Situação: 
    ${media < 5 ? 'Reprovado' : 'Aprovado'}`)
}

escola(10, 8, 5, 9)