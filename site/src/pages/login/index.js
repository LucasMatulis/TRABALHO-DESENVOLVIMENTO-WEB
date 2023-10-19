import { Link } from 'react-router-dom';
import './index.scss';
import Logo from "./logo.png"


function Login(){

    
    
    return(
        <section className='Entrada'>
                <header className="logo">
                    <img src={Logo} className="controle"/>
                    <strong>RETRO GAMES</strong>
                </header>

                <div className="Bloco1">
                    <h1 className="Login">LOGIN</h1>
                    <div className="InsiraNome">
                        <img className="seta1" src="../../../public/assets/images/Seta.png"/>
                        <label>Insira seu nome<input type="text" placeholder="Nome"/></label>
                    </div>
                    <div className="InsiraSenha">
                        <img className="seta2" src="../../../public/assets/images/Seta.png" />
                        <label>Insira sua Senha<input type="password" placeholder="Senha"/></label>
                    </div>
                    <Link to="/adm" className="entrar">ENTRAR</Link>
                </div>
        </section>
    );
}

export default Login;