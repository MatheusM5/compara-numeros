function comparaNums(a, b) {
    let soma = a + b 
    let resultado = a == b ? true : false
    let igual = resultado == true ? `são` : `não são` 
    let dez = soma > 10 ? 'maior que 10' : 'menor que 10' 
    let vinte = soma < 20 ? 'menor que 20' : 'maior que 20'

    //tratamento de erro
    if(a == undefined || null) {
        console.log ('Defina dois números!')
    } else if(b == undefined || null) {
        console.log ('Defina dois números!')
    } else {
        console.log(`Os números ${a} e ${b} ${igual} iguais. Sua soma é ${soma}, que é ${dez} e ${vinte}.`) 
    }
}

comparaNums(22,23)