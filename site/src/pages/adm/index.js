import { Link, useParams } from 'react-router-dom';
import './index.scss';
import React from 'react';


export default  function Adm(){

        const { nome }= useParams();
        


    return(
        <section>
                    <header className="logo">
                    <div className="logo">
        <Link className="linkApp" to="/">
        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
        </Link>
     
          <strong>RETRO GAMES</strong>
        </div>
                    </header>

                <div className="mundo">

                    <h1 className="tituloadm"> BEM VINDO - {nome.toUpperCase()} </h1>

                    <Link className="editaradm" to="/cadastro">ADICIONAR ALGUM PRODUTO</Link>
                    <Link className="adicionaradm" to="/edicao">EDITAR ALGUM PRODUTO</Link>
                    <Link className="voltaradm" to="/">SAIR</Link>

                </div>
        </section>
    );
}

