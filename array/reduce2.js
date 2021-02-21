const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota:8.7, bolsista: true }
]

//DESAFIO 1: Todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce(function(atual){
    return atual
})

if ( resultado === true ){
    console.log('Todos os alunos são bolsista!')
} else {
    console.log('Todos os alunos não são bolsista!')
}

//Revisão professor
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//DESAFIO 2: Alguns alunos é bolsista?
const algumBosisista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsista).reduce(algumBosisista))