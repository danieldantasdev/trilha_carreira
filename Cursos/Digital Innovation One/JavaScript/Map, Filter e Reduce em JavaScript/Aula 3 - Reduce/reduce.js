// ==================== Reduce ====================
/* 
- Executa uma função em todos os elementos do Array, retornando um valor único
- Diferente do filter e map, o reduce não irá retornar um Array
*/

// ========== Sintaxe ==========
/* 
- array.reduce(callbackFn, inicialValue)
* CallbackFn é a função a ser executada a partir do acumulador
* inicialValue é o valor sobre o qual o retorno final irá atuar
* Accumulator/preValue é o acumulador de todas as chamadas de CallbackFn
* currentValue é o elemento atual sendo acessado pela função
*/

const callbackFn = function (accumulator, currentValue, index, array) {
    //do something
}
array.reduce(callbackFn, inicialValue)
