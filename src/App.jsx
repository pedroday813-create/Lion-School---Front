import { useState } from 'react'
import './App.css'

// IMPORTANTE: Buscando as páginas nos arquivos novos que você criou
import Home from './pages/Home'
import Cursos from './pages/Cursos'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')

  return (
    <>
      <section id="center">


        <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0' }}>
          <button onClick={() => setPaginaAtual('home')}>Home</button>
          <button onClick={() => setPaginaAtual('cursos')}>Cursos</button>
        </nav>

        <main style={{ padding: '20px', textAlign: 'center' }}>
          {paginaAtual === 'home' && <Home setPaginaAtual={setPaginaAtual} />}
          {paginaAtual === 'cursos' && <Cursos setPaginaAtual={setPaginaAtual} />}
        </main>
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
