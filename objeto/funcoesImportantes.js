const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Trás as chaves, nesse caso "nome", "Idade"...
console.log(Object.values(pessoa)) // Trás os valores dentro da chave, nesse caso "Rebeca", "2"...
console.log(Object.entries(pessoa)) // Trás as chaves e juntos os valores de cada uma.

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// Ou com o destruing
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {  //Pode definir a propriedade, se pode ou não ser alterado
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015) - concantena as demais propriedade para a primeira
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //o1 e o2, irá junta com dest, porém no dest tem objeto "a", com isso ele irá sobrescrever objeto 'a' de dest para 'a' de o2, com isso passa a ser 4

Object.freeze(obj)
obj.c = 1234
console.log(obj)