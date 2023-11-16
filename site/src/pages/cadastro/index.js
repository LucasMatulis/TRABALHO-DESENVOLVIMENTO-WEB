import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import axios from 'axios';




function Cadastro(){


    const [nomeJogo, setNomeJogo]=useState("");
    const [precoJogo, setPrecoJogo]=useState("")
    const [arquivo, setArquivo]=useState(`http://20.197.242.211:5000/storage/branco.png`);




        async function salvarJogo() {

            console.log(arquivo)

            if (!nomeJogo || !precoJogo || precoJogo<=0) {
              alert('Preço ou nome invalidos.');
            } else {
    

                let body={
                    nomeJogo:nomeJogo,
                    precoJogo:Number(precoJogo)
                }

                try {
                
                let r= await axios.post('http://20.197.242.211:5000/jogo', body)
                let id= r.data.id

                if (arquivo) {
                    r = await axios.put(`http://20.197.242.211:5000/jogo/${id}/capa`, formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                }
    
    
                alert("Jogo cadastrado. Id: "+id)
                }
                    catch (error) {
                        console.error("Erro ao Criar jogo:", error);
                }

                setNomeJogo("")
                setPrecoJogo("")
                setArquivo(`http://20.197.242.211:5000/storage/branco.png`)
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
                    {arquivo &&<img src={arquivo} className="stock"/>}
                                <input type="file"  accept="image/*" className="link" onChange={(e) => setArquivo(e.target.files[0])}/>                    
                    </div>
                    <div className="inputs">
                        <label for="">Inserir Nome:</label>
                        <input type="text" className="Nome" placeholder="Nome" value={nomeJogo} onChange={(e)=>setNomeJogo(e.target.value)}/>
                        <label for="">Inserir Preço:</label>
                        <input type="text" className="Nome" placeholder="R$ 0.00" value={precoJogo} onChange={(e)=>setPrecoJogo(e.target.value)}/>
                        <input className="adicionar" type="button" value="Adicionar" onClick={salvarJogo}/>
                        <input className="adicionar" type="button" value="TESTE" onClick={alert(arquivo)}/>
                    </div>
                </div>
            </div>                
        </section>
    );


}

export default Cadastro;