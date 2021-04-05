const funcionarOunao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!') // Irá tratar o erro que vier apresentar
        } else {
            resolve(valor)
        }
    })
}

funcionarOunao('Testando...', 0.2)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`)) // Catch irá tratar e exibir o erro.
    .then(() => console.log('Fim!'))