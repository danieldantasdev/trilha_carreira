import logo from './logo.svg'
import './App.css'
import './assets/style.css'
import SocialMedia from './components/SocialMedia'

function App() {
    return (
        <div className="App">
            {/* Header */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World! Esse é meu primeiro projeto em ReactJS</p>
                <SocialMedia></SocialMedia>
            </header>
            {/* Section */}
            <section className="App-section">
                <div className="App-section-item">
                    <div className="App-section-icons">
                        <i className="icon-html-five"></i>
                        <i className="icon-css3"></i>
                        <i className="icon-git"></i>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
