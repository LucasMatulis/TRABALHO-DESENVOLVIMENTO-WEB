import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';


function Edicao(){

    const [selectedImage, setSelectedImage] = useState("/assets/images/branco.png");

        const handleImageSelect = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
            console.log(selectedImage);
        };

    const nome="Mario Kart";
    const preco=99.9


    return(
        <section>
             <header className="cabecalho">
             <Link className="sair"  to="/">SAIR</Link>
            <Link className="produto" to="/cadastro">CADASTRO DE PRODUTO</Link>

        <div className="logo">
            <img src="/assets/images/logo.png" className="controle"/>
            <strong>RETRO GAMES</strong>
        </div>
    </header>

    <div>
        <ul>
            <li>
                <div className="cadastro">
                    <div className="imagem">
                        {selectedImage &&<img src={selectedImage} className="stock"/>}
                        <input type="file"  accept="image/*" className="link" onChange={handleImageSelect}/>                    
                    </div>
                    <div className="inputs">
                        <label for="">Inserir Nome:</label>
                        <input type="text" className="Nome" placeholder={nome}/>
                        <label for="">Inserir Preço:</label>
                        <input type="text" className="Nome" placeholder={preco}/>
                        <div>
                            <input className="botao" type="button" value="Editar"/>
                            <input className="botao" type="button" value="Deletar"/>
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