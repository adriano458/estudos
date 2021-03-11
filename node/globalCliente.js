require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' //Global está aberta para mudança
console.log(MinhaApp.nome)