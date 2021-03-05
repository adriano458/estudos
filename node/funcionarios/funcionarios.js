const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    //pais, genero e salario
   // const paraObjeto = json => JSON.parse(json)
   const func = funcionarios
    const pais = func => func.pais === 'China'
    const sexo = func => func.genero === 'F'


    const resultado = func.filter(pais).filter(sexo).reduce(menorSalario)
    console.log(resultado)
})

