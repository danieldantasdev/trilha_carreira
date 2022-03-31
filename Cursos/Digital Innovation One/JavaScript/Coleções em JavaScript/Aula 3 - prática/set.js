/* ## Atividade 2: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.
 */

const UNIQUE_ELEMENTS = (array) => {
    let unique = new Set(array)
    return [...unique]
}

const arr = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(UNIQUE_ELEMENTS(arr))
