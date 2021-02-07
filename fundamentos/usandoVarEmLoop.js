for(var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i =', i)

//Irá apresentar erro, pós a variável "i2" que é let, que está dentro de um bloco.
for(let i2 = 0; i2 < 10; i2++){
    console.log(i2)
}
console.log('i = ', i2)