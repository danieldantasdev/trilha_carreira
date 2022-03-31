// ==================== Protótipos ====================
/* 
- Todos os objetos em JS herdam propriedades e métodos de um prototype
- Objeto Object.prototype está no topo da cadeia
*/

// ========== Cadeia dos Protótipos ==========
/*
 * Crown - Bird - Animal.constructor - function - function.prototype.constructor - Object(){} - Object.prototype = null
 */

// ========== Classes ==========
/* 
- Em JS, não existem nativamente, as classes são objetos e a herança se dá por protótipos
- Syntactic sugar = uma sintaxe feita para facilitar a escrita
*/

// Nativo
var meal = function (food) {
    this.food = food
}

meal.prototype.eat = function () {
    return '😍'
}

// Atualizado
class Meal {
    constructor(food) {
        this.food = food
    }

    eat() {
        return '😍'
    }
}
