/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o quanto ele
* recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês.
* Exemplos:  
* calcularSalario(150, 40.5) // retornará "Salário igual a R$ 6075" */

function calcularSalario ( horas, salarioHora ) {
    const salario = horas * salarioHora

    return console.log(`Salário igual a R$ ${salario.toFixed(2).replace('.',',')}`)
}

calcularSalario( 220, 12.04)