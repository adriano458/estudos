//Função sem retorno.
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//Ele irá somar com undefined. Que dara NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8)//Irá utilizar apenas nº 2 e 3, ignorando os demais números.
imprimirSoma()//Irá funcionar, porém apresentará NaN.

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))