// ==================== Tratamento de erros ====================

// ==========  throw ==========
const VERIFICA_PALINDROMO = (string) => {
    if (!string) return 'String inválida'

    return string === string.split('').reverse().join('')
}

console.log(VERIFICA_PALINDROMO('cat'))
console.log(VERIFICA_PALINDROMO('ana'))

const THROW = (string) => {
    if (!string) throw 'String inválida'

    return string === string.split('').reverse().join('')
}

console.log(THROW('cat'))

// ==========  try...catch ==========

const TRY_CATCH = (string) => {
    try {
        THROW(string)
    } catch (e) {
        console.log(e)
    }
}

console.log(TRY_CATCH(''))

// ==========  finally ==========
const FINALLY = (string) => {
    try {
        THROW(string)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('A string enviada foi: ' + string)
    }
}

console.log(FINALLY('ala'))
