// Object.preventExtensions - Irá impedir de acrescentar ou expandir novos atributos do objeto, mas pode excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Objct.seal - selar, não consegue adicionar e excluir, mas pode modificar ou alterar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes, não consegue alterar, incluir ou deletar
