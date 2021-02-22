/* 15) ​Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch,
* sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne:
* “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um
* modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”. */

function ex15 ( carro ) {
    switch ( carro ){
        case 'hatch': case 'Hatch': case 'HATCH':
            return console.log('Compra efetuada com sucesso')
            break

        case 'sedans': case 'Sedans': case 'motocicletas': case 'Motocicletas': case 'Caminhonetes': case 'caminhonetes':
            return console.log('Tem certeza que não prefere este modelo?')
            break

        default:
            return console.log('Não trabalhamos com este tipo de automóvel aqui')
            break
    }
}

ex15('hatch')
ex15('sedans')
ex15('Honda')