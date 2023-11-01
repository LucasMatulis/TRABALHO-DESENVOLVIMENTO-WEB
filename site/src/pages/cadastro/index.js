import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';




function Cadastro(){


    const [nomeJogo, setNomeJogo]=useState("");
    const [precoJogo, setPrecoJogo]=useState("")
    const [selectedImage, setSelectedImage] = useState("/assets/images/branco.png");

        const handleImageSelect = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
        };



        async function salvarJogo() {

            if (!nomeJogo || !precoJogo) {
              alert('Por favor, insira o nome ou preco.');
            } else {
    
                let body={
                    nomeJogo:nomeJogo,
                    precoJogo:Number(precoJogo),
                    imagemJogo:selectedImage
                }
    
                let r= await axios.post('http://localhost:5000/jogo', body)
                let id= r.data.id
    
                alert("Jogo cadastrado. Id: "+id)

                setNomeJogo("")
                setPrecoJogo("")
                setSelectedImage("/assets/images/branco.png")
            }
    
          }


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
                        <input type="text" className="Nome" placeholder="Nome" value={nomeJogo} onChange={(e)=>setNomeJogo(e.target.value)}/>
                        <label for="">Inserir Preço:</label>
                        <input type="text" className="Nome" placeholder="R$ 0.00" value={precoJogo} onChange={(e)=>setPrecoJogo(e.target.value)}/>
                        <input className="adicionar" type="button" value="Adicionar" onClick={salvarJogo}/>
                    </div>
                </div>
            </div>
                
        </section>
    );


}

export default Cadastro;