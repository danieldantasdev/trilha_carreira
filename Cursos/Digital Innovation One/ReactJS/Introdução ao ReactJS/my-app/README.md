# Introdução ao ReactJS

## Aula 1 - introdução

### Conhecendo a tecnologia ReactJS

#### Requisitos básicos

-   JavaScript
-   CSS
-   HTML
-   Editor de texto
-   NPM

### História e conceitos

> "Uma biblioteca JavaScript para criar interfaces de usuários - ReactJS" **Versão atual 16.8.6**

-   Criado em `2001` por `Jordan Walke` no Facebook, baseado em XHP, um framework para criação de HTML no PHP

**Surgiu no mural de notícias do Facebook, decidiram criar porque o feed estava crescendo e estavam com problemas de manutenção, escalabilidade, renderização**

-   `2012` utilizada no instagram
-   `2013` anúncio para liberação OpenSource na JSConf US
-   `2015` ReactNative - Mobile
-   `2015` UWP (Universal Windows Platform) - Desktop

-   React é uma biblioteca e não um framework como o AngularJS

**Biblioteca geralmente já possui funcionalidades já pré-definidas, não se pode sair muito, porque o ReactJS é JavaScript**

**Framework é uma caixinha fechada de funcionalidades**

-   A principal função é a criação de interface para o usuário
-   Trabalhar com JavaScript de forma mais fácil
-   O ecossistema é muito grande, pode ser considerado uma desvantagem, por isso devemos analisar quais ferramentas é viável em determinada aplicação
-   ReactJs foca em ser modular, ou seja, podemos encaixar em qualquer projeto, mesmo que em aplicações com tecnologias antigas
-   ReactJS é uma linguagem declarativa, ou seja, não está muito preocupada com os passos, mas sim na interface do usuário

**ReactJS pode ser utilizado em qualquer lugar e é baseado em componentes - são pedacinhos**

-   The New York Times, Netflix, Luizalabs, Instagram, Nubank

### Configuração

-   React Create App
-   React Scripts
-   Task Runners e Bundler Sizers
-   Pode rodar com alguma CDN

### Criando projeto ReactJS

-   npm init
-   npm install --save react@17.0.2 react-dom@17.0.2 react-scripts@3.0.1

Ou

-   npx create-react-app my-app
-   cd my-app
-   npm start

### JSX

-   const element = <h1>Hello World</h1>;

**Nem HTML, nem String**

-   React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes
-   Não é obrigatório utilizar o JSX
-   Sintax Suggar para React.createElement
-   O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação posso entender o código, com por exemplo o BABEL

### Renderização

-   Renderização de elementos
-   React DOM = utiliza o virtual DOM
-   Nós Raiz
-   React pensa em como a interface deve estar a cada momento ao invés de altera-lá com o tempo, o que faz ter ganho de performance e evita uma série de erros

### Componentes e Props

-   Componentes são peças de lego analogamente
-   Props são parâmetros

    **Vamos ver Função e Classe; Props; Composição e Extração de Componentes**

`No final das contas não existem Classes em JS, o que há realmente são protótipos`

### Estado e ciclo de vida

-   Inicialização
-   Montagem
-   Atualização
-   Desmontagem

-   `Inicialização` (props e estate)

-   `Montagem` (componentWillMount) -> (render) -> (componentDidMount)

-   `Atualização` (componentWillReceiveProps) -> (shouldComponentUpdate) -> (_SIM_) OU (_NÃO_) -> (componentWillUpdate) -> (render) -> (componentDidUpdate)

(shouldComponentUpdate) -> (_SIM_) OU (_NÃO_) -> (componentWillUpdate) -> (render) -> (componentDidUpdate)

-   `Desmontagem` (componentWillUnmount)

**nenhum componente pai ou filho devem saber se outro componente possui estado ou não**

**O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é feito via props**

### Ecossistema

-   React Router
-   Redux
-   Material UI
-   Ant-Design
-   Storybook
-   Gatsby
-   Jest
-   React i18n Next

## Aula 2 - Integrando o webpack ao ReactJS

### Webpack

-   É um module bundler (um empacotador de módulos para aplicações JS)
-   Gerar bundler que será utilizado no HTML, em ES5
-   [Webpack](https://webpack.js.org/)

### Suporte do Webpack

-   Fontes
-   HTML
-   CSS
-   JavaScript
-   Imagens
-   Plugins

### Configurando o Webpack

**Principais conceitos**

`Entry` - Utilizando grafo, o Webpack precisa de um ponto de entrada para buscar todos os módulos e dependências

`Output` - É para determinar quais são os bundler que o Webpack irá emitir

`Loaders` - É para permitir que o Webpack gerencie arquivos que não JavaScript

`Plugins` - Plugins podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais

`Mode` - Utilizados para abordagem de configuração zero. É possível configurar módulos como **production**, **development** ou **none**

### criação do arquivo Webpack

-   npm i -D webpack webpack-cli
-   "build": "webpack --mode production"
-   npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

### EsLint

-   npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch

## Aula 3 - Conceitos aplicados aos tipos de dados e condições da biblioteca

> Em ReactJS, podemos criar componentes distintos que encapsulam o comportamento necessário, então podemos renderizar apenas alguns dos elementos dependendo do estado sda sua aplicação

[ReactJS](https://pt-br.reactjs.org/docs/rendering-elements.html)

### Renderização condicional

-   Variável de Elementos
-   If inline com Operador Lógico &&
-   If-Else inline com Operador Condicional
-   Evitando que um componente seja renderizado

### Renderização condicional

-   Renderizando múltiplos Componentes
-   Componentes de lista básica
-   Chaves
-   Extraindo Componentes com Chaves
-   Chaves devem ser únicas apenas entre elementos irmãos

### Manipulando eventos

-   Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos DOM

**Eventos em React são nomeados usando o CamelCase**
**Com o JSX precisamos passar uma função como manipulador de eventos ao invés de um texto**

### Pensando do jeito React

-   Comece com um mock
-   Separa a UI em hierarquia de componentes
-   Crie uma versão estática em React
-   Identifique a representação mínima (mas completa) do State da UI
-   Identifique onde o State deve ficar
-   Adicione o fluxo de dados inverso

### Comandos

-   npm run build
-   no json
    "homepage": "https://SeuGitHub.github.io/NomeDoPro...",
    script:
    "publicar": "npm run build && ./node_modules/.bin/gh-pages -d build"

-   npm install --save-dev gh-pages
-   npm run publicar

[Deploy](https://create-react-app.dev/docs/deployment/)
