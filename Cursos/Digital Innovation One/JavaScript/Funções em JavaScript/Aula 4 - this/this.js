// ==================== This ====================
/* 
- A palavra "this" é uma referência de contexto
* função dentro de objeto é um método
*/

const PESSOA = {
    firstName: 'Daniel',
    lastName: 'Dantas',
    id: 1,
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    },
    getId: function () {
        return this.id
    }
}

console.log(PESSOA.fullName())
console.log(PESSOA.getId())

// ========== Tabela do o que é this ==========
/* 
- Seu valor pode mudar de acordo com lugar no código onde tal foi chamada
*/

/* 
* contexto                       *referência
- Em um objeto (método)          - Próprio objeto dono do método
- sozinha                        - Objeto global (em navegadores, window)
- função                         - Objeto global
- evento                         - Elemento que recebeu o evento
*/

console.log(this)
;(function () {
    console.log(this)
})()

const PESSOA2 = {
    firstName: 'Daniel',
    lastName: 'Dantas',
    id: 1,
    getFullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

PESSOA2.getFullName()

// ========== Manipulando valor do this ==========
// ===== Call =====
const EU = {
    nome: 'Daniel'
}

const ANIMAL = {
    nome: 'Mupphy'
}

function getSomething() {
    console.log(this.nome)
}

getSomething.call(ANIMAL)

/* É possível passar parâmetros para essa função separando-os por vírgulas */

const MEUOBJETO = {
    num1: 2,
    num2: 4
}

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(MEUOBJETO, 1, 5)

// ===== Apply =====
/* 
- Parecida com a call, porém os argumentos serão passados dentro de um array
*/
const MEUNOME = {
    nome: 'Daniel'
}

const MEUANIMAL = {
    nome: 'Mupphy'
}

function getSomethingName() {
    console.log(this.nome)
}

getSomethingName.apply(MEUANIMAL)

/* 
- Parecida com a call, porém os argumentos serão passados dentro de um array
*/

const MEUOBJETOAPPLY = {
    num01: 2,
    num02: 4
}

function somaApply(a, b) {
    console.log(this.num01 + this.num02 + a + b)
}

somaApply.apply(MEUOBJETOAPPLY, [1, 5])

// ===== Bind =====
/* 
- Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
*/

const retornaNome = function () {
    return this.nome
}

let daniel = retornaNome.bind({ nome: 'Daniel' })

console.log(daniel())
