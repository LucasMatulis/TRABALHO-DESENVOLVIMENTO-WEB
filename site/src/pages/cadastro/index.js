import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';



function Cadastro(){

    const [selectedImage, setSelectedImage] = useState("/assets/images/branco.png");

        const handleImageSelect = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
        };


    return(
        <section className="tela">
            <header className="cabecalho">
                <Link className="sair"  to="/">SAIR</Link>
                <Link className="produto" to="/edicao">EDIÇÃO DE PRODUTO</Link>

                <div className="logo">
                    <img src='/assets/images/logo.png' className="controle"/>
                    <strong>RETRO GAMES</strong>
                </div>
            </header>

            <div>
                <h1 className="titulo">CADASTRO DE PRODUTOS</h1>

                <div className="cadastro">
                    <div className="imagem">
                    {selectedImage &&<img src={selectedImage} className="stock"/>}
                                <input type="file"  accept="image/*" className="link" onChange={handleImageSelect}/>                    
                    </div>
                    <div className="inputs">
                        <label for="">Inserir Nome:</label>
                        <input type="text" className="Nome" placeholder="Nome"/>
                        <label for="">Inserir Preço:</label>
                        <input type="text" className="Nome" placeholder="R$ 0.00"/>
                        <input className="adicionar" type="button" value="Adicionar"/>
                    </div>
                </div>
            </div>
                
        </section>
    );


}

export default Cadastro;