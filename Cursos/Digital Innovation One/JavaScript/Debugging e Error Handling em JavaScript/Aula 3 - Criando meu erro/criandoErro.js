// ==================== Objeto Error ====================
/* 
- Todos parâmetros são opcionais
*/
new Error(message, fileName, lineNumber)

const MEU_ERRO = new Error('Mensagem inválida')
MEU_ERRO.name = 'InvalidMessage'
throw MEU_ERRO
