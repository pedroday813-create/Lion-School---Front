import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

// IMPORTANTE: Buscando as páginas nos arquivos novos que você criou
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Contato from './pages/Contato'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Lion School Logo" />
        </div>

        <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0' }}>
          {/* <button onClick={() => setPaginaAtual('home')}>Home</button>
          <button onClick={() => setPaginaAtual('cursos')}>Cursos</button>
          <button onClick={() => setPaginaAtual('contato')}>Contato</button> */}
        </nav>

        <main style={{ padding: '20px', textAlign: 'center' }}>
          {paginaAtual === 'home' && <Home />}
          {paginaAtual === 'cursos' && <Cursos />}
          {paginaAtual === 'contato' && <Contato />}
        </main>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
