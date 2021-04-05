const esperarPor = (tempo = 2000) => {
    return new Promise ( (resolve) => {
        setTimeout( () => resolve(), tempo)
    })
}

const retornarValor = () => {
    return new Promise (resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

executar(). then(console.log)  // Para sair do sincronimos, e entra no c´dogio sincronomo normal, precisa acessar pelo o ".then"