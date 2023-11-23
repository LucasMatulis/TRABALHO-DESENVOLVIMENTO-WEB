import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';


export default  function App() {
  const [listaJogos, setListaJogos] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');

  async function buscarJogo() {
    let r = await axios.get('http://localhost:5000/jogo');
    let jogos = r.data;
    setListaJogos(jogos);
  }

  useEffect(() => {
    buscarJogo();

    
  }, []);

  const handlePesquisa = (event) => {
    setTermoPesquisa(event.target.value);
  };

  const jogosFiltrados = listaJogos.filter((item) =>
    item.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );


  return (
    <section>
      <header>
        <div className="logo">
        <Link className="linkApp" to="/">
        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
        </Link>
     
          <strong>RETRO GAMES</strong>
        </div>
        <Link className="admin" to="/login">
          ADMIN
        </Link>
      </header>

      <div className='landingPage'>
        <div className='landingText'>
          <h1>RETRO GAMES</h1>
          <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
          <span>O melhor site para compra de Jogos Retro</span>
        </div>
        <img className='landingImage' src='/assets/images/landingImage.jpg'/>
      </div>

      <input className="pesquisa" type="search" placeholder="DIGITE O NOME DO JOGO" value={termoPesquisa} onChange={handlePesquisa}/>
      <body className="home">
                  {jogosFiltrados.map((item) => (
                    <Link to={`/produto/${item.id}`} className="game-item">
                      <div class="slider-container" key={item.id} >                    
                              <div class="slide-content">
                                  <div class="card-wrapper">
                                      <div class="card">
                                          <div class="image-content">
                                              <span class="overlay"></span>
                                              <div class="card-image">
                                                  <img src={`http://localhost:5000/${item.imagem}`} alt="" class="card-img" />
                                              </div>
                                          </div>

                                          <div class="card-content">
                                              <h1 class="name">{item.nome}</h1>
                                              <h2 class="precoo">R$ {item.preco}</h2>
                                          </div>
                                    
                                      </div>
                                  </div>
                              </div>
                    </div>
                  </Link>
              ))}
        </body>
    </section>
  );
}
