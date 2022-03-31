// ==================== Vetores ou array ====================
/* 
- Arrays são um tipo de lista 
- Matriz de variáveis, onde cada variável possui um índice
- Podem guardar qualquer valor dentro dos seus índices, inclusive outros arrays
*/
let array = ['string', 1, true, false, ['array1'], ['array2']]
console.log(array)
console.log(typeof array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])

// ==================== Manipulando arrays ====================
/* 
- O Array traz consigo uma série de métodos para manipulá-lo
*/

// ========== forEach() - itera um array ==========
array.forEach(function (item, index) {
    console.log(item, index)
})

// ========== push() - adiciona item no final do array ==========
array.push('novo item')
console.log(array)

// ========== pop() - remove item no final do array ==========
array.pop()
console.log(array)

// ========== shift() - remove item no início do array ==========
array.shift()
console.log(array)

// ========== unshift() - adiciona item no início do array ==========
array.unshift(['novo item'])
console.log(array)

// ========== indexOf() - retorna o índice de um valor ==========
console.log(array.indexOf(true))

// ========== splice() - remove ou substitui um item pelo índice ==========
array.splice(0, 4)
console.log(array)

// ========== slice() - retorna uma parte de um array existente ==========
let novoArray = array.slice(0, 1)
console.log(novoArray)

// ==================== Objetos ====================
/* 
- Dados que possuem propriedades e valores que definem características
- Deve ser declarado entre chaves {}
*/
let objeto = {
    string: 'azul',
    number: 1,
    boolean: true,
    array: ['array'],
    objetoInterno: {
        objetoInterno: 'objetoInterno'
    }
}
console.log(objeto)
console.log(objeto.boolean)
console.log(objeto.objetoInterno)

// ==================== Manipulando objetos ====================
/* 
- As propriedades de objetos podem ser atribuídas á variáveis, facilitando a manipulação do objeto, chamamos isso de desestruturação
*/
var string = objeto.string
console.log(string)

var arrayInterno = objeto.array
console.log(arrayInterno)

var { string, boolean, objetoInterno } = objeto
console.log(string, boolean, objetoInterno)
