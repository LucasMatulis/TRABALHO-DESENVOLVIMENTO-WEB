import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default  function Login(){

    const [nome, setNome]= useState("")
    const [senha, setSenha]=useState("")
    const [listaUsuarios, setListaUsuarios] = useState([]);




      async function buscarUsuario() {
        let r = await axios.get('http://20.197.242.211:5000/adm');
        let usuarios = r.data;
    
        setListaUsuarios(usuarios);

    }

    useEffect(() => {
    
    buscarUsuario();
    console.log(listaUsuarios)

    }, [])



    function verificarUsuario(){

        if(!nome || !senha){
            alert("Nome ou senha vazios.")
        }
        else{

            const nomeExistente = listaUsuarios.some(usuario => usuario.nome === nome && usuario.senha === senha);
  
            if (nomeExistente) {
                window.location.href = `/adm/${nome}`;
            } else {
                alert("Nome ou senha incorretos")
            }
        }
    }

    
    
    return(
        
        <section className='Entrada'>
                <header className="logo">
                <div className="logo">
        <Link className="home" to="/">
        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
        </Link>
     
          <strong>RETRO GAMES</strong>
        </div>
                </header>
                
                <div className="Bloco1">
                    <h1 className="Login">LOGIN</h1>
                    <div className="InsiraNome">
                        <img className="seta1" src="/assets/images/Seta.png"/>
                        <label>Insira seu nome<input type="text" value={nome} placeholder="Nome" onChange={(e)=>setNome(e.target.value)}/></label>
                    </div>
                    <div className="InsiraSenha">
                        <img className="seta2" src="/assets/images/Seta.png" />
                        <label>Insira sua Senha<input type="password" value={senha} placeholder="Senha" onChange={(e)=> setSenha(e.target.value)}/></label>
                    </div>
                    <button to={nome ? `/adm/${nome}` : '/login'} className="entrar" onClick={verificarUsuario}>ENTRAR</button>
                    <Link to="/novoUsu" className="cadastrar">CADASTRAR</Link>
                    
                </div>
        </section>
    );
}

