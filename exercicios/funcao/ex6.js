/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos */

function ex6 ( capInicial, taxa, tempo){
    let parc = capInicial / tempo
    let jurSimp = parc + ((taxa/100) * parc)

    return jurSimp * tempo
}

console.log(ex6(1000, 5, 2))

function composto ( cap, juros, n) {
    let res = cap * (Math.pow(juros, n))

    return res.toFixed(2)
}

console.log(composto(6000, 1.07, 12))