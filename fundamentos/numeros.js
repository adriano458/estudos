const peso1 = 1.0 // Variável constante, onde não mudará o valor, sempre será o mesmo.
const peso2 = Number('2.1')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//Verificar se a constante é o valor inteiro ou não. Para o Javascript o valor com 1.0, 1.21 ele não descreve como ponto flutuante.
console.log(Number.isInteger(peso2))//Informa que é falso, pós não é um inteiro. E fracionado.

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //.toFixed(2) ele é utilizado para arrendondar os valores fracionados. (2) e quantidade de casas.
console.log(media.toString(2)) //Converte a variável numerica para string (em binário).
console.log(typeof media) //Essa função verificar o tipo da variável.