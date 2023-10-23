import { Link } from 'react-router-dom';
import './index.scss';
import Logo from "./logo.png"
import Branco from "./branco.png"
import { useState } from 'react';



function Cadastro(){

    const [selectedImage, setSelectedImage] = useState(Branco);

        const handleImageSelect = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
        };


    return(
        <section>
    <header class="cabecalho">
        <Link class="sair"  to="/">SAIR</Link>
        <Link class="menu" to="/adm">MENU PRINCIPAL</Link>
        <Link class="produto" to="/edicao">EDIÇÃO DE PRODUTO</Link>

        <div class="logo">
            <img src={Logo} class="controle"/>
            <strong>RETRO GAMES</strong>
        </div>
    </header>

    <div>
        <h1 class="titulo">CADASTRO DE PRODUTOS</h1>

        <div class="cadastro">
            <div class="imagem">
            {selectedImage &&<img src={selectedImage} class="stock"/>}
                        <input type="file"  accept="image/*" class="link" onChange={handleImageSelect}/>                    
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