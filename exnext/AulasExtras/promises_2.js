/*
setTimeout( () => {
    console.log('Executando CallBack')
    
    setTimeout( () => {
        console.log('Executando CallBack')

    }, 2000)
}, 2000)
*/

const esperarPor = (tempo = 2000) => {
    return new Promise ( ( resolve) => {
        setTimeout( () => {
            console.log('Executando promisse...')
            resolve('vishh...')
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(() => esperarPor())