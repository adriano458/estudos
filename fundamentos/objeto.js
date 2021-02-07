const prod1 = {}
prod1.nome = 'Celuar Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

'{"nome": "Camisa Pelo", "Preço": 79,90}' //JSON não é a mesma coisa que um objeto, é um formato textual.

console.log(prod2)