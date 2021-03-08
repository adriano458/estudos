/* Simulador de Rescisão de Contrato de Trabalho.
* Data início: 25/02/2021
* Data final: 
* Projeto: Relizar uma página, onde os clientes da JCA Contadores, irão realizar o acesso para simular rescisão de contrato, com isso irá 
* diminuir as solicitações por telefone.
* Observação: É necessário incluir impressão em PDF e com a informação bem clara, que o resultado não é oficial, apenas uma base de simulação
* e não se torna documento oficial */

//Receber as variaveis
const ultimoSalario = 4040
const dataInicio = '01/06/2020'
const dataFim = '07/03/2021'
const motivo = 'Dispensa sem justa causa'
const ferias = true
const aviso = false

let totalProvento = 0
let totalDesconto = 0
let receber = 0

//Identificar o motivo de desligamento e executar o simulador
function motivoDesligamento ( motivo ){
    switch ( motivo ){
        case 'Pedido de Demissão':
            console.log('Pedido')
            break
        case 'Dispensa sem justa causa': //Falta incluir aviso
        if (ferias == false){
            totalProvento = salarioDia(dataFim, ultimoSalario) + decimoTerceiro(dataFim, ultimoSalario) + feriasProporcionais(dataInicio, dataFim, ultimoSalario) + feriasUmTerco(dataInicio, dataFim, ultimoSalario)
            totalDesconto = inss(salarioDia(dataFim, ultimoSalario)) + irrf(ultimoSalario, inss(ultimoSalario)) + inss(decimoTerceiro(dataFim, ultimoSalario)) + irrf(ultimoSalario, inss(decimoTerceiro(dataFim, ultimoSalario)))
            receber = totalProvento - totalDesconto
            return receber
        } else {
            totalProvento = salarioDia(dataFim, ultimoSalario) + decimoTerceiro(dataFim, ultimoSalario) + feriasProporcionais(dataInicio, dataFim, ultimoSalario) + feriasUmTerco(dataInicio, dataFim, ultimoSalario) + ultimoSalario
            totalDesconto = inss(salarioDia(dataFim, ultimoSalario)) + irrf(ultimoSalario, inss(ultimoSalario)) + inss(decimoTerceiro(dataFim, ultimoSalario)) + irrf(ultimoSalario, inss(decimoTerceiro(dataFim, ultimoSalario)))
            receber = totalProvento - totalDesconto
            return receber
        }            
            break
        case 'Dispensa com justa causa':
            console.log('Sem justa causa')
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
console.log(motivoDesligamento(motivo))

//Ferias 1/3
function feriasUmTerco(dataIn, dataFim, salario ) {
    const dataFimSplit = dataFim.split('/')
    const dataInSplit = dataIn.split('/')

    const mesIn = Number(dataInSplit[1])
    const mesFim = Number(dataFimSplit[1])

    let meses = 0
    let salarioReceber = 0

    //Calcular mes
    if ( mesIn > mesFim ){
        meses = (12 - mesIn) +  mesFim
    }else if( mesIn === mesFim ){
        meses = 0
    }else {
        meses = mesFim - mesIn
    }

    salarioReceber = ((salario / 12) * (meses + 1)) / 3

    return salarioReceber
}

//Calcular férias
function feriasProporcionais( dataIn, dataFim, salario ) {
    const dataInSplit = dataIn.split('/')
    const dataFimSplit = dataFim.split('/')

    const diaIn = Number(dataInSplit[0])
    const mesIn = Number(dataInSplit[1])
    const diaFim = Number(dataFimSplit[0])
    const mesFim = Number(dataFimSplit[1])
    let dias = 0
    let meses = 0
    let salarioReceber = 0

    //Calcular dias
    if ( diaIn > diaFim ){
        dias = (30 - diaIn) + diaFim
    }else if( diaIn === diaFim ){
        dias = 30
    }else {
        dias = diaFim - diaIn
    }

    //Calcular mes
    if ( mesIn > mesFim ){
        meses = (12 - mesIn) +  mesFim
    }else if( mesIn === mesFim ){
        meses = 0
    }else {
        meses = mesFim - mesIn
    }

    //Calcular o valor de férias
    if ( dias >= 14 && meses >= 1 && meses <= 11 ){
        salarioReceber = (((meses + 1) /12) * 30) * (salario / 30)
    } else if ( dias < 14 && meses >= 1 && meses <= 11 ){
        salarioReceber = ((meses / 12) * 30) * (salario / 30)
    } else if ( dias >= 14 && meses == 0 ){
        salarioReceber = (salario / 12) * 1
    } else if ( dias < 14 && meses == 0 ){
        salarioReceber = 0
    }

    return salarioReceber
}

//Calcular aviso Previo
function avisoPrevio ( dataIn, dataFim, salario ){
    const date1 = new Date(dataIn)
    const date2 = new Date(dataFim);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

    if( diffDays >= 365){
        const anos = diffDays / 365
        const salarioAodia = salario / 30
        var valorAviso = 0

        for (let i = 0; i < anos.toFixed(0); i++){
            valorAviso += salarioAodia*3
        }
    } else {
        return valorAviso = 0
    }
    return valorAviso
}

function ajusteData ( data ){
    const dataSplit = data.split('/')

    const dia = dataSplit[0]
    const mes = dataSplit[1]
    const ano = dataSplit[2]

    let data1 = new Date(ano, mes - 1, dia)

    return data1
}

//Calcular o décimo terceiro
function decimoTerceiro( dataFim, salario){
    const dtFim = dataFim.split('/')

    if( dtFim[0] > 15){
        const mesesTrabalhado = (salario / 12) * dtFim[1]
        
        return mesesTrabalhado
    } else{
        const mesesTrabalhado = ((salario / 12) * (dtFim[1] - 1))

        return mesesTrabalhado
    }
}

// Calcular Salario de dias trabalho no mês
function salarioDia ( dataFim, salario ){
    const data = dataFim.split('/')
    const salarioDiasTRabalhado = (salario / 30) * data[0]

    return salarioDiasTRabalhado
}

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