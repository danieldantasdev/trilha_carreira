// ==================== Manipulando o DOM ====================
/* 
- Estrutura HTML = Tags, ids e classes
*/
document.getElementById('titulo')
//selecionando o h1

/* 
<h1 id="titulo">Minha página</h1>
*/

document.getElementsByTagName('li')[0]
//selecionando o li

/* 
<li><a href="#">Projeto 1</a></li>
<li><a href="#">Projeto 2</a></li>
<li><a href="#">Projeto 3</a></li>
*/

document.getElementsByClassName('textos')
//selecionando a section com a classe textos

/* 
<section class="textos">
    <h2>Meus projetos</h2>
        <ul>
            <li><a href="#">Projeto 1</a></li>
            <li><a href="#">Projeto 2</a></li>
            <li><a href="#">Projeto 3</a></li>
        </ul>
</section>
*/

document.querySelectorAll('.primeira-classe .segunda-classe')
/* 
<section class="primeira-classe segunda-classe">
    <h2>Meus projetos</h2>
        <ul>
            <li class="opcao"><a href="#">Projeto 1</a></li>
            <li class="opcao"><a href="#">Projeto 2</a></li>
            <li class="opcao"><a href="#">Projeto 3</a></li>
        </ul>
</section>
*/

document.querySelectorAll('li .opcao')
/* 
<li class="opcao"><a href="#">Projeto 1</a></li>
<li class="opcao"><a href="#">Projeto 2</a></li>
<li class="opcao"><a href="#">Projeto 3</a></li>
*/

// ========== Adicionar e deletar elementos ==========
/*
 * MÉTODOS                                      DESCRIÇÃO
 * document.createElement(element)              Cria um novo elemento HTML
 * document.removeChild(element)                Remove um elemento
 * document.appendChild(element)                Adiciona um elemento
 * document.replaceChild(new, old)              Substitui um elemento
 */
