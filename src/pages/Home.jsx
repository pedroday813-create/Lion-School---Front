import '../App.css'
import Footer from '../components/Footer'

import VectorImg from "../assets/hero.png";
import LogoutImg from "../assets/Vector.png";
import ComputadorImg from "../assets/comp.png";
import garotaImg from "../assets/studant.png";
import DevImg from "../assets/Dev.png";
import RedesImg from "../assets/Redes.png";

export default function Home({ setPaginaAtual }) {
  return (
    <>
      <header className="home-header">
        <div className="home-left">
          <img
            src={VectorImg}
            alt="Logo Lion School"
            className="home-logo"
          />

          <h1 className="home-title">
            Lion
            <br />
            School
          </h1>
        </div>

        <div className="home-right">
          <img
            src={LogoutImg}
            alt="Sair"
            className="logout-icon"
          />

            <a href="http://google.com.br">
          <button className="home-logout">
            Sair
          </button>
          </a>
        </div>
      </header>

    <main className="home-main">

      <div className="text">
        <h1>Escolha um <span>curso</span><br /> para gerenciar</h1>
      </div>

      <div className="computador">
        <img src={ComputadorImg} alt="Computador" className="computador-img"/>
      </div>

      <div className="garota">
        <img src={garotaImg} alt="Garota" className="garota-img"/>
      </div>

      <div className="desenvolvedor-quadro">
      </div>

      <div className="redes-quadro">
        <div className="dev redes-inner">
          <img src={RedesImg} alt="Redes" className="Redes-img"/>
          <button
            className="btn-curso"
            onClick={() => setPaginaAtual("cursos")}
            >
            Redes
          </button>
        </div>
      </div>

      <div className="dev dev-ds">
        <img src={DevImg} alt="Desenvolvedor" className="Desenvolvedor-img"/>
        <button
          className="btn-curso"
          onClick={() => setPaginaAtual("cursos")}
          >
          DS
        </button>
      </div>

    </main>

      <Footer />
    </>
  );
}
