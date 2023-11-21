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
  
              let r = await axios.post('http://20.197.242.211:5000/adm', body);
              let id = r.data.id;
  
              alert("Usuário cadastrado. Id: " + id);
  
              window.location.href = `/login`;
          }
      }
  }  

      async function buscarUsuario() {
        let r = await axios.get('http://20.197.242.211:5000/adm');
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
