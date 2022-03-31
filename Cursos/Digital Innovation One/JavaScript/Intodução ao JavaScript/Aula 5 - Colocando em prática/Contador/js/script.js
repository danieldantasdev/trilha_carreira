let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber')

function increment() {
    count++ //count = count + 1
    CURRENT_NUMBER.innerHTML = count
}

function decrement() {
    count-- //count = count - 1
    CURRENT_NUMBER.innerHTML = count
}
