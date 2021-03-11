const contadorA = require('./estanciaUnica')
const contadorB = require('./estanciaUnica')

const contadorC = require('./estaciaNova')()
const contadorD = require('./estaciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)