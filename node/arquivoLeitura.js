const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono...  || Não recomentado.
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrona...   
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//ou

const config = require('./arquivo.json') //Não precis usar o JSON.parse
console.log(`${config.db.host}:${config.db.port}`)

//Leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})