import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default  function Edicao(){

    const [listaJogos, setListaJogos] = useState([]); 
    const [nomeJogo, setNomeJogo]=useState("");
    const [precoJogo, setPrecoJogo]=useState("")
    const [arquivo, setArquivo]=useState();
    const [termoPesquisa, setTermoPesquisa] = useState('');




        async function buscarJogo() {
            let r = await axios.get('http://20.197.242.211:5000/jogo');
            let jogos = r.data;
        
            setListaJogos(jogos);
            console.log(jogos)

    
        }

        async function atualizarJogo(item) {
          
            if (!nomeJogo && !precoJogo && !arquivo) {
                alert("Nenhuma alteração feita ou ação invalida");
                return;
            }

            const formData = new FormData();
            formData.append('capa', arquivo);

            let jogoAtualizado = {
                id: item.id,
                nomeJogo: nomeJogo.trim() || item.nome.trim(),
                precoJogo: precoJogo !== "" ? Number(precoJogo) : item.preco
            };

            if(jogoAtualizado.precoJogo<=0 || !/^\d*\.?\d{0,2}$/.test(jogoAtualizado.precoJogo)){
              alert("Preço invalido");
              return;
            }

            try {
                let r = await axios.put(`http://20.197.242.211:5000/jogo/${jogoAtualizado.id}`, jogoAtualizado);

                if (arquivo) {
                r = await axios.put(`http://20.197.242.211:5000/jogo/${jogoAtualizado.id}/capa`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                }
                setNomeJogo("");
                setPrecoJogo("");
                setArquivo(undefined);
                alert("Jogo Alterado. Id: " + item.id);
                buscarJogo();            
              } catch (error) {
                console.error("Erro ao atualizar jogo:", error);
            }
        }


          async function deletarJogo(id){

            var resultado = window.confirm("Deseja excluir o item ?");
            if (resultado == true) {

                const idInfo=id

                try {
                        let response = await axios.delete(`http://20.197.242.211:5000/jogo/${id}`);
                        alert("Jogo Deletado. Id: " + idInfo);
                        buscarJogo();                    
                      } catch (error) {
                        console.error("Erro ao deletar jogo:", error);
                        console.log(`http://20.197.242.211:5000/jogo/${id}`)
                }           
            }
                else{
                    return;
            }


          }


    
        useEffect(() => {
        
            buscarJogo();
        
        }, [])

        const handlePesquisa = (event) => {
            setTermoPesquisa(event.target.value);
          };
        
          const jogosFiltrados = listaJogos.filter((item) =>
            item.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
          );


        return (
            <section>
              <header className="cabecalho">
               
              <div className="logo">
                  <Link className="home" to="/">
                        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
                  </Link>
                  <strong>RETRO GAMES</strong>
                </div>
               
                <Link className="sairpags" to="/">
                  SAIR
                </Link>
                <Link className="cadproduto" to="/cadastro">
                  CADASTRO DE PRODUTO
                </Link>
        
                
              </header>
        
              <div>
                <input className="pesquisaEdit" type="search" placeholder="Pesquisar por nome do jogo" value={termoPesquisa} onChange={handlePesquisa}/>
                <ul>
                  {jogosFiltrados.map((item) => (
                    <li key={item.id}>
                      <div className="cadastro">
                        <div className="imagem">
                          <img src={`http://20.197.242.211:5000/${item.imagem}`} className="stock" alt="Imagem do Jogo"/>
                          <input type="file" accept="image/*" className="link" onChange={(e) => setArquivo(e.target.files[0])}/>
                        </div>
                        <div className="inputs">
                          <label htmlFor="">Inserir Nome:</label>
                          <input type="text" className="Nome" placeholder={item.nome} onChange={(e) => setNomeJogo(e.target.value)}/>
                          <label htmlFor="">Inserir Preço:</label>
                          <input type="text" className="Nome" placeholder={item.preco} onChange={(e) => setPrecoJogo(e.target.value)}/>
                          <div>
                            <button className="botao" type="button" onClick={() => atualizarJogo(item)}> EDITAR</button>
                            <button className="botao" type="button" onClick={() => deletarJogo(item.id)}>DELETAR</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        }