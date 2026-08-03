import TelefoneImg from '../assets/Tel.png'
import LocImg from '../assets/Loc.png'
import EmailImg from '../assets/email.png'
import SocialImg from '../assets/social-media.png'

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-left">
        <div className="telefone">
          <img src={TelefoneImg} alt="Telefone" />
          <p>(11) 4774-4700</p>
        </div>

        <div className="email">
          <img src={EmailImg} alt="Email" />
          <p>lionschool@gmail.com</p>
        </div>

        <div className="localizacao">
          <img src={LocImg} alt="Localização" />
          <p>Rua tcc, 211, Centro, Jandira</p>
        </div>
      </div>

      <p className="direitos">Copyright © 2026 | Fernando Leonid</p>

      <div className="social">
        <img src={SocialImg} alt="Redes Sociais" />
      </div>
    </footer>
  )
}
