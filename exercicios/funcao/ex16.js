/* 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois
valores numéricos e uma string referente à operação e a realize com os valores */

function calculadora ( operacao, num1, num2 ){

    let resultado = 0
    switch ( operacao ){
        case '+':
            resultado = num1 + num2
            return console.log(resultado)
            break
        
        case '-':
            resultado = num1 - num2
            return console.log(resultado)
            break

        case '*':
            resultado = num1 * num2
            return console.log(resultado)
            break

        case '/':
            resultado = num1 / num2
            return console.log(resultado)
            break

        default:
            console.log('Erro!')
    }

}

calculadora('/', 10, 5)
calculadora('-', 10, 5)
calculadora('+', 10, 5)
calculadora('*', 10, 5)