import { Link, useParams } from 'react-router-dom';
import './index.scss';
import React from 'react';


function Adm(){

        const { nome }= useParams();
        


    return(
        <section>
                    <header className="logo">
                    <Link className="home" to="/">
        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
        </Link>
                        <strong>RETRO GAMES</strong>
                    </header>

                <div className="mundo">

                    <h1 className="titulo"> BEM VINDO - {nome.toUpperCase()} </h1>

                    <Link className="editar" to="/cadastro">ADICIONAR ALGUM PRODUTO</Link>
                    <Link className="adicionar" to="/edicao">EDITAR ALGUM PRODUTO</Link>
                    <Link className="voltar" to="/">SAIR</Link>

                </div>
        </section>
    );
}

export default Adm;