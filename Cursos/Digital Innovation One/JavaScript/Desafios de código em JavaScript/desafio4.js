let lines = gets().split('\n')

let line = lines.shift().split(' ')

//escreva aqui o seu código

let t1 = parseInt(line[0])
let t2 = parseInt(line[1])
let t3 = parseInt(line[2])
let t4 = parseInt(line[3])
let result = t1 + t2 + t3 + t4 - 3
console.log(result)
