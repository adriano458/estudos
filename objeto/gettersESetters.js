const sequencia = {
    _valor: 1, // convenção
    get valor() {
        return this._valor++
    },
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
            return console.log('Número menor!')
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Set - inseção dos dados
console.log(sequencia.valor, sequencia.valor)