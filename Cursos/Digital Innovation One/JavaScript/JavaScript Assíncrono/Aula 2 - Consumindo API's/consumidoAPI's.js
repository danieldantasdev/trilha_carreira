// ==================== API's ====================
/* 
- Application Programming Interface
- Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end
- Conseguimos acessar por meio ed URL's

* WEB APS       MOBILE APPS     OTHER API's

*                API's

*                Database

JSON: JavaScript Object Notation
- É muito comum que API's retornem seus dados no formato de arquivo .json, portanto precisamos tratar esses dados quando os recebemos
*/

// ========== Fetch ==========
/* 
- Consumindo API's
*/

fetch(url, options)
    .then((response) => response.json())
    .then((json) => console.log(json))
// retorna uma Promise

// Operações no banco (POST, GET, PUT, DELETE, etc)
fetch('https://youtube.com', {
    method: 'GET',
    cache: 'no-cache',
    body: JSON.stringify(data)
})
    .then((response) => response.json())
    .then((json) => console.log(json))
