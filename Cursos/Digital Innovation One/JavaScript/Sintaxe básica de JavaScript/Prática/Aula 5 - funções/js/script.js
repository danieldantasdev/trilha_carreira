// ==================== Funções ====================
/* 
- São blocos de comandos e instruções para execução de determinadas tarefas
- function nomeDaFunção(){
    ${instrução}
}
nomeDaFunção()
*/

function função() {
    console.log('Esta mensagem veio de uma função')
}

função()

// ========== Como declarar? ==========
/* 
- Geralmente se utiliza a palavra reservada "function" seguida de parênteses "()" e chaves "{}"
- function nomeDaFunção(){
    ${instrução}
}
nomeDaFunção()
//() - Indicam que é um objeto do tipo function
//{} - Indicam que é um bloco de instruções a serem executadas
*/

// ========== Parâmetros ==========
/* 
- As funções podem receber em sua declaração, parâmetros, que
servem como variáveis de estado, onde sua atribuição pode ser feita durante a chamada da função
- function nomeDaFunção(parâmetro) {
${instrução};
}
nomeDaFunção(valorDoParâmetro);
*/

function funcaoComParametros(primeiro, segundo) {
    console.log(primeiro, segundo)
}

funcaoComParametros('Daniel', 'Dantas')
