import { Link,useParams } from 'react-router-dom';
import './index.scss';
import { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
export default function Produto(){

    const [jogo, setJogo]=useState([])

    const { id }= useParams();


    async function buscarJogoId(){

        let r = await axios.get(`http://20.197.242.211:5000/jogo/${id}`);
        let jogo = r.data;
        setJogo(jogo);
        console.log(jogo)
    }


    useEffect(() => {
        buscarJogoId();
      }, []);

    


    return(
        <section className="tela">
            <header className="cabecalho">
            <div className="logo">
                    <Link className="home" to="/">
                        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
                    </Link>
                    <strong>RETRO GAMES</strong>
                </div>
                <Link className="sairpags"  to="/">Voltar</Link>
                <Link className="prodplogin"  to="/login">Login</Link>
                
            </header>



            {jogo.map((item)=>(
                <div>
                <div  className="cadastro">
                   <div className="imagem">
                       <img src={`http://20.197.242.211:5000/${item.imagem}`} alt="" className="stock" />
                   </div>
                   <div className="inputs">
                       <h1 className="nameprod">{item.nome}</h1>
                       <h2 className="precooprod">R$ {item.preco}</h2>
                   </div>
                </div>
           </div>
            ))}
                
        </section>
    );

}

