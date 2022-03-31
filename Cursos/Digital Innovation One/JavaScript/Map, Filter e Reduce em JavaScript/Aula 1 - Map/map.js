// ==================== Map ====================
/* 
- Quando um conjunto passa por uma operação e vir outro conjunto
* Conjunto A            Conjunto B
1                       2
2           y=f(x)      4
3                       6

- Cria um novo array
- Não modifica o Array original
- Realiza as operações em ordem (index 0 ao infinito)
- Percorre o array e executa uma função em cada um dos seus itens
*/

// ========== Sintaxe ==========
/* 
array.map(callback - (item, idex, array), thisArg)
- Callback: função a ser executada em cada elemento (item, index, array)
- ThisArg(opcional): valor 'this' dentro da'função callback
*/

// ========== Map vs forEach ==========

// ===== Usando o Map =====
const array = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(array.map((item) => item * 2)) //retorno: [2,4,6,8]

// ===== Usando o forEach =====
console.log(array.forEach((item) => item * 2))
