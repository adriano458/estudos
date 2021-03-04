console.log(module.exports === this) //Irá expor as variaveis para fora do arquivo
console.log(module.exports === exports) //Também

this.a = 1 //Dessa forma estamos exportando a variável a
exports.b = 2 // também a variavel b
module.exports.c = 3

exports = null
console.log(module.exports)

//não deve fazer dessa forma
exports = {
    nome: 'Teste'
}

console.log(module.exports)

//correto
module.exports = { publico: true }