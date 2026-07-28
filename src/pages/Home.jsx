import VectorImg from "../assets/Hero.png";
import LogoutImg from "../assets/Vector.png";
import TelefoneImg from "../assets/Tel.png";
import LocImg from "../assets/Loc.png";
import EmailImg from "../assets/Email.png";

export default function Home() {
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

          <button className="home-logout">
            Sair
          </button>
        </div>
      </header>




      <footer className="home-footer">
        
        <div className="telefone">
          <img 
            src={TelefoneImg} 
            alt="telefone"
            className="telefone"
           />
           
          </div>

        <div className="localizacao">
          <img 
            src={LocImg} 
            alt="localizacao"
            className="localizacao"
           />
           
          </div>

        <div className="email">
          <img 
            src={EmailImg} 
            alt="email"
            className="email"
           />
          </div>

        <p className="direitos">&copy; 2023 Lion School. Todos os direitos reservados.</p>


      </footer>
    </>
  );
}