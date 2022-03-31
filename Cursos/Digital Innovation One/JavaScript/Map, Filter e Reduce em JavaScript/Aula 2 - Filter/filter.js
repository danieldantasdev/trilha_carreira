// ==================== Filter ====================
/* 
- Colocar todo array dentro de um filtro e apenas os itens que corresponderem a determinada condição serão retornados
- Cria um novo Array
- Não modifica o Array original
*/

// ========== Sintaxe ==========
/* 
- array.filter(callback,thisArg)
*/

const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi']
console.log(frutas.filter((frutas) => frutas.includes('maça')))
