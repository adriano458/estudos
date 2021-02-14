/* 19) ​O cardápio de uma lanchonete é o seguinte: 
Código Descrição do Produto Preço 
  100   Cachorro Quente     R$ 3,00 
  200   Hambúrguer Simples  R$ 4,00 
  300   Cheeseburguer       R$ 5,50 
  400   Bauru               R$ 7,50 
  500   Refrigerante        R$ 3,50 
  600   Suco                R$ 2,80 
  
* Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche.
* Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente. */

function cardapio ( cod, qtd ){

    let totalPagar = 0

    switch ( cod ) {
        case 100:
            totalPagar = 3.00 * qtd
            return console.log(`Cachorro Quente. Total: ${totalPagar.toString().replace(".",",")}`)
            break

        case 200:
            totalPagar = 4.00 * qtd
            return console.log(`Hamburgue Simples. Total: ${totalPagar.toString().replace(".",",")}`)
            break

        case 300:
            totalPagar = 5.50 * qtd
            return console.log(totalPagar.toString().replace(".",","))
            break

        case 400:
            totalPagar = 7.50 * qtd
            return console.log(totalPagar.toString().replace(".",","))
            break

        case 500:
            totalPagar = 3.50 * qtd
            return console.log(totalPagar.toString().replace(".",","))
            break

        case 600:
            totalPagar = 2.80 * qtd
            return console.log(totalPagar.toString().replace(".",","))
            break

        default:
            return console.log('Produto nao existe!')
            break
    }
}

cardapio(100, 3)