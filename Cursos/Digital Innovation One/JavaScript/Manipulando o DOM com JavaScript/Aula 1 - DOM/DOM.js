// ==================== DOM ====================
/* 
- DOM = Document Object Model
- DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página

*                       DOCUMENT
*                          |
*                __________ Root element <HTML>_________________
*               |                                               |
*       ELEMENT <HEAD>                                    ELEMENT <BODY>
*               |                                               |
*       ELEMENT <TITLE>               ATTRIBUTE "href" -  ELEMENT <a>      
*               |                                               |
*       "My title"                                        "My link"

- Cada elemento é chamado de nó e cada nó pode ter filhos ou não
*/

// ========== DOM vs BOM =========
/* 
- BOM = Browser Object Model
- BOM é a árvore de dependências que existem dentro da Window, e dentro dela está o DOM
- BOM é tudo que está dentro da Window
- DOM é um dos filhos do window 

*                                WINDOW
*                                   |
*    ________________________________________________________________
*   |               |               |               |               |                                                         
*  document       history        location         screen        navigation
*/
