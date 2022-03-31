/* ## Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```
 */
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`
}

const PESSOA1 = {
    nome: 'Amelia',
    idade: 23
}

const PESSOA2 = {
    nome: 'Márcia',
    idade: 20
}

const PESSOA3 = {
    nome: 'Jonas',
    idade: 13
}

console.log(calculaIdade.call(PESSOA3, 40))
console.log(calculaIdade.apply(PESSOA2, [24]))
