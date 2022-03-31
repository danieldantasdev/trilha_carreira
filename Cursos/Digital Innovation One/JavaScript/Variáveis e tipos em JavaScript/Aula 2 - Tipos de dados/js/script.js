// ================== Tipos ==================
// ========== Estrutura de dados ==========
/* 
- Existem em todas linguagens de programação
- JavaScript é uma linguagem de tipagem dinâmica e fraca, ou seja, antes de declarar um valor, não é necessário especificar o tipo dele
*/
let um = 'um' //string
um = 1 //number //Redeclaração

console.log(typeof um)

/* 
- Data Types in JS:

-- Primitives types:
. Number
. Boolean
. String
. Undefined
. Null
*Não possuem métodos dentro deles
*São escritos com letras minúsculas

-- Composite/Non-primitives Types:
. Object
. Array
*/

// ===== Strings =====
/* 
- Comumente utilizada para textos
- Valores declarados entre aspas ou crases (interpolação de strings)
- Iteráveis
*/

const STRING = 'string'

let firstName = 'Daniel'
let lastName = 'Dantas'

//interpolação de string
let fullName = `Nome completo é ${firstName} ${lastName}`
console.log(fullName)
console.log(fullName.length) //tamanho sempre começa do 1
console.log(fullName[2]) //índice sempre começa do 0
console.log(typeof fullName)

//concatenação de string
let concatenado = firstName.concat(lastName)
console.log(concatenado)
console.log(concatenado.length)
console.log(typeof concatenado)

//concatenação de string com espaçamento
concatenado = firstName + ' ' + lastName
console.log(concatenado)

//concatenação de string pulando linha
concatenado = firstName + '\n' + lastName
concatenado = `O nome é ${firstName} ${lastName}`
console.log(concatenado)

//objeto com string
let objetoString = new String('Lobinho')
console.log(objetoString)
console.log(objetoString.length)
console.log(typeof objetoString)

//string vazia
let stringVazia = ''
console.log(stringVazia)

//split - separa os argumentos
let frase = 'Olá, tudo bem?'
console.log(frase.split(''))
console.log(frase.split(' '))

//includes - verificar a existência de algum argumento
console.log(frase.includes('Olá'))

//startsWith - verificar o inicio da frase
console.log(frase.startsWith('O'))

//startsWith - verificar o final da frase
console.log(frase.endsWith('O'))

//replace - muda o conteúdo
let novaFrase = frase.replace('Olá', 'Daniel')
console.log(novaFrase)
console.log(frase)

// ===== Numbers =====
/* 
- 0123456789
*/

let num = 100
let num2 = 103
let fiveByThree = 5 / 3

console.log(num + 3)

console.log(num % 2) //saber se o número é par
console.log(num2 % 2) //saber se o número é par

//Biblioteca Math - é um objeto
/* 
- floor arredonda para baixo        
*/
console.log(Math.floor(fiveByThree))

/* 
- ceil arredonda para baixo        
*/
console.log(Math.ceil(fiveByThree))

//percentagem
let percent = 10
console.log(percent + '%')
console.log(typeof percent)
console.log(typeof percent.toString()) //convertendo de número para string

let percent2 = '10%'
console.log(percent2)

// ===== Boolean =====
/* 
- true
- false
*/

let validationFalse = 3 === 0
console.log(validationFalse)

let validationTrue = 3 === 3
console.log(validationTrue)

// ===== Array ou vetores =====
/* 
- Listas iteráveis de elementos
- Sempre começa do índice 0
- Iterabilidade significado que eu posso fazer operações em cada um dos elementos do array
*/

let array2 = new Array()
let array = []
array.push(3) //adiciona elemento no final
array.push(2)
array.pop() //remove o último elemento
array.push(2)
array.push(5)
array.shift() //remove o primeiro elemento
array.unshift(1) //adiciona elemento no começo
console.log(array)

for (let i = 0; i < array; i++) {
    console.log(i)
}

console.log(array.some((item) => item === 5)) //algum item é 5
console.log(array.every((item) => item === 5)) //todos itens são 5
console.log(array.reverse((item) => item)) //invertendo a ordem dos elementos

// ===== Objetos =====
/* 
- Estrutura tipo "chave e valor"
- Dicionário de dados
- HashTable
- HashMap
*/
let person = {
    name: 'Daniel',
    age: 20,
    address: 'Rua 2',
    numberOfSiblings: 3
    //name e age - keys
    //'Daniel' e 20 - Values
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(typeof person)

//biblioteca Object.keys()
console.log(Object.keys(person))

//biblioteca Object.values()
console.log(Object.values(person))

// ===== Empty, null e undefined =====
/* 
- Empty - variável declarada mas sem valor:
. Number = 0
. String = ""

- Null - variável declarada, mas não existe de propósito

- Undefined - Valor não foi declarado
*/

//empty
let empty = ''
console.log(empty)

//null
let nulo = null
console.log(nulo)

//undefined
indefinido
console.log(typeof indefinido)
