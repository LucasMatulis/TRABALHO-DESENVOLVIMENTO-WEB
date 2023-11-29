import { Link } from 'react-router-dom';
import './index.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';



export default  function NovoUsu(){

    const [nome, setNome]= useState("")
    const [senha, setSenha]=useState("")
    const [listaUsuarios, setListaUsuarios] = useState([]);




    async function salvarUsuario() {
      if (!nome || !senha) {
          alert('Por favor, insira seu nome ou senha.');
      } else {
          const nomeExistente = listaUsuarios.some(usuario => usuario.nome === nome);
  
          if (nomeExistente) {
              alert('Nome de usuário já está em uso. Por favor, escolha outro nome.');
          } else {
              let body = {
                  nome: nome.trim(),
                  senha: senha
              }
  
              let r = await axios.post('http://localhost:5000/adm', body);
              let id = r.data.id;
  
              alert("Usuário cadastrado. Id: " + id);
  
              window.location.href = `/login`;
          }
      }
  }  

      async function buscarUsuario() {
        let r = await axios.get('http://localhost:5000/adm');
        let usuarios = r.data;
    
        setListaUsuarios(usuarios);

    }

        useEffect(() => {
        
        buscarUsuario();
        console.log(listaUsuarios)

        }, [])


    
    return(
        <section className='Entrada'>
                <header className="logo">
                <div className="logo">
        <Link className="linkApp" to="/">
        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
        </Link>
     
          <strong className='strongbranca'>RETRO GAMES</strong>
        </div>
                </header>

                <div className="Bloco1">
                    <h1 className="NovoUsuario1">NOVO </h1>
                    <h1 className="NovoUsuario2">USUARIO</h1>
                    <div className="InsiraNome">
                        
                        <label className='novousus'><input className= 'novous' type="text" value={nome} placeholder="Nome" onChange={(e)=>setNome(e.target.value)}/></label>
                    </div>
                    <div className="InsiraSenha">
                       
                        <label className='novousus'><input className= 'novous' type="password" value={senha} placeholder="Senha" onChange={(e)=> setSenha(e.target.value)}/></label>
                    </div>
                    <button className="cadastrarBU" onClick={salvarUsuario}>CADASTRAR</button>
                    <Link className="entrarnu" to="/login">VOLTAR</Link>
                </div>
        </section>
    );
}
