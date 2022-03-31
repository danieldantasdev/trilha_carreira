// ==================== Estrutura ====================
function name(params) {
    //instruções
    return //valor do retorno
}
/* 
- Variável criada dentro da função, a mesma só poderá usada dentro dela
- Quando invocamos o return, a função para de ser executada
*/

// ========== Função anônima ==========
/* 
- Uma variável pode armazenar uma função
*/
const SOMA = function (a, b) {
    return a + b
}
console.log(SOMA(1, 2))
console.log(SOMA(1, 22))

// ========== Função autoinvocável ==========
/* 
- IIFE (immediately invoked function expression)
- Uma função anonima entre parênteses, seguida por outro par de parênteses, que representa sua chamada
*/
;(function () {
    let funcaoAutoinvocavel = 'Daniel'
    return funcaoAutoinvocavel
})() /* 
- Também podemos utilizar parâmetros ou armazenar em outra variável
*/

;(function (a, b) {
    return a + b
})(1, 2)

const SOMA2 = (function () {
    return a + b
})(1, 2)
console.log(SOMA2)

// ========== Função Callback ==========
/* 
- Uma função passada como argumento para outra função
- Utilizado para ter maior controle da ordem de chamadas
*/

const CALC = function (operacao, num1, num2) {
    return operacao(num1, num2)
}

const SOMANDO = function (num1, num2) {
    return num1 + num2
}

const SUB = function (num1, num2) {
    return num1 - num2
}

const RESULTADOSOMA = CALC(SOMANDO, 1, 2)
const RESULTADOSUB = CALC(SUB, 1, 2)

console.log(RESULTADOSOMA)
console.log(RESULTADOSUB)
