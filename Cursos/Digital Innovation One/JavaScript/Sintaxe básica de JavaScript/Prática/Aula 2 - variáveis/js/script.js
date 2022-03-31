// ==================== Tipos primitivos ====================

// ========== bolean ==========
var verdadeiroOuFalso = false

console.log(verdadeiroOuFalso)
console.log(typeof verdadeiroOuFalso)

// ========== number ==========
var number = 1
console.log(number)
console.log(typeof number)

// ========== string ==========
var string = 'Daniel'
console.log(string)
console.log(typeof string)

// ==================== tipos de declarar variáveis ====================

// ========== var ==========
/* 
- Escopo global e local
- Valor pode ser alterado 
*/
var variavelVar //senão tiver valor inicial, o output será nulo ou indefinido
console.log(variavelVar)

var variavelVar = 'Daniel'
console.log(variavelVar)

// ========== let ==========
/* 
- Escopo local de bloco
- Valor pode ser alterado 
*/
let variavelLet = 'Daniel' //senão tiver valor inicial, o output será nulo ou indefinido
console.log(variavelLet)

// ========== Const ==========
/* 
- Escopo local de bloco
- Valor NÃO pode ser alterado
- Deve ter obrigatório valor inicial
- Boa prática escrever em uppercase 
*/
const VARIAVELCONST = 'Daniel'
console.log(VARIAVELCONST)

// ==================== Escopos ====================

// ========== Escopo global ==========
/* Quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo código */
var escopoGlobal = 'global'
console.log(escopoGlobal)

// ========== Escopo local ==========
/* Quando a variável é declarada dentro de um bloco, sua visibilidade fica disponível em todo código ou não */
function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}

escopoLocal()

// ==================== Atribuição ====================
/* O sinal de igualdade "=" em JavaScript, significa atribuição */
var atribuição = 'meu nome'
console.log(atribuição)

// ==================== Comparação ====================
/* O sinal de igualdade duas vezes "==" em JavaScript, significa comparação */
var comparação = '0' == 0
console.log(comparação)

// ==================== Comparação idêntica ====================
/* O sinal de igualdade três vezes "===" em JavaScript, significa comparação idêntica */
var comparaçãoIdêntica = '0' === 0
console.log(comparaçãoIdêntica)

// ==================== Operadores aritméticos ====================

// ========== Adição + ==========
var adição = 1 + 1
console.log(adição)

// ========== Subtração - ==========
var subtração = 1 - 1
console.log(subtração)

// ========== Multiplicação * ==========
var multiplicação = 5 * 5
console.log(multiplicação)

// ========== Divisão real / ==========
var divisãoReal = 5 / 5
console.log(divisãoReal)

// ========== Divisão inteira % ==========
var divisãoInteira = 5 % 2
console.log(divisãoInteira)

// ========== Potenciação ** ==========
var potenciação = 2 ** 10
console.log(potenciação)

// ==================== Operadores relacionais ====================

// ========== Maior que > ==========
var maiorQue = 5 > 2
console.log(maiorQue)

// ========== Menor que < ==========
var maiorQue = 5 < 2
console.log(maiorQue)

// ========== Maior ou igual a >= ==========
var maiorQue = 5 >= 2
console.log(maiorQue)

// ========== Menor ou igual a <= ==========
var maiorQue = 5 <= 2
console.log(maiorQue)

// ==================== Operadores lógicos ====================

// ========== && - "e" ==========
/* Todos valores verdadeiros */
var e = true && false
console.log(e)

// ========== || - "ou" ==========
/* Qualquer valor verdadeiro*/
var ou = true || false
console.log(ou)

// ========== ! - "não" ==========
/* Inverte valor de verdadeiro para falso e vice-versa */
var não = !false
console.log(não)
