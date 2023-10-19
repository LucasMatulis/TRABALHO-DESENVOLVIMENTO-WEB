import { Link } from 'react-router-dom';
import './index.scss';
import Logo from "./logo.png"


function Adm(){
    return(
        <section>
                    <header class="logo">
                        <img src={Logo} class="controle"/>
                        <strong>RETRO GAMES</strong>
                    </header>

                <div class="mundo">

                    <h1 class="titulo"> BEM VINDO - PEDRO AUGUSTO </h1>

                    <Link class="editar" to="/cadastro">ADICIONAR ALGUM PRODUTO</Link>
                    <Link class="adicionar" to="/edicao">EDITAR ALGUM PRODUTO</Link>
                    <Link class="voltar" to="/">SAIR</Link>

                </div>
        </section>
    );
}

export default Adm;