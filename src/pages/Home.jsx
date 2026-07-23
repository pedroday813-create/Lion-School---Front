import VectorImg from '../assets/Vector.png'

export default function Home() {
  return (
    <div className="home-header">
      <img className="home-logo" src={VectorImg} alt="Vector" />
      <h1 className="home-title">Lion <br />School</h1>
      <h1 className="home-logout">Sair</h1>
    </div>
  )
}
