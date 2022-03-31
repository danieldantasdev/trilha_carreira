// ==================== Aprofundando em funções ====================

// ==========  Funções declarativas ==========
/* 
- São funções que possuem o uso mais comum, deve ser declarada
usando a palavra reservada “function” seguida do nome da
função, parênteses “()” e chaves “{}”
- function nomeDaFunção() {
${instrução};
// O nome da função é obrigatório
}
*/
function FunçãoDeclarativa() {
    console.log('Uma mensagem de uma função declarativa')
}

FunçãoDeclarativa()

// ========== Expressões de Funções ==========
/* 
- São funções atribuídas à expressões
// O nome da função não é obrigatório
*/

var função = function nomeDaFunção() {
    console.log('Uma mensagem de uma expressão de função')
}
função()

var função = function () {
    console.log('Uma mensagem de uma expressão de função')
}
função()

// ========== Arrow Function ==========
/* 
- São funções de expressão de sintaxe curta
- Deve ser declarada com parênteses "()", seguido de "=>" e depois
chaves "{}"
// Arrow functions sempre serão anônimas, e portanto não podem ser nomeadas
*/

var função = () => {
    console.log('Sou uma arrow function')
}

função()

// ==========  Funções aritméticas ==========
/* 
-  Criando uma calculadora
- Para este exercício vamos utilizar alguns métodos nativos do
JavaScript:
• Number() – para converter valores em números
• Prompt() – para registrar entradas de usuário
• Alert() – para mostrar mensagem ao usuário
• Template Strings – para usar strings junto com expressões
*/
