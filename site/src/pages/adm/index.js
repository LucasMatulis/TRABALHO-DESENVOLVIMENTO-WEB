import { Link } from 'react-router-dom';
import './index.scss';
import Logo from "./logo.png"


function Adm(){
    return(
        <section>
                    <header className="logo">
                        <img src={Logo} className="controle"/>
                        <strong>RETRO GAMES</strong>
                    </header>

                <div className="mundo">

                    <h1 className="titulo"> BEM VINDO - PEDRO AUGUSTO </h1>

                    <Link className="editar" to="/cadastro">ADICIONAR ALGUM PRODUTO</Link>
                    <Link className="adicionar" to="/edicao">EDITAR ALGUM PRODUTO</Link>
                    <Link className="voltar" to="/">SAIR</Link>

                </div>
        </section>
    );
}

export default Adm;