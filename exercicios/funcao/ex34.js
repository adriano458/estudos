/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres
* (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

// charArt -> função que pecorrer a string, separando cada caracter
// toLowerCase -> função para passa a string minusculo para maiusculo e inverso.

function tamanho ( name1, name2 ) {
    let contido = true

    for ( let i = 0; i < name1.length; i++ ){
        let caract1 = name1.charAt(i).toLowerCase() 
        for ( let j = 0; j < name2.length; j++ ){
            let caract2 = name2.charAt(j).toLowerCase()
            
            if ( caract1 == caract2 ){
                contido = true
                break
            } else {
                contido = false
            }
        }
    }
    return console.log(contido)
}

tamanho("abc", "dba")