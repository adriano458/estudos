/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
codigo: 11111,
preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]] */

function objetoRetornoArray ( dados ) {
    const chaves = Object.keys(dados)
    const novo = chaves.map( chaves => [chaves, dados[chaves]] )

    return novo
}

console.log(objetoRetornoArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))

console.log(objetoRetornoArray({
    codigo: 11111,
    preco: 12000
    }))