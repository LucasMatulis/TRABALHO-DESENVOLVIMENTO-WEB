import { Link } from 'react-router-dom';
import './index.scss';

function Cadastro(){

    return(
        <section>
    <header class="cabecalho">
        <Link class="sair"  to="/">SAIR</Link>
        <Link class="menu" to="/adm">MENU PRINCIPAL</Link>
        <Link class="produto" to="/edicao">EDIÇÃO DE PRODUTO</Link>

        <div class="logo">
            <img src="../../../public/assets/images/logo.png" class="controle"/>
            <strong>RETRO GAMES</strong>
        </div>
    </header>

    <div>
        <h1 class="titulo">CADASTRO DE PRODUTOS</h1>

        <div class="cadastro">
            <div class="imagem">
                <img id="imagemPreview" src="../../../public/assets/images/branco.png" class="stock"/>
                <input type="file"  accept="image/*" name="img" id="img" class="link"/>
            </div>
            <div class="inputs">
                <label for="">Inserir Nome:</label>
                <input type="text" class="Nome" placeholder="Nome"/>
                <label for="">Inserir Preço:</label>
                <input type="text" class="Nome" placeholder="R$ 0.00"/>
                <input class="adicionar" type="button" value="Adicionar"/>
            </div>
        </div>
    </div>
        
        </section>
    );


}

export default Cadastro;