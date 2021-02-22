/* 18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch.
* Crie um case default que escreva ‘Número fora do intervalo.’ */

function extenso ( num1 ) {
    switch ( num1 ){
        case 0: return console.log('Zero'); break

        case 1: return console.log('Um'); break

        case 2: return console.log('Dois'); break

        case 3: return console.log('Três'); break

        case 4: return console.log('Quatro'); break

        case 5: return console.log('Cinco'); break

        case 6: return console.log('Seis'); break

        case 7: return console.log('Sete'); break

        case 8: return console.log('Oito'); break

        case 9: return console.log('Nove'); break

        case 10: return console.log('Dez'); break

        default: return console.log('Número incorreto!'); break
    }
}

extenso(10)