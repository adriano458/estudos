/* 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100. */

function pares(){
    let number = 0

    for(i = 1; i <= 100; i++){
        i % 2 == 0 ? console.log(`${i}, n° par`) : ''
    }
}

pares()