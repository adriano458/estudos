/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe
* uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as
* unidades de medida. */

function crescimento (altura1, taxa1, altura2, taxa2){
    
    if(altura1 == altura2){
        if(taxa1 > taxa2){
            return console.log('Criança 1 irá ultrapassar a criança 2 em um ano!')
        }else if(taxa1 < taxa2){
            return console.log('Criança 2 irá ultrapassar a criança 1 em um ano!')
        }else{
            return console.log('Crianças tem os mesmos crescimento!')
        }
    }else if(altura1 > altura2){
        if(taxa1 >= taxa2){
            return console.log('Criança dois não irá ultrapassar a criança 1')
        }else{
            return console.log(`Criança dois irá ultrapassar a criança um em ${calcularCrescimento(altura2, taxa2, altura1, taxa1)}`)
        }
    }else{
        if (taxa2 >= taxa1) {
            return console.log(`Criança menor não ultrapassara a maior`)
        } else {
            return console.log(`Criança um irá ultrapassar a criança dois em ${calcularCrescimento(altura1, taxa1, altura2, taxa2)}`)
        }
    }

    function calcularCrescimento(alturaMenor, taxaMenor, alturaMaior, taxaMaior){
        let qtdAnos = 0

        while (alturaMenor < alturaMaior) {
            alturaMaior += taxaMaior
            alturaMenor += taxaMenor

            qtdAnos++
        }
        return qtdAnos
    }
    
}

crescimento (10, 2, 4, 3)