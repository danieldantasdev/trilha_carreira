// ==================== Arrow functions ====================
// ========== Sintaxe ==========
const HELLOWORLD = function () {
    return console.log('Hello world')
}
HELLOWORLD()

const HELLOWORLDARROW = () => {
    return console.log('Hello world')
}

HELLOWORLDARROW()

// ===== Regras =====
/*
 * Caso exista apenas uma linha, pode-se dispensar as chaves e o return
 */

const SOMA = (a, b) => a + b
console.log(SOMA(4, 5))

/*
 * Caso exista apenas uma parâmetro, pode-se dispensar os parênteses
 */
const SOMA2 = (c) => c
console.log(SOMA2(4))

// ===== Sintaxe =====
/*
 * Arrow function não faz hoisting
 */

/* Funções comuns fazendo hoisting */
soma(2, 4)
function soma(a, b) {
    console.log(a + b)
    return a + b
}

/* Arrow function não faz hoisting */
const SOMA_ARROW_FUNCTION = (a, b) => a + b
console.log(SOMA_ARROW_FUNCTION(2, 4))

// ===== Outras restrições =====
/*
 * "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
 * Não existe o objeto "arguments"
 * O construtor também não pode ser utilizado, como o (new MeuObjeto())
 */
