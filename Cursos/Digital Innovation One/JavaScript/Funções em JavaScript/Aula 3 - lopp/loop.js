// ==================== Loop ====================

// ========== if/else ==========
/* primeira maneira de fazer */
function numeroPositivo(num) {
    let resultado

    if (num < 0) {
        //condição dentro dos parênteses do if
        resultado = false //declaração 1: Caso a condição seja verdadeira
    } else {
        resultado = true
        //declaração 2: Caso a condição seja falsa
    }
    return resultado
}

console.log(numeroPositivo(2))
console.log(numeroPositivo(-2))

/* segunda maneira de fazer */
function numeroPositivo(num) {
    let resultado

    const NEGATIVO = num < 0

    if (NEGATIVO) {
        //condição dentro dos parênteses do if
        resultado = false //declaração 1: Caso a condição seja verdadeira
    } else {
        resultado = true
        //declaração 2: Caso a condição seja falsa
    }
    return resultado
}

console.log(numeroPositivo(2))
console.log(numeroPositivo(-2))

/* terceira maneira de fazer */
function numeroPositivo(num) {
    const NEGATIVO = num < 0

    if (NEGATIVO) {
        return false
    }
    return true
}

console.log(numeroPositivo(2))
console.log(numeroPositivo(-2))

/* JS não tem elseif, as palavras sempre serão separadas */
function numeroPositivo(num) {
    const NEGATIVO = num < 0
    const MAIORQUEDEZ = num > 10

    if (NEGATIVO) {
        return 'Esse número é negativo!'
    } else if (!NEGATIVO && MAIORQUEDEZ) {
        return 'Esse número é positivo e maior que 10!'
    }
    return 'Esse número é positivo!'
}

console.log(numeroPositivo(2))
console.log(numeroPositivo(-2))

// ========== Switch/case ==========
/* 
- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de um valor default
- Ideal para quando se precisa comparar muitos valores
*/

function getAnimal(id) {
    switch (id) {
        case 1:
            return 'cão'
            break
        case 2:
            return 'gato'
            break
        case 3:
            return 'pássaro'
            break

        default:
            return 'peixe'
            break
    }
}

console.log(getAnimal(1))
console.log(getAnimal(2))
console.log(getAnimal(3))
console.log(getAnimal())
console.log(getAnimal())
console.log(getAnimal('2'))

// ========== For ==========
/* 
- Loop dentro de elementos iteráveis (array, string)
*/

function multiplicaPorDois(array) {
    let multiplicados = []

    for (let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2)
    }

    return multiplicados
}

const MEUSNUMEROS = [2, 33, 435, 2323, 40]

console.log(multiplicaPorDois(MEUSNUMEROS))

// ========== For/in ==========
/* 
- Loop entre propriedades enumeráveis de um objeto
*/

function forInExemplo(objeto) {
    for (prop in objeto) {
        console.log(prop)
        console.log(objeto)
        console.log(objeto[prop])
    }
}

const MEUOBJETO = {
    nome: 'Daniel',
    idade: 20,
    cidade: 'Caxias'
}

forInExemplo(MEUOBJETO)

// ========== For/of ==========
/* 
- Loop dentro de elementos iteráveis (array, string)
*/

/* Letras */
function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra)
    }
}

const PALAVRA = 'abacaxi'
logLetras(PALAVRA)

/* Números */
function lognumeros(nums) {
    for (num of nums) {
        console.log(num)
    }
}

const NUMS = [1, 2, 3, 4]
lognumeros(NUMS)

// ========== While ==========
/* 
- Executa uma instrução até que a condição seja falsa
- "Enquanto"
*/

function exemploWhile() {
    let num = 0

    while (num <= 5) {
        console.log(num)
        num++
    }
}

exemploWhile()

// ========== Do/While ==========
/* 
- Executa uma instrução até que a condição seja falsa
- "Enquanto"
- Porém a primeira execução sempre ocorre
*/

function exemploDoWhile() {
    let num = 6

    do {
        console.log(num)
        num++
    } while (num <= 5)
}

exemploDoWhile()
