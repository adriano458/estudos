/* 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia.
* Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 

* Domingo = 1 - 8 - 15 - 22 - 29
* segunda = 2 - 9 - 16 - 23 - 30
* terça = 3 - 17 - 24 - 31
* Quarta = 4 - 18 - 25
* Quinta = 5 - 19 - 26
* Sexta = 6 - 20 - 27
* Sábado = 7 - 21 - 28
*/

function ex13( dia ) {
    switch (Math.floor(dia)) {
        case 1: case 8: case 15: case 22: case 29:
            return console.log(`${dia} - Domingo`)
            break
        
        case 2: case 9: case 16: case 23: case 30:
            return console.log(`${dia} - Segunda`)
            break

        case 3: case 10: case 17: case 24: case 31:
            return console.log(`${dia} - Terça`)
            break

        case 4: case 11: case 18: case 25:
            return console.log(`${dia} - Quarta`)
            break

        case 5: case 12: case 19: case 26:
            return console.log(`${dia} - Quinta`)
            break
        
        case 6: case 13: case 20: case 27:
            return console.log(`${dia} - Sexta`)
            break

        case 7: case 14: case 21: case 28:
            return console.log(`${dia} - Sábado`)
            break
        default:
            return console.log('Data inválida!')
    }
}

ex13(4)