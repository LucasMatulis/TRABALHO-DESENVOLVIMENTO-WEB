import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect, useRef  } from 'react';
import axios from 'axios';


function App() {
  const [listaJogos, setListaJogos] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const swiperRef = useRef(null);

  async function buscarJogo() {
    let r = await axios.get('http://20.197.242.211:5000/jogo');
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
        <Link className="home" to="/">
        <figure class="logo_contain"> <img src="/assets/images/logo.png" className="controle" alt="Logo" routerLink="/"/> </figure>
        </Link>
     
          <strong>RETRO GAMES</strong>
        </div>
        <input className="pesquisa" type="search" placeholder="DIGITE O NOME DO JOGO" value={termoPesquisa} onChange={handlePesquisa}/>
        <Link className="admin" to="/login">
          ADMIN
        </Link>
      </header>

        <body className='home'>
        {jogosFiltrados.map((item) => (
              <div class="slider-container">
              <div class="slide-content">
                  <div class="card-wrapper">
                      <div class="card">
                          <div class="image-content">
                              <span class="overlay"></span>

                              <div class="card-image">
                                  <img src={`http://20.197.242.211:5000/${item.imagem}`} alt="" class="card-img"/>
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
          
        ))}
        </body>
      
    </section>
  );
}

export default App;
