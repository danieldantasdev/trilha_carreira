// ==================== Parâmetros ====================
// ========== Pré-ES2015 ==========
function exponencial(array, num) {
    if (num === undefined) {
        num = 1
    }
    const RESULT = []

    for (let i = 0; i < array.length; i++) {
        RESULT.push(array[i] ** num)
    }
    return RESULT
}

console.log(exponencial([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(exponencial([1, 2, 3, 4, 5, 6, 7, 8], 5))

// ========== Pós-ES2015 ==========
function exponencial(array, num = 1) {
    const RESULT = []

    for (let i = 0; i < array.length; i++) {
        RESULT.push(array[i] ** num)
    }
    return RESULT
}

console.log(exponencial([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(exponencial([1, 2, 3, 4, 5, 6, 7, 8], 2))

// ========== Arguments ==========
/* 
- Um array com todos os par^metros passados quando a função foi invocada
*/

function findMax() {
    let max = -Infinity

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}

function showArguments() {
    return arguments
}
console.log(showArguments(1, 2, [1, 2, 3, 4], 'string'))

// ========== Arrays ==========
/* 
- Spread:
. Maneira de lidar separadamente com elementos
. O que era parte de um array se torna um elemento independente
*/
function sum(x, y, z) {
    return x + y + z
}

//sintaxe do spread
const NUMBERS = [1, 2, 3]
console.log(sum(...NUMBERS))

/*
- Rest:
. Combina os elementos em um array
. O que era um elemento independente se torna parte de um array 
*/

//sintaxe do rest
function confereTamanho(...arguments) {
    console.log(arguments.length)
}

confereTamanho()
confereTamanho(1, 2)
confereTamanho(1, 2, 3, 4, 5)

// ========== Objetos ==========
/* 
- Object Destructing:
. Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto
*/

const USER = {
    id: 42,
    displayName: 'DDantas',
    fullName: {
        firstName: 'Daniel',
        lastName: 'Dantas'
    }
}

function userId({ id }) {
    return `O Id é ${id}`
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `O nome completo é ${first} ${last}`
}

console.log(userId(USER))
console.log(getFullName(USER))
