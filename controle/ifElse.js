const imprimirResultado = function(nota) {
    if(nota >= 7 ){
        console.log('Aprovado')
    }else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidade ao passar os dados, devido ao o JavaScript é fracamente tipada.
