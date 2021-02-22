/* 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números ímpares que estão entre
* esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função
* receba o valor maior antes do menor. */

function imparEpar (inicio = 0, fim = 100 ){
    //Corrigir. Iremos trocar os valores da variável, passado do fim para o inicio.
    if ( inicio > fim ){            //10 - 3
        inicio = fim + inicio       //13 = 3 + 10
        fim = inicio - fim          //10 = 13 - 3
        inicio = inicio - fim       //13 = 13 - 10

    }

    // %(modular) que apresentar 1, irá imprimir os números ímpares
    for ( let i = inicio; i <= fim; i++ ){
        if ( i % 2 == 1 ){
            console.log(i)
        }
    }
}
imparEpar(10, 3)