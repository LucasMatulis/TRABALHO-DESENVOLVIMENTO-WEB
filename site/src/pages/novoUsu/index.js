import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';



function NovoUsu(){

    const [nome, setNome]= useState("")
    const [senha, setSenha]=useState("")



      async function salvarUsuario() {

        if (!nome || !senha) {
          alert('Por favor, insira seu nome ou senha.');
        } else {

            let body={
              nome:nome,
              senha:senha
            }

            let r= await axios.post('http://localhost:5000/adm', body)
            let id= r.data.id

            alert("Usuario cadastrado. Id: "+id)

            window.location.href = `/login`;
        }

      }

    
    return(
        <section className='Entrada'>
                <header className="logo">
                    <img src="/assets/images/logo.png" className="controle"/>
                    <strong>RETRO GAMES</strong>
                </header>

                <div className="Bloco1">
                    <h1 className="NovoUsuario">NOVO USUARIO</h1>
                    <div className="InsiraNome">
                        <img className="seta1" src="/assets/images/Seta.png"/>
                        <label>Insira seu nome<input type="text" value={nome} placeholder="Nome" onChange={(e)=>setNome(e.target.value)}/></label>
                    </div>
                    <div className="InsiraSenha">
                        <img className="seta2" src="/assets/images/Seta.png" />
                        <label>Insira sua Senha<input type="password" value={senha} placeholder="Senha" onChange={(e)=> setSenha(e.target.value)}/></label>
                    </div>
                    <button className="cadastrarBU" onClick={salvarUsuario}>CADASTRAR</button>
                    <Link className="entrar" to="/login">VOLTAR</Link>
                </div>
        </section>
    );
}

export default NovoUsu;