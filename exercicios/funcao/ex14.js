/* 14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã,
* retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne:
* “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console. */

function ex14 ( frutas ) {
    switch ( frutas ){
        case "Maça":
            return console.log('Não vendemos esta fruta aqui')
            break
        
        case "kiwi":
            return console.log('Estamos com escassez de Kiwis')
            break

        case "melancia":
            return console.log('Aqui está, são 3 reais o quilo!')
            break
        
        default:
            return console.log('Erro!')
    }
}

ex14('Melancia')