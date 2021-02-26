/* Simulador de Rescisão de Contrato de Trabalho.
* Data início: 25/02/2021
* Data final: 
* Projeto: Relizar uma página, onde os clientes da JCA Contadores, irão realizar o acesso para simular rescisão de contrato, com isso irá 
* diminuir as solicitações por telefone.
* Observação: É necessário incluir impressão em PDF e com a informação bem clara, que o resultado não é oficial, apenas uma base de simulação
* e não se torna documento oficial */

function simulador ( ultSalario, dataInicio, dataFinal, motivo, ferias, aviso ){
    if(ajusteData(dataFinal) <= ajusteData(dataInicio)){
        return 'Desculpe! A data do desligamento é menor que a data de início!'
    } else {
        const dia = ajusteData(dataFinal)
        const dia2 = ajusteData(dataInicio)
        const diasTrabalhado = dia.getTime() - dia2.getTime()
        return Date(diasTrabalhado)
    }
}

function ajusteData ( data ){
    const dataSplit = data.split('/')

    const dia = dataSplit[0]
    const mes = dataSplit[1]
    const ano = dataSplit[2]

    let data1 = new Date(ano, mes - 1, dia)

    return data1
}

console.log(simulador(2650, '01/06/2020', '25/02/2021', 'Sem justa causa', false, false))