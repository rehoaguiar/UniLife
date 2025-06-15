import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Pessoa } from './Pessoa.jsx'

export function App() {
  const [contagem, setContagem] = useState(0)
  const comentario = "Sonolenta hoje!"
  const estilo = {backgroundColor: "yellow"}
  const meuNome = "Soninho dudu"
  const pessoas = [
    
    "Reinaldo",
    "Luciane",
    "Renata",
  ]

  return (
    <>
      {pessoas.map( (pessoa, indice) => <Pessoa nome={pessoa} key={indice} /> ) }
      <div>
        <Pessoa estilo={{color: "red"}} nome={meuNome} />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setContagem((parametro) => parametro + 1)}>
          Contagem: {contagem}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// export default App
