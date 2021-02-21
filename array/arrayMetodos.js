const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Função pop() remove o último elemento da array
console.log(pilotos)

pilotos.push('Verstappen') //push() adiciona um elemento no final da Array
console.log(pilotos)

pilotos.shift() //remove na pimeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // criar um novo array a partir do indice 2 da lista
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // criar um array, copiando a partir do indice 1 até o 4.
console.log(algunsPilotos2)
