console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' //adciona
aprovados.push('Abia') //adiciona corretamente
console.log(aprovados.length) //Verificar a quantidade dentro do Array

aprovados[9] = 'Rafael' // vai adicionar e os anteriores irão ficar undifined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //Função que ordena os elementos dentro do Array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //Função adicionar um elemento, remover ou adicionar/remover ao mesmo tempo elemento dentro da Array
//.splice(apartir, quantos elementos). Acima foi apartir de Carlos, excluindo carlos e ana
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //Irá adicionar dois elementos dentro da Array
console.log(aprovados)
aprovados.splice(1, 0, 'Incluir s/ deletar') //Colocando o "0", não excluir, mas adicionamentos apartir do elemento 1.
console.log(aprovados)