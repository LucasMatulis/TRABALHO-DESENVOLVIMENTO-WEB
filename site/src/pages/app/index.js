import { Link } from 'react-router-dom';
import './index.scss';
import logo from "./logo.png"

function App() {
  return (
    <section>
      <header>
        <div className="logo">
            <img src={logo} className="controle"/>
            <strong>RETRO GAMES</strong>
        </div>
        <input className="pesquisa" type="search" placeholder="DIGITE O NOME DO JOGO"/>
        <Link className="admin" to="/login">ADMIN</Link>
    </header>

    <div>
        <ul>
            <li>
                <div className="jogo">
                        <img src="https://i0.wp.com/snydercutbr.com/wp-content/uploads/2023/04/critica-super-maior-bros.png?fit=1920%2C1229&ssl=1" className="stock"/>
                        <h1 className="nome">SUPER MARIO BROS</h1>
                        <h1 className="preco">R$ 66,6</h1>
                </div>
            </li>
            <li>
                <div class="jogo">
                        <img src="https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA10713_00/2/i_87fa16819f2fc611953a37a513ab33859014ccbb79116f0ed7a2097491d96ee4/i/icon0.png" className="stock"/>
                        <h1 className="nome">MEGAMAN</h1>
                        <h1 className="preco">R$ 66,6</h1>
                </div>
            </li>
        </ul>

    </div>
    </section>
  );
}

export default App;
