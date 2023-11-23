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
        <div class="faixa6">
            <div >
                <p > <img src="/assets/images/brasil.jpg" className='loguinho' />  Português Brasil</p>
                <div>
                    <a href="https://www.facebook.com/discord/" target="_blank"><img src="/assets/images/facebook.png" className='loguinho'/></a>
                    <a href="https://www.youtube.com/discord/" target="_blank"><img src="/assets/images/youtube.png" className='loguinho' /></a>
                    <a href="https://www.tiktok.com/@discord" target="_blank"><img src="/assets/images/tiktok.png"className='loguinho' /></a>
                </div>
            </div>
            <div>
                <p >Produto</p>
                <a href="https://twitter.com/PlayStation" target="_blank">Twitter</a>
                <a href="https://discordstatus.com/" target="_blank">Status</a>
                <a href="https://discord.com/application-directory" target="_blank">Diretório de Apps</a>
            </div>

            <div>
                <p >Empresa</p>
                <a href="https://discord.com/company" target="_blank">Sobre</a>
                <a href="https://discord.com/jobs" target="_blank">Empregos</a>
                <a href="https://discord.com/branding" target="_blank">Marca</a>
                <a href="https://discord.com/newsroom" target="_blank">Sala de imprensa</a>
            </div>

            <div>
                <p>Recursos</p>
                <a href="https://support.discord.com/hc/pt-br" target="_blank">Suporte</a>
                <a href="https://discord.com/safetycenter" target="_blank">Segurança</a>
                <a href="https://discord.com/blog" target="_blank">Blog</a>
                <a href="https://feedback.discord.com/" target="_blank">Comentários</a>
                <a href="https://discord.com/build" target="_blank">Developers</a>
                <a href="https://discord.com/community" target="_blank">Community</a>
            </div>

            <div>
                <p >Política</p>
                <a href="https://discord.com/terms" target="_blank">Termos</a>
                <a href="https://discord.com/privacy" target="_blank">Privacidade</a>
                <a href="https://discord.com/" target="_blank">Configurações de cookies</a>
                <a href="https://discord.com/guidelines" target="_blank">Diretrizes</a>
                <a href="https://discord.com/acknowledgements" target="_blank">Reconhecimentos</a>
                <a href="https://discord.com/licenses" target="_blank">Licenças</a>
                <a href="https://discord.com/company-information" target="_blank">Informações da empresa</a>
            </div>
    </div>

    </section>
  );
}
