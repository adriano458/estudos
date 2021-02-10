function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo Privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function() { // this deixa função publica, quando criamos com variavel (let ou const) passar ser privada
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())