import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import { register } from 'swiper/element/bundle'

register();
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import {Swiper, SwiperSlide} from 'swiper/react';



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

<<<<<<< Updated upstream
        <body className='home'>
        {jogosFiltrados.map((item) => (
           <Link to={`/produto/${item.id}`}>
            <div class="slider-container" key={item.id}>
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
=======
      
      <div>
        <ul>
          {jogosFiltrados.map((item) => (
            <li key={item.id}>
              <div className="jogo">
                <img src={`http://20.197.242.211:5000/${item.imagem}`} className="stock" alt="Imagem do Jogo"/>
                <h1 className="nome">{item.nome}</h1>
                <h1 className="preco">R$ {item.preco}</h1>
              </div>
            </li>
          ))}
        </ul>
        </div>
      
      <body className='home'>
      <div class="slider-container">
        <div class="slide-content">
            <div class="card-wrapper">
                 <div class="card">
                    <div class="image-content">
                        <span class="overlay"></span>
                      <Swiper>
                        <SwiperSlide>
                         <div class="card-image">
                            <img src="/assets/images/metalslug.webp" alt="" class="card-img"/>
>>>>>>> Stashed changes
                        </div>
                        </SwiperSlide>
                        </Swiper>
                    </div>
            </div>
        </Link>
    ))}
        </body>
      
    </section>
  );
}
