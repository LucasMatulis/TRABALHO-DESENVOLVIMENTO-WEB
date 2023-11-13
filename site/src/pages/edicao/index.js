import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Edicao(){

    const [listaJogos, setListaJogos] = useState([]); 
    const [nomeJogo, setNomeJogo]=useState("");
    const [precoJogo, setPrecoJogo]=useState("")
    const [arquivo, setArquivo]=useState();



        async function buscarJogo() {
            let r = await axios.get('http://localhost:5000/jogo');
            let jogos = r.data;
        
            setListaJogos(jogos);
            console.log(jogos)

    
        }

        async function atualizarJogo(item) {
            // Verificar se pelo menos uma informação foi alterada
            if (!nomeJogo && !precoJogo && !arquivo) {
                alert("Nenhuma alteração feita");
                return;
            }

            const formData = new FormData();
            formData.append('capa', arquivo);

            let jogoAtualizado = {
                id: item.id,
                nomeJogo: nomeJogo || item.nome, // Usar o valor existente se não for fornecido um novo
                precoJogo: precoJogo !== "" ? Number(precoJogo) : item.preco, // Usar o valor existente se não for fornecido um novo
            };

            try {
                let r = await axios.put(`http://localhost:5000/jogo/${jogoAtualizado.id}`, jogoAtualizado);

                // Atualizar apenas se um novo arquivo for fornecido
                if (arquivo) {
                r = await axios.put(`http://localhost:5000/jogo/${jogoAtualizado.id}/capa`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                }

                alert("Jogo Alterado. Id: " + item.id);
                window.location.reload(false);
            } catch (error) {
                console.error("Erro ao atualizar jogo:", error);
                console.log(`http://localhost:5000/jogo/${jogoAtualizado.id}`);
            }
        }


          async function deletarJogo(id){

            var resultado = window.confirm("Deseja excluir o item ?");
            if (resultado == true) {

                const idInfo=id

                try {
                        let response = await axios.delete(`http://localhost:5000/jogo/${id}`);
                        alert("Jogo Deletado. Id: " + idInfo);
                        window.location.reload(false)
                    } catch (error) {
                        console.error("Erro ao deletar jogo:", error);
                        console.log(`http://localhost:5000/jogo/${id}`)
                }           
            }
                else{
                    return;
            }


          }


    
        useEffect(() => {
        
            buscarJogo();
        
        }, [])


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
                        <img src={`http://localhost:5000/${item.imagem}`} className="stock"/>
                        <input type="file"  accept="image/*" className="link" onChange={(e)=>setArquivo(e.target.files[0])}/>                                    
                    </div>
                    <div className="inputs">
                        <label for="">Inserir Nome:</label>
                        <input type="text" className="Nome" placeholder={item.nome} onChange={(e)=>setNomeJogo(e.target.value)} />
                        <label for="">Inserir Preço:</label>
                        <input type="text" className="Nome" placeholder={item.preco} onChange={(e)=>setPrecoJogo(e.target.value)} />
                        <div>
                            <button className="botao" type="button" onClick={() =>atualizarJogo(item)} >EDITAR</button>
                            <button className="botao" type="button" onClick={() =>deletarJogo(item.id)} >DELETAR</button>
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
