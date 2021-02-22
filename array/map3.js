Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [ //Json
    '{ "nome": "Borracha", "Preco": 3.45 }',
    '{ "nome": "Carderno", "Preco": 13.90 }',
    '{ "nome": "Kit de Lpais", "Preco": 41.22 }',
    '{ "nome": "Caneta", "Preco": 7.50 }'
]

// DESAFIO: Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json) // Converte JSON para Objeto
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)