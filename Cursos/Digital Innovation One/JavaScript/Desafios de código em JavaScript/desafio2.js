let lines = gets().split('\n')

let N = parseInt(lines.shift())
for (i = 2; i < 10000; i++) {
    if (i % N === 2) console.log(i)
}
