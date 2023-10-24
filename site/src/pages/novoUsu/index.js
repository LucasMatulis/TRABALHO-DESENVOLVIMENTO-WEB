import { Link } from 'react-router-dom';
import './index.scss';
import Logo from "./logo.png"
import Seta from "./Seta.png"


function NovoUsu(){

    
    
    return(
        <section className='Entrada'>
                <header className="logo">
                    <img src={Logo} className="controle"/>
                    <strong>RETRO GAMES</strong>
                </header>

                <div className="Bloco1">
                    <h1 className="NovoUsuario">NOVO USUARIO</h1>
                    <div className="InsiraNome">
                        <img className="seta1" src={Seta}/>
                        <label>Insira seu nome<input type="text" placeholder="Nome"/></label>
                    </div>
                    <div className="InsiraSenha">
                        <img className="seta2" src={Seta} />
                        <label>Insira sua Senha<input type="password" placeholder="Senha"/></label>
                    </div>
                    <button className="cadastrarBU">CADASTRAR</button>
                    <Link className="entrar" to="/login">VOLTAR</Link>
                </div>
        </section>
    );
}

export default NovoUsu;