// ==================== Estrutura do Set ====================
/*
 * Sets são estruturas que armazenam apenas valores únicos
 */

const MY_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const MY_SET2 = new Set(MY_ARRAY)

// ========== Métodos ==========
/* 
- Adicionar, consultar e deletar
*/

const MY_SET = new Set()
MY_SET.add(1)
MY_SET.add(6)
MY_SET.add(2) //add

MY_SET.has(1) //true
MY_SET.has(8) //false

MY_SET.delete(9) //deletar
console.log(MY_SET)

// ========== Set vs Array ==========
/*
- Set:
 * São estruturas que armazenam apenas valores únicos
 * Em vez da propriedade length, consulta-se o número de registros pela propriedade size
 * Não possui os métodos map, filter, reduce e etc
 */
