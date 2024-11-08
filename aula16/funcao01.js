function parimpar(n) {
    if (n % 2 == 0) {
        return `O número ${n} que você digitou é PAR!`
    } else if (n % 2 == 1) {
        return `O número ${n} que você digitou é ÍMPAR!`
    } else {
        console.log('Número inválido, digite novamente!')
    }
}

// console.log((parimpar))
let resultado = parimpar(256)
console.log(resultado)
