/* 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function imparEPar (vetor){
    let impar = 0
    let par = 0
    
    for ( let i = 1; i <= vetor.length; i++ ){
        if ( vetor[i] % 2 == 0 ){
            par += 1
        } else {
            impar++
        }
    }

    console.log(`N° impares: ${impar} e n° pares: ${par}`)
}

vet = [2, 5 , 6, 36, 74, 46, 5, 64]
imparEPar(vet)