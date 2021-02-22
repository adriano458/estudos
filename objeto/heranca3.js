const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
    //writable -> não permite ser mudado | enumerable -> Vai permitir se listado.
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
    //hasOwnProperty() -> função tem a propriedade pertece a ela
}