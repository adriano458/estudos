const escola = "Cod3r"

console.log(escola.charAt(4))// Informa o 4 caracter da palavra.
console.log(escola.charAt(5))// Não irá informar nada, pós não temos 5 caracteres.
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))//faz a busca para saber se possuir na string o número 3.

console.log(escola.substring(1))//Retira a primeira palavra da string.
console.log(escola.substring(0,3))//Vai do index 0 até o 3 letra. deixando o restante fora.

console.log('Escola '.concat(escola).concat("!"))//Forma de contatenar(juntar) palavras.
console.log(escola.replace(3, 'e'))//Substuir a palavra que deseja, neste caso o número 3 para letra e.

console.log('Ana,Maria,Pedro'.split(','))//função .split realizar a separação das palavras pela a minha separação a virgula. Onde irá realizar o array.

