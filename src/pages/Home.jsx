import VectorImg from "../assets/Hero.png";
import LogoutImg from "../assets/Vector.png";

export default function Home() {
  return (
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
  );
}