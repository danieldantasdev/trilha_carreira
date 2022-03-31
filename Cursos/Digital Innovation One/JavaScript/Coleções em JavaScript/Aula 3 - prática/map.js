/* 
## Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usu;arios que são administradores.
*/

const GET_ADMINS = (map) => {
    let admins = []

    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }

    return admins
}

const USUARIOS = new Map()

USUARIOS.set('Daniel', 'Admin')
USUARIOS.set('Fernando', 'Admin')
USUARIOS.set('Alberto', 'Admin')
USUARIOS.set('Einstein', 'Admin')
USUARIOS.set('Natalia', 'User')

console.log(GET_ADMINS(USUARIOS))
