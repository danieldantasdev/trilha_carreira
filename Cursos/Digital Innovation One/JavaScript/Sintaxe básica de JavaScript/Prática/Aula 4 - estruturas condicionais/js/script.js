// ==================== Estruturas Condicionais ====================
/* 
- Instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição  
- Um jogo precisa alterar o placar a cada vez que o time marcar um gol
*/

// ========== Estruturas de decisão ==========
/* 
- Podemos usar o "if" - significado "se"
- Caso a condição não seja atendida podemos usar o "else" - significado "caso não ou senão"
- if
- if - else
- else if
- ninho de if's
- if ternário 
- switch case
*/
// ===== if - else =====
var jogador1 = 2
var jogador2 = 2
var placar

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
} else {
    console.log('Jogador 1 não marcou ponto!')
}

// ===== if - else - && =====
var jogador1 = 2
var jogador2 = 2

if (jogador1 && jogador2 > 0) {
    console.log('Jogador 1 e jogador 2 marcaram ponto!')
} else {
    console.log('Ninguém marcou ponto!')
}

// ===== else if =====
/* 
- Caso haja mais de uma condição podemos usar o "else if"
*/
var jogador1 = 2
var jogador2 = 1

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
} else if (jogador2 && jogador1 > 0) {
    console.log('Jogador 2 marcou ponto!')
} else {
    console.log('Ninguém marcou ponto!')
}

// ===== ninho de if =====
/* 
- Podemos usar o "if" dentro de outro "if"
- Aninhamento de "if's" ou ninho de "if's"
*/
var jogador1 = 0
var jogador2 = 2

if (jogador1 && jogador2 > -1) {
    if (jogador1 > jogador2) {
        console.log('Jogador 1 marcou ponto!')
    }
    if (jogador2 > jogador1) {
        console.log('Jogador 2 marcou ponto!')
    }
}

if (jogador1 == jogador2) {
    console.log('Ninguém marcou ponto!')
}

// ===== if ternário =====
/* 
- Podemos usar o "if" em uma única linha
- Lembrar de usar a interrogação "? e dois pontos ":"
- [condição] ? [instrução 1] : [instrução 2]
*/

var jogador1 = 2
var jogador2 = 2

jogador1 != -1 && jogador2 != -1
    ? console.log('Jogadores válidos!')
    : console.log('Jogadores inválidos!')

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!')
}
if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!')
}
if (jogador2 && jogador1 > 0) {
    console.log('Jogadores marcaram ponto!')
} else {
    console.log('Ninguém marcou ponto!')
}

// ===== if ternário com verificações =====
var jogador1 = 6
var jogador2 = 1
var placar

//if ternário
jogador1 > 0 && jogador2 > 0
    ? console.log('Jogadores válidos!')
    : console.log('Jogadores inválidos!')

//if
if (jogador1 > jogador2) {
    //&& jogador2 == 0
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2
}

//else if
else if (jogador2 > jogador1) {
    //&& jogador1 == 0
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1
}

//else
else {
    console.log('Ninguém marcou ponto!')
}

// ===== switch/case =====
/* 
- Funciona como condicional também
- switch(${expressão}){
    case 1: 
    ${instrução}
    break;

    case 2: 
    ${instrução}
    break;
}
*/

switch (placar) {
    case (placar = jogador1 > jogador2):
        console.log('Jogador 1 marcou ponto!')
        break

    case (placar = jogador2 > jogador1):
        console.log('Jogador 2 marcou ponto!')
        break

    default:
        console.log('Ninguém marcou ponto!')
}

// ========== Estruturas de repetição ou laços de repetição ==========
/* 
- São estruturas condicionais que repetem uma instrução até atingir uma determinada condição
- for 
- for/in
- for/of
- while
- do/while
*/

// ===== for =====
/* 
- Funciona como uma repetição de instrução até que uma condição seja falsa
- for([expressãoInicial]; [condição]; [incremento]){
    declaração ou instrução
}
*/
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    console.log(i)
}

// ===== for/in =====
/* 
- Funciona como uma repetição de instrução a partir de uma propriedade
- for([índice] in [objeto ou array]){
    declaração ou instrução
}
*/
//for/in com array
for (let i in array) {
    console.log(i)
}

//for/in com object
for (let i in object) {
    console.log(i)
}

// ===== for/of =====
/* 
- Funciona como uma repetição de instrução a partir de um valor
- for([índice] of [array]){
    declaração ou instrução
}
*/
//for/of com array
for (let i of array) {
    console.log(i)
}

//for/of com object
/* 
- for/of não funciona com objetos, pois objetos não são iteráveis, ou seja, as propriedades variam, diferente do índice em um array que sempre serão números inteiros
- Imprime cada valor em uma linha diferente
*/
for (let i of object.propriedade1) {
    console.log(i)
}

// ===== while =====
/* 
- Executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução, lembrar disso, pois posso criar um loop infinito
- Enquanto a variável a for menor que 10, ela vai receber mais de um e imprimir no console
*/

var a = 0

while (a < 10) {
    a++
    console.log(a)
}

// ===== do/while =====
/* 
- Executa uma instrução “até que” determinada condição seja falsa,
a verificação é feita depois da execução
- A variável a vai receber mais um e imprimir
no console até que seu valor chegue a 10
*/
var a = 0

do {
    a++
    console.log(a)
} while (a < 10)
