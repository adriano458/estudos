/* Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"} */

function inverter( objeto ){
    const troca = Object.entries(objeto).map( chavesValor => chavesValor.reverse())

    return Object.fromEntries(troca)
    }

console.log(inverter({ a: 1, b: 2, c: 3}))