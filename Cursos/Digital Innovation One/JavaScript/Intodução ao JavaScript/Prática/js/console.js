/* ==================== Console ==================== */
console.log('Hello World!')
//Baixar o Nodejs, para acessar o server-side e ver o console.log no terminal
//digital o comando node console.js(nome do arquivo que vou ver no terminal)
function returnEvenValues(array) {
    let evenNums = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i])
        } else {
            console.log(`${array[i]} não é par!`)
        }
        console.log('os números pares são:', evenNums)
    }
}

let array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
return returnEvenValues(array)
