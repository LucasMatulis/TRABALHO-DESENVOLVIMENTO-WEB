import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Login(){

    const [nome, setNome]= useState("")
    const [senha, setSenha]=useState("")
    const [listaUsuarios, setListaUsuarios] = useState([]);




      async function buscarUsuario() {
        let r = await axios.get('http://localhost:5000/adm');
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

           

        listaUsuarios.forEach(usuario => {

            if(usuario.nome==nome && usuario.senha==senha)
                 window.location.href = `/adm/${nome}`;
        });

    }
    }

    
    
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

export default Login;