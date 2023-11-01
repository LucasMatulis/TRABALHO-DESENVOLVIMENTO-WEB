import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Edicao(){

    const [listaJogos, setListaJogos] = useState([]);
    const [imagem, setImagem] = useState({});


        async function buscarJogo() {
            let r = await axios.get('http://localhost:5000/jogo');
            let jogos = r.data;
        
            setListaJogos(jogos);
            console.log(jogos)

    
        }
    
        useEffect(() => {
        
            buscarJogo();
        
        }, [])

       useEffect(() => {
        // Converter blobs de imagem em URLs de dados
        const carregarImagens = async () => {
            const jogosComImagens = await Promise.all(
                listaJogos.map(async (item) => {
                    try {
                        const imageUrl = await blobToDataURL(item.imagem);
                        return { ...item, imageUrl };
                    } catch (error) {
                        console.error('Erro ao converter Blob em URL de dados:', error);
                        return item;
                    }
                })
            );

            setListaJogos(jogosComImagens);
        };

        carregarImagens();
    }, [listaJogos]);


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
                {listaJogos.map(item=>
                <div className="cadastro" key={item.id}>
                    <div className="imagem">
                        <img src={item.imageUrl} className="stock"/>
                        <input type="file"  accept="image/*" className="link"/>                    
                    </div>
                    <div className="inputs">
                        <label for="">Inserir Nome:</label>
                        <input type="text" className="Nome" placeholder={item.nome} />
                        <label for="">Inserir Preço:</label>
                        <input type="text" className="Nome" placeholder={item.preco} />
                        <div>
                            <input className="botao" type="button" value="Editar"/>
                            <input className="botao" type="button" value="Deletar"/>
                        </div>
                    </div>
                </div>)}
            </li>
        </ul>

    </div>
        </section>
    );
}

export default Edicao
