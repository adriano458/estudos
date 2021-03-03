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

//Identificar o motivo de desligamento
function motivoDesligamento ( motivo ){
    switch ( motivo ){
        case 'Pedido de Demissão':
            console.log('Pedido')
            break
        case 'Dispensa sem justa causa':
            console.log('Sem justa causa')
            break
        case 'Dispensa com justa causa':
            console.log('Com justa causa')
            break
        case 'Término de Contrato de experiência':
            console.log('Término de contrato')
            break
        case 'Rescisão antecipada do contrato de experiência pelo empregador':
            console.log('Antecipada pelo empregador')
            break
        case 'Rescisão antecipada do contrato de experiência pelo empregado':
            console.log('Antecipada pelo empregado')
            break
        default:
            console.log('Motivo informado incorretamente!')
    }
}

motivoDesligamento('Pedido de Demissão')

// Função para calcular INSS
function inss ( salario ) {
    let inss = 0
    if( salario < 1100 ){
        inss = salario * 0.075
    } else if ( salario > 1100.01 && salario < 2203.48 ){
        inss = ( salario * 0.09 ) - 16.50
    } else if ( salario > 2203.49 && salario < 3305.22 ){
        inss = ( salario * 0.12 ) - 82.50
    } else {
        inss = ( salario * 0.14 ) - 148.71
    }
    return inss
}

// Função para cacular IRRF
function irrf ( salario, inss ) {
    const baseCalculo = salario - inss
    let irrf = 0

    if( baseCalculo >= 1903.99 && baseCalculo <= 2826.65 ){
        irrf = (baseCalculo * 0.075) - 142.80
    } else if ( baseCalculo >= 2826.66 && baseCalculo <= 3751.05 ){
        irrf = (baseCalculo * 0.15) - 354.80
    } else if ( baseCalculo >= 3751.06 && baseCalculo <= 4664.68 ){
        irrf = (baseCalculo * 0.225) - 636.13
    } else {
        irrf = (baseCalculo * 0.275) - 869.36
    }
    return irrf
}

//console.log(irrf(4040, inss(4040)))

//console.log(simulador(2650, '01/06/2020', '25/02/2021', 'Sem justa causa', false, false))