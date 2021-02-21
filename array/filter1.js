const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4199, fragil: true },
    { nome: 'Corpo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Corpo de Plástico', preco: 18.99, fragil: false }
]

console.log(produto.filter(function(p){
    //return false -> Nenhum elemento passa.
    //return true -> Todos elementos passam.
    return p.preco >= 500 && p.fragil == true
}))

// Revisão do proferssor
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))