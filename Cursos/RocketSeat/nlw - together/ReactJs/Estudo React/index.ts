//incluir na mensagem de boas-vindas, a cidade e UF do user

type User = {
    name: string;
    address:{
        city: string;
        uf: string;
    }
};

function showWelcomeMessage(user: User){
    return `Welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}

showWelcomeMessage({
    name: 'Daniel',
    address:{
        city:'Rio de Janeiro',
        uf:'RJ'
    }
})