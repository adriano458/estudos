let valor // Não inicializada
console.log(valor)// É undefined, pós não possuir valores ou inicializada

valor = null // ausência de valor
console.log(valor)
/*console.log(valor.toString())
*cuidado com quem vai acessar, pós string não pode acessar null. Aplicando erro.
*/

const produto={}
console.log(produto.proco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // Evite atribuir undefined.
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)