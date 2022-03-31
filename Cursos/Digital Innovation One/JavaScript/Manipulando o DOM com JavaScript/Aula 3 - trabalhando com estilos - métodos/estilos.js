// ==================== Classes ====================
/* 
- Estrutura HTML = Tags, ids e classes
*/

const MEU_ELEMENTO = document.getElementById('meu-elemento')

MEU_ELEMENTO.classList.add('novo-estilo')
//adiciona a classe 'novo-estilo'

MEU_ELEMENTO.classList.remove('classe')
//adiciona a classe 'classe'

MEU_ELEMENTO.classList.toggle('dark-mode')
//adiciona a classe 'dark-mode' caso ela não faça parte da lista e remove caso ela faça

// ========== Colocando estilos CSS direto em JS ==========
const DOM = document.getElementsByTagName('p')[0]

DOM.style.color = 'blue'
DOM.style.fontSize = '2rem'

MEU_ELEMENTO.style.color = 'red'
MEU_ELEMENTO.style.fontSize = '3rem'

document.getElementsByTagName('h2')[0].style.color = 'green'
// ========== Adicionar e deletar elementos ==========
/*
 * MÉTODOS                                      DESCRIÇÃO
 * document.createElement(element)              Cria um novo elemento HTML
 * document.removeChild(element)                Remove um elemento
 * document.appendChild(element)                Adiciona um elemento
 * document.replaceChild(new, old)              Substitui um elemento
 */
