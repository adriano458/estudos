// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }  - Erro.

Object.freeze(pessoa) // Congela as informações do objeto. Nada pode ser mais alterado

pessoa.nome = 'Maria'       //Não pode alterar
pessoa.end = 'Rua ABC'      //Não pode incluir
delete pessoa.nome          //Não pode deletar

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) // congelar e passando objeto no mesmo momento que criar
pessoaConstante.nome = 'Maria'              //Não pode alterar, pós econtra congelada
console.log(pessoaConstante)