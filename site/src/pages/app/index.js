import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [listaJogos, setListaJogos] = useState([]);
  const [termoPesquisa, setTermoPesquisa] = useState('');

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
          <img src="/assets/images/logo.png" className="controle" alt="Logo" />
          <strong>RETRO GAMES</strong>
        </div>
        <input className="pesquisa" type="search" placeholder="DIGITE O NOME DO JOGO" value={termoPesquisa} onChange={handlePesquisa}/>
        <Link className="admin" to="/login">
          ADMIN
        </Link>
      </header>

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
    </section>
  );
}

export default App;
