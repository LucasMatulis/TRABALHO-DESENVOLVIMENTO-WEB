import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Edicao(){

    const [listaJogos, setListaJogos] = useState([]); 
    const [nomeJogo, setNomeJogo]=useState("");
    const [precoJogo, setPrecoJogo]=useState("")
    const [selectedImage, setSelectedImage] = useState("/assets/images/branco.png");


        const handleImageSelect = (e) => {
            const file = e.target.files[0];
            setSelectedImage(URL.createObjectURL(file));
        };

        async function buscarJogo() {
            let r = await axios.get('http://localhost:5000/jogo');
            let jogos = r.data;
        
            setListaJogos(jogos);
            console.log(jogos)

    
        }

        async function atualizarJogo(item) {

            if(!nomeJogo & !precoJogo & !selectedImage){
                alert("Nenhuma alteração feita")
            }

            let jogoAtualizado = {
              id: item.id,
              nomeJogo: nomeJogo, 
              precoJogo: Number(precoJogo),
              imagemJogo:selectedImage
            
            };
          
            try {
              let response = await axios.put(`http://localhost:5000/jogo/${jogoAtualizado.id}`, jogoAtualizado);
              alert("Jogo Alterado. Id: " + item.id);
              window.location.reload(false)
            } catch (error) {
              console.error("Erro ao atualizar jogo:", error);
              console.log(`http://localhost:5000/jogo/${jogoAtualizado.id}`)
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
                    {selectedImage &&<img src={selectedImage} className="stock"/>}
                                <input type="file"  accept="image/*" className="link" onChange={handleImageSelect}/>                   
                        <img src={item.image} className="stock"/>
                        <input type="file"  accept="image/*" className="link"/>                    
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
