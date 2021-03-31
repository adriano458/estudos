const gerarNumerosEntre = (min, max, tempo) => {
    if ( min > max) [max, min] = [min, max]
    return new Promise( resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

const gerarVariosNumeros = () => {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros)) // Você realiza apenas uma chamada na promise, chamando todas as funções.