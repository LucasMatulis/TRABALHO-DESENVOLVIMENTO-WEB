import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';


function Login(){

    const [nome, setNome]= useState("")

    const handleNomeChange = (event) => {
      setNome(event.target.value);
    };

    const handleEntrarClick = () => {
        if (!nome) {
          alert('Por favor, insira seu nome.');
        } 
      };
  

    
    
    return(
        <section className='Entrada'>
                <header className="logo">
                    <img src="/assets/images/logo.png" className="controle"/>
                    <strong>RETRO GAMES</strong>
                </header>

                <div className="Bloco1">
                    <h1 className="Login">LOGIN</h1>
                    <div className="InsiraNome">
                        <img className="seta1" src="/assets/images/Seta.png"/>
                        <label>Insira seu nome<input type="text" placeholder="Nome" id='Nome' value={nome} onChange={handleNomeChange}/></label>
                    </div>
                    <div className="InsiraSenha">
                        <img className="seta2" src="/assets/images/Seta.png" />
                        <label>Insira sua Senha<input type="password" placeholder="Senha"/></label>
                    </div>
                    <Link to={nome ? `/adm/${nome}` : '/login'} className="entrar" onClick={handleEntrarClick}>ENTRAR</Link>
                    <Link to="/novoUsu" className="cadastrar">CADASTRAR</Link>
                </div>
        </section>
    );
}

export default Login;