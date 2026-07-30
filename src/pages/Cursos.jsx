import './index.css'


export default function Cursos() {
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

    
    </>
  )
}
