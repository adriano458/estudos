const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, netx) => {
    console.log('Middleware 1...')
    netx()
})

app.get('/produtos', (req, res, netx) => {
    res.send({ nome: 'Notebook', preco: 123.45}) //Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})