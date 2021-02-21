const carrinho = [ //Json
    '{ "nome": "Borracha", "Preco": 3.45 }',
    '{ "nome": "Carderno", "Preco": 13.90 }',
    '{ "nome": "Kit de Lpais", "Preco": 41.22 }',
    '{ "nome": "Caneta", "Preco": 7.50 }'
]

// DESAFIO: Retornar um Array apenas com os preços

const paraObjeto = json => JSON.parse(json) // Converte JSON para Objeto
const apenasPreco = produto => produto.Preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)