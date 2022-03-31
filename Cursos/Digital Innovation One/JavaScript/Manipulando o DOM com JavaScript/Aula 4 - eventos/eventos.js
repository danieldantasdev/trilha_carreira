// ==================== Eventos ====================
/* 
- Qualquer ação que o usuário realiza na página da web
*/

// ========== Adicionar e deletar elementos ==========
/*
 * EVENTOS DO MOUSE                    EVENTOS DE CLICK
 * mouseover (hover)                   click (1 click)
 * mouseout (mouse saindo)             dbclick (2 clicks)


* EVENTOS DE ATUALIZAÇÃO
* change
* load
 */

// ========== Acionando os eventos com eventListener==========
/* 
- Diretamente no JavaScript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação
- É uma função que escuta os eventos
*/

const BOTAO = document.getElementById('botao')

BOTAO.addEventListener('click', outraFuncao)

function mudaTexto(id) {
    id.innerHTML = 'Mudei!'
}
