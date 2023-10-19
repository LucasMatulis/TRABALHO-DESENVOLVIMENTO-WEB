import { Link } from 'react-router-dom';
import './index.scss';

function Edicao(){

    return(
        <section>
             <header class="cabecalho">
             <Link class="sair"  to="/">SAIR</Link>
            <Link class="menu" to="/adm">MENU PRINCIPAL</Link>
            <Link class="produto" to="/cadastro">CADASTRO DE PRODUTO</Link>

        <div class="logo">
            <img src="../../../public/assets/images/logo.png" class="controle"/>
            <strong>RETRO GAMES</strong>
        </div>
    </header>

    <div>

        <input class="pesquisa" type="search" placeholder="Digite o nome do jogo"/>

        <ul>
            <li>
                <div class="cadastro">
                    <div class="imagem">
                        <img id="imagemPreview" src="../../../public/assets/images/branco.png" class="stock"/>
                        <input type="file"  accept="image/*" name="img" id="img" class="link"/>                    
                    </div>
                    <div class="inputs">
                        <label for="">Inserir Nome:</label>
                        <input type="text" class="Nome" placeholder="Nome"/>
                        <label for="">Inserir Preço:</label>
                        <input type="text" class="Nome" placeholder="R$0.00"/>
                        <div>
                            <input class="botao" type="button" value="Editar"/>
                            <input class="botao" type="button" value="Deletar"/>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>
        </section>
    );
}

export default Edicao