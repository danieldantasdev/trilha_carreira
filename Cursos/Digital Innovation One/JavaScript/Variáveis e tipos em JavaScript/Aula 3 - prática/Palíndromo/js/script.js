// ==================== Palíndromo ====================
/* 
- Frase ou palavra que pode se ler, indiferentemente, da esquerda para direita ou vice-versa
- Roma me tem amor
*/

/* 
## Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)_ 
*/

// solução 1
function verificaPalindromo(string) {
    if (!string) return
    console.log(string === string.split('').reverse().join(''))
    return string.split('').reverse().join('') === string
}
console.log(verificaPalindromo('cat'))
console.log(verificaPalindromo('ovo'))

// solução 2

function varificaPalindromo2(string) {
    if (!string) return
    if (!string.length) return

    for (var i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false)
        }
    }
    return console.log(true)
}

varificaPalindromo2('asa')
