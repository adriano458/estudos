/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */

function ex4 ( a, b ) {
    let resultado = a / b
    let resto = a % b

    return `Resultado: ${resultado} e o resto ${resto}`
}

console.log(ex4(10, 2))