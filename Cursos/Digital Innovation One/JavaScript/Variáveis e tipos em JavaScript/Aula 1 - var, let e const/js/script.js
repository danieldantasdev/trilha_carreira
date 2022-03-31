// ================== Atribuição de valores ==================
/* 
- Case type
. Original variable as string - some awesome var
. Camel Case - someAwesomeVar //js
. Snake Case - some_awesome_var
. Kebab Case - some-awesome-var
. Pascal Case - SomeAwesomeVar
. Upper Case Snake Case - SOME_AWESOME_VAR //usado em constantes
*/

// ========== Variáveis ==========
/* 
- Declarar valores dinâmicos, ou seja, que podem ser modificados ao longo do ciclo de vida do meu código
- let não existia no inicio do Js
*/

// ===== "Var" =====
/* 
- Variável de escopo global e bloco
- Hoisting - atribuir um valor para uma variável antes de declarar ela
- Redeclaração 
- Reatribuição
- camelCase
*/

// ===== Hoisting =====
numberOne = 1
console.log(numberOne + 2)
var numberOne

// ===== "Let" =====
/* 
- Variável de escopo de bloco
- camelCase
*/

var a = 1
var b = 2

if (a === 1) {
    var a = 11 //escopo global
    let b = 22 // escopo de bloco

    console.log(a)
    console.log(b)
}

console.log(a)
console.log(b)

// ===== Var e Let =====
var firstName = 'Daniel'
var lastName = 'Dantas'

if (firstName === 'Daniel') {
    var firstName = 'Pedro' //Reatribuição
    let lastName = 'Silva' //Reatribuição

    lastName = 'Abreu' //Redeclaração

    console.log(firstName, lastName)
}

console.log(firstName, lastName)

/* 
- Usamos variável let em escopo de bloco no mundo real, é mais seguro, do que usar variável global
*/

// ===== Const =====
/* 
- Declarar valores estáticos, ou seja, que não podem ser modificados ao longo do ciclo de vida do meu código
- SNAKE_UPPER_CASE
- Escopo de bloco
- Não faz hoisting
*/

const FIRST_NAME = 'Daniel'

console.log(FIRST_NAME)

// ===== Var, Let e Const =====
/* 

var:
- Global ou local
- Redeclaração
- Reatribuição
- Hoisting

Const:
- Bloco

Let:
- Bloco
- Reatribuição

*/
