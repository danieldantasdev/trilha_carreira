import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//DOM = document object model, representação do HTML através de um objeto Javascript
//render = renderiza alguma coisa dentro do index.html
//HTML dentro do JavaScript, se chama JSX (JavaScript XML)
//HTML dentro do TypeScript, se chama TSX (TypeScript XML)

ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);

