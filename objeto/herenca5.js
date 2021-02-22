console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//split('') -> função para separar cada letra da string. Ex.: A D R I A N O
//reverse() -> função para inverter o conteudo de trás para frente e frente para trás.
//join('') -> função para juntar as palavras.

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Adriano Araújo'.reverse())

Array.prototype.first = function(){ //first -> função criada para pegar um elemento do array
    return this[0] //this acessa array. [0], [1], [2], [...] está informando qual elemento irá pegar dentro da array.s
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())
