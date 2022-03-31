/* ## Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */
const ALUNOS = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Victor',
        nota: 3,
        turma: '2C'
    }
]

function alunosAprovados(alunos, media) {
    let aprovados = []
    let turma = []

    for (let i = 0; i < alunos.length; i++) {
        let { nota, nome, turma } = alunos[i] //object destructuring

        if (nota >= media) {
            // aprovados.push(nome + ' - ' + turma)
            aprovados.push(` ${nome} da turma ${turma} foi aprovado `)
        } else {
            aprovados.push(` ${nome} da turma ${turma} foi reprovado`)
        }
    }

    return aprovados + turma
}

console.log(alunosAprovados(ALUNOS, 5))
