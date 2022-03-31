/* ## Atividade

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```
 */

function comparaNumeros(num1, num2) {
    // const SAOIGUAIS = num1 === num2
    // const SOMA = num1 + num2

    // if (SAOIGUAIS) {
    //     return 'São iguais!'
    // }

    // return 'Não são iguais!'
    // return SAOIGUAIS ? 'São iguais!' : 'Não são iguais!'
    if (!num1 || !num2) {
        return 'Defina dois números'
    }
    const PRIMEIRAFRASE = criaPrimeiraFrase(num1, num2)
    const SEGUNDAFRASE = criaSegundaFrase(num1, num2)
    return `${PRIMEIRAFRASE} ${SEGUNDAFRASE}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = 'são'

    if (num1 !== num2) {
        saoIguais = 'não'
    }

    return `Os números ${num1} e ${num2} ${saoIguais} iguais.`
}

function criaSegundaFrase(num1, num2) {
    const SOMA = num1 + num2
    let comparaDez = 'menor'
    let comparaVinte = 'menor'

    if (SOMA > 10) {
        comparaDez = 'maior'
    }

    if (SOMA > 20) {
        comparaVinte = 'maior'
    }

    return `Sua soma é ${SOMA}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`
}

console.log(comparaNumeros(10, 2))
