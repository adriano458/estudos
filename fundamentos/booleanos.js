let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)//Para saber se o número 1 é true ou false, temos que utilização o simbolo de negativação "!!", dessa forma o JavaScript irá interpretar.
/* Colocando apenas ! ou !!
* Apenas "!" ele irá colocar ao contrário. Ex "!true" --> false | "!false" --> true
* Apenas "!!" ele indicar a confirmação. Ex "!!true" --> true | "!!false" --> false */
console.log(!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falso')
console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo == false))

console.log('Para finalizar...')
// || --> significa ou
console.log(!!('' || null || 0 || ' '))//Irá procurar e encontrar o falso nas condições.

let nome = ''
console.log(nome || 'Desconhecido')//Caso a variável nome não tenha informação, ele irá informar "Desconhecido".
