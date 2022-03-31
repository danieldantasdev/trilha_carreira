//componentes são pedaços de código que juntos formam a aplicação
//componente no React é uma função que retorna um HTML 
//tudo no React é uma função

import { Button } from './components/Button';

function App() {
    return (
        <div>
            <Button text="Botão 1"/>
            <Button text={1}/>
            <Button text={['1', '2', '3', '4']} />
            <Button />
            <Button />
        </div>
    );
}

export default App;
