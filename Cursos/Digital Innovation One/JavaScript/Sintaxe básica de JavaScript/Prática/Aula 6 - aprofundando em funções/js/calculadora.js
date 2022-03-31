function calculate() {
    const OPERATION = Number(
        prompt(
            'Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'
        )
    )

    if (!OPERATION || OPERATION >= 7) {
        alert('Erro - operação inválida')
        calculate()
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'))
        let n2 = Number(prompt('Insira o segundo valor:'))
        let resultado

        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos')
        } else {
            function soma() {
                resultado = n1 + n2
                alert(`A soma entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperação()
            }

            function subtração() {
                resultado = n1 - n2
                alert(`A subtração entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperação()
            }

            function multiplicação() {
                resultado = n1 * n2
                alert(
                    `A multiplicação entre ${n1} e ${n2} é igual a ${resultado}`
                )
                novaOperação()
            }

            function divisãoReal() {
                resultado = n1 / n2
                alert(
                    `A divisão real entre ${n1} e ${n2} é igual a ${resultado}`
                )
                novaOperação()
            }

            function divisãoInteira() {
                resultado = n1 % n2
                alert(
                    `O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`
                )
                novaOperação()
            }

            function potenciação() {
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperação()
            }

            function novaOperação() {
                let opção = prompt(
                    'Deseja realizar outra operação?\n 1 - Sim\n 2 - Não'
                )

                if (opção == 1) {
                    calculate()
                } else if (opção == 2) {
                    alert('Até mais...')
                } else {
                    alert('Digite um opção válida!')
                    novaOperação()
                }
            }
        }

        // if (OPERATION == 1) {
        //     soma()
        // } else if (OPERATION == 2) {
        //     subtração()
        // } else if (OPERATION == 3) {
        //     multiplicação()
        // } else if (OPERATION == 4) {
        //     divisãoReal()
        // } else if (OPERATION == 5) {
        //     divisãoInteira()
        // } else if (OPERATION == 6) {
        //     potenciação()
        // }
        switch (OPERATION) {
            case 1:
                soma()
                break
            case 2:
                subtração()
                break
            case 3:
                multiplicação()
                break
            case 4:
                divisãoReal()
                break
            case 5:
                divisãoInteira()
                break
            case 6:
                potenciação()
                break

            default:
                break
        }
    }
}

calculate()
