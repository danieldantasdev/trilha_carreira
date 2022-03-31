// ==================== Assincronicidade ====================
/* 
- Assíncrono = "Que não ocorre ou não se efetiva ao memo tempo"
* Assistir aula online
- O JS roda por padrão de maneira síncrona
*/

// ========== Promises ==========
/* 
- Objeto de processamento assíncrono
- Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada

* PENDING           RESOLVED            PENDING
Promise             .then()             Promise


                    REJECTED
                    .catch()        
*/

/* 
- Uma Promise pode ter 3 estados:
. Pending
. Fulfilled
. Rejected
*/

const MY_PROMISE = new Promise((resolve, rejected) => {
    window.setTimeout(() => {
        resolve('Resolvida')
    }, 2000)
})

await MY_PROMISE.then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err) => console.log(err.message))

//Após 2 segundos, retornará o valor

// ========== Async/await ==========
/* 
- Funções assíncronas precisam dessas duas palavras chave
*/
async function RESOLVE_PROMISE() {
    const MY_PROMISE = new Promise((resolve, rejected) => {
        window.setTimeout(() => {
            resolve('Resolvida')
        }, 3000)
    })

    const RESOLVED = await MY_PROMISE.then(
        (result) => result + 'passando pelo then'
    )
        .then((result) => result + 'e agora acabou!')
        .catch((err) => console.log(err.message))
    return RESOLVED
}
