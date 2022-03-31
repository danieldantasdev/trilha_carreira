// ==================== Estrutura do Map ====================
/*
 * Uma coleção de arrays o formato [chave, valor]
 * Pode ser iterado por um loop for...of
 */

// ========== Métodos ==========
/* 
- Adicionar, ler e deletar
*/

const MY_MAP = new Map()
MY_MAP.set('apple', 'fruit')
// Map(1) {'apple' => 'fruit'}

MY_MAP.get('apple')
// 'fruit'

MY_MAP.delete('apple')
// true

MY_MAP.get('apple')
// undefined

// ========== Map vs Objeto ==========
/*
- Maps:
 * Podem ter chaves de qualquer tipo
 * Possuem a propriedade length
 * Mais fáceis de iterar
 * Utilizado quando o valor das chaves é desconhecido
 * Os valores tem o mesmo tipo
 */
