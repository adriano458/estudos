/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: 
* Plano Aumento 
    A      10%
    B      15%
    C      20% 
* Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.
* Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function planoTrabalho ( plano, salario ) {

    let novoSalario = 0
    switch ( plano ) {
        case 'a': case 'A':
            novoSalario = salario * 1.10
            return console.log(`Novo salário: ${novoSalario}`)
            break

        case 'b': case 'B':
            novoSalario = salario * 1.15
            return console.log(`Novo salário: ${novoSalario}`)
            break

        case 'c': case 'C':
            novoSalario = salario * 1.20
            return console.log(`Novo salario: ${novoSalario}`)
            break

        default:
            return console.log('Dados incorretos!')
    }
}

planoTrabalho('a', 2500)
planoTrabalho('b', 2500)
planoTrabalho('c', 2500)